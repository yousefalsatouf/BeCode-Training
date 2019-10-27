# Menu

* [Intro](/02-the-hill/04-PHP/oop/)
* [Tutorial : Classes & objects](/02-the-hill/04-PHP/oop/tutorial/classes.md)
* [Tutorial : Building class](/02-the-hill/04-PHP/oop/tutorial/build-class.md)

---

# The project 

From our cookbook, we'll be able to perfom some actions. 

* display the recipe titles. 
* display an shopping list of ingredient
* display an individual recipe

Let's begin.

![crazy cooker](http://giphygifs.s3.amazonaws.com/media/LVBH3rg1BUROw/giphy.gif)

# Classes and Objects

## Class
**A class contains all the functions and variables that define an object. Functions are called methods and variables are called properties.**

We declare a class using the “class” keyword, followed by the name of the class and a set of curly braces. Although PHP doesn't really care about spacing, the standard is to start the curly braces on the next line down. Although class names are NOT case sensitive, changing case within your program can get extremely confusing.

Let's create a file called `classes` in your PHP's environment system and it a a file called `recipe.php`. Inside declaring class `Recipe`.

```php
class Recipe
{
}
```

The standard for naming classes is StudlyCaps, which means the first letter should be capitalized, as well as the first letter of any subsequent word, all other letters should be lower case. For example: in a class named *MyRecipe*.

## Instantiating an Object
After creating the class, a new object can be instantiated and stored in a variable using the “new” keyword:

```php
$recipe1 = new Recipe();
```

## Properties
Variables within a class are called **properties**.
The naming convention for properties is camelCase. For example, `$ingredients` or `$dryIngredients`.  


We can create a property with or without default value or initializing it. 

```php
class Recipe
{
	public $title;
	public $ingredients = array();
	public $instructions = array();
	public $yield;
	public $tag = array();
	public $source = "The crazy cooker";
}
````

From now, we we'll give access to our properties `public`. We'll talk about *access modifiers* later.

### Object-Operators

Object-Operators allow us to access the properties and methods of a class. We reference the object name, the object-operator, and finally the property name. The object-operator consists of the characters dash and greater than, which together make a single arrow (->).

```php
$recipe1 = new Recipe();
echo $recipe1->source;
```
*output: "The crazy cooker"*

*Note that the property name does not start with the $ sign; only the object name starts with a $, because this entire reference is one variable.*

## Methods
Functions within a class are called **methods**.

### Referencing Objects
OOP allows objects to reference themselves using the keyword variable $this. When working within the scope of a method, use the keyword $this in the same way you would use the object name outside the class. The $this keyword indicates that we want to use the object’s own properties or methods, and allows us to have access to them within the class scope.

```php
public function displayRecipe() 
{
	return $this->title . " by " . $this->source;
}

```

*Note: Just like accessing the property outside the class, only the keyword $this starts with the dollar sign, we don’t use the dollar sign again for the properties and methods. Together $this, with the property name, make up a single variable.*

### Accessing Methods
To use the displayRecipe method, we call it just like a regular function. The only difference is that we first reference the object it belongs to, with the object-operator (->), just like we did when accessing a property.

```php
echo $recipe1->displayRecipe();
```

-----

[Next: Building the class](building-class.md)
