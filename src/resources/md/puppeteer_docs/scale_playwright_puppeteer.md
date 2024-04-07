Dec 14, 2022 5 min read

# How to scale Puppeteer and Playwright

Scaling web scrapers horizontally across multiple containers for optimal concurrency. Tips and advice for large-scale scraping projects using Puppeteer or Playwright.

Posted by

[

![Lukáš Křivka](/content/images/size/w150/proxy/1-zVYuJtKQfFMrIx5P-OPVRg.jpeg)

Lukáš Křivka

](https://blog.apify.com/author/lukas-krivka/)

[

![Theo Vasilis](/content/images/size/w150/2022/01/profilepic.jpg)

Theo Vasilis

](https://blog.apify.com/author/theo/)

### Content

1. [So what are the challenges of large-scale scraping?](https://blog.apify.com/how-to-scale-puppeteer-and-playwright/#so-what-are-the-challenges-of-large-scale-scraping)
2. [Why did you use Puppeteer and not Playwright?](https://blog.apify.com/how-to-scale-puppeteer-and-playwright/#why-did-you-use-puppeteer-and-not-playwright)
3. [If you did the project now, would you use Playwright instead?](https://blog.apify.com/how-to-scale-puppeteer-and-playwright/#if-you-did-the-project-now-would-you-use-playwright-instead)
4. [So how did you solve the problem and scale Puppeteer?](https://blog.apify.com/how-to-scale-puppeteer-and-playwright/#so-how-did-you-solve-the-problem-and-scale-puppeteer)
5. [1\. Scaling inside a single container](https://blog.apify.com/how-to-scale-puppeteer-and-playwright/#1-scaling-inside-a-single-container)
6. [2\. Scaling across multiple containers](https://blog.apify.com/how-to-scale-puppeteer-and-playwright/#2-scaling-across-multiple-containers)
7. [To put this into perspective, what was the scale of the project in numbers?](https://blog.apify.com/how-to-scale-puppeteer-and-playwright/#to-put-this-into-perspective-what-was-the-scale-of-the-project-in-numbers)
8. [What final tip would you give other developers who need to scrape at scale?](https://blog.apify.com/how-to-scale-puppeteer-and-playwright/#what-final-tip-would-you-give-other-developers-who-need-to-scrape-at-scale)

[_Lukáš Křivka_](https://apify.com/lukaskrivka) _– Head of Actor Development and Delivery at Apify – explains how he overcame the challenges of large-scale scraping with Puppeteer and scraped millions of product pages from one of the top 5 online marketplaces in the world._

### _So what are the challenges of large-scale scraping?_

For large-scale [web scraping](https://blog.apify.com/what-is-web-scraping/), you need to use as few resources as possible. Browsers are computationally heavy and slow for scraping. But using browsers means getting blocked less, and [avoiding blocking](https://blog.apify.com/bypass-antiscraping-protections/) is one of the biggest challenges for web data extraction. I had to find a way to maximize performance by [skipping extra resources](https://stackoverflow.com/questions/73298325/blocking-specific-resources-css-images-videos-etc-using-crawlee-and-playwri), such as images, styles, fonts, and even a lot of JavaScript. Some files are required for rendering, but most just did things I didn’t need, so I had to skip them to speed things up and configure [Puppeteer](https://pptr.dev/) to do as little work as possible.

[![Figures building blocks - to represent scaling web scraping projects](https://blog.apify.com/content/images/2022/12/scaling-playwright-scaling-puppeteer-1.png)](https://blog.apify.com/content/images/2022/12/scaling-playwright-scaling-puppeteer-1.png)

Scaling Puppeteer or Playwright - how it all came together on a large-scale scraping project

### _Why did you use Puppeteer and not Playwright?_

[Playwright](https://playwright.dev/) had just been introduced when I started the project in 2020. Puppeteer was older and had been tested more, and there were more tutorials for it, so that helped me get going quicker.

### _If you did the project now, would you use Playwright instead?_

[Playwright is just an alternative to Puppeteer](https://blog.apify.com/playwright-vs-puppeteer-which-is-better/). There’s not much difference between them. Both are libraries for JavaScript to run browsers with a similar API. Most of the computation doesn’t happen in the libraries but in the browsers.

One advantage of Playwright is that it allows you to run other browsers as well as Chrome, so you can run Firefox and WebKit. Firefox is heavier, so when scaling, you might want to skip it, but it’s better for overcoming blocking. Firefox tries to make browsing as anonymous as possible, so it doesn’t leave much of a trace. That makes it harder for anti-scraping measures to distinguish bots from users based on the browser fingerprint.

If your main issue is computing resources, go with WebKit or Chromium, but, if blocking is a problem, Firefox can help by making it unnecessary to use [residential proxies](https://blog.apify.com/types-of-proxies/#residential-proxies). Residential proxies can be much more expensive than [datacenter proxies](https://blog.apify.com/types-of-proxies/#datacenter-proxies), so you can save a lot if you don’t need to use them.

If you’re trying to [choose between Puppeteer and Playwright](https://blog.apify.com/playwright-vs-puppeteer-which-is-better/) and starting from scratch, definitely go with Playwright.

[

From philosopher to tech team lead

Many roads can lead to a career at Apify.

![](https://blog.apify.com/content/images/size/w256h256/2021/03/favicon-128x128.png)ApifyDavid Barton

![](https://blog.apify.com/content/images/2021/04/lukas2--Medium-.jpg)

](https://blog.apify.com/from-philosophy-to-tech-team-lead/)

### _So how did you solve the problem and scale Puppeteer?_

The online e-commerce marketplace I was scraping has more than two million individual sellers. These sellers can appear and disappear without warning, so I needed to scrape them as soon as the URL was identified, rather than finding all the URLs and processing them later, which is how I would normally have scraped a large site like this. So it made sense to run a separate instance of the scraper for each seller. To achieve that, I had to scale the scraper horizontally across multiple containers for optimal concurrency.

There were two key things I needed to do: 1) scale inside a single container to maximize efficiency, and 2) duplicate the containers to create hundreds of them to run in parallel. I used the [Apify platform](https://apify.com/), so my containers were [actors](https://apify.com/actors) (serverless microapps on the Apify platform are called actors), but the principle is the same for any container or serverless platform, such as [AWS Lambda](https://blog.apify.com/web-scraping-with-aws-lambda-vs-apify-what-are-the-differences/).

### 1\. Scaling inside a single container

To scale inside a single container, I had to check the available resources of [Node.js](https://blog.apify.com/web-scraping-javascript-vs-python-2024/#running-javascript-on-the-server-with-nodejs) and the hardware, and scale up (or down) accordingly. I did this using the web scraping and browser automation library, [Crawlee](https://crawlee.dev/).

> _Crawlee was part of_ [_Apify SDK_](https://sdk.apify.com/) _at the time, but Apify_ [_released it_](https://blog.apify.com/announcing-crawlee-the-web-scraping-and-browser-automation-library/) _as an open source web scraping and browser automation library in August 2022._

Crawlee checks the status of [CPU, memory, and event loop](https://crawlee.dev/api/core/class/AutoscaledPool) and it manages concurrency out of the box. If it’s doing too much work, it will scale down, and vice versa.

Another feature that helped me was to block requests automatically without disabling the browser cache. This was really crucial.

```javascript
// Block all requests to URLs that include `adsbygoogle.js` 
// and also all defaults like *.jpg, *.png and so on.
await puppeteerUtils.blockRequests(page, {
    extraUrlPatterns: ['adsbygoogle.js'],
});
```

JavaScript

Copy

There are two ways to block requests in Puppeteer. One is \`request interception\`. For each request, you inspect the request object before it’s sent, and you can analyze and decide whether to continue or abort. That’s great, but a huge drawback with modern browsers is that, for reasons due to browser implementation, which you can’t do anything about, it stops the browser cache. The cache saves you a lot of bandwidth. It also keeps parsed JavaScript in memory, which in turn saves a lot of CPU power. But if you use \`request interception\`, the cache function gets disabled, and it will make your crawler slower.

The [block requests](https://crawlee.dev/api/puppeteer-crawler/namespace/puppeteerUtils#blockRequests) function on Crawlee uses a hidden functionality of the browser that doesn’t disable the cache.

```javascript
const crawler = new PuppeteerCrawler({
    autoscaledPoolOptions: {
        // You can set various options to fine-tune
        // the scaling behavior, but it works great
        // with default settings on most machines.
    },
    async requestHandler({ page }) {
        console.log(await page.title());
    }
})
```

JavaScript

Copy

[

🦾

Crawlee. It helps you build reliable crawlers. Fast.



](https://crawlee.dev/)  

### 2\. Scaling across multiple containers

[Apify SDK](https://sdk.apify.com/) made it easy to spawn many different containers (actors) and it automatically provided the storage, proxies, and APIs needed. I just had to tell the scraper to extract one set of URLs while another scraper would extract another set of URLs, and they would all run simultaneously, dynamically creating new instances as required.

### _To put this into perspective, what was the scale of the project in numbers?_

To put it as simply and concisely as possible: I scraped 90 million web pages with Puppeteer in just two months. It’s important to say that scraping with headless browsers is far more resource intensive than plain HTTP scraping. I had to run hundreds of containers in that time to make it happen.

[

What is large-scale scraping and how does it work?

Find out how to scrape large and complex websites.

![](https://blog.apify.com/content/images/size/w256h256/2021/03/favicon-128x128.png)Apify BlogLukáš Křivka

![](https://blog.apify.com/content/images/2022/05/large-scale-scraping.jpg)

](https://blog.apify.com/what-is-large-scale-scraping-and-how-does-it-work/)

### _What final tip would you give other developers who need to scrape at scale?_

Use as few resources as possible. [JSON](https://blog.apify.com/dataset-processing/) APIs are the best way to do this, so if a site has this type of API, use it, unless blocking is a problem. Some websites, such as Amazon, don’t have JSON and provide everything in HTML. The JSON might be there in the web page, but you need to download the HTML and then use data extraction techniques. If you can get at the JSON, you can scale efficiently.

[

Why monitor large-scale web scraping projects?

Watch out for these common web scraping problems.

![](https://blog.apify.com/content/images/size/w256h256/2021/03/favicon-128x128.png)Apify BlogTheo Vasilis

![](https://blog.apify.com/content/images/2023/04/0B04EE39-A8E6-4FAD-8EA2-6AB8D8E4FECA_1_201_a.jpeg)

](https://blog.apify.com/why-you-need-to-monitor-long-running-large-scale-scraping-projects/)

[

![Lukáš Křivka](/content/images/size/w150/proxy/1-zVYuJtKQfFMrIx5P-OPVRg.jpeg)

Lukáš Křivka

](https://blog.apify.com/author/lukas-krivka/)

Philosopher turned self-taught developer. I manage a team of devs at Apify, and still love going deep into programming concepts. I like gardening, sports, and dogs.

[

![Theo Vasilis](/content/images/size/w150/2022/01/profilepic.jpg)

Theo Vasilis

](https://blog.apify.com/author/theo/)

Writer, Python dabbler, and crafter of web scraping tutorials. Loves to inform, inspire, and illuminate. Interested in human and machine learning