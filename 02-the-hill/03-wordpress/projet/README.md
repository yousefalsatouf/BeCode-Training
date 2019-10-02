# Projet - COMPOSITION

- Repository : `cms-composition`
- Time : 3 days
- Team : group of 2 or 3

## Objectifs

- Créer un site web à l'aide d'un CMS
- Créer une belle interface client avec des champs customisés
- Respecter un design au pixel près

## Présentation

Composition est une société d'architecte d'intérieur et de vente de meubles design. Ils excellent dans leur domaine, "L'esthétique comme horizon" est leur adage. 

En accord avec cette idée, ce client a entreprit de rafraîchir son site vieillissant. Pour ce faire, il a contacté René Binamé, un project manager et designer. Après des semaines de boulot, ils ont défini et dessiné les contours de ce futur site web.

C'est à ce moment que vous intervenez. En effet, René contacte votre équipe pour réaliser le projet. Il vous fournit de magnifiques layouts et des instructions très précises.  

## Demande

Le client souhaite pouvoir éditer le contenu de son site régulièrement. C'est pourquoi un CMS est la meilleure solution que vous pouvez lui fournir. 

Peu importe le CMS utilisé, tant que l'interface utilisateur est facile à comprendre et les champs à remplir sont clairs.  

Vu son exigence envers le design, le client souhaite que vous respectiez **scrupuleusement** ce qui a été dessiné par René Binamé.

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
