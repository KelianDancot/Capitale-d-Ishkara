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
    '<strong>Classe : libre.</strong> Choisis celle qui correspond le mieux à ta manière d’incarner un champion méthodique, rusé ou tactique.',
    '<strong>Historique : libre.</strong> Fais surtout en sorte qu’il explique ta place et ton utilité à Iiskraal.',
    'Les compétences d’analyse, de perception, d’influence ou de discrétion sont naturellement utiles à cette voie, sans être obligatoires.'
  ]);

  setRules('iiskraal', 'champion', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Homme-lézard / Lizardfolk.</strong> Ton champion est un membre d’Iiskraal ; la race n’est pas laissée au choix.',
    'Ton personnage doit pouvoir être reconnu comme protecteur, combattant ou représentant de valeur.',
    'Définis une limite morale claire que ton personnage ne franchira pas.'
  ], [
    '<strong>Classe : libre.</strong> Elle doit simplement permettre d’incarner la force, la protection ou le mérite selon ta propre lecture.',
    '<strong>Historique : libre.</strong> Relie-le à ton statut dans Iiskraal et à la confiance que le Champion de Sobek place en toi.',
    'Un code personnel clair compte davantage que l’optimisation de la classe.'
  ]);

  setRules('roncepignon', 'druid', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Halfelin ou Gnome, n’importe quelle sous-race.</strong>',
    'Quelle que soit ta sous-race, ton apparence doit montrer ton appartenance à la voie du Grand Druide : spores, champignons, fibres végétales, talismans naturels, vêtements organiques ou autres éléments visuels liés au vivant de Roncepignon.',
    'Ta personnalité et ta directive doivent rester dans les clous de cette voie : préserver les liens, éviter l’escalade et privilégier les solutions qui permettent aux autres de rester capables de dialoguer.',
    'Ton personnage doit avoir une raison crédible d’être choisi comme médiateur, guide ou protecteur.'
  ], [
    '<strong>Classe : libre.</strong> Aucune classe n’est imposée : construis le champion qui traduit le mieux ton rapport au vivant et à l’harmonie.',
    '<strong>Historique : libre.</strong> Il doit seulement expliquer comment tu es devenu assez important ou fiable pour être envoyé au nom de cette faction.',
    'Le concept compte davantage que la mécanique : un personnage social, mystique, martial ou technique peut fonctionner s’il respecte la philosophie du Grand Druide.'
  ]);

  setRules('roncepignon', 'artisans', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Halfelin ou Gnome, n’importe quelle sous-race.</strong>',
    'Quelle que soit ta sous-race, ton apparence doit rappeler les Veilleurs des Profondeurs : équipement utilitaire, outils de sapeur, accessoires de pièges, vêtements sombres ou renforcés, marques des galeries, protections adaptées au travail souterrain.',
    'Ta personnalité et ta directive doivent rester dans les clous du choix de Morkehl : préparation, contrôle, prudence, capacité à paraître coopératif et priorité absolue donnée à la survie de Roncepignon.',
    'Ton personnage doit avoir un lien crédible avec les défenses du village : sentinelle, éclaireur, sapeur, poseur de pièges, spécialiste des galeries ou rôle équivalent.'
  ], [
    '<strong>Classe : libre.</strong> Aucune classe n’est imposée : choisis ce qui sert le mieux ton idée de spécialiste préparé et dangereux lorsqu’il contrôle le terrain.',
    '<strong>Historique : libre.</strong> Relie-le simplement aux défenses, aux galeries ou à la confiance personnelle de Morkehl.',
    'Ton personnage doit pouvoir coopérer sincèrement assez longtemps pour que ses intentions profondes ne soient pas évidentes dès le départ.'
  ]);

  setRules('croafond', 'sleeper', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Bullywug / Brutacien de Croafond.</strong> La race n’est pas laissée au choix.',
    bullywugAideDD,
    'Ton personnage doit être à l’aise dans les marais et capable de protéger, d’observer ou d’agir avec patience.',
    'Donne-lui une raison personnelle de craindre une guerre ouverte entre les villages.'
  ], [
    '<strong>Classe : libre.</strong> Choisis celle qui correspond le mieux à ta vision d’un champion prudent, protecteur ou mobile.',
    '<strong>Historique : libre.</strong> Il doit seulement justifier ton importance aux yeux du Crapaud Dormant et ton expérience des marais.',
    'Ta manière d’agir doit rester cohérente avec l’équilibre, l’observation et la survie plutôt qu’avec la recherche de gloire.'
  ]);

  setRules('croafond', 'priest', [
    'Niveau 7.',
    '<strong>Race prédéfinie : Bullywug / Brutacien de Croafond.</strong> La race n’est pas laissée au choix.',
    bullywugAideDD,
    'Ton personnage doit avoir une relation forte à Glog-Mor, qu’elle soit sincère, intéressée ou obsessionnelle.',
    'Ton concept doit pouvoir cacher ses intentions et agir avec patience au lieu de provoquer tout le monde immédiatement.'
  ], [
    '<strong>Classe : libre.</strong> La mécanique est ton choix ; ce qui compte est de pouvoir porter la ferveur, l’ambition ou l’influence de cette voie.',
    '<strong>Historique : libre.</strong> Donne-lui simplement une raison crédible d’être proche du culte ou choisi par son prêtre.',
    'Le personnage peut être mystique, martial, social ou rusé tant que sa manière d’agir reste cohérente avec sa directive.'
  ]);
})();