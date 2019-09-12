# Character Manager

- Repository : `character-manager`
- Time : 3 days
- Job : by team with your godfather/nephew

## Objectives 

- Consolidate Javascript knowledge, especially Async/await
- Learn Typescript
- Use an API with HTTP requests



## The job

Marvel and DC Comics decided to gather their super heroes in a new blockbuster "The Mega Avengers Justice League Reunion". But they have a problem to manage all these characters. They contact us to create an app able to manage this.  

In this project, you will use the [Character Database API](https://character-database.becode.xyz/) to make a Character Manager.  
  
This is a frontend project, you have to care about the appearance of your application and create a custom template.

### Characters list page

This page will be the first one displayed when you open the app. Display the list of all the characters contained in the database. You can use a table or a list of cards to display them, at your convenience.

Make sure the following feature shoud be present for each character:

* Its name
* Its short description. Be warned that the `description` field is in Markdown and, of course, we want to display it as HTML in your application.
* Its image. **Hint**: [Data URIs](https://css-tricks.com/data-uris/)
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
* `image` **Hint**: [Reading local files in JavaScript](https://www.html5rocks.com/en/tutorials/file/dndfiles/)
* `description` (you can just let the user enter Markdown but a Wysiwyg editor generating Markdown would be much more cool)

When the form is completed create the character in the API and redirect to the character list page.

### Character edition page

This page should be similar to the Character creation page except it allows to edit an existing character.
button to delete characters. It should display a modal asking for confirmation.


## Constraints

* You have to use [TypeScript](https://www.typescriptlang.org/). A `.ts` file can understand Javascript Vanilla, but we ask you to use the TypeScript's features as :
	- Type annotations
	- Functions features
	- Interfaces
	- Classes features
	- ...
* Since you must handle multiple pages you must use some kind of router. 
* Your website must be deployed somewhere. We recommend Github Pages due to the fact it's free.

## Tips

### HTTP requests

This project ask you to perform HTTP Request. It is recommended to use [axios](https://github.com/axios/axios). To do so you can install it with:

```bash
npm install --save axios
```

Then to import it:

```javascript
import axios from 'axios';
```
Using axios it is strongly recommended to use the [async/await](https://javascript.info/async-await) syntax when working with asynchronous operations.

### Postman

To test APIs rapidly before coding you should use [Postman](https://www.getpostman.com/). 
To start using it today with the Character Database API you can use [this Postman collection](https://static.becode.xyz/character-database/characters-database.postman_collection.json).


