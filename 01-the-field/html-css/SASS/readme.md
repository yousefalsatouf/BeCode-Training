# SASS

Le SASS (extension de fichier: scss ) est un outil de développement *frontend*, qui génère du css à partir d'un langage fait de CSS "amélioré". En rédigeant tes stylesheets en sass plutôt que directement en CSS, tu bénéficies de trucs sympas pouvant **diminuer ton temps de travail** (ton syndicat sera content), rendre ton **code plus réutilisable** d'un projet à l'autre (ton boss sera content), plus lisible aussi, grâce notamment à une syntaxe améliorée, à l'utilisation de **fonctions** (appelées des "mixin") et de **variables** (appelées des "variables". Ben oui).

![nice](images/nice.gif)



## Initialisation

- [Slides d'intro au SASS](https://docs.google.com/presentation/d/1GFK1HjajFu8Hc3rLt9iIiv9hrgcVEEvTnFQmEporFxk/edit#slide=id.g35ed75ccf_057)

- official site: http://sass-lang.com 



## Setup

Pour faire tourner SASS, tu as besoin d'un module qui tourne sur ta machine de développement, et qui va "observer" les fichiers SASS. A chaque sauvegarde, le fichier CSS correspondant sera re-généré.

Tu as besoin d'utiliser Node JS. Normalement, tu as déjà dû installer Node js sur ton PC avec le gestionnaire de package npm. 

A la source de ton dossier, crée un fichier `package.json` et mets deux accolades dedans `{ }`.  
Fais un `npm install` dans ton terminal.  

Tu es prêt à installer la dépendance `node-sass` --> `npm install node-sass`. 

Ensuite, dans ton package.json, copie-colle le code suivant en définissant bien les chemins entre tes fichiers scss et css dans ton repo: 

```
  "scripts": {
    "scss": "node-sass --watch assets/scss -o assets/css"
  }
```

Pour lancer le compilateur, mettez vous à la racine de votre dossier et tapez `npm run scss` et c'est parti. 

## Parcours obligatoire

- Crée un repos `learning-sass`

- Crée un fichier html basique `index.html`, histoire d'expérimenter avec sass.

- Crée un dossier `assets` pour y mettre tout fichier statique composant l'aspect visuel de ton interface : images, css, javascript... et fichiers SASS (se terminant par .scss). À l'intérieur de ce dossier, crée un dossier pour chaque type de fichier. Ce qui donne quelque chose comme ceci :

   ![assets-content](images/assets-content.png)

- Note que cette structure de dossier "assets" est conseillée simplement par le fait qu'elle est devenue une forme de convention chez les *frontend developers*. Libre à toi de t'en écarter, si tu aimes réinventer la roue.

- Crée un fichier `assets/scss/style.scss`  et configure ton application sass pour qu'elle génère le fichier  `assets/css/style.css` à chaque fois que le fichier "source" (style.scss) est modifié.

- Assure-toi que ton fichier html est bien lié à ton fichier .css (et non au fichier .scss).

- Expérimente avec ces [exercises in basic SASS features](https://gist.github.com/pixeline/dab8a29566b994453b8c681ed2b7ff2a)

### Projet 
- Repars sur un projet que tu as déjà réalisé dans le parcours html : crée une branche Git et donne lui un nom descriptif : `convert-to-sass`.
- Sur cette branche, convertis le projet pour que le CSS soit généré à partir de SASS. 
- Exploite le plus possible de fonctionnalités de SASS : variables, nesting selectors, invisible code comments,  ... N'hésite pas à segmenter ton code scss en *partials*, afin de rendre ce code réutilisable dans d'autres projets. Par exemple :  
    - si tu as utilisé la même valeur plus d'une fois, fais-en une variable
    - si tu as des sélecteurs complexes, utilise le nesting
    - si tu utilises des valeurs arrondies (par ex : `width: 33%`) utilise la formule mathématiques ( `width: (100/3)*1% ; `)
    - parcours cette [liste de mixins](http://gillesbertaux.com/andy/doc/#mixin-prefix) et utilise ceux qui sont en rapport avec ton code 
- Terminé ? Merge la branche dans le master et donne toi un gros câlin.

## Conclusion

Si tout s'est bien passé au terme de ce parcours iniSASStique, tu as dû comprendre l'intérêt pour toi d'utiliser SASS. À partir d'aujourd'hui donc, nous te souhaitons d'utiliser SASS pour chaque projet car nous voulons voir des sourires sur ton visage. Pas comme lui :

![sassy](images/sassy.gif)





