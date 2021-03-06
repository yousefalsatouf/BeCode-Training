# Le jeu du pendu

- Repository : `javascript-jeu-du-pendu`  

## Mission

Vous aviez envie de vous pendre en faisant les exercices Javascript ?  
Justement, vous allez devoir réaliser le [jeu du pendu](https://fr.wikipedia.org/wiki/Le_Pendu_(jeu)) !   

Ici le but est d'aller le plus loin possible pour se rapprocher du vrai jeu du pendu. 

Exemple simple d'un jeu du pendu complet : https://fr.y8.com/games/internet_hangman

## Instructions 

### Etape 1

Création d'un jeu simple.

Utiliser la console **ou** les fonctions natives suivantes pour intéragir avec l'utilisateur :
- window.prompt();
- window.alert();
- window.confirm();  


* Créer un tableau pour contenir les lettres du mot : 'D','E','V','I','N','E','R', 
* Créer un autre tableau pour mettre les lettres devinées : '\_','\_','\_','\_','\_','\_','\_'. 


* Écrire une fonction appelée "guessLetter" cette fonction va :
    - Itérer à travers les lettres
    - Voir si la lettre devinée se trouve dans le mot 
    - Si oui, changer le tableau des lettres devinées pour ajouter la nouvelle lettre
    - Afficher dans la console les lettre devinées
    - Le jeu doit savoir quand la partie est finie et féliciter le joueur
* Le nombre d'essais est illimité

### Etape 2

- Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois. 
- Si une lettre est entrée deux fois, ne rien faire.

### Etape 3

- Refaire l'exercice mais cette fois au sein d'une page HTML avec un input et bouton pour proposer la lettre à deviner. 
- Afficher le mot à deviner comme ceci "_ _ _ _ _ _ _". 
- Si une lettre est devinée, l'afficher. Exemple : "_ E _ _ _ E _".
- Afficher les lettres erronées. 


### Etape 4

- Limiter le nombre de tentatives. 
- Compter le nombre de tentatives ratées.
- Afficher le nombre de tentatives restantes. 
- Afficher le mot secret lors d'une défaite.

### Etape 5

- Inclure un dictionnaire de mots ayant le même nombre de lettres. Ca peut être un array, un objet, un fichier json ou txt.
- Le mot à deviner change à chaque rafraîchissement de la page.

### Etape 6
- Inclure un dictionnaire de mots avec un nombre aléatoire de lettres.

### Etape 7

- Ajouter l'image ou le dessin d'une potence :
	* Au début du jeu, la potence est vide. 
	* Si le joueur a perdu, ajouter un pendu. 

### Etape 8

- Inclure un bouton "Nouvelle partie" qui s'affiche une fois le jeu fini. Par exemple, il peut apparaître sous forme d'une modal. 

### Etape 9

- Ajouter une image sans rien dedans, à chaque erreur du joueur, complèter la potence d'un élément, puis de la corde, puis de la tête... . 

Pour cette étape, vous pouvez utiliser un [canvas](https://developer.mozilla.org/fr/docs/Web/HTML/Canvas). 

## So simple... 

![donald-hang](donald-hang.gif)
