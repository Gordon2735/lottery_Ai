<!-- readyState & onreadystatechange -->

### **How to show Page Loading div until the page has finished loading?**

#### **JavascriptWeb DevelopmentFront End Technology**

-   Rather than showing the whole white or black screen while loading the page, it is better to show the loading indicator, which also improves the UX of the application.

-   Nowadays, there are some libraries available to show loading indicators. However, we can use HTML and CSS to create a customized loading indicator div.

-   In this tutorial, we will use HTML, CSS, and JavaScript to show page loading div until the page has finished loading

-   Use the onreadystatechange event to show the loading indicator while loading the page
    In JavaScript, the onreadystatechange event triggers whenever the state of the web page changes. The first state is ‘interactive’, which means the web page is interacting and has started loading. The second stage is ‘complete’, which means the web page is loaded successfully.

-   So, we can hide the body and show the loading indicator on every other state, and on the ‘complete’ state, we can hide the loading indicator and show the body.

##### **Syntax**

-   Users can follow the syntax below to show and hide the loading indicator based on the state of the document.

```javascript
document.onreadystatechange = function () {
	if (document.readyState !== 'complete') {
		// show loading indicator and hide body
	} else {
		// show body, and hide loading indicator
	}
};
```

```javascript
window.addEventListener('load', function () {
	document.getElementById('loader').style.display = 'none';
});
```

-   In this case, you loader would have to have an id of #loader.

```html
<body>
	<div id="load"></div>
	<div id="contents">Lottery Ai Spinner Component</div>
</body>
```

This is your body

```javascript
document.onreadystatechange = function () {
	var state = document.readyState;
	if (state == 'interactive') {
		document.getElementById('contents').style.visibility = 'hidden';
	} else if (state == 'complete') {
		setTimeout(function () {
			document.getElementById('interactive');
			document.getElementById('load').style.visibility = 'hidden';
			document.getElementById('contents').style.visibility = 'visible';
		}, 1000);
	}
};
```

-   This will be the statement triggers if the readyState is equal to complete document.readyState can have 3 values which is loading ,interactive and complete..

-   if the document.readyState become complete, then the spinners hide..

-   You should make your spinner full screen and above all

```css
.ring {
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 999;
}
```

-   In the above syntax, whenever the state of the document changes, we invoke the function. It checks if the state is ‘complete’, then hides the loading indicator and shows the body.

##### **Example:**

-   In the example below, we have created the div with the ‘loading_indicator’ div and applied some CSS to make it a rounded loading indicator.

-   In JavaScript, we use the onreadystatechange event. Whenever the state changes, it will execute the function. In the function, we use the ‘readyState’ property of the document to get the current state of the document. If the document's current state is equal to the ‘complete’, we can access and hide the loading indicator and show the whole document body. Otherwise, we can show a loading indicator and hide the document body.

```html
<html>
	<head>
		<style>
			#loading_indicator {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				border: 10px solid grey;
				border-radius: 50%;
				border-top: 10px solid blue;
				width: 100px;
				height: 100px;
				animation: spinIndicator 1s linear infinite;
			}
			@keyframes spinIndicator {
				100% {
					transform: rotate(360deg);
				}
			}
		</style>
	</head>
	<body>
		<h2>
			Using the i> onreadystatechange event /i> to show page loading div
			in JavaScript.
		</h2>
		<div id="loading_indicator"></div>
		<h3>Page Loaded successfully.</h3>
		<img
			src="https://www.tutorialspoint.com/static/images/logo-color-footer.png"
			alt="image" />

		<script>
			document.onreadystatechange = function () {
				if (document.readyState !== 'complete') {
					document.querySelector('body').style.visibility = 'hidden';
					document.getElementById(
						'loading_indicator'
					).style.visibility = 'visible';
				} else {
					setTimeout(() => {
						document.getElementById(
							'loading_indicator'
						).style.display = 'none';
						document.querySelector('body').style.visibility =
							'visible';
					}, 3000);
				}
			};
		</script>

		5
	</body>
</html>
```

##### **Example:**

-   In the example below, we have used jQuery to show the loading indicator while loading the page. We have added HTML and CSS for the document body.

-   In JQuery, we used the append() method to append the loading indicator in the document body. After that, we used the ‘load’ event to check whether the page was loaded or not and based on that, we removed the loading indicator from the web page.

```html
<html>
	<head>
		<style>
			#indicator {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				border: 10px solid grey;
				border-radius: 50%;
				border-top: 10px solid red;
				width: 100px;
				height: 100px;
				animation: spin 1s linear infinite;
			}
			@keyframes spin {
				0% {
					-webkit-transform: rotate(0deg);
					transform: rotate(0deg);
				}
				100% {
					-webkit-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}
		</style>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	</head>
	<body>
		<h2>
			Using the <i> JQuery load event </i> to show page loading div in
			JavaScript.
		</h2>
		<h3>Page Loaded successfully.</h3>
		<img
			src="https://www.tutorialspoint.com/static/images/logo-color-footer.png"
			alt="image" />
		<script>
			$('body').append(
				'<div style = "" id = "indicator"> <div class="loader"> </div> </div>'
			);
			$(window).on('load', function () {
				setTimeout(removeLoader, 2000);
			});
			function removeLoader() {
				$('#indicator').fadeOut(1000, function () {
					$('#indicator').remove();
				});
			}
		</script>
	</body>
</html>
```

-   We learned to show a loading indicator while the page is loading using JavaScript and jQuery. In the first example, we used the onreadystatechange event of JavaScript to show and hide the loading indicator based on whether the page is loaded.

-   In the second example, we used the load event of JQuery to show and hide the loading indicator

-   Yes, you can hook the spinner loader to the page rendering to start and stop it. Here is an example in vanilla JavaScript:

```html
<div id="loader"></div>
```

```css
#loader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
}

#loader .spinner {
	width: 50px;
	height: 50px;
	border: 5px solid rgba(255, 255, 255, 0.5);
	border-radius: 50%;
	border-top-color: rgba(255, 255, 255, 1);
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
```

```javascript
const loader = document.getElementById('loader');

function showLoader() {
	loader.style.display = 'flex';
}

function hideLoader() {
	loader.style.display = 'none';
}

// Show the loader when the page starts loading
window.addEventListener('load', showLoader);

// Hide the loader when the page has finished loading
window.addEventListener('DOMContentLoaded', hideLoader);
```

-   This code will show the loader when the page starts loading and hide it when the page has finished loading.

-   Here is an example in TypeScript:

```typescript
interface LoaderProps {
id: string;
size?: number;
color?: string;
}

class Loader {
constructor(private props: LoaderProps) {}

render() {
const { id, size = 50, color = 'white' } = this.props;

    return (
      <div id={id} className="loader">
        <div className="spinner" style={{ width: size, height: size, borderColor: color }} />
      </div>
    );

}
}

const loader = new Loader({ id: 'loader' });

document.body.appendChild(loader.render());

// Show the loader when the page starts loading
window.addEventListener('load', () => {
loader.render().style.display = 'flex';
});

// Hide the loader when the page has finished loading
window.addEventListener('DOMContentLoaded', () => {
loader.render().style.display = 'none';
});
```

-   This code will show the loader when the page starts loading and hide it when the page has finished loading.
-   You can customize the loader by changing the size, color, and other CSS properties. You can also add additional functionality, such as showing the loader when an asynchronous operation is in progress.
