# Projet - COMPOSITION

## Présentation



Vous souvenez-vous de CHIMMO, cette magnifique onepage que vous avez fait à la fin de la prairie? 
Le client a été ravi du résultat et il souhaite continuer avec vous pour faire la suite du site. 

## Objectifs

- Créer un thème Wordpress de zéro
- Créer une belle interface client avec des champs customisés

## Demande

Cette fois, il faudra intégrer le site à Wordpress.

Pour rappel, le client souhaite que vous respectiez **scrupuleusement** le design.

## Ressources

Toutes les pages dans les différents formats, ainsi que les images découpées sont dans le dossier [assets](./assets/)

## Instructions

Voici la liste des instructions reçues. 

Elles désignent les types de contenu (page, post, catégorie), ainsi que les champs ACF à créer. 

### PAGE ACCUEIL

Pour la page d'accueil, nous avons déjà le bandeau supérieur, et vous savez déjà à quoi ressemble les onglets À propos et Spécifications. 

**ACF :**

	*** Top Banner  ***
		Img + Titre + Sous-Titre + Bouton : Titre + lien interne
		2 x Pastilles : Txt
	*** A propos ***
		Image + Surtitre + Titre + texte + Lien interne
	*** Spécifications ***
		Image 	
		2 x Title + .svg + repeater

**Niveau Wordpress, c'est le template `front-page.php`**

### PAGES TYPE

Ici, on demande, notamment, de créer un contenu Flexible, qui est un groupe ACF qui permet au client de changer la disposition du contenu dans son CMS via un drag & drop. 

Si vous regardez le design, il y a en fait 2 pages types, mais les champs ACF sont identiques.

Aussi, pour ces pages types, nous n'avons pas reçu de layout pour le mobile. Basez-vous sur le design du layout Tablet. 

**ACF :**

	*** Banner Image  ***
		Image + Titre
	*** Contenu Flexible ***
		Chapeau
			- Txt
		Texte
			- Wysiwyg
		Citation
			- Txt
		Galerie
			- Repeater img

**Niveau Wordpress, créez deux types de template `page-$slug.php`**

Indice pour les retrouver dans le CMS -> créez des modèles de page.

### PAGE CONTACT

Créez un formulaire de contact fonctionnel. 

**Niveau Wordpress, créez un template `page-contact.php`**

**La carte:**

Attention, vous n'êtes pas obligés de créer une map pour ce projet. Vous pouvez prendre l'image de la carte dans les assets et la mettre en dur dans votre template. 

L'incorporation d'une carte est un BONUS (voir plus bas).

On vous demande au minimum de créer deux champs ACF OpenStreetMap côté CMS. 

Le plugin à installer est **ACF OpenStreetMap Field**. Une fois le plugin installer, vous aurez la possibilité d'installer ce type de champs dans votre CMS.

**ACF :**

	*** Adresses  ***
		2 X OpenStreetMap


### ARCHIVE POSTS BIENS

Dans le design, vous voyez une liste avec tous les biens à vendre.
Chaque bien correspond à un post.  

Cette liste est un accordéon. Chaque fois que l'on clique sur une ligne, la liste s'ouvre sur le bien pointé et on voit les détails du bien.  
L'icône ![plus](assets/plus.png) change en ![moins](assets/moins.png).

Le premier champs est un diaporama d'images -> créez un repeater avec des images. 

**ACF :**

	
	*** Diaporama ***
		- Repeater images
	*** Description ***
		- Reference (txt) + Etage (txt) + Nbre de chambre (Nr) + Nbre de m2 (Nr) + Prix (Nr) + Check box : A vendre / Vendu / Option / A louer
		- Wysiwyg
	*** En bref ***
		- Repeater : Label (txt) + valeur (txt)
		- Lien plan : .pdf

**Niveau Wordpress:** 
- Créez un type de post `Bien`.
- Vous devrez créer un template `archive.php` ou vous récupérez tous les posts `Bien`. 
- Il n'y pas besoin de créer de `single.php` pour ce site.
- Il y a des catégories : Rez-de-chaussée, étage 1, étage 2 .. > chaque `Bien` est associé à une catégorie maximum (obligez votre client à choisir une catégorie)
- Le design montre des catégories "sections", mais pas besoin de les créer, c'est cadeau. Limitez vous à la section 1, que vous écrirez en dur dans le template. 

### BONUS

Sur la page contact, vous voyez en haut une carte. 

Je vous ai demandé d'installer le plugin **ACF OpenStreetMap Field**.

Pour qu'il fonctionne vous devrez également installer la libraire [Leaflet](https://leafletjs.com/). Regardez la documentation. 

Voici les deux points de coordonnées à insérer.  
- Fond Jowa, Thimister-Clermont, Belgique
- Rue Noirivaux 23, 4870 Trooz, Belgique

Pour ces deux points, il y a deux markers différents qui doivent apparaître sur la carte. 

Concernant le style de la carte, essayez de mettre une couleur grise comme sur le design. 


## Délais

Ce travail est à remettre pour le **16 août 2019, 23:59:59**

## Conseils

- Comme vous allez travailler en groupe, faites attention pour gérer la DB. Echangez la dernière version régulièrement.
- Commencez par les pages, ensuite, occupez vous des posts.
- Amusez-vous bien !

![chaton](chaton.gif) 

## Charte des couleurs

- blanc :#FFFFFF
- bleu clair : #74AAD5
- bleu foncé: #13324B

## Font

- Texte : 
	- Montserrat
	- font-size: 15px
	- font-weigth: light
- Grand titre :
	- Montserrat
	- font-size: 80px
	- font-weigth: bold
- Titres secondaires :
	- Droid Sans
	- font-size: 45px;
- Menu :
	- Montserrat
	- font-size: 13px
	- font-weigth: bold
- Boutons :
	- Montserrat
	- font-size: 11px
	- font-weigth: bold
