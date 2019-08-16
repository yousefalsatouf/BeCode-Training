
# Algorithmics with JavaScript 01 - Introduction

JavaScript is a powerful programming language designed to add interactivity to web pages, thus improving the user experience. It is present in all web browsers. Nowadays it is also used more and more on servers due to its many advantages.

Due to its simplicity it is a good tool to learn algorithmics. Trainees will also have the added benefit of knowing a widely available programming language at the end of this course.

**You should not confuse Java and JavaScript. They are completely different programming languages.** [Take a look here if you want to understand why they have so similar names](https://stackoverflow.com/questions/2018731/why-is-javascript-called-javascript-since-it-has-nothing-to-do-with-java).

## Install Node.js

If you read this it means you probably already have a program on your computer that allows you to execute JavaScript: your web browser. It can be Chrome, Firefox (or, if you are unlucky, Edge, Internet Explorer or Safari). They all contain a JavaScript interpreter.

But here we will not use any of those. We will use an implementation of JavaScript which is more appropriate to learn its fundamentals: [Node.js](https://nodejs.org).

So don't wait and install it! On Ubuntu here are the steps you must follow:

```
sudo apt-get install curl software-properties-common
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
```

```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

Then create a folder in you home folder named `js`:

```bash
mkdir js
cd js
```

Execute the following command to install some more tools that we will need for this lesson:


```bash
npm install readline-sync
```

Create a file named `test.js` in the `js` folder and copy-paste the following content in it:

```javascript
console.log("It works !!!");
```

Finally type the following command:

```bash
node test.js
```

If it displays `It works !!!` it means everything went fine.

You can also test the interactive mode of Node.js by simply typing:

```bash
node
```

It's useful to quickly test some pieces of code!

## Bases

### Display some data

We've already seen this:

```javascript
console.log("hello");
```

`console.log()` is often used to debug your code or to display small message. Use it and abuse it in all the exercices to understand what happens in your programs.

### Ask data to the user

Type **one and only one time** this line of code at the top of your file to import the little library we installed earlier:

```javascript
const readlineSync = require("readline-sync");
```

Then you can do this:

```javascript
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);
```

It's not frequently used in real-life programs but it will be useful for simple exercises.

### Variables

```javascript
let age = 25;
```

A variable is... well, it's a thing that holds stuffs. The `let` keyword allows us to define a new variable. Then we can assign what we want to it using the `=` operator.

```javascript
let age = 25; // I'm 25
age = 36; // I get older
age = 18; // Miraculously I'm getting younger
```

#### Types of variables

Numbers:

```javascript
let age = 25;
```

String:

```javascript
let phrase = "Coding is fun!";
```

Booleans:

```javascript
let isItTrue = true;
let isItFalse = false;
```

### Numbers

```javascript
let age = 23;

let sisterAge = age + 11;

age += 12; // age = age + 12;

console.log(age);
```

### Arithmetic operators

* Addition: `+`
* Soustraction: `-`
* Multiplication: `*`
* Division: `/`
* Modulo: `%`

### Strings

```javascript
let name = "Jean";
let nameSister = "Emma";
console.log("My name is " + name);

let userName = readlineSync.question("What's your name?");
console.log("He's called " + userName);
```

### `new Number()`

```javascript
let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?'));

let cssBadges = new Number(readlineSync.question('How many CSS badges do you have?'));

let totalBadges = htmlBadges + cssBadges;

console.log('Woaw, you have ' + totalBadges + "!");
```

`new Number()` converts a string to a number.

### Beware of variable types !

```javascript
console.log('10' + '5'); // '105' => string type

console.log(10 + 5); // 15 => number type
```

## Exercises

### Exercise 1.0 - Interactive Mode

Launch node in interactive mode and use it to make an addition. Then repeat the same step until you have tested all five arithmetic operators we presented before.

Wonderful ! From now on you'll never need a calculator anymore.

### Exercise 1.1

Define a variable and display it in the console.

### Exercise 1.2

Define three variables: `name`, `firstName` and `city`. Display them like this: "Your name is Gerard Lambert and you live in Paris.".

### Exercise 1.3

Ask the user to enter its first name and display a message saying "Hello first name".

### Exercise 1.4

Make this same thing as *Exercise 2* but this time ask the user for the name, the first name and the city.

### Exercise 1.5

Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

*You will have to perform a search on Google to know how to only keep the integer part of a number.*

### Exercise 1.6

Ask two integers to the user. Display the rest of the integer division of the two numbers.

### Exercice 1.7

Ask to the user its shoe size and its birth year. Then make the following calculation:

* Multiply the shoe size by 2
* Add 5 to the result
* Multiply that by 50
* Subtract the birth year
* Add 1766

Test with your own birth year and your shoe size.

### Exercice 1.8

Create a "Story Teller".

Ask questions to the user about different things. Store the results he gives to you. Display them in a way that it creates a fun story!

Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked.

## Ressources

* [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
* [Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
