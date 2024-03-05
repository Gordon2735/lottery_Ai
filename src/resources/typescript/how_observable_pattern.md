##### [JavaScript](https://webdevstudios.com/category/javascript/)

# How to Use the Observable Pattern in JavaScript

![](https://secure.gravatar.com/avatar/0f3fdadaf4931bf31459bdf3f397778a?s=68&d=mm&r=g)

[Eric Fuller](https://webdevstudios.com/author/eric/ 'Posts by Eric Fuller') on [February 19, 2019January 9, 2020](https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/)

Lately, I’ve been trying to become more familiar with design patterns. One thing I’ve realized along the way is that it’s not easy to recognize where a specific pattern might be useful. It usually comes down to having that light bulb moment where you suddenly say to yourself “Hey! This might be a good place to use a certain design pattern.”

### Define the problem.

Since design patterns are used to solve specific problems in software, let’s try to define such a problem and work to solve it using a design pattern in JavaScript.

With the rise of frameworks like [React](https://webdevstudios.com/2019/01/03/headless-wordpress-with-react-and-nextjs-1/), we often hear about ‘application/component state.’ When the state is updated, components will re-render accordingly. In React, components are just a representation of what the user interface should look like.

What if we wanted to try and implement that same sort of functionality using only vanilla JavaScript? There are any number of ways to do it, but in our case, let’s explore how using a design pattern could help with our implementation.

So, let’s define the problem we are trying to solve: we need to be able to update multiple page elements when our application state changes.

In this post, we will build out a little app that allows you to add users to a list. This app will use state; so we will use the observer pattern to notify the elements that need updated when that state changes.

### What is application state?

In JavaScript, state is typically just an object that holds data your application depends on.

For example, maybe you have a small app that displays a list of items it retrieves from an external API. When the app loads, it makes sense to make the API call once and store the data in app state. The app could then render based on changes to its state.

### The Observer Pattern

According to [Wikipedia](https://en.wikipedia.org/wiki/Observer_pattern):

> The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

The observer pattern defines a one-to-many relationship. When one object updates, it notifies many other objects that it has been updated.

It’s easy to get tripped up with the subject and observer terms used in the definition above. It took me a while to wrap my head around it.

Here is a brief explanation for each:

-   **subject** – This is the object that will send out a notification to all of the ‘observers’ who want/need to know that the subject was updated. In our case, the subject will be the application state object.
-   **observers** – These are the objects that want to know when the subject has changed. In our case, these will be the page elements that need to update when the application state changes.

On a side note, the observer pattern is similar to another very popular design pattern in JavaScript, the [pub/sub](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) pattern.

### Implementation

When implementing design patterns, there is often a contract that needs to be followed in order for the implementation to be correct.

What do I mean by contract? Well, in a more object-oriented language like PHP, there may be specific [interfaces](http://php.net/manual/en/language.oop5.interfaces.php) that the subject and observer classes need to implement. Those interfaces would in turn force any class that implements them to have the methods specified in the interface.

In JavaScript, we don’t have access to interfaces; and for the sake of keeping things simple, we create parent classes from which we can extend. The subject and observer parent classes will have those properties and methods required in order to implement the observer pattern.

Here is a basic class diagram for visual reference:

![](https://webdevstudios.com/wp-content/uploads/2018/12/uml.jpg)

![](https://webdevstudios.com/wp-content/uploads/2018/12/uml.jpg)

### Subject Class

The purpose of the subject class is to maintain a list of observers that it needs to notify when it is updated. It will need the ability to add or remove observers as well.

Here is a brief explanation for the properties and methods that are required on the Subject class:

-   **observers** – This class property holds an array of observers.
-   **addObserver()** – Will push an observer on to the observer’s array
-   **removeObserver()** – Will remove an observer from the observer’s array
-   **notify()** – Will notify all observers that a change has happened

### Observer Class

The purpose of the observer class is to implement an _update()_ method that will be called by the subjects _notify()_ method. In our case, the concrete implementation of the _update()_ method will re-render the element.

### Example Code

If you’re like me, talking theory is cool, but a concrete example is what really helps me understand what is going on.

I’ve created a very simple app that does two things:

1. Allows users to be added to a list
2. Updates a user count indicator when a user is added to the list

The basic flow of the app goes like this: when the new user is submitted via the input, a state change is triggered. Because the state has changed, both the list and user counter are automatically re-rendered because they are _observing_ the state object.

Let’s walk through a few of the key files for further explanation and context.

### lib/Subject.js

The subject class is one part of the observable pattern. It’s the object that will notify all of the observers that it has changed in some way.

Take note that we have an **observers** property plus the **addObserver**, **removeObserver**, and **notify** methods.

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="subject.js">
	<tbody>
		<tr>
			<td
				id="file-subject-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-subject-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">class</span>
				<span class="pl-v">Subject</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-subject-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">constructor</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-subject-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-c1">observers</span>
				<span class="pl-c1">=</span> <span class="pl-kos">[</span
				><span class="pl-kos">]</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-subject-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-subject-js-LC5"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-subject-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Add an observer to this.observers.</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-subject-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">addObserver</span
				><span class="pl-kos">(</span><span class="pl-s1">observer</span
				><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-subject-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-c1">observers</span
				><span class="pl-kos">.</span><span class="pl-en">push</span
				><span class="pl-kos">(</span><span class="pl-s1">observer</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-subject-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-subject-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-subject-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Remove an observer from this.observers.</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-subject-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">removeObserver</span
				><span class="pl-kos">(</span><span class="pl-s1">observer</span
				><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-subject-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">removeIndex</span>
				<span class="pl-c1">=</span> <span class="pl-smi">this</span
				><span class="pl-kos">.</span
				><span class="pl-c1">observers</span
				><span class="pl-kos">.</span
				><span class="pl-en">findIndex</span
				><span class="pl-kos">(</span><span class="pl-s1">obs</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-subject-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">return</span>
				<span class="pl-s1">observer</span>
				<span class="pl-c1">===</span> <span class="pl-s1">obs</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-subject-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-subject-js-LC16"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-subject-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">if</span> <span class="pl-kos">(</span
				><span class="pl-s1">removeIndex</span>
				<span class="pl-c1">!==</span> <span class="pl-c1">-</span
				><span class="pl-c1">1</span><span class="pl-kos">)</span>
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-subject-js-LC18"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-c1">observers</span>
				<span class="pl-c1">=</span> <span class="pl-smi">this</span
				><span class="pl-kos">.</span
				><span class="pl-c1">observers</span
				><span class="pl-kos">.</span><span class="pl-en">slice</span
				><span class="pl-kos">(</span
				><span class="pl-s1">removeIndex</span
				><span class="pl-kos">,</span> <span class="pl-c1">1</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-subject-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-subject-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L21"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="21"></td>
			<td
				id="file-subject-js-LC21"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L22"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="22"></td>
			<td
				id="file-subject-js-LC22"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Loops over this.observers and calls the update method on
					each observer.</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L23"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="23"></td>
			<td
				id="file-subject-js-LC23"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// The state object will call this method everytime it is
					updated.</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L24"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="24"></td>
			<td
				id="file-subject-js-LC24"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">notify</span><span class="pl-kos">(</span
				><span class="pl-s1">data</span><span class="pl-kos">)</span>
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L25"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="25"></td>
			<td
				id="file-subject-js-LC25"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">if</span> <span class="pl-kos">(</span
				><span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-c1">observers</span
				><span class="pl-kos">.</span><span class="pl-c1">length</span>
				<span class="pl-c1">&gt;</span> <span class="pl-c1">0</span
				><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L26"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="26"></td>
			<td
				id="file-subject-js-LC26"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-c1">observers</span
				><span class="pl-kos">.</span><span class="pl-en">forEach</span
				><span class="pl-kos">(</span
				><span class="pl-s1">observer</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-s1">observer</span><span class="pl-kos">.</span
				><span class="pl-en">update</span><span class="pl-kos">(</span
				><span class="pl-s1">data</span><span class="pl-kos">)</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L27"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="27"></td>
			<td
				id="file-subject-js-LC27"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L28"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="28"></td>
			<td
				id="file-subject-js-LC28"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L29"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="29"></td>
			<td
				id="file-subject-js-LC29"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L30"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="30"></td>
			<td
				id="file-subject-js-LC30"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-subject-js-L31"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="31"></td>
			<td
				id="file-subject-js-LC31"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">export</span>
				<span class="pl-k">default</span>
				<span class="pl-v">Subject</span><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

**list.js**

```javascript
import Observer from '../lib/Observer';

class List extends Observer {
	createMarkup(state) {
		return `<ul>
    ${state.users.map((user) => `<li>${user.name}</li>`).join('\n')}
    </ul>`;
	}

	render(state, selector = 'app') {
		const markup = this.createMarkup(state);
		const parent = document.getElementById(selector);

		parent.innerHTML = markup;
	}

	// This method will be called by the Subject(state) whenever it updates.
	// Notice how it prompts a re-render.
	update(state) {
		this.render(state, 'user-list-container');
	}
}

export default List;
```

**observer.js**

```javascript
class Observer {
	// Gets called by the Subject::notify method.
	update() {}
}

export default Observer;
```

**state.js**

```javascript
import Subject from './Subject';

class State extends Subject {
	constructor() {
		super();
		this.state = {};
	}

	// Update the state.
	// Calls the update method on each observer.
	update(data = {}) {
		this.state = Object.assign(this.state, data);
		this.notify(this.state);
	}

	// Get the state.
	get() {
		return this.state;
	}
}

export default State;
```

**subject.js**

```javascript
class Subject {
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

export default Subject;
```

[view
raw](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7/raw/29c898d560b8837fd66d9c2c670a059b208ba74f/subject.js)
[subject.js](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7#file-subject-js)
hosted with ❤ by [GitHub](https://github.com/) View the code on
[Gist](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7). ###
lib/Observer.js The observer class is the second part of the observable pattern.
It’s that object that gets notified when something in the subject class has
updated. The implementation for the update function is blank in this class. We
will leave the implementation details to the concrete class.

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="observer.js">
	<tbody>
		<tr>
			<td
				id="file-observer-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-observer-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">class</span>
				<span class="pl-v">Observer</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-observer-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-observer-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Gets called by the Subject::notify method.</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-observer-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-observer-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">update</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-kos">{</span
				><span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-observer-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-observer-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-observer-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-observer-js-LC5"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-observer-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-observer-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">export</span>
				<span class="pl-k">default</span>
				<span class="pl-v">Observer</span><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view
raw](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7/raw/29c898d560b8837fd66d9c2c670a059b208ba74f/observer.js)
[observer.js](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7#file-observer-js)
hosted with ❤ by [GitHub](https://github.com/) View the code on
[Gist](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7). ###
lib/State.js The state class will be the application state for our app. It
extends the subject class, so in turn, it inherits all of the functions on the
subject class. On instantiation, the constructor sets the state to an empty
object. The _get()_ method just returns the state. The _update()_ method is a
bit more interesting. It will update the state and then run the _notify()_
method passing along the updated state. This allows any observers to have access
to the updated state.

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="state.js">
	<tbody>
		<tr>
			<td
				id="file-state-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-state-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">import</span>
				<span class="pl-v">Subject</span>
				<span class="pl-k">from</span>
				<span class="pl-s">"./Subject"</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-state-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-state-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-state-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">class</span> <span class="pl-v">State</span>
				<span class="pl-k">extends</span>
				<span class="pl-v">Subject</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-state-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">constructor</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-state-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">super</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-state-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-c1">state</span> <span class="pl-c1">=</span>
				<span class="pl-kos">{</span><span class="pl-kos">}</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-state-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-state-js-LC8"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-state-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-state-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Update the state.</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-state-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Calls the update method on each observer.</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-state-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">update</span><span class="pl-kos">(</span
				><span class="pl-s1">data</span> <span class="pl-c1">=</span>
				<span class="pl-kos">{</span><span class="pl-kos">}</span
				><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-state-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-c1">state</span> <span class="pl-c1">=</span>
				<span class="pl-v">Object</span><span class="pl-kos">.</span
				><span class="pl-en">assign</span><span class="pl-kos">(</span
				><span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-c1">state</span><span class="pl-kos">,</span>
				<span class="pl-s1">data</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-state-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-en">notify</span><span class="pl-kos">(</span
				><span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-c1">state</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-state-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-state-js-LC15"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-state-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-state-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Get the state.</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-state-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">get</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-state-js-LC18"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">return</span> <span class="pl-smi">this</span
				><span class="pl-kos">.</span><span class="pl-c1">state</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-state-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-state-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-state-js-L21"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="21"></td>
			<td
				id="file-state-js-LC21"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-state-js-L22"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="22"></td>
			<td
				id="file-state-js-LC22"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">export</span>
				<span class="pl-k">default</span> <span class="pl-v">State</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view
raw](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7/raw/29c898d560b8837fd66d9c2c670a059b208ba74f/state.js)
[state.js](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7#file-state-js)
hosted with ❤ by [GitHub](https://github.com/) View the code on
[Gist](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7). ###
components/List.js In total, we have three components in the app. We’ll just
look at the list component because the others are very similar. The list
component extends the observable class. This means that it wants to know when
the application state (subject) has changed. Notice how we override the update
method with an actual implementation that re-renders the component.

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="list.js">
	<tbody>
		<tr>
			<td
				id="file-list-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-list-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">import</span>
				<span class="pl-v">Observer</span>
				<span class="pl-k">from</span>
				<span class="pl-s">"../lib/Observer"</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-list-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-list-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-list-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">class</span> <span class="pl-v">List</span>
				<span class="pl-k">extends</span>
				<span class="pl-v">Observer</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-list-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">createMarkup</span
				><span class="pl-kos">(</span><span class="pl-s1">state</span
				><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-list-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">return</span>
				<span class="pl-s">`&lt;ul&gt;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-list-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s"
					><span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">state</span
						><span class="pl-kos">.</span
						><span class="pl-c1">users</span
						><span class="pl-kos">.</span
						><span class="pl-en">map</span
						><span class="pl-kos">(</span
						><span class="pl-s1">user</span>
						<span class="pl-c1">=&gt;</span>
						<span class="pl-s"
							>`&lt;li&gt;<span class="pl-s1"
								><span class="pl-kos">${</span
								><span class="pl-s1">user</span
								><span class="pl-kos">.</span
								><span class="pl-c1">name</span
								><span class="pl-kos">}</span></span
							>&lt;/li&gt;`</span
						><span class="pl-kos">)</span
						><span class="pl-kos">.</span
						><span class="pl-en">join</span
						><span class="pl-kos">(</span
						><span class="pl-s">"\n"</span
						><span class="pl-kos">)</span
						><span class="pl-kos">}</span></span
					></span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-list-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">&lt;/ul&gt;`</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-list-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-list-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-list-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-list-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">render</span><span class="pl-kos">(</span
				><span class="pl-s1">state</span><span class="pl-kos">,</span>
				<span class="pl-s1">selector</span>
				<span class="pl-c1">=</span> <span class="pl-s">"app"</span
				><span class="pl-kos">)</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-list-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">markup</span> <span class="pl-c1">=</span>
				<span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-en">createMarkup</span
				><span class="pl-kos">(</span><span class="pl-s1">state</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-list-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">parent</span> <span class="pl-c1">=</span>
				<span class="pl-smi">document</span><span class="pl-kos">.</span
				><span class="pl-en">getElementById</span
				><span class="pl-kos">(</span><span class="pl-s1">selector</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-list-js-LC13"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-list-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-list-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">parent</span><span class="pl-kos">.</span
				><span class="pl-c1">innerHTML</span>
				<span class="pl-c1">=</span> <span class="pl-s1">markup</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-list-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-list-js-LC16"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-list-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-list-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// This method will be called by the Subject(state)
					whenever it updates.</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-list-js-LC18"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Notice how it prompts a re-render.</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-list-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-en">update</span><span class="pl-kos">(</span
				><span class="pl-s1">state</span><span class="pl-kos">)</span>
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-list-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">this</span><span class="pl-kos">.</span
				><span class="pl-en">render</span><span class="pl-kos">(</span
				><span class="pl-s1">state</span><span class="pl-kos">,</span>
				<span class="pl-s">"user-list-container"</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L21"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="21"></td>
			<td
				id="file-list-js-LC21"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L22"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="22"></td>
			<td
				id="file-list-js-LC22"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-list-js-L23"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="23"></td>
			<td
				id="file-list-js-LC23"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-list-js-L24"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="24"></td>
			<td
				id="file-list-js-LC24"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">export</span>
				<span class="pl-k">default</span> <span class="pl-v">List</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view
raw](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7/raw/29c898d560b8837fd66d9c2c670a059b208ba74f/list.js)
[list.js](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7#file-list-js)
hosted with ❤ by [GitHub](https://github.com/) View the code on
[Gist](https://gist.github.com/efuller/6ca1739e5f4ea25b740d0fb0a7c91fa7). Below
is a link to the working demo of the app. Check it out and make magic happen by
adding a few users. [Click here for the
demo!](https://codesandbox.io/s/vqq4vvxl20?view=preview) [ ![Lets talk about
implementing a solution like this on your
website](https://webdevstudios.com/wp-content/uploads/2020/01/cta-banner-2.png)
![Lets talk about implementing a solution like this on your
website](https://webdevstudios.com/wp-content/uploads/2020/01/cta-banner-2.png)
](https://webdevstudios.com/contact/) ### Recap Managing state in JavaScript is
something that needs to be done frequently. If you have an app that requires
updating several elements on the page when state changes, then using the
observer pattern is one way you could make that happen. Feel free to hit me up
in the comments below if you have any questions or comments. ### Share this: -
[Facebook](https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/?share=facebook&nb=1 'Click to share on Facebook') -
[LinkedIn](https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/?share=linkedin&nb=1 'Click to share on LinkedIn') -
[Twitter](https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/?share=twitter&nb=1 'Click to share on Twitter') [Click to
Tweet](https://twitter.com/intent/tweet?text=%0ATagged%20with%20APPLICATION%20STATE%20OBSERVABLE%20PATTERNS%20OBSERVERS%20SUBJECT%0ASubscribe%20to%20our%20blog&url=https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/)
Tagged with [application
state](https://webdevstudios.com/tags/application-state/) [observable
patterns](https://webdevstudios.com/tags/observable-patterns/)
[observers](https://webdevstudios.com/tags/observers/)
[subject](https://webdevstudios.com/tags/subject/)

```

```
