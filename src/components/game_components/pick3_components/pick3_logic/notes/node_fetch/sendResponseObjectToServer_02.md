**Gordon R Mullen Jr** ---

<img src="https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png" style="border-radius: 50%; float: left; margin-right: 10px; width: 75px;" />

:send a JSON object to a Node.js Express server using Javascript?

![https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Labs_hero.width-1200.format-webp.webp](https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Labs_hero.width-1200.format-webp.webp)

[Google Labs](https://labs.google.com/search?source=srp) Generative AI is experimental.
To send a JSON object to a Node.js Express server using JavaScript, you can use the following steps:
Create a new JavaScript file and add the following code:

```javaScript
const fetch = require('node-fetch');

const jsonObject = {
name: 'John Doe',
age: 30,
occupation: 'Software Engineer'
};

fetch('http://localhost:3000/api/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(jsonObject)
})
.then(response => response.json())
.then(data => console.log(data));
```

Save the file as send-json.js and run it using the following command:
Code

node send-json.js
This will send the JSON object to the Express server running on port 3000.
Create a new Express server and add the following code:

```javaScript
const express = require('express');

const app = express();

app.post('/api/users', (req, res) => {
    const jsonObject = req.body;

    console.log(jsonObject);

    res.json({
        message: 'User created successfully'
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
```

Save the file as server.js and run it using the following command:

```bash
node server.js
```

This will start the Express server on port 3000.
Open a web browser and navigate to http://localhost:3000/api/users. You should see the JSON object that you sent from the JavaScript file.
Here is an example of the output that you should see in the console:

```bash
{ name: 'John Doe', age: 30, occupation: 'Software Engineer' }
```

geeksforgeeks.org
Express res.json() Function - GeeksforGeeks
Jan 1, 2024 — json() function sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON. stringify() method. Parameters: The body parameter is the body that is to be sent in the response.

Code with Scaler ·
YouTube · 1y
Send HTML and JSON data as a Response using Express
In this tutorial, we will learn how to send HTML and JSON data as a response using Express JS. Express is a popular Node.js framework that simplifies the process of building web applications. Sending HTML and JSON data is a common task in web development, and in this video, we will show you how to

GeeksforGeeks
How to Send JSON Response using Node.js ? - GeeksforGeeks
3 days ago — Sending a JSON response using Node. js's http module involves setting up a request listener, preparing the JSON data, setting the appropriate response headers, and sending the JSON string using res. end() . This approach ensures structured and correctly formatted responses for client-side applications.

GeeksforGeeks
How to send a JSON object to a server using Javascript?
Jan 17, 2022 — < script src="index.js"> JavaScript: When sending data to a web server, the data has to be a string. So we are using JSON. stringify() function to convert data to string and send it via XHR request to the server.

```javaScript
function sendJSON(){
    let result = document.querySelector( '.result' );
    let name = document.querySelector( '#name' );
    let email = document.querySelector( '#email' );
    // Creating a XHR object.
    let xhr = new XMLHttpRequest();
    let url = "submit.php";
    // open a connection.
    xhr.open("POST", url, true );
}
```

youtube.com
How to create an API that receives JSON with Node.js and ...
Oct 12, 2020 — When building an API that create new resources, you need to grab and parse data from the client application. Let's take a look at how you can build an endpoint that receive JSON using Node.js and Express. Full "Intro to Node.js" course on Microsoft Learn: https://aka.ms/LearnNode.js Watch the entire

developer.mozilla.org
Sending forms through JavaScript - Learn web development | MDN
Dec 14, 2023 — addEventListener("click", sendData); _ We first construct a new, empty, FormData object. _ Next, we call append() twice, to add two items to the FormData object: a text field and a file. Finally, we make a POST request using the fetch() API, setting the FormData object as the request body.

developer.mozilla.org
JSON.parse() - JavaScript - MDN Web Docs - Mozilla
parse() The JSON. parse() static method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

m.youtube.com
Node.js Tutorial - 32 - JSON Response
Jan 2, 2023 — the nice thing about using Json format is that the V8 engine has built-in functionality to support what we want to achieve. all we have to do is invoke the built-in method Json Dot stringify. and pass n superhero as an argument. we do however have to specify to the browser. the content type is Json. so on line 9. content type colon application slash Json now if we restart the server node index head back to the browser. and refresh we see a string representation of our object. if you want to convert this back to an object you can use the built-in Json dot parse method.
