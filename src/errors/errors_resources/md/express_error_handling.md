# **Express Error Handling Like a Pro using Typescript**

[

![Mason Hu](https://miro.medium.com/v2/resize:fill:88:88/1*EoHyUuy0N5beVqdI4MnCSg.jpeg)

](https://medium.com/@xiaominghu19922?source=post_page-----8cd4ffb67188--------------------------------)

[Mason Hu](https://medium.com/@xiaominghu19922?source=post_page-----8cd4ffb67188--------------------------------)

![](https://miro.medium.com/v2/resize:fit:630/0*CZQ-7UMFVIYbEvBP)

Photo by [visuals](https://unsplash.com/@visuals?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

## **Introduction**

Express is a popular and widely used server framework for Node.js, designed to simplify the process of building web applications and APIs.

While Express provides a powerful and flexible environment for building web applications, error handling is an essential aspect that developers must address to ensure the application is reliable, maintainable, and secure, especially when deploying it to a production environment.

A well-structured error-handling mechanism can prevent unexpected crashes, expose security vulnerabilities, and enhance the user experience by providing meaningful error messages when something goes wrong. We will use Typescript and see why it is a powerful tool to really improve error handling in our applications. In this article, we will explore some best practices and strategies for handling errors effectively in an Express application meant for production use.

We will start with setting up an example express server in the next section!

## **Express server setup**

For this article, I have prepared a starting project template with an Express server. You can clone the project from this repo [here](https://github.com/MasWho/medium-blog/tree/express-error-handling). Once you have downloaded the project, run the following commands to install all dependencies:

cd express-error-handling && npm install

_**Let’s now have a look at the project structure**_:

![](https://miro.medium.com/v2/resize:fit:187/1*InTB553u9OC3-svHzr9-KQ.png)

-   Project structure for a typical Express server - The server is started and listens on port 8000 in `index.ts`:

```typescript
    // src/index.ts

import app from "./app";

const initServer = async () => {
    app.listen(8000, () => {
        console.log(\`Listening on port ${8000}`);
    });
}
initServer();

```

-   All Express server configurations are done inside `app.ts` as shown below:

```typescript
// src/app.ts

// Global dependencies
import express from 'express';
import { json } from 'body-parser';

// Project dependencies
import userRouter from './routes/users';

// Express initialization
const app = express();

// Middlewares
app.use(json());

// Routes
app.use(userRouter);

export default app;
```

-   For this example server, we have one endpoint located in `routes/users.ts` :

```typescript
// src/routes/users.ts

import { Request, Response, Router } from 'express';

const router = Router();

const userData = [
	{ id: 1, name: 'Sam' },
	{ id: 2, name: 'Bob' },
	{ id: 3, name: 'Joe' }
];

const fetchUserData = (): Promise<typeof userData> => {
	return new Promise((resolve, reject) => {
		const randomNum = Math.floor(Math.random() * 10 + 1);
		setTimeout(() => {
			if (randomNum === 1) {
				reject('Error: Something went wrong!');
			} else {
				resolve(userData);
			}
		}, 1000);
	});
};

const getHandler = async (req: Request, res: Response) => {
	const { id } = req.query;
	if (!id) {
		return res.status(400).send({ message: 'Id is required!' });
	}

	try {
		const fetchedUserData = await fetchUserData();
		let filteredUserData = fetchedUserData.filter(
			(user) => user.id === parseInt(id as string)
		);
		return res.status(200).send({ data: filteredUserData });
	} catch (err) {
		return res.status(500).send({ message: err });
	}
};

const postHandler = (req: Request, res: Response) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).send({ message: 'Name is required!' });
	}

	const newUser = {
		id: userData.length + 1,
		name
	};

	userData.push(newUser);
	return res.status(201).send({ data: newUser });
};

router.get('/users', getHandler);
router.post('/users', postHandler);

