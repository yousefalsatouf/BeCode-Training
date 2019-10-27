# Menu

* [Intro](/02-the-hill/04-PHP/oop/)
* [Tutorial : Classes & objects](/02-the-hill/04-PHP/oop/tutorial/classes.md)
* [Tutorial : Building class](/02-the-hill/04-PHP/oop/tutorial/build-class.md)

---


# Building the class

## Access Modifiers

[PHP Docs: Visibility](https://www.php.net/manual/en/language.oop5.visibility.php)

Access modifiers allows us to control the access, or visibility, of our properties. If declared using var, the property will be defined as public. When declaring a property, the visibility MUST be defined by an access modifier.

* **Public**: Publicly accessible from anywhere, even from outside the scope of the class.

* **Private**: Accessed within the class itself. It protects properties and methods from being accessed from outside the class.

* **Protected**: Same as private, except by allowing child (sub) classes to access protected parent (super) properties and methods.  


For this moment all our methods and properties are public, that means that any object can access  those properties and methods directly.  

While this does work, it doesn't give us any control over how the data is stored or retrieved. Often, we may want to sanitize or format the data before it's stored in the object.


## Setters

For example, if we're setting the title of our recipe  directly, we're at the mercy of whatever data is passed to our property. This data could contain anything, especially if we're accepting user input.

So instead of setting the property directly, we create another method called a **setter**, whose job it is to format the incoming data before setting the property.

Also, we don't want to be able to access the property directly, so we need to change the access modifier to `private`.

```php
private $title;

public function setTitle($title)
{
	$this->title = ucwords($title);
}
```
*the keyword `this` gives us access to the object's property, and the title, without the keyword `this` give us the passed argument*

Now we can do something with the title before actually setting the value. Here, we uppercase the first letter of the title with `ucwords()` function.

```php
$recipe1->setTitle("my first recipe");
echo $recipe1->title;
```

*output: "... cannot access private property..."*

## Getters

Setting the title property to `private` means that we can't read this title directly either.

We need to set up an other method called a `getter`.  

Getters and Setters work together to access private properties. 

```php
public function getTitle()
{
	return $this->title;
}

$recipe1->setTitle("my first recipe");
echo $recipe1->getTitle();
```
*output: "My First Recipe"*

## Private Methods

You can create pravate methods that can only be used by other methods within the class, but cannot be accessed directly by outside the class. 

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