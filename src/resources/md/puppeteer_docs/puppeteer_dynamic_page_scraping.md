# Dynamic Web Page Scraping with Node.js and Puppeteer

[

![Tommy Pang](https://miro.medium.com/v2/da:true/resize:fill:88:88/0*iHzJfnGf790CFEsq)




](https://medium.com/@tommypang04?source=post_page-----4af7a88ca0c6--------------------------------)

[Tommy Pang](https://medium.com/@tommypang04?source=post_page-----4af7a88ca0c6--------------------------------)


9 min read

·

Oct 27, 2021


In my [last post](https://medium.com/@tommypang04/static-web-page-scraping-with-node-js-fd2f0a0d9c37) I explained how we can scrape a static website using request promise and cheerio. Remember that a static website has fixed content coded in HTML and stored on a web server, and it does not change. We can fetch contents on the static page effectively using those 2 libraries. However, nowadays, many websites, such as Best Buy, are dynamic, which means their contents are constantly changing as determined by JavaScript. If you try to visit those websites using request promise and cheerio, you will not be able to fetch the content that you can see on your laptop.

Therefore in this article I will introduce a Node library — Puppeteer that allows you to control a headless browser (Chrome or Chromium), which simulates the process of a person visiting the site, to do the scraping we want.

```bash
$ npm install puppeteer
```

First make sure you have puppeteer installed.

We start off by importing the Puppeteer module and then declare the url we want to scrape.

```typescript
const puppeteer = require('puppeteer');  
const url = 'https://www.bestbuy.ca/en-ca';
```

We set them to be constant since we won’t change them throughout the program.

Next we write the main function that does the scraping. We define it as an asynchronous method, in which we can use await keyword. An overall look of the method may look something like this:

```typescript

(async function scrape() {  
  
})().catch(function(err){  
    **_console_**.log(err);  
});
```


We to respond to any form of error in the scrape method in a catch function by outputting the error to the console.

Within the function, we initialize a browser object by calling puppeteer’s launch function. Note that a headless browser means there’s no graphic user interface, and puppeteer by default has headless mode to be true. We may set it to be false so that we can see if the browser is doing the expected actions.

```typescript

const puppeteer = require('puppeteer');  
const url = 'https://www.bestbuy.ca/en-ca';  
(async function scrape() {  
    const browser = await puppeteer.launch({ headless: false });  
    const page = await browser.newPage();  
    **_console_**.log("We are scraping from " + url + ":");  
    await page.goto(url);  
    await browser.close();  
})().catch(function(err){  
    **_console_**.log(err);  
});
```



We will create a new page by calling newPage() function provided by puppeteer’s browser object, then the browser will visit the url we defined. At last we must close the browser before our program ends.

I will not explain to much about the async/await in this article. In short, you can think await as a keyword that ensures the flow of the program pauses until that line of code is executed.

Right now, if you run the function, you will see a new page pops up on your screen, because we have headless set to false, and it directly visits the Best Buy site.

![](https://miro.medium.com/v2/resize:fit:630/1*fvnVnCkJsMNlYNUx6Oa_gg.png)

Now let’s move on to discover some interesting stuff you can do with the headless browser.

Let’s say you want to fetch all the links that exist in the home page. This snippet of code can achieve that.

```typescript

let hrefs = await page.evaluate(() => {  
    let Element = **_Array_**.from(**_document_**.body.querySelectorAll('a'), (el) => el.href);  
    return Element;  
});  
  
console.log(hrefs);
```

Basically we call the built-in evaluate function, in which we define an anonymous function. In the anonymous function, we call the HTMl DOM’s querySelectorAll method by passing ‘a’ as the CSS selector. Beside that, we also need to define an arrow/anonymous mapping function that tells which attribute of the selectors are stored in the array. In our case, for each HTMLAnchorElement, we store its href attribute in the array. Without this mapping function the array returned would be undefined. At last we put all href values in the array. Below is what you would expect to see.

![](https://miro.medium.com/v2/resize:fit:630/1*P2YdgzYd6oKC6llcec5_7A.png)

Move a step forward, let’s say we want to get the links for iphone

![](https://miro.medium.com/v2/resize:fit:630/1*65lbgao9pfhS9LmD6jrl7w.png)

Then we need to check the links that we get previously one by one and see if it contains the string “iphone”. This comes from the observation that all words in the urls are in lowercase. To reduce unnecessary checks (duplicate links), it’s simple to convert the array of links to a set, as shown below.


```typescript

let hrefs = await page.evaluate(() => {  
    let Element = **_Array_**.from(**_document_**.body.querySelectorAll('a'), (el) => el.href);  
    return **_Array_**.from(new **_Set_**(Element));  
});  
let res = \[\];  
for (let i = 0; i < hrefs.length; i++) {  
    if (hrefs\[i\].indexOf("iphone") > -1) {  
        res.push(hrefs\[i\]);  
    }  
}  
**_console_**.log(res);
```



Same as before, we select all urls in the <a> tag. But in the return statement, we cast the array Element to a Set, which contains only unique values(links). Then turn it into an array so we can traverse it. Next we could define a result array to store the intended links that we want. Then for each link, we check if it contains the string “iphone”. If so, the indexOf function will return a valid index (larger than -1) and we add that link to our res array, otherwise the function will return -1 and we don’t take any action. Below is the expected output. You can see all the links that have “iphone” as part of it.

![](https://miro.medium.com/v2/resize:fit:630/1*_MbtiIZDgGygiSECnGmCKQ.png)

It’s evident that a simple web scraper can simplify all the repeating process(clicking and scrolling). Just by running the scraper you will get the links you want in a few seconds.

![](https://miro.medium.com/v2/resize:fit:400/1*HXqg74vZ9niy0ldo4f-hAg.png)

For example, if you want to find the site corresponds to iPhone, you have to go to “Best Buy Mobile”, find “Cell Phones & Plans”, then you will arrive at the iPhone section.

Let’s write a more complex scraper that fetch the price and name of the laptops that are in promotion. Like before, we get all the links in the home page but filter out the ones that contains the special string “laptop”.

```typescript

let hrefs = await page.evaluate(() => {  
    let Element = **_Array_**.from(**_document_**.body.querySelectorAll('a'), (el) => el.href);  
    return **_Array_**.from(new **_Set_**(Element));  
});  
let res = \[\];  
for (let i = 0; i < hrefs.length; i++) {  
    if (hrefs\[i\].indexOf("laptop") > -1) {  
        res.push(hrefs\[i\]);  
    }  
}
```



Then we traverse through the result array with laptops-url. For each of them we visit the corresponding page.

```typescript

for (let i = 0; i < res.length; i++) {  
    **await** page.goto(res\[i\]);  
    // getting the name and price  
}

```


Note that the await keyword here is crucial. This line ensures that the new page is fully loaded before we call querySelector. Without this keyword we will get an error saying that. This is because the page is not yet loaded.

![](https://miro.medium.com/v2/resize:fit:562/1*o3D3-AszC9EraP8Kb-OTdQ.png)

To get the name, we may open up the inspection tool. Then notice that the name of the item is in a <h1> tag.

![](https://miro.medium.com/v2/resize:fit:630/1*7RW9NpMpUCQHhrjtZNAwig.png)

![](https://miro.medium.com/v2/resize:fit:514/1*-B--j7Af_yCpKKlbLyG5eQ.png)

It’s also clear that there’s no <h1> tag in the content above it. Therefore, the following lines will do the task for us.

```typescript

for (let i = 0; i < res.length; i++) {  
    **await** page.goto(res\[i\]);  
    let item\_name = await page.evaluate(() => {  
        let selector = **_document_**.body.querySelector('h1');  
        if (selector===null) return null;  
        return selector.textContent;  
    });  
    if (item\_name === null) continue;  
}
```


We call the built-in querySelector function to select the first h1 element. Just in case the page is not for single items and there’s no h1 tag(null returned by the querySelector function), we will return null as the name. Without this check, we will end up fetching the attribute of a null object, which throws an error. In the loop, we use continue to skip the current link as there’s no needs to query for the price.

Next, to get the prices, we first check the inspection page again. It’s also easy to find that the prices and promotions are stored in consecutive spans.

![](https://miro.medium.com/v2/resize:fit:323/1*jKXI07IK76wFfhofZtsKKQ.png)

![](https://miro.medium.com/v2/resize:fit:326/1*els8I87Kmb6j2A_h0ryVLw.png)

![](https://miro.medium.com/v2/resize:fit:481/1*6_yOdlIhujCmDaUZxyXozA.png)

Therefore, we may use querySelectorAll function to get all the spans and store them in an array. We may then define two variables to store the price and promotion respectively. As we traverse through spans, we make sure it’s not null and check if there exists a character “$”. This greatly shrinks our dataset we have to check because we are not considering the spans with only words/sentences. If there’s a character “$”, we immediately check if it contains the keyword “SAVE”. If it’s the case, we know we are at the consecutive spans(querySelectorAll function scan the HTML content for the tag line by line). Then we can easily get the promotion and price and break the loop.

![](https://miro.medium.com/v2/resize:fit:481/1*LWF1wbH1H51FXGrNkg2LBg.png)

```typescript

let spans = await page.evaluate(() => {  
    return **_Array_**.from(**_document_**.body.querySelectorAll('span'), (el) => el.textContent);  
});  
let price, promotion;  
for (let j = 0; j < spans.length; j++) {  
    if (spans[j] != null && (spans[j].indexOf("$") > -1)) {  
        if ((spans[j].indexOf("SAVE") > -1)) {  
            promotion = spans[j];  
            price = spans[j+2];  
            break;  
        }  
    }  
}
```


One thing to notice is that our intended price is “$229.99”, but it’s under a nested span. So if we call spans\[j+1\], it will actually give a string “$229.99$22999”. This is the concatenation of all the texts under that span.

![](https://miro.medium.com/v2/resize:fit:457/1*n3YxNjFkGsDyl6OthDI4lg.png)

Basically, at that point: spans\[j\] = “SAVE $70” , spans\[j+1\] = “$229.99$22999”, and spans\[j+2\] = “$229.99”. This fact is mentioned above(querySelectorAll function scan the HTML content for the tag line by line).

I changed the url to be the computer categories so it can do the scraping faster.

```typescript

const puppeteer = require('puppeteer');  
const url = 'https://www.bestbuy.ca/en-ca/collection/computers-and-tablets/242130?icmp=home\_shopbycategory\_event\_computersandtablets';  
  
(async function scrape() {  
    const browser = await puppeteer.launch({ headless: false });  
    const page = await browser.newPage();  
    **_console_**.log("We are scraping from " + url + ":");  
    await page.goto(url);  
    let hrefs = await page.evaluate(() => {  
        let Element = **_Array_**.from(**_document_**.body.querySelectorAll('a'), (el) => el.href);  
        return **_Array_**.from(new **_Set_**(Element));  
    });  
    let res = \[\];  
    for (let i = 0; i < hrefs.length; i++) {  
        if (hrefs\[i\].indexOf("laptop") > -1) {  
            res.push(hrefs\[i\]);  
        }  
    }  
    for (let i = 0; i < res.length; i++) {  
        await page.goto(res\[i\]);  
        let item\_name = await page.evaluate(() => {  
            let selector = **_document_**.body.querySelector('h1');  
            if (selector===null) return null;  
            return selector.textContent;  
        });  
        if (item\_name === null) continue;  
        let spans = await page.evaluate(() => {  
            return **_Array_**.from(**_document_**.body.querySelectorAll('span'), (el) => el.textContent);  
        });  
        let price, promotion;  
        for (let j = 0; j < spans.length; j++) {  
            if (spans\[j\] != null && (spans\[j\].indexOf("$") > -1)) {  
                if ((spans\[j\].indexOf("SAVE") > -1)) {  
                    promotion = spans\[j\];  
                    price = spans\[j+2\];  
                    break;  
                }  
            }  
        }  
        if (promotion===undefined  
            || price===undefined  
            || price.indexOf("$") === -1  
            || promotion.indexOf("$") === -1  
        ) continue;  
        **_console_**.log({ "name":item\_name, "price":price , "promotion": promotion});  
    }  
  
    await browser.close();  
  
})().catch(function(err){  
    **_console_**.log(err);  
});
```


At the end we have a last check, we don’t output the price and promotion if any of them is undefined/null or don’t have “$” sign in them. If everything is good, we output the price as well as the promotion in tuple format to the console. Some sample output are:

![](https://miro.medium.com/v2/resize:fit:630/1*-44jUuhxjWiOa5xYQpL0aw.png)

If you wonder why we write a long program to get the name and price instead of just querying for the class name, it’s because the class name is randomly generated to avoid elements having the same class name. Therefore, the class name could vary or change regularly. However, the structure of how they put elements together is not likely gonna change, so our algorithm is likely going to work in long term.

Hopefully you have a better understanding of dynamic web scraping as well as the library Puppeteer.

If you noticed any error or issue, please comment or email me (tommypang04@gmail.com)

Source code can be found at [https://github.com/TommyPang/DynamicWebScraper](https://github.com/TommyPang/DynamicWebScraper)

[

Dynamic Web

](https://medium.com/tag/dynamic-web?source=post_page-----4af7a88ca0c6---------------dynamic_web-----------------)

[

Web Scraping

](https://medium.com/tag/web-scraping?source=post_page-----4af7a88ca0c6---------------web_scraping-----------------)

[

Nodejs

](https://medium.com/tag/nodejs?source=post_page-----4af7a88ca0c6---------------nodejs-----------------)

[

Puppeteer

](https://medium.com/tag/puppeteer?source=post_page-----4af7a88ca0c6---------------puppeteer-----------------)

[

Best Buy

](https://medium.com/tag/best-buy?source=post_page-----4af7a88ca0c6---------------best_buy-----------------)

80

80

[

![Tommy Pang](https://miro.medium.com/v2/da:true/resize:fill:144:144/0*iHzJfnGf790CFEsq)





](https://medium.com/@tommypang04?source=post_page-----4af7a88ca0c6--------------------------------)

Follow

[

## Written by Tommy Pang

](https://medium.com/@tommypang04?source=post_page-----4af7a88ca0c6--------------------------------)

[11 Followers](https://medium.com/@tommypang04/followers?source=post_page-----4af7a88ca0c6--------------------------------)

CS Student at University of Waterloo

Follow

## More from Tommy Pang

![A Simple Calculator Implemented With Javascript That Evaluates String Expressions](https://miro.medium.com/v2/resize:fit:611/1*eqbNTlh9rk6y0Rl_MRlJ8g.png)

[

![Tommy Pang](https://miro.medium.com/v2/resize:fill:18:18/0*iHzJfnGf790CFEsq)



](https://medium.com/@tommypang04?source=author_recirc-----4af7a88ca0c6----0---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

[

Tommy Pang

](https://medium.com/@tommypang04?source=author_recirc-----4af7a88ca0c6----0---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

[

## A Simple Calculator Implemented With Javascript That Evaluates String Expressions

### In this article, you will learn how to write a calculator using Javascript that can evaluate elementary arithmetic expressions. For example…



](https://medium.com/@tommypang04/a-simple-calculator-that-evaluates-elementary-arithmetic-expressions-with-javascript-bca12de61aea?source=author_recirc-----4af7a88ca0c6----0---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

7 min read·Oct 23, 2021

139

![How I transferred from Math to CS](https://miro.medium.com/v2/resize:fit:611/1*ooDhZ9jna-3tmwRZntrA8w.png)

[

![Tommy Pang](https://miro.medium.com/v2/resize:fill:18:18/0*iHzJfnGf790CFEsq)



](https://medium.com/@tommypang04?source=author_recirc-----4af7a88ca0c6----1---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

[

Tommy Pang

](https://medium.com/@tommypang04?source=author_recirc-----4af7a88ca0c6----1---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

[

## How I transferred from Math to CS

### The Fall 2023 admission process is coming to an end, and deferrals/rejections are happening.



](https://medium.com/@tommypang04/how-i-transferred-from-math-to-cs-5b93560bec8e?source=author_recirc-----4af7a88ca0c6----1---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

5 min read·May 12, 2023

206

[

2

](https://medium.com/@tommypang04/how-i-transferred-from-math-to-cs-5b93560bec8e?responsesOpen=true&sortBy=REVERSE_CHRON&source=author_recirc-----4af7a88ca0c6----1---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

![Static Web Page Scraping With Node.js](https://miro.medium.com/v2/resize:fit:611/1*44eC8g5sIOjy_HsyvhkeBQ.png)

[

![Tommy Pang](https://miro.medium.com/v2/resize:fill:18:18/0*iHzJfnGf790CFEsq)



](https://medium.com/@tommypang04?source=author_recirc-----4af7a88ca0c6----2---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

[

Tommy Pang

](https://medium.com/@tommypang04?source=author_recirc-----4af7a88ca0c6----2---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

[

## Static Web Page Scraping With Node.js

### In this article you will learn how to scrape a static web page using request promise and cheerio.



](https://medium.com/@tommypang04/static-web-page-scraping-with-node-js-fd2f0a0d9c37?source=author_recirc-----4af7a88ca0c6----2---------------------9b216fce_f910_43bb_8fc4_15d381f700bb-------)

4 min read·Sep 26, 2021

138

[

See all from Tommy Pang

](https://medium.com/@tommypang04?source=post_page-----4af7a88ca0c6--------------------------------)

## Recommended from Medium

![Web Scraping with Playwright and Nodejs](https://miro.medium.com/v2/resize:fit:611/1*OeJkFJY1bo7grzrNy4r3jg.png)

[

![Scrapingdog](https://miro.medium.com/v2/resize:fill:18:18/1*KtBDU5REgvtj5lk1txPoHA.png)



](https://medium.com/@scrapingking?source=read_next_recirc-----4af7a88ca0c6----0---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

Scrapingdog

](https://medium.com/@scrapingking?source=read_next_recirc-----4af7a88ca0c6----0---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

## Web Scraping with Playwright and Nodejs

### Playwright is another popular open-source browser automation Nodejs library. It makes browser automation super simple. It is fast and…



](https://medium.com/@scrapingking/web-scraping-with-playwright-and-nodejs-126adbced92c?source=read_next_recirc-----4af7a88ca0c6----0---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

8 min read·Dec 1, 2023

2

![Browser automation with Puppeteer](https://miro.medium.com/v2/resize:fit:611/1*yuVzMhCJyDENbyhwAsrkwA.png)

[

![Željko Šević](https://miro.medium.com/v2/resize:fill:18:18/0*cKzni2vcjCBmcOcW)



](https://medium.com/@sevicdev?source=read_next_recirc-----4af7a88ca0c6----1---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

Željko Šević

](https://medium.com/@sevicdev?source=read_next_recirc-----4af7a88ca0c6----1---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

## Browser automation with Puppeteer

### Puppeteer is a headless browser for automating browser tasks. Here’s the list of some of the features:



](https://medium.com/@sevicdev/browser-automation-with-puppeteer-025ce3e27d3b?source=read_next_recirc-----4af7a88ca0c6----1---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

3 min read·Dec 6, 2023

## Lists

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*yr2O5U-a0-rfY34C6yOXMw.jpeg)

![](https://miro.medium.com/v2/resize:fill:43:43/1*_3WdkzQRqIq8tt3Wh-WhbA.jpeg)

## Stories to Help You Grow as a Software Developer

19 stories·960 saves



](https://medium.com/@MediumStaff/list/stories-to-help-you-grow-as-a-software-developer-b1d913188c20?source=read_next_recirc-----4af7a88ca0c6--------------------------------)

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*Fwpkf8H5PwNrzSzMYUFjjA.png)

![](https://miro.medium.com/v2/resize:fill:43:43/1*G49cai7vIuhFeSwb4LCuSQ.jpeg)

![](https://miro.medium.com/v2/resize:fill:43:43/1*HlJ2e41GVVzzjWYiX0dU1g.png)

## data science and AI

40 stories·122 saves



](https://medium.com/@grexe/list/data-science-and-ai-35d21381d956?source=read_next_recirc-----4af7a88ca0c6--------------------------------)

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*vzu3JPzaq2EZKTZNY9BhLA.png)

![AI-generated image of a cute tiny robot in the backdrop of ChatGPT’s logo](https://miro.medium.com/v2/resize:fill:43:43/1*lEmL62oZdrOOWIzAAFKiFg.jpeg)

![](https://miro.medium.com/v2/resize:fill:43:43/1*i2zLIwC9mftamP1dbciCeQ.jpeg)

## ChatGPT

21 stories·555 saves



](https://medium.com/@m.wasalski/list/chatgpt-3742c7a4727d?source=read_next_recirc-----4af7a88ca0c6--------------------------------)

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*rA5T3ZTDMr3Gh0taL6-CGA.png)

![](https://miro.medium.com/v2/resize:fill:43:43/1*9l0iePJqhp93hXlEupk27A.png)

![](https://miro.medium.com/v2/resize:fill:43:43/1*3CpH1U4LpX8jcrpOPdGSYQ.png)

## ChatGPT prompts

47 stories·1379 saves



](https://medium.com/@nicholas.michael.janulewicz/list/chatgpt-prompts-b4c47b8e12ee?source=read_next_recirc-----4af7a88ca0c6--------------------------------)

![How to Make Puppeteer Work in Docker: Both in Local and Production Environments](https://miro.medium.com/v2/resize:fit:611/1*nEQjXdpz6TGbBcdt201cuQ.png)

[

![Stanislas Randriamilasoa](https://miro.medium.com/v2/resize:fill:18:18/1*8PE-YGC0LSyuqnLHK4q5NQ.jpeg)



](https://medium.com/@raslasarslas?source=read_next_recirc-----4af7a88ca0c6----0---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

Stanislas Randriamilasoa

](https://medium.com/@raslasarslas?source=read_next_recirc-----4af7a88ca0c6----0---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

## How to Make Puppeteer Work in Docker: Both in Local and Production Environments

### Setting up Puppeteer in Docker, particularly in the context of a Node.js application, can be a challenging task. I know, as I’ve found…



](https://medium.com/@raslasarslas/how-to-make-work-puppeteer-in-docker-both-in-local-en-prod-env-bb92628b2da6?source=read_next_recirc-----4af7a88ca0c6----0---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

2 min read·Oct 7, 2023

116

[

1

](https://medium.com/@raslasarslas/how-to-make-work-puppeteer-in-docker-both-in-local-en-prod-env-bb92628b2da6?responsesOpen=true&sortBy=REVERSE_CHRON&source=read_next_recirc-----4af7a88ca0c6----0---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

![How to Crawl a Single Page Application (SPA) in Node.js](https://miro.medium.com/v2/resize:fit:611/1*q8gzOzE07v5mK68qAWU66w.jpeg)

[

![Hossein Molavi](https://miro.medium.com/v2/resize:fill:18:18/1*hJg30140YjEkJdaXDcs6_g.jpeg)



](https://medium.com/@ho3einmolavi?source=read_next_recirc-----4af7a88ca0c6----1---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

Hossein Molavi

](https://medium.com/@ho3einmolavi?source=read_next_recirc-----4af7a88ca0c6----1---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

## How to Crawl a Single Page Application (SPA) in Node.js

### Single Page Applications (SPAs) are becoming increasingly popular due to their seamless user experience and fast load times. However, when…



](https://medium.com/@ho3einmolavi/how-to-crawl-a-single-page-application-spa-in-node-js-8f6edee648d0?source=read_next_recirc-----4af7a88ca0c6----1---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

3 min read·Oct 17, 2023

157

[

2

](https://medium.com/@ho3einmolavi/how-to-crawl-a-single-page-application-spa-in-node-js-8f6edee648d0?responsesOpen=true&sortBy=REVERSE_CHRON&source=read_next_recirc-----4af7a88ca0c6----1---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

![Speed Up the Headless Browser in Playwright](https://miro.medium.com/v2/resize:fit:611/1*yuVzMhCJyDENbyhwAsrkwA.png)

[

![Mike Stop Continues](https://miro.medium.com/v2/resize:fill:18:18/0*uJXAp1G1unZf2u8e.jpg)



](https://medium.com/@mikestopcontinues?source=read_next_recirc-----4af7a88ca0c6----2---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

Mike Stop Continues

](https://medium.com/@mikestopcontinues?source=read_next_recirc-----4af7a88ca0c6----2---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

## Speed Up the Headless Browser in Playwright

### For developers immersed in web automation, Playwright is a vital ally… but it can be a pretty heavy process to run. As you begin to rely…



](https://medium.com/@mikestopcontinues/speed-up-the-headless-browser-in-playwright-112c045669f1?source=read_next_recirc-----4af7a88ca0c6----2---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

3 min read·Nov 16, 2023

3

![Web Scraping with NodeJS using Puppeteer.](https://miro.medium.com/v2/resize:fit:611/1*25C1dNYi3BcIJz6rJ1Hs3A.png)

[

![Stasbytes](https://miro.medium.com/v2/resize:fill:18:18/1*M-A8OXQx8JC_iRmPgEPeiA.jpeg)



](https://medium.com/@stasbytes?source=read_next_recirc-----4af7a88ca0c6----3---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

Stasbytes

](https://medium.com/@stasbytes?source=read_next_recirc-----4af7a88ca0c6----3---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

[

## Web Scraping with NodeJS using Puppeteer.

### Introduction



](https://medium.com/@stasbytes/web-scraping-with-nodejs-using-puppeteer-40ec28b9b9a9?source=read_next_recirc-----4af7a88ca0c6----3---------------------607b3fba_8683_4ea2_b97b_d6fdc6a77248-------)

5 min read·Jan 31, 2024

48