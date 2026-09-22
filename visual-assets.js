(() => {
  const tribeVisuals = {
    iiskraal: [
      'img/Habitants/LizardmanPetit.png',
      'img/Habitants/LizardmanGrand.png'
    ],
    roncepignon: [
      'img/Habitants/Druide.png',
      'img/Habitants/GnomeProf.png'
    ],
    croafond: [
      'img/Habitants/CrapeauPetit.png',
      'img/Habitants/CreapeauGrand.png'
    ]
  };

  const chiefVisuals = {
    iiskraal: {
      strategist: 'img/Chefs/PetitChef.jpg',
      champion: 'img/Chefs/ChefCroco.jpg'
    },
    roncepignon: {
      druid: 'img/Chefs/ChefChampi.png',
      artisans: 'img/Chefs/ChefProf.webp'
    },
    croafond: {
      sleeper: 'img/Chefs/Crapaud Dormant.jpg',
      priest: 'img/Chefs/Prêtre de Glog-Mor.jpg'
    }
  };

  function decorateMapPins() {
    Object.entries(tribeVisuals).forEach(([tribeKey, images]) => {
      const stack = document.querySelector(`.tribe-pin[data-tribe="${tribeKey}"] .portrait-stack`);
      if (!stack) return;
      stack.innerHTML = images.map((src, index) =>
        `<img src="${encodeURI(src)}" alt="" class="map-character map-character-${index + 1}">`
      ).join('');
    });
  }

  function decorateClanCards(tribeKey) {
    const cards = [...document.querySelectorAll('#clan-grid .clan-card')];
    const clanKeys = Object.keys(tribes[tribeKey]?.clans || {});

    cards.forEach((card, index) => {
      const clanKey = clanKeys[index];
      const src = chiefVisuals[tribeKey]?.[clanKey];
      if (!src || card.querySelector('.clan-visual')) return;

      const visual = document.createElement('div');
      visual.className = 'clan-visual';
      visual.innerHTML = `<img src="${encodeURI(src)}" alt="Portrait de ${tribes[tribeKey].clans[clanKey].leader}">`;
      card.prepend(visual);
    });
  }

  function decorateDossier(tribeKey, clanKey) {
    const src = chiefVisuals[tribeKey]?.[clanKey];
    const sigil = document.getElementById('leader-sigil');
    if (!src || !sigil) return;
    const leader = tribes[tribeKey]?.clans?.[clanKey]?.leader || 'Chef de tribu';
    sigil.innerHTML = `<img src="${encodeURI(src)}" alt="Portrait de ${leader}">`;
  }

  function ensureTribeHistoryButton() {
    const actions = document.querySelector('.top-actions');
    const synopsis = document.getElementById('lore-button');
    if (!actions || !synopsis) return null;

    let button = document.getElementById('tribe-history-button');
    if (!button) {
      button = document.createElement('button');
      button.id = 'tribe-history-button';
      button.type = 'button';
      button.className = 'ghost-button tribe-history-button';
      button.hidden = true;
      button.innerHTML = '<span class="tribe-history-pulse" aria-hidden="true"></span><span class="tribe-history-label">Histoire</span>';
      actions.insertBefore(button, synopsis);
      button.addEventListener('click', () => {
        if (!state.tribe || !tribes[state.tribe]) return;
        const tribe = tribes[state.tribe];
        openInfo({
          kicker: 'Mémoire tribale',
          title: `Histoire de ${tribe.name}`,
          body: tribe.lore,
        });
      });
    }
    return button;
  }

  function syncTribeHistoryButton(screenSelector) {
    const button = ensureTribeHistoryButton();
    if (!button) return;
    const visible = Boolean(state.tribe && (screenSelector === '#tribe-screen' || screenSelector === '#dossier-screen'));
    button.hidden = !visible;
    if (visible) {
      button.querySelector('.tribe-history-label').textContent = `Histoire de ${tribes[state.tribe].name}`;
    }
  }

  function loadPointsOfInterest() {
    if (!document.querySelector('link[href="poi.css"]')) {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'poi.css';
      document.head.append(stylesheet);
    }

    if (!document.querySelector('script[src="poi.js"]')) {
      const script = document.createElement('script');
      script.src = 'poi.js';
      script.defer = true;
      document.body.append(script);
    }
  }

  decorateMapPins();
  ensureTribeHistoryButton();
  loadPointsOfInterest();

  const previousShowScreen = showScreen;
  showScreen = function (selector) {
    previousShowScreen(selector);
    syncTribeHistoryButton(selector);
  };

  const previousRenderTribe = renderTribe;
  renderTribe = function (key) {
    previousRenderTribe(key);
    syncTribeHistoryButton('#tribe-screen');
    requestAnimationFrame(() => decorateClanCards(key));
  };

  const previousRenderDossier = renderDossier;
  renderDossier = function (tribeKey, clanKey) {
    previousRenderDossier(tribeKey, clanKey);
    syncTribeHistoryButton('#dossier-screen');
    requestAnimationFrame(() => decorateDossier(tribeKey, clanKey));
  };

  try {
    const progress = JSON.parse(localStorage.getItem('ishkara_progress'));
    if (progress?.tribe && progress?.clan && tribes[progress.tribe]?.clans?.[progress.clan]) {
      state.tribe = progress.tribe;
      syncTribeHistoryButton('#dossier-screen');
      requestAnimationFrame(() => decorateDossier(progress.tribe, progress.clan));
    }
  } catch (_) {}
})();
