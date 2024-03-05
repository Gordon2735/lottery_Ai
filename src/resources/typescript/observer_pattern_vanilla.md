# The Observer Pattern with Vanilla JavaScript

[

![Patrick Ackerman](https://miro.medium.com/v2/resize:fill:88:88/0*DpfxGlLr-sLHClsF.)

](https://medium.com/@patrickackerman?source=post_page-----8f85ea05eaa8--------------------------------)

[Patrick Ackerman](https://medium.com/@patrickackerman?source=post_page-----8f85ea05eaa8--------------------------------)

Feb 10, 2017

_(The second in a series of JavaScript oriented design pattern articles)_

In my previous article, we built a trivial implementation of the popular MVC architectural pattern using vanilla JavaScript. Now, let’s take a look at augmenting that implementation with some classic GOF patterns.

# The Observer Pattern

In our MVC implementation, our controller mediates interaction between the view and the model: the view triggers a change in the model through the controller, and then the model updates the view through the controller.

![](https://miro.medium.com/v2/resize:fit:630/1*Jmiq0Y3-uQMc-hoh8WUkzA.png)

Two-Way Data Flow

With the **Observer** pattern, we can make the model into an “observable”, and a view into an “observer”. When the observable is changed, it notifies the observer of its state, and the observer can react to that change. This makes our data flow unidirectional. The controller no longer updates the view, the view updates according to the model.

![](https://miro.medium.com/v2/resize:fit:630/1*m4GC21LL7em3t9jnbAlWgw.png)

Data Flow with Observer Pattern

We do this by making our model implement the observable interface, and our view implement the observer interface. Unlike the EventListener interface specified by the DOM API, these interfaces are more abstract. The names of the method’s we implement are not so important, but the way in which they interact will be (note, though, that our naming will be more-or-less consistent with their corresponding Java-defined interfaces).

![](https://miro.medium.com/v2/resize:fit:630/1*mmTHcQFfbad820Dz75hHgQ.png)

UML Diagram for Observer Pattern (Source: Wikipedia)

We will give the model class a `notifyAll` method, and the view an `update` method. We will also give the model a method for registering an observer (`registerObserver`) and an array property for storing references to its observers (`observers`). Once the model and view have been instantiated, we will register the view with the model using `registerObserver` and whenever the controller changes the model, we will call `notifyAll()` . This will iterate over all the observers, calling their `update()` method passing the state of the model as an argument.

**Our new Model:**

```javascript
function Model(){
 var self = this;
 this.heading = "Hello";
 //collection of observers
 this.observers = \[\];
 //add to the collection of observers
 this.registerObserver = function(observer){
 self.observers.push(observer);
 }
 //Iterate over observers, calling their update method
 this.notifyAll = function(){
 self.observers.forEach(function(observer){
 observer.update(self);
 })
 }
}
```

**Our new View:**

```javascript
function View(controller){
 this.controller = controller;
 this.heading = document.getElementById(‘heading’);
 this.heading.addEventListener('click', controller);
 this.update = function(data){
 this.heading.innerText = data.heading;
 }
 this.controller.model.registerObserver(this);
}
```

**Here we register the view with the model as an observer. We still need to change our controller’s click handler, so that we can call the Model’s `notifyAll` method:**

```javascript
function Controller(model) {
	var self = this;
	this.model = model;
	//EVENTLISTENER INTERFACE
	this.handleEvent = function (e) {
		e.stopPropagation();
		switch (e.type) {
			case 'click':
				self.clickHandler(e.target);
				break;
			default:
				console.log(e.target);
		}
	};
	//GET MODEL HEADING
	this.getModelHeading = function () {
		return self.model.heading;
	};
	//CHANGE THE MODEL
	this.clickHandler = function (target) {
		self.model.heading = 'World';
		//now we just notify our observers
		self.model.notifyAll();
	};
}
```

Now instead of changing the text through the controller, the view takes care of it itself after the model changes. Our `main` function should still work as written in the previous article.

# Improvements

There are still some opportunities for improvement/cleaner implementation:

-   Getter and Setter logic should be contained within the model, so that we can trigger notification in the model when the value is updated, rather than having to do so manually in the controller
-   We can abstract the heading value using the State pattern and make it so we can toggle between “hello” and “world”, rather than simply initiating the change once

# Object.defineProperties()

Instead of simply declaring `getHeading()` and `setHeading()` methods, we can use `Object.defineProperties()` to do some meta-programming. With this static Object method, we can change how our object properties react to “dot” or “bracket” access (`object.property` or `object[“property”]`) or assignment. You can also use it to accomplish many other useful things, but that’s outside of the scope of this article.

**We are actually going to use `Object.defineProperty()` rather than `Object.defineProperties()` because we are only concerned with one property, but the idea is the same. We use it in the object constructor like this:**

```javascript
function Model(){
 var self = this;
 // heading is no longer a property, but a scoped variable
 var heading = "Hello"
 this.observers = \[\];
 this.registerObserver = function(observer){
 self.observers.push(observer);
 }
 this.notifyAll = function(){
 self.observers.forEach(function(observer){
 observer.update(self);
 })
 }
 //Pass this, as its the object we want to affect. Heading is the
 //name of the property we want it to be attached to. Than we
 //define the accessor and assignment functions
 Object.defineProperty(this,"heading",{
 get: function() { return heading; },
 set: function(value) {
 heading = value;
 //call notifyAll in the assignment function
 this.notifyAll();
 }
 });
}
```

We call it in the constructor, passing in `this` as the object we’re targeting, `"heading"` as the name of the property/key on the object we want to use to access or assign the value, and a configuration object that defines both `get()` and `set()` functions. Notice that instead of defining the `heading` property directly on `this`, we make it a scoped variable that the configuration object has access to. We can now call `notifyAll` within the setter, so whenever we assign the `heading` property a new value, the View will be updated.

_(If you are familiar with Python, this is very similar to defining_ `___getitem___` _and_ `___setitem___` _on a class definition, though in this case, it’s for a specific property)._

This should work as is, all we need to do is remove the call to `self.model.notifyAll()` in the controller’s click handler.

# State Pattern

As mentioned before, we can abstract our state into a toggle-able pattern. But we’ll save that for the next article!

([Part III](https://medium.com/@patrickackerman/the-state-pattern-with-vanilla-javascript-e40ff83e85d0))

[

JavaScript

](https://medium.com/tag/javascript?source=post_page-----8f85ea05eaa8---------------javascript-----------------)

[

Observer

](https://medium.com/tag/observer?source=post_page-----8f85ea05eaa8---------------observer-----------------)

[

Software Design Patterns

](https://medium.com/tag/software-design-patterns?source=post_page-----8f85ea05eaa8---------------software_design_patterns-----------------)

[

Defineproperties

](https://medium.com/tag/defineproperties?source=post_page-----8f85ea05eaa8---------------defineproperties-----------------)

656

656

2

[

![Patrick Ackerman](https://miro.medium.com/v2/resize:fill:144:144/0*DpfxGlLr-sLHClsF.)

](https://medium.com/@patrickackerman?source=post_page-----8f85ea05eaa8--------------------------------)

Follow

[

## Written by Patrick Ackerman

](https://medium.com/@patrickackerman?source=post_page-----8f85ea05eaa8--------------------------------)

[268 Followers](https://medium.com/@patrickackerman/followers?source=post_page-----8f85ea05eaa8--------------------------------)

Follow

## More from Patrick Ackerman

[

![Classic Front End MVC with Vanilla Javascript](https://miro.medium.com/v2/resize:fit:611/1*eG2DYVb_HozJ6RboNZZbQg.png)

](https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702?source=author_recirc-----8f85ea05eaa8----0---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

[

![Patrick Ackerman](https://miro.medium.com/v2/resize:fill:18:18/0*DpfxGlLr-sLHClsF.)

](https://medium.com/@patrickackerman?source=author_recirc-----8f85ea05eaa8----0---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

[

Patrick Ackerman

](https://medium.com/@patrickackerman?source=author_recirc-----8f85ea05eaa8----0---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

[

## Classic Front End MVC with Vanilla Javascript

### (The first in a series of JavaScript oriented design pattern articles)

](https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702?source=author_recirc-----8f85ea05eaa8----0---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

[

6 min read·Feb 9, 2017

](https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702?source=author_recirc-----8f85ea05eaa8----0---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

674

[

14

](https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702?responsesOpen=true&sortBy=REVERSE_CHRON&source=author_recirc-----8f85ea05eaa8----0---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

[

![Writing a Firebase Clone with PostgreSQL and Node.js (Part I)](https://miro.medium.com/v2/resize:fit:611/1*V3oNY-XRINUEGBTvzRAdHQ.png)

](https://medium.com/@patrickackerman/writing-a-firebase-clone-with-postgresql-and-node-js-part-i-d0bf1d8f0ea8?source=author_recirc-----8f85ea05eaa8----1---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

[

![Patrick Ackerman](https://miro.medium.com/v2/resize:fill:18:18/0*DpfxGlLr-sLHClsF.)

](https://medium.com/@patrickackerman?source=author_recirc-----8f85ea05eaa8----1---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

[

Patrick Ackerman

](https://medium.com/@patrickackerman?source=author_recirc-----8f85ea05eaa8----1---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

[

## Writing a Firebase Clone with PostgreSQL and Node.js (Part I)

### I have been working on my own Firebase-like framework for Node.js called wrest for a little under a month, and felt I should share the…

](https://medium.com/@patrickackerman/writing-a-firebase-clone-with-postgresql-and-node-js-part-i-d0bf1d8f0ea8?source=author_recirc-----8f85ea05eaa8----1---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)

[

7 min read·May 25, 2017

](https://medium.com/@patrickackerman/writing-a-firebase-clone-with-postgresql-and-node-js-part-i-d0bf1d8f0ea8?source=author_recirc-----8f85ea05eaa8----1---------------------2172e427_c401_4b78_a3c1_a2db2a3ad4df-------)
