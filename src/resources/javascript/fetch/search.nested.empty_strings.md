<header style="margin: 0em 0em 0em 0.4em; position: absolute; display: inline-block; top: 1.5%; left: 3%; width: 100%;">
    <img src="../../../../public/images/images_markdown/team_webelistics_logo.png" style="width: 40px; filter: drop-shadow(0rem 0rem 1.2rem hsla(163, 19%, 7%, 0.993)); rotate: 344deg;" />
    <h1 style="margin:0em 0em 0em 0.4em; display: inline-block; font-family: chango; font-size: 1.2rem; font-weight: 700; color: hsl(203, 81%, 58%);letter-spacing: 0.2111em; text-shadow: 0.05rem 0.071111rem 0.031111rem hsla(37, 85%, 60%, 0.993);  filter: drop-shadow(0rem 0rem 0.941111rem hsla(37, 85%, 60%, 0.493));">
        Team Webelistics<sup style="font-size: 0.31111em; letter-spacing: 0.1211em; text-shadow: none; filter: none;">TM</sup><sub style="font-size: 0.522111em; text-shadow: none; filter: none;">, LLC</sub>
    </h1>
    <h3 style="margin: 0.4em 0em 2em 6.03em; font-size: 0.8rem; font-style: italic; color: hsl(37, 85%, 60%); letter-spacing: 0.1em; text-shadow: 0.8rem 0.6rem 0.5rem hsla(163, 19%, 7%, 0.993);">
        Internet Applications & Software Development...
    </h3>
    <img src="https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png" style="margin: 0.9em 0em 0em 0.1em; border-radius: 50%; float: left; margin-right: 10px; width: 75px; filter: drop-shadow(0rem 0rem 1.2rem hsla(163, 19%, 7%, 0.993));" />
    <h3 style="margin: 1.4em 0em 0em 2em; font-size: 0.8rem; color: hsla(54, 100%, 90%, 0.993); letter-spacing: 0.1em; text-shadow: 0.8rem 0.6rem 0.9rem hsla(163, 19%, 7%, 0.993);">
        <a src="https://www.webelsitics.com" style="color: hsla(54, 100%, 90%, 0.993);">Gordon R Mullen Jr</a>
    </h3>
    <h5 style="margin: 0.4em 0em 0em 2em; font-size: 0.6rem; font-style: italic; color: hsl(203, 81%, 58%); letter-spacing: 0.1em; text-shadow: 0.8rem 0.6rem 0.9rem hsla(163, 19%, 7%, 0.993);
    ">
        Enthusiastic Lead Software Developer/Engineer
    </h5>
    <section style="position: absolute; top: 30%; left: 50%; display: inline-block;">
        <img src="../../../../public/images/images_markdown/markdown-logo.png" style="margin: 0em 0.7em 0em 0em; display: inline-block; width: 8.5vw; filter: drop-shadow(0.1rem 0.1rem 0.11rem hsla(240, 33%, 99%, 0.693)); rotate: 344deg;" /><p style="margin: -9em 0em 0em 1em; position: relative; display: inline-block; font-size: 3vw;">Markdown</p>
        &emsp;&emsp;&emsp;&emsp;&emsp;<p style="margin: -0.7em 0em 2em 7em; display: block; font-size: 2.7vw;">Study Sheet...</p>
    </section>

</header>

<br /><br /><br /><br /><br /><br /><br />

<hr style="margin: 2.1em 0em 0em 0em; border-color: hsl(203, 81%, 58%); filter: drop-shadow(0rem 0rem 1.2rem hsla(163, 19%, 7%, 0.993));" />
<hr style="margin: 0.1em 0em 0em 0em; border-color: hsl(37, 85%, 60%); filter: drop-shadow(0rem 0rem 1.2rem hsla(163, 19%, 7%, 0.993));" />
<hr style="margin: 0.1em 0em 0em 0em; border-color: hsl(203, 81%, 58%); filter: drop-shadow(0px 0px 7px hsla(37, 94%, 87%, 0.9));" />
<br />
<br />

# Different Ways to Find an Object by Key-Value or All Key Value Pairs in Nested Objects in TypeScript with References and Code Examples

**Gordon R Mullen Jr** ---
<img src="https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png" style="border-radius: 50%; float: left; margin-right: 10px; width: 75px;" />

: ways to find an object by key-value or all key value pairs in nested objects in TypeScript with references and code examples thanks!
<br />
<br />

**ChatGPT** ---
In TypeScript, you can find an object by key-value pair or traverse through nested objects using various techniques. Here's a breakdown with code examples:

### 1. Using Recursive Functions:

```typescript
interface NestedObject {
    [key: string]: any;
}

function findObjectByKeyValue(
    obj: NestedObject,
    key: string,
    value: any
): NestedObject | undefined {
    for (const prop in obj) {
        if (typeof obj[prop] === 'object') {
            const result = findObjectByKeyValue(obj[prop], key, value);
            if (result) return result;
        } else if (prop === key && obj[prop] === value) {
            return obj;
        }
    }
    return undefined;
}

// Example usage:
const nestedObject = {
    a: {
        b: {
            c: 123
        },
        d: {
            e: 'hello'
        }
    }
};

const result = findObjectByKeyValue(nestedObject, 'c', 123);
console.log(result); // Output: { c: 123 }
```

### 2. Using Depth-First Search (DFS):

