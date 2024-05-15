# How to Get Only Key Value Pairs in Nested Object

[How to get only key value pairs in nested object in javascript](https://stackoverflow.com/questions/71958608/how-to-get-only-key-value-pairs-in-nested-object-in-javascript)

[Ask Question](https://stackoverflow.com/questions/ask)

Modified [2 years ago](https://stackoverflow.com/questions/71958608/how-to-get-only-key-value-pairs-in-nested-object-in-javascript?lastactivity '2022-04-21 17:54:54Z')

This question does not show any research effort; it is unclear or not useful

Save this question.

[Timeline](https://stackoverflow.com/posts/71958608/timeline)

Show activity on this post.

```javascript
let Ar=[
{
      info:{
          name:"Sai",
          age:24
      },
    grade:'A'
},
{
    name:"Satish",
    grade:'B',
    info:{
        place:"Hyd",
        company:'Company1'
    },
    info2:{
        place2:"Hyderabad",
        company2:'Company2'
    }
}
```

Output should be key values pairs only \*\*

```javascript
[
    {
        name: 'Sai',
        age: 24,
        grade: 'A'
    },
    {
        name: 'Satish',
        grade: 'B',
        place: 'Hyd',
        company: 'Company1',
        place2: 'Hyderabad',
        company2: 'Company2'
    }
];
```

How we can get only key value pairs form the object and nested object

Current solution I have like this But do we have more optimized code to get the only key value pairs from an object. I have used Object.keys(obj) and Object.entries(obj) methods to achieve this.

```javascript
let fr = Ar.map((A) => {
    let test = [];
    let en = Object.keys(A).map((item) => {
        if (typeof A[item] === 'object') {
            Object.entries(A[item]).map((i) => {
                test.push(i);
            });
        } else {
            return test.push([item, A[item]]);
        }
    });

    return test;
});

let finalAnswer = fr.map((item) => {
    return Object.fromEntries(item);
});
console.log('Spread Print', finalAnswer);
```

_Is there any better solution than me?_

-   [javascript](https://stackoverflow.com/questions/tagged/javascript "show questions tagged 'javascript'")
-   [arrays](https://stackoverflow.com/questions/tagged/arrays "show questions tagged 'arrays'")
-   [reactjs](https://stackoverflow.com/questions/tagged/reactjs "show questions tagged 'reactjs'")
