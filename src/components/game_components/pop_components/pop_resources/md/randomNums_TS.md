# [Generate unique random numbers in javascript or typescript](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript)

[Ask Question](https://stackoverflow.com/questions/ask)

Asked 5 years, 3 months ago

Modified [5 years ago](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript?lastactivity '2019-06-29 15:26:33Z')

Viewed 15k times

Report this ad

This question shows research effort; it is useful and clear

5

This question does not show any research effort; it is unclear or not useful

Save this question.

[](https://stackoverflow.com/posts/55490884/timeline)

Show activity on this post.

I need to get unique random number in javascript (or Typescript).

At this moment I use this code:

```typescript
var id = -(new Date().getTime() & 0xffff);
```

It returns me numbers like `-13915` or `-28806` ...

It works most of the time but I am having problems when this code is executed in promises (so nearly multiple times at the same time). Then sometimes I got two identical id.

Is there any solution to get unique random numbers in any case ?

-   [javascript](https://stackoverflow.com/questions/tagged/javascript "show questions tagged 'javascript'")
-   [typescript](https://stackoverflow.com/questions/tagged/typescript "show questions tagged 'typescript'")
-   [random](https://stackoverflow.com/questions/tagged/random "show questions tagged 'random'")

[Share](https://stackoverflow.com/q/55490884/15588573 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/55490884/edit 'Revise and improve this post')

Follow

Follow this question to receive notifications

[edited Jun 29, 2019 at 15:26](https://stackoverflow.com/posts/55490884/revisions 'show all edits to this post')

[

![James A Mohler's user avatar](https://i.sstatic.net/idvMf.png?s=64)

](https://stackoverflow.com/users/1845869/james-a-mohler)

[James A Mohler](https://stackoverflow.com/users/1845869/james-a-mohler)

11.1k1515 gold badges4747 silver badges7373 bronze badges

asked Apr 3, 2019 at 8:49

[

![Bronzato's user avatar](https://www.gravatar.com/avatar/e71609811ad09d2eba439b051790fbc7?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/693560/bronzato)

[Bronzato](https://stackoverflow.com/users/693560/bronzato)Bronzato

9,2643030 gold badges123123 silver badges220220 bronze badges

7

-   This is not C where you have to use time as seed. You can use `Math.random()` (which is probably time-seeded too, but it's way better than your approach)
    – [Christian Vincenzo Traina](https://stackoverflow.com/users/1850851/christian-vincenzo-traina '10,051 reputation')
    [Commented Apr 3, 2019 at 8:53](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript#comment97689419_55490884)
-   Possible duplicate of [Unique (non-repeating) random numbers in O(1)?](https://stackoverflow.com/questions/196017/unique-non-repeating-random-numbers-in-o1)
    – [VLAZ](https://stackoverflow.com/users/3689450/vlaz '27,962 reputation')
    [Commented Apr 3, 2019 at 8:55](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript#comment97689473_55490884)
-   Also relevant: [stackoverflow.com/questions/2380019/…](https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100 'generate unique random numbers between 1 and 100') althought the accepted answer is not the best.
    – [VLAZ](https://stackoverflow.com/users/3689450/vlaz '27,962 reputation')
    [Commented Apr 3, 2019 at 8:56](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript#comment97689519_55490884)
-   @CristianTraìna `Math.random()` is not guaranteed to give you unique numbers. I really don't know why this needs to be repeated so many times...
    – [VLAZ](https://stackoverflow.com/users/3689450/vlaz '27,962 reputation')
    [Commented Apr 3, 2019 at 8:57](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript#comment97689559_55490884)
-   This will deal with uniqueness [Create GUID / UUID in JavaScript?](https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript), then you can transform it to a number if you need another format, but I think the uniqueness spirit should come from overthere ;)
    – [sjahan](https://stackoverflow.com/users/5860648/sjahan '5,890 reputation')
    [Commented Apr 3, 2019 at 9:02](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript#comment97689773_55490884)

[](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.') |  [Show **2** more comments](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript# 'Expand to show all comments on this post')

## 5 Answers 5

Sorted by: [Reset to default](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript?answertab=scoredesc#tab-top)

Highest score (default) Trending (recent votes count more) Date modified (newest first) Date created (oldest first)

This answer is useful

5

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/55490966/timeline)

Show activity on this post.

There are many examples around internet. You can start with using `Math.random()` . For example: generate random number between 1 and 100

```typescript
Math.floor(Math.random() * 100 + 1);
```

Just keep in mind that it is not truly random; **it is not cryptographically secure**. You should probably look into libraries if you need that

[Share](https://stackoverflow.com/a/55490966/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/55490966/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Apr 3, 2019 at 8:53

[

![Mr Shumar's user avatar](https://www.gravatar.com/avatar/306d1051c102f62db8a5386502ef9619?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/11085316/mr-shumar)

[Mr Shumar](https://stackoverflow.com/users/11085316/mr-shumar)Mr Shumar

26111 silver badge44 bronze badges

0

[Add a comment](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript# 'Expand to show all comments on this post')

Report this ad

This answer is useful

1

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/55491252/timeline)

Show activity on this post.

Create a function that returns a unique number:

```typescript
let numbers = [];

const uniqueNumber = (maxVal) => {
    const number = Math.floor(Math.random() * maxVal + 1);
    if (!numbers.includes(number)) {
        numbers.push(number);
        return number;
    } else if (numbers.length - 1 !== maxVal) {
        uniqueNumber(maxVal);
    }
};

const randomNumber = uniqueNumber(100);
console.log(numbers); // returns all unique numbers
```

This will return a unqiue number between 1 and 100. It also stops at the max length.

[Share](https://stackoverflow.com/a/55491252/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/55491252/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Apr 3, 2019 at 9:06

[

![Dennis Spierenburg's user avatar](https://graph.facebook.com/1115196405274813/picture?type=large)

](https://stackoverflow.com/users/7666454/dennis-spierenburg)

[Dennis Spierenburg](https://stackoverflow.com/users/7666454/dennis-spierenburg)Dennis Spierenburg

62322 gold badges66 silver badges1616 bronze badges

[Add a comment](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript# 'Expand to show all comments on this post')

This answer is useful

1

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/55496544/timeline)

Show activity on this post.

You can use the package [uuid](https://www.npmjs.com/package/uuid):

```typescript
const uuidv4 = require('uuid/v4');
uuidv4(); // ⇨ '10ba038e-48da-487b-96e8-8d3b99b6d18a'
```

Notice: It is a number (a 128-bit number) but it is too big to be used as a JavaScript number. You have to keep it as a string.

If you need it on the browser, I suggest to generate the identifier from an API exposed on your back-end. Implementations of UUID exist in most of languages. The npm package will work on browsers but then it uses [a fallback to Math.random](https://github.com/kelektiv/node-uuid/issues/173), which is not secure.

See also: [Universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier).

[Share](https://stackoverflow.com/a/55496544/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/55496544/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Apr 3, 2019 at 13:53](https://stackoverflow.com/posts/55496544/revisions 'show all edits to this post')

answered Apr 3, 2019 at 13:36

[

![Paleo's user avatar](https://i.sstatic.net/G3ebq.png?s=64)

](https://stackoverflow.com/users/3786294/paleo)

[Paleo](https://stackoverflow.com/users/3786294/paleo)Paleo

23k44 gold badges7171 silver badges8282 bronze badges

[Add a comment](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/55490884/generate-unique-random-numbers-in-javascript-or-typescript# 'Expand to show all comments on this post')

Report this ad

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/55491277/timeline)

Show activity on this post.

1. Math.random() in itself should be safe enough, what with 64-bit numbers. Even with imperfect generator, the chances of hitting the same number twice are minuscule.
2. If you're after specifically integers, then multiply Math.random() by something BIG, like `Number.MAX_SAFE_INTEGER`.
3. To be perfectly safe, you can always store an array of already used ids, and write a function that draws as long as gets a new unique number, pushes it into array, and returns the value. Enclose all that functionality inside a single object/function/class, to keep it neat.

[Share](https://stackoverflow.com/a/55491277/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/55491277/edit 'Revise and improve this post')

Follow
