# [Test if a key-value pair exists in nested object in Typescript](https://codereview.stackexchange.com/questions/244719/test-if-a-key-value-pair-exists-in-nested-object-in-typescript)

[Ask Question](https://codereview.stackexchange.com/questions/ask)

Asked 3 years, 10 months ago

Modified [2 years, 1 month ago](https://codereview.stackexchange.com/questions/244719/test-if-a-key-value-pair-exists-in-nested-object-in-typescript?lastactivity '2022-03-16 17:49:05Z')

Viewed 1k times

This question shows research effort; it is useful and clear

2

This question does not show any research effort; it is unclear or not useful

Save this question.

[](https://codereview.stackexchange.com/posts/244719/timeline)

Show activity on this post.

\\begingroup

I wrote a function to check if a nested object contains the key-value pair matched as parameter as following.

```javascript
eq:
const obj ={
   "a":{
      "b":{
         "c1":["1","2"],
         "c2":"3"
      },
      "b2":"values",
      "b3": {"c5": "v"},
   },
   "a2":["v1","v2"],
   "a3":"v1"
}
checkNestedObjectByKeyValue(obj, "a3", "v1") // true
checkNestedObjectByKeyValue(obj, "a3", "v2") // false
checkNestedObjectByKeyValue(obj, "a2", ["v1","v2"]) // true
checkNestedObjectByKeyValue(obj, "a3", "v1") // true
checkNestedObjectByKeyValue(obj, "b3", {"c5": "v"}) // true

```

```javascript
function checkNestedObjectByKeyValue(
  obj: Record<string, any>,
  objKey: string,
  objValue: string | Array<string>
): boolean {

  if (typeof obj !== 'object') return false;
  if (obj.hasOwnProperty(objKey)) {

    return JSON.stringify(obj[objKey]) === JSON.stringify(objValue)
  }
  for (const value of Object.values(obj)) {
    if (checkNestedObjectByKeyValue(value, objKey, objValue)) return true
  }
  return false
}
```

-   [typescript](https://codereview.stackexchange.com/questions/tagged/typescript "show questions tagged 'typescript'")

[Share](https://codereview.stackexchange.com/q/244719/281494 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://codereview.stackexchange.com/posts/244719/edit 'Revise and improve this post')

Follow

Follow this question to receive notifications

Get updates on questions and answers

[edited Jun 29, 2020 at 19:20](https://codereview.stackexchange.com/posts/244719/revisions 'show all edits to this post')

[

![200_success's user avatar](https://i.stack.imgur.com/1f9W9.png?s=64&g=1)

](https://codereview.stackexchange.com/users/9357/200-success)

[200_success](https://codereview.stackexchange.com/users/9357/200-success)

144k2222 gold badges188188 silver badges471471 bronze badges

asked Jun 29, 2020 at 15:58

[

![jacobcan118's user avatar](https://www.gravatar.com/avatar/b59294ca0d3c6d0a5ba10ada2baf32a7?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://codereview.stackexchange.com/users/137741/jacobcan118)

[jacobcan118](https://codereview.stackexchange.com/users/137741/jacobcan118)jacobcan118

57122 silver badges1010 bronze badges

\\endgroup

1

-   1
    \\begingroup updated. code totally works \\endgroup
    – [jacobcan118](https://codereview.stackexchange.com/users/137741/jacobcan118 '571 reputation')
    [Jun 29, 2020 at 18:59](https://codereview.stackexchange.com/questions/244719/test-if-a-key-value-pair-exists-in-nested-object-in-typescript#comment480494_244719)

[Add a comment](https://codereview.stackexchange.com/questions/244719/test-if-a-key-value-pair-exists-in-nested-object-in-typescript# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.') | [](https://codereview.stackexchange.com/questions/244719/test-if-a-key-value-pair-exists-in-nested-object-in-typescript# 'Expand to show all comments on this post')

## 2 Answers 2

Sorted by: [Reset to default](https://codereview.stackexchange.com/questions/244719/test-if-a-key-value-pair-exists-in-nested-object-in-typescript?answertab=scoredesc#tab-top)

Highest score (default) Date modified (newest first) Date created (oldest first)

This answer is useful

1

This answer is not useful

Save this answer.

[](https://codereview.stackexchange.com/posts/244744/timeline)

Show activity on this post.

\\begingroup

Based on your description of the function, I would expect this test to return `true`, but your implementation returns `false`. So, either your description is unclear, or your implementation is buggy.

```javascript
const obj = {
    a: {
        b: {
            a3: 'v2',
            c1: ['1', '2'],
            c2: '3'
        },
        b2: 'values',
        b3: { c5: 'v' }
    },
    a2: ['v1', 'v2'],
    a3: 'v1'
};
checkNestedObjectByKeyValue(obj, 'a3', 'v2'); // false, but I would expect true
```

[Share](https://codereview.stackexchange.com/a/244744/281494 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://codereview.stackexchange.com/posts/244744/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Jun 29, 2020 at 19:28

[

![200_success's user avatar](https://i.stack.imgur.com/1f9W9.png?s=64&g=1)

](https://codereview.stackexchange.com/users/9357/200-success)

[200_success](https://codereview.stackexchange.com/users/9357/200-success)200_success

144k2222 gold badges188188 silver badges471471 bronze badges

\\endgroup

1

-   1
    \\begingroup we have "a3": "v1" as first level that is why it return false. not sure how i can handle that \\endgroup
    – [jacobcan118](https://codereview.stackexchange.com/users/137741/jacobcan118 '571 reputation')
    [Jun 29, 2020 at 19:34](https://codereview.stackexchange.com/questions/244719/test-if-a-key-value-pair-exists-in-nested-object-in-typescript#comment480512_244744)

[Add a comment](https://codereview.stackexchange.com/questions/244719/test-if-a-key-value-pair-exists-in-nested-object-in-typescript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') | [](https://codereview.stackexchange.com/questions/244719/test-if-a-key-value-pair-exists-in-nested-object-in-typescript# 'Expand to show all comments on this post')

This answer is useful

0

This answer is not useful

Save this answer.

[](https://codereview.stackexchange.com/posts/274983/timeline)

Show activity on this post.

\\begingroup

## Main review

Your code works well in most cases, but the biggest change I recommend in order to skip over false positives would be to change the following lines

```javascript
if (obj.hasOwnProperty(objKey)) {
    return JSON.stringify(obj[objKey]) === JSON.stringify(objValue);
}
```

to the following (move `JSON.stringify(obj[objKey]) === JSON.stringify(objValue)` into the conditional statement and return true):

```javascript
if (
    obj.hasOwnProperty(objKey) &&
    JSON.stringify(obj[objKey]) === JSON.stringify(objValue)
) {
    return true;
}
```

As [200_success](https://codereview.stackexchange.com/users/9357/200-success) pointed out, your code returns false when a key exists in one part of the whole object but doesn't match and another key exists elsewhere which does match. This change will check whether a key matches first and proceeds to perform the recursive search for another key with matching value.

In the following code snippet, I changed the code to JavaScript so it could be run here in this post.

```javascript
function checkNestedObjectByKeyValue(obj, objKey, objValue) {
    if (typeof obj !== 'object') return false;
    if (
        obj.hasOwnProperty(objKey) &&
        JSON.stringify(obj[objKey]) === JSON.stringify(objValue)
    ) {
        return true;
    }
    for (const value of Object.values(obj)) {
        if (checkNestedObjectByKeyValue(value, objKey, objValue)) return true;
    }
    return false;
}
const obj = {
    a: {
        b: {
            a3: 'v2',
            c1: ['1', '2'],
            c2: '3'
        },
        b2: 'values',
        b3: {
            c5: 'v'
        }
    },
    a2: ['v1', 'v2'],
    a3: 'v1'
};
console.log(checkNestedObjectByKeyValue(obj, 'a3', 'v1'));
console.log(checkNestedObjectByKeyValue(obj, 'a3', 'v2'));
console.log(checkNestedObjectByKeyValue(obj, 'a2', ['v1', 'v2']));
console.log(
    checkNestedObjectByKeyValue(obj, 'b3', {
        c5: 'v'
    })
);
// Added a check that should return false
console.log(checkNestedObjectByKeyValue(obj, 'b2', 'novalue'));
```

Run code snippetHide results

Expand snippet

If the pattern of object properties is:

-   first level property name `/^a\d*$/`
-   second level property name `/^b\d*$/`
-   third level property name `/^c\d*$/`
-   etc.

Then this _may_ not be necessary.

## Other thoughts

When I first ran your code, I received an error: `Argument of type '{ c5: string; }' is not assignable to parameter of type 'string | string[]'.` which referenced the following line:

```javascript
checkNestedObjectByKeyValue(obj, 'b3', { c5: 'v' });
```

I resolved this by adding `| object` to the `objValue` parameter as follows:

```javascript
function checkNestedObjectByKeyValue(
  obj: Record<string, any>,
  objKey: string,
  objValue: string | Array<string> | object
): boolean {
```

[Share](https://codereview.stackexchange.com/a/274983/281494 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://codereview.stackexchange.com/posts/274983/edit 'Revise and improve this post')

Follow