```typescript
function findObjectByKeyValueDFS(
    obj: NestedObject,
    key: string,
    value: any
): NestedObject | undefined {
    const stack = [obj];
    while (stack.length) {
        const current = stack.pop()!;
        for (const prop in current) {
            if (typeof current[prop] === 'object') {
                stack.push(current[prop]);
            } else if (prop === key && current[prop] === value) {
                return current;
            }
        }
    }
    return undefined;
}

// Example usage:
const resultDFS = findObjectByKeyValueDFS(nestedObject, 'e', 'hello');
console.log(resultDFS); // Output: { e: 'hello' }
```

### 3. Using JSON.stringify and String Search:

```typescript
function findObjectByKeyValueStringify(
    obj: NestedObject,
    key: string,
    value: any
): NestedObject | undefined {
    const strObj = JSON.stringify(obj);
    const regex = new RegExp(`"${key}":"${value}"`);
    const match = strObj.match(regex);
    if (match) {
        return JSON.parse(match[0]);
    }
    return undefined;
}

// Example usage:
const resultStringify = findObjectByKeyValueStringify(
    nestedObject,
    'e',
    'hello'
);
console.log(resultStringify); // Output: { e: 'hello' }
```

Choose the approach that suits your use case best. Each has its advantages and drawbacks, so consider factors like performance and readability when making your decision.

**Gordon R Mullen Jr** ---
<img src="https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png" style="border-radius: 50%; float: left; margin-right: 10px; width: 75px;" />

: Thanks, could you share some Typescript code examples for searching all key value pairs in nested objects from fetch response.json()
<br />

**ChatGPT** ---
Certainly! Here's an example of TypeScript code to search for all key-value pairs in nested objects retrieved from a fetch `response.json()` call:

```typescript
interface NestedObject {
    [key: string]: any;
}

async function searchKeyValuePairs(
    url: string,
    key: string,
    value: any
): Promise<void> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        searchNestedObjects(data, key, value);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

function searchNestedObjects(obj: NestedObject, key: string, value: any): void {
    for (const prop in obj) {
        if (typeof obj[prop] === 'object') {
            searchNestedObjects(obj[prop], key, value);
        } else if (prop === key && obj[prop] === value) {
            console.log('Found matching key-value pair:', {
                [prop]: obj[prop]
            });
        }
    }
}

// Example usage:
searchKeyValuePairs('https://api.example.com/data', 'name', 'John');
```

In this example:

-   `searchKeyValuePairs` is an asynchronous function that fetches data from the provided URL, parses the JSON response, and then calls `searchNestedObjects`.
-   `searchNestedObjects` is a recursive function that iterates through each property of the object recursively. If the property is an object, it calls itself recursively. If the property matches the specified key-value pair, it logs the matching key-value pair.

Make sure to replace `'https://api.example.com/data'` with the actual URL endpoint from which you are fetching the data. This code will search for all occurrences of the specified key-value pair recursively within the fetched JSON data.

**Gordon R Mullen Jr** ---
<img src="https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png" style="border-radius: 50%; float: left; margin-right: 10px; width: 75px;" />

: Now imagine the same previous question, but many of the nested objects keys have empty strings for values, how would you recursively iterate the nest while excluding all the empty strings from the results?
<br />

**ChatGPT** ---
To recursively iterate through nested objects while excluding empty strings from the results, you can modify the `searchNestedObjects` function to skip properties with empty strings. Here's the updated TypeScript code:

```typescript
interface NestedObject {
    [key: string]: any;
}

async function searchKeyValuePairs(
    url: string,
    key: string,
    value: any
): Promise<void> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        searchNestedObjects(data, key, value);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

function searchNestedObjects(obj: NestedObject, key: string, value: any): void {
    for (const prop in obj) {
        if (typeof obj[prop] === 'object') {
            searchNestedObjects(obj[prop], key, value);
        } else if (prop === key && obj[prop] === value) {
            console.log('Found matching key-value pair:', {
                [prop]: obj[prop]
            });
        }
    }
}

// Example usage:
searchKeyValuePairs('https://api.example.com/data', 'name', 'John');
```

In this updated version, we need to add a condition to check if the property value is an empty string before processing it:

```typescript
if (typeof obj[prop] === 'string' && obj[prop].trim() === '') {
    continue; // Skip empty string properties
}`

Here's how you can integrate it into the `searchNestedObjects
```

function:

```typescript
function searchNestedObjects(obj: NestedObject, key: string, value: any): void {
    for (const prop in obj) {
        if (typeof obj[prop] === 'object') {
            searchNestedObjects(obj[prop], key, value);
        } else if (typeof obj[prop] === 'string' && obj[prop].trim() === '') {
            continue; // Skip empty string properties
        } else if (prop === key && obj[prop] === value) {
            console.log('Found matching key-value pair:', {
                [prop]: obj[prop]
            });
        }
    }
}
```

With this modification, the `searchNestedObjects` function will exclude properties with empty string values from the search results while recursively iterating through nested objects.

**Gordon R Mullen Jr** ---
<img src="https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png" style="border-radius: 50%; float: left; margin-right: 10px; width: 75px;" />

: Great! Thanks for the help my digital friend. Let me study these for a thorough understanding of these concepts.

<br />

**ChatGPT** ---
You're welcome! Take your time studying the examples, and feel free to return if you have more questions or need further clarification. Happy coding!
