![https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg](https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg)

November 27, 2023 / [#API](https://www.freecodecamp.org/news/tag/api/)

# How to Fetch Data from an API Using the Fetch API in JavaScript

![Joan Ayebola](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/Screenshot_20230924-145016.jpg)

[Joan Ayebola](https://www.freecodecamp.org/news/author/joan/)

![How to Fetch Data from an API Using the Fetch API in JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2023/11/Beige-Aesthetic-Brand-Guidelines-Presentation.png)

Interacting with external APIs, or Application Programming Interfaces, has become an essential skill in web development.

APIs allow different software applications to communicate with each other, enabling developers to access and retrieve data from various sources.

One popular way to perform API requests in JavaScript is by using the Fetch API. In this article, we will explore what the Fetch API is, how it works, and I'll provide practical examples to guide you through fetching data from an API using this powerful tool.

## How the Fetch API Works

The Fetch API is a modern JavaScript interface for making network requests, primarily designed to replace the older XMLHttpRequest. It provides a more straightforward and flexible way to handle HTTP requests, making it easier for developers to work with APIs and fetch data from servers.

### Basic Syntax of the Fetch API

Before delving into practical examples, let's take a look at the basic syntax of the Fetch API.

The `fetch()` function is at the core of this API, and it takes one mandatory argument – the URL of the resource you want to fetch. Optionally, you can include an object as the second argument, where you can specify various settings such as the HTTP method, headers, and more.

Here's a simple example of a basic fetch request:

```javascript
fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
```

In this example, we're fetching data from `https://api.example.com/data`. The `then()` method is used to handle the response, converting it to JSON using the `json()` method. The second `then()` block logs the retrieved data to the console, and the `catch()` block handles errors if the request fails.

## How to Make a GET Request

The most common type of request when working with APIs is the GET request. It's used to retrieve data from a server. Let's walk through an example of making a simple GET request using the Fetch API.

### Example: Fetching User Data

Suppose we want to retrieve information about a user from a hypothetical API. Here's how you can do it:

```javascript
// Specify the API endpoint for user data
const apiUrl = 'https://api.example.com/users/123';

// Make a GET request using the Fetch API
fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((userData) => {
        // Process the retrieved user data
        console.log('User Data:', userData);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
```

In this example, we define the API endpoint for user data (`https://api.example.com/users/123`). The fetch function is used to make the GET request, and we handle the response by checking if it's okay using the `response.ok` property. If the response is okay, we convert it to JSON and process the user data.

## How to Make a POST Request

While GET requests are used for retrieving data, POST requests are used to send data to a server. This is commonly used when submitting forms or sending data to create a new resource. Let's explore how to make a POST request using the Fetch API.

### Example: Sending Form Data

Suppose we have a simple form with user details, and we want to send this data to a server to create a new user. Here's how you can make a POST request:

```javascript
// API endpoint for creating a new user
const apiUrl = 'https://api.example.com/users';

// Form data to be sent in the request body
const formData = {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'securepassword123'
};

// Make a POST request using the Fetch API
fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((newUserData) => {
        // Process the newly created user data
        console.log('New User Data:', newUserData);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
```

In this example, we specify the API endpoint for creating a new user (`https://api.example.com/users`). We use the `method` property in the fetch options to set it as a POST request. Additionally, we include the `headers` property to indicate that we are sending JSON data in the request body.

## How to Handle Query Parameters

Often, when working with APIs, you need to include query parameters in your requests to filter or modify the data you receive. Let's explore how to handle query parameters when making a GET request.

### Example: Filtering Data with Query Parameters

Suppose we want to retrieve a list of users based on a specific criteria, such as users who have registered in the last 30 days. We can achieve this by including query parameters in the URL:

```javascript
// API endpoint for fetching recent users
const apiUrl = 'https://api.example.com/users/recent';

// Set up query parameters
const queryParams = {
    timeframe: '30days'
};

// Convert query parameters to a string
const queryString = new URLSearchParams(queryParams).toString();

// Combine API endpoint with query parameters
const fullUrl = `${apiUrl}?${queryString}`;

// Make a GET request using the Fetch API
fetch(fullUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((recentUsers) => {
        // Process the list of recent users
        console.log('Recent Users:', recentUsers);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
```

In this example, we define the API endpoint for fetching recent users (`https://api.example.com/users/recent`). We set up query parameters using an object (`queryParams`) and convert them to a string using `URLSearchParams`. The resulting string is then appended to the API endpoint to form the full URL.

## How to Handle Authentication

Many APIs require authentication to access protected resources. The Fetch API provides a way to include authentication information in your requests using headers. Let's explore how to handle authentication when making a request.

### Example: Adding Authentication Headers

Suppose we have an API that requires an API key for authentication. Here's how you can include the API key in the request headers:

````javascript
// API endpoint requiring authentication
const apiUrl = 'https://api.example.com/protected/resource';

// API key for authentication
const apiKey = 'your-api-key';

// Make a GET request with authentication using the Fetch API
fetch(apiUrl, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(protectedData => {
    // Process the protected data
    console.log('Protected Data:', protectedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```
````

In this example, we include the API key in the request headers using the `Authorization` header. The `Bearer` keyword is commonly used for API key authentication, followed by the actual API key.

## Dealing with Asynchronous Code

One important thing to note when working with the Fetch API is that it operates asynchronously. This means that when you make a request, the JavaScript code doesn't wait for the response but continues executing. To handle the asynchronous nature of the Fetch API, we use promises.

### Example: Chaining Multiple Requests

Suppose we need to fetch data from two different API endpoints and process the results together. We can use the promise chaining pattern to achieve this:

```javascript
// API endpoints
const apiUrl1 = 'https://api.example.com/data1';
const apiUrl2 = 'https://api.example.com/data2';

// Fetch data from the first API endpoint
fetch(apiUrl1)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data1) => {
        // Process data from the first API
        console.log('Data from API 1:', data1);

        // Fetch data from the second API endpoint
        return fetch(apiUrl2);
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data2) => {
        // Process data from the second API
        console.log('Data from API 2:', data2);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
```

In this example, we fetch data from the first API endpoint (`apiUrl1`) and process it. Then, we use the returned promise to make another fetch request to the second API endpoint (`apiUrl2`) and process its data. This chaining pattern allows us to handle multiple asynchronous requests in a sequential manner.

## Error Handling

Handling errors is a crucial part of making robust applications. The Fetch API provides a convenient way to catch and handle errors that may occur during a network request.

### Example: Handling Errors

Let's modify our earlier examples to include more comprehensive error handling:

```javascript
// API endpoint for user data
const apiUrl = 'https://api.example.com/users/123';

// Make a GET request using the Fetch API
fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((userData) => {
        // Process the retrieved user data
        console.log('User Data:', userData);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
```

In this modified example, we include additional information about the HTTP status in the error message when the response is not okay. This can be helpful for debugging and providing more context about the nature of the error.

## Conclusion

In this article, we've covered the basics of fetching data from an API using the Fetch API in JavaScript. We started by exploring the fundamental concepts of the Fetch API, such as its syntax and how to make GET and POST requests. We then delved into handling query parameters, authentication, and asynchronous code.

Working with APIs is a crucial skill for web developers, and the Fetch API provides a straightforward and powerful way to interact with external data sources. As you continue to explore web development, practicing and implementing these concepts in real-world projects will solidify your understanding of fetching data from APIs using JavaScript. Happy coding!

![Joan Ayebola](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/Screenshot_20230924-145016.jpg)

[Joan Ayebola](https://www.freecodecamp.org/news/author/joan/)

frontend developer || technical writer
