# JavaScript Math random() Method

Last Updated : 05 Jun, 2024

The JavaScript Math.random() function gives you a random number between 0 and just under 1. You can use this number as a base to get random numbers within any range you want. Now, let’s see the syntax to use the JavaScript random method along with multiple examples to easily understand how we can generate random numbers using the random method.

```javascript
Math.random();
```

The math.random() function returns a floating-point, pseudo-random number between range \[0,1) , 0 (inclusive), and 1 (exclusive).

How to Prepare a Winning Resume in 5 Steps Ft. Prakash Sakari, Mentor - GeeksforGeeks

![How to Prepare a Winning Resume in 5 Steps Ft. Prakash Sakari, Mentor - GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66051d72ff657b2394068bc7/b26375b7-1b31-440e-a224-d0d645b91259.webp)

![How to Prepare a Winning Resume in 5 Steps Ft. Prakash Sakari, Mentor - GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66051d72ff657b2394068bc7/f55f900e-1a84-4774-89c9-c0b712d4a1f7.webp)

Now Playing

How to Prepare a Winning Resume in 5 Steps Ft. Prakash Sakari, Mentor - GeeksforGeeks

03:46

![Guided tour of GeeksforGeeks | Features and Overview](https://content1.avplayer.com/63f61879c01d725811007616/videos/66055a6915ce8cc918062e43/56582be2-727b-444b-9244-1ba15f573280.webp)

Now Playing

Guided tour of GeeksforGeeks | Features and Overview

11:00

![7 BEST AI Tools for Developers in 2024 | GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66051d72ff657b2394068bc5/f0fa088f-3285-4228-b244-18db35b6aba8.webp)

Now Playing

7 BEST AI Tools for Developers in 2024 | GeeksforGeeks

03:54

![THIS Will Make You RICH! | Make Money Sitting at Home | GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66051d72ff657b2394068bc8/bacdd1e1-72ea-4c88-88ad-997c844ca26d.webp)

Now Playing

THIS Will Make You RICH! | Make Money Sitting at Home | GeeksforGeeks

06:10

![10 TIPS and TRICKS to Crack Internships and Placements | GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66051d73ff657b2394068bcb/5066c2c8-c585-4795-ab94-286cef13d250.webp)

Now Playing

10 TIPS and TRICKS to Crack Internships and Placements | GeeksforGeeks

09:52

![Top VS Code Extensions for Web Developer in 2024!! GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66055a389f59458c0c088b72/3a5fe1f1-db8a-418d-abf8-fae1c176816e.webp)

Now Playing

Top VS Code Extensions for Web Developer in 2024!! GeeksforGeeks

17:23

![Jobs that AI can't replace | GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66051d72ff657b2394068bca/1b527f93-e50f-4bf8-8d99-81ccb0cfddd8.webp)

Now Playing

Jobs that AI can't replace | GeeksforGeeks

03:16

![All Your Queries Answered | DSA to Development Program | GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/660559566921560ba5045a72/7e3dd383-d7f9-4b10-bea6-7be86c0f59fc.webp)

Now Playing

All Your Queries Answered | DSA to Development Program | GeeksforGeeks

03:46

![A.I. Apps That Can Change Your Lives | GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66051d72ff657b2394068bc9/8dea4916-ef46-4975-b93c-9966958c03aa.webp)

Now Playing

A.I. Apps That Can Change Your Lives | GeeksforGeeks

03:29

![Create a Perfect Portfolio as a Content Writer | GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66051d72ff657b2394068bc6/1b000789-478f-488c-9af3-279732de4440.webp)

Now Playing

Create a Perfect Portfolio as a Content Writer | GeeksforGeeks

06:31

## Examples of JavaScript Math random() Method

Below are the example of the Math random() Method.

**Example 1:** For getting a random number between 0(inclusive) and 1(exclusive).

```javascript
let random = Math.random();
console.log('Random Number Generated : ' + random);
```

**Output**

Random Number Generated : 0.1285732818930101

**Example 2:** Math. random() can be used to get a random number between two values. The returned value is no lower than min and may possibly be equal to min, and it is also less than and not equal to max. For getting a random number between two values the math.random() function can be executed in the following way:

```JavaScript
let min = 4;
let max = 5;
let random = Math.random() * (+max - +min) + +min;
console.log("Random Number Generated : " + random);
```

**Output**

Random Number Generated : 4.051742762637161

**Example 3:** Math.random() can be used to get an integer between two values. The returned value is no lower than min or it is the next integer greater than min if min isn’t an integer. It is also less than but not equal to the max. For getting a random integer between two values the Math.random() function can be executed in the following way:

```javascript
let min = 4;
let max = 5;
let random = Math.floor(Math.random() * (+max - +min)) + +min;
console.log('Random Number Generated : ' + random);
```

**Output**

Random Number Generated : 4

**Example 4:** Math.random() can be used to get an integer between a minimum and a maximum value, including not only the minimum but also the maximum. For getting a random integer between two values the Math.random() function can be executed in the following way:

```javascript
let min = 20;
let max = 60;
let random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
console.log('Random Number Generated : ' + random);
```

**Output**

Random Number Generated : 25

We have a complete list of Javascript Math Objects methods, to check those please go through this [Javascript Math Object Complete reference](https://www.geeksforgeeks.org/javascript-math-object-complete-reference) article.

**Supported Browsers:**

-   Google Chrome 1 and above
-   Firefox 1 and above
-   Opera 3 and above
-   Safari 1 and above

Want to be a Software Developer or a Working Professional looking to enhance your **Software Development Skills**? Then, master the concepts of Full-Stack Development. Our [**Full Stack Development - React and Node.js Course**](https://gfgcdn.com/tu/Q3I/) will help you achieve this quickly. Learn everything from **Front-End to Back-End Development** with hands-on **Projects** and real-world examples. This course enables you to build scalable, efficient, dynamic web applications that stand out. Ready to become an expert in Full-Stack? Enroll Now and Start Creating the Future!

[S](https://www.geeksforgeeks.org/user/Shubrodeep%20Banerjee/contributions/?itm_source=geeksforgeeks&itm_medium=article_author&itm_campaign=auth_user)

[Shubrodeep Banerjee](https://www.geeksforgeeks.org/user/Shubrodeep%20Banerjee/contributions/?itm_source=geeksforgeeks&itm_medium=article_author&itm_campaign=auth_user)

Improve

[Previous Article](https://www.geeksforgeeks.org/javascript-math-pow-method/?ref=previous_article)

[JavaScript Math pow() Method](https://www.geeksforgeeks.org/javascript-math-pow-method/?ref=previous_article)

[Next Article](https://www.geeksforgeeks.org/javascript-math-round-method/?ref=next_article)

[JavaScript Math round() Method](https://www.geeksforgeeks.org/javascript-math-round-method/?ref=next_article)

### Please Login to comment...

### Similar Reads

[

What is the use of the Math.random Function in JavaScript ?

The Math.random() function in JavaScript is used to generate a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). Example 1: Here, Math.random() is used to generate a random number. C/C++ Code

```javascript
let randomNumber = Math.random(); // Outputs a random number between 0 and 1 (excluding 1)
console.log(randomNumber); // Output0.76204
```

[Math.random](https://www.geeksforgeeks.org/what-is-the-use-of-the-math-random-function-in-javascript/)

What is the use of the Math.random() function in JavaScript ?

The Math.random() function is used to generate a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). Syntax:Math.random();Example: Here, Math.random() generates a random number, which could be any floating-point value between 0 (inclusive) and 1 (exclusive). This random number is then stored in the variable randomNumber, an

[1 min read](https://www.geeksforgeeks.org/what-is-the-use-of-the-math-random-function-in-javascript-2/)

JavaScript Math cosh() Method

JavaScript Math.cosh() method is used to calculate the value of the hyperbolic cosine of a number. Syntax: Math.cosh(x) Parameter: This method accepts a single parameter as mentioned above and described below: x: This parameter holds a number for which the value of hyperbolic cosine is going to be calculated. Returns: It returns the calculated valu

[3 min read](https://www.geeksforgeeks.org/javascript-math-cosh-method/)

JavaScript Math abs() Method

Javascript Math.abs() method is used to return the absolute value of a number. It takes a number as its parameter and returns its absolute value. Syntax: Math.abs(value)Parameters: This method accepts a single parameter as mentioned above and described below: value: The number whose absolute value is to be found is passed as the parameter to this f

[2 min read](https://www.geeksforgeeks.org/javascript-math-abs-method/)

JavaScript Math sqrt() Method

The JavaScript Math sqrt( ) Method in JavaScript is used to square the root of the number passed as a parameter to the function. Syntax: Math.sqrt(value) Parameters: This method accepts a single parameter as mentioned above and described below: Value: which holds the number whose square root is to be calculated. Returns: Square root of the number p

[2 min read](https://www.geeksforgeeks.org/javascript-math-sqrt-method/)

JavaScript Math pow() Method

The Math. pow() method is used to power a number i.e., the value of the number raised to some exponent. Since Math.pow() is a static method of Math and therefore it is always used as Math.pow() and not as a method of an object created in Math class. Syntax: Math.pow(base, exponent)Parameters: base: It is the base number that is to be raised.exponen

[2 min read](https://www.geeksforgeeks.org/javascript-math-pow-method/)

JavaScript Math hypot( ) Method

The Math.hypot() method in JavaScript is used to calculate the square root of the sum of squares of numbers passed to it as arguments. It is basically used to find the hypotenuse of a right-angled triangle or the magnitude of a complex number. Math.hypot() method uses the formula Math.sqrt(v1\*v1 + v2\*v2) where v1 and v2 are either the sides of the

[2 min read](https://www.geeksforgeeks.org/javascript-math-hypot-method/)

JavaScript Math fround( ) Method

The Javascript Math.fround() method is used to return the nearest 32-bit single-precision float representation of a number. The Math.fround() method in JavaScript is also used to cast the 64-bit float to a 32-bit float. Syntax: Math.fround(value)Parameters: This method accepts a single parameter value. This parameter represents the number for which

[1 min read](https://www.geeksforgeeks.org/javascript-math-fround-method/)

JavaScript Math exp() Method

The JavaScript Math exp( ) Method is used to return ex, where x is the argument, and e is Euler's number, which is the base of the natural logarithms. The exp() is a static method of Math, therefore, it is always used as Math.exp(), rather than as a method of a Math object created. Syntax: Math.exp(value)Parameters Used: This function accepts a sin

[2 min read](https://www.geeksforgeeks.org/javascript-math-exp-method/)

JavaScript Math log() Method

The JavaScript Math log( ) Method is used to return the natural logarithm (base e) of a number. The JavaScript Math.log() method is equivalent to ln(x) in mathematics. If the value of x is negative, then the math.log() method return NaN. The log() is a static method of Math, therefore, it is always used as Math.log(), rather than as a method of a M

[2 min read](https://www.geeksforgeeks.org/javascript-math-log-method/)

View More Articles

Article Tags :

-   [javascript-math](https://www.geeksforgeeks.org/tag/javascript-math/)
-   [JavaScript-Methods](https://www.geeksforgeeks.org/tag/javascript-methods/)
-   [JavaScript](https://www.geeksforgeeks.org/category/web-technologies/javascript/)
-   [Web Technologies](https://www.geeksforgeeks.org/category/web-technologies/)
