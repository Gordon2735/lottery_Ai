# **Here is an example of a 404 handler in**

Express

Express.js

Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

[Wikipedia](https://en.wikipedia.org/wiki/Express.js)

![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlI5FN6BxsR7Zdw1hoi8C3cAYIIBlLe5bt3zUh0RvatG-MoqjM)

[Wikipedia](https://en.m.wikipedia.org/wiki/File:Expressjs.png)

Learn more

Feedback

:

JavaScript

```javascript
// This middleware will be executed for any request that does not match a defined
routeapp.use((req, res, next) => {
	// Respond with a 404 status code and a message
	res.status(404).send('Not found');
});
```

This

middleware

Middleware

Middleware is a type of computer software program that provides services to software applications beyond those available from the operating system. It can be described as "software glue".

[Wikipedia](https://en.wikipedia.org/wiki/Middleware)

![](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQind29F_rfEiH2zykYU9CF2swjOXSEgWN-2I3bXZjjz8siW3Po)

[OPC Router](https://www.opc-router.com/what-is-middleware/)

Learn more

Feedback

will be executed for any request that does not match a defined route. It will respond with a 404 status code and a message.

Here is an example of a 404 handler that renders a custom error page:

JavaScript

```javascript
// This middleware will be executed for any request that does not match a defined
routeapp.use((req, res, next) => {
	// Render the 404 error page
	res.render('404');
});
```

This middleware will be executed for any request that does not match a defined route. It will render the

404 error

HTTP 404

In computer network communications, the HTTP 404, 404 not found, 404, 404 error, page not found, or file not found error message is a hypertext transfer protocol standard response code, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested.

[Wikipedia](https://en.wikipedia.org/wiki/HTTP_404)

![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcST7PfSjMpvz5GrK927qr4amNSaFPILG1ATypE4gjoGx0EfW_xh)

[Wikipedia](https://es.wikipedia.org/wiki/HTTP_404)

Learn more

Feedback

page.

You can also use a 404 handler to

redirect

URL redirection

URL redirection, also called URL forwarding, is a World Wide Web technique for making a web page available under more than one URL address. When a web browser attempts to open a URL that has been redirected, a page with a different URL is opened.

[Wikipedia](https://en.wikipedia.org/wiki/URL_redirection)

![](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLX1V_FxZ3dZjMg4pra-4hWDQ2_2Km9QxvFKJ9usUdIOTqtg5h)

[Quattr](https://www.quattr.com/enhance-experience/url-redirects-explained)

Learn more

Feedback

the user to a different page. For example, you could redirect the user to your home page:

JavaScript

```javascript
// This middleware will be executed for any request that does not match a defined
routeapp.use((req, res, next) => {
	// Redirect the user to the home page
	res.redirect('/');
});
```

This middleware will be executed for any request that does not match a defined route. It will redirect the user to the home page.

Which 404 handler you use will depend on your specific needs.
