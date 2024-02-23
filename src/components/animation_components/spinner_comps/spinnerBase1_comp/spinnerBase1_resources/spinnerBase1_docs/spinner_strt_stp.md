<!-- Progress Spinner in TypeScript -->

# **Progress Spinner in TypeScript**

##### **QUESTION:**

-   Progress spinner in TypeScript hooked to html page for opening and to finisher when all the scripts and elements etc are loaded? code examples and references

##### **ChatGPT**

-   To create a progress spinner in TypeScript that is hooked to an HTML page for indicating the loading progress and completing when all the scripts and elements are loaded, you can use the following approach.

-   First, let's create an HTML file (index.html) where we will integrate the progress spinner and scripts:

-   html

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Loading Spinner Example</title>
		<!-- Include CSS for spinner -->
		<link rel="stylesheet" href="styles.css" />
	</head>
	<body>
		<!-- Progress Spinner -->
		<div id="progress-spinner" class="spinner-container">
			<div class="spinner"></div>
		</div>

		<!-- Your page content -->
		<div id="content">
			<!-- Your page content goes here -->
			<h1>Welcome to my page!</h1>
			<!-- Example content -->
		</div>

		<!-- Include JavaScript file -->
		<script src="scripts.js"></script>
	</body>
</html>
```

-   **Next**, let's create a CSS file (styles.css) to style the spinner:

-   css

```css
.spinner-container {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.7);
	z-index: 9999;
}

.spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	border-radius: 50%;
	border: 6px solid #ccc;
	border-top-color: #333;
	animation: spin 1s infinite linear;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
```

-   **Now**, let's create a TypeScript file (scripts.ts) for managing the loading spinner and page content:

-   typescript

```typescript
document.addEventListener('DOMContentLoaded', function () {
	const content = document.getElementById('content');
	const spinnerContainer = document.getElementById('progress-spinner');

	// Show spinner
	spinnerContainer.style.display = 'block';

	// Hide spinner when all resources are loaded
	window.addEventListener('load', function () {
		spinnerContainer.style.display = 'none';
		content.style.display = 'block'; // Show content when all loaded
	});
});
```
