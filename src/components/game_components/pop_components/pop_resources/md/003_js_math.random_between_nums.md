# How to generate random numbers between two numbers in JavaScript?

[Javascript](https://www.tutorialspoint.com/articles/category/Javascript)[Web Development](https://www.tutorialspoint.com/articles/category/Web-Development)[Front End Technology](https://www.tutorialspoint.com/articles/category/Front-End-Technology)

To generate a **random** number, we use the _Math.random()_ function. This method returns a floating-point number in the range **0 (inclusive)** to **1 (exclusive)**. To generate random numbers in different range, we should define the minimum and maximum limits of the range. Please follow the second syntax below for this.

To generate random integers, you can follow the third and fourth syntax discussed below.

As the Math.random() method gives us a random floating point number so to convert the result into an integer, we need to apply some basic math. Please follow the below syntaxes.

## Syntax

Following is the syntax for generating a random number between two numbers −

-   Generate a random number between **0** (inclusive) and **1** (exclusive).

MMath.random()

-   Generate a random number between two numbers.

Math.random() \* (max-min) + min);

-   Generate a random integer between two numbers **min** and **max** (both min and max are inclusive).

Math.floor(Math.random() \* ((max-min)+1) + min);

-   Generate a random integer between two numbers **min** and **max** (the **min** is inclusive, and the **max** is exclusive).

Math.floor(Math.random() \* (max-min) + min);

Here **min** and **max** are the start and end numbers between those we want to generate the random numbers.

### Example 1

_Generate a random number between 0 (inclusive) and 1 (exclusive)._

In the example below, we generate a random number between 0 and 1. Here 0 in inclusive and 1 is exclusive.

Open Compiler

```html
<html>
    <body>
        <h3>
            Genrate a random number between 0 (inclusinve) and 1 (exclusinve)
        </h3>

        <p id="result"></p>
        <script>
            var random = Math.random();
            document.getElementById('result').innerHTML = random;
        </script>
    </body>
</html>
```

### Example 2

_Generate many random numbers between 0 (inclusive) and 1 (exclusive)._

In the example below, we generate 10 random numbers between 0 and 1. Here 0 is inclusive and 1 is exclusive.

Open Compiler

```html
<html>
    <body>
        <h3>
            Genrate 10 random numbers between 0 (inclusinve) and 1 (exclusinve)
        </h3>

        <p id="result"></p>
        <script>
            for (var i = 0; i < 10; i++) {
                var random = Math.random();
                document.getElementById('result').innerHTML += random + '<br>';
            }
        </script>
    </body>
</html>
```

### Example 3

_Generate a random number between two numbers._

In the example below, we generate a random number between 20 and 50.

Open Compiler

```html
<html>
    <body>
        <h3>Genrate a random number between 20 and 50</h3>

        <p id="result"></p>
        <script>
            var min = 20;
            var max = 50;
            var random = Math.random() * (max - min) + min;
            document.getElementById('result').innerHTML += random;
        </script>
    </body>
</html>
```

### Example 4

_Generate many random numbers between two numbers._

In the example below, we generate 10 random numbers between 20 and 50.

Open Compiler

```html
<html>
    <body>
        <h3>Genrate 10 random number between 20 and 50</h3>

        <p id="result"></p>
        <script>
            var min = 20;
            var max = 50;
            for (var i = 0; i < 10; i++) {
                var random = Math.random() * (max - min) + min;
                document.getElementById('result').innerHTML += random + '<br>';
            }
        </script>
    </body>
</html>
```

Notice that up to now; the generated random numbers are floating point numbers. Now let’s see how to generate random integers.

### Example 5

_Generate a random integer between two numbers._

In the below example, we generate a random integer between 10 and 100.

Open Compiler

```html
<html>
    <body>
        <h3>Genrate a random integer between10 and 100</h3>

        <p id="result"></p>
        <script>
            function randomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
            document.getElementById('result').innerHTML = randomInt(10, 100);
        </script>
    </body>
</html>
```

### Example 6

In the below example, we take the two numbers from the user. We generate a random number between these two numbers.

Open Compiler

