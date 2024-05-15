# Search a Nested Object for Key-Value Pairs from an Await Fetch() Response

To search through a nested object for key-value pairs from an await fetch() response, you can use the following steps:

-   Use the JSON.parse() method to parse the response into a JavaScript object.
-   Use a recursive function to search through the object for the key-value pair. The function should take the object and the key as arguments and return the value if it is found, or undefined if it is not found.
-   Call the recursive function with the object and the key that you are searching for.
-   The function should check if the key exists in the object. If it does, the function should return the value associated with the key. If the key does not exist in the object, the function should check if the object is an array. If it is, the function should iterate over the array and call itself recursively on each element of the array. If the object is not an array, the function should return undefined.

Here is an example of a recursive function that you can use to search through a nested object for a key-value pair:

```javascript
function searchObject(object, key) {
    if (object.hasOwnProperty(key)) {
        return object[key];
    } else if (Array.isArray(object)) {
        for (const element of object) {
            const value = searchObject(element, key);
            if (value !== undefined) {
                return value;
            }
        }
    }
    return undefined;
}
```

To use the function, you would call it with the object and the key that you are searching for. For example, to search for the "name" key in the following object:

```javascript
const object = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer'
};
```

You would call the function as follows:

```javascript
const name = searchObject(object, 'name');
```

The function would return the value "John Doe".

You can also use the function to search for a key-value pair in a nested object. For example, to search for the "city" key in the following object:

```javascript
const object = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main Street',
        city: 'San Francisco',
        state: 'CA'
    }
};
```

You would call the function as follows:

```javascript
const city = searchObject(object, 'city');
```

The function would return the value "San Francisco".

[How do you access keys in a nested object?](https://www.google.com/search?q=How+do+you+access+keys+in+a+nested+object?&rlz=1C2FHFK_enUS956US1075&sca_esv=de41ff9df9a77b07&sxsrf=ADLYWIJJR7LQbRXh0xkRnZHD7AHswzFI2Q%3A1715530029760&source=hp&ei=9RRBZpHbOJLKp84P09Cr2A0&iflsig=AL9hbdgAAAAAZkD3PQPhULF_Hare9xue161z21YN0LaK&ved=2ahUKEwjhm4qR6YiGAxUirYQIHXJbAFQQ998KKAB6BAgtEAE&uact=5&oq=how+to+search+through+a+nested+object+for+key+value+pairs+from+a+await+fethc%28%29+response+&gs_lp=Egdnd3Mtd2l6Ilhob3cgdG8gc2VhcmNoIHRocm91Z2ggYSBuZXN0ZWQgb2JqZWN0IGZvciBrZXkgdmFsdWUgcGFpcnMgZnJvbSBhIGF3YWl0IGZldGhjKCkgcmVzcG9uc2UgMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRifBTIFECEYnwUyBRAhGJ8FSIfXqwVQAFilyKsFcAB4AJABAJgBsgGgAecrqgEFMTkuMzO4AQPIAQD4AQGYAjSgAsEtwgIKECMYgAQYJxiKBcICBBAjGCfCAhEQLhiABBixAxjRAxiDARjHAcICDhAAGIAEGLEDGIMBGIoFwgILEC4YgAQY0QMYxwHCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIFEAAYgATCAgsQLhiABBixAxiDAcICBRAuGIAEwgILEC4YgAQYsQMY1ALCAgQQABgDwgILEAAYgAQYsQMYigXCAgYQABgWGB7CAggQABgWGAoYHsICCxAAGIAEGIYDGIoFwgIIEAAYogQYiQXCAggQABiABBiiBMICBBAhGBWYAwCSBwUxOC4zNKAHp6oD&sclient=gws-wiz&csui=3&mstk=AUtExfCnmey8842gYHcCJY2HTbcHM_1L4yRYuOkm_UNaG-peXYUMy-TaWuJ40_xbb0lj-mrAXQJfexucDkmBK7h-X2gxj5yGHXF0TMALu4r1X1uKhdXLOJVBi6ZbbNnFuRoi3U4Npg92vSZGgESX7ZePX_WOrAZ7zZe3A6DvoFt3iV2I)
