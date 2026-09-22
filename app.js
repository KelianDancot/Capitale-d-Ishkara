const state = {
  tribe: null,
  clan: null,
  pendingClan: null,
};

const ACCESS_HASHES = {
  iiskraal: 'a4b27be9c599825667dc7e1fc6dd779bd90865227f6b183763a9940fceaa6f4f',
  roncepignon: 'd5265d00496a9a5fab5d876b0423bc39fb35bb1a2e6cb51de88ff9c856599596',
  croafond: '3325b44253daceabd0ee3dc6613982ffc65c4251127fbd8a6b2b1ef0027dbb05',
};
const RESET_HASH = '2c36a5b65fb6803d3a88bc455de01f3aee5b3cbc1d1837fb485854e9cbfbc346';

const lore = {
  casino: {
    kicker: 'Lieu neutre',
    title: 'Le Casino Échoué',
    body: `<p>Un ancien navire échoué au cœur de la jungle, reconverti en lieu de jeux, d’échanges et de rencontres.</p><p>On y croise des habitants des trois villages, des voyageurs égarés et des créatures intelligentes de la jungle. Sa neutralité en fait l’un des rares endroits où l’on peut parler sans entrer immédiatement sur le territoire d’un clan.</p>`,
  },
  brume: {
    kicker: 'Menace connue',
    title: 'La brume d’Yrn’Kaaz',
    body: `<p>À la frontière de la jungle, les arbres dépérissent et les animaux quittent certaines zones. Les routes naturelles deviennent moins sûres, tandis que des éclaireurs rapportent parfois des silhouettes dans la brume.</p><p>Personne ici ne prétend savoir exactement ce qui avance avec elle. Tout le monde sait seulement qu’elle avance.</p>`,
  },
  rivieres: {
    kicker: 'Repère familier',
    title: 'Les voies d’eau d’Ishkara',
    body: `<p>Les rivières, marais et passages humides font partie des véritables routes d’Ishkara. Les habitants savent les lire comme d’autres lisent une chaussée : profondeur, traces, végétation et sons indiquent souvent davantage qu’un panneau.</p><p>Selon ton peuple, l’eau peut être une route, une défense, une réserve ou un territoire sacré.</p>`,
  },
};

