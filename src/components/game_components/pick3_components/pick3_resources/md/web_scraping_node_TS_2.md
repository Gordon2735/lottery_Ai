[![Cover image for Web scraping with Node.js and Typescript - the crawler part (2/3)](https://res.cloudinary.com/practicaldev/image/fetch/s--9TRdpmPE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/b1a7b5a772274bef411adb6cfe00c7e6147b3552/13d8bbc8ff0469d3e4ca25de8b6f71a0.jpg)](https://res.cloudinary.com/practicaldev/image/fetch/s--9TRdpmPE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/b1a7b5a772274bef411adb6cfe00c7e6147b3552/13d8bbc8ff0469d3e4ca25de8b6f71a0.jpg)

[![Richard Jedlička](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F814162%2Fb7455e3a-a935-45a9-972a-767863e53d1e.jpeg)](https://dev.to/uiii)

[Richard Jedlička](https://dev.to/uiii)

Posted on Mar 6, 2022

![](https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg) 3 ![](https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg) 2 ![](https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg) ![](https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg) ![](https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg)

# Web scraping with Node.js and Typescript - the crawler part (2/3)

## [Web scraping with Node.js and Typescript (2 Part Series)](https://dev.to/uiii/series/16972)

[1 Web scraping with Node.js and Typescript - the scraper part (1/3)](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn "Published Feb 21 '22") [2 Web scraping with Node.js and Typescript - the crawler part (2/3)](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2 "Published Mar 6 '22")

Hello, I'm glad to see you here again 🙂. Since the [previous article](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn), you've known how to scrape a single webpage. Today, I will teach you how to find all the pages you want to scrape and scrape them.

-   [How crawling works?](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#how-crawling-works)
-   [Let's crawl](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#lets-crawl)
    -   [Finding URLs](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#finding-urls)
    -   [Generators](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#generators)
    -   [Putting it together](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#putting-it-together)
    -   [Fixing the unexpected](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#fixing-the-unexpected)
    -   [Polishing](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#polishing)
-   [Final code](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#final-code)
-   [Conclusion](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#conclusion)

> ❗❗ **Important** thing to remind. You should be careful when scraping any website. Web scraping isn’t illegal by itself but you should care about how you do it and what you do with the data. There is also an ethical side of it. Do not harm the website and check if you have the rights to use the data the way you are going to. Read more here: [https://blog.apify.com/is-web-scraping-legal/](https://blog.apify.com/is-web-scraping-legal/). If you are not sure, ask your lawyer.
>
> **_Disclaimer_**_: I am not taking any responsibility for your web scraping activities. Do it at your own risk._

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#how-web-crawling-works)How web crawling works?

The crawling process use similar principles as you saw when scraping. You look for the HTML link elements in the page and instead of storing their data, you follow them. You repeat this process until you find the right pages. There are two approaches how to do it. It depends on how the website is structured and what do you know about it.

1. First approach is you can build your crawler that it starts at some page (e.g. homepage) and follows every link (probably only internal so you stay on the same website) it finds. And when it detects the wanted page, it will scrape it. This requires you to know **how to detect the right page** and it can be **time-consuming** because it can crawl the entire website and visit irrelevant pages.

    _Search engines do this because they want to visit every page to scrape and index its metadata._

2. Second approach is you will crawl only a needed minimum of pages. This requires you to **know the website's structure**. Most of the pages have some kind of tree-like hierarchy, so you can start somewhere in the middle and only "go down".

    _E.g. online store, where homepage links to categories, categories link to sub-categories and products' details. So if you want to scrape only mobile phones' data, you will start at mobile phones category page and follow only the sub-category and product links._

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#lets-crawl)Let's crawl

🎓 Our goal now is to find all the URLs of European capital city pages on Wikipedia.

Wikipedia is full of user generated content, and doesn't have any strict rules for its structure. It is like a network of pages where each page references other related pages. It seem we need the [first approach](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#first-approach) here. Fortunately, there are some pages which can help us, like the [List of European countries by area](https://en.wikipedia.org/wiki/List_of_European_countries_by_area) with this nice table.

[![List of European countries](https://res.cloudinary.com/practicaldev/image/fetch/s--jbppZBe3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/886434a737986f1f156b106d1df6020562ce19e4/1691950a9cb8ef99d86892d2366cc532.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--jbppZBe3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/886434a737986f1f156b106d1df6020562ce19e4/1691950a9cb8ef99d86892d2366cc532.png)

Each country is linked to its wiki page, where we can find a link to a capital city's page. This gives us the hierarchy, and the [second approach](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#second-approach) can be used here 🤞.

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#finding-urls)Finding URLs

Let's start coding! We need to scrape the country links.

> 💻 See the complete project in the [GitHub repository](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/tree/article-2-the-crawler-part)

Take a look at the HTML code.

[![Inspecting country link HTML element with dev tools](https://res.cloudinary.com/practicaldev/image/fetch/s--qq68IknA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/480291bb12a2ce1c6cad0260f9eaf06b345de14c/a8edc6aee651cc266f6b9bbc3c43a928.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--qq68IknA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/480291bb12a2ce1c6cad0260f9eaf06b345de14c/a8edc6aee651cc266f6b9bbc3c43a928.png)

Links are located in the second `<td>` of rows of the `<table>` with class `wikitable`.

Add new method `crawlCountries` to our scraper class.

```
async crawlCountries(url: string) {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const links = $('.wikitable td:nth-child(2) > a').get();

    for (let link of links) {
        const href = $(link).attr('href')!;
        const countryPageUrl = new URL(href, url).toString();
        console.log(countryPageUrl);
    }
}
```

Enter fullscreen mode Exit fullscreen mode

And modify the `main()` function.

```
async function main() {
    const scraper = new CapitalCityScraper();
    await scraper.crawlCountries("https://en.wikipedia.org/wiki/List_of_European_countries_by_area");
}
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [02efe310](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/02efe310eecded02b1f28cddfd3db640dbc36ed8)

I should explain a bit more how Cheerio works. As I mentioned in the [previous article](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#first-simple-scraping), `cheerio.load()` creates a querying function bound to a document based on the provided HTML markup. This function, when called with a CSS selector, returns a [Cheerio object](https://cheerio.js.org/classes/Cheerio.html) representing a set of matched elements. This object provides convenient methods to make operations on this set. Some of them work only with a single element like `.attr(...)` which returns the specified attribute of the first matched element. Some of them work with the whole set like `.text()` which returns a combined text content of all matched elements.

To get the matched elements in a raw form, the `.get()` method is used. When called without an argument, it returns an array of matched elements. Each element is a [DOM-like object](https://developer.mozilla.org/en-US/docs/Web/API/Element), you can work with it directly or if you pass it the Cheerio querying function (`$`) you will get the Cheerio object representing this single element (as you can see in the `for` loop).

Run the code and you will see the list of country page URLs 🚩.

```
$ npx ts-node index.ts
https://en.wikipedia.org/wiki/Russia
https://en.wikipedia.org/wiki/Ukraine
https://en.wikipedia.org/wiki/France
https://en.wikipedia.org/wiki/Spain
https://en.wikipedia.org/wiki/Sweden
...
```

Enter fullscreen mode Exit fullscreen mode

What now? Instead of printing the URL we would like to visit it and find the link to the capital city page. Let's take [one of the URLs](https://en.wikipedia.org/wiki/Czech_Republic) and do the inspection 🕵️.

[![Inspecting capital city link HTML element with dev tools](https://res.cloudinary.com/practicaldev/image/fetch/s--0w0hgrRk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/8ed64c03fe503971cde86aa87035054a945e42f3/8d95442ae673c0f0fe461e20d267a0a3.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--0w0hgrRk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/8ed64c03fe503971cde86aa87035054a945e42f3/8d95442ae673c0f0fe461e20d267a0a3.png)

It looks similar to the data we scraped in the [previous article](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn#more-difficult-selector). Create another method for that.

```
async crawlCountry(url: string) {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const capitalCityRow = $('.infobox th:contains(Capital)').parent();

    if (capitalCityRow.length === 0) {
        // city state is capitaly city itself
        return url;
    }

    const capitalCityLink = capitalCityRow.find('td > a').attr('href');

    if (!capitalCityLink) {
        // in some cases the capital city cannot be scraped
        // (possible, but too complicated for this article)
        return undefined;
    }

    const capitalCityUrl = new URL(capitalCityLink, url).toString();

    return capitalCityUrl;
}
```

Enter fullscreen mode Exit fullscreen mode

City states are the capital cities by themselves, so we return the same URL. And, in some cases, the capital city cannot be scraped (explained below).

> 🙁️️ Due to the lack of strict structure on Wikipedia, scraping of the capital city link is too complicated in some cases, so I decided to sacrifice the completeness for the code simplicity. If you are interested in more information and possible solutions, ask me in the comments.

Replace the `console.log` in the `crawlCountries` method with

```
const capitalCityPageUrl = await this.crawlCountry(countryPageUrl);

if (capitalCityPageUrl) {
    console.log(capitalCityPageUrl);
}
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [f3f4da52](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/f3f4da5202c5edcee557125d50d1f1962336e501)

Now run the code and see what's happening.

```
$ npx ts-node index.ts
https://en.wikipedia.org/wiki/Moscow
https://en.wikipedia.org/wiki/Kyiv
https://en.wikipedia.org/wiki/Paris
https://en.wikipedia.org/wiki/Madrid
https://en.wikipedia.org/wiki/Stockholm
...
```

Enter fullscreen mode Exit fullscreen mode

The URLs of capital cities are printed line by line and there is a delay between each. It is because we are making many HTTP requests, one for each country, and it takes time for the server (Wikipedia) to respond.

> ❗❗ Think about a server's performance. Try to be gentle and don't hit the server with too many requests in a short time. It can lead to server exhaustion, so the website is not usable when you are scraping and the server may have some protection again it and will block you. If it's not necessary, scrape rather slowly by adding additional delay between requests.

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#generators)Generators

Our [crawler goal](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#lets-crawl) is almost finished. We are able to find all the URLs of capital city pages. Now, we need to get the list of URLs out of the `crawlCountries` method, so we can later loop through them. But how? 🤔

We can store the URLs in an array and return it whole.

```
async crawlCountries(url: string) {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const links = $('.wikitable td:nth-child(2) > a').get();

    const urls: string[] = [];

    for (let link of links) {
        const href = $(link).attr('href')!;
        const countryPageUrl = new URL(href, url).toString();
        const capitalCityPageUrl = await this.crawlCountry(countryPageUrl);

        if (capitalCityPageUrl) {
            urls.push(capitalCityPageUrl);
        }
    }

    return urls;
}
```

Enter fullscreen mode Exit fullscreen mode

```
async function main() {
    for (let url of await scraper.crawlCountries("https://en.wikipedia.org/wiki/List_of_European_countries_by_area")) {
        console.log(url);
    }
}
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [a3ae3829](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/a3ae3829a445baa7f99ae0d49440783dc800a818)

This looks fine and it works, but there is a catch. The problem is we have to build the whole array before we can return it from the function. What does it mean? It means we have to wait until the "crawler" finds all the URLs before we can start using them. In our case, it takes not such a long time, but imagine we are crawling hundreds or thousands of pages. It can take very long time, in the order of minutes or hours.

Try to run the code and you will see. The output is the same as before but the timing has changed. Nothing is happening for some time and then the whole list is printed.

> Modern versions of JavaScript and TypeScript offer one very useful construct, [generators](https://javascript.info/generators). It allows us to "return" values from a function multiple times and even before it has finished. To make it work, you must mark the function as generator function by prefixing its name with `*` and instead of `return` keyword you use a `yield`. The function then actually returns an iterator, an object on which you call `.next()` to get the next value. You can iterate (loop trough) the iterator same way as an array (e.g. in a `for` loop). The advantage here is that we have access to the "returned" value immediately after yielding. You can imagine it as the function pauses in the place of the `yield` statement and waits until someone requires the next value from the iterator, and then continue. Read more about generators [here](https://javascript.info/generators).

So let's try the generators instead.

```
async *crawlCountries(url: string) {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const links = $('.wikitable td:nth-child(2) > a').get();

    for (let link of links) {
        const href = $(link).attr('href')!;
        const countryPageUrl = new URL(href, url).toString();
        const capitalCityPageUrl = await this.crawlCountry(countryPageUrl);

        if (capitalCityPageUrl) {
            yield capitalCityPageUrl;
        }
    }
}
```

Enter fullscreen mode Exit fullscreen mode

```
async function main() {
    const scraper = new CapitalCityScraper();
    for await (let url of scraper.crawlCountries("https://en.wikipedia.org/wiki/List_of_European_countries_by_area")) {
        console.log(url);
    }
}
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [5ad62c43](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/5ad62c43cc46588efce704d9d9359de47465fa2a)
>
> Notice the `*` before `crawlCountries` method's name. The `yield` keyword. This creates a generator.
>
> In the `main` function, there is a `for await` contruct. Why? Because the `crawlCountries` is _async_ so it returns _async_ generator (iterator). Which means the `.next()` call is asynchronous (returs a promise) and `for await` takes care of it by awaiting on each iteration.

If you now run the code, the output will be the same as when we printed the URL directly in `crawlCountries` method (printing URLs one by one), but notice we now print them outside of the `crawlCountries` function, isn't it cool?

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#putting-it-together)Putting it together

Do you know what's next? Yes, put everything together: the crawler methods with the scraper ones we built in the [previous article](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn). And the change is very simple, just one line. Are you excited as much as me 🤩?

Replace the `console.log(url)` in the `main` function by `scrapeCity` method call.

```
async function main() {
    const scraper = new CapitalCityScraper();
    for await (let url of scraper.crawlCountries("https://en.wikipedia.org/wiki/List_of_European_countries_by_area")) {
        console.log(await scraper.scrapeCity(url));
    }
}
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [e77e7e27](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/e77e7e27cc3526836de2e894b50f932411b58938)

Go go, run the code! 🙏

```
$ npx ts-node index.ts
{
  name: 'Moscow',
  country: 'Russia',
  area: NaN,
  population: NaN,
  flagImagePath: 'flags\\Flag_of_Moscow%2C_Russia.svg'
}
{
  name: 'Kyiv',
  country: 'Ukraine',
  area: 839,
  population: 2962180,
  flagImagePath: 'flags\\Flag_of_Kyiv_Kurovskyi.svg'
}
{
  name: 'Paris',
  country: 'France',
  area: NaN,
  population: NaN,
  flagImagePath: 'flags\\Flag_of_Paris_with_coat_of_arms.svg'
}
...
```

Enter fullscreen mode Exit fullscreen mode

Wow, it works!! Yes, yes ... or ... oh, wait. 😮 What's that `NaN`?? It doesn't look like a number, yes it's _not a number_. Have you looked in `flags` folder? There is a weird file with a name `undefined`. What happened? Again, the Wikipedia's lack of strict structure. The problem is some city pages are formatted slightly differently, and our scraper doesn't handle it well.

> Don't worry. This is quite common when you try to scrape a website. Even though you do some analysis before, you will probably encounter unexpected problems when you scrape the bigger portion of the website. Some page will have missing values, some will have different formatting, some pages cannot be loaded, etc. This will likely to happen and you need to make your scraper robust enough to handle all the cases. Be prepared that sometimes you won't be able to scrape everything or with too much effort for a little outcome.

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#fixing-the-unexpected)Fixing the unexpected

I did the hard work for you and analyzed the pages. Before we begin, we need to update our model because not every value is possible to scrape.

```
interface City {
    name: string;
    country?: string;
    area?: number;
    population?: number;
    flagImagePath?: string;
}
```

Enter fullscreen mode Exit fullscreen mode

Then update the `scrapeCity` method itself.

After cheerio parses the HTML, remove the elements with reference links from _infobox_ (the box with the data).

[![Highlighted reference links to remove](https://res.cloudinary.com/practicaldev/image/fetch/s--dFQxLuSk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/1d87900c08aa6d668b24de610e3d45de144e27e7/ca0042e320b5b7dceffef05933c7a6dd.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--dFQxLuSk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://gist.githubusercontent.com/uiii/373fe15b5e19208fdd84fd577800850f/raw/1d87900c08aa6d668b24de610e3d45de144e27e7/ca0042e320b5b7dceffef05933c7a6dd.png)

They make the scraping harder and we don't need them.

```
const $ = cheerio.load(html);

$('.infobox .reference').remove();
```

Enter fullscreen mode Exit fullscreen mode

City states don't have the country specified, and the row doesn't always have the class `mergedtoprow`.

```
const country = $('.infobox th:contains(Country) + td').first().text().trim() || undefined;
```

Enter fullscreen mode Exit fullscreen mode

Area values don't have always the same label and are not in the same place. Sometimes the value is even next to the "Area" label (see [Paris](https://en.wikipedia.org/wiki/Paris)). So I decided to find and use the first value in the correct format (a number with km squared unit).

```
const areaRows = $('.mergedtoprow th:contains(Area)').parent().nextUntil('.mergedtoprow').addBack();
const areaValues = areaRows.find('td').filter((i, el) => !!$(el).text().trim().match(/^[0-9,.]+\s+km2.*$/));
const areaText = areaValues.first().text().trim().replace(/ km2.*$/, '');
const area = parseFloat(areaText.replace(/,/g, '')) || undefined;
```

Enter fullscreen mode Exit fullscreen mode

Population scraping is similar to the area. Only the matching regular expression is different (a number optionally followed with a text in parentheses, nothing else).

```
const populationRows = $('.mergedtoprow th:contains(Population)').parent().nextUntil('.mergedtoprow').addBack();
const populationValues = populationRows.find('td').filter((i, el) => !!$(el).text().trim().match(/^[0-9,.]+(\s+\(.*\))?$/));
const populationText = populationValues.first().text().trim();
const population = parseFloat(populationText.replace(/,/g, '')) || undefined;
```

Enter fullscreen mode Exit fullscreen mode

Not every city has a flag and also the row doesn't always have the class `mergedtoprow`.

```
const flagPageLink = $('.infobox a.image + div:contains(Flag)').prev().attr('href')!;
const flagPageUrl = flagPageLink && new URL(flagPageLink, url).toString();
const flagImagePath = flagPageUrl && await this.scrapeImage(flagPageUrl);
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [0402d629](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/0402d629aa46aedf390868d586719bab756e7294)

Run the code now. Despite the data are not 100% complete, you can be quite satisfied with the result.

> Full completeness of the scraped data from sites with a loose structure, such as Wikipedia, is very hard to achieve. Sometimes almost not even possible.

### [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#polishing)Polishing

We can say we are finished but I would prefer to polish the scraper class a little bit more.

I would rather encapsulate the scraper, so it exposes only one method `scrape` which will return a generator of scraped `City` items.

Make all the methods in the scraper class `protected` and add new public method `scrape` along with the class property holding the starting URL.

```
readonly startUrl = "https://en.wikipedia.org/wiki/List_of_European_countries_by_area";

async *scrape() {
    for await (let url of this.crawlCountries(this.startUrl)) {
        yield await this.scrapeCity(url);
    }
}
```

Enter fullscreen mode Exit fullscreen mode

Actually, we moved the code from the `main` function to the `scrape` method. And in the `main` we only get the scraped city object without caring about the internals.

```
async function main() {
    const scraper = new CapitalCityScraper();

    for await (let city of scraper.scrape()) {
        console.log(city);
    }
}
```

Enter fullscreen mode Exit fullscreen mode

> 💻 See the commit [32f506c9](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/commit/32f506c9be747225fdc03061c71830486b5c9ca6)

Hey, we are finished. Let's celebrate! 🥳🎉🍾🥂🍸

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#final-code)Final code

> 💻 See the complete project in the [GitHub repository](https://github.com/uiii/web-scraper-with-nodejs-and-typescript/tree/article-2-the-crawler-part)

```
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';

interface City {
    name: string;
    country?: string;
    area?: number;
    population?: number;
    flagImagePath?: string;
}

export class CapitalCityScraper {
    readonly startUrl = "https://en.wikipedia.org/wiki/List_of_European_countries_by_area";

    async *scrape() {
        for await (let url of this.crawlCountries(this.startUrl)) {
            yield await this.scrapeCity(url);
        }
    }

    async *crawlCountries(url: string) {
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        const links = $('.wikitable td:nth-child(2) > a').get();

        for (let link of links) {
            const href = $(link).attr('href')!;
            const countryPageUrl = new URL(href, url).toString();
            const capitalCityPageUrl = await this.crawlCountry(countryPageUrl);

            if (capitalCityPageUrl) {
                yield capitalCityPageUrl;
            }
        }
    }

    async crawlCountry(url: string) {
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        const capitalCityRow = $('.infobox th:contains(Capital)').parent();

        if (capitalCityRow.length === 0) {
            // city state is capitaly city itself
            return url;
        }

        const capitalCityLink = capitalCityRow.find('td > a').attr('href');

        if (!capitalCityLink) {
            // in some cases the capital city cannot be scraped
            // (possible, but too complicated for this article)
            return undefined;
        }

        const capitalCityUrl = new URL(capitalCityLink, url).toString();

        return capitalCityUrl;
    }

    async scrapeCity(url: string) {
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        $('.infobox .reference').remove();

        const cityName = $('#firstHeading').text().trim();

        const country = $('.infobox th:contains(Country) + td').first().text().trim() || undefined;

        const areaRows = $('.mergedtoprow th:contains(Area)').parent().nextUntil('.mergedtoprow').addBack();
        const areaValues = areaRows.find('td').filter((i, el) => !!$(el).text().trim().match(/^[0-9,.]+\s+km2.*$/));
        const areaText = areaValues.first().text().trim().replace(/ km2.*$/, '');
        const area = parseFloat(areaText.replace(/,/g, '')) || undefined;

        const populationRows = $('.mergedtoprow th:contains(Population)').parent().nextUntil('.mergedtoprow').addBack();
        const populationValues = populationRows.find('td').filter((i, el) => !!$(el).text().trim().match(/^[0-9,.]+(\s+\(.*\))?$/));
        const populationText = populationValues.first().text().trim();
        const population = parseFloat(populationText.replace(/,/g, '')) || undefined;

        const flagPageLink = $('.infobox a.image + div:contains(Flag)').prev().attr('href')!;
        const flagPageUrl = flagPageLink && new URL(flagPageLink, url).toString();
        const flagImagePath = flagPageUrl && await this.scrapeImage(flagPageUrl);

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

    for await (let city of scraper.scrape()) {
        console.log(city);
    }
}

main();
```

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2#conclusion)Conclusion

Now, you have all you need to build a web scraper, at least a simple one. You saw that sometimes you have to compromise and decide between completeness or code simplicity. But still you can mostly retrieve valuable information even from not well-structured websites.

Hope you like web scraping. 😉

There are some advanced topics, how you can improve the scraper, like execution management, auto throttling, etc. In the **next article**, I will show you one: the **use of a proxy**.

👉 _Stay tuned! See you soon._

## [Web scraping with Node.js and Typescript (2 Part Series)](https://dev.to/uiii/series/16972)

[1 Web scraping with Node.js and Typescript - the scraper part (1/3)](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-scraper-part-ffn "Published Feb 21 '22") [2 Web scraping with Node.js and Typescript - the crawler part (2/3)](https://dev.to/uiii/web-scraping-with-nodejs-and-typescript-the-crawler-part-23-2of2 "Published Mar 6 '22")

## Top co
