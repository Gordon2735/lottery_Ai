<!-- Handling 404 ERRORS in JavaScript -->

**Generative AI is experimental**. [Learn more](https://support.google.com/websearch?p=data_genai_search&hl=en)

Choose what you’re giving feedback on

Or give [general feedback](https://www.google.com/search?q=how+to+tap+into+the+browser+and+listen+when+a+404+error+occurs%2C+javascript+references+and+code+examples&rlz=1C2FHFK_enUS956US1075&sca_esv=5bba732863c70c64&sxsrf=ACQVn0-WtdsuoL7qrySGgNzzKioHKlv5uA%3A1710655904909&source=hp&ei=oIn2ZfP9NKPukvQP-tim2A8&iflsig=ANes7DEAAAAAZfaXsGTTVIzr9OkcUU1eujA5BaFkUbnj&ved=0ahUKEwjzzavs0fqEAxUjt4QIHXqsCfsQ4dUDCBg&uact=5&oq=how+to+tap+into+the+browser+and+listen+when+a+404+error+occurs%2C+javascript+references+and+code+examples&gs_lp=Egdnd3Mtd2l6Imdob3cgdG8gdGFwIGludG8gdGhlIGJyb3dzZXIgYW5kIGxpc3RlbiB3aGVuIGEgNDA0IGVycm9yIG9jY3VycywgamF2YXNjcmlwdCByZWZlcmVuY2VzIGFuZCBjb2RlIGV4YW1wbGVzMgUQIRigATIFECEYoAEyBRAhGKABSMX9AlC0B1jT-gJwAXgAkAEAmAGTAaABwCqqAQUyMi4zMLgBA8gBAPgBAZgCNaACtCyoAgrCAgcQIxjqAhgnwgIEECMYJ8ICCxAAGIAEGIoFGJECwgIKEAAYgAQYigUYQ8ICERAuGIAEGLEDGIMBGMcBGNEDwgILEC4YgAQYxwEY0QPCAgsQABiABBixAxiDAcICChAAGIAEGBQYhwLCAgUQABiABMICBRAuGIAEwgIIEAAYgAQYsQPCAgsQABiABBiKBRixA8ICCxAuGIAEGLEDGNQCwgIGEAAYFhgewgIIEAAYFhgeGArCAggQABgWGB4YD8ICCxAAGIAEGIoFGIYDwgIFECEYnwXCAgQQIRgVwgIIEAAYiQUYogTCAggQABiABBiiBJgDEJIHBTE4LjM1oAeCvAI&sclient=gws-wiz#)

# **Tap into the Browser and Listen When a 404 Error Occurs**

Here are some ways to tap into the browser and listen when a 404 error occurs, with JavaScript references and code examples:

1. Using the `window.onerror`

    In programming and software design, an event is an action or occurrence recognized by software, often originating asynchronously from the external environment, that may be handled by the software. Computer events can be generated or triggered by the system, by the user, or in other ways.

    [Wikipedia](<https://en.wikipedia.org/wiki/Event_(computing)>)

    ![](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQK5j_YfQprvqE_8lUSmOmv0Lg7Y5bzTzYKLBzCwpvLVVe3a_P)

    [Wikipedia](<https://en.wikipedia.org/wiki/Event_(computing)>)

    In computer programming, a callback or callback function is any reference to executable code that is passed as an argument to another piece of code; that code is expected to call back the callback function as part of its job.

    [Wikipedia](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>)

    ![](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSedPI-xpgs80et5-Ratz52h44fBy2iYc9TeMu9f6Jkv7B2Rhf4)

    [Medium](https://medium.com/@mohdtalib.dev/callbacks-in-javascript-the-what-why-and-how-5bc1cb216e6f)

This event handler is triggered whenever an error occurs on the page, including

404 errors

HTTP 404

In computer network communications, the HTTP 404, 404 not found, 404, 404 error, page not found, or file not found error message is a hypertext transfer protocol standard response code, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested.

[Wikipedia](https://en.wikipedia.org/wiki/HTTP_404)

![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcST7PfSjMpvz5GrK927qr4amNSaFPILG1ATypE4gjoGx0EfW_xh)

[Wikipedia](https://es.wikipedia.org/wiki/HTTP_404)

. **_To use it_**, _you can add the following code to your JavaScript file_:

**_JavaScript_**

```javascript
window.onerror = function (event) {
	// Get the error message
	var message = event.message;
	// Get the URL that caused the error
	var url = event.target.src;
	// Log the error to the console
	console.log(message + ': ' + url);
};
```

1. Using the `XMLHttpRequest` object:

You can use the `XMLHttpRequest` object to make an HTTP request to a URL and listen for the `error` event. If the request returns a 404 error, the `error` event will be triggered. To use this method, you can add the following code to your JavaScript file:

**_JavaScript_**

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.onerror = function () {
	console.log('404 error: ' + url);
};
```

1. Using the `Fetch API`:

The `Fetch API` is a newer way to make HTTP requests in JavaScript. It provides a more streamlined and efficient way to handle errors, including 404 errors. To use the `Fetch API` to listen for 404 errors, you can add the following code to your JavaScript file:

**_JavaScript_**

```javascript
fetch(url)
	.then(function (response) {
		// Check the response status code
		if (response.status === 404) {
			// Log the error to the console
			console.log('404 error: ' + url);
		}
	})
	.catch(function (error) {
		// Log the error to the console
		console.log('Error: ' + error);
	});
```

1. Using async/await with the Fetch API:
    - **Good evening my 'digital mentor' and friend**! Can you offer an async/await version of the following promise and chaining of the Fetch API in JavaScript?
    - **ChatGPT** Certainly! Here's an asynchronous version of the given promise chain using async/await with the Fetch API:

**_JavaScript_**

```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);

        // Check the response status code
        if (response.status === 404) {
        // Log the error to the console
        console.log('404 error: ' + url);
        }
    } catch (error) {
        // Log the error to the console
        console.log('Error: ' + error);
    }
}

// Example usage:
fetchData('https://example.com/api/data');`
```

In this version, we define an async function `fetchData` that takes a URL parameter. Within this function, we use `await` to make the HTTP request using `fetch()`. We then use a `try...catch` block to handle any errors that might occur during the asynchronous operations. Inside the `try` block, we check the response status and log an error message if it's a 404 status. If there's an error during the fetch operation itself, it will be caught by the `catch` block and logged. Finally, you can call the `fetchData` function with the desired URL to fetch data asynchronously.

These are just a few ways to tap into the browser and listen when a 404 error occurs using JavaScript. The best method to use will depend on your specific needs and requirements.