export default router;
```

-   The above routing code defines two routes: a `GET` request to retrieve user data by ID and a `POST` request to create new users. It uses an array called `userData` to store user information in memory.

-   The `fetchUserData` function simulates data retrieval with a random success or error scenario, similar to making database calls. The `getHandler` function filters and returns user data based on the requested ID. If an error occurs during data retrieval, a 500 status code is sent in the response indicating server error.

-   For the `POST` request, the `postHandler` function creates a new user and adds it to the `userData` array. If the user's name is missing, a 400 status code is sent in the response.

-   Note the `getHandler` is asynchronous and the `postHandler` is synchronous. This will play a role in how we handle errors thrown from each route handler and we will see why at a later stage. For now, just keep that in mind.

-   The error handling technique in the provided code is not optimal for production-level applications due to its generic approach and lack of specific error handling. This is a small project so you may not immediately see the implications. However, let’s imagine we have an Express server with hundreds of endpoints and many developers working on it every day. How do we ensure a consistent error interface so that client connections receive the same response for the same type of error across various endpoints?

-   For example, in the `getHandler` if the `id` query parameter isn’t specified in the request then we send a response with status code 400 and an object with a `message` attribute. A new developer may come along, work on a separate endpoint and decides to send a response for the same type of error but with an object that consists of an `error` attribute. This means the connected client will need to know every possible error format that might originate from the server which is not a sustainable pattern.

-   In the following sections, I will show you techniques used for proper error handling in an Express server.

## **The express default error handler**

-   The Express default error handler is a built-in error-handling middleware provided by Express. It acts as a fallback mechanism to handle errors that occur during the request-response cycle but are not explicitly caught by the application’s route handlers or custom error middleware.

-   The default error handler takes four arguments: `err`, `req`, `res`, and `next`. The `err` argument represents the error object, while `req` and `res` are the request and response objects, respectively. The `next` function is used to pass the error to the next error-handling middleware (if any) in the middleware stack.

-   Though the default error handler is useful for quickly identifying unhandled errors during development, it’s generally not suitable for production environments. In production, you would want to replace the default error handler with a custom error-handling middleware that provides more robust error handling, including proper logging, user-friendly error responses, and distinguishing between different types of errors.

-   To replace the default error handler, you can create a custom error middleware that takes the same four arguments (`err`, `req`, `res`, and `next`) and define your error-handling logic inside it. By doing so, you gain more control over error responses and can ensure that your application behaves reliably and securely in a production setting. A sample custom error handler middleware is shown below.

```typescript
// src/middlewares/errors.ts

import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(err);
	res.status(500).send({ errors: [{ message: 'Something went wrong' }] });
};
```

-   The above handler simply takes the `err` object and logs it before sending a 500 response to the client.

-   Let’s create a `middleware` folder, inside of the folder also make a new `errors.ts` file for the above error handler code. The exported error handler can then be wired up with the express server inside `app.ts` as shown below.

```typescript
// src/app.ts

// Global dependencies
import express from 'express';
import { json } from 'body-parser';

// Project dependencies
import userRouter from './routes/users';
import errorHandler from './middlewares/errors';

// Express initialization
const app = express();

// Middlewares
app.use(json());

// Routes
app.use(userRouter);

// Error handling
app.use(errorHandler); // <--------- using the errorHandler

export default app;
```

-   This means if we throw an error from a route or middleware, it will be caught in the `errorHandler`. However, there is just one complication here. The way we handle errors in a synchronous route handler compared to an asynchronous route handler is different and we will see that in the next two sections.

## **Synchronous errors**

-   Let’s first see how we can handle errors from a synchronous route handler as this is the easier one to tackle. Let’s change `postHandler` in `users.ts` to that shown below:

```typescript
// src/routes/users.ts

const postHandler = (req: Request, res: Response) => {
	const { name } = req.body;
	if (!name) {
		throw new Error('Name is required!');
		// return res.status(400).send({ message: "Name is required!" });
	}

	const newUser = {
		id: userData.length + 1,
		name
	};

	userData.push(newUser);
	return res.status(201).send({ data: newUser });
};
```

-   Try making a request to the `users` endpoint without `name` in the request body and you will see the server responds with a 500 status code with an `errors` array in the response body.

-   If an error is thrown from a synchronous route handler, the custom error handler middleware will immediately catch it and apply our custom logic before sending a response to the client. Now let’s see in the next section how to handle errors originating from asynchronous route handlers.

## **Asynchronous errors**

-   Now, let’s change the `getHandler` in users.ts to that shown below:

```typescript
// src/routes/users.ts