const tribes = {
  iiskraal: {
    name: 'Iiskraal',
    subtitle: 'Une société où la discipline, l’efficacité et la valeur martiale se disputent le droit de guider les autres.',
    public: `<p>Iiskraal donne l’image d’un peuple capable de se structurer vite et de tenir sa position lorsque la jungle devient hostile. Sa réputation repose autant sur la stratégie que sur la force.</p><p>Deux visions y coexistent : celle du <strong>Petit Chef</strong>, qui croit à l’organisation et au contrôle, et celle du <strong>Champion de Sobek</strong>, qui juge d’abord les actes, le courage et l’honneur.</p>`,
    lore: `<p>Tu as grandi parmi des gens qui respectent les plans solides, les capacités utiles et ceux qui restent debout quand la situation dégénère. La faiblesse n’est pas nécessairement méprisée, mais elle doit être comprise, compensée ou protégée.</p><p>À Iiskraal, les désaccords importants ne portent pas tant sur la nécessité de survivre que sur <em>la manière de le faire</em> : contrôler la situation ou mériter de la dominer.</p>`,
    clans: {
      strategist: {
        label: 'La voie du Petit Chef',
        title: 'Stratégie et contrôle',
        values: 'Préparation · renseignement · influence',
        summary: 'Tu considères qu’un bon champion gagne avant même que l’affrontement commence : en comprenant les autres, en anticipant et en gardant plusieurs coups d’avance.',
        leader: 'Le Petit Chef',
        role: 'Architecte politique d’Iiskraal',
        sigil: 'PC',
        quote: 'Observe d’abord. Décide ensuite. Et lorsque les autres comprennent le jeu, assure-toi qu’il soit déjà terminé.',
        directiveTitle: 'Deviens indispensable',
        directive: 'Lors de la rencontre à venir, représente Iiskraal comme la faction la plus fiable, la plus lucide et la mieux préparée. Étudie les autres champions, repère leurs failles et évite de donner aux étrangers une raison de douter de notre capacité à gouverner.',
        privateInfo: 'Le Petit Chef préfère les résultats propres aux démonstrations inutiles. Il valorise la manipulation, le sabotage discret, la négociation et l’analyse bien davantage qu’un meurtre qui attirerait l’attention.',
        rules: [
          'Niveau 7.',
          'Race recommandée : Homme-lézard / Lizardfolk, ou équivalent validé par le MJ.',
          'Ton personnage doit être assez compétent pour être présenté comme champion ou spécialiste d’Iiskraal.',
          'Prévois une raison personnelle de croire à l’ordre, à la préparation ou à la supériorité d’une stratégie bien construite.'
        ],
        recos: [
          'Classes : Roublard, Magicien, Artificier, Rôdeur ou Guerrier tactique.',
          'Historiques : Espion, Soldat, Artisan de guilde, Sage ou Criminel repenti.',
          'Compétences utiles : Investigation, Perspicacité, Tromperie, Perception, Discrétion.',
          'Un personnage très social ou très cérébral fonctionne particulièrement bien.'
        ]
      },
      champion: {
        label: 'La voie du Champion de Sobek',
        title: 'Honneur et jugement',
        values: 'Force · protection · mérite',
        summary: 'Tu crois que la légitimité se gagne par les actes. Un allié digne mérite d’être protégé ; une corruption assumée mérite d’être brisée.',
        leader: 'Le Champion de Sobek',
        role: 'Figure martiale et religieuse d’Iiskraal',
        sigil: 'SO',
        quote: 'La puissance sans jugement n’est qu’une bête affamée. La peur sans action n’est qu’une tombe ouverte.',
        directiveTitle: 'Juge par les actes',
        directive: 'Présente Iiskraal comme une force capable de protéger sans ramper. Respecte ceux qui prouvent leur valeur, refuse la lâcheté gratuite et interviens lorsque quelque chose menace clairement l’équilibre ou l’intégrité des tiens.',
        privateInfo: 'Ton chef n’exige pas que tu déclenches les conflits. Au contraire, il attend que tu sois assez fort pour ne pas en avoir besoin. Mais face à une corruption évidente, l’inaction serait une faute.',
        rules: [
          'Niveau 7.',
          'Race recommandée : Homme-lézard / Lizardfolk, ou équivalent validé par le MJ.',
          'Ton personnage doit pouvoir être reconnu comme combattant, protecteur ou représentant de valeur.',
          'Définis une limite morale claire que ton personnage ne franchira pas.'
        ],
        recos: [
          'Classes : Paladin, Guerrier, Barbare, Clerc, Rôdeur.',
          'Historiques : Soldat, Acolyte, Garde, Héros du peuple.',
          'Compétences utiles : Athlétisme, Intimidation, Perspicacité, Survie, Religion.',
          'Une présence martiale forte avec un vrai code personnel est idéale.'
        ]
      }
    }
  },
  roncepignon: {
    name: 'Roncepignon',
    subtitle: 'Une communauté où l’harmonie, les spores et les défenses patientes valent parfois mieux qu’une armée.',
    public: `<p>Roncepignon privilégie les solutions qui évitent les pertes inutiles. Ses habitants savent que survivre dans la jungle demande autant de coopération que de prudence.</p><p>Deux tendances s’y distinguent : le <strong>Druide</strong>, partisan d’une harmonie presque absolue, et les <strong>Artisans Défensifs</strong>, plus froids et pragmatiques lorsqu’il faut choisir un allié ou contenir une menace.</p>`,
    lore: `<p>Ton peuple sait observer les cycles, les réactions du vivant et les changements subtils dans l’environnement. Les spores sont un outil, une protection et parfois une langue que les étrangers comprennent mal.</p><p>À Roncepignon, la question n’est pas de savoir s’il faut éviter une guerre. La vraie question est : jusqu’où peut-on aller pour l’éviter sans devenir soi-même vulnérable ?</p>`,
    clans: {
      druid: {
        label: 'La voie du Druide',
        title: 'Harmonie absolue',
        values: 'Médiation · vivant · retenue',
        summary: 'Tu cherches à maintenir le groupe entier debout. Les conflits sont des symptômes à comprendre avant de devenir des blessures irréparables.',
        leader: 'Le Druide',
        role: 'Voix spirituelle de Roncepignon',
        sigil: 'DR',
        quote: 'Une branche seule casse. Une forêt plie, se parle et repousse.',
        directiveTitle: 'Préserve les liens',
        directive: 'Lors de ce qui se prépare, empêche les représentants d’Ishkara de transformer leurs différences en guerre ouverte. Favorise le dialogue, la ruse et les solutions qui permettent à chacun de repartir vivant et encore capable de parler aux autres.',
        privateInfo: 'Le Druide soupçonne que les tensions futures profiteront surtout à ceux qui souhaitent voir les villages divisés. Il ne t’envoie pas pour gagner contre les autres, mais pour empêcher Ishkara de perdre contre elle-même.',
        rules: [
          'Niveau 7.',
          'Race recommandée : Gnome ou Halfelin lié à Roncepignon.',
          'Ton personnage doit avoir une raison crédible d’être choisi comme médiateur, guide ou protecteur.',
          'Évite un concept dont la première réponse à tout problème serait le meurtre.'
        ],
        recos: [
          'Classes : Druide, Barde, Clerc, Rôdeur, Moine.',
          'Historiques : Ermite, Sage, Héros du peuple, Guide, Artisan.',
          'Compétences utiles : Perspicacité, Médecine, Nature, Persuasion, Survie.',
          'Les sorts de contrôle, d’apaisement ou d’entrave sont très adaptés.'
        ]
      },
      artisans: {
        label: 'La voie des Artisans Défensifs',
        title: 'Pragmatisme défensif',
        values: 'Contrôle · toxines · alliances utiles',
        summary: 'Tu crois à la coopération, mais pas à l’aveuglement. Une alliance vaut par ce qu’elle protège et une menace doit parfois être neutralisée avant de pouvoir négocier.',
        leader: 'Les Artisans Défensifs',
        role: 'Cercle de spécialistes et de protecteurs',
        sigil: 'AD',
        quote: 'La meilleure défense n’est pas un mur. C’est la certitude que l’ennemi n’atteindra jamais la porte.',
        directiveTitle: 'Protège sans gaspiller',
        directive: 'Évalue les autres représentants avec sang-froid. Recherche les alliances utiles, évite les pertes inutiles et sois prêt à neutraliser proprement une menace si elle devient impossible à contenir autrement.',
        privateInfo: 'Les Artisans se méfient particulièrement des forces incontrôlables et des démonstrations religieuses qui pourraient dégénérer. Ils préfèrent l’incapacitation, les toxines non létales et le contrôle du terrain à la brutalité.',
        rules: [
          'Niveau 7.',
          'Race recommandée : Gnome ou Halfelin lié à Roncepignon.',
          'Ton personnage doit savoir fabriquer, analyser, piéger, soigner ou contrôler son environnement.',
          'Prévois au moins une méthode non létale pour mettre fin à un affrontement.'
        ],
        recos: [
          'Classes : Artificier, Roublard, Druide, Rôdeur, Magicien.',
          'Historiques : Artisan de guilde, Sage, Criminel, Soldat, Ermite.',
          'Compétences utiles : Nature, Investigation, Escamotage, Médecine, Perception.',
          'Poisons, pièges, entraves et contrôle de zone correspondent très bien à cette voie.'
        ]
      }
    }
  },
  croafond: {
    name: 'Croafond',
    subtitle: 'Dans les marais, la patience du vieux pouvoir affronte la ferveur de ceux qui veulent imposer une nouvelle force.',
    public: `<p>Croafond vit au rythme d’un environnement que beaucoup d’étrangers trouvent hostile. Ses habitants valorisent la vigilance, l’adaptation et la capacité à réagir vite lorsque le marais change.</p><p>Le village est traversé par deux influences : le <strong>Crapaud Dormant</strong>, vieux défenseur de l’équilibre, et le <strong>Prêtre de Glog-Mor</strong>, qui croit que la puissance et le sacrifice peuvent assurer un avenir plus grand à son peuple.</p>`,
    lore: `<p>Tu sais qu’à Croafond, le silence n’est pas de la faiblesse. Observer avant d’agir peut sauver une vie. Mais une partie du village estime désormais que cette patience ressemble trop à de l’immobilisme.</p><p>Le vieux pouvoir veut éviter une guerre. La ferveur montante veut prouver que Croafond ne doit plus se contenter de survivre dans l’ombre des autres.</p>`,
    clans: {
      sleeper: {
        label: 'La voie du Crapaud Dormant',
        title: 'Équilibre fragile',
        values: 'Observation · défense · stabilité',
        summary: 'Tu privilégies la survie de la jungle et des tiens à la gloire. La violence n’est acceptable que lorsqu’elle protège réellement quelque chose.',
        leader: 'Le Crapaud Dormant',
        role: 'Ancienne autorité de Croafond',
        sigil: 'CD',
        quote: 'Le marais ne crie pas pour prouver sa force. Il attend que l’imprudent fasse un pas de trop.',
        directiveTitle: 'Empêche la rupture',
        directive: 'Va écouter ce que préparent les autres et assure-toi que les tensions entre villages ne deviennent pas irréversibles. Protège ceux qui ne peuvent pas se défendre et n’ouvre jamais un conflit que tu peux encore empêcher.',
        privateInfo: 'Le Crapaud Dormant n’a pas besoin que Croafond triomphe avec panache. Il a besoin que Croafond existe encore après les décisions qui approchent, avec assez d’alliés pour ne pas être isolé.',
        rules: [
          'Niveau 7.',
          'Race recommandée : Brutacien / peuple amphibien de Croafond selon les règles du MJ.',
          'Ton personnage doit être à l’aise dans les marais et capable de protéger ou d’observer.',
          'Donne-lui une raison personnelle de craindre une guerre entre les villages.'
        ],
        recos: [
          'Classes : Rôdeur, Druide, Moine, Guerrier, Clerc.',
          'Historiques : Guide, Ermite, Soldat, Héros du peuple.',
          'Compétences utiles : Survie, Perception, Discrétion, Nature, Perspicacité.',
          'Mobilité, réaction défensive et contrôle de terrain sont très cohérents.'
        ]
      },
      priest: {
        label: 'La voie du Prêtre de Glog-Mor',
        title: 'Sacrifice et pouvoir',
        values: 'Ferveur · ambition · intimidation',
        summary: 'Tu refuses que Croafond reste une puissance que l’on consulte seulement quand le marais devient dangereux. La peur peut être un langage politique comme un autre.',
        leader: 'Le Prêtre de Glog-Mor',
        role: 'Voix montante du culte de Glog-Mor',
        sigil: 'GM',
        quote: 'Tout pouvoir exige un prix. Les faibles paient sans choisir. Les forts décident qui règle la dette.',
        directiveTitle: 'Fais respecter Croafond',
        directive: 'Montre que Croafond n’est ni un territoire à contourner ni un peuple que l’on peut ignorer. Inspire le respect, garde tes véritables intentions pour toi et saisis toute occasion de renforcer l’influence de ton dieu et de ton village.',
        privateInfo: 'Le Prêtre valorise les actes symboliques, la peur bien utilisée et les engagements irréversibles. Il attend de toi de l’ambition, mais pas une stupidité qui te ferait démasquer ou neutraliser avant d’avoir servi à quoi que ce soit.',
        rules: [
          'Niveau 7.',
          'Race recommandée : Brutacien / peuple amphibien de Croafond selon les règles du MJ.',
          'Ton personnage doit accepter une relation forte à Glog-Mor, qu’elle soit sincère, intéressée ou obsessionnelle.',
          'Ton concept doit pouvoir agir dans l’ombre au lieu de provoquer tout le monde immédiatement.'
        ],
        recos: [
          'Classes : Clerc, Occultiste, Paladin sombre, Roublard, Druide orienté corruption.',
          'Historiques : Acolyte, Charlatan, Soldat, Criminel, Ermite.',
          'Compétences utiles : Religion, Tromperie, Intimidation, Discrétion, Perspicacité.',
          'Un personnage social, inquiétant et patient sera plus efficace qu’un simple fanatique suicidaire.'
        ]
      }
    }
  }
};

