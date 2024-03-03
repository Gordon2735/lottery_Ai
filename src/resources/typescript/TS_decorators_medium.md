# **A Quick Guide to TypeScript 5.0 Decorators**

## Expand Your TypeScript 5.0 Toolkit with Decorators

[

![Zack](https://miro.medium.com/v2/resize:fill:88:88/1*b_ZV_0nwuKqyyeF3tjsqYw.png)

](https://medium.com/@islizeqiang?source=post_page-----d06cabe09e8c--------------------------------)

[Zack](https://medium.com/@islizeqiang?source=post_page-----d06cabe09e8c--------------------------------)

![](https://miro.medium.com/v2/resize:fit:630/0*O2tYfeT_-o3BFLT_)

Photo by [vadim kaipov](https://unsplash.com/ko/@vadimkaipov?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

The TypeScript 5.0 release, officially supports the Phase 3 decorator proposal. The proposal has four stages, which means it stabilizes quickly without major changes to the API. In this article, we will explore based on these stable APIs.

# What are Decorators

Decorators are a powerful feature in TypeScript that allows developers to modify or extend the behavior of classes, methods, accessors, and properties. They offer an elegant way to add functionality or modify the behavior of existing constructs without altering their original implementation.

# The History of Decorators

Decorators have a rich history in the TypeScript and JavaScript ecosystems. The concept of decorators was inspired by Python and other programming languages that use similar constructs to modify or extend the behavior of classes, methods, and properties. The initial decorator's proposal for JavaScript was introduced in 2014, and since then, several versions of the proposal have been developed, with the current one being at stage 3 of the ECMAScript standardization process.

# The Syntax of Decorators

Decorators are functions that are prefixed with the ‘@’ symbol and placed immediately before the construct they are meant to modify:

```typescript
@decorator
class MyClass {
	@decorator1
	method() {
		// ...
	}
}

// Same: You can put these decorators on the same line
@decorator
class MyClass {
	@decorator2 @decorator1 method() {
		// ...
	}
}
```

# Decorator Functions and Their Capabilities

A decorator is a function that takes the construct being decorated as its argument and may return a modified version of the construct or a new construct altogether. Decorators can be used to:

-   Modify the behavior of a class, method, accessor, or property
-   Add new functionality to a class or method
-   Provide metadata for a construct
-   Enforce coding standards or best practices

# Class Decorators

Class decorators are applied to class constructors and can be used to modify or extend the behavior of a class. Some common use cases for class decorators include:

-   Collecting instances of a class
-   Freezing instances of a class
-   Making classes function-callable

**Example: Collecting instances of a class**

```typescript
type Constructor<T = {}> = new (...args: any\[\]) => T;

class InstanceCollector {
 instances = new Set();

install = <Class extends Constructor\>( Value: Class,
 context: ClassDecoratorContext<Class> ) => {
 const \_this = this;
 return class extends Value {
 constructor(...args: any\[\]) {
 super(...args);
 \_this.instances.add(this);
 }
 };
 };
}

const collector = new InstanceCollector();

@collector.install
class Calculator {
 add(a: number, b: number): number {
 return a + b;
 }
}

const calculator1 = new Calculator();
const calculator2 = new Calculator();

console.log('instances: ', collector.instances);
```

# **Method Decorators**

Method decorators are applied to class methods and can be used to modify or extend the behavior of a method. Some common use cases for method decorators include:

-   Tracing method invocations
-   Binding methods to instances
-   Applying functions to methods

**Example: Tracing method invocations**

```typescript
function log<This, Args extends any\[\], Return\>(
 target: (this: This, ...args: Args) => Return,
 context: ClassMethodDecoratorContext<
 This,
 (this: This, ...args: Args) => Return

> ) {
>  const methodName = String(context.name);

function replacementMethod(this: This, ...args: Args): Return {
 console.log(\`LOG: Entering method '${methodName}'.\``);
    const result = target.call(this, ...args);
    console.log(\`LOG: Exiting method '${methodName}'.\``);
 return result;
 }

return replacementMethod;
}

class Calculator {
 @log
 add(a: number, b: number): number {
 return a + b;
 }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3));
```

# Getter and Setter Decorators

Getter and setter decorators are applied to class accessors, allowing developers to modify or extend their behavior. Common use cases for getter and setter decorators include:

-   Compute values lazily and cache
-   Implementing read-only properties
-   Validating property assignments

**Example: Compute values lazily and cache**

```typescript
function lazy<This, Return\>(
 target: (this: This) => Return,
 context: ClassGetterDecoratorContext<This, Return\>
) {
 return function (this: This): Return {
 const value = target.call(this);
 Object.defineProperty(this, context.name, { value, enumerable: true });
 return value;
 };
}

class MyClass {
 private \_expensiveValue: number | null = null;

@lazy
 get expensiveValue(): number {
 this.\_expensiveValue ??= computeExpensiveValue();
 return this.\_expensiveValue;
 }
}

function computeExpensiveValue(): number {
 // Expensive computation here…
 console.log('computing...'); // Only call once

return 42;
}

const obj = new MyClass();

console.log(obj.expensiveValue);
console.log(obj.expensiveValue);
console.log(obj.expensiveValue);
```

# **Field Decorators**

Field decorators are applied to class fields and can be used to modify or extend the behavior of a field. Common use cases for field decorators include:

-   Changing initialization values of fields
-   Implementing read-only fields
-   Dependency injection
-   Emulating enums

**Example: Changing initialization values of fields**

```typescript
function addOne<T>(
 target: undefined,
 context: ClassFieldDecoratorContext<T, number\>
) {
 return function (this: T, value: number) {
 console.log('addOne: ', value); // 3
 return value + 1;
 };
}

function addTwo<T>(
 target: undefined,
 context: ClassFieldDecoratorContext<T, number\>
) {
 return function (this: T, value: number) {
 console.log('addTwo: ', value); // 1
 return value + 2;
 };
}

class MyClass {
 @addOne
 @addTwo
 x = 1;
}

console.log(new MyClass().x); // 4
```

There is an additional knowledge point here, when you stack multiple decorators, they will run in “reverse order”. In this example, you can see that `1` is printed first in `addTwo`, and then `addOne`.

# **Auto-Accessor Decorators**

**Auto-accessors are a new language feature that simplifies the creation of getter and setter pairs:**

```typescript
class C {
	accessor x = 1;
}

// Same
class C {
	#x = 1;

	get x() {
		return this.#x;
	}

	set x(val) {
		this.#x = val;
	}
}
```

Not only is this a convenient way of expressing simple accessor pairs, but it helps avoid problems that occur when decorator authors try to replace instance fields with accessors on the prototype, because ECMAScript instance fields shadow accessors when they are mounted on the instance.

**It can also use decorators, such as the following read-only automatic accessor:**

```typescript
function readOnly<This, Return\>(
 target: ClassAccessorDecoratorTarget<This, Return\>,
 context: ClassAccessorDecoratorContext<This, Return\>
) {
 const result: ClassAccessorDecoratorResult<This, Return\> = {
 get(this: This) {
 return target.get.call(this);
 },
 set() {
 throw new Error(
 \`Cannot assign to read-only property '${String(context.name)}'.\``
 );
 },
 };

return result;
}

class MyClass {
 @readOnly accessor myValue = 123;
}

const obj = new MyClass();

console.log(obj.myValue);
obj.myValue = 456; // Error: Cannot assign to read-only property 'myValue'.
console.log(obj.myValue);
```

# **Conclusion**

Decorators are a powerful feature in TypeScript that provide an elegant way to modify or extend the behavior of classes, methods, accessors, and properties. As the decorator's proposal continues to evolve and mature, you can gradually choose to apply it to your project.

# **References**

\[1\] [https://github.com/microsoft/TypeScript/pull/50820](https://github.com/microsoft/TypeScript/pull/50820)

_Thanks for reading. If you like such stories and want to support me, please consider becoming a_ [_Medium member_](https://medium.com/@islizeqiang/membership)_. It costs $5 per month and gives unlimited access to Medium content. I’ll get a little commission if you sign up via_ [_my link_](https://medium.com/@islizeqiang/membership)_._

[

Typescript

](https://medium.com/tag/typescript?source=post_page-----d06cabe09e8c---------------typescript-----------------)

[

JavaScript

](https://medium.com/tag/javascript?source=post_page-----d06cabe09e8c---------------javascript-----------------)

[

Programming

](https://medium.com/tag/programming?source=post_page-----d06cabe09e8c---------------programming-----------------)

[

Web Development

](https://medium.com/tag/web-development?source=post_page-----d06cabe09e8c---------------web_development-----------------)

[

Front End Development

](https://medium.com/tag/front-end-development?source=post_page-----d06cabe09e8c---------------front_end_development-----------------)

49

49

2

[

![Zack](https://miro.medium.com/v2/resize:fill:144:144/1*b_ZV_0nwuKqyyeF3tjsqYw.png)

](https://medium.com/@islizeqiang?source=post_page-----d06cabe09e8c--------------------------------)

Follow

[

## Written by Zack

](https://medium.com/@islizeqiang?source=post_page-----d06cabe09e8c--------------------------------)

[1.4K Followers](https://medium.com/@islizeqiang/followers?source=post_page-----d06cabe09e8c--------------------------------)

Programmer #JavaScript #Rust

Follow

## More from Zack

[

![How to Commit Multiline Messages in git commit](https://miro.medium.com/v2/resize:fit:611/0*jV9uS8WLV7s1g-je)

](https://medium.com/gitconnected/how-to-commit-multiline-messages-in-git-commit-bcd76f81919c?source=author_recirc-----d06cabe09e8c----0---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

![Zack](https://miro.medium.com/v2/resize:fill:18:18/1*b_ZV_0nwuKqyyeF3tjsqYw.png)

](https://medium.com/@islizeqiang?source=author_recirc-----d06cabe09e8c----0---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

Zack

](https://medium.com/@islizeqiang?source=author_recirc-----d06cabe09e8c----0---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

in

[

Level Up Coding

](https://medium.com/gitconnected?source=author_recirc-----d06cabe09e8c----0---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

## How to Commit Multiline Messages in git commit

### There are some easy ways to do this, it all depends on your personal preference

](https://medium.com/gitconnected/how-to-commit-multiline-messages-in-git-commit-bcd76f81919c?source=author_recirc-----d06cabe09e8c----0---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

3 min read·Sep 25, 2022

](https://medium.com/gitconnected/how-to-commit-multiline-messages-in-git-commit-bcd76f81919c?source=author_recirc-----d06cabe09e8c----0---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

319

[

2

](https://medium.com/gitconnected/how-to-commit-multiline-messages-in-git-commit-bcd76f81919c?responsesOpen=true&sortBy=REVERSE_CHRON&source=author_recirc-----d06cabe09e8c----0---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

![Unlocking the Magic of Infer in TypeScript](https://miro.medium.com/v2/resize:fit:611/0*zaOT3OgIPoICNv9e)

](https://medium.com/@islizeqiang/unlocking-the-magic-of-infer-in-typescript-571d4082bc80?source=author_recirc-----d06cabe09e8c----1---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

![Zack](https://miro.medium.com/v2/resize:fill:18:18/1*b_ZV_0nwuKqyyeF3tjsqYw.png)

](https://medium.com/@islizeqiang?source=author_recirc-----d06cabe09e8c----1---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

Zack

](https://medium.com/@islizeqiang?source=author_recirc-----d06cabe09e8c----1---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

## Unlocking the Magic of Infer in TypeScript

### Infer Your Way to TypeScript Mastery: Unlocking Dynamic and Expressive Types

](https://medium.com/@islizeqiang/unlocking-the-magic-of-infer-in-typescript-571d4082bc80?source=author_recirc-----d06cabe09e8c----1---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

5 min read·Apr 1, 2023

](https://medium.com/@islizeqiang/unlocking-the-magic-of-infer-in-typescript-571d4082bc80?source=author_recirc-----d06cabe09e8c----1---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

103

[

1

](https://medium.com/@islizeqiang/unlocking-the-magic-of-infer-in-typescript-571d4082bc80?responsesOpen=true&sortBy=REVERSE_CHRON&source=author_recirc-----d06cabe09e8c----1---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

![How To Read a File Line by Line in JavaScript](https://miro.medium.com/v2/resize:fit:611/0*S_17XIFPCwIKyhEc)

](https://medium.com/gitconnected/how-to-read-a-file-line-by-line-in-javascript-48d9a688fe49?source=author_recirc-----d06cabe09e8c----2---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

![Zack](https://miro.medium.com/v2/resize:fill:18:18/1*b_ZV_0nwuKqyyeF3tjsqYw.png)

](https://medium.com/@islizeqiang?source=author_recirc-----d06cabe09e8c----2---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

Zack

](https://medium.com/@islizeqiang?source=author_recirc-----d06cabe09e8c----2---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

in

[

Level Up Coding

](https://medium.com/gitconnected?source=author_recirc-----d06cabe09e8c----2---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

## How To Read a File Line by Line in JavaScript

### Which is the better way?

](https://medium.com/gitconnected/how-to-read-a-file-line-by-line-in-javascript-48d9a688fe49?source=author_recirc-----d06cabe09e8c----2---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

3 min read·Aug 21, 2022

](https://medium.com/gitconnected/how-to-read-a-file-line-by-line-in-javascript-48d9a688fe49?source=author_recirc-----d06cabe09e8c----2---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

76

[

1

](https://medium.com/gitconnected/how-to-read-a-file-line-by-line-in-javascript-48d9a688fe49?responsesOpen=true&sortBy=REVERSE_CHRON&source=author_recirc-----d06cabe09e8c----2---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

![Simplify Syntax Highlighting with highlight.js](https://miro.medium.com/v2/resize:fit:611/0*0eeir9VUASDbXkQZ)

](https://medium.com/@islizeqiang/simplify-syntax-highlighting-with-highlight-js-b65af3bdc509?source=author_recirc-----d06cabe09e8c----3---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

![Zack](https://miro.medium.com/v2/resize:fill:18:18/1*b_ZV_0nwuKqyyeF3tjsqYw.png)

](https://medium.com/@islizeqiang?source=author_recirc-----d06cabe09e8c----3---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

Zack

](https://medium.com/@islizeqiang?source=author_recirc-----d06cabe09e8c----3---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

## Simplify Syntax Highlighting with highlight.js

### A Quick Start Tutorial

](https://medium.com/@islizeqiang/simplify-syntax-highlighting-with-highlight-js-b65af3bdc509?source=author_recirc-----d06cabe09e8c----3---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

5 min read·Apr 9, 2023

](https://medium.com/@islizeqiang/simplify-syntax-highlighting-with-highlight-js-b65af3bdc509?source=author_recirc-----d06cabe09e8c----3---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

16

[

2

](https://medium.com/@islizeqiang/simplify-syntax-highlighting-with-highlight-js-b65af3bdc509?responsesOpen=true&sortBy=REVERSE_CHRON&source=author_recirc-----d06cabe09e8c----3---------------------dbc5fab3_9078_4da8_9a5f_1ff8da478904-------)

[

See all from Zack

](https://medium.com/@islizeqiang?source=post_page-----d06cabe09e8c--------------------------------)

## Recommended from Medium

[

![What are “decorators” in typescript and how to use “decorators”?](https://miro.medium.com/v2/resize:fit:611/1*qkEn_I6hzFel_nvlrE3Y3g.png)

](https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

![Hemant](https://miro.medium.com/v2/resize:fill:18:18/1*E_4tjRjksnC5N-6tyImMBA.png)

](https://medium.com/@InspireTech?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

Hemant

](https://medium.com/@InspireTech?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

## What are “decorators” in typescript and how to use “decorators”?

### A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter…

](https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

11 min read·Sep 3, 2023

](https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

171

[

![TypeScript With Go and Rust Errors? No Try/Catch? Heresy](https://miro.medium.com/v2/resize:fit:611/1*xmZLXSMk3Rnp6QPwNELbcg.png)

](https://medium.com/better-programming/typescript-with-go-rust-errors-no-try-catch-heresy-da0e43ce5f78?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

![Mateusz Piorowski](https://miro.medium.com/v2/resize:fill:18:18/1*hU8N_SXZ620hIcL6E0L4Ww.png)

](https://medium.com/@mateuszpiorowski?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

Mateusz Piorowski

](https://medium.com/@mateuszpiorowski?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

in

[

Better Programming

](https://medium.com/better-programming?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

## TypeScript With Go and Rust Errors? No Try/Catch? Heresy

](https://medium.com/better-programming/typescript-with-go-rust-errors-no-try-catch-heresy-da0e43ce5f78?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

8 min read·Aug 15, 2023

](https://medium.com/better-programming/typescript-with-go-rust-errors-no-try-catch-heresy-da0e43ce5f78?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

421

[

9

](https://medium.com/better-programming/typescript-with-go-rust-errors-no-try-catch-heresy-da0e43ce5f78?responsesOpen=true&sortBy=REVERSE_CHRON&source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

## Lists

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*zPtGTCNOwu1p3kzn_sZFVQ.png)

![](https://miro.medium.com/v2/da:true/resize:fill:43:43/0*kQIvhDkl0ixPpv4z)

![](https://miro.medium.com/v2/resize:fill:43:43/1*ERYx0IB1pN-5ZX98cKAoUw.png)

## General Coding Knowledge

20 stories·974 saves

](https://eddiebarth.medium.com/list/general-coding-knowledge-f2d429d4f0cd?source=read_next_recirc-----d06cabe09e8c--------------------------------)

[

![](https://miro.medium.com/v2/da:true/resize:fill:43:43/0*gzCeWxDtGmD23QR5)

![](https://miro.medium.com/v2/resize:fill:43:43/1*di4WDrnS1F6_p9GWnxvPmg.png)

![](https://miro.medium.com/v2/resize:fill:43:43/1*PzJLbFrFtNkqPsxielO8zA.jpeg)

## Coding & Development

11 stories·477 saves

](https://medium.com/@jscribes/list/coding-development-e360d380bb82?source=read_next_recirc-----d06cabe09e8c--------------------------------)

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*yr2O5U-a0-rfY34C6yOXMw.jpeg)

![](https://miro.medium.com/v2/resize:fill:43:43/1*_3WdkzQRqIq8tt3Wh-WhbA.jpeg)

## Stories to Help You Grow as a Software Developer

19 stories·864 saves

](https://medium.com/@MediumStaff/list/stories-to-help-you-grow-as-a-software-developer-b1d913188c20?source=read_next_recirc-----d06cabe09e8c--------------------------------)

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*vzu3JPzaq2EZKTZNY9BhLA.png)

![AI-generated image of a cute tiny robot in the backdrop of ChatGPT’s logo](https://miro.medium.com/v2/resize:fill:43:43/1*lEmL62oZdrOOWIzAAFKiFg.jpeg)

![](https://miro.medium.com/v2/resize:fill:43:43/1*i2zLIwC9mftamP1dbciCeQ.jpeg)

## ChatGPT

21 stories·494 saves

](https://medium.com/@m.wasalski/list/chatgpt-3742c7a4727d?source=read_next_recirc-----d06cabe09e8c--------------------------------)

[

![Typescript decorators explained](https://miro.medium.com/v2/resize:fit:611/0*qW9wp-jhIgoHhCIM.png)

](https://medium.com/@AbbasPlusPlus/typescript-decorators-explained-fc6c10a86e2e?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

![Mohammad Abbas](https://miro.medium.com/v2/resize:fill:18:18/0*Pk_Y9Tw-8rH_Of2A)

](https://medium.com/@AbbasPlusPlus?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

Mohammad Abbas

](https://medium.com/@AbbasPlusPlus?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

## Typescript decorators explained

### Decorators offer a powerful way to annotate and modify classes, properties, methods, and accessors in TypeScript. Unlike JavaScript…

](https://medium.com/@AbbasPlusPlus/typescript-decorators-explained-fc6c10a86e2e?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

3 min read·Nov 14, 2023

](https://medium.com/@AbbasPlusPlus/typescript-decorators-explained-fc6c10a86e2e?source=read_next_recirc-----d06cabe09e8c----0---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

1

[

![Mastering Error Handling in JavaScript and TypeScript: From Basics to Advanced Strategies](https://miro.medium.com/v2/resize:fit:611/0*d-QfsoUK9TpufsbI)

](https://medium.com/stackademic/mastering-error-handling-in-javascript-and-typescript-from-basics-to-advanced-strategies-1c2c41b086f3?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

![ByteHopper](https://miro.medium.com/v2/resize:fill:18:18/1*940o5qziIvGxLiJ1uOvd2g.png)

](https://medium.com/@clevyoung?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

ByteHopper

](https://medium.com/@clevyoung?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

in

[

Stackademic

](https://medium.com/stackademic?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

## Mastering Error Handling in JavaScript and TypeScript: From Basics to Advanced Strategies

### Error handling is an essential topic in all programming languages. A well-designed error-handling system significantly enhances code…

](https://medium.com/stackademic/mastering-error-handling-in-javascript-and-typescript-from-basics-to-advanced-strategies-1c2c41b086f3?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

5 min read·Sep 29, 2023

](https://medium.com/stackademic/mastering-error-handling-in-javascript-and-typescript-from-basics-to-advanced-strategies-1c2c41b086f3?source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

56

[

2

](https://medium.com/stackademic/mastering-error-handling-in-javascript-and-typescript-from-basics-to-advanced-strategies-1c2c41b086f3?responsesOpen=true&sortBy=REVERSE_CHRON&source=read_next_recirc-----d06cabe09e8c----1---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

![Building a Robust API: Structuring Controllers, Entities, DTOs, and Modules](https://miro.medium.com/v2/resize:fit:611/0*SjwYpWOk2BXmmGh3)

](https://medium.com/@abdullahirfan99_80517/building-a-robust-api-structuring-controllers-entities-dtos-and-modules-93cfaaef7f07?source=read_next_recirc-----d06cabe09e8c----2---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

![Abdullah Irfan](https://miro.medium.com/v2/resize:fill:18:18/0*_JSqOqGPU_AZE9ud)

](https://medium.com/@abdullahirfan99_80517?source=read_next_recirc-----d06cabe09e8c----2---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

Abdullah Irfan

](https://medium.com/@abdullahirfan99_80517?source=read_next_recirc-----d06cabe09e8c----2---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

## Building a Robust API: Structuring Controllers, Entities, DTOs, and Modules

### This is third article of series Building a Robust Backend: A Comprehensive Guide Using NestJS, TypeORM, and Microservices. Our purpose is…

](https://medium.com/@abdullahirfan99_80517/building-a-robust-api-structuring-controllers-entities-dtos-and-modules-93cfaaef7f07?source=read_next_recirc-----d06cabe09e8c----2---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

12 min read·Oct 25, 2023

](https://medium.com/@abdullahirfan99_80517/building-a-robust-api-structuring-controllers-entities-dtos-and-modules-93cfaaef7f07?source=read_next_recirc-----d06cabe09e8c----2---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

3

[

![TypeScript Decorators](https://miro.medium.com/v2/resize:fit:611/1*NEmleKCXFqR5E5OwgmlAYQ.png)

](https://medium.com/dev-genius/typescript-decorators-e4c2772fef57?source=read_next_recirc-----d06cabe09e8c----3---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

![Faez](https://miro.medium.com/v2/resize:fill:18:18/1*d7jJt_6o9X278HAG7N-xqQ.jpeg)

](https://medium.com/@faeztgh?source=read_next_recirc-----d06cabe09e8c----3---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

Faez

](https://medium.com/@faeztgh?source=read_next_recirc-----d06cabe09e8c----3---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

in

[

Dev Genius

](https://medium.com/dev-genius?source=read_next_recirc-----d06cabe09e8c----3---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

## TypeScript Decorators

### Decorators in TypeScript

](https://medium.com/dev-genius/typescript-decorators-e4c2772fef57?source=read_next_recirc-----d06cabe09e8c----3---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

[

3 min read·Feb 6, 2024

](https://medium.com/dev-genius/typescript-decorators-e4c2772fef57?source=read_next_recirc-----d06cabe09e8c----3---------------------c8dea58e_f31e_4fe6_be9b_0e02032438be-------)

6

[

See more recommendations

](https://medium.com/?source=post_page-----d06cabe09e8c--------------------------------)
