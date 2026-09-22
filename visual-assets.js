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

  decorateMapPins();

  const previousRenderTribe = renderTribe;
  renderTribe = function (key) {
    previousRenderTribe(key);
    requestAnimationFrame(() => decorateClanCards(key));
  };

  const previousRenderDossier = renderDossier;
  renderDossier = function (tribeKey, clanKey) {
    previousRenderDossier(tribeKey, clanKey);
    requestAnimationFrame(() => decorateDossier(tribeKey, clanKey));
  };

  try {
    const progress = JSON.parse(localStorage.getItem('ishkara_progress'));
    if (progress?.tribe && progress?.clan && tribes[progress.tribe]?.clans?.[progress.clan]) {
      requestAnimationFrame(() => decorateDossier(progress.tribe, progress.clan));
    }
  } catch (_) {}
})();
