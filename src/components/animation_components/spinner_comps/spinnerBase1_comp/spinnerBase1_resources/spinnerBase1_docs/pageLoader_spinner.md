<!-- Page Loader Spinner -->

# **Page Loader Spinner**

#### **Introduction**

-   A page loader is the display that is visible to the user of a website while the web page loads to the browser. If there is no page loader and the page takes a longer time to load than usual, the users of the site will be left with a blank white page.

-   This can be changed with a page loader, div>, that you have designed to fit your needs.

#### **How to create a page loader**

-   To create a page loader, you simply need to:

    1.  Create your HTML code to indicate what you want to use as your loader, e.g.,
        an image or an icon.
    2.  Then, style your loader page to your taste. One of the common  
        choices among designers is to animate their loaders.
    3.  Finally, create a JavaScript script that will fire up when the page is  
        requested and then execute the code it contains. In this case, the code will check if the page is not loaded and then display the loader if so.

-   Below is a sample page loader code.

```javascript
document.onreadystatechange = function () {
	if (document.readyState !== 'complete') {
		document.querySelector('body').style.visibility = 'hidden';
		document.querySelector('#spinner').style.visibility = 'visible';
	} else {
		document.querySelector('#spinner').style.display = 'none';
		document.querySelector('body').style.visibility = 'visible';
	}
};
```

```html

<html>
<head>
 <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="inline">
        <div  class="center">

            <h1>Educative/Edpresso</h1>
            <h2>Home of Dev Shots Loader</h2>

        </div>
           <p class="spinner" id="spinner"><i class="fa fa-spinner fa-5x"></i></p>
    </div>
</html>
```

```css
#spinner {
	animation: spin 1s linear infinite;
	color: red;
}

@keyframes spin {
	100% {
		transform: rotate(360deg);
	}
}

.inline {
	display: flex;
}
.center {
	flex: left;
}
.spinner i {
	margin-top: 10px;
	margin-left: 50px;
}
```

#### **Explanation**

-   We create and style a loader, as well as the page to be displayed.

-   In JavaScript, when document.readyState changes, a readystatechange event happens and our function executes. This function holds that if the document is not yet loaded, then the body should remain hidden from the user, and only the loader should be visible.

-   Once the page has completely loaded, the loader is immediately set to display:none, and the body is made visible.

-   If the page doesn’t load quickly enough, the spinner below (which is our loader) will be visible. Due to how fast the page in the previous code loads, you can only see the loader for a short time.

```html
<!doctype html>
<html lang="en">
	<head>
		<title>
			How to show Page Loading div until the page has finished loading?
		</title>

		<style>
			#loader {
				border: 12px solid #f3f3f3;
				border-radius: 50%;
				border-top: 12px solid #444444;
				width: 70px;
				height: 70px;
				animation: spin 1s linear infinite;
			}

			.center {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
			}

			@keyframes spin {
				100% {
					transform: rotate(360deg);
				}
			}
		</style>
	</head>

	<body>
		<div id="loader" class="center"></div>
		<h1>GeeksforGeeks</h1>
		<h2>A computer science portal for geeks</h2>

		<img
			src="https://media.geeksforgeeks.org/wp-content/uploads/20230723195619/GfG-Image.png"
			alt="GeeksforGeeks logo" />

		<script>
			document.onreadystatechange = function () {
				if (document.readyState !== 'complete') {
					document.querySelector('body').style.visibility = 'hidden';
					document.querySelector('#loader').style.visibility =
						'visible';
				} else {
					document.querySelector('#loader').style.display = 'none';
					document.querySelector('body').style.visibility = 'visible';
				}
			};
		</script>
	</body>
</html>
```
