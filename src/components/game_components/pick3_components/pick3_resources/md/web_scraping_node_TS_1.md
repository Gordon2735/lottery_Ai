[![Cover image for Web scraping with Node.js and Typescript - the scraper part (1/3)](https://res.cloudinary.com/practicaldev/image/fetch/s--0VrIj_Yn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/b1a7b5a772274bef411adb6cfe00c7e6147b3552/13d8bbc8ff0469d3e4ca25de8b6f71a0.jpg)](https://res.cloudinary.com/practicaldev/image/fetch/s--0VrIj_Yn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/b1a7b5a772274bef411adb6cfe00c7e6147b3552/13d8bbc8ff0469d3e4ca25de8b6f71a0.jpg)

[![Richard Jedlička](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F814162%2Fb7455e3a-a935-45a9-972a-767863e53d1e.jpeg)](https://dev.to/uiii)

[Richard Jedlička](https://dev.to/uiii)

Posted on Feb 21, 2022 • Updated on Mar 6, 2022

![](https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg) 8 ![](https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg) 2 ![](https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg) ![](https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg) ![](https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg)

# Web scraping with Node.js and Typescript - the scraper part (1/3)

## [Web scraping with Node.js and Typescript (2 Part Series)](https://dev.to/uiii/series/16972)

[1 Web scraping with Node.js and Typescript - the scraper part (1/3)](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn "Published Feb 21 '22") [2 Web scraping with Node.js and Typescript - the crawler part (2/3)](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2 "Published Mar 6 '22")

Internet is full of information these days. Almost every website display them to the user in a human readable form. But what if you want to process these data programmatically, do some analysis, present them in a different form or store them in a database to make queries on them later? E.g. collect all the product names with a description, image and a price from your favorite online store. Well, you can open the page by page and _copy&paste_ the data you need, but you won't 🤦‍♂️. What you definitely can and should is to check if the page has an [API](https://en.wikipedia.org/wiki/API) which will provide you the data easily. If not, I'm sorry bro there is no way to ... just kidding! 😝

... the **web scraping** comes into play. Yay!

---

👉 In this article series (3 parts) I will guide you through the whole process of building a web scraper in Node.js and Typescript.

In the first article you will learn how to [scrape data from a single webpage](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#lets-scrape-something). In the second article you I will teach you how to [crawl the website to find and scrape all the wanted pages](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2). And in the last article I will show you how to **use a proxy with the scraper** (_coming soon_) which can have some advantages in certain situations.

If you are a **beginner** or a more **skilled programmer** who is new to web scraping, transitioning from different programming language or just curious how others do it, you will benefit from this.

-   [Prerequisites](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#prerequisites)
-   [What is web scraping exactly?](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#what-is-web-scraping-exactly)
-   [Let's scrape something!](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#lets-scrape-something)
    -   [What are we going to scrape?](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#what-are-we-going-to-scrape)
    -   [First simple scraping](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#first-simple-scraping)
    -   [More difficult selector](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#more-difficult-selector)
    -   [Scraping elements "in context"](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#scraping-elements-in-context)
    -   [Parsing the scraped data](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#parsing-the-scraped-data)
    -   [Scraping images](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#scraping-images)
-   [Data model](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#data-model)
-   [Final code](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#final-code)
-   [Conclusion](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#conclusion)

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#prerequisites)Prerequisites

I assume you are familiar with **[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [Typescript](https://www.typescriptlang.org/)**, know **HTML and CSS selectors** and have **[Node.js](https://nodejs.org/)** installed.

If not, check out these resources:

-   Javascript: [https://javascript.info](https://javascript.info/)
-   Typescript: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs/)
-   HTML/CSS: [https://learn.shayhowe.com](https://learn.shayhowe.com/)

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#what-is-web-scraping-exactly)What is web scraping exactly?

As you [should know](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#prerequisites) the websites are built using HTML and CSS. HTML describes the structure of the information in the page using tags. What web scraper does is extracting required information from the specified HTML tags. CSS selectors are very good way how to tell the scraper which tags to look at.

So the input for the scraper is the URL of a page (e.g. product detail). The scraper then loads the HTML source code, parse it, filters the tags specified by CSS selectors and extracts text from them. Then outputs the extracted data in a structured way (e.g. JSON). Easy, right?

Wait! You may ask ... _Where do I get the page URLs? Do I have to copy&paste them to the crawler manually?_

Of course not! Web scrapers are usually more robust and also contain the "crawler" part to automate the whole process.

The crawler will go through (crawls) the website and search for the pages which have the data to be scraped.

Actually, it is a special type of scraper which usually starts at homepage and looks for the hyperlinks according to specific rules and follows them and repeats the process until it finds the desired pages.

> The term "web scraper" is often used interchangeably with "web crawler".

---

> ❗❗ **Important** thing to know is you should be careful when scraping any website. Web scraping isn’t illegal by itself but you should care about how you do it and what you do with the data. There is also an ethical side of it. Do not harm the website and check if you have the rights to use the data the way you are going to. Read more here: [https://blog.apify.com/is-web-scraping-legal/](https://blog.apify.com/is-web-scraping-legal/). If you are not sure, ask your lawyer.
>
> **_Disclaimer_**_: I am not taking any responsibility for your web scraping activities. Do it at your own risk._

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#lets-scrape-something)Let's scrape something!

🎓 For an example, consider we want to have a list of all European capital cities with a basic data like its name, name of the country, current population, area and an image of a city flag. The [Wikipedia](https://en.wikipedia.org/) can be used as a good source of information.

First, init the project

```
npm init
npm install --save-dev typescript ts-node
npx tsc --init
```

Enter fullscreen mode Exit fullscreen mode

and install the packages we will need.

```
npm install axios cheerio @types/cheerio
```

Enter fullscreen mode Exit fullscreen mode

_[Axios](https://github.com/axios/axios) is an HTTP client which we will use for fetching website data. It is more robust and feature-rich alternative to [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)._

_[Cheerio](https://cheerio.js.org/) is a tool to parse HTML and gives you the ability to make queries on HTML tags and extract data from them. It is similar to [jQuery](https://jquery.com/) but more suitable for server side._

> 💻 See the complete project in the [GitHub repository](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/tree/article-1-the-scraper-part)

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#what-are-we-going-to-scrape)What are we going to scrape?

As we are prepared, we will start with a "scraper" part, so go and look at the capital city page we are going to scrape, e.g. [https://en.wikipedia.org/wiki/Prague](https://en.wikipedia.org/wiki/Prague)

[![Highlighted location of city name on the page](https://res.cloudinary.com/practicaldev/image/fetch/s--bbftr8tk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/0807aa75d96c90e1e1bb911c94084a53a3094460/9e70dc3a1ec45534599e80434ffe668a.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--bbftr8tk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/0807aa75d96c90e1e1bb911c94084a53a3094460/9e70dc3a1ec45534599e80434ffe668a.png)

[![Highlighted location of city flag on the page](https://res.cloudinary.com/practicaldev/image/fetch/s--awOGzGNM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/a6e29c50d1e5a3d39089c31a13bfe3f1cf92f86d/4975e0ff1135b5182f7d929872f8f981.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--awOGzGNM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/a6e29c50d1e5a3d39089c31a13bfe3f1cf92f86d/4975e0ff1135b5182f7d929872f8f981.png)

[![Highlighted location of other city data on the page](https://res.cloudinary.com/practicaldev/image/fetch/s--0qsxEvu3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/115abd391a35d76f74522e6176bc7b95cce06178/953e25b00325525342efb6f95906aa95.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--0qsxEvu3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/115abd391a35d76f74522e6176bc7b95cce06178/953e25b00325525342efb6f95906aa95.png)

There it is, the data we need. Ah, ok, but how do we know the location of the data in the page's HTML 🤔? Easily, we use dev tools. I'm using Chrome browser (other modern browsers usually have dev tools too) so right click the article's title element and select _Inspect_.

[![Inspecting city name HTML element with dev tools](https://res.cloudinary.com/practicaldev/image/fetch/s--k-Dkyk3R--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/644f88907769be6f332cba32776c064e582601e8/b930b4daa41fd0a9f2ea67f5b71b8f4b.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--k-Dkyk3R--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/644f88907769be6f332cba32776c064e582601e8/b930b4daa41fd0a9f2ea67f5b71b8f4b.png)

As you can see, the name of the city resides in `<h1>` tag with the ID `firstHeading`. I'm sure you are getting the idea.

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#first-simple-scraping)First simple scraping

Stop talking and create some code!

Create a file `index.ts` and put in this code

```
import axios from 'axios';
import cheerio from 'cheerio';

export class CapitalCityScraper {
    async scrapeCity(url: string) {
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        const cityName = $('#firstHeading').text().trim();
        console.log(cityName);
    }
}

async function main() {
    const scraper = new CapitalCityScraper();
    await scraper.scrapeCity("https://en.wikipedia.org/wiki/Prague");
}

main();
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [f13ccee0](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/f13ccee0113d3da1f3ba4542c135d587d0f95c5f)

Are you excited? Run the code

```
$ npx ts-node index.ts
Prague
```

Enter fullscreen mode Exit fullscreen mode

🎉 Congratulations, your first scraping! Isn't it beautiful 🤩?

I think the code is quite self-explanatory, still I will go through some interesting moments

```
const response = await axios.get(url);
const html = response.data;
```

Enter fullscreen mode Exit fullscreen mode

Axios makes an HTTP GET request to the specified URL and returns a promise which will hold the response with an HTML source code (in our case).

> If you are not familiar with `async/await` check this [https://javascript.info/async-await](https://javascript.info/async-await). Basically, it is very comfortable way to work with JS promises. The code "waits" until the promise is resolved and returns its data.

```
const $ = cheerio.load(html);
```

Enter fullscreen mode Exit fullscreen mode

Cheerio parses the HTML and returns a querying function bound to a document based on that HTML markup. The querying function (`$`) accepts CSS selector and finds corresponding element(s) in the document.

```
const cityName = $('#firstHeading').text().trim();
```

Enter fullscreen mode Exit fullscreen mode

Here we find the element with ID `firstHeading` and get its text content. It is also a good practice to trim the leading and trailing whitespace.

Ok, this was easy, right? Let's move on to something more difficult.

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#more-difficult-selector)More difficult selector

[![Inspecting country name HTML element with dev tools](https://res.cloudinary.com/practicaldev/image/fetch/s--wkr4VwPY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/826d1ed4b58092722ef52eff95676795c66e68a1/b269f4921ec316ac31af9405aca4b421.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--wkr4VwPY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/826d1ed4b58092722ef52eff95676795c66e68a1/b269f4921ec316ac31af9405aca4b421.png)

The country's name is in `<a>` tag, but the tag has no ID or a class. We have to loot at its parent elements. The interesting one is the table row `<tr>` with a class `mergedtoprow`. But, there is a catch. If you look around, there are lots of table rows with the same class. Hmm 🤔, how do we select the correct row? Maybe we can use row's index? I wouldn't count on that as the other pages may have different number of info rows. I think there is no easy way with regular CSS selectors. What we can expect is that the row's label will always be "Country". Cheerio supports the same selectors as jQuery and it has a special selector `:contains()` (see [jQuery doc](https://api.jquery.com/contains-selector/)) which checks if the element contains specific text. So the idea is we find the `<td>` element which is after the `<th>` element (row's label) containing text "Country".

Add this to the end of the `scrapeCity` method.

```
const country = $('.mergedtoprow th:contains(Country) + td').text().trim();
console.log(country);
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [07db4fbe](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/07db4fbef18873eac02fc7b8580bbeec6f50ecf9)

Run the code again

```
$ npx ts-node index.ts
Prague
Czech Republic
```

Enter fullscreen mode Exit fullscreen mode

Nice!

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#scraping-elements-in-context)Scraping elements "in context"

When you look at area and population, the rows we are interested in have the same label _Capital city_, therefore we can't use the same selector as for the country name directly. We need to find the relevant row according to the previous label _Area_ or _Population_. You might be getting the impression that the row is nested inside a box, but, if you look closely, there are no boxes actually.

[![Inspecting city area HTML element with dev tools](https://res.cloudinary.com/practicaldev/image/fetch/s--mirnaIu_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/6beb093f0e64c9a7ac2e933471e033442d8a5189/e4a0f4e093c29a8344c2083a30c29d28.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--mirnaIu_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/6beb093f0e64c9a7ac2e933471e033442d8a5189/e4a0f4e093c29a8344c2083a30c29d28.png)

There are "top level" rows with `mergedtoprow` class which may have a "sub rows" with a class `mergedrow`. The "sub rows" are placed between two "top level" rows and relate to the first one. This is all we need to know.

```
const areaRows = $('.mergedtoprow th:contains(Area)').parent().nextUntil('.mergedtoprow');
const area = areaRows.find('th:contains(Capital city) + td').text().trim();
console.log(area);
```

Enter fullscreen mode Exit fullscreen mode

First line find the "Area" label, the `parent()` method select the wrapping row and with `nextUntil()` we select all the next elements (rows) before next "top level" row. With this we get a context (`areaRows`) where we find the value with the same principle as for the country's name.

The same for population

```
const populationRows = $('.mergedtoprow th:contains(Population)').parent().nextUntil('.mergedtoprow');
const population = populationRows.find('th:contains(Capital city) + td').text().trim();
console.log(population);
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [95c3bb09](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/95c3bb093841eba0bc057d7f46e4f265c59d7e5a)

And after running

```
$ npx ts-node index.ts
Prague
Czech Republic
496 km2 (192 sq mi)
1,335,084
```

Enter fullscreen mode Exit fullscreen mode

All right. We have got the information, but in a formatted shape 🤔. We want numbers!

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#parsing-the-scraped-data)Parsing the scraped data

It happens quite often when scraping that the information you scrape is formatted as human readable and not structured very well. So you have to make another step to parse (extract) the right data from the strings you scrape. In our case we want to have are as number of squared kilometers and the population as a count of persons.

[Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) for the win!

Modify the code slightly

```
const areaText = areaRows.find('th:contains(Capital city) + td').text().trim().replace(/ km2.*$/, '');
const area = parseFloat(areaText.replace(/,/g, ''));

const populationText = populationRows.find('th:contains(Capital city) + td').text().trim();
const population = parseFloat(populationText.replace(/,/g, ''));
```

Enter fullscreen mode Exit fullscreen mode

> Notice this will work for English localization, different languages can have numbers in different format.

In area text, we first drop everything from the unit to the end. And before converting to a number with `parseFloat` the commas must be removed.

> 💻 See the commit [e88b6bae](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/e88b6bae3466f1acfa874b4032301044018c40d7)

Looks better now!

```
$ npx ts-node index.ts
Prague
Czech Republic
496
1335084
```

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#scraping-images)Scraping images

When scraping images, you can just scrape the image's URL or download the file itself. URL is fine if you want to display the image on another website or just want to store the link to it. But if you want to make some modifications to the image or you can't rely on the image's availability on the source website, you need to download it. I will show you the second case.

Still, we need to obtain the image's URL first. Let's analyze the HTML for the city flag.

[![Inspecting city flag HTML element with dev tools](https://res.cloudinary.com/practicaldev/image/fetch/s--qh4g_RXg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/0a16c2f9ff8a3b3325a9ce47495864233d41e6f8/e0ba37c5d0e19905d418436a0f172e2e.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--qh4g_RXg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/0a16c2f9ff8a3b3325a9ce47495864233d41e6f8/e0ba37c5d0e19905d418436a0f172e2e.png)

The image of the flag is wrapped in `<a>` tag with `image` class which is in front of the `<div>` with a text "Flag". However, the `<img>` tag doesn’t keep the original SVG file, only the small PNG thumbnail. The anchor tag looks like it keeps the image’s URL.

Actually, it links to another webpage.

[![Inspecting city flag image with dev tools](https://res.cloudinary.com/practicaldev/image/fetch/s--DyWlv51Q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/142dd92c1a82191f73a53e843a82953f51e24e0d/8536e2fe13ec2fe568df561dbade1754.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--DyWlv51Q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/4289539c7a8e4decbdc635cfa60ce9d6/raw/142dd92c1a82191f73a53e843a82953f51e24e0d/8536e2fe13ec2fe568df561dbade1754.png)

There it is. The `<a>` tag there has the URL we are looking for.

Get the flag image page URL.

```
const flagPageLink = $('.mergedtoprow a.image + div:contains(Flag)').prev().attr('href')!;
const flagPageUrl = new URL(flagPageLink, url).toString();
const flagImagePath = await this.scrapeImage(flagPageUrl);
console.log(flagImagePath);
```

Enter fullscreen mode Exit fullscreen mode

I made the selector more universal by using a template string with a city's name. The `flagPageLink` variable keeps the relative path. The [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) object will help us to obtain the full URL, the second argument is a base URL, the one of the city's wiki page in our case.

To make the scraper more organized, I moved the code for the image scraping into the separated method `scrapeImage`. The method can be used to scrape the image from any Wikipedia's image detail page.

```
protected async scrapeImage(url: string) {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const imageLink = $('#file a').attr('href')!;
    const imageUrl = new URL(imageLink, url).toString();

    const imagePath = await this.downloadFile(imageUrl, 'flags');

    return imagePath;
}
```

Enter fullscreen mode Exit fullscreen mode

Everything should be already familiar to you. And again the code related to downloading of the image is separated to another method `downloadFile`.

```
protected async downloadFile(url: string, dir: string) {
    const response = await axios.get(url, {
        responseType: 'arraybuffer'
    });

    fs.mkdirSync(dir, {recursive: true});

    const filePath = path.join(dir, path.basename(url));
    fs.writeFileSync(filePath, response.data);

    return filePath;
}
```

Enter fullscreen mode Exit fullscreen mode

This method is universal for downloading any file to a specified directory. The option `responseType: 'arraybuffer'` is crucial here. Axios will then consider the URL as a source of binary data and don't try to parse the response as a text.

> 💻 See the commit [2e0dec92](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/2e0dec92eb6360f02fddbb86bd44fbf8567d57b5)

Now, if you run the code, you will see this

```
$ npx ts-node index.ts
Prague
Czech Republic
496
1335084
flags/Flag_of_Prague.svg
```

Enter fullscreen mode Exit fullscreen mode

And if you look into the folder `flags` you will find the file `Flag_of_Prague.svg` here 🥳.

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#data-model)Data model

Great, we can scrape all the data we need. But all of them are just printed to the console in the moment when they are obtained. This is not good to work with. We want to return them in some form from our `scrapeCity` method. Plain object is sufficient.

For type safety, we will use an [interface](https://www.typescriptlang.org/docs/handbook/2/objects.html). Put it above the scraper class.

```
interface City {
    name: string;
    country: string;
    area: number;
    population: number;
    flagImagePath: string;
}
```

Enter fullscreen mode Exit fullscreen mode

Remove all the `console.log` commands and put the this code at the end of `scrapeCity` function.

```
const city: City = {
    name: cityName,
    country,
    area,
    population,
    flagImagePath
};

return city;
```

Enter fullscreen mode Exit fullscreen mode

Now this is much better, out scraped data has a specific shape and we can manipulate with them later. For now, we will just modify our `main` function to get the city object and print it to the console (in whole).

```
async function main() {
    const scraper = new CapitalCityScraper();
    const city = await scraper.scrapeCity("https://en.wikipedia.org/wiki/Prague");
    console.log(city);
}
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [96426d2d](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/96426d2d84cc41c0f2bcf348d20b81a18fb4a159)

Run the script.

```
$ npx ts-node index.ts
{
  name: 'Prague',
  country: 'Czech Republic',
  area: 496,
  population: 1335084,
  flagImagePath: 'flags/Flag_of_Prague.svg'
}
```

Enter fullscreen mode Exit fullscreen mode

I feel quite satisfied now 😎. What about you?

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#final-code)Final code

> 💻 See the complete project in the [GitHub repository](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/tree/article-1-the-scraper-part)

```
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';

interface City {
    name: string;
    country: string;
    area: number;
    population: number;
    flagImagePath: string;
}

export class CapitalCityScraper {
    async scrapeCity(url: string) {
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        const cityName = $('#firstHeading').text().trim();

        const country = $('.mergedtoprow th:contains(Country) + td').text().trim();

        const areaRows = $('.mergedtoprow th:contains(Area)').parent().nextUntil('.mergedtoprow');
        const areaText = areaRows.find('th:contains(Capital city) + td').text().trim().replace(/ km2.*$/, '');
        const area = parseFloat(areaText.replace(/,/g, ''));

        const populationRows = $('.mergedtoprow th:contains(Population)').parent().nextUntil('.mergedtoprow');
        const populationText = populationRows.find('th:contains(Capital city) + td').text().trim();
        const population = parseFloat(populationText.replace(/,/g, ''));

        const flagPageLink = $('.mergedtoprow a.image + div:contains(Flag)').prev().attr('href')!;
        const flagPageUrl = new URL(flagPageLink, url).toString();
        const flagImagePath = await this.scrapeImage(flagPageUrl);

        const city: City = {
            name: cityName,
            country,
            area,
            population,
            flagImagePath
        };

        return city;
    }

    protected async scrapeImage(url: string) {
        const response = await axios.get(url);
        const html = response.data;

        const doc = cheerio.load(html);

        const imageLink = doc('#file a').attr('href')!;
        const imageUrl = new URL(imageLink, url).toString();

        const imagePath = await this.downloadFile(imageUrl, 'flags');

        return imagePath;
    }

    protected async downloadFile(url: string, dir: string) {
        const response = await axios.get(url, {
            responseType: 'arraybuffer'
        });

        fs.mkdirSync(dir, { recursive: true });

        const filePath = path.join(dir, path.basename(url));
        fs.writeFileSync(filePath, response.data);

        return filePath;
    }
}

async function main() {
    const scraper = new CapitalCityScraper();
    const city = await scraper.scrapeCity("https://en.wikipedia.org/wiki/Prague");
    console.log(city);
}

main();
```

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#conclusion)Conclusion

Now you know how to scrape a web page in Javascript/Typescript. I hope you agree it is quite easy and fun.

Of course it depends on the website you want to scrape, the less the data you want are structured, the harder is it to get them. There are always many ways how to achieve the goal, sometimes it is straightforward, sometimes tricky. But if you managed it, the result can be quite satisfying when you are giving an order to something unorganised 😁.

Currently, we can handle a single capital city page only. In the **next article** I will teach you how to **crawl** the Wikipedia website to scrape all of them.

[

![uiii](https://res.cloudinary.com/practicaldev/image/fetch/s--pk0yDJ1l--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--fcbpPwOQ--/c_fill%2Cf_auto%2Cfl_progressive%2Ch_150%2Cq_auto%2Cw_150/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/814162/b7455e3a-a935-45a9-972a-767863e53d1e.jpeg)

](https://dev.to/uiii)[

## Web scraping with Node.js and Typescript - the crawler part (2/3)

### Richard Jedlička ・ Mar 6 ・ 13 min read

](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2)

## [Web scraping with Node.js and Typescript (2 Part Series)](https://dev.to/uiii/series/16972)

[1 Web scraping with Node.js and Typescript - the scraper part (1/3)](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn "Published Feb 21 '22") [2 Web scraping with Node.js and Typescript - the crawler part (2/3)](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2 "Published Mar 6 '22")

## Top comments (2)

Crown

### Sort discussion:

-   [
    Selected Sort Option Top
    Most upvoted and relevant comments will be first
    ](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn?comments_sort=top#toggle-comments-sort-dropdown)
-   [
    Latest
    Most recent comments will be first
    ](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn?comments_sort=latest#toggle-comments-sort-dropdown)
-   [
    Oldest
    The oldest comments will be first
    ](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn?comments_sort=oldest#toggle-comments-sort-dropdown)

Subscribe

    ![pic](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F713708%2F0016d06f-04a4-467a-a54b-10b4d05262f3.jpeg)

Personal Trusted User

[Create template](https://dev.to/settings/response-templates)

Templates let you quickly answer FAQs or store snippets for re-use.

Submit Preview [Dismiss](https://dev.to/404.html)

Collapse Expand

[![crawlbase profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1186166%2F250fc3d9-55d5-4e3e-9edb-aa20f0271fed.jpg)](https://dev.to/crawlbase)

[Crawlbase](https://dev.to/crawlbase)

Crawlbase

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1186166%2F250fc3d9-55d5-4e3e-9edb-aa20f0271fed.jpg) Crawlbase](https://dev.to/crawlbase)

Follow

Crawlbase is a web scraping tool to streamline web crawling for data extraction, with smart proxy, empowering businesses with efficient and accurate insights from diverse online sources.

-   Email
    [marketing@crawlbase.com](mailto:marketing@crawlbase.com)
-   Joined
    Oct 16, 2023

• [Feb 29](https://dev.to/crawlbase/comment/2da76)

Dropdown menu

-   [Copy link](https://dev.to/crawlbase/comment/2da76)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/crawlbase/comment/2da76)

Lots of thanks for such insightful dive into the world of web scraping with Node.js and TypeScript! This comprehensive guide solves the complexities of scraping data from web pages, empowering us to extract valuable information. If you're on the lookout for a dependable scraping companion, [Crawlbase](https://crawlbase.com/) might just be the missing piece to your toolkit. Keep scraping, keep innovating!

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn/comments/new/2da76)
