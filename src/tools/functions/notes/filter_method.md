# The filter() Method in JavaScript

The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. The filter() method calls a provided

In computer programming, a callback is a function that is stored as data and designed to be called by another function – often back to the original abstraction layer. A function that accepts a callback parameter may be designed to call back before returning to its caller which is known as synchronous or blocking.

[Wikipedia](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>)

![](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSedPI-xpgs80et5-Ratz52h44fBy2iYc9TeMu9f6Jkv7B2Rhf4)

[Medium](https://medium.com/@mohdtalib.dev/callbacks-in-javascript-the-what-why-and-how-5bc1cb216e6f)
More about callbacks

once for each element in an array, and constructs a new array of all the elements for which the callback function returns...

**Return statement**

In computer programming, a `return statement` causes execution to leave the current subroutine and resume at the point in the code immediately after the instruction which called the subroutine, known as its return address.

[Wikipedia](https://en.wikipedia.org/wiki/Return_statement)

![](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcToZHBIz31iHUnu1fmOUDwc3SRQuDtGjFoNWtryu71tgPAJizl5)

[C Programming Simple Steps](https://www.c-programming-simple-steps.com/return-statement.html)
More about return statements

Feedback

**a true value**

Value

In computer science and software programming, `a value` is the representation of some entity that can be manipulated by a program. The members of a type are the `values` of that type. The `"value of a variable"` is given by the corresponding mapping in the environment.

[Wikipedia](<https://en.wikipedia.org/wiki/Value_(computer_science)>)

![](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEDohBjkr4zDJo7p6A92DzLbjow8yZyd_Pvw6Lt9_p4c56ma3K)

[CodeREV Kids](https://www.coderevkids.com/blog/computer-science-learning-statistics/)
More about values

**The callback function accepts three arguments**

Argument of a function

In mathematics, an `argument` of a function is a value provided to obtain the function's result. It is also called an independent variable. For example, the binary function has two arguments, and, in an ordered pair. The hypergeometric function is an example of a four-argument function.

[Wikipedia](https://en.wikipedia.org/wiki/Argument_of_a_function)

![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1RPh9Y0cPbjGU3L5mDV_6OSo4IWWSdClqOlOWpkPBY6ZAFhez)

[A Maths Dictionary for Kids](http://www.amathsdictionaryforkids.com/qr/a/argumentOfAFunction.html)
More about arguments

**: the element, the current index**

Database index

A `database index` is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the `index data` structure.

[Wikipedia](https://en.wikipedia.org/wiki/Database_index)

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1i-7gs9axOwKf51dr0yAb9X92n1RoJkPLTMkqiR9VKr0fp94H)

[Vertabelo Database Modeler](https://vertabelo.com/blog/what-is-database-index/)
More about database indexes

, and the array itself. If the callback function returns true, the element is included in the new array. If the callback function returns false, the element is excluded from the new array.

**Here is an example of how to use the filter() method to filter an array of numbers:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Filter the array to only include even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Print the even numbers
console.log(evenNumbers); // [2, 4]
```

In this example, the callback function checks if the number is even. If the number is even, the callback function returns true, and the number is included in the new array. If the number is odd, the callback function returns false, and the number is excluded from the new array.

You can also use the filter() method to filter an array of objects. For example, the following code

**_Filter_**

In functional programming, `filter` is a higher-order function that processes a data structure in some order to produce a new data structure containing exactly those elements of the original data structure for which a given predicate returns the boolean value true.

[Wikipedia](<https://en.wikipedia.org/wiki/Filter_(higher-order_function)>)

![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3Clrvcl0c1lgkRkPKIH3nkDwY1ZORwW8clRwi8oB9N_dWo37Q)

[Wikipedia](<https://en.wikipedia.org/wiki/Filter_(higher-order_function)>)
More about filters

**an array of objects to only include objects with a name property that contains the letter "a"**:

```javascript
const people = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Carol' }];

// Filter the array to only include people whose name contains the letter "a"
const peopleWithA = people.filter((person) => person.name.includes('a'));

// Print the people whose name contains the letter "a"
console.log(peopleWithA); // [{ name: "Alice" }, { name: "Carol" }]
```

In this example, the callback function checks if the person's name contains the letter "a". If the person's name contains the letter "a", the callback function returns true, and the person is included in the new array. If the person's name does not contain the letter "a", the callback function returns false, and the person is excluded from the new array.

The `filter() method` is a powerful tool that can be used to filter arrays of any type. By using the `filter() method`, you can easily create new arrays that contain only the elements that you need.
