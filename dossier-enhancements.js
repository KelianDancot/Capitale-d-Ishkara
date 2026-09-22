(() => {
  const classIcons = {
    'Artificier': 'img/img-classe/Artificier.png',
    'Barbare': 'img/img-classe/Barbare.png',
    'Barde': 'img/img-classe/Barde.png',
    'Clerc': 'img/img-classe/clerc.png',
    'Druide': 'img/img-classe/Druide.png',
    'Ensorceleur': 'img/img-classe/ensorceleur.png',
    'Guerrier': 'img/img-classe/Guerrier.png',
    'Magicien': 'img/img-classe/Magicien.png',
    'Moine': 'img/img-classe/Moine.png',
    'Occultiste': 'img/img-classe/Occultiste.png',
    'Paladin': 'img/img-classe/Paladin.png',
    'Roublard': 'img/img-classe/Roublard.png',
    'Rôdeur': 'img/img-classe/Rôdeur.png'
  };

  const recommendedClasses = {
    iiskraal: {
      strategist: ['Roublard', 'Magicien', 'Artificier', 'Rôdeur', 'Guerrier'],
      champion: ['Paladin', 'Guerrier', 'Barbare', 'Clerc', 'Rôdeur']
    },
    roncepignon: {
      druid: ['Druide', 'Barde', 'Clerc', 'Rôdeur', 'Moine'],
      artisans: ['Roublard', 'Rôdeur', 'Artificier', 'Guerrier', 'Magicien']
    },
    croafond: {
      sleeper: ['Rôdeur', 'Druide', 'Moine', 'Guerrier', 'Clerc'],
      priest: ['Clerc', 'Occultiste', 'Paladin', 'Roublard', 'Druide']
    }
  };

  const bullywugGuide = `
    <strong>Création Bullywug sur AideDD :</strong>
    choisis <strong>Triton</strong> comme base, puis remplace ses traits raciaux sur la fiche par ceux du Bullywug.
    Garde une répartition de caractéristiques moderne : <strong>+2/+1</strong> ou <strong>+1/+1/+1</strong> au choix, et ignore le +2 Constitution / +1 Sagesse proposé par la page de référence.
    <span class="bullywug-traits">Traits à reporter : taille M ; vitesse 20 ft et nage 40 ft ; respiration air/eau ; communication d'idées simples avec les amphibiens ; avantage en Discrétion dans les terrains marécageux ; saut en longueur 20 ft et en hauteur 10 ft sans élan ; morsure 1d4 + Force ; langues Commun et Bullywug.</span>
    <a href="https://www.dandwiki.com/wiki/Bullywug_(5e_Race)" target="_blank" rel="noopener noreferrer">Voir la référence Bullywug</a>.`;

  function ensureBullywugGuidance() {
    ['sleeper', 'priest'].forEach(clanKey => {
      const rules = tribes?.croafond?.clans?.[clanKey]?.rules;
      if (!rules || rules.some(rule => String(rule).includes('Création Bullywug sur AideDD'))) return;
      rules.push(bullywugGuide);
    });
  }

  function decorateBullywugGuidance(tribeKey) {
    if (tribeKey !== 'croafond') return;
    const list = document.getElementById('build-rules');
    if (!list) return;

    let item = [...list.querySelectorAll('li')].find(li => li.textContent.includes('Création Bullywug sur AideDD'));
    if (!item) {
      item = document.createElement('li');
      item.innerHTML = bullywugGuide;
      list.append(item);
    }
    item.classList.add('bullywug-guide');
  }

  function decorateClassRecommendations(tribeKey, clanKey) {
    const recosSection = document.querySelector('.build-grid section:nth-child(2)');
    if (!recosSection) return;

    recosSection.querySelector('.class-icon-strip')?.remove();
    const classes = recommendedClasses[tribeKey]?.[clanKey] || [];
    if (!classes.length) return;

    const strip = document.createElement('div');
    strip.className = 'class-icon-strip';
    strip.setAttribute('aria-label', 'Classes recommandées');
    strip.innerHTML = classes.map(className => {
      const src = classIcons[className];
      if (!src) return '';
      return `
        <div class="class-icon-chip" title="${className}">
          <img src="${encodeURI(src)}" alt="Icône ${className}">
          <span>${className}</span>
        </div>`;
    }).join('');

    const heading = recosSection.querySelector('h3');
    if (heading) heading.insertAdjacentElement('afterend', strip);
    else recosSection.prepend(strip);
  }

  function decorateDossierExtras(tribeKey, clanKey) {
    decorateClassRecommendations(tribeKey, clanKey);
    decorateBullywugGuidance(tribeKey);
  }

  ensureBullywugGuidance();

  const previousRenderDossier = renderDossier;
  renderDossier = function (tribeKey, clanKey) {
    previousRenderDossier(tribeKey, clanKey);
    requestAnimationFrame(() => decorateDossierExtras(tribeKey, clanKey));
  };

  try {
    const progress = JSON.parse(localStorage.getItem('ishkara_progress'));
    if (progress?.tribe && progress?.clan && tribes[progress.tribe]?.clans?.[progress.clan]) {
      requestAnimationFrame(() => decorateDossierExtras(progress.tribe, progress.clan));
    }
  } catch (_) {}
})();