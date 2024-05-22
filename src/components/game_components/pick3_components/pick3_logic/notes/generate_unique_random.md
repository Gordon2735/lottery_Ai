# How to generate unique random numbers in a specified range in Javascript

[

![Mav Tipi](https://miro.medium.com/v2/resize:fill:88:88/2*1i9zBWat2CZIBLHPkKdbaQ.jpeg)

](https://mavtipi.medium.com/?source=post_page-----80bf1a545ae7--------------------------------)

[Mav Tipi](https://mavtipi.medium.com/?source=post_page-----80bf1a545ae7--------------------------------)

3 min read

Mar 23, 2020

Yesterday, in the middle of a project, I found myself wanting to get three different random numbers between one and fifteen. Okay, no problem. I know how to get a random number between 0 and 1:

```typescript
Math.random();
```

`**Math**`is Javascript’s math object, which is just a storage bin for various mathematical functions. For example, `**Math.PI**` returns pi, and `**Math.round(x)**` rounds x to the nearest integer. `**Math.random()**` gives us a decimal value between 0 and 1. Let’s try:

```typescript
Math.random(); // 0.0860233629852345_**Math.random()** _// 0.8732168857142002_**Math.random()** _// 0.3644885309435295_**Math.random()** _// 0.06638304368149206_
```

The standard method for converting this into an integer between 0 and a given number is as follows:

```typescript
Math.floor(Math.random() * 16); // 9
Math.floor(Math.random() * 16); // 15
Math.floor(Math.random() * 16); // 7
Math.floor(Math.random() * 16); // 0_
```

What’s going on here is that we’re multiplying a random decimal by sixteen, and then rounding it down. We can make this into a function to use with any top-end:

```typescript
function randomIntByMax(n) {
    return Math.floor(Math.random() * (n + 1));
}

randomIntByMax(15); // 7
```

Cool. In Ruby this would be as simple as `**random(16)**`, but in JavaScript we have to write this function ourselves. And we just did!

One second though. What I wanted was a number between _one_ and fifteen, not zero and fifteen. I can achieve that by adding one to the whole thing and subtracting one from the top end:

```typescript
function myRandomIntByMax(n) {
    return Math.floor(Math.random() * n) + 1;
}

myRandomIntByMax(15); // 14
```

Alright. We’ve got a general-purpose random number generator, and we know how to adjust the range, now comes the hard part. What I want is to be able to ask for some quantity of _unique_ random numbers. So I want to be able to ask for, say, six unique random numbers between one and twenty. How do we run this multiple times and make sure each result is unique?

The most obvious way in my mind might be to store our previous results and reject any new results that match those. Something like this:

```typescript
function myRandomInts(quantity, max) {
    const arr = [];
    while (arr.length < quantity) {
        var candidateInt = Math.floor(Math.random() * max) + 1;
        if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
    }
    return arr;
}
myRandomInts(6, 20); // [13, 9, 3, 8, 6, 12]
```

In this function, we’re looking to output an array of a certain size, and until the array reaches that size, we’re generating random integers in the specified range and checking to see if they match any of the numbers already in the array. If they don’t, we add them to the array.

The most mystifying part of this is probably where we check to see if our current candidate integer is already in the array:

```typescript
if(arr.indexOf(candidateInt) === -1)
```

`**indexOf()**` is an array method that returns the index of `**arr**` at which `**candidateInt**` can be found. If it doesn’t find it at all, it returns -1. That’s just how `**indexOf()**` works. So we can use that to check to see if `**candidateInt**` is in the array; if it isn’t, `**arr.indexOf(candidateInt)**`will equal -1.

So, cool. This works just fine. However, there is an improvement we can make, using the power of **Set**.

![](https://miro.medium.com/v2/resize:fit:315/1*0-3fFjT5Z6ITBJ_aPQK2xg.png)

Set was a key Egyptian deity associated with chaos and deserts; like most, his role and meaning changed with Egyptian society.

A `**Set**` is a type of collection, like an array, but with the key feature of holding only unique values. That is to say, you can have an array of \[6, 6, 6, “hail”, “satan”\], but you can only have a set of \[6, “hail”, “satan”\]. Well, this certainly sounds relevant to what we’re trying to do! It can shorten and clean up our code by a bit:

```typescript
function myRandomInts(quantity, max) {
    const set = new Set();
    while (set.size < quantity) {
        set.add(Math.floor(Math.random() * max) + 1);
    }
    return set;
}

myRandomInts(6, 20); // {7, 15, 4, 19, 14, 3}
```

We don’t have to check if it’s unique any more! Set does it for us. Clean.
