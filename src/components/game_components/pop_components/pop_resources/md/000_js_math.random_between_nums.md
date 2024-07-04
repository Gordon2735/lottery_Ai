# [Generate random number between two numbers in JavaScript](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript)

[Ask Question](https://stackoverflow.com/questions/ask)

Asked 13 years, 4 months ago

Modified [29 days ago](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?lastactivity '2024-06-03 13:50:18Z')

Viewed 2.6m times

Report this ad

This question shows research effort; it is useful and clear

2552

This question does not show any research effort; it is unclear or not useful

Save this question.

[](https://stackoverflow.com/posts/4959975/timeline)

Show activity on this post.

Is there a way to generate a _random number_ in a _specified range_ with JavaScript ?

**For example**: a specified range from _1 to 6_ were the random number could be either _1, 2, 3, 4, 5, or 6_.

-   [javascript](https://stackoverflow.com/questions/tagged/javascript "show questions tagged 'javascript'")
-   [random](https://stackoverflow.com/questions/tagged/random "show questions tagged 'random'")

[Share](https://stackoverflow.com/q/4959975/15588573 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/4959975/edit 'Revise and improve this post')

Follow

Follow this question to receive notifications

[edited Apr 30, 2022 at 8:13](https://stackoverflow.com/posts/4959975/revisions 'show all edits to this post')

[

![Gass's user avatar](https://i.sstatic.net/IRJ8i.png?s=64)

](https://stackoverflow.com/users/14895985/gass)

[Gass](https://stackoverflow.com/users/14895985/gass)

8,79033 gold badges4444 silver badges4949 bronze badges

asked Feb 10, 2011 at 16:41

[

![Mirgorod's user avatar](https://www.gravatar.com/avatar/32ac09703a12999ef00f43b32b848813?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/568975/mirgorod)

[Mirgorod](https://stackoverflow.com/users/568975/mirgorod)Mirgorod

32.2k1818 gold badges5252 silver badges6363 bronze badges

17

-   24
    Math.floor( Math.random() \* 7 )
    – [Amjad Masad](https://stackoverflow.com/users/554135/amjad-masad '4,015 reputation')
    [Commented Feb 10, 2011 at 16:45](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment5534229_4959975)
-   91
    Sure.. Math.floor(Math.random()\*6+1)
    – [Amjad Masad](https://stackoverflow.com/users/554135/amjad-masad '4,015 reputation')
    [Commented Feb 11, 2011 at 0:21](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment5540241_4959975)
-   4
    Nabil Kadimi wrote an article on [how to generate negative random numbers](http://www.kadimi.com/en/negative-random) too.
    – [madc](https://stackoverflow.com/users/709769/madc '1,714 reputation')
    [Commented Sep 4, 2012 at 13:44](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment16454985_4959975)
-   1
    Does this answer your question? [Generating random whole numbers in JavaScript in a specific range](https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range)
    – [Balto](https://stackoverflow.com/users/13603485/balto '49 reputation')
    [Commented Mar 29, 2023 at 9:20](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment133835172_4959975)

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.') |  [Show **13** more comments](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

## 34 Answers 34

Sorted by: [Reset to default](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?answertab=scoredesc#tab-top)

Highest score (default) Trending (recent votes count more) Date modified (newest first) Date created (oldest first)

1

[2](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?page=2&tab=scoredesc#tab-top 'Go to page 2') [Next](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?page=2&tab=scoredesc#tab-top 'Go to page 2')

This answer is useful

3352

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/7228322/timeline)

Show activity on this post.

```javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 6);
console.log(rndInt);
```

Run code snippetHide results

Expand snippet

What it does "extra" is it allows random intervals that do not start with 1. So you can get a random number from 10 to 15 for example. Flexibility.

[Share](https://stackoverflow.com/a/7228322/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/7228322/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Apr 19 at 14:25](https://stackoverflow.com/posts/7228322/revisions 'show all edits to this post')

[

![Lee Taylor's user avatar](https://www.gravatar.com/avatar/25a22103fd3210fdfa142843c7777ff1?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/933198/lee-taylor)

[Lee Taylor](https://stackoverflow.com/users/933198/lee-taylor)

7,9241616 gold badges3535 silver badges4949 bronze badges

answered Aug 29, 2011 at 9:25

[

![Francisc's user avatar](https://www.gravatar.com/avatar/529a291a6eb6205d850ac47d2c38b24c?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/383148/francisc)

[Francisc](https://stackoverflow.com/users/383148/francisc)Francisc

79.3k6464 gold badges182182 silver badges277277 bronze badges

23

-   5
    this is also great because if someone doesn't include the `to` arg, the `from` arg doubles as the max
    – [Jason](https://stackoverflow.com/users/7173/jason '52,163 reputation')
    [Commented Feb 6, 2013 at 1:53](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment20592453_7228322)
-   25
    Hello. This is from MDN: `Returns a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.` ([developer.mozilla.org/en-US/docs/JavaScript/Reference/…](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random))
    – [Francisc](https://stackoverflow.com/users/383148/francisc '79,336 reputation')
    [Commented Apr 9, 2013 at 20:12](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment22662145_7228322)
-   6
    Read the above comment. Random is inside \[0,1), not \[0,1\].
    – [Francisc](https://stackoverflow.com/users/383148/francisc '79,336 reputation')
    [Commented Jun 21, 2013 at 13:41](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment24975076_7228322)
-   7
    Works great if the lower number is 0.
    – [Robin Zimmermann](https://stackoverflow.com/users/1360592/robin-zimmermann '3,774 reputation')
    [Commented Oct 27, 2013 at 20:47](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment29131812_7228322)
-   8
    Note that this solution is correct only if min and max are integers, otherwise you can get a result in the interval \[min, ceil(max)\]. I.e. you can get a result which is out of range because is higher than max.
    – [collimarco](https://stackoverflow.com/users/51387/collimarco '34,992 reputation')
    [Commented Jul 7, 2014 at 9:40](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment38128573_7228322)

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **18** more comments](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

Report this ad

This answer is useful

2522

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/4960020/timeline)

Show activity on this post.

### Important

The following code works only if the minimum value is \`1\`. It does not work for minimum values other than \`1\`.

If you wanted to get a random integer between 1 (**and only 1**) and 6, you would calculate:

```javascript
const rndInt = Math.floor(Math.random() * 6) + 1;
console.log(rndInt);
```

Run code snippetHide results

Expand snippet

Where:

-   1 is the start number
-   6 is the number of possible results (1 + start _(6)_ - end _(1)_)

[Share](https://stackoverflow.com/a/4960020/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/4960020/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited May 18, 2021 at 21:49](https://stackoverflow.com/posts/4960020/revisions 'show all edits to this post')

[

![danday74's user avatar](https://i.sstatic.net/eDE58.gif?s=64)

](https://stackoverflow.com/users/1205871/danday74)

[danday74](https://stackoverflow.com/users/1205871/danday74)

55.3k5151 gold badges253253 silver badges305305 bronze badges

answered Feb 10, 2011 at 16:45

[

![khr055's user avatar](https://www.gravatar.com/avatar/26d7b31da814155de274bc19f5c5f82f?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/529548/khr055)

[khr055](https://stackoverflow.com/users/529548/khr055)khr055

28.9k1616 gold badges3737 silver badges4848 bronze badges

29

-   54
    While this would work, @Mike, it would be best to point out the more generic version as Francisc has it below :-).
    – [RaymondMachira](https://stackoverflow.com/users/1733864/raymondmachira '354 reputation')
    [Commented Aug 5, 2013 at 14:38](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment26427103_4960020)
-   74
    \-1. After Googling I found this question the title is ""Generate random value between two numbers in Javascript"." Won't work if the min value is 0
    – [Ydhem](https://stackoverflow.com/users/1719496/ydhem '928 reputation')
    [Commented Oct 8, 2013 at 1:44](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment28474964_4960020)
-   21
    Doesn't work if you want a number between two larger numbers eg. Math.floor(Math.random() \* 900) + 700
    – [Rob](https://stackoverflow.com/users/149615/rob '7,089 reputation')
    [Commented Nov 25, 2013 at 16:12](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment30113422_4960020)
-   22
    That only works if the minimum is 1. If the min is 2 and we still use `Math.floor(Math.random() * 6) + 2` means that if `Math.random()` results into 0.99 our random value would be `7`
    – [antitoxic](https://stackoverflow.com/users/339872/antitoxic '3,814 reputation')
    [Commented Dec 12, 2013 at 16:15](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment30728285_4960020)
-   34
    This code not good because, does not work with any number. @Francisc code is the correct.
    – [Lion King](https://stackoverflow.com/users/459943/lion-king '33,505 reputation')
    [Commented Dec 22, 2013 at 14:39](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment31059211_4960020)

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **24** more comments](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

494

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/24152886/timeline)

Show activity on this post.

# [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

Returns an [Integer Random Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive) between min (**included**) and max (**included**):

```javascript
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

Returns [Any Random Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_number_between_two_values) between min (**included**) and max (**not included**):

```javascript
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
```

Useful Examples (Integers):

```javascript
// 0 -> 10
const rand1 = Math.floor(Math.random() * 11);

// 1 -> 10
const rand2 = Math.floor(Math.random() * 10) + 1;

// 5 -> 20
const rand3 = Math.floor(Math.random() * 16) + 5;

// -10 -> (-2)
const rand4 = Math.floor(Math.random() * 9) - 10;

console.log(rand1);
console.log(rand2);
console.log(rand3);
console.log(rand4);
```

Run code snippetHide results

Expand snippet

\*\* And always nice to be reminded (Mozilla):

> Math.random() does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely, the window.crypto.getRandomValues() method.

[Share](https://stackoverflow.com/a/24152886/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/24152886/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Jan 15 at 17:20](https://stackoverflow.com/posts/24152886/revisions 'show all edits to this post')

answered Jun 11, 2014 at 0:23

[

![Lior Elrom's user avatar](https://www.gravatar.com/avatar/b8c102255c21301dfce3dd9765fa4072?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1843451/lior-elrom)

[Lior Elrom](https://stackoverflow.com/users/1843451/lior-elrom)Lior Elrom

20.5k1616 gold badges8181 silver badges9393 bronze badges

7

-   2
    I trust this answer. Can anyone give a link or clear explanation of why this works? Perhaps an example of how Math.round would give a bias, and why that means we have to use this rather complex-seeming formula?
    – [Robin Andrews](https://stackoverflow.com/users/3042018/robin-andrews '3,714 reputation')
    [Commented Oct 11, 2016 at 9:05](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment67226713_24152886)
-   11
    @alikuli For a range of `[1,2]`, there is 25% chance `Math.random()` would give you a number from one of these `[0,0.49]`, `[0.5,0.99]`, `[1,1.49]`, `[1.5,1.99]`. Rounding those intervals would result in 0, 1, 1, 2 which is not an even distribution. Flooring them results in 0, 0, 1, 1.
    – [pishpish](https://stackoverflow.com/users/2227168/pishpish '2,604 reputation')
    [Commented Mar 30, 2017 at 22:24](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment73337350_24152886)
-   1
    @shuji This _is_, among others, the correct answer. I just wanted to clarify why using `Math.round` over `Math.floor` would give different results.
    – [pishpish](https://stackoverflow.com/users/2227168/pishpish '2,604 reputation')
    [Commented Nov 20, 2017 at 13:23](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment81739029_24152886)

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **4** more comments](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

Report this ad

This answer is useful

114

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/43183804/timeline)

Show activity on this post.

**TL;DR**

```javascript
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
```

To get the random number `generateRandomInteger(-20, 20);`

**EXPLANATION BELOW**

`integer - A number which is not a fraction; a whole number`

We need to get a random number , say **X** between min and max. `X, min and max are all integers`

i.e **min <= X <= max**

If we subtract min from the equation, this is equivalent to

**0 <= (X - min) <= (max - min)**

Now, lets multiply this with a random number **r** which is

**0 <= (X - min) \* r <= (max - min) \* r**

Now, lets add back **min** to the equation

**min <= min + (X - min) \* r <= min + (max - min) \* r**

For, any given **X**, the above equation satisfies only when **r** has range of **\[0,1\]** For any other values of **r** the above equation is unsatisfied.

[Learn more about ranges \[x,y\] or (x,y) here](https://stackoverflow.com/questions/4396290/what-does-this-square-bracket-and-parenthesis-bracket-notation-mean-first1-last)

Our next step is to find a function which always results in a value which has a range of \[0,1\]

Now, the range of **r** i.e \[0,1\] is very similar to Math.random() function in Javascript. Isn't it?

> The Math.random() function returns a floating-point, pseudo-random number in the range \[0, 1); that is, from 0 (inclusive) up to but not including 1 (exclusive)

# Random Function using Math.random() 0 <= r < 1

Notice that in Math.random() left bound is inclusive and the right bound is exclusive. This means `min + (max - min) * r` will evaluate to having a range from `[min, max)`

To include our right bound i.e `[min,max]` we increase the right bound by 1 and floor the result.

```javascript
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
```

# To get the random number

`generateRandomInteger(-20, 20)`;

[Share](https://stackoverflow.com/a/43183804/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/43183804/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited May 15, 2022 at 6:31](https://stackoverflow.com/posts/43183804/revisions 'show all edits to this post')

answered Apr 3, 2017 at 11:45

[

![Faiz Mohamed Haneef's user avatar](https://i.sstatic.net/1PEr4.png?s=64)

](https://stackoverflow.com/users/2392596/faiz-mohamed-haneef)

[Faiz Mohamed Haneef](https://stackoverflow.com/users/2392596/faiz-mohamed-haneef)Faiz Mohamed Haneef

3,55844 gold badges3232 silver badges4242 bronze badges

0

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

103

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/8063367/timeline)

Show activity on this post.

Other solutions:

-   `(Math.random() * 6 | 0) + 1`
-   `~~(Math.random() * 6) + 1`

[**Try online**](https://code.labstack.com/xObK_c4M)

[Share](https://stackoverflow.com/a/8063367/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/8063367/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Oct 3, 2019 at 3:58](https://stackoverflow.com/posts/8063367/revisions 'show all edits to this post')

answered Nov 9, 2011 at 10:08

[

![Vishal's user avatar](https://i.sstatic.net/NMUlT.png?s=64)

](https://stackoverflow.com/users/197473/vishal)

[Vishal](https://stackoverflow.com/users/197473/vishal)Vishal

20.5k2323 gold badges8181 silver badges9595 bronze badges

8

-   8
    would you mind explaining (or giving references to) the ~~ sintaxis? I haven't seen it before! Elegant solution but hard to understand.
    – [DiegoDD](https://stackoverflow.com/users/1385198/diegodd '1,665 reputation')
    [Commented May 31, 2013 at 22:49](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment24330200_8063367)
-   37
    [Double Tilde](http://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript) `~~a` and [Bitwise OR](http://stackoverflow.com/questions/7487977/using-bitwise-or-0-to-floor-a-number) (a | 0) are faster ways to write Math.floor(a)
    – [edi9999](https://stackoverflow.com/users/1993501/edi9999 '20,290 reputation')
    [Commented Jul 18, 2013 at 15:39](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment25841632_8063367)
-   8
    `a | 0` is also the fastest and most optimized way to convert a string to an integer. It only works with strings containing integers (`"444"` and `"-444"`), i.e. no floats/fractions. It yields a `0` for everything that fails. It is one of the main optimizations behind asm.js.
    – [pilau](https://stackoverflow.com/users/1049693/pilau '6,683 reputation')
    [Commented Nov 21, 2014 at 7:35](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment42628403_8063367)
-   2
    @edi9999 faster to write, but faster to execute as well?
    – [cvsguimaraes](https://stackoverflow.com/users/741981/cvsguimaraes '13,120 reputation')
    [Commented Sep 26, 2015 at 18:49](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment53438767_8063367)
-   4
    Note: if you are working with some really large numbers the double tilde is not going to work. Try `~~(Math.random() * (50000000000000 - 0 + 1)) + 0` and `Math.floor(Math.random() * (50000000000000 - 0 + 1)) + 0`
    – [BrunoLM](https://stackoverflow.com/users/340760/brunolm '99,526 reputation')
    [Commented May 25, 2016 at 23:50](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment62400496_8063367)

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **3** more comments](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

34

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/26172212/timeline)

Show activity on this post.

Or, in [Underscore](http://underscorejs.org/#random)

```javascript
_.random(min, max);
```

[Share](https://stackoverflow.com/a/26172212/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/26172212/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Oct 3, 2014 at 1:52

[

![vladiim's user avatar](https://www.gravatar.com/avatar/91e966a93e5fdc80a1e6781e3e80ecde?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/688791/vladiim)

[vladiim](https://stackoverflow.com/users/688791/vladiim)vladiim

1,94022 gold badges2121 silver badges2828 bronze badges

0

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

27

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/4960039/timeline)

Show activity on this post.

```javascript
var x = 6; // can be any number
var rand = Math.floor(Math.random() * x) + 1;
```

[Share](https://stackoverflow.com/a/4960039/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/4960039/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Dec 4, 2012 at 12:37](https://stackoverflow.com/posts/4960039/revisions 'show all edits to this post')

[

![Andy's user avatar](https://i.sstatic.net/OdKGx.png?s=64)

](https://stackoverflow.com/users/1538100/andy)

[Andy](https://stackoverflow.com/users/1538100/andy)

14.5k33 gold badges5353 silver badges7676 bronze badges

answered Feb 10, 2011 at 16:46

[

![ryebr3ad's user avatar](https://www.gravatar.com/avatar/0b4bc1f7c8f2c30dc65b083b9b099de3?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/545343/ryebr3ad)

[ryebr3ad](https://stackoverflow.com/users/545343/ryebr3ad)ryebr3ad

1,23833 gold badges1212 silver badges2020 bronze badges

0

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

27

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/41843444/timeline)

Show activity on this post.

jsfiddle: [https://jsfiddle.net/cyGwf/477/](https://jsfiddle.net/cyGwf/477/)

**Random Integer**: to get a random integer between `min` and `max`, use the following code

```javascript
function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
```

**Random Floating Point Number**: to get a random floating point number between `min` and `max`, use the following code

```javascript
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
```

Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[Share](https://stackoverflow.com/a/41843444/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/41843444/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Jan 25, 2017 at 4:38](https://stackoverflow.com/posts/41843444/revisions 'show all edits to this post')

answered Jan 25, 2017 at 4:33

[

![Razan Paul's user avatar](https://www.gravatar.com/avatar/f9138359a769ece65ff834240225a533?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1037073/razan-paul)

[Razan Paul](https://stackoverflow.com/users/1037073/razan-paul)Razan Paul

13.8k33 gold badges7171 silver badges6161 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

23

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/69839611/timeline)

Show activity on this post.

Get a random integer between **0** and **400**

```javascript
let rand = Math.round(Math.random() * 400);

document.write(rand);
```

Run code snippetHide results

Expand snippet

Get a random integer between **200** and **1500**

```javascript
let range = { min: 200, max: 1500 };
let delta = range.max - range.min;

const rand = Math.round(range.min + Math.random() * delta);

document.write(rand);
```

Run code snippetHide results

Expand snippet

## Using functions

Show code snippet

```javascript
function randBetween(min, max) {
    let delta = max - min;
    return Math.round(min + Math.random() * delta);
}

document.write(randBetween(10, 15));
```

Run code snippetHide results

Expand snippet

Show code snippet

```javascript
// JavaScript ES6 arrow function

const randBetween = (min, max) => {
    let delta = max - min;
    return Math.round(min + Math.random() * delta);
};

document.write(randBetween(10, 20));
```

Run code snippetHide results

Expand snippet

[Share](https://stackoverflow.com/a/69839611/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/69839611/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Mar 17, 2022 at 6:45](https://stackoverflow.com/posts/69839611/revisions 'show all edits to this post')

answered Nov 4, 2021 at 12:57

[

![Gass's user avatar](https://i.sstatic.net/IRJ8i.png?s=64)

](https://stackoverflow.com/users/14895985/gass)

[Gass](https://stackoverflow.com/users/14895985/gass)Gass

8,79033 gold badges4444 silver badges4949 bronze badges

2

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **2** more comments](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

18

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/15535002/timeline)

Show activity on this post.

Math is not my strong point, but I've been working on a project where I needed to generate a lot of random numbers between both positive and negative.

```javascript
function randomBetween(min, max) {
    if (min < 0) {
        return min + Math.random() * (Math.abs(min) + max);
    } else {
        return min + Math.random() * max;
    }
}
```

E.g

```javascript
randomBetween(-10, 15); //or..
randomBetween(10, 20); //or...
randomBetween(-200, -100);
```

Of course, you can also add some validation to make sure you don't do this with anything other than numbers. Also make sure that min is always less than or equal to max.

[Share](https://stackoverflow.com/a/15535002/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/15535002/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Mar 20, 2013 at 21:23

[

![Petter Thowsen's user avatar](https://www.gravatar.com/avatar/5bff8a9e5c8fb2a6fc8adcf3c982462a?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1303805/petter-thowsen)

[Petter Thowsen](https://stackoverflow.com/users/1303805/petter-thowsen)Petter Thowsen

1,70711 gold badge1919 silver badges2424 bronze badges

1

-   5
    This is simply wrong. `min + Math.random() * max` will give you numbers between min and min+max, which is not what you want. The first branch of the `if` is correct, but could be simplified to say `return min + Math.random() * (max - min)`, which is the correct solution regardless of whether min is positive or negative (see the other answers). Also, keep in mind that you still need to floor the result if you don't want fractions.
    – [Avish](https://stackoverflow.com/users/119694/avish '4,616 reputation')
    [Commented May 23, 2013 at 16:09](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment24070344_15535002)

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

14

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/65556422/timeline)

Show activity on this post.

ES6 / Arrow functions version based on Francis' code (i.e. the top answer):

```javascript
const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
```

[Share](https://stackoverflow.com/a/65556422/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/65556422/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Jan 4, 2021 at 0:40

[

![The Onin's user avatar](https://lh6.googleusercontent.com/-rnH7hGp9TYg/AAAAAAAAAAI/AAAAAAAAAIE/uDjMKaUk4b0/photo.jpg?sz=64)

](https://stackoverflow.com/users/1325575/the-onin)

[The Onin](https://stackoverflow.com/users/1325575/the-onin)The Onin

5,52322 gold badges3939 silver badges5656 bronze badges

0

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

13

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/30156190/timeline)

Show activity on this post.

I wrote more flexible function which can give you random number but not only integer.

```javascript
function rand(min, max, interval) {
    if (typeof interval === 'undefined') interval = 1;
    var r = Math.floor((Math.random() * (max - min + interval)) / interval);
    return r * interval + min;
}

var a = rand(0, 10); //can be 0, 1, 2 (...) 9, 10
var b = rand(4, 6, 0.1); //can be 4.0, 4.1, 4.2 (...) 5.9, 6.0
```

Fixed version.

[Share](https://stackoverflow.com/a/30156190/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/30156190/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Sep 14, 2015 at 10:38](https://stackoverflow.com/posts/30156190/revisions 'show all edits to this post')

answered May 10, 2015 at 20:14

[

![ElChupacabra's user avatar](https://graph.facebook.com/100003565809760/picture?type=large)

](https://stackoverflow.com/users/3740227/elchupacabra)

[ElChupacabra](https://stackoverflow.com/users/3740227/elchupacabra)ElChupacabra

1,0811111 silver badges1818 bronze badges

4

-   1
    Of course it works with zero as min value. Did you try? There is no reason why it might not work. It won't work with 0 as interval which isn't strange (interval = 0?...).
    – [ElChupacabra](https://stackoverflow.com/users/3740227/elchupacabra '1,081 reputation')
    [Commented Sep 14, 2015 at 10:01](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment52979256_30156190)

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **3** more comments](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

11

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/36528033/timeline)

Show activity on this post.

`Math.random()` is fast and suitable for many purposes, but it's not appropriate if you need cryptographically-secure values (it's not secure), or if you need integers from a completely uniform unbiased distribution (the multiplication approach used in others answers produces certain values slightly more often than others).

In such cases, we can use `crypto.getRandomValues()` to generate secure integers, and reject any generated values that we can't map uniformly into the target range. This will be slower, but it shouldn't be significant unless you're generating extremely large numbers of values.

To clarify the biased distribution concern, consider the case where we want to generate a value between 1 and 5, but we have a random number generator that produces values between 1 and 16 (a 4-bit value). We want to have the same number of generated values mapping to each output value, but 16 does not evenly divide by 5: it leaves a remainder of 1. So we need to reject 1 of the possible generated values, and only continue when we get one of the 15 lesser values that can be uniformly mapped into our target range. Our behaviour could look like this pseudocode:

```
Generate a 4-bit integer in the range 1-16.
If we generated  1,  6, or 11 then output 1.
If we generated  2,  7, or 12 then output 2.
If we generated  3,  8, or 13 then output 3.
If we generated  4,  9, or 14 then output 4.
If we generated  5, 10, or 15 then output 5.
If we generated 16 then reject it and try again.
```

The following code uses similar logic, but generates a 32-bit integer instead, because that's the largest common integer size that can be represented by JavaScript's standard `number` type. (This could be modified to use `BigInt`s if you need a larger range.) Regardless of the chosen range, the fraction of generated values that are rejected will always be less than 0.5, so the expected number of rejections will always be less than 1.0 and usually close to 0.0; you don't need to worry about it looping forever.

```javascript
const randomInteger = (min, max) => {
    const range = max - min;
    const maxGeneratedValue = 0xffffffff;
    const possibleResultValues = range + 1;
    const possibleGeneratedValues = maxGeneratedValue + 1;
    const remainder = possibleGeneratedValues % possibleResultValues;
    const maxUnbiased = maxGeneratedValue - remainder;

    if (
        !Number.isInteger(min) ||
        !Number.isInteger(max) ||
        max > Number.MAX_SAFE_INTEGER ||
        min < Number.MIN_SAFE_INTEGER
    ) {
        throw new Error('Arguments must be safe integers.');
    } else if (range > maxGeneratedValue) {
        throw new Error(
            `Range of ${range} (from ${min} to ${max}) > ${maxGeneratedValue}.`
        );
    } else if (max < min) {
        throw new Error(`max (${max}) must be >= min (${min}).`);
    } else if (min === max) {
        return min;
    }

    let generated;
    do {
        generated = crypto.getRandomValues(new Uint32Array(1))[0];
    } while (generated > maxUnbiased);

    return min + (generated % possibleResultValues);
};

console.log(randomInteger(-8, 8)); // -2
console.log(randomInteger(0, 0)); // 0
console.log(randomInteger(0, 0xffffffff)); // 944450079
console.log(randomInteger(-1, 0xffffffff));
// Error: Range of 4294967296 covering -1 to 4294967295 is > 4294967295.
console.log(new Array(12).fill().map((n) => randomInteger(8, 12)));
// [11, 8, 8, 11, 10, 8, 8, 12, 12, 12, 9, 9]
```

Run code snippetHide results

Expand snippet

[Share](https://stackoverflow.com/a/36528033/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/36528033/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Apr 7, 2019 at 2:03](https://stackoverflow.com/posts/36528033/revisions 'show all edits to this post')

answered Apr 10, 2016 at 9:26

[

![Jeremy's user avatar](https://i.sstatic.net/FFE8V.gif?s=64)

](https://stackoverflow.com/users/1114/jeremy)

[Jeremy](https://stackoverflow.com/users/1114/jeremy)Jeremy

1

2

-   2
    @2xSamurai There, I updated the answer to explain why you might need this and how it works. Is that better? :P
    – [Jeremy](https://stackoverflow.com/users/1114/jeremy '1 reputation')
    [Commented Apr 5, 2019 at 19:38](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment97787845_36528033)
-   2
    It's not an overkill at all if you want cryptographically secure and uniformly distributed random numbers. Generating random numbers that meet those requirements is hard. Great answer, @JeremyBanks.
    – [thomaskonrad](https://stackoverflow.com/users/1476821/thomaskonrad '665 reputation')
    [Commented Dec 25, 2019 at 10:25](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment105132107_36528033)

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

11

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/66083436/timeline)

Show activity on this post.

## The top rated solution is not mathematically correct as same as comments under it -> `Math.floor(Math.random() * 6) + 1`.

**Task:** _generate random number between 1 and 6._

`Math.random()` returns floating point number between 0 and 1 (like 0.344717274374 or 0.99341293123 for example), which we will use as a percentage, so `Math.floor(Math.random() * 6) + 1` returns some percentage of **6** (max: 5, min: 0) and adds **1**. **The author got lucky that lower bound was 1.**, because percentage floor will "maximumly" return 5 which is less than 6 by 1, and that 1 will be added by lower bound 1.

The problems occurs when lower bound is greater than 1. For instance, **Task:** _generate random between 2 and 6_.

_(following author's logic)_ `Math.floor(Math.random() * 6) + 2`, it is obviously seen that if we get 5 here -> `Math.random() * 6` and then add 2, the outcome will be 7 which goes beyond the desired boundary of 6.

Another example, **Task:** _generate random between 10 and 12_.

## _(following author's logic)_ `Math.floor(Math.random() * 12) + 10`, (sorry for repeating) it is obvious that we are getting 0%-99% percent of number **"12"**, which will go way beyond desired boundary of 12.

So, the correct logic is to take the difference between **lower bound** and **upper bound** add **1**, and only then floor it (to substract 1, because `Math.random()` returns 0 - 0.99, so no way to get full upper bound, thats why we adding 1 to upper bound to get maximumly 99% of (upper bound + 1) and then we floor it to get rid of excess). Once we got the floored percentage of (difference + 1), we can add lower boundary to get the desired randomed number between 2 numbers.

The logic formula for that will be: `Math.floor(Math.random() * ((up_boundary - low_boundary) + 1)) + 10`.

P.s.: Even comments under the top-rated answer were incorrect, since people forgot to add **1** to the **difference**, meaning that they will never get the up boundary _(yes it might be a case if they dont want to get it at all, but the requirenment was to include the upper boundary)_.

[Share](https://stackoverflow.com/a/66083436/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/66083436/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Feb 7, 2021 at 0:34

[

![Dan's user avatar](https://i.sstatic.net/rVCxv.jpg?s=64)

](https://stackoverflow.com/users/11704057/dan)

[Dan](https://stackoverflow.com/users/11704057/dan)Dan

58555 silver badges1111 bronze badges

1

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **1** more comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

10

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/36958382/timeline)

Show activity on this post.

Example

Return a random number between 1 and 10:

```javascript
Math.floor(Math.random() * 10 + 1);
```

The result could be: `3`

Try yourself: [here](http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random2)

\--

or using lodash / undescore:

`_.random(min, max)`

Docs: - [lodash](https://lodash.com/docs#random) - [undescore](http://underscorejs.org/#random)

[Share](https://stackoverflow.com/a/36958382/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/36958382/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Dec 13, 2016 at 20:20](https://stackoverflow.com/posts/36958382/revisions 'show all edits to this post')

[

![Seth's user avatar](https://www.gravatar.com/avatar/6d25f036774c988f92c5acc6a629fbf9?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1842294/seth)

[Seth](https://stackoverflow.com/users/1842294/seth)

10.4k1010 gold badges4747 silver badges6969 bronze badges

answered Apr 30, 2016 at 18:05

[

![Sebastián Lara's user avatar](https://i.sstatic.net/5DzVQ.jpg?s=64)

](https://stackoverflow.com/users/4440327/sebasti%c3%a1n-lara)

[Sebastián Lara](https://stackoverflow.com/users/4440327/sebasti%c3%a1n-lara)Sebastián Lara

5,50122 gold badges2929 silver badges2121 bronze badges

2

-   1
    so you need 9 or 10 right? If yes: const randomNumber = Math.floor((Math.random() \* 10) + 1) const nineOrTen = randomNumber % 2 === 0 ? 9 : 10
    – [Sebastián Lara](https://stackoverflow.com/users/4440327/sebasti%c3%a1n-lara '5,501 reputation')
    [Commented Aug 2, 2018 at 14:20](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment90275434_36958382)

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **1** more comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

9

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/25711127/timeline)

Show activity on this post.

I was searching random number generator written in TypeScript and I have written this after reading all of the answers, hope It would work for TypeScript coders.

```javascript
    Rand(min: number, max: number): number {
        return (Math.random() * (max - min + 1) | 0) + min;
    }
```

[Share](https://stackoverflow.com/a/25711127/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/25711127/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Sep 7, 2014 at 14:14

[

![Erdi İzgi's user avatar](https://www.gravatar.com/avatar/6d2132470c661ad9b71aba6c32c64dd1?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/3102871/erdi-%c4%b0zgi)

[Erdi İzgi](https://stackoverflow.com/users/3102871/erdi-%c4%b0zgi)Erdi İzgi

1,30222 gold badges1515 silver badges3535 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

9

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/57954429/timeline)

Show activity on this post.

# Crypto-strong

[Crypto-strong](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) random integer number in range \[a,b\] (assumption: a < b )

```javascript
let rand = (a, b) =>
    (a +
        ((b - a + 1) * crypto.getRandomValues(new Uint32Array(1))[0]) /
            2 ** 32) |
    0;

console.log(rand(1, 6));
```

Run code snippetHide results

Expand snippet

[Share](https://stackoverflow.com/a/57954429/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/57954429/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Aug 11, 2023 at 10:47](https://stackoverflow.com/posts/57954429/revisions 'show all edits to this post')

answered Sep 16, 2019 at 9:58

[

![Kamil Kiełczewski's user avatar](https://i.sstatic.net/WfG1n.jpg?s=64)

](https://stackoverflow.com/users/860099/kamil-kie%c5%82czewski)

[Kamil Kiełczewski](https://stackoverflow.com/users/860099/kamil-kie%c5%82czewski)Kamil Kiełczewski

89.9k3131 gold badges382382 silver badges359359 bronze badges

2

-   1
    That's a neat utilization of the crypto api - thumbs up! But I'm curious why you use `2**32` instead of `2**31` which would be the maximum value JS 32 bit integer.
    – [Hexodus](https://stackoverflow.com/users/1600193/hexodus '12,777 reputation')
    [Commented Oct 2, 2022 at 11:28](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment130529770_57954429)
-   2
    @Hexodus as far I know, JS not have "32bit integers" (type in console 2\*\*32 - and js will show proper int value) - more [here](https://stackoverflow.com/a/307200/860099). We also have Uint32array -which means Unsigned Integer 32bit array)
    – [Kamil Kiełczewski](https://stackoverflow.com/users/860099/kamil-kie%c5%82czewski '89,931 reputation')
    [Commented Oct 2, 2022 at 19:33](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment130535689_57954429)

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

8

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/41658212/timeline)

Show activity on this post.

Inspite of many answers and almost same result. I would like to add my answer and explain its working. Because it is important to understand its working rather than copy pasting one line code. Generating random numbers is nothing but simple maths.

CODE:

```javascript
function getR(lower, upper) {
    var percent = Math.random() * 100;
    // this will return number between 0-99 because Math.random returns decimal number from 0-0.9929292 something like that
    //now you have a percentage, use it find out the number between your INTERVAL :upper-lower
    var num = (percent * (upper - lower)) / 100;
    //num will now have a number that falls in your INTERVAL simple maths
    num += lower;
    //add lower to make it fall in your INTERVAL
    //but num is still in decimal
    //use Math.floor>downward to its nearest integer you won't get upper value ever
    //use Math.ceil>upward to its nearest integer upper value is possible
    //Math.round>to its nearest integer 2.4>2 2.5>3   both lower and upper value possible
    console.log(Math.floor(num), Math.ceil(num), Math.round(num));
}
```

[Share](https://stackoverflow.com/a/41658212/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/41658212/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Jan 15, 2017 at 5:44

[

![Arun Sharma's user avatar](https://i.sstatic.net/qsOTj.jpg?s=64)

](https://stackoverflow.com/users/2396488/arun-sharma)

[Arun Sharma](https://stackoverflow.com/users/2396488/arun-sharma)Arun Sharma

51799 silver badges1717 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

6

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/58166865/timeline)

Show activity on this post.

to return 1-6 like a dice basically,

```javascript
return Math.round(Math.random() * 5 + 1);
```

[Share](https://stackoverflow.com/a/58166865/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/58166865/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited May 31, 2020 at 6:51](https://stackoverflow.com/posts/58166865/revisions 'show all edits to this post')

[

![shA.t's user avatar](https://i.sstatic.net/MBHID.png?s=64)

](https://stackoverflow.com/users/4519059/sha-t)

[shA.t](https://stackoverflow.com/users/4519059/sha-t)

16.8k55 gold badges5757 silver badges118118 bronze badges

answered Sep 30, 2019 at 11:20

[

![Husky931's user avatar](https://www.gravatar.com/avatar/67310382e1dc9cab221f04832f618a14?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/12098632/husky931)

[Husky931](https://stackoverflow.com/users/12098632/husky931)Husky931

67666 silver badges1111 bronze badges

1

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **1** more comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

6

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/63605936/timeline)

Show activity on this post.

This function can generate a random integer number between (and including) min and max numbers:

```javascript
function randomNumber(min, max) {
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }

    if (min <= 0) {
        return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
```

Example:

```javascript
randomNumber(-2, 3); // can be -2, -1, 0, 1, 2 and 3
randomNumber(-5, -2); // can be -5, -4, -3 and -2
randomNumber(0, 4); // can be 0, 1, 2, 3 and 4
randomNumber(4, 0); // can be 0, 1, 2, 3 and 4
```

[Share](https://stackoverflow.com/a/63605936/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/63605936/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Jan 3, 2021 at 1:44](https://stackoverflow.com/posts/63605936/revisions 'show all edits to this post')

answered Aug 26, 2020 at 21:23

[

![Rayron Victor's user avatar](https://www.gravatar.com/avatar/2b892abe621eadab81b24f30b2834ee2?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1296336/rayron-victor)

[Rayron Victor](https://stackoverflow.com/users/1296336/rayron-victor)Rayron Victor

2,41811 gold badge2626 silver badges2525 bronze badges

4

-   1
    I think your answer is good in "theory" but it would be much better if you could clearly state in your answer if max = 6 would "include" the possibility of 6 or not, and if min = 1 would "include" the possibility of 1? This can be read very ambiguously, and might confuse people. Is it "max 6 - including 6" or "max 6 - not including 6"... Same for "min".
    – [mesqueeb](https://stackoverflow.com/users/2697506/mesqueeb '5,948 reputation')
    [Commented Sep 18, 2020 at 4:53](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#comment113083071_63605936)

[](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') |  [Show **3** more comments](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

5

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/73167133/timeline)

Show activity on this post.

**Short Answer:** It's achievable using a simple array.

you can alternate within **array elements**.

This solution works even if your values **are not consecutive**. Values `don't even have to be a number.`

```javascript
let array = [1, 2, 3, 4, 5, 6];
const randomValue = array[Math.floor(Math.random() * array.length)];
```

[Share](https://stackoverflow.com/a/73167133/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/73167133/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Jul 29, 2022 at 12:57

[

![Muluken Getachew's user avatar](https://i.sstatic.net/8D5QV.jpg?s=64)

](https://stackoverflow.com/users/14529454/muluken-getachew)

[Muluken Getachew](https://stackoverflow.com/users/14529454/muluken-getachew)Muluken Getachew

96388 silver badges88 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

5

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/74636954/timeline)

Show activity on this post.

**This simple function** is handy and **works in ANY cases** (fully tested). Also, the distribution of the results has been fully tested and is 100% correct.

```javascript
function randomInteger(pMin = 1, pMax = 1_000_000_000) {
    //Author: Axel Gauffre.
    //Here: https://stackoverflow.com/a/74636954/5171000
    //Inspired by: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
    //
    //This function RETURNS A RANDOM INTEGER between pMin (INCLUDED) and pMax (INCLUDED).
    //  - pMin and pMax should be integers.
    //  - HOWEVER, if pMin and/or pMax are FLOATS, they will be ROUNDED to the NEAREST integer.
    //  - NEGATIVE values ARE supported.
    //  - The ORDER of the 2 arguments has NO consequence: If pMin > pMax, then pMin and pMax will simply be SWAPPED.
    //  - If pMin is omitted, it will DEFAULT TO 1.
    //  - If pMax is omitted, it will DEFAULT TO 1 BILLION.
    //
    //This function works in ANY cases (fully tested).
    //Also, the distribution of the results has been fully tested and is 100% correct.
    pMin = Math.round(pMin);
    pMax = Math.round(pMax);
    if (pMax < pMin) {
        let t = pMin;
        pMin = pMax;
        pMax = t;
    }
    return Math.floor(Math.random() * (pMax + 1 - pMin) + pMin);
}
```

[Share](https://stackoverflow.com/a/74636954/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/74636954/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Dec 2, 2022 at 19:28](https://stackoverflow.com/posts/74636954/revisions 'show all edits to this post')

answered Dec 1, 2022 at 4:31

[

![Axel's user avatar](https://www.gravatar.com/avatar/2731945bf08dacca7e46075a223cce3e?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/5171000/axel)

[Axel](https://stackoverflow.com/users/5171000/axel)Axel

45244 silver badges1111 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

4

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/54671492/timeline)

Show activity on this post.

Adding `float` with fixed precision version based on the `int` version in @Francisc's answer:

```javascript
function randomFloatFromInterval(min, max, fractionDigits) {
    const fractionMultiplier = Math.pow(10, fractionDigits);
    return (
        Math.round((Math.random() * (max - min) + min) * fractionMultiplier) /
        fractionMultiplier
    );
}
```

so:

```javascript
randomFloatFromInterval(1, 3, 4); // => 2.2679, 1.509, 1.8863, 2.9741, ...
```

and for int answer

```javascript
randomFloatFromInterval(1, 3, 0); // => 1, 2, 3
```

[Share](https://stackoverflow.com/a/54671492/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/54671492/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Feb 13, 2019 at 13:43](https://stackoverflow.com/posts/54671492/revisions 'show all edits to this post')

answered Feb 13, 2019 at 13:34

[

![yonatanmn's user avatar](https://www.gravatar.com/avatar/c5bf31d6626083b45fd79b05aa196ac0?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/4391952/yonatanmn)

[yonatanmn](https://stackoverflow.com/users/4391952/yonatanmn)yonatanmn

1,60011 gold badge1515 silver badges2121 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

4

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/66413792/timeline)

Show activity on this post.

Using random function, which can be reused.

```javascript
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNum(1, 6);
```

[Share](https://stackoverflow.com/a/66413792/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/66413792/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Feb 28, 2021 at 21:02

[

![Okiemute Gold's user avatar](https://i.sstatic.net/x3PRp.jpg?s=64)

](https://stackoverflow.com/users/14235396/okiemute-gold)

[Okiemute Gold](https://stackoverflow.com/users/14235396/okiemute-gold)Okiemute Gold

51833 silver badges1010 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

3

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/57057637/timeline)

Show activity on this post.

This should work:

```javascript
const getRandomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
```

[Share](https://stackoverflow.com/a/57057637/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/57057637/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Jul 16, 2019 at 12:47

[

![Sabbir Ahmed's user avatar](https://www.gravatar.com/avatar/4b9262ee7284556be4c2fe406a297b0e?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/8350980/sabbir-ahmed)

[Sabbir Ahmed](https://stackoverflow.com/users/8350980/sabbir-ahmed)Sabbir Ahmed

1,63422 gold badges1717 silver badges2424 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

3

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/67560350/timeline)

Show activity on this post.

If the starting number is 1, as in your example (1-6), you can use Math.ceil() method instead of Math.floor().

```javascript
Math.ceil(Math.random() * 6);
```

instead of

```javascript
Math.floor(Math.random() * 6) + 1;
```

Let's not forget other useful Math methods.

[Share](https://stackoverflow.com/a/67560350/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/67560350/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered May 16, 2021 at 18:43

[

![maxxx's user avatar](https://www.gravatar.com/avatar/c47c88a178e20c225b605b9c31c8b5ac?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/3546368/maxxx)

[maxxx](https://stackoverflow.com/users/3546368/maxxx)maxxx

68677 silver badges99 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

2

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/59131974/timeline)

Show activity on this post.

This is about nine years late, but [randojs.com](https://randojs.com/) makes this a simple one-liner:

```javascript
rando(1, 6);
```

You just need to add this to the head of your html document, and you can do pretty much whatever you want with randomness easily. Random values from arrays, random jquery elements, random properties from objects, and even preventing repetitions if needed.

```javascript
<script src="https://randojs.com/1.0.0.js"></script>
```

[Share](https://stackoverflow.com/a/59131974/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/59131974/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Dec 2, 2019 at 3:04](https://stackoverflow.com/posts/59131974/revisions 'show all edits to this post')

answered Dec 2, 2019 at 2:39

[

![Aaron Plocharczyk's user avatar](https://i.sstatic.net/M5n7K.jpg?s=64)

](https://stackoverflow.com/users/11653883/aaron-plocharczyk)

[Aaron Plocharczyk](https://stackoverflow.com/users/11653883/aaron-plocharczyk)Aaron Plocharczyk

2,82422 gold badges1010 silver badges1717 bronze badges

0

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

2

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/60147091/timeline)

Show activity on this post.

Try using:

```javascript
function random(min, max) {
    return Math.round(Math.random() * Math.abs(max - min) + min);
}
console.log(random(1, 6));
```

Run code snippetHide results

Expand snippet

[Share](https://stackoverflow.com/a/60147091/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/60147091/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Feb 10, 2020 at 9:14](https://stackoverflow.com/posts/60147091/revisions 'show all edits to this post')

answered Feb 10, 2020 at 9:06

[

![AyushKatiyar's user avatar](https://i.sstatic.net/WwDKT.jpg?s=64)

](https://stackoverflow.com/users/9985388/ayushkatiyar)

[AyushKatiyar](https://stackoverflow.com/users/9985388/ayushkatiyar)AyushKatiyar

1,02099 silver badges1515 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

1

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/57080917/timeline)

Show activity on this post.

I discovered a great new way to do this using ES6 default parameters. It is very nifty since it allows either one argument or two arguments. Here it is:

```javascript
function random(n, b = 0) {
    return Math.random() * (b - n) + n;
}
```

[Share](https://stackoverflow.com/a/57080917/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/57080917/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Jul 17, 2019 at 17:00

[

![maburdi94's user avatar](https://www.gravatar.com/avatar/9ffabbd46c38f89bb7d2cc4ea63a1aad?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/3692644/maburdi94)

[maburdi94](https://stackoverflow.com/users/3692644/maburdi94)maburdi94

4122 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Expand to show all comments on this post')

This answer is useful

1

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/59554089/timeline)

Show activity on this post.

This works for me and produces values like Python's [random.randint](https://docs.python.org/3/library/random.html#random.randint) standard library function:

```javascript
function randint(min, max) {
    return Math.round(Math.random() * Math.abs(max - min) + min);
}

console.log('Random integer: ' + randint(-5, 5));
```

[Share](https://stackoverflow.com/a/59554089/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/59554089/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Jan 1, 2020 at 16:18

[

![gnrfan's user avatar](https://www.gravatar.com/avatar/a413c2580c75641ad7e79c4a2632d60d?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/54187/gnrfan)

[gnrfan](https://stackoverflow.com/users/54187/gnrfan)gnrfan

19.3k11 gold badge2222 silver badges1212 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/65119568/timeline)

Show activity on this post.

for big number.

```javascript
var min_num = 900;
var max_num = 1000;
while (true) {
    let num_random = Math.random() * max_num;
    console.log('input : ' + num_random);
    if (num_random >= min_num) {
        console.log(Math.floor(num_random));
        break;
    } else {
        console.log(':::' + Math.floor(num_random));
    }
}
```

[Share](https://stackoverflow.com/a/65119568/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this answer to receive notifications

answered Dec 3, 2020 at 3:42

[

![Ruthe's user avatar](https://i.sstatic.net/u313K.jpg?s=64)

](https://stackoverflow.com/users/2667525/ruthe)

[Ruthe](https://stackoverflow.com/users/2667525/ruthe)Ruthe

36344 silver badges99 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?page=2&tab=scoredesc# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?page=2&tab=scoredesc# 'Expand to show all comments on this post')

Report this ad

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/73815055/timeline)

Show activity on this post.

If you want to cover **negative and positive** numbers, and make it safe then to use following:

JS solution:

```javascript
function generateRangom(low, up) {
    const u = Math.max(low, up);
    const l = Math.min(low, up);
    const diff = u - l;
    const r = Math.floor(Math.random() * (diff + 1)); //'+1' because Math.random() returns 0..0.99, it does not include 'diff' value, so we do +1, so 'diff + 1' won't be included, but just 'diff' value will be.

    return l + r; //add the random number that was selected within distance between low and up to the lower limit.
}
```

Java solution:

```java
public static int generateRandom(int low, int up) {
        int l = Math.min(low, up);
        int u = Math.max(low, up);
        int diff = u - l;

        int r = (int) Math.floor(Math.random() * (diff + 1)); // '+1' because Math.random() returns 0..0.99, it does not include 'diff' value, so we do +1, so 'diff + 1' won't be included, but just 'diff' value will be.

        return l + r;//add the random number that was selected within distance between low and up to the lower limit.
}
```

[Share](https://stackoverflow.com/a/73815055/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this answer to receive notifications

answered Sep 22, 2022 at 12:57

[

![Dan's user avatar](https://i.sstatic.net/rVCxv.jpg?s=64)

](https://stackoverflow.com/users/11704057/dan)

[Dan](https://stackoverflow.com/users/11704057/dan)Dan

58555 silver badges1111 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?page=2&tab=scoredesc# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?page=2&tab=scoredesc# 'Expand to show all comments on this post')

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/77666576/timeline)

Show activity on this post.

Typescript solution with digits:

```typescript
function getRandomNumber(min: number, max: number, digits = 0): number {
    // 0=1, 2=10, 3=100, 4=1000, ...
    const multiplier = digits >= 1 ? Math.pow(10, digits) : 1;
    const start = min * multiplier;
    const space = (max - min) * multiplier;
    const int = Math.floor(start + Math.random() * (space + 1));
    return int / multiplier;
}
```

Advanced solution with

-   `a, b`(number) — flexible min max parameter
-   `digits`(boolean) — define count of digits
-   `includeAB`(boolean) — define if you want to exclude a and b from results

```typescript
function getRandomNumberAdv(
    a: number,
    b: number,
    digits = 0,
    includeAB = true
): number {
    const multiplier = digits >= 1 ? Math.pow(10, digits) : 1;
    const border = includeAB ? 0 : 1;
    const start = Math.min(a, b) * multiplier + border;
    const space = Math.max(a, b) * multiplier - start - border;
    const int = Math.floor(start + Math.random() * (space + 1));
    return int / multiplier;
}
```

Test of `getRandomNumberAdv( 1, -1, 1, false )`:

```typescript
const statistic: any = {};
for (let i = 0; i < 1000000; i++) {
    const v = getRandomNumberAdv(1, -1, 1, false);
    if (statistic[v] === undefined) statistic[v] = 0;
    statistic[v]++;
}
console.log(JSON.stringify(statistic, null, 2));
```

Results of `getRandomNumberAdv( 1, -1, 1, false )`:

```typescript
{
    "-0.9": 52638,
    "-0.8": 52862,
    "-0.7": 52658,
    "-0.6": 52217,
    "-0.5": 52634,
    "-0.4": 52894,
    "-0.2": 52420,
    "-0.3": 52838,
    "-0.1": 52599,
     "0"  : 52604,
     "0.1": 52615,
     "0.2": 52286,
     "0.3": 52129,
     "0.4": 52495,
     "0.5": 52920,
     "0.6": 52707,
     "0.7": 52855,
     "0.8": 52827,
     "0.9": 52802,
  }
```

[Playground Link](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABFApgZygCgJQC4BucMAJogN4CwAUIohAhohgIawYwS7NgCeiAvOQC+1WsDgAnRJgA2KKIhgDEABgDcixAB5EARhUHDGmAGoT2cqNrX6YRvmUBzeQCVuxOAFsAciE8AjFAkAQWJ8TD0AGkQAWl1o+MRgZhk0FERsK2tFYAiWNlgIAG18AF0BfkFwYhRgGDAUUgt8mHZisv4VLOsWtpLSsysRGjoGODkAOhk4RwiAKQBlAHlvCYwJescYYB48qFZWwuiwEBkZaIAmDMyqIWtqB6pQSFgERGcoNzAPHz9AkLCEWYuBOASC0X8IL+4MQxBgWygaE60XqEBkIBqwQAQvwoBIQOk8KD-pYRrRbIxPKdYAAHGQwILKOEItCIAB8gl0iAA-IgALKsAAWExpcAA7hF9NFmTBERlELg9IhuhSFP5JDUpIJUejMVieaoFUqVQwFCwJApBAKoMLPPVMMxIv4LAAqRBUmS0+mMkyIdUSTUmuxmmnMCDpK1CiaeZgADwdTtd7upMDpDKkMSY+wtsT9GqCQcY9Ut-KjwGmkj2zBzvutwok7i8OBdmDQofDJl0Fgs3Qk8hAEiQxcQAHpk57U96JNRho9UBgcEA)

[Share](https://stackoverflow.com/a/77666576/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this answer to receive notifications

[edited Dec 15, 2023 at 14:05](https://stackoverflow.com/posts/77666576/revisions 'show all edits to this post')

answered Dec 15, 2023 at 13:28

[

![Jan's user avatar](https://www.gravatar.com/avatar/d4aafd1c8a19fd1bfd47d91c28685f46?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/9659204/jan)

[Jan](https://stackoverflow.com/users/9659204/jan)Jan

44966 silver badges1515 bronze badges

[Add a comment](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?page=2&tab=scoredesc# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript?page=2&tab=scoredesc# 'Expand to show all comments on this post')

Report this ad

This answer is useful

\-1

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/78570689/timeline)

Show activity on this post.

```javascript
function random_between(min, max) {
    var a = Number(min);
    var b = Number(max);
    const rndInt = Math.floor(Math.random() * b) + a;
    return rndInt < a || rndInt > b ? random_between(min, max) : rndInt;
}
```

Run code snippetHide results

Expand snippet

[Share](https://stackoverflow.com/a/78570689/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')
