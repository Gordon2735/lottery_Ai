[DigitalOcean](https://www.digitalocean.com/)

# How To Use the JavaScript Fetch API to Get Data

Updated on December 10, 2021

![author](/_next/static/media/default-avatar.14b0d31d.jpeg)![author](https://www.gravatar.com/avatar/bf896970042188d399f1cec7b6a6733505abd484e105a9fce10f43940a8217ed?default=retro)

Sara Vieira and [Ceora Ford](https://www.digitalocean.com/community/users/ceoraf)

![How To Use the JavaScript Fetch API to Get Data](/_next/static/media/intro-to-cloud.d49bc5f7.jpeg 'How To Use the JavaScript Fetch API to Get Data')

### [Introduction](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#introduction)[](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#introduction)

There was a time when `XMLHttpRequest` was used to make API requests. It didn’t include Promises, and it didn’t make for clean JavaScript code. Using jQuery, you could use the cleaner syntax of `jQuery.ajax()`.

Now, JavaScript has its own built-in way to make API requests. This is the Fetch API, a new standard to make server requests with Promises, but which also includes additional features.

In this tutorial, you will create both GET and POST requests using the Fetch API.

Deploy your frontend applications from GitHub using [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform). Let DigitalOcean focus on scaling your app.

## [Prerequisites](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#prerequisites)[](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#prerequisites)

To complete this tutorial, you will need the following:

-   A local development environment for Node.js. Follow [How to Install Node.js and Create a Local Development Environment](https://www.digitalocean.com/community/tutorial-series/how-to-install-node-js-and-create-a-local-development-environment).
-   A basic understanding of coding in JavaScript, which you can learn more about from the [How to Code in JavaScript](https://www.digitalocean.com/community/tutorial-series/how-to-code-in-javascript) series.
-   An understanding of Promises in JavaScript. Read the [Promises section](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript#promises) of this article on [the event loop, callbacks, Promises, and async/await](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript) in JavaScript.

## [Step 1 — Getting Started with Fetch API Syntax](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#step-1-getting-started-with-fetch-api-syntax)[](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#step-1-getting-started-with-fetch-api-syntax)

One approach to using the Fetch API is by passing `fetch()` the URL of the API as a parameter:

```javascript
fetch(url);
```

The `fetch()` method returns a Promise. After the `fetch()` method, include the Promise method `then()`:

```javascript
fetch(url).then(function () {
    // handle the response
});
```

If the Promise returned is `resolve`, the function within the `then()` method is executed. That function contains the code for handling the data received from the API.

After the `then()` method, include the `catch()` method:

```javascript
fetch(url)
    .then(function () {
        // handle the response
    })
    .catch(function () {
        // handle the error
    });
```

The API you call using `fetch()` may be down or other errors may occur. If this happens, the `reject` promise will be returned. The `catch` method is used to handle `reject`. The code within `catch()` will be executed if an error occurs when calling the API of your choice.

With an understanding of the syntax for using the Fetch API, you can now move on to using `fetch()` on a real API.

## [Step 2 — Using Fetch to get Data from an API](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#step-2-using-fetch-to-get-data-from-an-api)[](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#step-2-using-fetch-to-get-data-from-an-api)

The following code samples will be based on the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). Using the API, you will get ten users and display them on the page using JavaScript. This tutorial will retrieve data from the JSONPlaceholder API and display it in list items inside the author’s list.

Begin by creating an HTML file and adding a heading and unordered list with the `id` of `authors`:

```html
<h1>Authors</h1>
<ul id="authors"></ul>
```

Now add `script` tags to the bottom of your HTML file and use a DOM selector to grab the `ul`. Use [`getElementById`](https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom) with `authors` as the argument:

```html
<h1>Authors</h1>
<ul id="authors"></ul>

<script>
    const ul = document.getElementById('authors');
</script>
```

Remember, `authors` is the `id` for the previously created `ul`.

Next, create a `list` that is a [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment):

```html
<script>
    // ...

    const list = document.createDocumentFragment();
</script>
```

All the appended list items will be added to `list`. A `DocumentFragment` is not part of the active document tree structure. This has the benefit of not causing performance-affecting redraws when the Document Object Model is changed.

Create a constant variable called `url` which will hold the API URL that will return ten random users:

```html
<script>
    // ...

    const url = 'https://jsonplaceholder.typicode.com/users';
</script>
```

Now using the Fetch API, call the JSONPlaceholder API using `fetch()` with `url` as the argument:

```html
<script>
    // ...

    fetch(url);
</script>
```

You are calling the Fetch API and passing in the URL to the JSONPlaceholder API. Then a response is received. However, the response you get is not JSON, but an object with a series of methods that can be used depending on what you want to do with the information. To convert the object returned into JSON, use the `json()` method.

Add the `then()` method which will contain a function with a parameter called `response`:

```html
<script>
    // ...

    fetch(url).then((response) => {});
</script>
```

The `response` parameter takes the value of the object returned from `fetch(url)`. Use the `json()` method to convert `response` into JSON data:

```html
<script>
    // ...

    fetch(url).then((response) => {
        return response.json();
    });
</script>
```

The JSON data still needs to be processed. Add another `then()` statement with a function that has an argument called `data`:

```html
<script>
    // ...

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {});
</script>
```

Within this function, create a variable called `authors` that is set equal to `data`:

```html
<script>
    // ...

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let authors = data;
        });
</script>
```

For each author in `authors`, you will want to create a list item that displays their name. The [`map()` method](https://www.digitalocean.com/community/tutorials/list-processing-with-map-filter-and-reduce) is suited for this pattern:

```html
<script>
    // ...

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let authors = data;

            authors.map(function (author) {});
        });
</script>
```

Within your `map` function, create a variable called `li` that will be set equal to [`createElement`](https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom) with `li` (the HTML element) as the argument. Also, create an `h2` for `name` and a `span` for `email`:

```html
<script>
    // ...

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let authors = data;

            authors.map(function (author) {
                let li = document.createElement('li');
                let name = document.createElement('h2');
                let email = document.createElement('span');
            });
        });
</script>
```

The `h2` element will contain the `name` of the `author`. The `span` element will contain the email of the `author`. The `innerHTML` property and string interpolation will allow you to do this:

```html
<script>
    // ...

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let authors = data;

            authors.map(function (author) {
                let li = document.createElement('li');
                let name = document.createElement('h2');
                let email = document.createElement('span');

                name.innerHTML = `${author.name}`;
                email.innerHTML = `${author.email}`;
            });
        });
</script>
```

Next, connect these DOM elements with [`appendChild`](https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom):

```html
<script>
    // ...

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let authors = data;

            authors.map(function (author) {
                let li = document.createElement('li');
                let name = document.createElement('h2');
                let email = document.createElement('span');

                name.innerHTML = `${author.name}`;
                email.innerHTML = `${author.email}`;

                li.appendChild(name);
                li.appendChild(email);
                list.appendChild(li);
            });
        });

    ul.appendChild(list);
</script>
```

Note that each list item is being appended to the `DocumentFragment` `list`. Once the `map` is complete, the `list` is appended to the `ul` unordered list element.

With both `then()` functions completed, you can now add the `catch()` function. This function will log the potential error to the console:

```html
<script>
    // ...

    fetch(url)
        .then((response) => {
            // ...
        })
        .then((data) => {
            // ...
        })
        .catch(function (error) {
            console.log(error);
        });

    // ...
</script>
```

This is the full code of the request you created:

```html
<h1>Authors</h1>
<ul id="authors"></ul>

<script>
    const ul = document.getElementById('authors');
    const list = document.createDocumentFragment();
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let authors = data;

        authors.map(function(author) {
          let li = document.createElement('li');
          let name = document.createElement('h2');
          let email = document.createElement('span');

          name.innerHTML = `${author.name}`;
          email.innerHTML = `${author.email}`;

          li.appendChild(name);
          li.appendChild(email);
          list.appendChild(li);
        });
      }).
      .catch(function(error) {
        console.log(error);
      });

    ul.appendChild(list);
</script>
```

You just successfully performed a GET request using the JSONPlaceholder API and the Fetch API. In the next step, you will perform POST requests.

## [Step 3 — Handling POST Requests](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#step-3-handling-post-requests)[](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#step-3-handling-post-requests)

Fetch defaults to GET requests, but you can use all other types of requests, change the headers, and send data. Let’s create a POST request.

First, include a constant variable that holds the link to the JSONPlaceholder API:

```javascript
const url = 'https://jsonplaceholder.typicode.com/users';
```

Next, you need to set your object and pass it as the second argument of the fetch function. This will be an object called `data` with the key `name` and value `Sammy` (or your name):

```javascript
// ...

let data = {
    name: 'Sammy'
};
```

Since this is a POST request, you will need to state that explicitly. Create an object called `fetchData`:

```javascript
// ...

let fetchData = {};
```

This object needs to include three keys: `method`, `body`, and `headers`:

```javascript
// ...

let fetchData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    })
};
```

The `method` key will have the value `'POST'`. `body` will be set equal to the [`JSON.stringify()`](https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript) format of the `data` object that was just created. `headers` will have the value of `'Content-Type': 'application/json; charset=UTF-8'`.

The `Headers` interface is a property of the Fetch API, which allows you to perform actions on HTTP request and response headers. This article called [How To Define Routes and HTTP Request Methods in Express](https://www.digitalocean.com/community/tutorials/nodejs-express-routing) can provide you with more information.

With this code in place, the POST request can be made using the Fetch API. You will include `url` and `fetchData` as arguments for your `fetch` POST request:

```javascript
// ...

fetch(url, fetchData);
```

The `then()` function will include code that handles the response received from the JSONPlaceholder API:

```javascript
// ...

fetch(url, fetchData).then(function () {
    // Handle response you get from the API
});
```

This is the full code of the request you created:

```javascript
const url = 'https://jsonplaceholder.typicode.com/users';

let data = {
    name: 'Sammy'
};

let fetchData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    })
};

fetch(url, fetchData).then(function () {
    // Handle response you get from the API
});
```

Alternatively, you can pass `fetch()` a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object.

```javascript
const url = 'https://jsonplaceholder.typicode.com/users';

let data = {
    name: 'Sammy'
};

let request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    })
});

fetch(request).then(function () {
    // Handle response you get from the API
});
```

With this approach, `request` can be used as the sole argument for `fetch()`, replacing `url` and `fetchData`.

Now you know two methods for creating and executing POST requests with the Fetch API.

## [Conclusion](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#conclusion)[](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#conclusion)

While the Fetch API is not yet supported by all the browsers, it is a great alternative to `XMLHttpRequest`.

If you would like to learn how to call Web APIs using React, [check out this article](https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react) on this very topic.