const getHandler = async (req: Request, res: Response) => {
	const { id } = req.query;
	if (!id) {
		throw new Error('Id is required!');
		// return res.status(400).send({ message: "Id is required!" });
	}

	const fetchedUserData = await fetchUserData();
	let filteredUserData = fetchedUserData.filter(
		(user) => user.id === parseInt(id as string)
	);
	return res.status(200).send({ data: filteredUserData });
};
```

-   Now try making a`GET` request to the `users` endpoint without a `id` query parameter. Surprisingly the entire express server will crash and this is due to the fact that asynchronous errors are not caught in the Express error handler by default. To forward asynchronous errors to the error handler middleware we need to use the Express `next` function as shown below.

```typescript
// src/routes/users.ts

const getHandler = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.query;
	if (!id) {
		return next(new Error('Id is required!'));
		// throw new Error("Id is required!");
		// return res.status(400).send({ message: "Id is required!" });
	}

	try {
		const fetchedUserData = await fetchUserData();
		let filteredUserData = fetchedUserData.filter(
			(user) => user.id === parseInt(id as string)
		);
		return res.status(200).send({ data: filteredUserData });
	} catch (err) {
		next(err);
	}
};
```

-   The `next` function typically does not take in an argument and simply gets invoked to move the request to the next middleware in the stack. When we give input to the `next` function, it signals to the Express server that we should skip everything and go straight to the error handler.

-   Since `fetchUserData` returns a promise, to handle the error we need to implement a try and catch block with the `next` function forwarding the error in the catch expression. We can get around this by using the `express-async-errors` npm package which patches the express library so that we can simply throw errors from an asynchronous route handler without having to use the `next` function.

-   You can install the package by running the following command:

```bash
npm install express-async-errors
```

-   Inside `app.ts`, import the package so that the patch for the express library is applied.

```typescript
// src/routes/users.ts

// Global dependencies
import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors'; // <---------- apply async error patch

// Project dependencies
import userRouter from './routes/users';
import { errorHandler } from './middlewares/errors';

// Express initialization
const app = express();

// Middlewares
app.use(json());

// Routes
app.use(userRouter);

// Error handling
app.use(errorHandler);

export default app;
```

-   Then we can modify the `getHandler` in `users.ts` to simply throw errors without having to worry about the server crashing.

```typescript
// src/routes/users.ts

const getHandler = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.query;
	if (!id) {
		throw new Error('Id is required!');
	}

	const fetchedUserData = await fetchUserData();
	let filteredUserData = fetchedUserData.filter(
		(user) => user.id === parseInt(id as string)
	);
	return res.status(200).send({ data: filteredUserData });
};
```

-   Now that we have a tool from Express to help us handle errors in a centralised manner, we still have a few more problems to tackle:

    -   How do we send responses with different status codes instead of every error being handled as a 500 response?
    -   How do we ensure error responses to the client are consistent in format?

-   This is where Typescript will help us and we will see why in the following section.

## **Custom error class**

-   In order to ensure a consistent interface for the errors that we return to the client, we can create custom error classes in TypeScript which can provide more structured and meaningful error responses. Custom error classes allow us to encapsulate specific error information and create consistent error objects throughout our application.

-   We start with creating a `CustomError` abstract class as shown below.

```typescript
// src/routes/users.ts

export type CustomErrorContent = {
	message: string;
	context?: { [key: string]: any };
};

export abstract class CustomError extends Error {
	abstract readonly statusCode: number;
	abstract readonly errors: CustomErrorContent[];
	abstract readonly logging: boolean;

	constructor(message: string) {
		super(message);

		// Only because we are extending a built in class
		Object.setPrototypeOf(this, CustomError.prototype);
	}
}
```

-   The `CustomErrorContent` type defines the structure of an error message, including a required `message` field as a string and an optional `context` field as a key-value object to hold additional error-related data. On the other hand, the `CustomError` abstract class serves as a base for creating specific custom error classes. It enforces subclasses to implement three abstract properties: `statusCode` (representing the HTTP status code to be sent in the error response), `errors` (an array of `CustomErrorContent` objects with specific error details), and `logging` (a boolean indicating whether the error should be logged). The abstract class itself also extends the base built-in `Error` class which means we can access properties such as `stack` and `cause`.

-   By extending the `CustomError` class and implementing its abstract properties, we can create consistent, structured, and extensible error classes to handle various error scenarios. For example, we can create a generic `BadRequestError` class as shown below.

```typescript
// src/errors/BadRequestError

import { CustomError } from "./CustomError";