const worldLore = {
  kicker: 'Ce que tout champion sait',
  title: 'Ishkara avant la rencontre',
  body: `<img src="Ishkara.png" alt="Carte d’Ishkara"><p>La brume d’Yrn’Kaaz avance lentement sur la jungle. Les arbres proches de certaines frontières dépérissent, les animaux se déplacent et plusieurs voies naturelles sont devenues plus dangereuses.</p><p>Les puissances voisines s’intéressent davantage à Ishkara. Des rumeurs parlent d’émissaires, de discussions à venir et d’un besoin urgent de coordination entre les villages. Ton chef t’a demandé de te tenir prêt à être reçu comme champion ou représentant.</p><p>Tu ne connais pas encore la nature exacte de ce qui sera proposé. Tu sais seulement que les décisions à venir pourraient changer durablement la place de ton village dans la jungle.</p>`
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const screens = ['#map-screen', '#tribe-screen', '#dossier-screen'];

function normalizeCode(value) {
  return value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(normalizeCode(value));
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function showScreen(selector) {
  screens.forEach(id => $(id).classList.toggle('active', id === selector));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openInfo(data, withAccess = false) {
  $('#info-kicker').textContent = data.kicker || 'Ishkara';
  $('#info-title').textContent = data.title;
  $('#info-body').innerHTML = data.body;
  const actions = $('#info-actions');
  actions.innerHTML = '';
  if (withAccess) {
    const button = document.createElement('button');
    button.className = 'primary-button';
    button.textContent = 'Je sais déjà cela · m’immerger';
    button.addEventListener('click', () => {
      $('#info-dialog').close();
      $('#tribe-code').value = '';
      $('#code-error').textContent = '';
      $('#code-dialog').showModal();
      setTimeout(() => $('#tribe-code').focus(), 50);
    });
    actions.append(button);
  }
  $('#info-dialog').showModal();
}

function openTribePublic(key) {
  state.tribe = key;
  const tribe = tribes[key];
  openInfo({
    kicker: 'Peuple d’Ishkara',
    title: tribe.name,
    body: tribe.public,
  }, true);
}

function renderTribe(key) {
  const tribe = tribes[key];
  state.tribe = key;
  document.body.classList.add('immersed');
  $('#jungle-video').play().catch(() => {});
  $('#tribe-title').textContent = tribe.name;
  $('#tribe-subtitle').textContent = tribe.subtitle;
  $('#tribe-lore').innerHTML = tribe.lore;
  const grid = $('#clan-grid');
  grid.innerHTML = '';
  Object.entries(tribe.clans).forEach(([clanKey, clan]) => {
    const card = document.createElement('article');
    card.className = 'clan-card';
    card.innerHTML = `
      <span class="panel-label">${clan.label}</span>
      <h3>${clan.title}</h3>
      <p class="clan-values">${clan.values}</p>
      <p>${clan.summary}</p>
      <button class="primary-button" type="button">Choisir cette voie</button>
    `;
    card.querySelector('button').addEventListener('click', () => askClanChoice(clanKey));
    grid.append(card);
  });
  showScreen('#tribe-screen');
}

function askClanChoice(clanKey) {
  const clan = tribes[state.tribe].clans[clanKey];
  state.pendingClan = clanKey;
  $('#confirm-title').textContent = `Suivre ${clan.leader} ?`;
  $('#confirm-copy').textContent = 'Ce choix sera enregistré sur cet appareil et déterminera les informations personnelles de ton personnage. Tu ne pourras pas revenir au choix précédent sans le code du maître du jeu.';
  $('#confirm-dialog').showModal();
}

function persistChoice(tribeKey, clanKey) {
  localStorage.setItem('ishkara_progress', JSON.stringify({ tribe: tribeKey, clan: clanKey, v: 1 }));
}

function renderDossier(tribeKey, clanKey) {
  const tribe = tribes[tribeKey];
  const clan = tribe.clans[clanKey];
  state.tribe = tribeKey;
  state.clan = clanKey;
  document.body.classList.add('immersed');
  $('#jungle-video').play().catch(() => {});
  $('#leader-sigil').textContent = clan.sigil;
  $('#leader-name').textContent = clan.leader;
  $('#leader-role').textContent = clan.role;
  $('#leader-quote').textContent = `« ${clan.quote} »`;
  $('#directive-title').textContent = clan.directiveTitle;
  $('#directive-text').textContent = clan.directive;
  $('#private-info').textContent = clan.privateInfo;
  $('#build-rules').innerHTML = clan.rules.map(item => `<li>${item}</li>`).join('');
  $('#build-recos').innerHTML = clan.recos.map(item => `<li>${item}</li>`).join('');
  showScreen('#dossier-screen');
}

async function playImmersionTransition(callback) {
  const overlay = $('#transition');
  overlay.classList.add('active');
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(72, ctx.currentTime + 1.15);
    gain.gain.setValueAtTime(.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.12, ctx.currentTime + .08);
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + 1.2);
    osc.connect(gain).connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 1.25);
  } catch (_) {}
  setTimeout(() => {
    callback();
    setTimeout(() => overlay.classList.remove('active'), 550);
  }, 900);
}

