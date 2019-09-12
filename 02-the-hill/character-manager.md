# Character Manager

In this exercise we will use the [Character Database API](https://character-database.becode.xyz/) to make a Character Manager.


## HTTP requests

Some of these exercises will ask you to perform HTTP Request. It is recommended to use [axios](https://github.com/axios/axios). To do so you can install it with:

```bash
npm install --save axios
```

Then to import it:

```javascript
import axios from 'axios';
```

Using axios it is strongly recommended to use the [async/await](https://javascript.info/async-await) syntax when working with asynchronous operations.

To test APIs rapidly before coding you should use [Postman](https://www.getpostman.com/).

## 1 - List the characters

Display the list of all the characters contained in the database. You can use a table or a list of cards to display them, at your convenience.

Make sure the following fields are displayed:

* `name`
* `short_description`

## 2 - Display image

Also add the image in your list of characters.

**Hint**: [Data URIs](https://css-tricks.com/data-uris/)

## 3 - Long description

When we click on one of the characters in the list, display a [modal window](https://en.wikipedia.org/wiki/Modal_window) that will show all the information about that specific character including the `description` field. You can use the modals provided by Bootstrap or any other solution as long as it looks and work like a model. Also be warned that the `description` field is in Markdown and, of course, we want to display it as HTML in your application.

## 4 - Creation of a character

Add a "Create" button that will open a modal. That modal should contain a form with an input for each of the following fields:

* `name`
* `shortDescription`
* `description` (you can just let the user enter Markdown)

When the form is completed create the character, close the modal and reactualize the list of characters.

## 5 - Edition of a character

Add an edit button next to each character in the list. When clicked it opens a modal allowing to edit the character.

## 6 - Images edition

Modify both the create and edit modals to allow the edition of the image.

**Hint**: [Reading local files in JavaScript](https://www.html5rocks.com/en/tutorials/file/dndfiles/)

## 7 - Delete

Add a "Delete" button to delete characters. It should display a modal asking for confirmation.



## Projet - React Character Manager

Le projet proposé ici est du déjà vu. Ce n'est autre que le projet *Character Manager* du cours *JavaScript for the Web*, en un peu modifié. Tu n'avais pas eu le temps de le faire ? Ce sera l'occasion. Tu l'as déjà fait ? Tant mieux ! Tu pourras constater la différence entre un projet JavaScript Vanilla et un projet React.

### Project description

In this exercise we will use the [Character Database API](https://character-database.becode.xyz/) to make a Character Manager.

### Constraints

* Name of the project in your Github account: `react-character-manager`
* Of course you must use React and all its best practices ^^
* Since you must handle multiple pages you must use some kind of router for React. The most common one is [React Router](https://reacttraining.com/react-router/). (Be warned that it is much more easy with React Router to use `<HashRouter>` than `<BrowserRouter>`, even if the quick start proposes `<BrowserRouter>`)
* **Visual Design is important**. This is a frontend project, you have to care about the appearance of your application and spend some time to create a custom template. As usual we recommend using [Bootstrap](https://getbootstrap.com/) with compiled SCSS but you can basically do as you want in this project as long as it's pleasant to the eye.
* Your website must be deployed somewhere. We recommend Github Pages due to the fact it's free.

### Postman collection

In your future projects you will probably use [Postman](https://www.getpostman.com/) a lot to test JSON APIs. To start using it today with the Character Database API you can use [this Postman collection](https://static.becode.xyz/character-database/characters-database.postman_collection.json).

### Characters list page

This page will be the first one displayed when you open the app. Display the list of all the characters contained in the database. You can use a table or a list of cards to display them, at your convenience.

Make sure the following feature shoud be present for each character:

* Its name
* Its short description
* Its image
* A way to open the corresponding Character page
* A way to open the Character edition page (can be located on the character page instead if you want)
* A way to delete the character (you **must** add some kind of confirmation, like a modal window)

This page should also contain a button to create a new character.

### Character page

This page should display a full description of the character. Be warned that the `description` field is in Markdown and, of course, we want to display it as HTML in your application.

### Character creation page

When we click on the character creation button in the Characters list page that should redirect to this page. This page should contain a form with an input for each of the following fields:

* `name`
* `shortDescription`
* `image`
* `description` (you can just let the user enter Markdown but a Wysiwyg editor generating Markdown would be much more cool)

When the form is completed create the character in the API and redirect to the character list page.

### Character edition page

This page should be similar to the Character creation page except it allows to edit an existing character.
button to delete characters. It should display a modal asking for confirmation.