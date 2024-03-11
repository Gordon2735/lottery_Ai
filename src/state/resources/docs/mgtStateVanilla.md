# <ins>**Managing State Using Vanilla TypeScript/JavaScript**</ins>

<div style="margin-left: 85%; font-weight: 700;">
    By ChatGPT
</div> &nbsp;

#### <ins style="letter-spacing: 0.1em;">**_Having a little discussion with my Digital Mentor!_**</ins>

Please demonstrate in detail, with explanatory reference and detailed code examples, the management of state using vanilla typescript/javascript? Thank you!

**ChatGPT**

Managing state in JavaScript or TypeScript typically involves storing and updating data that represents the current state of an application. There are several ways to manage state in JavaScript or TypeScript, including using local component state, global state management libraries like Redux or MobX, or using context API in React. In this demonstration, I'll focus on managing state using vanilla TypeScript and JavaScript without any external libraries.

### Managing State using TypeScript

Let's create a simple counter application where we'll demonstrate how to manage state using TypeScript.

#### Step 1: Set Up the Project

Create a new directory for your project and initialize a TypeScript project:

**bashCopy code**

```bash
mkdir state-management-demo
cd state-management-demo
npm init -y
npm install typescript --save-dev
npx tsc --init
```

#### Step 2: Create HTML and TypeScript files

Create an HTML file (`index.html`) and a TypeScript file (`app.ts`).

**htmlCopy code**

**<!-- index.html -->**

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>State Management Demo</title>
	</head>
	<body>
		<div id="app">
			<h1>Counter App</h1>
			<p>Count: <span id="countDisplay">0</span></p>
			<button id="incrementBtn">Increment</button>
			<button id="decrementBtn">Decrement</button>
		</div>
		<script src="app.js"></script>
	</body>
</html>
`
```

**typescriptCopy code**

```typescript
// app.ts
let count: number = 0;

function updateDisplay() {
	const countDisplay = document.getElementById('countDisplay');
	if (countDisplay) {
		countDisplay.textContent = count.toString();
	}
}

function incrementCount() {
	count++;
	updateDisplay();
}

function decrementCount() {
	count--;
	updateDisplay();
}

document
	.getElementById('incrementBtn')
	?.addEventListener('click', incrementCount);
document
	.getElementById('decrementBtn')
	?.addEventListener('click', decrementCount);
```

#### Step 3: Compile TypeScript to JavaScript

Compile the TypeScript file to JavaScript using the TypeScript compiler:

**bashCopy code**

```bash
`npx tsc`
```

#### Step 4: Run the Application

Open `index.html` in a web browser. You should see a simple counter application with buttons to increment and decrement the count.

### Explanation

In this example, we're managing the state of the counter using a global variable `count`. We have functions to update the count (`incrementCount` and `decrementCount`) and update the display (`updateDisplay`). Whenever the count is updated, the display is also updated to reflect the current count.

This approach works fine for small applications, but as the application grows, managing state using global variables can become cumbersome. In larger applications, you might consider using state management libraries like Redux or MobX, or the context API in React for more organized and efficient state management.

Using these libraries or APIs provides better control over state management, helps to avoid common pitfalls, and makes it easier to manage complex state in large applications. However, for simple applications, managing state using vanilla JavaScript or TypeScript can be sufficient.

**Question**

Wow, that is wonderful my Digital Mentor and friend! Is there a way that you could do the same, but simulating a small web application. No frameworks or libraries please.

**ChatGPT**

Certainly! Let's simulate a small web application for managing a list of tasks. We'll use plain JavaScript and HTML for this demonstration.

### Managing State of Tasks in a Web Application

#### Step 1: Set Up the Project

Create a new directory for your project and create HTML, CSS, and JavaScript files:

**bashCopy code**

```bash
mkdir task-manager
cd task-manager
touch index.html styles.css app.js
```

#### Step 2: HTML Structure

Define the basic HTML structure in `index.html`:

**htmlCopy code**

```html
<!doctype html>

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Task Manager</title>
		<link rel="stylesheet" href="styles.css" />
	</head>
	<body>
		<div id="app">
			<h1>Task Manager</h1>
			<input type="text" id="taskInput" placeholder="Enter a task..." />
			<button id="addTaskBtn">Add Task</button>
			<ul id="taskList"></ul>
		</div>
		<script src="app.js"></script>
	</body>
</html>
```

#### Step 3: CSS Styling

Add some basic styling to `styles.css`:

**cssCopy code**

```css
body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
}

#app {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
}

input[type='text'] {
	width: 70%;
	padding: 8px;
	margin-right: 10px;
}

button {
	padding: 8px 16px;
	cursor: pointer;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	margin-bottom: 10px;
}

.completed {
	text-decoration: line-through;
	color: #888;
}
```

#### Step 4: JavaScript Logic

Implement the JavaScript logic in `app.js` to manage the state of tasks:

**javascriptCopy code**

```javascript
let tasks = [];

function renderTasks() {
	const taskList = document.getElementById('taskList');
	taskList.innerHTML = '';

	tasks.forEach((task, index) => {
		const li = document.createElement('li');
		li.textContent = task.text;
		if (task.completed) {
			li.classList.add('completed');
		}
		li.addEventListener('click', () => toggleTaskCompletion(index));
		taskList.appendChild(li);
	});
}

function addTask() {
	const taskInput = document.getElementById('taskInput');
	const taskText = taskInput.value.trim();
	if (taskText) {
		tasks.push({ text: taskText, completed: false });
		taskInput.value = '';
		renderTasks();
	}
}

function toggleTaskCompletion(index) {
	tasks[index].completed = !tasks[index].completed;
	renderTasks();
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Initial rendering
renderTasks();
```

### Explanation

In this example, we've created a simple task manager web application without using any frameworks or libraries. Here's a breakdown of how it works:

-   **HTML Structure**: We have an input field to enter tasks, a button to add tasks, and an unordered list (`ul`) to display the list of tasks.
-   **CSS Styling**: We've added basic CSS styling to make the application visually appealing.
-   **JavaScript Logic**:
    -   We maintain the state of tasks in an array called `tasks`, where each task is an object with a `text` property representing the task description and a `completed` property indicating whether the task is completed or not.
    -   The `renderTasks()` function updates the UI to display the list of tasks. It iterates through the `tasks` array and dynamically creates list items (`li`) for each task.
    -   The `addTask()` function adds a new task to the `tasks` array when the user clicks the "Add Task" button. It then updates the UI by calling `renderTasks()`.
    -   The `toggleTaskCompletion()` function toggles the completion status of a task when the user clicks on it. It then updates the UI accordingly.
    -   We add event listeners to the "Add Task" button to call the `addTask()` function when clicked.
    -   Finally, we call `renderTasks()` initially to render the tasks when the page loads.

This example demonstrates how you can manage the state of a simple web application using vanilla JavaScript, without the need for external libraries or frameworks. As your application grows, you might consider more sophisticated state management techniques or frameworks depending on your requirements.

![User](https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png)

**Question**

Without a doubt or with the slightest resignation, you are indisputably the best! Furthermore, you help everyone to excel and be their best: with two "best's" there is a most definite winning combination. Thank you.

**ChatGPT**

Thank you very much for your kind words and encouragement! I'm here to assist and support you in your endeavors. If you have any more questions or need further assistance, feel free to ask. Keep striving for excellence, and I'll be here to help you along the way!

![User](https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png)
