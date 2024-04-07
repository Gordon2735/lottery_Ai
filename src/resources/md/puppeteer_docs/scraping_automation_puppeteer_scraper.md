# Web Scraping and Automation with Node.js and TypeScript | Cheerio - Puppeteer

[

![Muhannad Salkini](https://miro.medium.com/v2/resize:fill:88:88/1*b67o_mU6j4xFV_5kHYCCOA.jpeg)









](https://medium.com/@muhannad.salkini?source=post_page-----5cc476c57f4d--------------------------------)

[Muhannad Salkini](https://medium.com/@muhannad.salkini?source=post_page-----5cc476c57f4d--------------------------------)

·

Follow

3 min read

·

Mar 13, 2024

4

Listen

Share

More

![](https://miro.medium.com/v2/resize:fit:630/1*rFUWmgmJbLwHU1-hx3EfmQ.png)

In the ever-expanding realm of web development, the ability to extract and manipulate data from websites programmatically has become increasingly valuable. Web scraping, the process of extracting data from websites, opens up a world of possibilities for automating tasks, gathering insights, and powering applications with fresh data. In this article, we’ll delve into the world of web scraping and automation using Node.js and typescript, exploring libraries like Cheerio and Puppeteer to scrape data efficiently and perform automation tasks seamlessly.

# Introduction to Web Scraping

Web scraping involves extracting structured data from web pages, typically in HTML format, and converting it into a usable format for further analysis or processing. Whether it’s scraping product information from e-commerce sites, extracting news articles, or gathering information for research purposes, web scraping offers a powerful means to collect data at scale.

# Getting Started with Cheerio

Cheerio is a fast, flexible, and lightweight library for parsing and manipulating HTML content in Node.js, inspired by jQuery. It provides a familiar jQuery-like interface for traversing and manipulating the DOM, making it ideal for scraping static web pages.

Let’s take a look at a simple example of scraping data from a webpage using Cheerio:

```typescript
import axios from "axios";  
import \* as cheerio from "cheerio";  
  
async function scrapeWebsite(url: string): Promise<void\> {  
  try {  
    // Fetch HTML content of the specified URL using axios  
    const response = await axios.get(url);  
    // Load HTML content into Cheerio for manipulation  
    const $ = cheerio.load(response.data);  
  
    // Select all elements with class "mh-portfolio" and iterate over them  
    $(".mh-portfolio").each((index, element) => {  
      // Extract and log the text content of each element  
      console.log($(element).text());  
    });  
  } catch (error) {  
    console.error("Error fetching and parsing data:", error);  
  }  
} 
``` 
  
// Usage  
scrapeWebsite("https://muhannad.salkini.me/");

In this example, we use Axios to make an HTTP GET request to a website and load the HTML content into Cheerio. Then we select elements with the class `.mh-portfolio` and extract their text content.

# Web Scraping with Puppeteer

While Cheerio is excellent for scraping static content, it falls short when dealing with dynamic or JavaScript-rendered pages. Enter Puppeteer, a powerful Node.js library that provides a high-level API to control headless Chrome or Chromium browsers. With Puppeteer, you can scrape dynamic content, interact with web pages, and perform automation tasks with ease.

Let’s see how Puppeteer can be used to scrape dynamic content and perform automation tasks in TypeScript:

```typescript

import puppeteer from "puppeteer";  
  
async function scrapeDynamicContent(url: string): Promise<void\> {  
  // Launch a headless browser  
  const browser = await puppeteer.launch();  
  // Open a new page in the browser  
  const page = await browser.newPage();  
  
  try {  
    // Navigate to the specified URL  
    await page.goto(url);  
    // Wait for the specified selector to appear on the page  
    await page.waitForSelector(".mh-experience");  
  
    // Extract text content of elements matching the selector  
    const data = await page.evaluate(() => {  
      // Select all elements matching the specified selector  
      const elements = document.querySelectorAll(".mh-experience");  
      // Map over the elements and return their text content  
      return Array.from(elements).map((element) => element.textContent);  
    });  
  
    // Log the extracted data  
    console.log(data);  
  } catch (error) {  
    console.error("Error scraping dynamic content:", error);  
  } finally {  
    // Close the browser once scraping is done  
    await browser.close();  
  }  
}  
```
  
// Usage  
scrapeDynamicContent("https://muhannad.salkini.me/");

In this example, we launch a headless browser using Puppeteer, navigate to a dynamic web page, wait for the specific element to appear, and then extract its text content using JavaScript evaluation.

# Conclusion

Web scraping and automation with Node.js and TypeScript open up a world of possibilities for developers. Whether it’s extracting data from websites, automating repetitive tasks, or performing UI testing, libraries like Cheerio and Puppeteer provide powerful tools to get the job done efficiently.

As you explore the world of web scraping and automation, remember to respect website terms of service, use proper throttling and rate limiting to avoid overloading servers, and handle data ethically and responsibly. Happy scraping!

# References

- **Cheerio**: [https://cheerio.js.org/](https://cheerio.js.org/)
- **Puppeteer**: [https://pptr.dev/](https://pptr.dev/)
- **GitHub Repository:** Access the code repository for this project \[[here](https://github.com/muhannadsalkini/TypeScript-WebScraping)\].

In this article, we’ve only scratched the surface of what’s possible with web scraping and automation in Node.js and TypeScript. I encourage you to dive deeper, experiment with different techniques and libraries, and discover the myriad of applications for web scraping and automation in your projects.

Thank you for reading! Have any feedback or questions? Feel free to share in the comments. Happy coding!

[

Web Scraping

](https://medium.com/tag/web-scraping?source=post_page-----5cc476c57f4d---------------web_scraping-----------------)

[

Typescript

](https://medium.com/tag/typescript?source=post_page-----5cc476c57f4d---------------typescript-----------------)

[

Data Mining

](https://medium.com/tag/data-mining?source=post_page-----5cc476c57f4d---------------data_mining-----------------)

[

Cherrio

](https://medium.com/tag/cherrio?source=post_page-----5cc476c57f4d---------------cherrio-----------------)

[

Puppeteer

](https://medium.com/tag/puppeteer?source=post_page-----5cc476c57f4d---------------puppeteer-----------------)

4

4

[

![Muhannad Salkini](https://miro.medium.com/v2/resize:fill:144:144/1*b67o_mU6j4xFV_5kHYCCOA.jpeg)





](https://medium.com/@muhannad.salkini?source=post_page-----5cc476c57f4d--------------------------------)

Follow

[

## Written by Muhannad Salkini

](https://medium.com/@muhannad.salkini?source=post_page-----5cc476c57f4d--------------------------------)

[6 Followers](https://medium.com/@muhannad.salkini/followers?source=post_page-----5cc476c57f4d--------------------------------)

Follow

## More from Muhannad Salkini

![Leveraging Hugging Face with TypeScript | Hhuggingface.js](https://miro.medium.com/v2/resize:fit:611/1*WSxydEdmwRZVIVxLmm8k6g.png)

[

![Muhannad Salkini](https://miro.medium.com/v2/resize:fill:18:18/1*b67o_mU6j4xFV_5kHYCCOA.jpeg)



](https://medium.com/@muhannad.salkini?source=author_recirc-----5cc476c57f4d----0---------------------a77ee122_0eac_44f4_bae9_dca53f2af7eb-------)

[

Muhannad Salkini

](https://medium.com/@muhannad.salkini?source=author_recirc-----5cc476c57f4d----0---------------------a77ee122_0eac_44f4_bae9_dca53f2af7eb-------)

[

## Leveraging Hugging Face with TypeScript | Hhuggingface.js

### In this article, we’ll explore the powerful combination of the Huggingface.js library and TypeScript for natural language processing tasks…



](https://medium.com/@muhannad.salkini/leveraging-hugging-face-with-typescript-hhuggingface-js-bfe4e127ed7a?source=author_recirc-----5cc476c57f4d----0---------------------a77ee122_0eac_44f4_bae9_dca53f2af7eb-------)

4 min read·Mar 4, 2024

6

[

![Muhannad Salkini](https://miro.medium.com/v2/resize:fill:18:18/1*b67o_mU6j4xFV_5kHYCCOA.jpeg)



](https://medium.com/@muhannad.salkini?source=post_page-----5cc476c57f4d----0----------------------------)

[

Muhannad Salkini

](https://medium.com/@muhannad.salkini?source=post_page-----5cc476c57f4d----0----------------------------)

[

## Leveraging Hugging Face with TypeScript | Hhuggingface.js

### In this article, we’ll explore the powerful combination of the Huggingface.js library and TypeScript for natural language processing tasks…



](https://medium.com/@muhannad.salkini/leveraging-hugging-face-with-typescript-hhuggingface-js-bfe4e127ed7a?source=post_page-----5cc476c57f4d----0----------------------------)

[

4 min read·Mar 4, 2024

](https://medium.com/@muhannad.salkini/leveraging-hugging-face-with-typescript-hhuggingface-js-bfe4e127ed7a?source=post_page-----5cc476c57f4d----0----------------------------)

6

![Leveraging Hugging Face with TypeScript | Hhuggingface.js](https://miro.medium.com/v2/resize:fill:144:96/1*WSxydEdmwRZVIVxLmm8k6g.png)

6

[

See all from Muhannad Salkini

](https://medium.com/@muhannad.salkini?source=post_page-----5cc476c57f4d--------------------------------)

## Recommended from Medium

![Browser automation with Puppeteer](https://miro.medium.com/v2/resize:fit:611/1*yuVzMhCJyDENbyhwAsrkwA.png)

[

![Željko Šević](https://miro.medium.com/v2/resize:fill:18:18/0*cKzni2vcjCBmcOcW)



](https://medium.com/@sevicdev?source=read_next_recirc-----5cc476c57f4d----0---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

Željko Šević

](https://medium.com/@sevicdev?source=read_next_recirc-----5cc476c57f4d----0---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

## Browser automation with Puppeteer

### Puppeteer is a headless browser for automating browser tasks. Here’s the list of some of the features:



](https://medium.com/@sevicdev/browser-automation-with-puppeteer-025ce3e27d3b?source=read_next_recirc-----5cc476c57f4d----0---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

3 min read·Dec 6, 2023

![Create and Deploy a Telegram Bot with JavaScript](https://miro.medium.com/v2/resize:fit:611/1*1aaw9olionct3qGhAEQTkw.png)

[

![MichaelYuhe](https://miro.medium.com/v2/resize:fill:18:18/1*ZTYa7tB885dDgWaqzRI-ww.png)



](https://medium.com/@xiayuhang1106?source=read_next_recirc-----5cc476c57f4d----1---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

MichaelYuhe

](https://medium.com/@xiayuhang1106?source=read_next_recirc-----5cc476c57f4d----1---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

in

[

JavaScript in Plain English

](https://medium.com/javascript-in-plain-english?source=read_next_recirc-----5cc476c57f4d----1---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

## Create and Deploy a Telegram Bot with JavaScript

### This tutorial will guide you through developing a simple Telegram bot from scratch, utilizing the GrammY framework with JavaScript, and…



](https://medium.com/javascript-in-plain-english/create-and-deploy-a-telegram-bot-with-javascript-fa129cc5acc9?source=read_next_recirc-----5cc476c57f4d----1---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

4 min read·Mar 8, 2024

5

## Lists

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*vzu3JPzaq2EZKTZNY9BhLA.png)

![AI-generated image of a cute tiny robot in the backdrop of ChatGPT’s logo](https://miro.medium.com/v2/resize:fill:43:43/1*lEmL62oZdrOOWIzAAFKiFg.jpeg)

![](https://miro.medium.com/v2/resize:fill:43:43/1*i2zLIwC9mftamP1dbciCeQ.jpeg)

## ChatGPT

21 stories·555 saves



](https://medium.com/@m.wasalski/list/chatgpt-3742c7a4727d?source=read_next_recirc-----5cc476c57f4d--------------------------------)

[

![AI opportunities are found at the intersection of problem space and information space. Problems that involved cognitive tasks are “worth solving with AI”. Problems for which sufficient data is available are “feasible to be solved with AI”](https://miro.medium.com/v2/resize:fill:43:43/1*1Fr7fPf0BXKpGFwf29U5uQ.png)

![](https://miro.medium.com/v2/resize:fill:43:43/1*Da9W2a6Oo90h_TKXNH6y4Q.png)

![](https://miro.medium.com/v2/resize:fill:43:43/1*bhNlT_X-caEz7uBUObvURQ.png)

## Business

41 stories·91 saves



](https://medium.com/@bramdevogel/list/business-b13ff2fbaf67?source=read_next_recirc-----5cc476c57f4d--------------------------------)

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*rA5T3ZTDMr3Gh0taL6-CGA.png)

![](https://miro.medium.com/v2/resize:fill:43:43/1*9l0iePJqhp93hXlEupk27A.png)

![](https://miro.medium.com/v2/resize:fill:43:43/1*3CpH1U4LpX8jcrpOPdGSYQ.png)

## ChatGPT prompts

47 stories·1379 saves



](https://medium.com/@nicholas.michael.janulewicz/list/chatgpt-prompts-b4c47b8e12ee?source=read_next_recirc-----5cc476c57f4d--------------------------------)

[

![](https://miro.medium.com/v2/resize:fill:43:43/1*Fwpkf8H5PwNrzSzMYUFjjA.png)

![](https://miro.medium.com/v2/resize:fill:43:43/1*G49cai7vIuhFeSwb4LCuSQ.jpeg)

![](https://miro.medium.com/v2/resize:fill:43:43/1*HlJ2e41GVVzzjWYiX0dU1g.png)

## data science and AI

40 stories·122 saves



](https://medium.com/@grexe/list/data-science-and-ai-35d21381d956?source=read_next_recirc-----5cc476c57f4d--------------------------------)

![Understanding the Asynchronous Nature of Cypress](https://miro.medium.com/v2/resize:fit:611/1*W0ypQOm_hy0LUw-Oaj6t5A.png)

[

![Pratik Shrestha](https://miro.medium.com/v2/resize:fill:18:18/1*O1YB1NLcxJN9yqSe9_lGgg.jpeg)



](https://medium.com/@pratik_shrestha?source=read_next_recirc-----5cc476c57f4d----0---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

Pratik Shrestha

](https://medium.com/@pratik_shrestha?source=read_next_recirc-----5cc476c57f4d----0---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

## Understanding the Asynchronous Nature of Cypress

### Cypress, the popular end-to-end testing framework, empowers developers to create robust and reliable test suites for web applications…



](https://medium.com/@pratik_shrestha/understanding-the-asynchronous-nature-of-cypress-a2c6cee11eac?source=read_next_recirc-----5cc476c57f4d----0---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

5 min read·4 days ago

58

![Web Scraping with Playwright and Nodejs](https://miro.medium.com/v2/resize:fit:611/1*OeJkFJY1bo7grzrNy4r3jg.png)

[

![Scrapingdog](https://miro.medium.com/v2/resize:fill:18:18/1*KtBDU5REgvtj5lk1txPoHA.png)



](https://medium.com/@scrapingking?source=read_next_recirc-----5cc476c57f4d----1---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

Scrapingdog

](https://medium.com/@scrapingking?source=read_next_recirc-----5cc476c57f4d----1---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

## Web Scraping with Playwright and Nodejs

### Playwright is another popular open-source browser automation Nodejs library. It makes browser automation super simple. It is fast and…



](https://medium.com/@scrapingking/web-scraping-with-playwright-and-nodejs-126adbced92c?source=read_next_recirc-----5cc476c57f4d----1---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

8 min read·Dec 1, 2023

2

![Web Scraping with NodeJS using Puppeteer.](https://miro.medium.com/v2/resize:fit:611/1*25C1dNYi3BcIJz6rJ1Hs3A.png)

[

![Stasbytes](https://miro.medium.com/v2/resize:fill:18:18/1*M-A8OXQx8JC_iRmPgEPeiA.jpeg)



](https://medium.com/@stasbytes?source=read_next_recirc-----5cc476c57f4d----2---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

Stasbytes

](https://medium.com/@stasbytes?source=read_next_recirc-----5cc476c57f4d----2---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

## Web Scraping with NodeJS using Puppeteer.

### Introduction



](https://medium.com/@stasbytes/web-scraping-with-nodejs-using-puppeteer-40ec28b9b9a9?source=read_next_recirc-----5cc476c57f4d----2---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

5 min read·Jan 31, 2024

48

![Web Scraping with Selenium, BeautifulSoup, and CSV in Python.](https://miro.medium.com/v2/resize:fit:611/1*NH6r8tJM0F_7NyW8DFL0Gg.png)

[

![Megh Gala](https://miro.medium.com/v2/resize:fill:18:18/1*_YHMvB0SczKtjBxaAKoz7A.jpeg)



](https://medium.com/@megh.gala765?source=read_next_recirc-----5cc476c57f4d----3---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

Megh Gala

](https://medium.com/@megh.gala765?source=read_next_recirc-----5cc476c57f4d----3---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

[

## Web Scraping with Selenium, BeautifulSoup, and CSV in Python.

### What is Web Scraping?



](https://medium.com/@megh.gala765/web-scraping-with-selenium-beautifulsoup-and-csv-in-python-3153f338ee93?source=read_next_recirc-----5cc476c57f4d----3---------------------10969ea3_eb83_489f_b1ba_78bd5d432e21-------)

9 min read·Oct 31, 2023

46