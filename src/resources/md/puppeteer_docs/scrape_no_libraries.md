[Puppeteer](https://serpapi.com/blog/tag/puppeteer/)

# Dynamic Scraping Without Libraries

Extract data and manipulate websites with simple userscript-driven JavaScript console code.

-  [![Greg Gorlen](/blog/content/images/size/w100/2022/03/2016-12-16--_K1_3771--1858---Stevon_MissionBits_cropped.jpg)](https://serpapi.com/blog/author/ggorlen/) 

#### [Greg Gorlen](https://serpapi.com/blog/author/ggorlen/)

Jun 17, 2022 • 7 min read

TABLE OF CONTENTS

Let's suppose there's a website you'd like to scrape data from, monitor, or otherwise manipulate. A quick look at the site's static HTML shows a JavaScript-driven single-page application.

Next, you'd usually reach for a browser automation library such as [Selenium](https://www.selenium.dev/), [Puppeteer](https://pptr.dev/) or [Playwright](https://playwright.dev/).

Those tools are fantastic, but often unnecessary. Browser automation can be heavy on memory and CPU, take time to install and learn, and can run into detection issues, login screens and other annoyances standing between you and your goal.

This post shares a strategy for quickly scraping dynamic pages in real time without libraries, using the browser console and a simple local back-end. Although this approach isn't a drop-in replacement for browser automation, it offers a nice alternative for your web scraping toolkit.

> If you are interested in exploring additional techniques and libraries, feel free to read: [Web scraping in Javascript tutorial for beginners](https://serpapi.com/blog/web-scraping-in-javascript-complete-tutorial-for-beginner/).

## The set-up

### Prerequisites

In the post, I assume you're familiar with JavaScript, CSS selectors, DOM fundamentals and HTTP.

While I won't use any libraries, I'll still use a few pieces of software:

- [Chrome](https://www.google.com/chrome/) 101.0.4951.67 (web browser)
- [Tampermonkey](https://www.tampermonkey.net/) 4.16.1 (browser extension for userscript automation)
- [Node.js](https://nodejs.dev/) v17.4.0 (server-side runtime environment)
- [jq-1.6](https://stedolan.github.io/jq/) (JSON processing tool)

There's nothing particularly special about my stack. Firefox and a Python back-end will work just as well, and all of the tools other than the browser are optional and use-case dependent.

I developed on Windows 10, but the code should work fine on Linux and macOS.

### A simple feed app

The page we're scraping is a simplified single-page app feed. Every so often, a new item shows up in the feed. In a real site, items might be job or real estate listings, things for sale, new releases, (micro) blog posts or chat messages.

Each item has a list of tags representing popular technologies.

Here's the code for the mock site:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
  <title>Feed Mockup</title>
</head>
<body>
<div id="feed"></div>
<script>

const rand = n => Math.floor(Math.random() * n);

const choice = a => a[rand(a.length)];

const feed = document.querySelector("#feed");

const allTags = `
JavaScript Python Java React SQL
Node.js C++ Vue Django iOS WordPress
PHP C R HTML C# MySQL API CSS Android
Database TypeScript MongoDB OOP
`.trim().split(/\s+/);

(function showTask() {
  setTimeout(showTask, rand(6000) + 3000);
  const id = Date.now();
  const tags = [...new Set(
    [...Array(rand(4) + 1)].map(() =>
      `<li class="tag">${choice(allTags)}</li>`
    )
  )];
  feed.innerHTML += `
    <div class="item">
      <h3><a href="/items/${id}">Item ${id}</a></h3>
      <ul>${tags.join("")}</ul>
    </div>
  `;
})();

</script>
</body>
</html>
```

From a scraping perspective, the mock website's code isn't as important to understand as the site's behavior and structure. Feel free to run this code and peek at the element inspector to get a sense of the app.

The scrape should capture a good sampling of the tags that appear on the site over a few weeks or months. This allows me to determine which technologies are in-demand and compare their relative popularities.

## Scraping the Data

### Selecting the data

The first step is to use the developer tools to figure out how to access the data. Often, intercepting API responses is an easier way to get the data than diving into the DOM, but in this case, it's straightforward to select each of the item elements, then retrieve the item's unique id and array of tag text:

```js
var data = [...document.querySelectorAll(".item")]
  .map(e => ({
    id: e.querySelector("a")
      .getAttribute("href")
      .split("/")
      .at(-1),
    tags: [...e.querySelectorAll(".tag")]
      .map(e => e.textContent.trim())
  }));
console.log(data);
```

The quickest way to get the code into the browser is copying and pasting. A [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) could also work. But in this example, we're working with a long-running scrape on a site we'd like to close and come back to, so a [userscript](https://en.wikipedia.org/wiki/Userscript) manager like [Tampermonkey](https://www.tampermonkey.net/) is the best tool for the job. The userscript will automatically execute the browser code whenever we visit the site.

The output structure looks something like:

```js
[
  {
    "id": "1654371614319",
    "tags": [
      "Vue",
      "MySQL",
      "iOS"
    ]
  },
  {
    "id": "1654371623260",
    "tags": [
      "PHP"
    ]
  },
  {
    "id": "1654371631269",
    "tags": [
      "Python",
      "SQL"
    ]
  }
]
```

### Storing the data

For sites where the data is available immediately and automation isn't necessary, the story ends here. But in this example feed, I need to extract data for weeks or months to collect enough tags to make a frequency analysis meaningful. The data should be written to a file.

Since browser JS is (rightfully) sandboxed and doesn't have a consistent API for writing files, browser local storage or a localhost back-end can be used to persist the scraped data.

#### Local storage

Writing to local storage offers the most convenient approach, but bear in mind that its capacity is limited. The following approach tracks the tags per id in our sample app and ignores duplicates:

```js
if (!localStorage.getItem("data")) {
  localStorage.setItem("data", "{}");
}

setInterval(() => {
  const newData = [...document.querySelectorAll(".item")]
    .reduce((a, e) => {
      const id = e.querySelector("a")
        .getAttribute("href")
        .split("/")
        .at(-1);
      const tags = [...e.querySelectorAll(".tag")]
        .map(e => e.textContent.trim());
      a[id] = tags;
      return a;
    }, {});
  localStorage.setItem("data", JSON.stringify({
    ...JSON.parse(localStorage.getItem("data")),
    ...newData
  }));
}, 30000); // 30 seconds
```

This uses a polling [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), but listening for DOM changes with a [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) is worth keeping in mind if performance matters.

When it's time to export the data from local storage, you can trigger a file download using the Stack Overflow post [Download JSON object as a file from browser](https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser):

```js
var a = document.createElement("a");
a.href = "data:text/json;charset=utf-8," +
  encodeURIComponent(JSON.stringify(storageObj));
a.download = "data.json";
a.click();
```

As with local storage, there are limits to the size of the data you can download.

A Stack Overflow answer in the thread [Save data using Greasemonkey/Tampermonkey for later retrieval](https://stackoverflow.com/a/34101991/6243352) shows an interesting approach for using local storage across tabs.

#### Localhost

When local storage is too small or the tasks you want to accomplish require server code, you can write a small back-end app to support your userscript.

The back-end can be written in Python/Flask, Ruby/Sinatra, PHP or anything else that suits you. In this example, I'll use plain Node. Express would make the code shorter, but in the spirit of "no-libraries", I'll use Node's built-in [`http`](https://nodejs.org/api/http.html) module.

```js
const fs = require("fs");
const http = require("http");

const dataFile = "data.json";
fs.existsSync(dataFile) || fs.writeFileSync(dataFile, "{}");
const data = JSON.parse(fs.readFileSync(dataFile));

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600"
};

const sendStatus = (res, status) => {
  res.writeHead(status, headers);
  res.end();
};

const handleRequest = (req, res) => {
  if (req.method === "OPTIONS") {
    return sendStatus(res, 204);
  }
  else if (req.method !== "POST") {
    return sendStatus(res, 405);
  }

  let body = "";
  req.on("data", chunk => {
    body += chunk.toString();
  });
  req.on("end", async () => {
    try {
      for (const {id, tags} of JSON.parse(body).data) {
        data[id] = tags;
      }

      const json = JSON.stringify(data, null, 2);
      await fs.promises.writeFile(dataFile, json);
      sendStatus(res, 200);
    }
    catch (err) {
      console.error(err);
      sendStatus(res, 400);
    }
  });
};
http.createServer(handleRequest)
  .listen(8000, () => console.log("listening on port 8000"))
;
```

The server listens on [http://localhost:8000](http://localhost:8000/), responds to CORS preflight requests and allows POST requests with the following JSON body format:

```js
{
  "data": [
    {"id": "1652730368965", "tags": ["Vue", "Java", "OOP", "C#"]},
    {"id": "1652730376727", "tags": ["WordPress", "MySQL"]},
  ]
}
```

The endpoint dumps the tags to a JSON file, `data.json`. The result structure avoids duplicates using an object that maps id keys to tag lists:

```js
{
  "1652730368965": [
    "Vue",
    "Java",
    "OOP",
    "C#"
  ],
  "1652730376727": [
    "WordPress",
    "MySQL"
  ]
}
```

Use caution when exposing a local file system to potentially malicious scripts running on a public site like this.

#### Sending the data to the server

This code sends the scraped data from the browser console to the server periodically using the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):

```js
setInterval(() => {
  const payload = [...document.querySelectorAll(".item")]
    .map(e => ({
      id: e.querySelector("a")
        .getAttribute("href")
        .split("/")
        .at(-1),
      tags: [...e.querySelectorAll(".tag")]
        .map(e => e.textContent.trim())
    }));

  fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data: payload})
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.status);
      }
    })
    .catch(err => console.error(err));
}, 30000); // 30 seconds
```

With the server running (`node server`) and the feed page open in a browser, you should be able to run the above interval code in your console via copy-paste or a userscript and begin filling up `data.json`.

### Processing the data

On the real app, after leaving the interval running in a tab for a month, I had a 125kb chunk of JSON to analyze. I used the jq utility to create frequency counts of occurrences of each tag and select the top 10:

```
$ cat data.json | jq -r '
    values
  | flatten
  | reduce .[] as $e ({}; .[$e] += 1)
  | to_entries
  | sort_by(-.value)
  | .[:10]
  | map(\"\(.key) \(.value)\")
  | .[]
'
JavaScript 426
Python 407
Java 258
React 208
SQL 111
Node.js 109
C++ 109
Python 3.x 107
HTML/CSS 100
PHP 96
```

Success! The top few results weren't surprising but there was more interest elsewhere in the list.

## When to go library-free

The library-free approach described here is essentially a scraping-focused userscript, along with persistent storage or other server logic.

This technique works well for personal scraping or monitoring tasks that only need as much automation as a browser tab provides. Since the code is practically in user space, this approach is great for getting your data even when browser automation runs into captchas and outright blocking, assuming you're not looking for a long-term, cloud-ready solution.

However, this technique is not scalable. For headless, production-grade scraping, take advantage of a standard browser automation solution.

## Wrapping up

This post shows a toy example of a general scraping technique that extends the power of the browser console with userscripting and a bit of persistence. It's handy as a less-fuss alternative to firing up a browser automation tool for lightweight, local scrapes.

Along the way, I've applied a few general techniques from the web ecosystem: using JS to select and extract data from the DOM, writing a simple Node back-end, making requests with `fetch` and manipulating JSON. Regardless of whether you're using a browser automation tool or doing a quick scrape from the console, these skills will come in handy.

## Free Plan · 100 searches / mont