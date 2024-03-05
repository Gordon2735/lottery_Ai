<!-- Advanced TypeScript™️ Concepts -->

# **Advanced TypeScript 4.8 Concepts: Classes and Types**

SitePen Engineering | November 16, 2022

-   [![facebook](facebook-extra-small.ZHguHxRn.svg)](https://www.facebook.com/SitePen)
-   [![twitter](footer-twitter-extra-small.3zx3_Wxc.svg)](https://twitter.com/sitepen)
-   [![linkedin](footer-linkedin-extra-small.19I6tfai.svg)](https://www.linkedin.com/company/sitepen-inc-)
-   [![rss feed](footer-rss-extra-small.cxQhy71r.svg)](https://www.sitepen.com/rss.xml)

![](https://media.sitepen.com/blog-images/2022/11/Advanced-TypeScript-Concepts-1024x538.jpg)

-   [TypeScript](https://www.sitepen.com/blog/category/typescript)
-   [JavaScript](https://www.sitepen.com/blog/category/javascript)

_Originally published November 2018._ **_Updated November 2022_**_. This article describes the features and functionality of TypeScript 4.8._

While TypeScript is very simple to understand when performing basic tasks, having a deeper understanding of how its type system works is critical to unlocking advanced language functionality. Once we know more about how TypeScript really works, we can leverage this knowledge to write cleaner, well-organized code.

If you find yourself having trouble with some of the concepts discussed in this article, try reading through the [Definitive Guide to TypeScript](https://www.sitepen.com/blog/update-the-definitive-typescript-guide/) first to make sure you’ve got a solid understanding of all the basics.

## **Behind the `class` keyword**

In TypeScript, the `class` keyword provides a more familiar syntax for generating constructor functions and performing simple inheritance. It has roughly the same syntax as the ES2015 [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) syntax, but with a few key distinctions. Most notably, it allows for non-method properties, similar to this [Stage 3 proposal](https://github.com/tc39/proposal-class-fields#field-declarations). In fact, declaration of each instance method or property that will be used by the class is mandatory, as this will be used to build up a type for the value of `this` within the class.

But what if we couldn’t use the `class` keyword for some reason? How would we make an equivalent structure? Is it even possible? To answer these questions, let’s start with a basic example of a TypeScript class:

```typescript
class Point {
	static fromOtherPoint(point: Point): Point {
		// ...
	}

	x: number;
	y: number;

	constructor(x: number, y: number) {
		// ...
	}

	toString(): string {
		// ...
	}
}
```

This archetypical class includes a static method, instance properties, and instance methods. When creating a new instance of this type, we’d call `new Point(,` ), and when referring to an instance of this type, we’d use the type `Point`. But how does this work? Aren’t the `Point` type and the Point constructor the same thing? Actually, no!

In TypeScript, types are overlaid onto JavaScript code through an entirely separate type system, rather than becoming part of the JavaScript code itself. This means that an interface (“type”) in TypeScript can—and often does—use the same identifier name as a _variable_ in JavaScript without introducing a name conflict. (The _only_ time that an identifier in the type system refers to a name within JavaScript is when the `typeof` operator is used.)

When using the `class` keyword in TypeScript, you are actually creating _two_ things with the same identifier:

-   A TypeScript interface containing all the instance methods and properties of the class; and
-   A JavaScript variable with a _different_ (anonymous) constructor function type

In other words, the example class above is effectively just shorthand for this code:

```typescript
// our TypeScript `Point` type
interface Point {
	x: number;
	y: number;
	toString(): string;
}

// our JavaScript `Point` variable, with a constructor type
let Point: {
	new (x: number, y: number): Point;
	prototype: Point;

	// static class properties and methods are actually part
	// of the constructor type!
	fromOtherPoint(point: Point): Point;
};

// `Function` does not fulfill the defined type so
// it needs to be cast to <any>
Point = <any>function (this: Point, x: number, y: number): void {
	// ...
};

// static properties/methods go on the JavaScript variable...
Point.fromOtherPoint = function (point: Point): Point {
	// ...
};

// instance properties/methods go on the prototype
Point.prototype.toString = function (): string {
	// ...
};
```

TypeScript also has support for [ES6 Class expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class).

## Adding type properties to classes

As mentioned above, adding non-method properties to classes in TypeScript is encouraged and required for the type system to understand what is available in the class.

```typescript
class Animal {
	species: string;
	color: string = 'red';
	id: string;
}
```

In this example, `className`, `color`, and `id` have been defined as properties that can exist in the class. However, by default, _className_ and _id_ have no value. TypeScript can warn us about this with the `--strictPropertyInitialization` flag, which will throw an error if a class property is not assigned a value directly on the definition, or within the constructor. The value assigned to color is not actually assigned directly to the `prototype`. Instead, its value is assigned inside the constructor in the transpiled code, meaning that it is safe to assign non-primitive types directly without any risk of accidentally sharing those values with all instances of the class.

A common problem in complex applications is how to keep related sets of functionality grouped together. We already accomplish this by doing things like organizing code into modules for large sets of functionality, but what about things like types that are only applicable to a single class or interface? For example, what if we had an `Animal` class that accepted an `attributes` object:

```typescript
export class Animal {
	constructor(attributes: { species: string; id: string; color: string }) {
		// ...
	}
}

export default Animal;
```

In this code, we’ve succeeded in defining an anonymous type for the `attributes` parameter, but this is very brittle. What happens when we subclass `Animal` and want to add some extra properties? We’d have to write the entire type all over again. Or, what if we want to reference this type in multiple places, like within some code that instantiates an `Animal`? We wouldn’t be able to, because it’s an anonymous type assigned to a function parameter.

To solve this problem, we can use an `interface` to define the constructor arguments and export that alongside the class.

```typescript
export interface AnimalProperties {
	species?: string;
	id?: string;
	color?: string;
}

export class Animal {
	constructor(attributes: AnimalProperties = {}) {
		for (let key in attributes) {
			this[key] = attributes[key];
		}
	}
}

export default Animal;
```

Now, instead of having an anonymous object type dirtying up our code, we have a specific `AnimalProperties` interface that can be referenced by our code as well as any other code that imports `Animal`. This means that we can easily subclass our attributes parameter while keeping everything DRY and well-organized:

```typescript
import Animal, { AnimalProperties } from './Animal';

export interface LionProperties extends AnimalProperties {
	roarVolume: string;
}

// normal class inheritance…
export class Lion extends Animal {
	// replace the parameter type with our new, more specific subtype
	constructor(attributes: LionProperties = { roarVolume: 'high' }) {
		super(attributes);
	}
}

export default Lion;
```

As mentioned earlier, using this pattern, we can also reference these types from other code by importing the interfaces where they are needed:

```typescript
import Animal, { AnimalProperties } from './Animal';
import Lion from './Lion';

export function createAnimal<
	T extends Animal = Animal,
	K extends AnimalProperties = AnimalProperties
>(Ctor: { new (...args: any[]): T }, attributes: K): T {
	return new Ctor(attributes);
}

// w has type `Animal`
const w = createAnimal(Animal, { species: 'rodent' });
// t has type `Lion`
const t = createAnimal(Lion, { species: 'feline', roarVolume: 'massive' });
```

As of TypeScript 4.0, class property types can be inferred from their assignments in the constructor.  Take the following example:

```typescript
class Animal {
	sharpTeeth; // <-- no type here! 😱
	constructor(fangs = 2) {
		this.sharpTeeth = fangs;
	}
}
```

Prior to TypeScript 4.0, this would cause `sharpTeeth` to be typed as any (or as an error if using a strict option). Now, however, TypeScript can infer that `sharpTeeth` is the same type as `fangs`, which is a number.

Note that more complex initialization code, such as using an initialization function, will still require manual typing. In the following example, Typescript will **not** be able to infer types, and you will have to manually type the class properties.

```typescript
class Animal {
	sharpTeeth!: number;

	constructor() {
		this.initialize();
	}

	initialize() {
		this.sharpTeeth = 2;
	}
}
```

## Access Modifiers

Another welcome addition to classes in TypeScript is access modifiers that allow the developer to declare methods and properties as `public`, `private`, `protected`, and `readonly`. [As of TS 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#ecmascript-private-fields), ECMAScript private fields are also supported via the `#` character resulting in a hard private field. Note that access modifiers cannot be used on hard private fields.

```typescript
class Widget {
	class: string; // No modifier implies public
	private _id: string;
	#uuid: string;
	readonly id: string;

	protected foo() {
		// ...
	}
}
```

If no modifier is provided, then the method or property is assumed to be `public` which means it can be accessed internally or externally. If it is marked as `private` then the method or property is only accessible internally within the class. This modifier is only enforceable at compile-time, however. The TypeScript compiler will warn about all inappropriate uses, but it does nothing to stop inappropriate usage at runtime. `protected` implies that the method or property is accessible only internally within the class or any class that extends it but not externally. Finally, `readonly` will cause the TypeScript compiler to throw an error if the value of the property is changed after its initial assignment in the class constructor.

## **Defining class properties in constructors**

Class properties can also be defined via class constructors.  Take the sharp teeth example:

```typescript
class Animal {
	sharpTeeth;
	constructor(fangs = 2) {
		this.sharpTeeth = fangs;
	}
}
```

Defining and initializing the `sharpTeeth` property  can be simplified by applying an access modifier to a constructor parameter:

```typescript
class Animal {
	constructor(public sharpTeeth = 2) {}
}
```

The constructor is now defining the `sharpTeeth` property as public and initializes it to the value passed into the constructor or 2 by default.  Access to the new property can be further restricted by using `protected` or `private`.

## Getters and Setters

Class properties can have getters and setters. A getter lets you compute a value to return as the property value, while a setter lets you run arbitrary code when the property is set.

Consider a class that represents a simple two-dimensional vector.

```typescript
class Vector2 {
	constructor(
		public x: number,
		public y: number
	) {}
}

const v = new Vector2(1, 1);
```

Now say we wanted to give this vector a length property. One option is to add a property that is kept up to date whenever the x or y values change.  We can monitor the x and y values using a _setter_.

```typescript
class Vector2 {
	private _x = 0;
	private _y = 0;

	length!: number;

	get x() {
		return this._x;
	}
	get y() {
		return this._y;
	}

	set x(value: number) {
		this._x = value;
		this.calculateLength();
	}

	set y(value: number) {
		this._y = value;
		this.calculateLength();
	}

	private calculateLength() {
		this.length = Math.sqrt(this._x ** 2 + this._y ** 2);
	}

	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
		this.calculateLength();
	}
}

const v = new Vector2(1, 1);

console.log(v.length);
```

Now, whenever x or y changes, our `length` is recalculated and ready to be used. Although this works, this is not a very practical solution. Recalculating the vector length whenever a property changes could potentially result in a lot of wasted computations. If we aren’t using the `length` property in our code, we don’t need to perform this calculation at all!

We can craft a more elegant solution using a _getter_. Using a getter, we’ll define a new read-only property, `length`, that is calculated on the fly, only when requested.

```typescript
class Vector2 {
	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	constructor(
		public x: number,
		public y: number
	) {}
}

const v = new Vector2(1, 1);
console.log(v.length);
```

This is much nicer! Not only do we have less overall code here, but our length `computation` is only run when we need it.

## Abstract Classes

TypeScript supports the `abstract` keyword for classes and their methods, properties, and accessors. An abstract class may have methods, properties, and accessors with no implementation, and cannot be constructed. See [Abstract classes and methods](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#abstract-classes-and-methods) and [Abstract properties and accessors](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#abstract-properties-and-accessors) for more information.

## Mixins and Compositional Classes

TypeScript 2.2 made some changes to make it easier to implement mixins and/or compositional classes. This was achieved by removing some of the restrictions on classes. For example, it’s possible to extend from a value that constructs an intersection type. They also changed the way that signatures on intersection types get combined.

## Symbols, Decorators, and more

### Symbols

[Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) are unique, immutable identifiers that can be used as object keys. They offer the benefit of guaranteeing safety from naming conflicts. A symbol is a primitive value with the type of “symbol” (`typeof Symbol() === 'symbol'`).

```typescript
// even symbols created from the same key are unique
Symbol('foo') !== Symbol('foo');
```

When used as object keys, you don’t have to worry about name collision:

```typescript
const ID_KEY = Symbol('id');
let obj = {};
obj[ID_KEY] = 5;
obj[Symbol('id')] = 10;
obj[ID_KEY] === 5; // true
```

Strong [type information in TS](https://github.com/Microsoft/TypeScript/pull/1978) is only available for [built-in symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols).

See our [ES6 Symbols: Drumroll please!](https://www.sitepen.com/blog/es6-symbols-drumroll-please/) article for more information about Symbols.

### Decorators

Please note that decorators were added to TypeScript early and are only available with the `--experimentalDecorators` flag because they do not reflect the current state of the [TC39 proposal](https://github.com/tc39/proposal-decorators). A decorator is a function that allows shorthand in-line modification of [classes, properties, methods, and parameters](https://github.com/Microsoft/TypeScript/issues/2249). A method decorator receives 3 parameters:

-   `target`: the object the method is defined on
-   `key`: the name of the method
-   `descriptor`: the object descriptor for the method

The decorator function can optionally return a property descriptor to install on the target object.

```typescript
function myDecorator(target, key, descriptor) {}

class MyClass {
	@myDecorator
	myMethod() {}
}
```

`myDecorator` would be invoked with the parameter values `MyClass.prototype`, `'myMethod'`, and `Object.getOwnPropertyDescriptor(MyClass.prototype, 'myMethod')`.

TypeScript also supports [computed property names](https://github.com/Microsoft/TypeScript/issues/1082) and [Unicode escape sequences](https://github.com/Microsoft/TypeScript/pull/2169).

See our [TypeScript Decorators](https://www.sitepen.com/blog/typescript-decorators/) article for more information about decorators.

### Interface vs. Type

Typescript has both `interface` and `type` aliases but they can often be used incorrectly. One of the key differences between the two of these is that an Interface is limited to describing `Object` structures whereas `type` can consist of Objects, primitives, union types, etc.

Another difference here is their intended use. An interface primarily describes how something should be implemented and should be used. A type on the other hand is a definition of a type of data.

```typescript
// union type of two species
type CatSpecies = 'lion' | 'tabby';

// interface defining cat shape and using the above type
interface CatInterface {
	species: CatSpecies;
	speak(): string;
}

class Cat implements CatInterface {
	constructor(public species: CatSpecies) {}
	speak() {
		return this.species === 'lion' ? 'ROAR' : 'meeeooow';
	}
}

const lion = new Cat('lion');
console.log(lion.speak());
// ROAR
```

One benefit of types is you can use computed properties via the `in` keyword. This programmatically generates [mapped types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types). You can take this example further and combine it with the use of a generic to define a type that requires the keys of the generic passed in to be specified.

```typescript
type FruitColours<T> = { [P in keyof T]: string[] };

const fruitCodes = {
	apple: 11123,
	pear: 33343,
	banana: 33323
};

// This object must include all the keys present in fruitCodes.
// If you used this type again and passed a different generic
// then different keys would be required.
const fruitColours: FruitColours<typeof fruitCodes> = {
	apple: ['red', 'green'],
	banana: ['yellow'],
	pear: ['green']
};
```

Use a `const` after a literal to end up with a more precise type.  The value of `fruitCodes` above cannot be changed but the fields of the object can be changed.

```typescript
fruitCodes.apple = 55555;
```

Adding as const after the literal will make the object immutable.

```typescript
const fruitCodes = {
	apple: 11123,
	pear: 33343,
	banana: 33323
} as const;
```

## In conclusion

Hopefully, this post has helped to demystify parts of the TypeScript type system and has given you some ideas about how you can exploit its advanced features to improve your own TypeScript application structure. If you have any other questions or want some expert assistance writing TypeScript applications, [get in touch](https://www.sitepen.com/contact) to chat with us today!

## Is it time to assess if your team should be using TypeScript?

###

Connect with us for a **free technical assessment** and ask the experts whether TypeScript is the right choice for your application.

[Let's connect](https://www.sitepen.com/strategy-session)

## Receive Our Latest Insights!
