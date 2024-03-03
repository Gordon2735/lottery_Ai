-   [Home](https://www.theserverside.com/)
-   [Core Java APIs and programming techniques](https://www.theserverside.com/resources/Core-Java-APIs-and-programming-techniques)

![](https://www.theserverside.com/rms/onlineimages/code_g1196680867_searchsitetablet_520X173.jpg)

[Tutorial](https://www.theserverside.com/tutorials)

# **Understanding the TypeScript Method Decorator**

## This tutorial explores TypeScript method decorators, reusable code similar to Java annotations that lets developers apply logic in a declarative manner at design time.

-   Share this item with your network:

This Content Component encountered an error

![Bob Reselman](https://cdn.ttgtmedia.com/rms/onlineImages/reselman_bob.jpg)

By

-   [Bob Reselman,](https://www.techtarget.com/contributor/Bob-Reselman) CogArtTech

Published: 12 Jul 2023

A decorator is a feature of TypeScript that enables developers to apply logic to a class, a class's properties, methods or a method's parameters in a declarative manner at design time. TypeScript decorators are [similar to Java annotations](https://www.theserverside.com/tutorial/What-Java-developers-need-to-know-about-TypeScript-syntax) and [C# attributes](https://www.techtarget.com/whatis/definition/C-Sharp).

GPT.display('mu-1')

The nice thing about TypeScript decorators is that they let developers apply reusable code in a declarative manner. Once you program a decorator, all you need to do is import it into the class and declare it within the class using the @ symbol.

The example below shows a class named printer, which has a method print() that prints the text that has been passed as a parameter to the method. In this case, the printing behavior is nothing more than to output the text using console.log() at Line 5.

```typescript
1 import {log} from './decorators'
2 export class Printer{
3 @log
4 print(text: string): void {
5 console.log(\`Printer class is printing: ${text}\`);
6 }
7 }
```

**Example 1: Applying a TypeScript decorator to a class's method**

However, as you can see in Example 1, a decorator named @log is declared at Line 3 directly over the declaration of the print() method at Line 4. The result is that when Printer.print(text: string) is called at runtime, the code applies behavior in the @log decorator to the print() method and executes accordingly.

The important thing to understand is that the @log behavior is programmed separately outside of the scope of the code using the decorator. Programmers who use the @log method may have no idea about the particulars of the decorator's code -- they only need to know the behavior the decorator will execute.

**Example 2 shows how the behavior executes when you actually use the Printer.print() method along with the result.**

```typescript
const printer = new Printer();
printer.print('Decorators are cool!');
```

**The result:**

Logger says - calling the method: print, that has a parameter value: Decorators are cool!
Printer class is printing: Decorators are cool!
Logger says - called the method: print

**Example 2: The result of calling a decorated method**

Notice the output that starts with Logger says -. This behavior is not defined in the Printer.print() method; the @log decorator adds it. This is the beauty of TypeScript decorators -- they let you define behavior separately in one place, and then apply it at design time to behavior that's already been programmed in a class.

The essential benefit to this is that you can create a decorator once and then use it many times. The degree of reuse depends on how general is the logic in the decorator. Some decorators are intended for general use, while some decorators might satisfy a use case that is specific to a particular component or application. It all depends on the needs at hand.

As mentioned above, there are a few types of decorators. You can create a decorator for a class which will by default affect the class's [constructor](https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors). You also can create decorators for a class's members, methods, and method parameters.

Rather than explain the specifics of each type of decorator, we'll focus on the programming that goes into making a method decorator. Specifically, the details of programming the @log decorator applied to the Printer.print() method as shown above.

You can view all the code used in this article on GitHub, [here](https://github.com/reselbob/ts-decorators-functions/blob/ec369d3e646e903afe63c1e9ff1347cc0cbd8348/src/decorators.ts).

## **Anatomy of a method decorator**

A good way to think about a decorator is to conceptualize it as a function that is applied to a function. In the case of the @log method decorator, you apply the decorator's corresponding log() function to the method that's decorated. For example, the following code applies the log() function that corresponds to the @log decorator to the print() method:

```typescript
@log
print(text: string): void {
console.log(\`Printer class is printing: ${text}\`);
}
```

However, it's just not a matter of the log() function simply running the print() method. There's more going on. TypeScript does something special.

Whenever a decorator's function is called, TypeScript automatically passes a predefined set of parameters to that function. What those parameters are varies by the decorator type. In the case of a method decorator, the parameters passed to the decorator function are target: any, propertyKey: string and descriptor: PropertyDescriptor.

The purpose of the predefined parameter is to describe various aspects of the method that's being decorated, such as the following:

-   The parameter propertyKey reports the name of the method that's being decorated.
-   The target parameter describes the class that is the parent of the method that's being decorated.
-   The descriptor parameter, which is a [PropertyDescriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) object, has a property named value.
-   The PropertyDescriptor.value represents the function that is the actual behavior of the method that's being decorated.

There is another implicit variable named args which is not passed as a parameter, but provided by TypeScript at runtime and is accessible from within the decorator function nonetheless. The variable args describes the parameters of the method that's being decorated.

Example 3 below shows the source code for the function for the @log decorator. The function's documentation is provided inline at the start of the function code. The listing is heavily commented; an analysis of the code will follow.

```typescript
1 /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
2 \* This is a method decorator that adds before
3 \* and after logging behavior to a decorated method
4 \* @param target, the class the contains the decorated method
5 \* @param propertyKey, the name of the decorated method
6 \* @param descriptor, has the following properties:
7 \* • writable: boolean
8 \* • enumerable: boolean
9 \* • configurable: boolean
10 \* • value: Function, is the behavior of the method
11 \* • Object, is the base TypeScript object from which the
12 \* class is derived
13 \*/
```

```typescript
14 export const log = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
15 // Capture the functional behavior of the decorated method
16 const originalMethod = descriptor.value;
17 // Override the decorated method's behavior with new behavior
18 descriptor.value = function (...args: any\[\]) {
19 let msg: string;
20 // The decorated method's parameters will be passed in as args.
21 // We'll assume the decorated method might only have a single parameter,
22 // check to see if it's been passed in the method
23 if(args\[0\]){
24 msg = (\`${propertyKey}, that has a parameter value: ${args\[0\]}\``)
25        }
26        else{
27            msg = \`${propertyKey}\`
28 }
29 // Emit a message to the console// report what's about to happen

```

```typescript

30 console.log(\`Logger says - calling the method: ${msg}\``);
31        // Execute the behavior originally programmed in
32        // the decorated method`
const result = originalMethod.apply(this, args);
34        // if the decorated method returned a value when executed,
35        // capture that result
36        if(result){
37            msg = \`${propertyKey} and returned: ${JSON.stringify(result)}\``;
38        }
39        else{
40            msg = \`${propertyKey}\``;
41 }
42 // Having executed the decorated method's behavior, emit
43 // a message to the console report what happened
44 console.log(\`Logger says - called the method: ${msg}\`)`;
45 return result;
46 };
47 return descriptor;
48 };
```

**Example 3: The** **log() function that corresponds to the** **@log decorator.**

Here's how the @log decorator works: Its function receives a reference to the behavior of the method that's being decorated, and puts that behavior "to the side" for later use (shown at Line 16). Then the log() function inspects the args variable provided by TypeScript (Line 23) to determine if the method that is being decorated has a parameter. (Remember, the args variable describes the parameters declared in the signature of the method that's being decorated.) If a parameter exists, a message is created to display the parameter within the message string. Otherwise, a message without the parameter value is created. At this point a _before_ message is emitted via console.log(). As the description implies, this message is emitted before the behavior of the method that's being decorated is executed.

Then the actual behavior of the method that's being decorated is executed. To do this, the log function calls originalMethod.apply(this, args) as shown at Line 33. Think of

```typescript
originalMethod.apply();
```

as the mechanism used to execute the behavior programmed in the decorated method.

After the decorated method's behavior executes, the log() function creates an _after_ message and emits it via console.log().

### **Two considerations about the log function**

There are two important things to understand about the log() function.

First, it's designed to be used in a somewhat general manner. You can apply it to any method that has no or many parameters, but only the first parameter will be considered. Remember, the purpose of the @log decorator is to provide simple logging around the behavior of the method that's being decorated. Thus, the decorator's behavior must be as generic as possible for it to be useful among methods in a wide variety of TypeScript classes.

Another thing to consider is that the log() function is benign in that it does not change the behavior of the method that's being decorated -- it only provides some before and after logging activity around existing behavior. However, it is quite possible and even common to create a decorator that modifies the behavior of a method that's being decorated. The details of how to do this are beyond the scope of this introductory article, but [here is an example](https://github.com/reselbob/ts-decorators-functions/blob/ec369d3e646e903afe63c1e9ff1347cc0cbd8348/src/decorators.ts#L3) of decorator code that modifies the behavior of a method that's being decorated.

## **Conclusion**

As you can see, TypeScript decorators are a powerful technology. They can be easy to create when starting out, but over time decorator programming will become increasingly difficult as more complex use cases appear.

We've only scratched the surface of TypeScript decorators in this article. Fortunately, there is [ample documentation](https://www.typescriptlang.org/docs/handbook/) available to learn more about the intricacies of decorator programming.

```typescript
GPT.display('mobile-2');
```

#### **Dig Deeper on Core Java APIs and programming techniques**

-   [![](https://cdn.ttgtmedia.com/rms/onlineimages/code_g1289411982_searchsitetablet_520X173.jpg)
    ##### Understanding TypeScript generics
    ![BobReselman](https://cdn.ttgtmedia.com/rms/onlineImages/reselman_bob.jpg)
    By: Bob Reselman
    ](https://www.theserverside.com/tutorial/Understanding-TypeScript-generics)
-   [![](https://cdn.ttgtmedia.com/visuals/digdeeper/2.jpg)
    ##### Hibernate and JPA 3 CRUD example
    ![CameronMcKenzie](https://cdn.ttgtmedia.com/rms/onlineImages/mckenzie_cameron.jpg)
    By: Cameron McKenzie
    ](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/The-JPA-and-Hibernate-CRUD-operations-example)
-   [![](https://cdn.ttgtmedia.com/rms/onlineimages/code_g1133924836_searchsitetablet_520X173.jpg)
    ##### JavaScript vs. TypeScript: What's the difference?
    ![CameronMcKenzie](https://cdn.ttgtmedia.com/rms/onlineImages/mckenzie_cameron.jpg)
    By: Cameron McKenzie
    ](https://www.theserverside.com/tip/JavaScript-vs-TypeScript-Whats-the-difference)
-   [![](https://cdn.ttgtmedia.com/rms/onlineimages/code_g1297696209_searchsitetablet_520X173.jpg)
    ##### Build a PowerShell logging function for troubleshooting
    ![AdamBertram](https://cdn.ttgtmedia.com/rms/onlineImages/bertram_adam.jpg)
    By: Adam Bertram
    ](https://www.techtarget.com/searchwindowsserver/tutorial/Build-a-PowerShell-logging-function-for-troubleshooting?_gl=1*4q1m7m*_ga*NTIwNDM5MjU1LjE3MDk0MzQxMzU.*_ga_TQKE4GS5P9*MTcwOTQzNDEzNS4xLjEuMTcwOTQzNDE0OS4wLjAuMA..)

Sponsored News

-   [Sustainability, AI and Dell PowerEdge Servers](https://www.techtarget.com/searchdatacenter/ServerBuyingConsiderations/Sustainability-AI-and-Dell-PowerEdge-Servers) –Dell Technologies and Intel
-   [High-Performance Computing as a Service: Powering Autonomous Driving at Zenseact](https://www.techtarget.com/searchcio/DrivingITSuccess/High-Performance-Computing-as-a-Service-Powering-Autonomous-Driving-at-Zenseact) –HPE
-   [Supporting a more diverse management team](https://www.techtarget.com/searchcio/Diversity-Equity-and-Inclusion/Supporting-a-more-diverse-management-team) –AWS
-   [See More](https://www.theserverside.com/sponsored_communities)

Related Content

-   [The differences between Java and TypeScript devs must...](https://www.theserverside.com/tip/The-differences-between-Java-and-TypeScript-devs-must-know) – TheServerSide.com
-   [Understanding TypeScript generics](https://www.theserverside.com/tutorial/Understanding-TypeScript-generics) – TheServerSide.com
-   [How to program to an interface in TypeScript](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-program-to-an-interface-in-TypeScript) – TheServerSide.com

```typescript
GPT.display('halfpage-rightrail');

GPT.display('mu-1-rightrail');
```

[\-ADS BY GOOGLE](https://www.google.com/adsense/support/bin/request.py?contact=abg_afc)
