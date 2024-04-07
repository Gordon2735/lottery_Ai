[![](https://www.scrapingdog.com/blog/wp-content/uploads/2022/04/cropped-cropped-cropped-cropped-black-logo.png)

Scrapingdog

](https://www.scrapingdog.com/ "web scraping api")

-   [Blog](https://www.scrapingdog.com/blog/)
-   [Pricing](https://www.scrapingdog.com/pricing)
-   [Documentation](https://www.scrapingdog.com/documentation/)
-   [Support](https://share.hsforms.com/1ex4xYy1pTt6rrqFlRAquwQ4h1b2)

[Log in](https://api.scrapingdog.com/login) [Free Trial](https://api.scrapingdog.com/register)

[![](https://www.scrapingdog.com/blog/wp-content/uploads/2022/04/cropped-cropped-cropped-cropped-black-logo.png)

Scrapingdog

](https://www.scrapingdog.com/blog/ "web scraping api")[](javascript://)

-   [Blog](https://www.scrapingdog.com/blog/)
-   [Pricing](https://www.scrapingdog.com/pricing)
-   [Documentation](https://www.scrapingdog.com/documentation/)
-   [Support](https://share.hsforms.com/1ex4xYy1pTt6rrqFlRAquwQ4h1b2)

[Log in](https://api.scrapingdog.com/login) [Free Trial](https://api.scrapingdog.com/register)

[< Back to Blog Overview](https://www.scrapingdog.com/blog)

# Web scraping using Puppeteer and Nodejs

25-05-2020

![Web Scraping with Puppeteer & Nodejs](https://www.scrapingdog.com/blog/wp-content/uploads/2023/08/How-to-scrape-yellow-Pages-for-email-phone-number-Website-2.png)

Web Scraping with Puppeteer & Nodejs

JavaScript is a powerful language that enables you to create simple scripts that can do everything from extracting data from websites to managing back-end systems. Web scraping is one of the simplest and most popular ways to extract data from websites.

This guide will show you how to do puppeteer web scraping using Node.js.

Table of Contents

[Toggle](https://www.scrapingdog.com/blog/puppeteer-web-scraping/#)

-   [Let’s Start Scraping with Puppeteer & NodeJs](https://www.scrapingdog.com/blog/puppeteer-web-scraping/#Lets_Start_Scraping_with_Puppeteer_NodeJs 'Let’s Start Scraping with Puppeteer & NodeJs')
-   [Know What Puppeteer Is](https://www.scrapingdog.com/blog/puppeteer-web-scraping/#Know_What_Puppeteer_Is 'Know What Puppeteer Is')
-   [What we are going to scrape using Puppeteer & NodeJs](https://www.scrapingdog.com/blog/puppeteer-web-scraping/#What_we_are_going_to_scrape_using_Puppeteer_NodeJs 'What we are going to scrape using Puppeteer & NodeJs')
-   [Setup](https://www.scrapingdog.com/blog/puppeteer-web-scraping/#Setup 'Setup')
-   [Preparing the Food](https://www.scrapingdog.com/blog/puppeteer-web-scraping/#Preparing_the_Food 'Preparing the Food')
-   [Making it Perfect](https://www.scrapingdog.com/blog/puppeteer-web-scraping/#Making_it_Perfect 'Making it Perfect')
-   [Conclusion](https://www.scrapingdog.com/blog/puppeteer-web-scraping/#Conclusion 'Conclusion')
-   [Additional Resources](https://www.scrapingdog.com/blog/puppeteer-web-scraping/#Additional_Resources 'Additional Resources')

## Let’s Start Scraping with Puppeteer & NodeJs

Generally, web scraping is divided into two parts:

1. Fetching data by making an HTTP request
2. Extracting important data by parsing the HTML DOM

## Know What Puppeteer Is

1. [**Puppeteer**](https://github.com/GoogleChrome/puppeteer) : Puppeteer is a Node library API that allows us to control headless Chrome.
2. [**Nodejs**](https://nodejs.org/) : Nodejs is an open-source project and a web development platform that enables developers to create and access websites and applications

## What we are going to scrape using Puppeteer & NodeJs

We will scrape the Book price and title from this website, a fake bookstore specifically set up to help people practice scraping.

## Setup

Our setup is pretty simple. Just create a folder and install Puppeteer for creating a folder and installing libraries, type below the given commands. I am assuming that you have already installed Node.js.

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```bash

mkdir scraper

cd scraper

npm i puppeteer — save

mkdir scraper cd scraper npm i puppeteer — save

mkdir scraper
cd scraper
npm i puppeteer — save
```

Now, create a file inside that folder by any name you like. I am using scraping.js.

## Preparing the Food

Now, insert the following boilerplate code in scraping.js

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
const puppeteer = require(‘puppeteer’);

let scrape = async () =&gt; {

// Actual Scraping goes Here…

// Return a value

};

scrape().then((value) =&gt; {

console.log(value); // Success!

});

const puppeteer = require(‘puppeteer’); let scrape = async () =&gt; { // Actual Scraping goes Here… // Return a value }; scrape().then((value) =&gt; { console.log(value); // Success! });

const puppeteer = require(‘puppeteer’);

let scrape = async () =&gt; {

// Actual Scraping goes Here…
// Return a value
};

scrape().then((value) =&gt; {

console.log(value); // Success!

});
```

Let’s walk through this example line by line.

-   **Line 1:** We require the Puppeteer dependency that we installed earlier
-   **Line 3–7:** This is our main function `scrape`. This function will hold all of our automation code.
-   **Line 9:** Here, we are invoking our `scrape()` function. (Running the function).

Something important to note is that our `scrape()` function is a `async` function and makes use of the new ES 2017 `async/await` features. Because this function is asynchronous when it is called, it returns a Promise. When the async function finally returns a value, the Promise will resolve (or Reject if there is an error). Since we’re using an async function, we can use the await expression, which will pause the function execution and wait for there to Promise to resolve before moving on. It’s okay if none of this makes sense right now. It will become clearer as we continue with the tutorial. We can test the above code by adding a line of code to the `scrape` function. Try this out:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript

let scrape = async () =&gt; {

return 'test';

};

let scrape = async () =&gt; { return 'test'; };

let scrape = async () =&gt; {
return 'test';
};
```

Now run `node scrape.js` in the console. You should get `test` returned! Perfect, our returned value is being logged to the console. Now we can get started filling out our `scrape` function.

**Step 1: Setup** The first thing we need to do is create an instance of our browser, open up a new page, and navigate to a URL. Here’s how we do that:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript

let scrape = async () =&gt; {

const browser = await puppeteer.launch({headless: false});

const page = await browser.newPage();

await page.goto ("http://books.toscrape.com/catalogue/a-light-in-the-attic\_1000/index.html");

await page.waitFor(1000);

// Scrape

browser.close();

return result;};

let scrape = async () =&gt; { const browser = await puppeteer.launch({headless: false}); const page = await browser.newPage(); await page.goto ("http://books.toscrape.com/catalogue/a-light-in-the-attic\_1000/index.html"); await page.waitFor(1000); // Scrape browser.close(); return result;};

let scrape = async () =&gt; {
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.goto ("http://books.toscrape.com/catalogue/a-light-in-the-attic\_1000/index.html");
await page.waitFor(1000);

// Scrape
browser.close();
return result;};
```

Awesome! Let’s break it down line by line: First, we create our browser and set headless the mode to `false`. This allows us to watch exactly what is going on:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
const browser = await puppeteer.launch({ headless: false });

const browser = await puppeteer.launch({ headless: false });

const browser = await puppeteer.launch({ headless: false });
```

Then, we create a new page in our browser:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
const page = await browser.newPage();

const page = await browser.newPage();

const page = await browser.newPage();
```

Next, we go to the `books.toscrape.com` URL:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
await page.goto(
	'http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html'
);

await page.goto(
	'http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html'
);

await page.goto(
	'http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html'
);
```

Optionally, I’ve added a delay of `1000` milliseconds. While normally not necessary, this will ensure everything on the page loads:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
await page.waitFor(1000);

await page.waitFor(1000);

await page.waitFor(1000);
```

Finally, we’ll close the browser and return our results after everything is done.

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
browser.close();

return result;

browser.close();
return result;

browser.close();
return result;
```

The setup is complete. Now, let’s scrape!

**Step 2: Scraping** Probably now, you must have an idea of what we are going to scrape. We are going to scrape the Book title and its price.

![a light in the attic](https://www.scrapingdog.com/blog/wp-content/uploads/2022/04/1_9YTcLNziBfDVDVL1dc_zng.png)

Looking at the Puppeteer API, we can find the method that allows us to get the HTML out of the page. In order to retrieve these values, we’ll use the `page.evaluate()` method. This method allows us to use built-in DOM selectors like `querySelector()`.First thing we’ll do is create our `page.evaluate()` function and save the returned value to a variable named `result`:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript

const result = await page.evaluate(() =&gt; {

// return something

});

const result = await page.evaluate(() =&gt; { // return something });

const result = await page.evaluate(() =&gt; {
// return something
});
```

Within our function, we can select the elements we desire. We’ll use the Google Developer Tools to figure this out again. Right-click on the title and select inspect:

![Chrome extension](https://www.scrapingdog.com/blog/wp-content/uploads/2022/04/1_BKrUgaxtaCyKxh_v4QgwRg-1024x270.png)

As you’ll see in the elements panel, the title is simply an `h1` element. We can now select this element with the following code:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
let title = document.querySelector('h1');

let title = document.querySelector('h1');

let title = document.querySelector('h1');
```

Since we want the text contained within this element, we need to add-in `.innerText` — Here’s what the final code looks like:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
let title = document.querySelector('h1').innerText;

let title = document.querySelector('h1').innerText;

let title = document.querySelector('h1').innerText;
```

Similarly, we can select the price by right-clicking and inspecting the element:

![inspecting the element](https://www.scrapingdog.com/blog/wp-content/uploads/2022/04/1_x9tZZHVC8EHbTXaBiJ7Wdg-1024x239.png)

As you can see, our price has a class of `price_color`. We can use this class to select the element and its inner text. Here’s the code:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
let price = document.querySelector('.price_color').innerText;

let price = document.querySelector('.price_color').innerText;

let price = document.querySelector('.price_color').innerText;
```

Now that we have the text that we need, we can return it in an object:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript
return {
	title,

	price
};

return { title, price };

return {
	title,
	price
};
```

Awesome! We’re now selecting the title and price, saving them to an object, and returning the value of that object to the `result` variable. Here’s what it looks like when it’s all put together:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript

const result = await page.evaluate(() =&gt; {

let title = document.querySelector('h1').innerText;

let price = document.querySelector('.price_color').innerText;return {

title,

price

}});

const result = await page.evaluate(() =&gt; { let title = document.querySelector('h1').innerText; let price = document.querySelector('.price_color').innerText;return { title, price }});

const result = await page.evaluate(() =&gt; {
let title = document.querySelector('h1').innerText;
let price = document.querySelector('.price_color').innerText;return {
title,
price
}});
```

The only thing left to do is return our `result` so it can be logged into the console:

Plain text

Copy to clipboard

Open code in new window

```javascript

EnlighterJS 3 Syntax Highlighter

return result;

return result;

return result;
```

Here’s what your final code should look like:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript

const puppeteer = require(‘puppeteer’);

let scrape = async () =&gt; {

const browser = await puppeteer.launch({headless: false});

const page = await browser.newPage();

await page.goto("http://books.toscrape.com/catalogue/a-light-in-the-attic\_1000/index.html");

await page.waitFor(1000);

const result = await page.evaluate(() =&gt; {

let title = document.querySelector(‘h1’).innerText;

let price = document.querySelector(‘.price_color’).innerText;

return {title,price}

});

browser.close();

return result;

};

scrape().then((value) =&gt; {

console.log(value); // Success!

});

const puppeteer = require(‘puppeteer’);
let scrape = async () =&gt; {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto("http://books.toscrape.com/catalogue/a-light-in-the-attic\_1000/index.html");
    await page.waitFor(1000);
    const result = await page.evaluate(() =&gt; {
         title = document.querySelector(‘h1’).innerText;
         let price = document.querySelector(‘.price_color’).innerText;
         return {title,price} });
         browser.close();
         return result; };
         scrape()
            .then((value) =&gt; {
                console.log(value); // Success!
        });

const puppeteer = require(‘puppeteer’);

let scrape = async () =&gt; {
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();

await page.goto("http://books.toscrape.com/catalogue/a-light-in-the-attic\_1000/index.html");
await page.waitFor(1000);

const result = await page.evaluate(() =&gt; {
let title = document.querySelector(‘h1’).innerText;
let price = document.querySelector(‘.price_color’).innerText;

return {title,price}

});

browser.close();
return result;
};

scrape().then((value) =&gt; {
console.log(value); // Success!
});
```

You can now run your Node file by typing the following into the console:

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

```javascript

node scrape.js// { title: 'A Light in the Attic', price: '£51.77' }

node scrape.js// { title: 'A Light in the Attic', price: '£51.77' }

node scrape.js// { title: 'A Light in the Attic', price: '£51.77' }
```

You should see the title and price of the selected book returned to the screen! You’ve just scraped the web!

## Making it Perfect

Now, in order to scrape all the book titles from the home page itself would have been a little more difficult for beginners. However, this provides the perfect opportunity for you to practice your new scraping skills!

Plain text

Copy to clipboard

Open code in new window

EnlighterJS 3 Syntax Highlighter

const result = await page.evaluate(() =&gt; {

```javascript

let data = []; // Create an empty array

let elements = document.querySelectorAll('xxx'); // Select all // Loop through each proudct

// Select the title

// Select the price

data.push({title, price});
 // Push the data to our array
 return data;
 // Return our data
 });

const result = await page.evaluate(() =&gt; {
    let data = \[\];
    // Create an empty array
    let elements = document.querySelectorAll('xxx');
    // Select all // Loop through each proudct // Select the title // Select the price
    data.push({title, price});
    // Push the data to our array
    return data;
    // Return our data array
});

const result = await page.evaluate(() =&gt; {
let data = \[\];
// Create an empty array
let elements = document.querySelectorAll('xxx');
// Select all // Loop through each proudct
// Select the title
// Select the price
data.push({title, price});
// Push the data to our array
return data;
// Return our data array
});
```

## Conclusion

In this article, we understood how we could scrape data using Nodejs & Puppeteer regardless of the type of website. Feel free to comment and ask me anything. You can follow me on Twitter and Medium. Thanks for reading, and please hit the like button!

## Additional Resources

And there’s the list! At this point, you should feel comfortable writing your first web scraper to gather data from any website. Here are a few additional resources that you may find helpful during your web scraping journey:

-   [Web Scraping with NodeJs](https://www.scrapingdog.com/blog/web-scraping-with-nodejs/)
-   [Top 5 Javascript Web Scraping Libraries](https://www.scrapingdog.com/blog/top-5-web-scraping-javascript-libraries/)
-   [Setup Puppeteer with Proxy](https://www.scrapingdog.com/blog/how-use-proxy-with-puppeteer/)
-   [Best HTML Parsing Libraries – JavaScript](https://www.scrapingdog.com/blog/html-parsing-libraries-javascript/)

![](https://secure.gravatar.com/avatar/64876e7a678d78c93056521651d93132?s=150&d=mm&r=g)

### **Manthan Koolwal**

My name is Manthan Koolwal and I am the founder of scrapingdog.com. I love creating scraper and seamless data pipelines.

![Scrapingdog Logo](../../assets/black-logo.png)

Try Scrapingdog for Free!

Free 1000 API calls of testing.

No credit card required!

[Start Free Trial](https://api.scrapingdog.com/register)
