# Positionnement des blocs en CSS

Les techniques pour positionner des blocs à l'écran ont beaucoup évolué en CSS. Pour en donner un aperçu on a:

* **L'utilisation de `<table>`**, qui n'a été considéré comme utile qu'au tout début du Web. *A moins de vous retrouver à voyager dans le temps dans les années 90 évitez à tous prix d'utiliser des tables pour le positionnement des blocs.* (Mais si vous voulez afficher une vraie table pas de problème)
* **L'utilisation de `float`**, marche pour certains cas mais contient plein de petits problèmes et d'incompatibilités entre les browsers. Plus trop à conseiller aujourd'hui parce que c'est une technique limitée et franchement un peu bizarre.
* **L'utilisation de `display: table`**, grosso modo ça permet de faire en sorte que des `<div>` se comportent comme des tables. Ca marche mais ça nécéssite d'ajouter beaucoup d'éléments inutiles au DOM et contient quelques bugs bizarres. Pareil que `float`: plus trop à conseiller aujourd'hui.
* **L'utilisation de `display: flex`**, aussi appelé Flexbox, c'est probablement la technique utilisée majoritairement aujourd'hui. C'est un peu compliqué à prendre en main mais très puissant et pratique pour faire des sites responsives. Ca marche sur la [quasi totalité des browsers pas complètement dépassés](https://caniuse.com/#search=flex).
* **L'utilisation de `display: grid`**, c'est un peu le "new kid on the block". Ca permet de faire plus facilement des layouts qui s'apparentent à de grilles (notez que tous les layouts ne s'apparentent pas à des grilles). Le *hic* c'est que [le support des browsers est un peu moins bon](https://caniuse.com/#feat=css-grid).

Donc au final si vous devez ne maitriser qu'une seule technique on vous conseillera le `display: flex`. Les techniques plus anciennes sont intéréssantes à connaitre si vous devez faire la maintenance d'un vieux site et le `display: grid` peu être bien en complément si le support des browsers n'est pas un problème mais si il ne devait en rester qu'un ce serait le `display: flex`.

## Flexbox

Même si, il est vrai, Flexbox n'est pas simple à prendre en main, notez que sa complexité est justifiée par les nombreux problèmes que posent la nécéssité de faire des pages responsives de nos jours. Alors ça vaut le coup de prendre quelques heures pour le maitriser.

Quelques ressources intéressantes:

* [Youtube - Tutoriel CSS - Flexbox](https://www.youtube.com/watch?v=LNqBKTeeiWo) - Un chouette youtuber francophone qui fait une démo.
* [Faites votre mise en page avec Flexbox](https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3/3298561-faites-votre-mise-en-page-avec-flexbox) - Un cours en ligne pas mal.
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Pas vraiment un tuto pour apprendre les bases. Plutôt une référence où il est intéressant de revenir de temps en temps quand se pose un problème de layout qu'on avait pas eu avant.
