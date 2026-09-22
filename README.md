# Capitale d'Ishkara — site d'introduction

Site statique d'introduction au one-shot **Les Héritiers d’Ishkara**.

## Fonctionnement

Le joueur arrive sur la carte animée d’Ishkara, consulte des informations publiques puis choisit sa tribu. Un mot de passage propre à la tribu déverrouille les connaissances internes et le choix entre deux courants / chefs.

Une fois le courant choisi, la décision est enregistrée dans le `localStorage` du navigateur et le joueur revient directement sur son dossier personnel lors des visites suivantes.

Le dossier final contient uniquement :

- la philosophie de son commanditaire ;
- une directive générale avant le one-shot ;
- des connaissances internes à sa faction ;
- des recommandations de création de personnage niveau 7.

Le site ne dévoile pas le temple, le Cœur d’Ishkara ni les objectifs exacts de l’épreuve future.

## Déploiement GitHub Pages

Le projet n’a aucun build : `index.html`, `styles.css` et `app.js` sont directement publiables.

1. Ouvrir **Settings → Pages** dans le dépôt GitHub.
2. Dans **Build and deployment**, choisir **Deploy from a branch**.
3. Sélectionner la branche `main` et le dossier `/ (root)`.
4. Enregistrer.

Les médias sont chargés avec des chemins relatifs, donc le site fonctionne également dans un sous-chemin GitHub Pages.

## Déploiement Netlify

Importer le dépôt dans Netlify et laisser :

- Build command : vide
- Publish directory : `.`

Aucun framework n’est requis.

## Ressources utilisées

- `fond Ishkara.webm` : fond principal / carte animée ;
- `fond-jungle.mp4` : fond après immersion dans une tribu ;
- `Ishkara.png` : poster de secours et illustration des chroniques ;
- `La capitale d’Ishkara.md` : source narrative principale.

`Sylaëth.png` reste disponible pour une future section consacrée aux puissances voisines.

## Portraits des chefs

Le dépôt ne contient pas encore de portraits individuels des chefs. La version actuelle utilise donc des médaillons textuels (`PC`, `SO`, `DR`, `AD`, `CD`, `GM`). Ils ont été conçus comme des placeholders faciles à remplacer par des images plus tard.

## Modifier la position des marqueurs

Les positions se règlent dans `styles.css` :

```css
.pin-iiskraal { left: 10%; top: 11%; }
.pin-roncepignon { right: 7%; top: 30%; }
.pin-croafond { left: 36%; bottom: 8%; }
```

Les marqueurs secondaires sont configurés juste en dessous. Il suffit d’ajuster les pourcentages après avoir visualisé le rendu exact de la vidéo.

## Sécurité et progression

La restriction de retour est volontairement adaptée à un one-shot entre joueurs de confiance :

- choix enregistré en `localStorage` ;
- aucune interface normale pour revenir au choix ;
- réinitialisation uniquement par code MJ ;
- codes d’accès stockés sous forme de hash.

Un joueur ayant des connaissances web peut toujours supprimer manuellement son `localStorage` ou analyser le site statique. Pour une vraie restriction par compte, il faudra ajouter une fonction serveur / Netlify Function et enregistrer les choix côté serveur.
