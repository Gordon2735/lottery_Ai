# Iterate thru JSON Fetch

[Iterate thru json fetch](https://forum.freecodecamp.org/t/iterate-thru-json-fetch/323270)

[General](https://forum.freecodecamp.org/c/general/1)

You have selected **0** posts.

[select all](https://forum.freecodecamp.org/t/iterate-thru-json-fetch/323270)

[cancel selecting](https://forum.freecodecamp.org/t/iterate-thru-json-fetch/323270)

Oct 2019

[![](https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/quintendewilde/48/106070_2.png)](https://forum.freecodecamp.org/u/quintendewilde)

[quintendewilde](https://forum.freecodecamp.org/u/quintendewilde)

[Oct 2019](https://forum.freecodecamp.org/t/iterate-thru-json-fetch/323270 'Post date')

Hi I’m learning javascript.

And I’m trying to iterate thru a json file with js fetch.

I am first retrieving the whole file which I would then use to go through the list and get  
randomly every nth result from a random object.

UPDATE:

I’ve managed to console log an element of the json list.

I’m still searching a good way to push the element to a div  
And  
When onload of the body a new element is presented.

Current code:

```javascript
var myfetch = fetch(
    'https://kanjialive-api.p.rapidapi.com/api/public/kanji/all',
    {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
            'x-rapidapi-key': 'x'
        }
    }
);

myfetch
    .then((res) => res.json())
    .then((data) => console.log(data[1].kanji.character))
    .then(
        (data) => (document.getElementById('kanji').innerHTML = kanji.character)
    )

    .catch((err) => {
        console.log(err);
    });
```

I get undefined in my html now!
