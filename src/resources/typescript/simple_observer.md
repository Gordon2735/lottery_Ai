<!-- Simple Observer -->

[![Cover image for A Simple Observer in Vanilla Javascript](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fumv0oi7m44hu4a786v1s.jpg)](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fumv0oi7m44hu4a786v1s.jpg)

[![Toby Parent](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F377205%2F806f062d-68ec-490b-93c5-86f03629866e.jpg)](https://dev.to/parenttobias)

[Toby Parent](https://dev.to/parenttobias)

Posted on Oct 15, 2023 • Updated on Oct 21, 2023

![](https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg) 4 ![](https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg) 1 ![](https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg) ![](https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg) ![](https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg)

# A Simple Observer in Vanilla Javascript

[#webdev](https://dev.to/t/webdev) [#javascript](https://dev.to/t/javascript) [#beginners](https://dev.to/t/beginners) [#programming](https://dev.to/t/programming)

_(Photo by [Jennifer Uppendahl](https://unsplash.com/@jenniferuppendahl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-close-up-of-a-cat-looking-out-a-window-tWedmSHDF94?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) )_

This one is going to be a bit involved, as I view it as an interim step to a much larger conversation about design patterns in general, _and how they're all around us_. We use them all the time, both in programming and in life, and we take them for granted.

Design patterns, as the development community knows them, evolved from conversations between four developers often referred to as the **Gang of Four**. They saw issues in the Object-oriented programming world, and saw that a formal description of useful patterns could help the "maturing" of development as a whole.

Some of the patterns are _creational_ (dealing with the construction or creation of data), while some are _structural_ (dealing with how different things might be related or connected, and how we define them as parts of a system), and a third group are _behavioral_ (defining ways that communication between things might be handled efficiently or effectively).

The one I want to talk about here is a behavioral pattern. It is all about defining how a particular type of communication might be handled between objects, _while keeping them as decoupled as possible_. When I talk about "decoupling", I mean that each piece works in its own right, each doesn't need to be aware of the other, each just _works_ - but they _can_ communicate, in clean ways.

### [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#observers-in-the-real-world)Observers in the Real World

We encounter observers all the time, they're things we use often without even thinking about how they work.

-   Alarm clocks: we have these little things that are _watching the time, all the time_. And when the time being watched matches the time we've set, they buzz or the radio goes off or the electro-shock collar zaps. Or is that last only me?
-   Motion-sensing lights: we have these little things we've mounted outside our homes or places of business. They watch the lot or the given area, all the time. And when the area being watched indicates some movement, the light turns on or the siren goes off or the electro-shock collar... you get the idea.
-   Traffic lights: we have these lights posted at street intersections, and they turn colors. And as we're driving, we watch these lights as we pull up. If they turn certain colors, we alter our speed appropritately.

So each of these have something in common: there is some sort of _state_, some default thing that is being watched for some sort of _change_. And, when that change occurs, some functionality is run based on the current state.

In the case of the clock, the time represents the state, and when the observed time matches that of the set alarm, an alert functionality is triggered.

In the case of the motion-sensors, the lot is the state. Something moves in the lot, the motion sensor sees the state change, the lights come on.

In the case of the traffic lights, the light itself is the state. When that light changes, certain behaviors on the part of motorists observing that light is triggered.

### [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#observers-you-may-already-know)Observers You May Already Know

If you've been programming in javascript for a bit, and you've started working with the DOM, then you've already likely encountered observers. Here's a very common one:

```typescript
const getDetailsOfMovie = (event) => {
	const clickedMovieID = event.target.dataset.id;
	if (!clickedMovieID) return;
	// maybe we fetch the details of a given movie title,
	// based on that id. Maybe we add it to a shopping cart.
	// We do something with it, anyway:
	console.log(clickedMovieId);
};
const moviesContainer = document.querySelector('.movies-container');

// and we attach the function as the event handler:
moviesContainer.addEventListener('click', getDetailsOfMovie);
```

Enter fullscreen mode Exit fullscreen mode

So that `getDetailsOfMovie` is the behavior we want to happen when the given DOM element is clicked. So the DOM itself is the thing we're using as our _state_ here, and the `Events` API is triggering all sorts of things for a great many events occuring around that DOM.

This is an Observer (or an `Observable`. In particular, this is an application of the observer referred to as **Publish/Subscribe** (or PubSub).

The `Events` API is responsible for triggering a great number of events around the DOM, bubbling and capturing those events, _and calling the functions we've provided_. We are _subscribing_ to the events that the `Events` API _publishes_.

Further, when that `"click"` event happens and our function is run, Mozilla tells us exactly what our function will be provided, in the `Event` object. So not only is our function run, but its also provided with useful information about that state change (the click, the keyboard event, the scroll).

### [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#observers-are-not-standalone)Observers Are Not Standalone

We aren't likely to have an Observer in isolation. It might be in the context of some other design - Creational patterns might _contain_ observers within them. For example, the DOM is a creational structure with a great deal of other functionality, _as well as_ this observer behavior.

We can do much the same. We can create our objects, using any creational or structural design we like, and we can _incorporate the observer pattern in_. To do so, let's consider a useful example of how this might work.

## [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#the-scenario)The Scenario

Suppose we are working on an email app. We might have a page displayed with a sidebar listing the various folders in which we collect our emails, and when we click on a folder, we want to list out the emails associated with that folder. Further, when we click on one of the emails in that listing, we want to see the details of that email. This is mostly to give us a visual of what we're considering, but the consideration here isn't really about the DOM, so much as it's about _the state data that drives the DOM_.

What do I mean by this? When we click on one of the folders in the sidebar, we are telling our app "this is the currently-selected folder." In other words, we are altering the state of the app in some way, by specifying a `selectedFolder` or some such.

But the thing is, when that folder is clicked and that `selectedFolder` state value changes? We also want other things to happen. We want to update the DOM, we might want to persist some stored value (so when the user re-opens the app, they see the same place they left off), we might play a noise or do some other effect.

The issue is, if we simply do

```typescript
listOfFolders.addEventListener('click', (e) => {
	selectedFolder = e.target.dataset.folderid;
});
```

Enter fullscreen mode Exit fullscreen mode

we might set that variable, but the rest of our app has no way of knowing about that. It has no way of saying "Hey, this thing has updated, I better do something-something."

But remember, we're talking about **Observers**. We can create an `Observable` thing, and we can define ways of telling that thing itself "Hey, when your value changes, do something-something _on our behalf_." In much the way the Event API triggers when an event happens (when the state of the DOM is somehow affected), we can define triggers when our own state changes.

### [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#exploring-an-interface)Exploring an interface

The way we work with an `Observable` should really be as simple as possible. It is a container, and it should be able to contain _anything_. And we want to be able to pass it functions, in order to run them for us when the contained value changes.

So let's define that interface, as simply as we can:

```typescript
Observable {
  get value,
  set value,
  subscribe,
  unsubscribe
}
```

Enter fullscreen mode Exit fullscreen mode

That's pretty much it. A `.value` getter and setter to define or retrieve the stored value, and methods to add or remove a "subscriber" or listener method.

Incidentally, if we were to look at this from the React-type model (which is way more robust, way more structured and probably way better than this), our getter and setter are akin to the `useState` hooks, and the subscribe and unsubscribe are similar to the `useEffect` hooks in that they cause a "side effect" whenever the subscribed value changes.

Not _exactly_ the same, but similar in intent and what I'd consider "the lazy man's implementation."

### [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#starting-steps)Starting Steps

Simply because I like 'em, we will define this as a closure. We could as easily do this with a class, and it would work in much the same way, but I like the whole private variable scope thing. So let's start by defining our core `Observable`:

```typescript
const Observable = (initialValue) => {
	let value = initialValue;

	return {
		get value() {
			return value;
		},
		set value(val) {
			value = val;
		}
	};
};
```

Enter fullscreen mode Exit fullscreen mode

There we go. A container. We can use that like this:

```typescript
const myName = Observable('Toby');

// accessing the getter
console.log(myName.value); // 'Toby'
// accessing the setter
myName.value = 'TobyPlaysTheUke';
// accessing both
myName.value = myName.value.toUpperCase();
```

Enter fullscreen mode Exit fullscreen mode

It works - it simply stores something inside itself, and we can replace that as we like. Note that while I defined it as a `const`, it is the `Observable` container that is a `const`, and not the value it contains.

> I had asked a friend (and someone _way_ smarter than me) to proof this, and to make suggestions _(Thanks, Morgân!)_. Some of them I have listened to (and I'll note them when we encounter them), and some I have listened to but still gone with what I prefer. This is one of those pivot points: a closure, or a constructor?
>
> She presents valid points: why not simply make it a constructor function, make the value a property (or even a property getter), thus allowing for the `new` keyword and for things like `instanceOf Observable`. And we could do that, it would be a small change, wouldn't really _break_ anything, but I tend to have a kneejerk reflex where constructors and classes are concerned, largely due to the `this` thing. It is very easy, in implementing a constructor, for `this` to shift unexpectedly. That said, it isn't terribly difficult to remake this as a constructor function, and I'll include Morgie's at the end, for further exploration.

And the value can be anything:

```typescript
const myTodo = Observable({
	title: 'Make breakfast',
	description: 'No idea what',
	priority: 'normal',
	dueDate: Date.now()
});

myTodo.value = {
	...myTodo.value,
	description: 'I feel like a fat-boy sammich!'
};
```

Enter fullscreen mode Exit fullscreen mode

Works fine, it's clean, it does the job. But as I look at that, I'm seeing something that might make more sense: rather than defining a setter, and giving the user the idea that they're simply setting a value, we might change that a bit - if we explicitly define an `update` method, for example, it makes plain that we aren't simply setting a value, but that we're initiating a process of updating. Also, with an `update`, we might be able to provide options - if the user passes a function to `update`, we could run that function with the current value, but if the user passes something else, we simply replace the value we're storing.

So we will still have a getter, simply for convenience, but let's define an `update` method:

```typescript
const Observable = (initialValue) => {
	let value = initialValue;

	const update = (updater) => {
		if (typeof updater === 'function') {
			value = updater(value);
		} else {
			value = updater;
		}
	};
	// shorthand of the same thing, for those who like that stuff:
	// const update = (updater) => _ = typeof updater ==='function' ? updater(value): updater
	return Object.freeze({
		get value() {
			return value;
		},
		update
	});
};
```

Enter fullscreen mode Exit fullscreen mode

And to use this version, we could:

```typescript
const myName = Observable('Toby');
myName.update('tobyPlaysTheUke');
myName.update((oldVal) => oldVal.toUpperCase());
```

Enter fullscreen mode Exit fullscreen mode

The first `.update` is simply overwriting the stored value, the second runs the function we've passed in and replaces the stored value with the return.

And with a stored object?

```typescript
const myTodo = Observable({
  title: 'Make breakfast',
  description: 'No idea what',
  priority: 'normal',
  dueDate: Date.now();
})

myTodo.update((oldVal)=>({
  ...oldVal,
  description: 'How about fat-boy sammiches?',
}))
```

Enter fullscreen mode Exit fullscreen mode

So we aren't explicitly extracting and replacing the value, we are simply providing a function that our `Observable` runs for us. Gives us some flexibility, and might be a bit more useful later.

### [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#okay-so-what)Okay, so what?

Yeah, at this point, it isn't much more than a glorified variable. We are storing a value, and we are retrieving it. We have that `.update` method, great and good, but it still just sets a value. What's the benefit?

That was setting the groundwork. Now the fun can begin! What we want now is to define the rest of the interface. If we go back to thinking about event listeners, we'll implement one similar to the Event API:

```typescript
addEventListener <=> subscribe
removeEventListener <=> unsubscribe
```

Enter fullscreen mode Exit fullscreen mode

As we might already be comfortable with the way we add and remove event listeners, we can add and remove subscribers in the same way!

We'll need an array of subscriber functions, and when we `.subscribe` we simply add one. To `.unsubscribe` we need to pass in the original function reference, and we filter that one out, keeping all the others.

```typescript
const Observable = (initialValue) => {
	let value = initialValue;
	let subscribers = [];

	const subscribe = (subscriber) =>
		(subscribers = [...subscribers, subscriber]);

	const unsubscribe = (subscriber) =>
		(subscribers = subscribers.filter((fn) => fn !== subscriber));

	const update = (updater) =>
		(value = typeof updater === 'function' ? updater(value) : updater);

	return Object.freeze({
		get value() {
			return value;
		},
		update,
		subscribe,
		unsubscribe
	});
};
```

Enter fullscreen mode Exit fullscreen mode

> This was another spot she was kind enough to point out I'm an idiot. Those subscribe and unsubscribe methods _work_, but there is an unintended side effect. Because I've used a single-line fat-arrow function, they are returning the result of those single lines: basically, I'm exposing all my `subscribers` each time.
>
> To fix this, we might look to what adding to an array or removing from an array should do: when we `push` onto an array, we are given the length of the array, and when we remove an array... well, let's do the same, return the array's length.
>
> She also asked why I wasn't simply `.push()`ing the subscriber on, and I could, really - we never expose the array, so we can. Normally, because I'm becoming a huge fan of treating data as immutable, I prefer creating a new array each time, but here it really doesn't matter. So those changes will give us this:

```typescript
// this will simply return the new length of subscribers
const subscribe = (subscriber) => subscribers.push(subscriber);
// as will this.
const unsubscribe = (subscriber) => {
	subscribers = subscribers.filter((fn) => fn !== subscriber);
	return subscribers.length;
};
```

Enter fullscreen mode Exit fullscreen mode

There we go. We can define a value, update that value, subscribe and unsubscribe to our `Observable`. The only thing we haven't yet implemented is triggering the subscribed functions when the value changes.

By defining that `.update` function, we have really limited the ways the user can play with the value internally. So long as they are calling `.update`, we know we want to run each subscriber.

We need to think, though: what information does that subscriber need to know from us? When we run those actions later on by proxy, what should we be telling those functions?

We know we'll need to tell it about that new value, but might it also be useful to provide the old one? By doing that, if the subscriber is performing some "delta function" or a "the value has changed by N", we can help with that. Let's use that as our baseline, and see where we get in changing that `.update` method:

```typescript
const Observable = (initialValue) => {
	let value = initialValue;
	let subscribers = [];

	const subscribe = (subscriber) => subscribers.push(subscriber);

	const unsubscribe = (subscriber) => {
		subscribers = subscribers.filter((fn) => fn !== subscriber);
		return subscribers.length;
	};

	const update = (updater) => {
		// we store the value as it is, and then we update.
		let oldVal = _;
		value = typeof updater === 'function' ? updater(value) : updater;

		// next, we call each subscriber function with both!
		subscribers?.forEach((subscriber) => subscriber(value, oldVal));
	};

	return Object.freeze({
		get value() {
			return value;
		},
		update,
		subscribe,
		unsubscribe
	});
};
```

Enter fullscreen mode Exit fullscreen mode

Now, each time we call `.update` with _any_ value, whether a function or not, we run each `subscriber` with a before and after value. Neat!

### [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#going-back-to-go-forward)Going back to go forward

Remember the original scenario? That `selectedFolder` thing in our email app? How might this `Observable` help us in that case?

Our state here is the `selectedFolder`, so let's define that:

```typescript
const selectedFolder = Observable('');
```

Enter fullscreen mode Exit fullscreen mode

We'll imagine each folder has an id, and that that value is a string of some sort. So that container simply holds the id of the selected folder, neat and tidy.

But when the value changes, we might want to trigger a couple functions:

```typescript
const showInConsole = (newValue, oldValue) =>
	console.log(
		`Switched from ${listOfFolders[oldValue]?.name} to ${listOfFolders[newValue]?.name}`
	);

const updateEmailListPane = (newValue) => {
	// more complex, this simply takes the new id, gets the folder
	const currentFolder = listOfFolders[newValue];

	// and likely runs some DOM updating for us based on that.
};

selectedFolder.subscribe(showInConsole);
selectedFolder.subscribe(updateEmailListPane);
```

Enter fullscreen mode Exit fullscreen mode

Now, any time `selectedFolder`'s stored value changes, those two functions will run for us.

```typescript
foldersPanel.addEventListener('click', (e) => {
	if (e.target.classList.contains('folder-name')) {
		// a click on a folder updates the observable
		selectedFolder.update(e.target.dataset.id);
	}
});
```

Enter fullscreen mode Exit fullscreen mode

That would log both the old and new folder's names, assuming we had any, and would also update the list of emails displayed.

### [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#well-yeah-but-why)Well yeah, but... why??

The advantage here is that we can set the `Observable` value without explicitly needing to trigger those other functions, without needing to know they exist. Those functions don't need to be informed about possible places where updates might happen.

We have _decoupled_ the actions and the values on which those actions depend. We use the `Observable` to connect them, it acts as a manager between them, but the value and the listeners are able to be defined and maintained separately.

We can define DOM methods, as we did with the event listener on `foldersPanel`, that update our `Observable` - and that will simply run whatever subscribed methods we have given that _without the Event API needing to run them directly_.

Okay, so mostly this was a thought experiment, and something I think might be useful if overly simple. But tell me.... what do you think?

### [](https://dev.to/parenttobias/a-simple-observer-in-vanilla-javascript-1m80#extra-credit)Extra Credit

So it is a weird thing, to have to keep the reference to the original function like that in order to unsubscribe it. It means we can do things like:

```typescript
selectedFolder.subscribe(logToConsole);

// and later
selectedFolder.unsubscribe(logToConsole);
```

Enter fullscreen mode Exit fullscreen mode

so long as we have a reference. But we _can't_ do something like this:

```typescript
selectedFolder.subscribe((newValue, oldValue) =>
	console.log(`folder switched from ${oldValue} to ${newValue}`)
);

// okay so how might we unsubscribe that?
```

Enter fullscreen mode Exit fullscreen mode

The argument goes, if we are defining an inline anonymous function, we aren't planning on unsubscribing it. But that is an opinion that perhaps isn't the domain of our `Observable` to decide.

So suppose we wanted to make it different? Suppose we made it so that, when we `subscribe` to a thing, the action of subscribing returns a readymade unsubscribe method? So we could do something like:

```typescript
const unsubscribe = selectedFolder.subscribe((newValue, oldValue) =>
	console.log(`folder switched from ${oldvalue} to ${newValue}`)
);

window.addEventListener('unload', () => {
	unsubscribe();
});
```

Enter fullscreen mode Exit fullscreen mode

So the `subscribe` method itself gives us back what we need. Can you see how you might implement that, based on the fact that `subscribe` creates a closure within our `Observable`? What might that look like?

Message in the comments, or find me on the Odin Project Discord group and let's talk about it!

---

> For those who are looking for the constructor-based version of this, who would like to be able to simply do:

```typescript
const myCoords = new Observable({
	x: undefined,
	y: undefined
});
```

Enter fullscreen mode Exit fullscreen mode

> Here's how that might work, thanks to [Morgân von Brylân](https://brylan.fr/) (a helpful human I met in the [Javascripters | Web Development, Node.js, TypeScript and more Discord](https://discord.gg/6Jrg8aZc):

```typescript
function Observable(initialValue) {
	let value = initialValue;
	let subscribers = [];

	Object.defineProperty(this, 'value', { get: () => value });

	this.subscribe = (subscriber) => subscribers.push(subscriber);

	this.unsubscribe = (subscriber) => {
		subscribers = subscribers.filter((fn) => fn !== subscriber);
		return subscribers.length;
	};

	this.update = (updater) => {
		// we store the value as it is, and then we update.
		const oldVal = value;
		value = typeof updater === 'function' ? updater(value) : updater;

		// next, we call each subscriber function with both!
		subscribers.forEach((subscriber) => subscriber(value, oldVal));
	};

	Object.freeze(this);
}
```
