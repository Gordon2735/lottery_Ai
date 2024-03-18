Here are some

best practices

Best practice

A best practice is a method or technique that has been generally accepted as superior to other known alternatives because it often produces results that are superior to those achieved by other means or ...

[Wikipedia](https://en.wikipedia.org/wiki/Best_practice)

![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPLGdVR8lvJeHpm8SrwPTeWnbMjIcHSP6SMi_AHZ3zovz8lQhQ)

[LinkedIn](https://www.linkedin.com/pulse/why-best-practice-terrible-boards-annette-perrin)

Learn more

Feedback

for handling 404 and 500 errors in

Node

Node.js

Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.

[Wikipedia](https://en.wikipedia.org/wiki/Node.js)

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82uBPqnWciRtiFtYrB3OCdcaZLC789VVaMpSBQzC3S1we1p12)

[Wikipedia](https://en.wikipedia.org/wiki/File:Node.js_logo.svg)

Learn more

Feedback

Express

Express.js

Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

[Wikipedia](https://en.wikipedia.org/wiki/Express.js)

![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlI5FN6BxsR7Zdw1hoi8C3cAYIIBlLe5bt3zUh0RvatG-MoqjM)

[Wikipedia](https://en.m.wikipedia.org/wiki/File:Expressjs.png)

Learn more

Feedback

Handlebars and TypeScript:

1. 1\. Use a custom error handler middleware.

    This will allow you to handle all errors in one place, and to provide a consistent response to users.

2. 2\. Log all errors.

    This will help you to track down and fix any problems with your application.

3. 3\. Respond with a friendly and informative message.

    Let the user know what happened, and how they can fix the problem.

4. 4\. Use the appropriate HTTP status code.

    A 404 error indicates that the requested resource does not exist, while a 500 error indicates that there was an internal server error.

5. 5\. Provide different responses for HTML and JSON requests.

    HTML requests should be sent a friendly error page, while JSON requests should be sent an error object.

Here is an example of a custom error handler middleware:

TypeScript

```typescript
import { NextFunction, Request, Response } from 'express';
export function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	// Log the error
	console.error(err.stack);
	// Respond with a friendly and informative message
	if (req.accepts('html')) {
		res.status(err.status || 500).render('error', { message: err.message });
	} else {
		res.status(err.status || 500).json({ error: err.message });
	}
}
```

This middleware will log all errors, and then respond with a friendly and informative message, depending on whether the request was for HTML or JSON.

Here is an example of a 404 error page:

Code

```html
<!doctype html>
<html>
	<head>
		<title>404 - Not Found</title>
	</head>
	<body>
		<h1>404 - Not Found</h1>
		<p>The requested resource could not be found.</p>
	</body>
</html>
```

And here is an example of a JSON error response:

Code

```typescript

{  "error": "The requested resource could not be found."}
```

By following these best practices, you can ensure that your Node Express Handlebars and TypeScript application handles 404 and 500 errors gracefully.

```typescript
// custom 404 page
app.use((req, res) => {
	res.status(404);
	res.render('404');
});
// custom 500 page
app.use((err, req, res, next) => {
	console.error(err.message);
	res.status(500);
	res.render('500');
});
```

```typescript

```

```javascript
// This middleware will be executed for any request that does not match a defined
routeapp.use((req, res, next) => {
	// Redirect the user to the home page
	res.redirect('/');
});
```
