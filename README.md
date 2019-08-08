# Startup Jepsen 2.14

<img src="group.jpg" alt="photo_de_groupe" width="300">

Ce repo est pour tout ce qui concerne ton activité à BeCode : briefings, parcours, etc.
Clone-le sur ton ordi et `git pull` régulièrement afin de rapatrier les mises à jour.

#### Ouais, mais moi, j'ai fait un fork !

Tu as forké ce repo ? C'est bien aussi.

Le truc, c'est que ton _fork_ est **indépendant** de sa source : si on fait des mises à jour ici, tu ne les verras pas sur ton fork.
C'est embêtant, mais pas de panique, git a une solution pour tout !

Dans ton terminal, navigue jusqu'au clone de ton fork, et entre la commande suivante :

    git remote add upstream https://github.com/becodeorg/LIE-Jepsen-2.14.git

Si tout s'est bien passé, la commande `git remote -v` devrait te retourner quatre lignes : deux pour `origin` (ton fork), deux pour `upstream` (le repo de référence).
Une fois ça fait, à chaque fois que tu voudras _synchroniser_ ton fork avec le repo de référence, il te suffira d'utiliser la commande suivante :

    git pull upstream master

## Tes sources d'information pour respecter les règles de BeCode

1. Lis le [contrat pédagogique](../../../BeCode/blob/master/contratpedagogique.md).
1. Consulte également le [livret des apprenants](https://docs.google.com/document/d/1ic7FbY_2QNg2X1n3jS0KEFEa7SbnsjKakEYkYc--XcE/edit?usp=sharing).
1. [L'agenda de ta startup](https://calendar.google.com/calendar/b/1?cid=YmVjb2RlLm9yZ19sc25wYXZvc29mOGMzMDY0MjJrOTQ1NnU0Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t)
1. Le [Wiki de BeCode](https://github.com/becodeorg/BeCode/wiki)
1. [Becode Liège](/infos/)

## Retards et absences

En cas de retard, d'absence ou de départ anticipé (que ça soit prévu ou pas du tout), préviens-nous !  

Dans l'ordre :
- Si tu as déjà ton justificatif, envoie-le directement via la plateforme [my.becode.org](https://my.becode.org)  [[Mode d'emploi](https://github.com/becodeorg/BeCode/blob/master/mybecode-absence-fr.md)]
- Si tu n'as pas encore ton justificatif, préviens tes coaches de ton absence à nico@becode.org et julie@becode.org. Tu le mettras sur [my.becode.org](https://my.becode.org) dès que tu l'as.
- Si tu sais que tu n'auras pas de justif, préviens-nous.

[Petit rappel](https://github.com/becodeorg/BeCode/blob/master/contratpedagogique.md#sanctions) :
- 2 retards non justifiés seront comptabilisés comme une absence ;
- 2 absences entraîneront une convocation en entretien individuel ;
- 6 absences non justifiées entraîneront une exclusion définitive ;
- Si le taux d'absence (justifiées ou non) dépasse 20%, BeCode pourra décider de l'exclusion définitive de l'apprenant(e).

## Contenus pédagogiques

[Le parcours pédagogique](https://docs.google.com/drawings/d/1lDE_wBLRhSdLYTVrR7MsBzxOl0aGE7V-lBRvP3052zw/edit?usp=sharing)

1. [La prairie](./01-the-field/)
2. [La colline](./02-the-hill/)
3. [La montagne](./03-the-mountain/)
4. [Les pâturages](./04-the-pastures/)


## Congés
| Dates | Pourquoi on n'est pas là ? |
|---|---|
| Semaine du 14 au 18 octobre | on se repose |
| Ve 01 novembre | Toussaint |
| Lu 11 novembre | Commémoration du 11 novembre |
| Semaine du 23 au 27 décembre | Vacances d'hiver (Noël)|
| Me 1 janvier 2020 | Jour de l'an |
