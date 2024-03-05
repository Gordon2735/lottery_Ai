![Observer Pattern with Vanilla JS](https://res-2.cloudinary.com/under-the-hood-learning/image/upload/q_auto/v1/blog_images/Observer-Pattern-Featured.png)

# Observer Pattern with Vanilla JS

[#Design Pattern,](https://www.underthehoodlearning.com/tag/design-pattern) [#General Concepts](https://www.underthehoodlearning.com/tag/concept)

In the [previous article](https://www.underthehoodlearning.com/mvc-architectural-design-pattern-with-vanilla-js), we learned about the **MVC** architectural pattern using vanilla JS. In this article, we will take another step further to improve our data flow between **model, view,** and **controller** by implementing the **Observer** pattern.

> In this article, we will:
>
> -   Explore ways to improve data flow for the existing MVC pattern.
> -   Learn about the problems that the **Observer** is designed to solve.
> -   Learn what the **Observer** pattern is all about.
> -   Explore how to implment the **Observer** patern using example from the previous article.

In our MVC implementation, our **controller** mediates the interaction between the **view** and the **model,** _i.e. the_ **_view_** _triggers a change in the_ **_model_** _through the_ **_controller,_** _and then the_ **_model_** _updates the_ **_view_** _through the_ **_controller._** This setup is referred to as a _**two-way data flow.**_

![MVC---Unidirection](https://res-4.cloudinary.com/under-the-hood-learning/image/upload/q_auto/v1/blog_images/MVC---Unidirection.png)

With the **Observer** pattern, we can turn the _**model**_ into an _**"observable"**_ and the _**view**_ into an _**"observer".**_ When the _**observable**_ is changed, it _**notifies**_ the _**observer**_ of its _**state**_, and the _**observer**_ can react to that change. This makes our data flow **_unidirectional._** The **_controller_** no longer updates the **_view,_** the **_view_** updates according to the **_model._**

![](https://res-5.cloudinary.com/under-the-hood-learning/image/upload/q_auto/v1/blog_images/MVC---Unidirection-2.png)

The **Observer** is a _**behavioral design pattern**_ that lets you define a _**subscription mechanism**_ to notify multiple objects about any events that happen to the object they're observing.

## What problem does the Observer pattern solve?

It's sometimes helpful to use a real-world analogy in order to understand the kind of problem that this pattern is designed to solve. Let's just say that you really enjoy the content published on my blog.😉 Instead of having to visit my site every day to check for new articles (not that I'm against that idea 😜), you could choose to subscribe to my [Facebook](https://www.facebook.com/Under-The-Hood-Learning-112854551165759), [Twitter](https://twitter.com/UTHlearning), or [Instagram](https://www.instagram.com/underthehoodlearning/) pages so that you receive a notification every time I publish a new article. I'd suggest you subscribe to my blog, but it's not set up yet.😁 Anyway, you get the idea.

Use the **Observer** pattern when:

-   Changes to the state of one object require changing other objects, and the actual set of objects that are to be updated based on the state change is unknown beforehand or changes dynamically. For example, you created a custom button class, and you want to let the clients hook some custom code to your button so that it fires whenever a user presses the button. You can add the subscription mechanism to your button class, letting the clients hook up their custom code via custom subscriber classes.
-   Some objects in your app must **_observe_** others, but only for a limited time or in specific cases. The observer list is dynamic, so subscribers can join or leave the list whenever they need to.

## What is the Observer pattern?

The **Observer** pattern consists of an **_observable/subject/publisher_** and an **_observer/subscriber._**

-   **Observable/Subject/Publisher** is an object/class that maintains a list of observers/subscribers that it needs to notify when it is updated. It will also need to provide a subscription mechanism to allow the observers to subscribe or unsubscribe from its event streams. In reality, this mechanism consists of:
    1. `observers`: This class property holds an array of observers.
    2. `addObserver()`: This method adds an observer to the `observers` array
    3. `removeObserver()`: This method removes an observer from the `observers` array
    4. `notify()`: This method notifies all observers that a change has happened.
-   **Observer/Subscriber** is any object/class that wants to subscribe/listen to changes in the _**publisher**_ by implementing an `update()` method that will be called by the _**publisher's**_ `notify()` method.

## How to implement the Observer pattern?

In real-world applications, there might be several different subscriber classes/objects subscribing to the same publisher class. So, we wouldn't want to couple the publisher to all of those subscriber classes. That's why it's crucial that all subscribers implement the same **_interface_** and that the publisher communicates with them only through that interface. However, since we will be using Vanilla JS to keep things simple, we don't have access to **_interfaces._** We can create **_parent classes_** from which we can extend. Specifically, the `Observable` and `Observer` parent classes will have those properties and methods required in order to implement the observer pattern.

Building up from our previous example of the MVC architectural pattern in the previous blog post, we will now implement the **Observer** pattern in order to achieve the **_unidirectional data flow._**

1. Create the `Observable` parent class with the `addObserver()` and `removeObserver()`, and `notify()` methods.

    ```javascript
    class Observable {
    	constructor() {
    		this.observers = [];
    	}

    	// Add an observer to this.observers.
    	addObserver(observer) {
    		this.observers.push(observer);
    	}

    	// Remove an observer from this.observers.
    	removeObserver(observer) {
    		const removeIndex = this.observers.findIndex((obs) => {
    			return observer === obs;
    		});

    		if (removeIndex !== -1) {
    			this.observers = this.observers.slice(removeIndex, 1);
    		}
    	}

    	// Loops over this.observers and calls the update method on each observer.
    	// The state object will call this method everytime it is updated.
    	notify(data) {
    		if (this.observers.length > 0) {
    			this.observers.forEach((observer) => observer.update(data));
    		}
    	}
    }

    export default Observable;
    ```

2. Create the `Observer` parent class. At a bare minimum, it should include the `update()` method.

    ```javascript
    class Observer {
    	// Gets called by the Subject::notify method.
    	update() {}
    }

    export default Observer;
    ```

3. Update the `HeadingModel` class to have it extend the `Observable` parent class.  
   ![2021-11-22-05_36_32-Computed-Diff---Diff-Checker](https://res-4.cloudinary.com/under-the-hood-learning/image/upload/q_auto/v1/blog_images/2021-11-22-05_36_32-Computed-Diff---Diff-Checker.png)

    ```javascript
    import Observable from './observable';

    class HeadingModel extends Observable {
    	constructor() {
    		super();
    		this.heading = 'Hello';
    	}
    }

    export { HeadingModel };
    ```

4. Update the `HeadingView` class to have it extends the `Observer` parent class. We will need to implement the `update()` method that is required by the parent class and is called each time the `notify()` method in the `Observable` class is called. We will also need to register the `HeadingView` as an _**observer**_ of the `HeadingModel` _**observable**_ via the `addObserver()` method.  
   ![2021-11-22-05_38_54-Computed-Diff---Diff-Checker](https://res-1.cloudinary.com/under-the-hood-learning/image/upload/q_auto/v1/blog_images/2021-11-22-05_38_54-Computed-Diff---Diff-Checker.png)

    ```javascript
    import Observer from './observer';

    class HeadingView extends Observer {
    	constructor(controller) {
    		super();
    		this.controller = controller;
    		this.heading = document.getElementById('heading');
    		this.heading.innerText = controller.modelHeading;
    		this.heading.addEventListener('click', controller);
    		this.controller.model.addObserver(this);
    	}

    	update(model) {
    		this.heading.innerText = model.heading;
    	}
    }

    export { HeadingView };
    ```

5. Finally, we need to update our controller's `clickHandler()` method to call the `HeadingModel`'s `notify()` method each time the event is emitted instead of changing the `innerText` through the controller.  
   ![2021-11-22-05_44_02-Computed-Diff---Diff-Checker](https://res-3.cloudinary.com/under-the-hood-learning/image/upload/q_auto/v1/blog_images/2021-11-22-05_44_02-Computed-Diff---Diff-Checker.png)

    ```javascript
    class HeadingController {
    	constructor(model) {
    		this.model = model;
    	}

    	//EVENTLISTENER INTERFACE
    	handleEvent(e) {
    		e.stopPropagation();
    		switch (e.type) {
    			case 'click':
    				this.clickHandler(e.target);
    				break;
    			default:
    				console.log(e.target);
    		}
    	}

    	get modelHeading() {
    		return this.model.heading;
    	}

    	//CHANGE THE MODEL
    	clickHandler(target) {
    		this.model.heading = 'World';
    		this.model.notify(this.model);
    	}
    }

    export { HeadingController };
    ```

6. Our `main()` function should still work as is.
