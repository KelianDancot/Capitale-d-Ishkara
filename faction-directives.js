(() => {
  const data = {
    iiskraal: {
      subtitle: 'Iiskraal ne cherche pas seulement à survivre : ses deux pouvoirs veulent étendre son influence jusqu’à faire du village le cœur politique d’Ishkara.',
      public: `<p>Iiskraal est un peuple expansionniste. Ses habitants considèrent que la jungle récompense ceux qui savent prendre, conserver et administrer ce qu’ils ont gagné.</p><p>Les deux autorités du village poursuivent le même résultat — <strong>voir Iiskraal dominer le futur d’Ishkara</strong> — mais elles s’opposent sur la méthode. <strong>Sskarek Vif-Œil, le Petit Chef</strong>, croit à la ruse et à la maîtrise politique. <strong>Khezram, Croc de Sobek</strong>, considère que le droit de gouverner doit être gagné et défendu par les actes.</p>`,
      lore: `<div class="tribe-doctrine"><b>Ambition d’Iiskraal</b><p>Faire du champion d’Iiskraal le vainqueur de l’épreuve et, à terme, l’autorité autour de laquelle le nouvel Ishkara devra se construire. L’expansion du village est considérée comme naturelle ; seul le moyen de l’obtenir divise ses deux chefs.</p></div><p>Tu as grandi dans une communauté où l’on ne confond pas paix et renoncement. Iiskraal peut négocier, protéger, intimider ou frapper : toutes ces méthodes sont des outils. La question est de savoir laquelle prouve réellement qu’un peuple mérite de commander.</p>`,
      clans: {
        strategist: {
          label: 'La voie de Sskarek « Petit Chef »',
          title: 'Stratégie et contrôle',
          values: 'Ruse · influence · domination',
          summary: 'Fais d’Iiskraal le choix qui paraît inévitable. Tu peux convaincre, manipuler, discréditer ou neutraliser les prétentions rivales : à la fin, personne ne doit pouvoir sérieusement contester ta victoire.',
          leader: 'Sskarek Vif-Œil',
          role: 'Le « Petit Chef » · architecte politique d’Iiskraal',
          sigil: 'SV',
          quote: 'Le meilleur vainqueur est celui dont les adversaires finissent par expliquer eux-mêmes pourquoi il devait gagner.',
          directiveTitle: 'Rends ta victoire inévitable',
          directive: 'À la fin de l’épreuve, tu dois être reconnu comme le champion qui mérite de diriger le nouvel Ishkara. Fais comprendre amicalement, par la ruse, la tromperie ou l’influence qu’Iiskraal est le choix logique. Si un autre champion tente de prendre l’ascendant politique, devance-le et écarte sa candidature par le moyen que tu juges le plus efficace.',
          privateInfo: 'Sskarek ne te demande pas d’être cruel pour le plaisir. Il te demande de gagner. Une alliance est utile tant qu’elle rapproche Iiskraal du pouvoir ; une réputation peut être détruite plus proprement qu’un corps. Mais si une méthode plus dure devient nécessaire pour empêcher un rival d’être choisi, il n’y verra pas un échec moral : seulement un coût.',
          rewardTitle: 'Jeton du plan parfait',
          reward: 'Une fois par repos long, après avoir effectué un test de Tromperie, Persuasion, Perspicacité ou Investigation, tu peux ajouter 1d6 au résultat après avoir vu le dé, mais avant de connaître la conséquence finale.',
          success: 'Réussite totale : ton champion est reconnu comme vainqueur ou dirigeant. Réussite partielle : Iiskraal obtient l’autorité dominante même si une façade d’alliance est conservée.',
        },
        champion: {
          label: 'La voie de Khezram, Croc de Sobek',
          title: 'Honneur et jugement',
          values: 'Victoire · mérite · sentence',
          summary: 'Tu dois gagner, mais la manière dont les autres se comportent décidera s’ils méritent ton alliance, ton respect… ou d’être éliminés.',
          leader: 'Khezram, Croc de Sobek',
          role: 'Champion martial et religieux d’Iiskraal',
          sigil: 'KS',
          quote: 'Je peux marcher à côté d’un rival digne. Je ne tournerai jamais le dos à un lâche.',
          directiveTitle: 'Gagne, puis juge les dignes',
          directive: 'Ton objectif reste la victoire d’Iiskraal. Pendant l’épreuve, juge les autres champions sur leurs actes. Ceux qui montrent courage, loyauté et respect peuvent devenir des alliés véritables. Celui qui trahit, humilie les faibles ou agit sans honneur doit être confronté. S’il refuse de répondre de ses actes et prouve qu’il est indigne de confiance, élimine la menace avant qu’elle ne puisse gouverner Ishkara.',
          privateInfo: 'Khezram ne t’interdit pas les alliances : il les considère même plus fortes lorsqu’elles sont forgées entre adversaires dignes. En revanche, il refuse qu’un champion méprisable puisse ressortir de l’épreuve auréolé de prestige. Le jugement doit venir des actes, pas des rumeurs.',
          rewardTitle: 'Écaille du Croc',
          reward: 'Une fois par repos long, par action bonus, désigne une créature visible pendant 1 minute. La première fois à chacun de tes tours que tu la touches avec une attaque, elle subit 1d4 dégâts supplémentaires du même type que l’attaque. L’effet prend fin si tu es inconscient.',
          success: 'Réussite totale : Iiskraal gagne et les champions jugés dignes reconnaissent ta légitimité. Si un rival honorable survit et accepte ton autorité, Khezram considère cela comme une victoire plus grande qu’un massacre.',
        }
      }
    },
    roncepignon: {
      subtitle: 'Roncepignon n’a pas oublié avoir été repoussé vers la jungle. Derrière son hospitalité subsiste une méfiance profonde envers ceux qui prétendent décider où son peuple a le droit de vivre.',
      public: `<p>Roncepignon connaît déjà le prix des décisions venues d’Elireï. Ses spores, pièges et méthodes défensives avaient provoqué des morts lors de son ancienne implantation ; les autorités liées à Sylaëth ont participé au choix qui a repoussé la communauté vers la jungle d’Ishkara.</p><p>Cette histoire n’est pas oubliée. <strong>Orren Tresse-Spore, le Grand Druide</strong>, veut empêcher une nouvelle division imposée de l’extérieur en construisant quelque chose de commun. <strong>Morkehl Ombresilex</strong> en tire la conclusion inverse : personne d’extérieur ne mérite assez de confiance pour tenir l’avenir de Roncepignon entre ses mains.</p>`,
      lore: `<div class="tribe-doctrine"><b>Ambition de Roncepignon</b><p>Ne plus jamais être déplacé, administré ou sacrifié au nom de la sécurité d’un autre peuple. Les deux voies veulent protéger définitivement Roncepignon ; l’une par l’union d’Ishkara, l’autre par l’indépendance absolue.</p></div><p>La rancœur envers Sylaëth n’est pas uniforme, mais elle existe. Certains se souviennent surtout des morts causées par les anciennes défenses. D’autres ne retiennent que le jour où des étrangers ont décidé que Roncepignon devait partir.</p>`,
      clans: {
        druid: {
          label: 'La voie d’Orren Tresse-Spore',
          title: 'Une cité pour tous',
          values: 'Union · autonomie · médiation',
          summary: 'Tu soupçonnes les commanditaires de vouloir assurer leur présence en Ishkara quoi qu’il arrive. Ta réponse est de rendre cette occupation inutile : unir les trois peuples dans une véritable cité commune.',
          leader: 'Orren Tresse-Spore',
          role: 'Grand Druide et voix spirituelle de Roncepignon',
          sigil: 'OT',
          quote: 'S’ils viennent parce qu’ils nous pensent incapables de vivre ensemble, alors construisons quelque chose qu’ils ne pourront pas prétendre devoir sauver.',
          directiveTitle: 'Fonde une cité commune',
          directive: 'Maintiens autant que possible les trois champions unis et fais naître l’idée d’une cité nouvelle appartenant aux trois peuples plutôt qu’à un vainqueur unique. Par le dialogue, les compromis, les dettes de vie ou les alliances, rassemble suffisamment de volontés pour que l’issue crédible de l’épreuve soit une Ishkara gouvernée ensemble.',
          privateInfo: 'Orren pense que la mission est volontairement assez dure pour révéler une incapacité à coopérer et justifier ensuite une présence extérieure renforcée. Il ne possède pas la preuve d’un complot, mais l’histoire de Roncepignon lui interdit de considérer cette possibilité comme naïve. Son objectif réel est de rendre toute occupation politiquement injustifiable en présentant une union locale viable.',
          rewardTitle: 'Spores de concorde',
          reward: 'Une fois par repos long, lorsqu’une créature alliée à 9 m rate un test de caractéristique ou un jet de sauvegarde, tu peux utiliser ta réaction pour lui accorder 1d6 à ajouter au résultat. Elle doit pouvoir te voir, t’entendre ou respirer les spores que tu libères.',
          success: 'Réussite totale : au moins deux autres champions acceptent publiquement le principe d’une cité commune ou d’une gouvernance partagée. Plus personne ne peut raisonnablement présenter un village seul comme l’unique avenir d’Ishkara.',
        },
        artisans: {
          label: 'La voie de Morkehl Ombresilex',
          title: 'Indépendance absolue',
          values: 'Survie · secret · rupture',
          summary: 'Sois utile, rassurant et coopératif jusqu’au moment où le Cœur peut appartenir à Roncepignon seul. Puis pars avec lui et assure-toi que personne ne puisse te suivre pour le réclamer.',
          leader: 'Morkehl Ombresilex',
          role: 'Chef des Veilleurs des Profondeurs',
          sigil: 'MO',
          quote: 'On nous a déjà expliqué une fois où nous avions le droit de vivre. Il n’y en aura pas de seconde.',
          directiveTitle: 'Reviens seul avec le Cœur',
          directive: 'Joue le bon samaritain et rends-toi indispensable au groupe. Lorsque l’occasion est crédible, subtilise le Cœur et quitte l’expédition. Fais en sorte que les autres champions soient morts, incapables de te poursuivre ou durablement exclus du jeu politique. Roncepignon doit conserver le Cœur et devenir une ville indépendante protégée de la brume sans rien devoir aux puissances extérieures.',
          privateInfo: 'Morkehl ne cherche pas une capitale reconnue par Sylaëth : il veut une indépendance que personne ne puisse lui retirer. Il préfère exploiter les dangers du temple, une séparation ou une trahison déjà amorcée plutôt qu’un assassinat grossier. Si tu peux revenir seul sans preuve directe contre toi, le récit de l’expédition deviendra une arme aussi importante que le Cœur.',
          rewardTitle: 'Charge de repli des Veilleurs',
          reward: 'Une fois par repos long, par action bonus, tu peux effectuer à la fois les actions Se désengager et Foncer pour ce tour. De plus, tu as avantage au premier test d’Investigation ou d’outils de voleur effectué pour comprendre un piège ou un mécanisme durant chaque repos long.',
          success: 'Réussite totale : tu rentres à Roncepignon avec le Cœur et aucun autre champion n’est en position de le réclamer. Réussite partielle : le Cœur n’est pas à toi, mais Roncepignon échappe à toute tutelle extérieure et reste politiquement indépendant.',
        }
      }
    },
    croafond: {
      subtitle: 'Croafond possède moins d’infrastructures et de technologie que ses voisins. Cette épreuve est sa chance de prouver qu’un peuple n’a pas besoin de pierre taillée ou de grandes machines pour devenir indispensable — ou terrifiant.',
      public: `<p>Croafond part avec moins de prestige matériel que ses voisins. Ses habitants savent que cette faiblesse peut devenir une condamnation politique si personne ne voit leur utilité.</p><p><strong>Bôrr-Gahm, le Crapaud Dormant</strong>, veut transformer l’épreuve en alliance garantissant la survie de son peuple. <strong>Zha’Gorr, Prêtre de Glog-Mor</strong>, considère au contraire que Croafond ne sera jamais respecté tant que les autres auront encore le choix de l’ignorer.</p>`,
      lore: `<div class="tribe-doctrine"><b>Ambition de Croafond</b><p>Sortir de l’épreuve avec une garantie de pérennité. Pour les modérés, cela signifie devenir nécessaire à des alliés. Pour le culte de Glog-Mor, cela signifie devenir assez dangereux pour que plus personne n’ose contester Croafond.</p></div><p>Vous avez moins de routes, moins d’ateliers et moins de structures permanentes. Mais vous connaissez les marais, vous survivez là où d’autres s’enfoncent, et cette mission donne enfin à Croafond l’occasion de transformer ce savoir en pouvoir politique.</p>`,
      clans: {
        sleeper: {
          label: 'La voie de Bôrr-Gahm, le Crapaud Dormant',
          title: 'Alliance de survie',
          values: 'Pacte · pérennité · protection',
          summary: 'Cette épreuve peut faire disparaître Croafond du futur politique d’Ishkara. Ta priorité est donc de créer une alliance suffisamment forte pour que la survie de ton peuple devienne l’intérêt d’au moins un autre champion.',
          leader: 'Bôrr-Gahm',
          role: 'Le Crapaud Dormant · ancienne autorité de Croafond',
          sigil: 'BG',
          quote: 'Le marais survit parce que chaque chose y tient l’autre. Même le plus grand prédateur finit par avoir besoin d’un sol où poser le pied.',
          directiveTitle: 'Obtiens une alliance qui survivra à l’épreuve',
          directive: 'Avant la fin de l’expédition, lie Croafond à un ou deux autres champions par un accord réel : protection mutuelle, gouvernement partagé, dette de vie, pacte politique ou projet commun. Tu n’as pas besoin d’être déclaré seul vainqueur si l’accord obtenu garantit que Croafond ne pourra ni être annexé, ni abandonné, ni sacrifié lorsque la nouvelle Ishkara sera créée.',
          privateInfo: 'Bôrr-Gahm estime qu’une victoire solitaire de Croafond est improbable et qu’une défaite sans allié pourrait être fatale au village. Il t’autorise à céder du prestige, des ressources ou même une part de pouvoir si la contrepartie protège réellement la pérennité des Croatiens.',
          rewardTitle: 'Pacte du marais',
          reward: 'Après avoir conclu en jeu un pacte explicite avec une créature consentante, choisissez l’un de vous comme lié jusqu’au prochain repos long. Une fois pendant cette durée, quand l’un des deux rate un jet de sauvegarde alors qu’il se trouve à 9 m de l’autre, il peut ajouter 1d6 au résultat.',
          success: 'Réussite totale : au moins un champion accepte un accord concret garantissant la place de Croafond après l’épreuve. Réussite exceptionnelle : les deux autres champions ont chacun une raison personnelle ou politique de défendre Croafond.',
        },
        priest: {
          label: 'La voie de Zha’Gorr, Prêtre de Glog-Mor',
          title: 'Le règne par le sacrifice',
          values: 'Sacrifice · terreur · conquête',
          summary: 'Croafond ne demandera plus sa place. Offre à Glog-Mor le sang des champions rivaux, puis reviens avec la preuve que les autres villages devront désormais obéir ou subir le même sort.',
          leader: 'Zha’Gorr',
          role: 'Prêtre de Glog-Mor · voix radicale de Croafond',
          sigil: 'ZG',
          quote: 'Un peuple qui demande la permission de survivre a déjà choisi sa chaîne.',
          directiveTitle: 'Rapporte un sacrifice et impose Croafond',
          directive: 'Fais en sorte qu’un ou deux champions rivaux meurent durant l’expédition et rapporte au moins un de leurs corps à Croafond pour le rite de Glog-Mor. Le sacrifice doit permettre au culte d’appeler des monstruosités batraciennes au service du village. Ton objectif politique est ensuite d’imposer la gouvernance de Croafond par l’intimidation et la force, jusqu’à réduire les tribus qui refusent de se soumettre en populations serviles et en futures offrandes.',
          privateInfo: 'Zha’Gorr préfère une mort pouvant être attribuée au temple, à une créature ou à une trahison mutuelle plutôt qu’un meurtre maladroit commis devant témoins. Le corps compte : le sacrifice doit pouvoir être ramené. Si tu ne peux obtenir un cadavre, une victoire politique par la terreur reste utile, mais elle ne satisfait pas pleinement Glog-Mor.',
          rewardTitle: 'Sceau du sacrifice',
          reward: 'Une fois par repos long, lorsqu’une créature que tu peux voir à 9 m tombe à 0 PV, tu peux invoquer Glog-Mor sans action : tu gagnes un nombre de PV temporaires égal à ton niveau + ton bonus de maîtrise et tu as avantage à ton prochain test d’Intimidation avant la fin de ton prochain tour.',
          success: 'Réussite totale : au moins un corps de champion est rapporté à Croafond et le village possède assez de force ou de terreur pour revendiquer la gouvernance. Réussite absolue selon Zha’Gorr : les autres peuples se soumettent et deviennent une source durable de sacrifices.',
        }
      }
    }
  };

  const tribeRumors = {
    iiskraal: [
      {
        tribe: 'Roncepignon',
        title: 'Le village que la jungle a gardé',
        text: 'On raconte que Roncepignon a déjà payé cher des décisions venues d’Elireï. Ses habitants se montrent accueillants, mais ils n’accordent pas facilement leur confiance aux puissances extérieures. Leurs spores, pièges et chemins cachés rendent leur territoire beaucoup plus difficile à approcher qu’il n’en a l’air.'
      },
      {
        tribe: 'Croafond',
        title: 'Le marais sous-estimé',
        text: 'Croafond possède moins d’infrastructures visibles que ses voisins, mais ses habitants connaissent les marais mieux que quiconque. On les dit capables de survivre dans des zones où des troupes mieux équipées disparaîtraient en quelques heures.'
      }
    ],
    roncepignon: [
      {
        tribe: 'Iiskraal',
        title: 'Un village qui regarde déjà plus loin',
        text: 'Iiskraal s’est rapidement renforcé grâce à l’union de plusieurs groupes d’hommes-lézards. Beaucoup pensent que le village ne se contentera pas longtemps de défendre ses frontières et qu’il cherchera naturellement à peser davantage sur le reste d’Ishkara.'
      },
      {
        tribe: 'Croafond',
        title: 'Ceux qui n’ont besoin de presque rien',
        text: 'Les habitants de Croafond paraissent moins développés matériellement, mais ils vivent depuis longtemps dans un environnement que peu d’étrangers supportent. Leur faiblesse apparente cache une réelle capacité d’adaptation et une culture difficile à intimider.'
      }
    ],
    croafond: [
      {
        tribe: 'Iiskraal',
        title: 'La force qui grandit',
        text: 'Iiskraal devient chaque année plus organisé et plus puissant. Ses guerriers crocodiliens impressionnent, mais ses habitants plus discrets sont réputés pour leurs plans, leur magie et leurs pièges. Peu de gens croient qu’un tel village acceptera éternellement de rester un acteur secondaire.'
      },
      {
        tribe: 'Roncepignon',
        title: 'Une communauté qui se souvient',
        text: 'Roncepignon n’a pas oublié les circonstances qui l’ont poussé jusqu’à Ishkara. Les habitants peuvent sembler chaleureux et coopératifs, mais leur méfiance envers les décisions imposées de l’extérieur est connue jusque dans les marais.'
      }
    ]
  };

  Object.entries(data).forEach(([tribeKey, patch]) => {
    const tribe = tribes[tribeKey];
    if (!tribe) return;
    tribe.subtitle = patch.subtitle;
    tribe.public = patch.public;
    tribe.lore = patch.lore;
    Object.entries(patch.clans).forEach(([clanKey, clanPatch]) => {
      if (tribe.clans[clanKey]) Object.assign(tribe.clans[clanKey], clanPatch);
    });
  });

  function renderFactionExtras(tribeKey, clanKey) {
    const clan = tribes?.[tribeKey]?.clans?.[clanKey];
    const missionCard = document.querySelector('#dossier-screen .mission-card');
    if (!clan || !missionCard) return;

    let extras = missionCard.querySelector('.faction-extras');
    if (!extras) {
      extras = document.createElement('div');
      extras.className = 'faction-extras';
      const buildGrid = missionCard.querySelector('.build-grid');
      missionCard.insertBefore(extras, buildGrid || missionCard.querySelector('.final-note'));
    }

    extras.innerHTML = `
      <section class="faction-extra faction-success">
        <span class="panel-label">Condition de réussite</span>
        <p>${clan.success || ''}</p>
      </section>
      <section class="faction-extra faction-reward">
        <span class="panel-label">Avantage de voie</span>
        <h3>${clan.rewardTitle || 'Avantage'}</h3>
        <p>${clan.reward || ''}</p>
      </section>
      <section class="faction-extra faction-rumors">
        <span class="panel-label">Rumeurs sur les autres peuples</span>
        <p class="rumor-warning">Ce sont des réputations, observations et récits qui circulent dans ton peuple. Elles ne révèlent pas les ordres secrets ni les intentions personnelles des autres chefs.</p>
        <div class="rumor-grid">
          ${(tribeRumors[tribeKey] || []).map(rumor => `
            <article class="rumor-card">
              <span class="rumor-tribe">${rumor.tribe}</span>
              <h3>${rumor.title}</h3>
              <p>${rumor.text}</p>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  const previousRenderDossier = renderDossier;
  renderDossier = function (tribeKey, clanKey) {
    previousRenderDossier(tribeKey, clanKey);
    renderFactionExtras(tribeKey, clanKey);
  };
})();