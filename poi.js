(() => {
  if (typeof lore === 'undefined' || typeof openInfo !== 'function') return;

  const poiDefinitions = {
    graveyard: {
      kicker: 'Lieu redouté',
      title: 'Le Cimetière noyé',
      icon: '☩',
      className: 'pin-graveyard',
      video: 'img/video/fondsquelette.webm',
      copy: `
        <p>À la lisière des marais repose un ancien cimetière que les habitants d’Ishkara appellent simplement <strong>le Cimetière noyé</strong>. Les pierres funéraires y disparaissent peu à peu sous l’eau, la mousse et les racines.</p>
        <p>Les locaux évitent d’y passer après la tombée du jour. Ils racontent que certaines lumières apparaissent entre les tombes sans torche ni lanterne, et que l’eau semble parfois remuer alors qu’aucun animal n’est visible. Personne ne s’accorde sur l’origine du phénomène : morts agités, bêtes du marais ou simples histoires destinées à tenir les enfants éloignés.</p>
        <p>Une chose fait toutefois consensus : on ne dérange pas les tombes et on ne repart jamais avec ce que l’on y trouve.</p>`
    },
    sobekTemple: {
      kicker: 'Ancien sanctuaire',
      title: 'Le Temple de Sobek',
      icon: '𓆊',
      className: 'pin-sobek',
      video: 'img/video/fondtemple.webm',
      copy: `
        <p>Enfoui dans une partie dense de la jungle, le <strong>Temple de Sobek</strong> est connu de presque tous les habitants d’Iiskraal. Même ceux qui ne suivent pas son culte reconnaissent le lieu comme un ancien sanctuaire de force, de jugement et de protection.</p>
        <p>Les plus vieux récits parlent de portes que l’on n’ouvre qu’après avoir prouvé sa valeur, de statues qui observent les visiteurs et de salles que certains prêtres continuent d’entretenir malgré l’âge du temple.</p>
        <p>Les voyageurs sont généralement invités à rester à l’extérieur. Entrer sans autorisation n’est pas seulement considéré comme imprudent : pour une partie d’Iiskraal, c’est une insulte directe à Sobek.</p>`
    },
    couatlTemple: {
      kicker: 'Ruine sacrée',
      title: 'Le Temple Couatl',
      icon: '✧',
      className: 'pin-couatl',
      video: 'img/video/fondgrandtemple.webm',
      copy: `
        <p>Les récits les plus anciens d’Ishkara mentionnent un <strong>temple consacré aux Couatls</strong>, des esprits-serpents associés à la protection, aux serments et à une époque antérieure aux villages actuels.</p>
        <p>Son emplacement exact n’est pas une connaissance commune. Les chasseurs et guides connaissent cependant les zones où la végétation change brutalement, où des pierres taillées apparaissent sous les racines et où les animaux évitent parfois de faire du bruit.</p>
        <p>Les versions divergent sur ce que protège réellement le temple. Les habitants s’accordent surtout sur une règle : si une ruine couatl semble encore intacte, mieux vaut supposer qu’elle n’est pas abandonnée.</p>`
    },
    jungleVillage: {
      kicker: 'Repère isolé',
      title: 'Le Village de la jungle',
      icon: '⌂',
      className: 'pin-jungle-village',
      video: 'img/video/village.webm',
      copy: `
        <p>Ishkara ne se résume pas à ses trois grandes communautés. Quelques <strong>hameaux et villages isolés</strong> existent le long des voies d’eau, des pistes de chasse et des anciennes routes envahies par la végétation.</p>
        <p>Ce village est l’un des plus connus : on y trouve des familles qui préfèrent rester à l’écart des rivalités, des chasseurs de passage, quelques marchands et parfois des voyageurs assez perdus pour accepter n’importe quel toit.</p>
        <p>Les habitants des trois tribus savent qu’un tel endroit vaut souvent davantage pour ses rumeurs que pour ses richesses. On peut y apprendre qui a traversé la région, quelles pistes sont devenues dangereuses et ce qui a été aperçu récemment dans la jungle.</p>`
    }
  };

  function buildVideo(definition) {
    return `
      <div class="poi-media">
        <video class="poi-video" autoplay muted loop playsinline preload="metadata" poster="Ishkara.png">
          <source src="${encodeURI(definition.video)}" type="video/webm">
        </video>
      </div>`;
  }

  Object.entries(poiDefinitions).forEach(([key, definition]) => {
    lore[key] = {
      kicker: definition.kicker,
      title: definition.title,
      body: `${buildVideo(definition)}${definition.copy}`
    };
  });

  const mapStage = document.querySelector('.map-stage');
  if (!mapStage) return;

  Object.entries(poiDefinitions).forEach(([key, definition]) => {
    if (mapStage.querySelector(`[data-lore="${key}"]`)) return;

    const button = document.createElement('button');
    button.className = `lore-pin poi-pin ${definition.className}`;
    button.dataset.lore = key;
    button.type = 'button';
    button.setAttribute('aria-label', definition.title);
    button.title = definition.title;
    button.innerHTML = `<span>${definition.icon}</span>`;
    button.addEventListener('click', () => openInfo(lore[key]));
    mapStage.append(button);
  });
})();
