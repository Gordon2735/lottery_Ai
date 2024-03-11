# Back to Basics: Mastering State Management in Vanilla JavaScript

[

![asierr.dev](https://miro.medium.com/v2/resize:fill:88:88/1*6uUfKiRRclIlA0iS4keBDQ.png)

](https://medium.com/@asierr?source=post_page-----e3be7377ac46--------------------------------)

[asierr.dev](https://medium.com/@asierr?source=post_page-----e3be7377ac46--------------------------------)

8 min read

Dec 11, 2023

In our continuing “[Back to Basics](https://medium.com/@asierr/list/back-to-basics-12e34fd24a57)” series, where we unravel fundamental web development concepts, let’s shift our focus to an often framework-associated topic: state management. While frameworks like **React, Vue, and Angular** provide their own systems for managing state, understanding how to handle state in vanilla JavaScript is a foundational skill that every developer should possess. This article will guide you through the principles of **state management in plain JavaScript**, showcasing how you can effectively manage, update, and share state across your application without relying on external libraries or frameworks.

![](https://miro.medium.com/v2/resize:fit:630/1*1Zzcdk9WJMOm-6AC6GAPdA.png)

# **1\. Understanding State in JavaScript**

In web development, ‘state’ refers to the data that changes over time in your application. It’s the dynamic part of your app that differs from the static HTML and CSS. State can be as simple as a text value in an input box or as complex as a collection of data retrieved from a server. In vanilla JavaScript, managing state means keeping track of these changes and ensuring they are reflected in the UI.

## Simple State Example: A Counter Application

Consider a basic counter application. The state, in this case, is the current count — a number that changes when a user interacts with the application.

```typescript
let count = 0; // State

function incrementCount() {
	count++;
	updateUI();
}
function updateUI() {
	document.getElementById('countDisplay').textContent = count;
}
document
	.getElementById('incrementButton')
	.addEventListener('click', incrementCount);
```

In this example, `count` is a variable that holds the current state. The function `incrementCount` modifies this state, and `updateUI` updates the DOM to reflect the new state.

## Complex State Example: Managing User Profiles

A more complex example of state could involve handling user profiles fetched from an API. Here, the state is an array of user objects, each containing several fields of data.

```typescript
let userProfiles = \[\]; // State
​
function fetchUserProfiles() {
 fetch('https://api.example.com/users')
 .then(response => response.json())
 .then(data => {
 userProfiles = data;
 updateUI();
 });
}
​
function updateUI() {
 const profilesContainer = document.getElementById('profiles');
 profilesContainer.innerHTML = '';
 userProfiles.forEach(profile => {
 const profileDiv = document.createElement('div');
 profileDiv.textContent = `Name: ${profile.name}, Age: ${profile.age}`;
 profilesContainer.appendChild(profileDiv);
 });
}
​
window.onload = fetchUserProfiles;
```

In this case, `userProfiles` is an array that represents the state. The state is updated when data is fetched from an API. `updateUI` then dynamically creates and displays user profile information on the page.

In both examples, the key concept is the same: JavaScript state is about data that changes over time. Managing this state effectively means updating this data in response to user interactions or other events and then reflecting these changes in the UI. Whether the state is simple or complex, the principles of tracking changes and updating the DOM remain fundamental to interactive web applications.

# 2 Implementing State Management

Effectively managing state in a JavaScript application requires a thoughtful approach to how and where you store your state. Two common strategies include using global variables and encapsulating state within objects or classes.

## Using Global Variables:

Global variables are accessible from anywhere in your application, making them a straightforward option for storing state. However, this approach can have drawbacks, especially as your application grows:

```typescript
let globalCount = 0; // A global variable
function incrementGlobalCount() {
	globalCount++;
	// Update UI or perform other actions
}
```

While global variables offer simplicity, they can lead to several issues:

-   **Namespace Pollution**: Too many global variables can clutter the global namespace, leading to conflicts and maintenance challenges.
-   **Difficulty in Tracking Changes**: It becomes harder to track where and how your state is being changed across a larger codebase.
-   **Potential for Bugs**: Unintended side-effects can occur if different parts of the application inadvertently modify global state.

## Encapsulating State with JavaScript Objects:

A more structured approach involves encapsulating state within objects or classes. This method groups related data and methods, making your code more organized and maintainable:

```typescript
const counter = {
	count: 0,
	increment: function () {
		this.count++;
		this.updateUI();
	},
	updateUI: function () {
		// Update the UI to reflect the new count
	}
};
document
	.getElementById('incrementButton')
	.addEventListener('click', () => counter.increment());
```

Encapsulation offers several advantages:

-   **Modularity**: Encapsulating state and related methods in an object or class keeps your code modular and easier to manage.
-   **Maintainability**: It’s easier to maintain and debug code where state and its related functionality are grouped together.
-   **Reusability**: Such objects or classes can be reused across different parts of your application or even in different projects.

Whether you choose to use global variables or encapsulation depends on the complexity and scale of your application. For smaller scripts or applications, global variables might suffice, but as your project grows and evolves, encapsulating state in objects or classes often becomes the more sustainable and maintainable approach. This practice lays the groundwork for more advanced state management patterns and techniques, aligning well with the principles of modern JavaScript development.

# 3\. Reacting to State Changes

One of the key aspects of state management in JavaScript is not just how you store state, but how you respond when that state changes. In a dynamic web application, state changes are often the result of user interactions or other events. Managing these changes effectively is crucial to ensure your application reacts in real-time and updates the user interface (UI) accordingly.

## Event Listeners:

Event listeners are at the heart of interacting with the DOM in response to user actions. By attaching event listeners to DOM elements, you can trigger state changes based on various events like clicks, input changes, or form submissions.

For example, consider a simple input field where the user can type their name, and you want to display a greeting message dynamically:

```typescript
const state = {
 userName: ''
};
​
document.getElementById('nameInput').addEventListener('input', (event) => {
 state.userName = event.target.value;
 updateGreeting();
});
​
function updateGreeting() {
 document.getElementById('greeting').textContent = \`Hello, ${state.userName}!\`;
}
```

In this snippet, the input event listener updates the `userName` property in the state, and the `updateGreeting` function reflects this change in the UI.

## Updating the DOM:

When the state changes, it’s important to update only the relevant parts of your UI. This selective updating ensures efficiency and enhances user experience by avoiding unnecessary re-renders of the entire DOM.

Consider a to-do list application where you add a new task. Instead of re-rendering the entire task list, you would only append the new task to the list:

```typescript
const state = {
	tasks: []
};
function addTask(task) {
	state.tasks.push(task);
	updateTaskListUI(task);
}
function updateTaskListUI(task) {
	const taskElement = document.createElement('li');
	taskElement.textContent = task;
	document.getElementById('taskList').appendChild(taskElement);
}
```

Here, `addTask` updates the state by adding a new task, and `updateTaskListUI` only adds the new task element to the DOM, maintaining efficiency and performance.

Managing state changes and updating the DOM accordingly are foundational aspects of interactive JavaScript applications. This approach, centered around responding to user inputs and events, allows developers to create responsive, dynamic user experiences. By carefully managing how and when the UI updates in response to state changes, you can build web applications that are both efficient and intuitive.

# 4\. Advanced State Management Patterns

As applications grow in complexity, managing state becomes increasingly challenging. Implementing advanced state management patterns can help in efficiently handling state changes and maintaining the flow of data across your application. Two such patterns, commonly used in larger applications, are the Observer pattern and the Singleton pattern.

## Observer Pattern:

The Observer pattern is a design pattern where an object (known as a “subject”) maintains a list of its dependents (“observers”) and notifies them automatically of any state changes, usually by calling one of their methods. It’s particularly useful in scenarios where state changes in one part of the application need to be reflected across various other parts.

Here’s a simplified example of implementing the Observer pattern in vanilla JavaScript:

```typescript
class Subject {
 constructor() {
 this.observers = \[\];
 }
​
 subscribe(observer) {
 this.observers.push(observer);
 }
​
 unsubscribe(observer) {
 this.observers = this.observers.filter(obs => obs !== observer);
 }
​
 notify(data) {
 this.observers.forEach(observer => observer.update(data));
 }
}
​
class Observer {
 update(data) {
 console.log("Observer received data:", data);
 }
}
​
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
​
subject.subscribe(observer1);
subject.subscribe(observer2);
​
subject.notify("Updated State");
```

In this example, `Subject` is the entity whose state changes, and `Observers` are the entities that need to react to those changes.

## Singleton Pattern:

The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. This pattern is particularly useful for managing a global state that needs to be accessed and modified by various parts of your application.

Here’s how you might implement a Singleton for state management in JavaScript:

```typescript
let instance;
​
class GlobalState {
 constructor() {
 if (instance) {
 return instance;
 }
​
 this.state = {};
 instance = this;
 }
​
 getState(key) {
 return this.state\[key\];
 }
​
 setState(key, value) {
 this.state\[key\] = value;
 }
}
​
const globalState1 = new GlobalState();
const globalState2 = new GlobalState();
​
globalState1.setState('user', 'Alice');
console.log(globalState2.getState('user')); // Outputs 'Alice'
```

In this implementation, `GlobalState` is the Singleton class. No matter how many times you try to create a new instance of `GlobalState`, it returns the same instance.

Each of these patterns serves a specific purpose in managing state in larger, more complex applications. The Observer pattern is excellent for a reactive approach where multiple components need to stay updated with state changes, while the Singleton pattern is ideal for maintaining a global state accessible throughout the application. Using these patterns can lead to more organized, maintainable, and scalable code.

# 5\. State Management in Action: A Practical Example

To illustrate the concepts of state management in a more tangible way, let’s build a simple to-do list application. This application will allow users to add tasks, mark them as complete, and filter through them. Through this example, we’ll demonstrate managing state changes and updating the UI accordingly in vanilla JavaScript.

## Structuring the To-Do List Application:

The application’s state will consist of an array of task objects, each with properties like `id`, `text`, and `completed`. We'll implement functions to add a task, toggle its completion status, and filter tasks based on their completion status.

```typescript
let tasks = \[\];
let filter = 'all'; // can be 'all', 'active', 'completed'
​
function addTask(text) {
 const newTask = {
 id: Date.now(), // simple unique id generator
 text: text,
 completed: false
 };
 tasks.push(newTask);
 renderTasks();
}
​
function toggleTaskCompletion(taskId) {
 const task = tasks.find(task => task.id === taskId);
 if (task) {
 task.completed = !task.completed;
 renderTasks();
 }
}
​
function changeFilter(newFilter) {
 filter = newFilter;
 renderTasks();
}
​
function renderTasks() {
 const filteredTasks = tasks.filter(task => {
 if (filter === 'active') return !task.completed;
 if (filter === 'completed') return task.completed;
 return true; // for 'all'
 });
​
 const taskListElement = document.getElementById('taskList');
 taskListElement.innerHTML = '';
 filteredTasks.forEach(task => {
 const taskElement = document.createElement('li');
 taskElement.textContent = task.text;
 taskElement.className = task.completed ? 'completed' : '';
 taskElement.onclick = () => toggleTaskCompletion(task.id);
 taskListElement.appendChild(taskElement);
 });
}
```

## Adding User Interaction:

To interact with the application, users need UI elements to add tasks and filter them. This can be achieved by adding event listeners to buttons and input fields.

```html
<input id="taskInput" type="text" placeholder="Enter a new task" />
<button onclick="addTask(document.getElementById('taskInput').value)">
	Add Task
</button>

<ul id="taskList"></ul>
<button onclick="changeFilter('all')">All</button>
<button onclick="changeFilter('active')">Active</button>
<button onclick="changeFilter('completed')">Completed</button>
```

In this setup, clicking the ‘Add Task’ button calls `addTask()` with the input value, `toggleTaskCompletion()` is triggered when a task is clicked, and the filter buttons call `changeFilter()` with the corresponding filter option.

Understanding state management in vanilla JavaScript is more than a skill — it’s a fundamental aspect of web application development. It teaches you the importance of structuring your code, responding to changes, and maintaining the flow of data in your applications. This knowledge not only enhances your proficiency in vanilla JavaScript but also provides a solid foundation for understanding state management in various JavaScript frameworks.

You might also be interested in other articles from this series:

-   [Back to Basics: Mastering Iteration in JavaScript](https://medium.com/@asierr/back-to-basics-mastering-iteration-in-javascript-7ad190d13b2c)
-   [Back to Basics: Demystifying JavaScript Closures](https://medium.com/@asierr/back-to-basics-demystifying-javascript-closures-68a3b21e077d)
-   [Back to Basics: Mastering Async/Await in JavaScrip](https://medium.com/@asierr/back-to-basics-mastering-async-await-in-javascrip-fc2ad6d2b7d4)

[

Vanilla Javascript

](https://medium.com/tag/vanilla-javascript?source=post_page-----e3be7377ac46---------------vanilla_javascript-----------------)

[

State Management

](https://medium.com/tag/state-management?source=post_page-----e3be7377ac46---------------state_management-----------------)

[

Back To Basics

](https://medium.com/tag/back-to-basics?source=post_page-----e3be7377ac46---------------back_to_basics-----------------)

[

To Do Lis

](https://medium.com/tag/to-do-list?source=post_page-----e3be7377ac46---------------to_do_list-----------------)
