# [JavaScript - Generate a random number between 1 and 5, but never the same number twice consecutively](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number)

[Ask Question](https://stackoverflow.com/questions/ask)

Asked 5 years, 9 months ago

Modified [5 years, 1 month ago](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number?lastactivity '2019-05-29 23:11:52Z')

Viewed 6k times

Report this ad

This question shows research effort; it is useful and clear

2

This question does not show any research effort; it is unclear or not useful

Save this question.

[](https://stackoverflow.com/posts/52528059/timeline)

Show activity on this post.

I have some simple code to generate a random number between 1 and 5.  
Depending on what number is pulled, a certain sound file will play. However, how could I prevent this simple program from generating the same number twice in a row consequently making the same audio to play twice?  
For example: a roll of the dice is never the same twice consecutively, meaning you cannot roll a 2 if you just rolled a 2 etc.

I was experimenting with if else statements and kind of backed myself into a corner. I know this may seem like a simple problem but I'm at my wits end on this one.

```javascript
<!DOCTYPE html>
<html>
<body>

  <p>Click the button to display a random number between 1 and 5.</p>

  <button onclick="myFunction()">ROLL DICE</button>

  <p id="demo"></p>

  <script>
    function myFunction() {
      var x = Math.floor((Math.random() * 5) + 1);
      document.getElementById("demo").innerHTML = x;
    }
  </script>
</body>
</html>
```

-   [javascript](https://stackoverflow.com/questions/tagged/javascript "show questions tagged 'javascript'")
-   [if-statement](https://stackoverflow.com/questions/tagged/if-statement "show questions tagged 'if-statement'")
-   [math](https://stackoverflow.com/questions/tagged/math "show questions tagged 'math'")
-   [random](https://stackoverflow.com/questions/tagged/random "show questions tagged 'random'")

[Share](https://stackoverflow.com/q/52528059/15588573 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this question to receive notifications

[edited Sep 27, 2018 at 1:58](https://stackoverflow.com/posts/52528059/revisions 'show all edits to this post')

[

![Kaiido's user avatar](https://i.sstatic.net/iRvKU.png?s=64)

](https://stackoverflow.com/users/3702797/kaiido)

[Kaiido](https://stackoverflow.com/users/3702797/kaiido)

132k1414 gold badges240240 silver badges304304 bronze badges

asked Sep 27, 2018 at 1:15

user9360617user9360617

1

-   just use a variable to store the previous number
    – [Chris Li](https://stackoverflow.com/users/10323164/chris-li '2,661 reputation')
    [Commented Sep 27, 2018 at 1:24](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number#comment91995794_52528059)

[Add a comment](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.')  | [](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Expand to show all comments on this post')

## 7 Answers 7

Sorted by: [Reset to default](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number?answertab=scoredesc#tab-top)

Highest score (default) Trending (recent votes count more) Date modified (newest first) Date created (oldest first)

This answer is useful

1

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/52528120/timeline)

Show activity on this post.

you need to get a new number and compare with the old one, if it's the same one, get a new one and repeat. a little recursuion could help here!

```javascript
let lastNumber; // start with undefined lastNumber

function getRandNumber() {
    var x = Math.floor(Math.random() * 5 + 1); // get new random number

    if (x === lastNumber) {
        // compare with last number
        return getRandNumber(); // if they are the same, call the function again to repeat the process
    }
    return x; // if they're not the same, return it
}
function myFunction() {
    const number = getRandNumber();
    lastNumber = number;
    document.getElementById('demo').innerHTML = number;
}
```

[Share](https://stackoverflow.com/a/52528120/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this answer to receive notifications

answered Sep 27, 2018 at 1:24

[

![Uzi's user avatar](https://www.gravatar.com/avatar/fd520229247697f0c4407cf397042407?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/4543016/uzi)

[Uzi](https://stackoverflow.com/users/4543016/uzi)Uzi

2,5661414 silver badges1414 bronze badges

[Add a comment](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Expand to show all comments on this post')

Report this ad

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/52528182/timeline)

Show activity on this post.

```javascript
var curr = 0;

function myFunction() {
    var x = Math.floor(Math.random() * 5 + 1);

    if (x == curr) {
        myFunction();
    } else {
        curr = x;

        document.getElementById('demo').innerHTML = x;
    }
}
```

This should do it if you don't mind using a global variable.

Demo: [http://jsfiddle.net/jkrb837p/1/](http://jsfiddle.net/jkrb837p/1/)

[Share](https://stackoverflow.com/a/52528182/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this answer to receive notifications

answered Sep 27, 2018 at 1:33

[

![Arshad Ahmad's user avatar](https://www.gravatar.com/avatar/5ea264fbc526a0fb240c7a409ac4c9e9?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/2194586/arshad-ahmad)

[Arshad Ahmad](https://stackoverflow.com/users/2194586/arshad-ahmad)Arshad Ahmad

1

[Add a comment](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Expand to show all comments on this post')

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/52528136/timeline)

Show activity on this post.

How about creating a list to pick from with the last number removed?

```javascript
lastNumber = 0; // Initialize it to a number outside the list so first pick is from full five.
sourceList = [1, 2, 3, 4, 5];

function noRepeatRandom() {
    nextList = sourceList.filter(function (x) {
        return x != lastNumber;
    });
    randomIndex = Math.floor(Math.random() * nextList.length);
    lastNumber = nextList[randomIndex];
    return lastNumber;
}
```

This should pick from the full five for the first call.

[Share](https://stackoverflow.com/a/52528136/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this answer to receive notifications

answered Sep 27, 2018 at 1:27

[

![Joshua R.'s user avatar](https://www.gravatar.com/avatar/d117a6182330066d4771187f93e7e98e?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1306026/joshua-r)

[Joshua R.](https://stackoverflow.com/users/1306026/joshua-r)Joshua R.

2,29211 gold badge1818 silver badges2222 bronze badges

[Add a comment](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Expand to show all comments on this post')

Report this ad

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/52529164/timeline)

Show activity on this post.

Simple math trick to exclude excessive random calls:

In the first time generate random in range 1..5

In the next times call random in range **1..4**, add it to the current value and use modulo operation - to preserve result range 1..5 but exclude current value

[Code](https://ideone.com/Ynbmy8) (note it uses x in range 0..4 but output is shifted by one to simplify math)

```javascript
var s = ""
var x = Math.floor((Math.random() * 5));
for (i = 0; i < 40; i++) {
  s = s + (x + 1) + " "
  x = (x + Math.floor((Math.random() * 4) + 1 )) % 5;
}
print(s)

1 4 3 2 1 5 4 5 2 1 4 2 4 5 1 4 3 1 4 5 2 1 3 5 2 4 5 3 1 5 3 5 4 5 1 5 3 5 4 2
```

[Share](https://stackoverflow.com/a/52529164/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this answer to receive notifications

answered Sep 27, 2018 at 3:49

[

![MBo's user avatar](https://www.gravatar.com/avatar/1e39c2364935265593d76247ddc6d07c?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/844416/mbo)

[MBo](https://stackoverflow.com/users/844416/mbo)MBo

79.3k55 gold badges5555 silver badges9191 bronze badges

[Add a comment](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Expand to show all comments on this post')

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/52528288/timeline)

Show activity on this post.

```javascript
<!DOCTYPE html>
<html>
<body>

<p>Click the button to display a random number between 1 and 5.</p>

<button onclick="myFunction()">ROLL DICE</button>
<span id="previousNumber" style="display:none"></span>
<p id="demo"></p>

<script>
function myFunction() {
  var x = getRandomNum();
  var temp = document.getElementById("previousNumber").innerHTML;
  while(x == temp){
      x = getRandomNum();
  }
  document.getElementById("demo").innerHTML = x;
  document.getElementById("previousNumber").innerHTML = x;
}

function getRandomNum(){
    var x = Math.floor((Math.random() * 5) + 1);
    return x;
}
</script>
```

[Share](https://stackoverflow.com/a/52528288/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this answer to receive notifications

answered Sep 27, 2018 at 1:49

[

![Nancy Xavier's user avatar](https://www.gravatar.com/avatar/f86a1df9409458c3e6adf492732afe58?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/10421545/nancy-xavier)

[Nancy Xavier](https://stackoverflow.com/users/10421545/nancy-xavier)Nancy Xavier

1

[Add a comment](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Expand to show all comments on this post')

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/56369659/timeline)

Show activity on this post.

Here is a function that you can use. It's quite simple:

min: minimum range; max: maximum range; length: how many numbers to generate.

Function and usage:

```javascript
const randomUniqueNumbers = (min, max, length = 1) => {
    const limit = max - min + 1;
    if (min > max || max < min) {
        throw new Error(
            `Parameter "min" has to be smaller than "max" and vice-versa.`
        );
    } else if (length > limit) {
        throw new Error(
            `The length between ${min} and ${max} cannot exceed ${limit}.`
        );
    }

    let uniqueNumbers = [];
    let number;
    for (var i = 0; i < length; i++) {
        do number = Math.floor(Math.random() * limit) + min;
        while (uniqueNumbers.indexOf(number) !== -1);

        uniqueNumbers[i] = number;
    }

    return uniqueNumbers;
};

console.log(randomUniqueNumbers(20, 30, 3)); //[24, 27, 26]
console.log(randomUniqueNumbers(100, 1000, 5)); //[865, 438, 798, 247, 232]
console.log(randomUniqueNumbers(1, 5, 5)); //[5, 2, 1, 3, 4]
```

[Share](https://stackoverflow.com/a/56369659/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow

Follow this answer to receive notifications

answered May 29, 2019 at 23:11

[

![Diego Fortes's user avatar](https://i.sstatic.net/V8AZh.jpg?s=64)

](https://stackoverflow.com/users/4781067/diego-fortes)

[Diego Fortes](https://stackoverflow.com/users/4781067/diego-fortes)Diego Fortes

9,47144 gold badges3434 silver badges4747 bronze badges

[Add a comment](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.')  | [](https://stackoverflow.com/questions/52528059/javascript-generate-a-random-number-between-1-and-5-but-never-the-same-number# 'Expand to show all comments on this post')

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/52528146/timeline)

Show activity on this post.

```javascript
var lastRoll = null;
function myFunction() {
    var thisRoll = lastRoll;
    while (thisRoll === lastRoll) {
        thisRoll = Math.floor(Math.random() * 5 + 1);
    }
    document.getElementById('demo').innerHTML = thisRoll;
    lastRoll = thisRoll;
}
```

```xml
<p>Click the button to display a random number between 1 and 5.</p>

<button onclick="myFunction()">ROLL DICE</button>

<p id="demo"></p>
```

Run code snippetHide results

Expand snippet

[Share](https://stackoverflow.com/a/52528146/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

Edit

Follow