$$('.tribe-pin').forEach(pin => pin.addEventListener('click', () => openTribePublic(pin.dataset.tribe)));
$$('.lore-pin').forEach(pin => pin.addEventListener('click', () => openInfo(lore[pin.dataset.lore])));
$$('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));

$('#lore-button').addEventListener('click', () => openInfo(worldLore));
$('#tribe-global-lore').addEventListener('click', () => openInfo(worldLore));

$('#code-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!state.tribe) return;
  const value = $('#tribe-code').value;
  const hash = await sha256(value);
  if (hash !== ACCESS_HASHES[state.tribe]) {
    $('#code-error').textContent = 'Le mot se perd dans la jungle. Ce n’est pas celui de ce peuple.';
    return;
  }
  $('#code-dialog').close();
  await playImmersionTransition(() => renderTribe(state.tribe));
});

$('#cancel-choice').addEventListener('click', () => {
  state.pendingClan = null;
  $('#confirm-dialog').close();
});

$('#confirm-choice').addEventListener('click', async () => {
  if (!state.pendingClan) return;
  const tribeKey = state.tribe;
  const clanKey = state.pendingClan;
  state.pendingClan = null;
  $('#confirm-dialog').close();
  persistChoice(tribeKey, clanKey);
  await playImmersionTransition(() => renderDossier(tribeKey, clanKey));
});

$('#reset-button').addEventListener('click', () => {
  $('#reset-code').value = '';
  $('#reset-error').textContent = '';
  $('#reset-dialog').showModal();
});

$('#reset-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const hash = await sha256($('#reset-code').value);
  if (hash !== RESET_HASH) {
    $('#reset-error').textContent = 'Ce mot n’a aucune autorité ici.';
    return;
  }
  localStorage.removeItem('ishkara_progress');
  location.reload();
});

function restoreProgress() {
  try {
    const progress = JSON.parse(localStorage.getItem('ishkara_progress'));
    if (progress && tribes[progress.tribe]?.clans[progress.clan]) {
      renderDossier(progress.tribe, progress.clan);
      return;
    }
  } catch (_) {
    localStorage.removeItem('ishkara_progress');
  }
  showScreen('#map-screen');
}

restoreProgress();
