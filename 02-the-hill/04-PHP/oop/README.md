# OOP

![](https://media.giphy.com/media/2A3dXPpN6gqTGMatfY/source.gif)

## Introduction

A programming paradigm is a style, or “way”, of approaching a problem to come up with a solution. The two main paradigms in PHP are **procedural** and **object-oriented**.

No one programming paradigm solves every programming problems, but the more you know about different paradigms, the better prepared you’ll be to choose the right tool for the job, and write cleaner and more organized code.

> :spaghetti: Bad / “spaghetti code” that weaves all over your application and is complicated to follow, can be written in any paradigm, including OOP.

## OOP Definition

Object-Oriented Programming (PHP OOP), is a type of programming language principle that helps in building complex, reusable web applications.

## The Why

Sooner rather than later, you’ll have to work with object-oriented code.
Modularity
Scalability
Frameworks
Contributing to open source software.
Gives you various ways to think and solve problems.
More easily translate your programming skills into other Object-Oriented languages.
Become a more valuable developer.

## Tenets of Object-Oriented Programming

1. The DRY principal or Don’t Repeat Yourself. When you repeat the same code in multiple locations, updating becomes a nightmare. Maximize reusability, minimize repeating code.

2. The KISS principle: Keep It Simple Stupid. Don't use fancy OOP features just because you can. Use fancy OOP features because they have specific, demonstrable benefits to the problem you're trying to solve.


## Classes and Objects

### Declaring a Class
We declare a class using the “class” keyword, followed by the name of the class and a set of curly braces. Although PHP doesn't really care about spacing, the standard is to start the curly braces on the next line down. Although class names are NOT case sensitive, changing case within your program can get extremely confusing.

```php
class Recipe
{
}
```

The standard for naming classes is StudlyCaps, which means the first letter should be capitalized, as well as the first letter of any subsequent word, all other letters should be lower case. For example: in a class named *MyRecipe*.

### Instantiating an Object
After creating the class, a new object can be instantiated and stored in a variable using the “new” keyword:

```php
$recipe1 = new Recipe();
```


### Properties
Variables within a class are called properties.
The naming convention for properties is camelCase. For example, `$ingredients` or `$dryIngredients`.

### Access Modifiers
[PHP Docs: Visibility](https://www.php.net/manual/en/language.oop5.visibility.php)

Access modifiers allows us to control the access, or visibility, of our properties. These access modifiers are public, private, or protected. If declared using var, the property will be defined as public. When declaring a property, the visibility MUST be defined by an access modifier.

* **Public**: Publicly accessible from anywhere, even from outside the scope of the class.

* **Private**: Accessed within the class itself. It protects properties and methods from being accessed from outside the class.

* **Protected**: Same as private, except by allowing child (sub) classes to access protected parent (super) properties and methods.


## Object-Operators

Object-Operators allow us to access the properties and methods of a class. We reference the object name, the object-operator, and finally the property name. The object-operator consists of the characters dash and greater than, which together make a single arrow (->).

```php
$recipe->source = "Grandma";
```

*Note that the property name does not start with the $ sign; only the object name starts with a $, because this entire reference is one variable.*

## Methods
Functions within a class are called methods.

### Referencing Objects
OOP allows objects to reference themselves using the keyword variable $this. When working within the scope of a method, use the keyword $this in the same way you would use the object name outside the class. The $this keyword indicates that we want to use the object’s own properties or methods, and allows us to have access to them within the class scope.

```php
return $this->title . " by " . $this->source;
```

*Note: Just like accessing the property outside the class, only the keyword $this starts with the dollar sign, we don’t use the dollar sign again for the properties and methods. Together $this, with the property name, make up a single variable.*

### Accessing Methods
To use the displayRecipe method, we call it just like a regular function. The only difference is that we first reference the object it belongs to, with the object-operator (->), just like we did when accessing a property.

```php
echo $recipe1->displayRecipe();
```


## Access Modifiers

Access modifiers allows us to control the access, or [visibility](https://www.php.net/manual/en/language.oop5.visibility.php), of our properties. These access modifiers are public, private, or protected. If declared using var, the property will be defined as public. When declaring a property, the visibility MUST be defined by an access modifier.

### Don't Allow Property Change
If we wanted to keep someone from changing a property after it’s been set the first time, we could use two different options. Both require that the property itself is set to private. Only allow the property to be set in the `__construct` method and don't set up another method to change the property. Add a conditional to any method that modifies the property to first check that the property is empty before adding a value.

### Using Private Methods
Methods use access modifiers as well. So we can also use private to define a method. We may want to setup a method for formatting a property, but we only want to call that method from the `__construct` method or another method that combines more logic. For example, we only want to allow updating the user's name if we also verify the user's email.


### Why Getters and Setters

Some of these are concepts we wont be covering in this course, but here are a few ides:

Controlling the of behavior associated with getting or setting the property - this allows additional functionality (like validation) to be added more easily later.
Hiding the internal representation of the property while exposing a property using an alternative representation.
Allowing the getter/setter to be passed around as lambda expressions rather than values.
Getters and setters can allow different access levels - for example the get may be public, but the set could be protected.
Insulating your public interface from change - allowing the public interface to remain constant while the implementation changes without affecting existing consumers.
Providing a debugging interception point for when a property changes at runtime.
Improved interoperability with libraries that are designed to operate against property getter/setters - Mocking, Serialization, etc.
Allowing inheritors to change the semantics of how the property behaves and is exposed by overriding the getter/setter methods.

**[Static Methods](https://www.php.net/manual/en/language.oop5.static.php)**

**[Magic Methods](https://www.php.net/manual/en/language.oop5.magic.php)**

**[Magic constants](https://www.php.net/manual/en/language.constants.predefined.php)**
