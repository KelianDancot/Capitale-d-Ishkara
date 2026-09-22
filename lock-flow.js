(() => {
  const STORAGE_KEY = 'ishkara_progress';

  function readProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (_) {
      return null;
    }
  }

  function writeTribeLock(tribeKey) {
    const current = readProgress();
    if (current?.tribe === tribeKey) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ tribe: tribeKey, clan: null, v: 2 }));
  }

  const saved = readProgress();
  let lockedTribe = saved?.tribe && tribes[saved.tribe] ? saved.tribe : null;
  let lockedClan = lockedTribe && saved?.clan && tribes[lockedTribe]?.clans[saved.clan] ? saved.clan : null;

  if (lockedTribe) {
    state.tribe = lockedTribe;
    if (lockedClan) state.clan = lockedClan;
    document.getElementById('welcome-tutorial')?.classList.add('dismissed');
  }

  function applyTribeLocks() {
    $$('.tribe-pin').forEach(pin => {
      const isBlocked = Boolean(lockedTribe && pin.dataset.tribe !== lockedTribe);
      const isChosen = Boolean(lockedTribe && pin.dataset.tribe === lockedTribe);
      pin.disabled = isBlocked;
      pin.classList.toggle('is-locked', isBlocked);
      pin.classList.toggle('is-chosen', isChosen);
      pin.setAttribute('aria-disabled', String(isBlocked));
      if (isBlocked) {
        pin.title = 'Ton appartenance est déjà scellée.';
      } else if (isChosen) {
        pin.title = 'Ton peuple — cliquer pour relire ses informations.';
      } else {
        pin.removeAttribute('title');
      }
    });
  }

  function applyClanLocks() {
    if (!lockedTribe || !lockedClan) return;
    const clanKeys = Object.keys(tribes[lockedTribe].clans);
    const cards = [...document.querySelectorAll('#clan-grid .clan-card')];

    cards.forEach((card, index) => {
      const clanKey = clanKeys[index];
      const oldButton = card.querySelector('button');
      if (!oldButton || !clanKey) return;

      const button = oldButton.cloneNode(true);
      oldButton.replaceWith(button);

      if (clanKey === lockedClan) {
        card.classList.add('is-chosen-clan');
        button.disabled = false;
        button.textContent = 'Voir mon dossier';
        button.addEventListener('click', () => renderDossier(lockedTribe, lockedClan));
      } else {
        card.classList.add('is-locked-clan');
        button.disabled = true;
        button.textContent = 'Voie désormais scellée';
        button.title = 'Seul le code du maître du jeu peut briser ce choix.';
      }
    });
  }

  function ensureNavigation() {
    const tribeScreen = document.getElementById('tribe-screen');
    const dossierScreen = document.getElementById('dossier-screen');

    if (tribeScreen && !tribeScreen.querySelector('.flow-back')) {
      const back = document.createElement('button');
      back.type = 'button';
      back.className = 'flow-back ghost-button';
      back.innerHTML = '<span aria-hidden="true">←</span> Carte d’Ishkara';
      back.addEventListener('click', () => {
        document.body.classList.remove('immersed');
        showScreen('#map-screen');
        applyTribeLocks();
      });
      tribeScreen.prepend(back);
    }

    if (dossierScreen && !dossierScreen.querySelector('.flow-back')) {
      const back = document.createElement('button');
      back.type = 'button';
      back.className = 'flow-back ghost-button';
      back.innerHTML = '<span aria-hidden="true">←</span> Ma tribu';
      back.addEventListener('click', () => {
        if (lockedTribe) renderTribe(lockedTribe);
      });
      dossierScreen.prepend(back);
    }
  }

  const originalOpenTribePublic = openTribePublic;
  openTribePublic = function (key) {
    if (lockedTribe && key !== lockedTribe) return;

    if (!lockedTribe) {
      originalOpenTribePublic(key);
      return;
    }

    state.tribe = lockedTribe;
    const tribe = tribes[lockedTribe];
    openInfo({
      kicker: 'Ton peuple d’Ishkara',
      title: tribe.name,
      body: tribe.public,
    }, false);

    const actions = document.getElementById('info-actions');
    const button = document.createElement('button');
    button.className = 'primary-button';
    button.type = 'button';
    button.textContent = lockedClan ? 'Revoir ma tribu' : 'Retourner auprès des miens';
    button.addEventListener('click', () => {
      document.getElementById('info-dialog').close();
      playImmersionTransition(() => renderTribe(lockedTribe));
    });
    actions.append(button);
  };

  const originalRenderTribe = renderTribe;
  renderTribe = function (key) {
    if (lockedTribe && key !== lockedTribe) return;

    if (!lockedTribe) {
      lockedTribe = key;
      state.tribe = key;
      writeTribeLock(key);
    }

    originalRenderTribe(lockedTribe);
    state.tribe = lockedTribe;
    state.clan = lockedClan;
    ensureNavigation();
    applyTribeLocks();
    applyClanLocks();
  };

  const originalRenderDossier = renderDossier;
  renderDossier = function (tribeKey, clanKey) {
    if (lockedTribe && tribeKey !== lockedTribe) return;
    if (lockedClan && clanKey !== lockedClan) return;

    lockedTribe = tribeKey;
    lockedClan = clanKey;
    state.tribe = tribeKey;
    state.clan = clanKey;
    originalRenderDossier(tribeKey, clanKey);
    ensureNavigation();
    applyTribeLocks();
  };

  // Le moteur principal enregistre le choix juste avant d'ouvrir le dossier.
  // On resynchronise donc le verrou au premier rendu et après chaque retour.
  document.getElementById('confirm-choice')?.addEventListener('click', () => {
    const pending = state.pendingClan;
    if (!pending || !state.tribe) return;
    lockedTribe = state.tribe;
    lockedClan = pending;
  }, true);

  ensureNavigation();
  applyTribeLocks();
  applyClanLocks();
})();