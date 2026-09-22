(() => {
  const bullywugAideDD = `Si tu crées ton personnage sur <strong>AideDD</strong>, utilise <strong>Triton</strong> comme race de départ puis remplace ses traits raciaux sur la fiche par ceux du Bullywug indiqués sur <a href="https://www.dandwiki.com/wiki/Bullywug_(5e_Race)" target="_blank" rel="noopener noreferrer">cette référence</a>. Pour les caractéristiques, <strong>n’utilise pas les bonus fixes de cette page</strong> : choisis soit <strong>+2/+1</strong>, soit <strong>+1/+1/+1</strong>.`;

  function setRules(tribeKey, clanKey, rules, recos) {
    const clan = tribes?.[tribeKey]?.clans?.[clanKey];
    if (!clan) return;
    clan.rules = rules;
    clan.recos = recos;
  }

  setRules('iiskraal', 'strategist', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Homme-lézard / Lizardfolk.</strong> Ton champion est un membre d’Iiskraal ; la race n’est pas laissée au choix.',
    'Ton personnage doit être assez compétent pour être présenté comme champion ou spécialiste d’Iiskraal.',
    'Prévois une raison personnelle de croire à l’ordre, à la préparation ou à la supériorité d’une stratégie bien construite.'
  ], [
    '<strong>Classes recommandées :</strong> Roublard, Magicien, Artificier, Rôdeur ou Guerrier tactique.',
    '<strong>Historiques recommandés :</strong> Espion, Soldat, Artisan de guilde, Sage ou Criminel repenti.',
    '<strong>Compétences utiles :</strong> Investigation, Perspicacité, Tromperie, Perception, Discrétion.',
    'Un personnage très social ou très cérébral fonctionne particulièrement bien.'
  ]);

  setRules('iiskraal', 'champion', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Homme-lézard / Lizardfolk.</strong> Ton champion est un membre d’Iiskraal ; la race n’est pas laissée au choix.',
    'Ton personnage doit pouvoir être reconnu comme protecteur, combattant ou représentant de valeur.',
    'Définis une limite morale claire que ton personnage ne franchira pas.'
  ], [
    '<strong>Classes recommandées :</strong> Paladin, Guerrier, Barbare, Clerc ou Rôdeur.',
    '<strong>Historiques recommandés :</strong> Soldat, Acolyte, Garde ou Héros du peuple.',
    '<strong>Compétences utiles :</strong> Athlétisme, Intimidation, Perspicacité, Survie, Religion.',
    'Une présence martiale forte avec un vrai code personnel est idéale.'
  ]);

  setRules('roncepignon', 'druid', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Halfelin ou Gnome, n’importe quelle sous-race.</strong>',
    'Quelle que soit ta sous-race, ton apparence doit montrer ton appartenance à la voie du Grand Druide : spores, champignons, fibres végétales, talismans naturels, vêtements organiques ou autres éléments visuels liés au vivant de Roncepignon.',
    'Ta personnalité et ta directive doivent rester dans les clous de cette voie : préserver les liens, éviter l’escalade et privilégier les solutions qui permettent aux autres de rester capables de dialoguer.',
    'Ton personnage doit avoir une raison crédible d’être choisi comme médiateur, guide ou protecteur.'
  ], [
    '<strong>Classes recommandées :</strong> Druide, Barde, Clerc, Rôdeur ou Moine.',
    '<strong>Historiques recommandés :</strong> Ermite, Sage, Héros du peuple, Guide ou Artisan.',
    '<strong>Compétences utiles :</strong> Perspicacité, Médecine, Nature, Persuasion, Survie.',
    'Les sorts de contrôle, d’apaisement ou d’entrave sont très adaptés.'
  ]);

  setRules('roncepignon', 'artisans', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Halfelin ou Gnome, n’importe quelle sous-race.</strong>',
    'Quelle que soit ta sous-race, ton apparence doit rappeler les Veilleurs des Profondeurs : équipement utilitaire, outils de sapeur, accessoires de pièges, vêtements sombres ou renforcés, marques des galeries, protections adaptées au travail souterrain.',
    'Ta personnalité et ta directive doivent rester dans les clous du choix de Morkehl : préparation, contrôle, prudence, capacité à paraître coopératif et priorité absolue donnée à la survie de Roncepignon.',
    'Ton personnage doit avoir un lien crédible avec les défenses du village : sentinelle, éclaireur, sapeur, poseur de pièges, spécialiste des galeries ou rôle équivalent.'
  ], [
    '<strong>Classes recommandées :</strong> Roublard, Rôdeur, Artificier, Guerrier tactique ou Magicien de contrôle.',
    '<strong>Historiques recommandés :</strong> Soldat, Criminel, Artisan de guilde, Éclaireur ou Ingénieur défensif.',
    '<strong>Compétences utiles :</strong> Investigation, Perception, Discrétion, Survie, Escamotage.',
    'Pièges, outils de voleur, leurres, contrôle de terrain et mobilité sont particulièrement adaptés.'
  ]);

  setRules('croafond', 'sleeper', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Bullywug / Brutacien de Croafond.</strong> La race n’est pas laissée au choix.',
    bullywugAideDD,
    'Ton personnage doit être à l’aise dans les marais et capable de protéger, d’observer ou d’agir avec patience.',
    'Donne-lui une raison personnelle de craindre une guerre ouverte entre les villages.'
  ], [
    '<strong>Classes recommandées :</strong> Rôdeur, Druide, Moine, Guerrier ou Clerc.',
    '<strong>Historiques recommandés :</strong> Guide, Ermite, Soldat ou Héros du peuple.',
    '<strong>Compétences utiles :</strong> Survie, Perception, Discrétion, Nature, Perspicacité.',
    'Mobilité, réaction défensive et contrôle de terrain sont très cohérents.'
  ]);

  setRules('croafond', 'priest', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Bullywug / Brutacien de Croafond.</strong> La race n’est pas laissée au choix.',
    bullywugAideDD,
    'Ton personnage doit avoir une relation forte à Glog-Mor, qu’elle soit sincère, intéressée ou obsessionnelle.',
    'Ton concept doit pouvoir cacher ses intentions et agir avec patience au lieu de provoquer tout le monde immédiatement.'
  ], [
    '<strong>Classes recommandées :</strong> Clerc, Occultiste, Paladin sombre, Roublard ou Druide orienté corruption.',
    '<strong>Historiques recommandés :</strong> Acolyte, Charlatan, Soldat, Criminel ou Ermite.',
    '<strong>Compétences utiles :</strong> Religion, Tromperie, Intimidation, Discrétion, Perspicacité.',
    'Un personnage social, inquiétant et patient sera plus efficace qu’un simple fanatique suicidaire.'
  ]);
})();