export default class BadRequestError extends CustomError {
private static readonly _statusCode = 400;
private readonly _code: number;
private readonly _logging: boolean;
private readonly _context: { [key: string]: any };

constructor(params?: {code?: number, message?: string, logging?: boolean, context?: { \[key: string\]: any }}) {
const { code, message, logging } = params || {};

    super(message || "Bad request");
    this._code = code || BadRequestError._statusCode;
    this._logging = logging || false;
    this._context = params?.context || {};

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, BadRequestError.prototype);

}

    get errors() {
        return [{ message: this.message, context: this._context }];
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }
}
```

-   This class extends the `CustomError` class and is designed to handle bad request scenarios in an Express server application. It includes private properties `_code`, `_logging`, and `_context`, which represent the HTTP status code, logging flag, and additional context data for the error, respectively. The class constructor accepts an optional `params` object, allowing developers to customize the error by specifying the `code`, `message`, `logging`, and `context`. If no `params` are provided, the constructor sets default values for the error message (`"Bad request"`) and status code (400). The `errors`, `statusCode`, and `logging` getter methods are implemented to return the specific error details for this custom error class. Note these are enforced by the `CustomError` class.

-   We can use the `BadRequestError` class in the `postHandler` from the `users` endpoint as shown below.

```typescript
// src/routes/users.ts

const postHandler = (req: Request, res: Response) => {
	const { name } = req.body;
	if (!name) {
		throw new BadRequestError({
			code: 400,
			message: 'Name is required!',
			logging: true
		});
	}

	const newUser = {
		id: userData.length + 1,
		name
	};

	userData.push(newUser);
	return res.status(201).send({ data: newUser });
};
```

-   Finally, within the custom error handler middleware, we can adjust the logic to specifically look out for instances of CustomError` as shown below.

```typescript
// src/middlewares/errors.ts

import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/CustomError';

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Handled errors
	if (err instanceof CustomError) {
		const { statusCode, errors, logging } = err;
		if (logging) {
			console.error(
				JSON.stringify(
					{
						code: err.statusCode,
						errors: err.errors,
						stack: err.stack
					},
					null,
					2
				)
			);
		}

		return res.status(statusCode).send({ errors });
	}

	// Unhandled errors
	console.error(JSON.stringify(err, null, 2));
	return res
		.status(500)
		.send({ errors: [{ message: 'Something went wrong' }] });
};
```

-   The middleware first checks if the error is a handled custom error, which is an instance of the `CustomError` class. If it's a handled error, the middleware extracts the HTTP status code, error details, and logging flag from the custom error object. If logging is enabled for this error, it logs the error with its stack trace to the console for debugging purposes. Then, it sends an appropriate response to the client with the extracted error details.

-   For unhandled errors (errors that are not instances of `CustomError`), the middleware logs the error to the console, displaying a formatted JSON representation of the error object, including its stack trace. After logging, the middleware sends a generic 500 Internal Server Error response to the client with a default error message of "Something went wrong."

-   With the above implementation, we now have a middleware that ensures effective and centralised error management, providing specific responses for custom errors and logging unhandled errors for debugging purposes.

## **Conclusion**

-   Effective error handling is a critical aspect of building reliable and robust Express server applications meant for production use. In this article, we explored various strategies and best practices for handling errors like a pro using TypeScript in an Express server.

-   We began by setting up an example Express server and identified the limitations of the default error-handling technique provided by Express. To overcome these limitations, we implemented a custom error-handling middleware that allows us to have more control over error responses and ensures consistency across the application.

-   One of the key components of our error-handling approach was the creation of custom error classes using TypeScript. We defined a base abstract class called `CustomError`, which enforced specific properties for subclasses, such as `statusCode`, `errors`, and `logging`. By extending this base class and implementing these properties in custom error classes, we achieved structured and meaningful error responses with consistent formats.

-   We learned how to handle both synchronous and asynchronous errors from route handlers effectively, using the `next` function or leveraging the `express-async-errors` package to simplify asynchronous error handling.

-   By combining these techniques, we established a centralized and standardized error-handling mechanism, ensuring that clients receive consistent error responses regardless of the type of error or the endpoint they access. Additionally, we enhanced debugging capabilities by logging errors to the console when appropriate, while maintaining a secure and user-friendly error interface for clients.

-   In summary, with TypeScript’s powerful features and well-structured error-handling strategy, we can build more resilient and maintainable Express server applications minimizing unexpected downtimes in production environments.
