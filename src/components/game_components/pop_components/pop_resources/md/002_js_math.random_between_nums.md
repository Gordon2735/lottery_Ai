# Javascript Program to Generate a Random Number Between Two Numbers

To understand this example, you should have the knowledge of the following [JavaScript programming](https://www.programiz.com/javascript 'JavaScript tutorial') topics:

-   [JavaScript Math random()](https://www.programiz.com/javascript/library/math/random)
-   [JavaScript Math floor()](https://www.programiz.com/javascript/library/math/floor)
-   [JavaScript parseInt()](https://www.programiz.com/javascript/library/built-in/parseInt)

---

If you want to find a random integer in between min (inclusive) to max (inclusive), you can use the following formula:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

---

## Example: Integer Value Between Two Numbers

```javascript
// input from the user
const min = parseInt(prompt('Enter a min value: '));
const max = parseInt(prompt('Enter a max value: '));

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);
```

[Run Code](https://www.programiz.com/javascript/online-compiler)

**Output**

Enter a min value: 1
Enter a min value: 50
Random value between 1 and 50 is 47

In JavaScript, you can generate a random number with the `Math.random()` function.

`Math.random()` returns a random floating-point number ranging from **0** to less than **1** (inclusive of **0** and exclusive of **1**)

The above program will show an integer output between **min (inclusive)** to **max (inclusive)**.

First, the minimum and maximum values are taken as input from the user. Then the `Math.random()` method is used to get the random number from the passed value.

The `Math.floor()` returns the nearest integer value.
