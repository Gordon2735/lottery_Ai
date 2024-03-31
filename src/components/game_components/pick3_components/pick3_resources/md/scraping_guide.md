# Complete Guide to Web Scraping using Typescript

[typescript](https://scrapfly.io/blog/tag/typescript/) [Scraping Introduction](https://scrapfly.io/blog/tag/intro/)

Aug 10, 2023 (Updated 3 months ago)

-   [Copied to clipboard](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#)

![article feature image](https://scrapfly.io/blog/content/images/introducing-typescript-sdk-for-web-scraping-scrapfly_banner_light.svg)

Typescript is becoming a popular language in web scraping as it allows the creation of highly maintainable and performing web scrapers. Typescript web scrapers can be transpiled to javascript for running on the web or NodeJS servers or even bundled as executable applications using tools like `Bun` or `Deno`.

In this article, we'll take a look at web scraping using Typescript. What Typescript libraries to use for web scraping, common scraping idioms and check out an example Typescript web scraper. So, let's dive in!

1. [Setup and Transpilation](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#setup-and-transpilation)
2. [Quick Intro](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#quick-intro)
3. [Requesting Data](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#requesting-data)
    1. [URL basics](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#url-basics)
    2. [Scraping Multiple Pages](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#scraping-multiple-pages)
    3. [Handling Failures and Retrying](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#handling-failures-and-retrying)
4. [Parsing HTML Data](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#parsing-html-data)
5. [Example Scraper Project](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#example-scraper-project)
6. [Scraper Blocking](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#scraper-blocking)
    1. [Malformed requests](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#malformed-requests)
    2. [Scraper Identification](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#scraper-identification)
7. [Power Up with Scrapfly](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#power-up-with-scrapfly)
8. [FAQ](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#faq)
9. [Summary](https://scrapfly.io/blog/ultimate-intro-to-web-scraping-with-typescript/#summary)

[SCRAPFLY ACADEMY](https://scrapfly.io/academy)

Learn more web scraping ☝️

## Setup and Transpilation

Typescript used to be a transpile-only language where TS code would be converted to Javascript for NodeJS runtime. These days multiple runtimes don't require the transpilation step like [Bun](https://bun.sh/) or [Deno](https://deno.com/) and can run `.ts` files directly.

Whether to transpile TS code to NodeJS or use TS runtime is a matter of preference though to summarize - NodeJS is more stable and production ready while the new TS runtimes are significantly easier to use but can still have bugs.

In this article, for simplicity, we'll use `Bun` for our examples.  
However, the code snippets can be converted to NodeJS using the `tsc` console command. For example, `tsc scraper.ts` will create `scraper.js` which can be run with nodejs as `node scraper.js`.

For web scraping libraries we'll be using:

-   `axios` as our HTTP client.
-   `cheerio` as our HTML parser.
-   [Scrapfly Typescript SDK](https://github.com/scrapfly/typescript-scrapfly) for Scrapfly readers that does everything.

All of these can be installed using `bun install` command:

```shell
$ bun install scrapfly-sdk axios cheerio axios-retry
```

## Quick Intro

Let's start with a quick scraper preview.  
Here's a basic scraper that collects product information from an e-commerce website:  
[web-scraping.dev/product/1](https://web-scraping.dev/product/1)

Typescript

ScrapFly SDK

```typescript
import axios from 'axios';
import * as cheerio from 'cheerio';

const response = await axios.get('https://web-scraping.dev/product/1');
const selector = cheerio.load(response.data);
console.log({
	name: selector('h3').first().text(),
	price: selector('.price>span').text(),
	priceFull: selector('.product-price-full').text(),
	description: selector('.product-description').text()
});
```

```typescript
import { ScrapflyClient, ScrapeConfig, ScrapeResult } from 'scrapfly-sdk';

const scrapfly = new ScrapflyClient({ key: 'YOUR SCRAPFLY KEY' });
const result: ScrapeResult = await scrapfly.scrape(
	new ScrapeConfig({
		url: 'https://web-scraping.dev/product/1'
	})
);
console.log({
	name: result.selector('h3').first().text(),
	price: result.selector('.price>span').text(),
	'price-full': result.selector('.product-price-full').text(),
	description: result.selector('.product-description').text()
});
```

If we run this using `bun run scraper.ts` we'll get the following output:

```javascript
{
  name: "Box of Chocolate Candy",
  price: "$9.99 ",
  priceFull: "$12.99",
  description: "Indulge your sweet tooth with our Box of Chocolate Candy. Each box contains an assortment of rich, flavorful chocolates with a smooth, creamy filling. Choose from a variety of flavors including zesty orange and sweet cherry. Whether you're looking for the perfect gift or just want to treat yourself, our Box of Chocolate Candy is sure to satisfy."
}
```

In just a few lines of typescript code we web scraped the core product details! So, let's take a look at web scraping in Typescript by examining each step and the entire scraping process.

## Requesting Data

The first step of every web scraper is to request the data from the target website. In Typescript the most commonly used library for this is `axios`.

Axios is an HTTP client which allows us to communicate with HTTP servers. In short, we can request HTML content of any page using `axios.get` method:

Typescript

ScrapFly SDK

```typescript
import axios from 'axios';

const response = await axios.get('https://web-scraping.dev/product/1');
console.log(response.status);
console.log(response.data);
console.log(response.headers.toJSON());
```

```typescript
import { ScrapflyClient, ScrapeConfig, ScrapeResult } from 'scrapfly-sdk';

const scrapfly = new ScrapflyClient({ key: 'YOUR SCRAPFLY KEY' });
const result: ScrapeResult = await scrapfly.scrape(
	new ScrapeConfig({
		url: 'https://web-scraping.dev/product/1'
	})
);
console.log(result.result.status_code);
console.log(result.result.content);
```

Using `axios.get` we send an HTTP GET request which asks for page content. In return, we get a Response object which contains:

-   `.status` tells us status code of this response where 200 is a success and anything else isn't.
-   `.data` page content which in this case is page HTML
-   `.headers` page metadata. For example `"content-type": "text/html; charset=utf-8"` tells us that this is in fact a HTML page.

With these basics, we can scrape almost any website as long as we have the URL.

### URL basics

URL is at the core of web scraping. URLs tell scrapers where to find the resources so let's take a quick look  
at what makes an URL:

![illustration of a web URL structure](https://scrapfly.io/blog/content/images/common_url-structure.svg)

We can examine any URL for its components in Typescript itself:

```typescript
const url = new URL(
	'https://www.domain.com/path/to/resource?arg1=true&arg2=false'
);

console.log(url.protocol); // Output: 'https:'
console.log(url.hostname); // Output: 'www.domain.com'
console.log(url.pathname); // Output: '/path/to/resource'
console.log(url.search); // Output: '?arg1=true&arg2=false'
```

All URL parts are important in web scraping and for best results should match what you see in your browser. Here are some tips though:

-   protocol - the insecure `http` protocol is often easier to scrape compared to `https` as it's susceptible to [TLS fingerprint](https://scrapfly.io/blog/how-to-avoid-web-scraping-blocking-tls/) for scraper blocking. In other words, insecure connections are less likely to be blocked.
-   hostname - this can differ for different regions or languages like `www.domain.com` vs `www.domain.co.uk` or `www2.domain.com` so make sure to use the right one.
-   pathname - this is the path to the resource. For example, `/product/1` is the path to the product page.
-   search - some search/query parameters are used for tracking and can be discarded but some are required.

### Scraping Multiple Pages

HTTP connections are slow, some can take several seconds to complete. So, scraping multiple pages one by one is very inefficient as there's a lot of waiting where our scraper does nothing.

Instead, we can scrape pages concurrently by sending multiple requests at a time using `Promise.all` or `.then()` callbacks:

Typescript

ScrapFly SDK

```typescript
import axios from 'axios';

let start = Date.now();
const urls = [
	'https://web-scraping.dev/product/1',
	'https://web-scraping.dev/product/2',
	'https://web-scraping.dev/product/3',
	'https://web-scraping.dev/product/4',
	'https://web-scraping.dev/product/5'
];

// SLOW: using for loop
for (const url of urls) {
	await axios.get(url);
}
console.log(`for loop: ${Date.now() - start}ms`);
// for loop: 3025ms

// FAST: using Promise.all
start = Date.now();
const responses = await Promise.all(
	urls.map(async (url) => {
		return axios.get(url);
	})
);
for (const response of responses) {
	console.log(response.status);
}
console.log(`Promise.all(): ${Date.now() - start}ms`);
// Promise.all(): 1056ms

// ALTERNATIVE: using .then callback (same speed as Promise.all)
for (const url of urls) {
	axios.get(url).then((response) => {
		console.log(response.status);
	});
}
```

```typescript
import { ScrapflyClient, ScrapeConfig, ScrapeResult } from 'scrapfly-sdk';

const scrapfly = new ScrapflyClient({ key: 'YOUR SCRAPFLY KEY' });
const urls = [
	'https://web-scraping.dev/product/1',
	'https://web-scraping.dev/product/2',
	'https://web-scraping.dev/product/3',
	'https://web-scraping.dev/product/4',
	'https://web-scraping.dev/product/5'
];
const configs = urls.map((url) => new ScrapeConfig({ url }));
for await (const result of scrapfly.concurrentScrape(configs)) {
	console.log(result.result.status_code);
}
```

This essentially allows us to batch the waiting together when scraping multiple URLs so these methods should be used as much as possible in a Typescript web scraper.

### Handling Failures and Retrying

HTTP requests can fail. Be it connection loss, server error, timeout or blocking it's important to handle these failures gracefully.

In Typescript HTTP requests can fail in two ways - either by throwing an exception or by returning a non-200 status code. In both cases, we can use `try/catch` to handle the failure:

```typescript
import axios from 'axios';

// will throw for any non-200 response:
try {
	const response = await axios.get('https://httpbin.dev/status/404');
} catch (err) {
	console.log(`${err.config.url} got ${err}`);
	// https://httpbin.dev/status/404 got AxiosError: Request failed with status code 404
}

// will throw for common connection errors like DNS lookup failure or no internet:
try {
	const response = await axios.get('http://doesntexistzz.com');
} catch (err) {
	console.log(`${err.config.url} got ${err}`);
	// http://doesntexistzz.com got FailedToOpenSocket: Was there a typo in the url or port?
}
```

However, failure is natural in web scraping so we need to retry common retryable errors to prevent losing progress.

For this, [axios-retry](https://www.npmjs.com/package/axios-retry) library can be used which retries failures automatically for any axios request:

```typescript
import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
	// specify max amount of retries:
	retries: 3,
	// create a delay between each request base don retry count:
	retryDelay: (retryCount) => {
		return retryCount * 1000;
	},
	// print message on retry:
	onRetry: (count, err, req) => {
		console.log(`retry attempt #${count} got ${err}`);
	},
	retryCondition: axiosRetry.isNetworkOrIdempotentRequestError // default: retries status code 5xx and Network errors
});

const response = await axios.get('https://httpbin.dev/unstable');
console.log(response.status);
```

Above, we are scraping a website [httpbin.dev/unstable](https://httpbin.dev/unstable) which is designed to randomly break sometimes with status code 500.  
If we run this script a few times we can see `axios-retry` in action:

```text
retry attempt #1 got AxiosError: Request failed with status code 500
retry attempt #2 got AxiosError: Request failed with status code 500
200
```

Axios-retry allows us to specify an automatic retry logic for our web scraping requests.

Note that `retryCondition` parameter can be configured for your specific use case as every website fails differently. Some return status code 5xx some indicate failure using text in the HTML.

## Parsing HTML Data

Once we scrape the HTML pages from the URL sources we can extract data fields by parsing the HTML text. In Typescript to parse HTML the most commonly used tool is CSS selectors.

[CSS selectors](https://scrapfly.io/blog/parsing-html-with-css/) were created to style HTML pages where a path instruction  
is used to indicate what elements a style should be applied to:

```css
#main .content p {
	color: red;
}
```

The above would make all paragraphs red in an HTML like this:

```html
<div id="main">
	<div class="content">
		<p>I'm red!</p>
	</div>
</div>
```

So, we can use CSS selectors to find data in our web scraper the same way styler finds elements for styling!

[

Parsing HTML with CSS Selectors

For a complete primer on CSS selectors in web scraping see our hands-on introduction with interactive examples.

![Parsing HTML with CSS Selectors](https://scrapfly.io/blog/content/images/parsing-html-with-css_banner_light.svg)

](https://scrapfly.io/blog/parsing-html-with-css/)

For this, the most popular library is `cheerio` and here's how we can apply it to our scraper. For example, let's take a look at [web-scraping.dev/product/1](https://web-scraping.dev/product/1):

![markup of web-scraping.dev product capture](https://scrapfly.io/blog/content/images/ultimate-intro-to-web-scraping-with-typescript_wsdev-product-markup.webp)

By taking a look at the HTML source (using [Browser Developer Tools](https://scrapfly.io/blog/browser-developer-tools-in-web-scraping/)) we can design our CSS selectors and then use them in our scraper:

Typescript

ScrapFly SDK

```typescript
import axios from "axios";
import * as cheerio from "cheerio";

// 1. Retrieve the page
const response = await axios.get("https://web-scraping.dev/product/1");
// 2. create HTML parser
const selector = cheerio.load(response.data);
// 3. select product datapoints using CSS selectors:
console.log({
    "name": selector("h3").first().text(),
    "price": selector(".price>span").text(),
    "priceFull": selector(".product-price-full").text(),
    "description": selector(".product-description").text(),
});
// result:
{
  name: "Box of Chocolate Candy",
  price: "$9.99 ",
  priceFull: "$12.99",
  description: "Indulge your sweet tooth with our Box of Chocolate Candy. Each box contains an assortment of rich, flavorful chocolates with a smooth, creamy filling. Choose from a variety of flavors including zesty orange and sweet cherry. Whether you're looking for the perfect gift or just want to treat yourself, our Box of Chocolate Candy is sure to satisfy."
}
```

```typescript
import { ScrapflyClient, ScrapeConfig, ScrapeResult } from 'scrapfly-sdk';
const scrapfly = new ScrapflyClient({ key: 'YOUR SCRAPFLY KEY' });
const result: ScrapeResult = await scrapfly.scrape(
	new ScrapeConfig({
		url: 'https://web-scraping.dev/product/1'
	})
);
console.log({
	name: result.selector('h3').first().text(),
	price: result.selector('.price>span').text(),
	priceFull: result.selector('.product-price-full').text(),
	description: result.selector('.product-description').text()
});
```

Above, we are loading the HTML page into a cheerio parser using `cheerio.load` method. This parser then takes in CSS selectors and returns us matching data.  
We get the product name from the first `h3` element, the price from the first `span` element that's inside an element with class `price` and so on.

## Example Scraper Project

With basic HTTP requests and HTML parsing knowledge, we can now take a look at what a real web scraper looks like in Typescript.

In this example Typescript scraper we'll be scraping product data from this mock e-commerce website [web-scraping.dev/products](https://web-scraping.dev/products) made specifically to test web scraping:

![screengrab of web-craping.dev product paging](https://scrapfly.io/blog/content/images/ultimate-intro-to-web-scraping-with-typescript_wsdev-products.webp)

It lists multiple product pages through several pagination pages where each page contains 5 products. So we'll be using a web crawling technique to find all products and scrape them. Here's our quick plan:

1. We'll go to the first page of product pagination [/products](https://web-scraping.dev/products)
2. Find URLs to other pagination pages (pages 2,3,4,5)
3. Scrape all paging URLs and find product URLs
4. Scrape all product URLs for product data

Here's a quick illustration of our Typescript web crawler process:

![flowchart illustration of crawling process for web-scraping.dev products](https://scrapfly.io/blog/content/images/ultimate-intro-to-web-scraping-with-typescript_crawl-loop.svg)

📖 Crawling is a form of web scraping which includes exploration logic. Our scraper in this example will find products by exploring the pagination pages.

Let's use `axios` and `cheerio` to scrape this website. We'll do this step by step covering our plan above.

First, let's create scrape function which will scrape a single pagination page (e.g. [/products?page=1](https://web-scraping.dev/products)) for product and other page URLs:

```typescript
import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapePagingPage(
	url: string
): Promise<{ products: string[]; pages: string[] }> {
	console.log(`scraping paging url ${url}`);
	const response = await axios.get(url);
	const selector = cheerio.load(response.data);
	const productUrls = selector('.product h3>a')
		.map((i, el) => {
			return selector(el).attr('href');
		})
		.get();
	const pageUrls = selector('.paging a')
		.map((i, el) => {
			return selector(el).attr('href');
		})
		.get();
	return {
		products: productUrls,
		pages: [...new Set(pageUrls)]
	};
}

console.log(await scrapePagingPage('https://web-scraping.dev/products'));
```

Result

```typescript
scraping paging url https://web-scraping.dev/products
{
  products: [ "https://web-scraping.dev/product/1", "https://web-scraping.dev/product/2",
    "https://web-scraping.dev/product/3", "https://web-scraping.dev/product/4", "https://web-scraping.dev/product/5"
  ],
  pages: [ "https://web-scraping.dev/products?page=1", "https://web-scraping.dev/products?page=2",
    "https://web-scraping.dev/products?page=3", "https://web-scraping.dev/products?page=4",
    "https://web-scraping.dev/products?page=5" ]
}
```

This function retrieves the pagination page and uses `cheerio` to extract product and other pagination page URLs.

Then, we can wrap it up in a loop that scrapes all pagination pages to collect all product URLs:

```typescript
async function discoverProducts() {
	let productUrls = [];
	const firstPage = await scrapePagingPage(
		'https://web-scraping.dev/products'
	);
	productUrls = productUrls.concat(firstPage.products);
	for (const pagingPage of firstPage.pages) {
		if (pagingPage.includes('page=1')) continue; // skip first page, we already have that
		const pageData = await scrapePagingPage(pagingPage);
		productUrls = productUrls.concat(pageData.products);
	}
	return productUrls;
}
```

Here, we are scraping the first page and then looping through the rest to scrape all pagination pages for product URLs.

Finally, we need to scrape all product pages themselves. Which brings us to our final scraper code:

Typescript

ScrapFly SDK

```typescript
import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapePagingPage(
	url: string
): Promise<{ products: string[]; pages: string[] }> {
	console.log(`scraping paging url ${url}`);
	const response = await axios.get(url);
	const selector = cheerio.load(response.data);
	const productUrls = selector('.product h3>a')
		.map((i, el) => {
			return selector(el).attr('href');
		})
		.get();
	const pageUrls = selector('.paging a')
		.map((i, el) => {
			return selector(el).attr('href');
		})
		.get();
	return {
		products: productUrls,
		pages: [...new Set(pageUrls)]
	};
}

async function discoverProducts() {
	let productUrls = [];
	const firstPage = await scrapePagingPage(
		'https://web-scraping.dev/products'
	);
	productUrls = productUrls.concat(firstPage.products);
	for (const pagingPage of firstPage.pages) {
		if (pagingPage.includes('page=1')) continue; // skip first page, we already have that
		const pageData = await scrapePagingPage(pagingPage);
		productUrls = productUrls.concat(pageData.products);
	}
	return productUrls;
}

async function scrapeProduct(url: string) {
	console.log(`scraping product url ${url}`);
	const response = await axios.get(url);
	const selector = cheerio.load(response.data);
	// parse product HTML
	const product = {
		url: response.config.url,
		name: selector('h3').text(),
		price: selector('.product-price').text(),
		priceFull: selector('.product-price-full').text(),
		description: selector('.product-description').text(),
		images: [],
		features: {}
	};
	// find product features
	selector('.features .feature').each((_, el) => {
		const label = selector('.feature-label', el).text();
		const value = selector('.feature-value', el).text();
		product.features[label] = value;
	});
	// find product images
	selector('.product-images>img').each((_, el) => {
		const imgSrc = selector(el).attr('src');
		if (imgSrc) {
			product.images.push(imgSrc);
		}
	});
	return product;
}

// run script:
// 1. discover all products
const productUrls = await discoverProducts();
// 2. use Promise.all to scrape all product pages concurrently
const allProductData = await Promise.all(
	productUrls.map((url) => scrapeProduct(url))
);
console.log(allProductData);
console.log(`Scraped ${allProductData.length} products`);
```

```typescript
import { ScrapflyClient, ScrapeConfig, ScrapeResult } from 'scrapfly-sdk';

const scrapfly = new ScrapflyClient({ key: 'YOUR SCRAPFLY KEY' });

async function scrapePagingPage(
	url: string
): Promise<{ products: string[]; pages: string[] }> {
	console.log(`scraping paging url ${url}`);
	const result: ScrapeResult = await scrapfly.scrape(
		new ScrapeConfig({ url })
	);
	const productUrls = result
		.selector('.product h3>a')
		.map((i, el) => {
			return result.selector(el).attr('href');
		})
		.get();
	const pageUrls = result
		.selector('.paging a')
		.map((i, el) => {
			return result.selector(el).attr('href');
		})
		.get();
	return {
		products: productUrls,
		pages: [...new Set(pageUrls)]
	};
}

async function discoverProducts() {
	let productUrls = [];
	const firstPage = await scrapePagingPage(
		'https://web-scraping.dev/products'
	);
	productUrls = productUrls.concat(firstPage.products);
	for (const pagingPage of firstPage.pages) {
		if (pagingPage.includes('page=1')) continue; // skip first page, we already have that
		const pageData = await scrapePagingPage(pagingPage);
		productUrls = productUrls.concat(pageData.products);
	}
	return productUrls;
}

async function scrapeProduct(url: string) {
	console.log(`scraping product url ${url}`);
	const result: ScrapeResult = await scrapfly.scrape(
		new ScrapeConfig({ url })
	);
	const selector = result.selector;
	// parse product HTML
	const product = {
		url: result.config.url,
		name: selector('h3').text(),
		price: selector('.product-price').text(),
		priceFull: selector('.product-price-full').text(),
		description: selector('.product-description').text(),
		images: [],
		features: {}
	};
	// find product features
	selector('.features .feature').each((_, el) => {
		const label = selector('.feature-label', el).text();
		const value = selector('.feature-value', el).text();
		product.features[label] = value;
	});
	// find product images
	selector('.product-images>img').each((_, el) => {
		const imgSrc = selector(el).attr('src');
		if (imgSrc) {
			product.images.push(imgSrc);
		}
	});
	return product;
}

const productUrls = await discoverProducts();
const allProductData = await Promise.all(
	productUrls.slice(0, 3).map((url) => scrapeProduct(url))
);
console.log(allProductData);
console.log(`Scraped ${allProductData.length} products`);
```

Result

```typescript
scraping paging url https://web-scraping.dev/products
scraping paging url https://web-scraping.dev/products?page=2
scraping paging url https://web-scraping.dev/products?page=3
scraping paging url https://web-scraping.dev/products?page=4
scraping paging url https://web-scraping.dev/products?page=5
scraping product url https://web-scraping.dev/product/1
scraping product url https://web-scraping.dev/product/2
scraping product url https://web-scraping.dev/product/3
...
[
  {
    url: "https://web-scraping.dev/product/1",
    name: "Box of Chocolate CandyVariantsFeaturesReviews",
    price: "$9.99 ",
    priceFull: "$12.99",
    description: "Indulge your sweet tooth with our Box of Chocolate Candy. Each box contains an assortment of rich, flavorful chocolates with a smooth, creamy filling. Choose from a variety of flavors including zesty orange and sweet cherry. Whether you're looking for the perfect gift or just want to treat yourself, our Box of Chocolate Candy is sure to satisfy.",
    images: [ "https://web-scraping.dev/assets/products/orange-chocolate-box-small-1.png",
      "https://web-scraping.dev/assets/products/orange-chocolate-box-small-2.png", "https://web-scraping.dev/assets/products/orange-chocolate-box-small-3.png",
      "https://web-scraping.dev/assets/products/orange-chocolate-box-small-4.png" ],
    features: {
      material: "Premium quality chocolate",
      flavors: "Available in Orange and Cherry flavors",
      sizes: "Available in small, medium, and large boxes",
      brand: "ChocoDelight",
      "care instructions": "Store in a cool, dry place",
      purpose: "Ideal for gifting or self-indulgence"
    }
  },
  ...
]
```

Above is our finished scraper using Typescript, axios and cheerio. In just a few lines of code, we crawled product URLs from the product directory and scraped product data concurrently.

Next, let's take a look at some important details when it comes to scaling up our web scraper in Typescript.

## Scraper Blocking

One of the biggest challenges in web scraping is not being able to request data. This can happen because one of two reasons:

### Malformed requests

When it comes to creating accurate requests we want to ensure that our requests match what websites expect. This usually boils down to a few important details like request headers and types.

To start setting correct request **headers** like `Referer`, `X-` prefixed headers is often required. In axios we can set headers using `headers` parameter of `axios.get`:

```typescript
import axios from 'axios';
// this page requires Referer header so it'll fail:
try {
	await axios.get('https://web-scraping.dev/api/testimonials');
} catch (err) {
	console.log(err.message);
	console.log(err.response.data);
}
const response = await axios.get(
	'https://web-scraping.dev/api/testimonials',
	// add Referer header to make it work:
	{ headers: { Referer: 'https://web-scraping.dev/testimonials' } }
);
console.log(response.data.slice(0, 300) + '...');
console.log(response.status);
```

When scraping non-GET request types like `POST` or `PUT` the request body and the `Content-Type` header is important. Using `axios` to send a POST request we can use `axios.post`:

```typescript
import axios from 'axios';

const response = await axios.post('https://httpbin.dev/post', { data: '123' });
console.log(response.data);
```

So, to prevent request failure we need to ensure request details match what the website expects which can be done by inspecting real browser traffic using [Browser Developer Tools](https://scrapfly.io/blog/browser-developer-tools-in-web-scraping/) or by trial and error.

### Scraper Identification

Unfortunately Typescript scrapers can be easy to identify. Modern network analysis techniques like [TLS fingerprinting](https://scrapfly.io/blog/how-to-avoid-web-scraping-blocking-tls/) and lacking HTTP2 support in HTTP clients like axios make scraper identification not too difficult.

However, there are a few things we can do to fortify our Typescript scrapers against blocking.

To start, we should **use browser-like headers** like `User-Agent`, `Accept` and all headers that a real web browser sends to every page. This will make our requests look like they're coming from a real browser.  
In axios we can set headers using `headers` parameter of `axios.get`:

```typescript
import axios from 'axios';

// headers that match Chrome browser on Windows 10:
const headers = {
	'User-Agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
	Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
	'Accept-Encoding': 'gzip, deflate, br',
	'Accept-Language': 'en-US,en;q=0.9'
};

const response = axios.get('https://httpbin.dev/headers', { headers });
console.log(response.data);
```

For scaling up scrapers we can **use proxies** that distribute traffic through multiple connections agents.  
To use proxies with axios we can use the `proxy` parameter of `axios.get` method:

```typescript
import axios from 'axios';

const proxyConfig = {
	host: 'your-proxy-host.com', // Replace with your proxy host
	port: 8080 // Replace with your proxy port
	// If your proxy requires authentication, you can also set the following:
	// auth: {
	//   username: 'your-username',
	//   password: 'your-password',
	// },
};

const response = await axios.get('https://httpbin.dev/ip', {
	proxy: proxyConfig
});
console.log(response.data);
```

## Power Up with Scrapfly

Scrapfly is a powerful web scraping API that integrates directly with Typescript web scrapers using [Typescript SDK](https://github.com/scrapfly/typescript-scrapfly).

![scrapfly middleware](https://scrapfly.io/blog/content/images/common_scrapfly-api.svg)

ScrapFly service does the heavy lifting for you

It powers up all scraping with features like:

-   [Anti Scraping Protection Bypass](https://scrapfly.io/docs/scrape-api/anti-scraping-protection) allowing to scrape any website.
-   [Millions of proxies](https://scrapfly.io/docs/scrape-api/proxy) from more than 50+ different countries.
-   [Javascript rendering using Headless cloud browsers](https://scrapfly.io/docs/scrape-api/javascript-rendering) which allows to scrape any dynamic website or web app.
-   and [much more!](https://scrapfly.io/docs/scrape-api/getting-started)

The goal of Scrapfly is to make web scraping easy and accessible to everyone by automatically solving all of the boring problems like proxy management, browser rendering, and anti-scraping protection.

Here's a quick glance at scraping using Scrapfly Typescript SDK:

```typescript
import { ScrapflyClient, ScrapeConfig } from 'scrapfly-sdk';

const client = new ScrapflyClient({ key: 'YOUR SCRAPFLY KEY' });
const apiResponse = await client.scrape(
	new ScrapeConfig({
		url: 'https://web-scraping.dev/product/1',
		// enable javascript rendering using headless browsers
		render_js: true,
		// set proxy country
		country: 'us',
		// enable anti-scraping protection bypass
		asp: true,
		// set residential proxies
		proxy_pool: 'public_residential_pool',
		// capture screenshots
		screenshots: { everything: 'fullpage' }
	})
);
console.log(apiResponse.result.content); // html content
// Parse HTML directly with SDK (through cheerio)
console.log(apiResponse.result.selector('h3').text());
```

[Try for FREE!](https://scrapfly.io/register)

[More on Scrapfly](https://scrapfly.io/docs)

## FAQ

To wrap our typescript web scraping tutorial let's take a look at some frequently asked questions regarding crawling with typescript:

#### Can Typescript be used with headless browser scraping like Puppeteer?

Yes, puppeteer is a javascript library for controlling headless chrome browser which makes it a great tool for scraping dynamic websites. For more see our [Puppetter introduction article](https://scrapfly.io/blog/web-scraping-with-puppeteer-and-nodejs/).

#### What are the best typescript web scraping libraries?

Axios and Cheerio are by far the most common packages used in web scraping however there are many alternatives like fetch, request, jsdom etc. For web scraping, we need an HTTP client and an HTML parser which are common tools in Typescript ecosystem.

#### What are typescript advantages over web scraping using Javascript or NodeJS?

Typescript offers strong types for Javascript which makes it easier to maintain large codebases and maintenance is a big part of web scraping. Modern runtimes like Deno or Bun also makes Typescript programs easier to distribute and run.

#### How to click buttons with typescript web scrapers?

Typescript scrapers using axios and cheerio cannot click buttons but they don't have to! All button actions can be reverse engineered using [Browser Developer Tools](https://scrapfly.io/blog/browser-developer-tools-in-web-scraping/) and then replicated in the scraper. Alternatively, [Puppeteer](https://scrapfly.io/blog/web-scraping-with-puppeteer-and-nodejs/) browser automation library can be used for button clicking, scrolling and other browser functions.

#### What's the difference between nodejs and typescript when it comes to web scraping?

Both typescript and nodejs are built on top of Javascript however the type safety of Typescript makes maintaining web scrapers easier. Many new modern runtimes like Bun cover Typescript exclusively making it a great choice for new web scraping projects!

## Summary

Typescript is a new powerful tool in the web scraping world. It can take advantage of existing nodejs scraping libraries like axios and cheerio while providing type safety and other benefits of Typescript.

In this article, we covered the basic knowledge needed to develop web scrapers in Typescript. We covered HTTP connections with axios and HTML parsing using cheerio and CSS selectors.

Finally, we wrapped up everything with an example project scraping an e-commerce website for all product listing details. If you do decide to give Typescript scraping a go check out [scrapfly typescript SDK](https://github.com/scrapfly/typescript-scrapfly) which can take your scrapers to the next level!