```html
<html>
    <body>
        <h3>Generate Random Number Using JavaScript</h3>

        <div style\="display: inline-block;" \>
            Random Number Between <input type="text" class="start" /> and
            <input type="text" class="end" />
        </div>
        <br /><br />
        <input type="button" value="Get Number" onclick="getRandomNumber();" />
        <p class="number"></p>
        <script>
            function getRandom(start, end) {
                return Math.floor(Math.random() * (end - start + 1)) + start;
            }
            function getRandomNumber() {
                var start = document.getElementsByClassName('start')[0].value;
                var end = document.getElementsByClassName('end')[0].value;
                document.getElementsByClassName('number')[0].innerHTML =
                    'The Random Number is : <span class="highlight">' +
                    getRandom(parseInt(start), parseInt(end)) +
                    '</span>';
            }
        </script>
    </body>
</html>
```

### Example 7

_Generate many random integers between two numbers._

In the below example, we generate 10 random integers between 10 and 100.

Open Compiler

```html
<html>
    <body>
        <h3>Generate 10 random integers between 10 and 100</h3>

        <p id="result"></p>
        <script>
            function randomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
            for (var i = 0; i < 10; i++) {
                document.getElementById('result').innerHTML +=
                    randomInt(10, 100) + '<br>';
            }
        </script>
    </body>
</html>
```

In this tutorial, we discussed ways to generate random numbers between two numbers. We saw how to generate a single as well as many random numbers between two numbers. We generated random numbers as floating-point and integers.

[![Kumar Ishan](https://www.tutorialspoint.com/assets/profiles/512548/profile/60_2150077-1662350620.jpeg)](https://www.tutorialspoint.com/authors/kumar-ishan 'Kumar Ishan')

[Kumar Ishan](https://www.tutorialspoint.com/authors/kumar-ishan)

Updated on: 05-Sep-2022

[](javascript: void\(0\) "Share on Facebook")[](javascript: void\(0\) "Share on LinkedIn")[](javascript: void\(0\) "Share on Twitter")

10K+ Views

Related Articles

-   [Generate random characters and numbers in JavaScript?](https://www.tutorialspoint.com/generate-random-characters-and-numbers-in-javascript)
-   [How to Generate all Prime Numbers between two given Numbers in Excel?](https://www.tutorialspoint.com/how-to-generate-all-prime-numbers-between-two-given-numbers-in-excel)
-   [How to generate large random numbers in Java?](https://www.tutorialspoint.com/how-to-generate-large-random-numbers-in-java)
-   [Generate random numbers in Arduino](https://www.tutorialspoint.com/generate-random-numbers-in-arduino)
-   [How to generate random whole numbers in JavaScript in a specific range?](https://www.tutorialspoint.com/How-to-generate-random-whole-numbers-in-JavaScript-in-a-specific-range)
-   [How does Python generate random numbers?](https://www.tutorialspoint.com/How-does-Python-generate-random-numbers)
-   [How to insert random(integer) numbers between two numbers without repeats in Excel?](https://www.tutorialspoint.com/how-to-insert-random-integer-numbers-between-two-numbers-without-repeats-in-excel)
-   [Guide to Generate Random Numbers in Linux](https://www.tutorialspoint.com/guide-to-generate-random-numbers-in-linux)
-   [Generate n random numbers between a range and pick the greatest in JavaScript](https://www.tutorialspoint.com/generate-n-random-numbers-between-a-range-and-pick-the-greatest-in-javascript)
-   [How to generate standard normal random numbers in R?](https://www.tutorialspoint.com/how-to-generate-standard-normal-random-numbers-in-r)
-   [How to generate non-repeating random numbers in Python?](https://www.tutorialspoint.com/How-to-generate-non-repeating-random-numbers-in-Python)
-   [How to Generate Random Decimal/Integer Numbers in Excel?](https://www.tutorialspoint.com/how-to-generate-random-decimal-integer-numbers-in-excel)
-   [Generate Random Integer Numbers in Java](https://www.tutorialspoint.com/generate-random-integer-numbers-in-java)
-   [Generate pseudo-random numbers in Python](https://www.tutorialspoint.com/generate-pseudo-random-numbers-in-python)
-   [How to use Python Numpy to generate Random Numbers?](https://www.tutorialspoint.com/How-to-use-Python-Numpy-to-generate-Random-Numbers)

##### Kickstart Your Career

Get certified by completing the course

[Get Started](https://www.tutorialspoint.com/latest/certifications)
