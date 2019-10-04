# Tutoriel ACF : récupération dans les templates

Maintenant que nous avons créé nos champs grâce au plugin, il faut les récupérer dans les templates de notre thème. 

En l'occurrence, nous allons insérer tout ça dans `front-page.php`.

Je vais reprendre les champs un par un. 

Concernant les balises HTML et leurs attributs, je copie-colle mon propre code, à vous de l'adapter à votre projet.  

Concentrez-vous sur le code PHP, avec les fonctions `get_field()`, `the_field()`, `get_sub_field()`, `have_rows()` ... 

Avec un peu de pratique,vous verrez que c'est assez simple de récupérer les champs. Et si vous êtes bloqués, la [documentation d'ACF](https://www.advancedcustomfields.com/resources/) explique très bien comment les récupérer.

## `get_field()` et `the_field()`

La fonction `get_field()` est la base pour récupérer un champs. 

- Le premier paramètre est le slug,  
- Le deuxième (optionnel) est le post id,
- Le troisième (optionnel) est le format de retour

Pour plus d'explications, regardez dans la [documentation](https://www.advancedcustomfields.com/resources/get_field/) 

`the_field()` équivaut à `echo get_field()`. Il retourne **la valeur** d'un champs. 

## Récupération des champs

### ACF to Rest API

Pour s'y retrouver dans les objets ACF, le plugin **ACF to Rest API** pourrait vous aider.

Pour l'utiliser, dans votre navigateur tapez `localhost/nom-du-site/wp-json/acf/v3/pages`.

Vous voyez maintenant un fichier JSON qui comprend toutes les pages, classées par leur id, et tous leurs champs ACF. 

Grâce au REST API de Wordpress, vous pourrez facilement récupérer vos champs et voir comment ACF organise votre contenu.

Pour voir les autres chemins possibles, voir la [documentation](https://github.com/airesvsg/acf-to-rest-api).  

### Tab (Onglet)

Pour rappel, c'est une simple mise en page pour la disposition dans le CMS.

### Image

- Field name: image_g

```php
<img class="image" src="<?php echo get_field('bandeau_image_g')['sizes']['home_top']; ?>">
```

Pour rappel, j'ai choisi que le champs Image me renvoit un array. 

Lorsqu'on upload une image dans Wordpress, celui-ci ne se contente par de la taille fournie. Il va créer tout un tas de déclinaisons, certaines de bases, d'autres qu'on peut lui assigner. 

Par exemple, ici j'ai créé un format d'Image spécifique pour le top de ma page d'accueil, appelé `home_top` dont la taille est de 1500px sur 1250px. 

Pour aller rechercher mon format d'image dans l'objet ACF créé, je dois écrire la clé `['sizes']` puis le format souhaité, ici `['home_top']`. 


### Titre

- Field name: bandeau_titre_g

```php
<h1 class="title"><?php the_field('bandeau_titre_g') ?></h1>
```

### Survol

- Field name: bandeau_survol_g

```php
<h3 class="sous-titre"><?php the_field('bandeau_survol_g']['titre'] ?></h3>
```

### Bouton

- Field name: bouton

```php
<?php 
  $group = get_field('bandeau_bouton');

  if($group['title']) :

  $url = $group['url'];
  $target = 'target="_blank" rel="noopener"';

  if( $group['choice'] == 'pagelink' ) {
      $url = $group['page_link'];
      $target = '';
  } ?>

  <a class="lien" href="<?php echo $url ?>" <?php echo $target; ?> >
      <div class="icon-container">
        <img class="icon" href="<?php (source de l'image) ?>">
      </div>
      <p><?php echo $group['title']; ?></p>
  </a>

  <?php endif; ?>
```
Ici, le code est un peu long, c'est parce qu'il y a une condition, soit c'est un lien interne, soit un lien externe. 



## A vous de jouer

Votre projet est désormais bien lancé !

Bien sûr, nous n'avons pas vu tous les types de champs. Il y en a beaucoup. Mais vous avez vu les grands principes des ACF.

Pour les autres types, il vous restera à les découvrir grâce à la documentation. 

Dernier conseil pour bien mettre en place vos champs customisés, mettez vous à la place du client. Celui-ci doit pouvoir remplir ses champs sans trop se poser de questions et ceux-ci doivent refléter ce qu'il voit en front. Votre client vous en sera reconnaissant... 

Bonne chance pour votre projet ! 

___

[Retour menu](../)
