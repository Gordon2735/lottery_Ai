<!-- Error Handler in Node.js & Express -->

# **Error Handler in Node.js & Express**

# Custom Error Handler Using Node.js and TypeScript

[

![Arshad](https://miro.medium.com/v2/resize:fill:88:88/1*syDcJd7mVXz4YF8K869kEQ.jpeg)

](https://arshad404.medium.com/?source=post_page-----2ab744aa4ef7--------------------------------)[

![JavaScript in Plain English](https://miro.medium.com/v2/resize:fill:48:48/1*yUNfohs9jA6GCDmyCYJTvA@2x.png)

](https://javascript.plainenglish.io/?source=post_page-----2ab744aa4ef7--------------------------------)

[Arshad](https://arshad404.medium.com/?source=post_page-----2ab744aa4ef7--------------------------------)

·

Follow

Published in

[

JavaScript in Plain English

](https://javascript.plainenglish.io/?source=post_page-----2ab744aa4ef7--------------------------------)

·

3 min read

·

Aug 3, 2021

126

1

Listen

Share

More

When you are working on a monolithic application, it may be okay to not build a custom error handler for your application (it’s really not okay) but when you are working with microservices, then it’s mandatory to create this as each of your microservice can use different tech stacks and the developer gets different pattern of errors. And that’s not a good way of representing your errors.

![](https://miro.medium.com/v2/resize:fit:630/1*UaqaXgdZiAqaCA9UcYRI_Q.jpeg)

So this is before, that is when we are not using any error handler. You can see that each microservice is producing a different type of error. Now let’s see what happens when we use our custom handler—

![](https://miro.medium.com/v2/resize:fit:630/1*9KOXaITuEj6XQElbe_X-cg.jpeg)

Now you can see it’s easy for our developers to handle one pattern of the error. Let’s build it —

Before starting, let’s see the folder structure, so it will be easy for you to understand.

![](https://miro.medium.com/v2/resize:fit:240/1*OnasYU3WSODNjuofKOMaxg.png)

Let’s talk about the _errors_ folder first. We have _CostumError.ts_ file which contains the abstract class (it is used to maintain the structure of your subclasses).

```typescript
export abstract class CustomError extends Error {
	abstract statusCode: number;
	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, CustomError.prototype);
	}
	abstract serializeErrors(): {
		message: string;
		field?: string;
	}[];
}
```

In this file, you can see we just created a structure of all the error classes here and each of our error classes should contain the message and status code and all other things are just template and JavaScript.

Now, let’s build our first **_database-connection-error_** and it’s pretty simple.

```typescript
import { CustomError } from './CustomError';
export class DatabaseConnectionError extends CustomError {
	statusCode = 500;
	constructor() {
		super('Error connecting to database');
		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}
	serializeErrors() {
		return [
			{
				message: 'Error connecting to database'
			}
		];
	}
}
```

Now, you can see we import the abstract class and extend it to the current class. So it will check for the code structure. It helps in code symmetry. The database error came when our microservice is unable to connect to the database and its status code is 500.

Now it’s time to build the **_not-found-error._**

```typescript
import { CustomError } from './CustomError';
export class NotFoundError extends CustomError {
	statusCode = 404;
	constructor() {
		super('Route not found');
		Object.setPrototypeOf(this, NotFoundError.prototype);
	}
	serializeErrors() {
		return [{ message: 'Not Found' }];
	}
}
```

Now you can compare this not NotFoundError class and the above abstract class. It will match with all the requirements.

Now the last one and the one which is most general and most of the times, you will get the error from this one, **_request-validation-error._**

```typescript
import { CustomError } from './CustomError';
import { ValidationError } from 'express-validator';
export class RequestValidationError extends CustomError {
	statusCode = 400;
	constructor(public errors: ValidationError[]) {
		super('Invalid Request Parameters');
		Object.setPrototypeOf(this, RequestValidationError.prototype);
	}
	serializeErrors() {
		return this.errors.map((err) => {
			return { message: err.msg, field: err.param };
		});
	}
}
```

I know this is a little hard to digest but we will see it line by line as JavaScript does.

First of all, we are importing the abstract class, then we are importing the validationError which contains the array of the validation errors which we are taking into errors variable in the constructor and then return it throw the method in a proper format as we discussed in the abstract class.

Now, at last, we have reached our error-handler middleware, the master one.

```typescript
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/CustomError';

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof CustomError) {
		return res
			.status(err.statusCode)
			.send({ errors: err.serializeErrors() });
	}
	res.status(400).send({
		errors: [{ message: 'Something went wrong' }]
	});
};
```

In this middleware, in the if statement, we are checking the instance of the error type. If the error is of the type that we defined in the errors folder, then it will capture it.

While throwing an error, we simply do `throw new DatabaseConnectionError()` which is a class name, instead of `throw new Error()`.

_If you have any queries regarding this, do comment or DM me on_ [_Twitter_](https://twitter.com/xByZero)_. I will be happy to connect with you and clear your doubts. ;)_

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)

[

JavaScript

](https://medium.com/tag/javascript?source=post_page-----2ab744aa4ef7---------------javascript-----------------)

[

Programming

](https://medium.com/tag/programming?source=post_page-----2ab744aa4ef7---------------programming-----------------)

[

Nodejs

](https://medium.com/tag/nodejs?source=post_page-----2ab744aa4ef7---------------nodejs-----------------)
