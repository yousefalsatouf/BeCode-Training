# Positionnement des blocs en CSS

Les techniques pour positionner des blocs à l'écran ont beaucoup évolué en CSS. Pour en donner un aperçu on a:

* **L'utilisation de `<table>`**, qui n'a été considéré comme utile qu'au tout début du Web. *A moins de vous retrouver à voyager dans le temps dans les années 90 évitez à tous prix d'utiliser des tables pour le positionnement des blocs.* (Mais si vous voulez afficher une vraie table pas de problème)
* **L'utilisation de `display: table`**, grosso modo ça permet de faire en sorte que des `<div>` se comportent comme des tables. Ca marche mais ça nécéssite d'ajouter beaucoup d'éléments inutiles au DOM et contient quelques bugs bizarres. 
* **L'utilisation de `float`**, la bonne vieille technique qui fonctionne toujours très bien. Un conseil, privilégiez cette technique de positionnement pour des parties de votre page, mais ne vous basez pas là-dessus pour la structure générale. 
* **L'utilisation de `display: flex`**, aussi appelé Flexbox, c'est probablement la technique utilisée majoritairement aujourd'hui. C'est un peu compliqué à prendre en main mais très puissant et pratique pour faire des sites responsives. Ca marche sur la [quasi totalité des browsers pas complètement dépassés](https://caniuse.com/#search=flex).
* **L'utilisation de `display: grid`**, c'est un peu le "new kid on the block". Ca permet de faire plus facilement des layouts qui s'apparentent à de grilles (notez que tous les layouts ne s'apparentent pas à des grilles). Le *hic* c'est que [le support des browsers est un peu moins bon](https://caniuse.com/#feat=css-grid).


## Flexbox

Même si, il est vrai, Flexbox n'est pas simple à prendre en main, notez que sa complexité est justifiée par les nombreux problèmes que posent la nécéssité de faire des pages responsives de nos jours. Alors ça vaut le coup de prendre quelques heures pour le maitriser.

Quelques ressources intéressantes:

* [Flexbox Froggy](https://flexboxfroggy.com/#fr) - Le mieux est d'apprendre en s'amusant. Voici un petit tutorial avec des grenouilles. 
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Pas vraiment un tuto pour apprendre les bases. Plutôt une référence où il est intéressant de revenir de temps en temps quand se pose un problème de layout qu'on avait pas eu avant.


## Grid

Quelques ressources intéressantes: 

* [Grid Garden](https://cssgridgarden.com/#fr) - Apprends le Grid en cultivant ton potager !
* [A complete guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - Une référence sur laquelle tu reviendras souvent dans tes recherches sur le grid ;)
