# Web Scrapping with Puppeteer — Some basic examples

[

![Rishabh Priyadarshi](https://miro.medium.com/v2/resize:fill:88:88/1*Gjp8Sn3zO2eCroJADSLOcw.jpeg)









](https://medium.com/@rishabhpriyadarshi?source=post_page-----7b20524b6a93--------------------------------)

[Rishabh Priyadarshi](https://medium.com/@rishabhpriyadarshi?source=post_page-----7b20524b6a93--------------------------------)

·

Follow

4 min read

·

Nov 15, 2018

67

Listen

Share

More

![](https://miro.medium.com/v2/resize:fit:261/1*kk8ovQKB-45FsZ8TZM-vjg.png)

## What is Puppeteer?

Puppeteer is a node library which comes with an API to control headless Chromium or Chrome browser. A headless browser is basically a browser without any UI and is used to scrape or crawl over web pages.

Following are some of the interesting things you can do with Puppeteer :

1. Generate PDFs and screenshots of web pages.
2. Automate tasks like filling a form and keyboard input.
3. Grab data from websites and save it.
4. Create automated testing environments.

## Getting Started

You’ll need [NodeJS](https://nodejs.org/en/) installed, basic knowledge of the command line, JavaScript and the DOM.

**Installation**

To install puppeteer, run the following command in your terminal

```bash
npm i puppeteer
```

It also downloads the latest version of Chromium in order to run the API smoothly. You can use the following command to if you don’t want Chromium to be installed by default:

```bash
npm i puppeteer-core
```

**Project setup**

1. Make a folder.
2. Open the folder in your terminal.
3. In your terminal run, `npm inti -y` to generate a `package.json` for managing project dependencies.

## Samples

I will be using [scrapethissite.com](http://scrapethissite.com/) for all the examples. You can use any other site if you want as long as they allow you to scrape them. Search for their policy and try looking at `site/robots.txt`

**Saving a screenshot**

Create a file by the name of `screenshot.js` in the folder which you have created and type in the following code:

![](https://miro.medium.com/v2/resize:fit:630/1*8Fxg9oVxZChg5IeBk9YW5A.png)

screenshot.js

Execute the command in the terminal

node screenshot.js

![](https://miro.medium.com/v2/resize:fit:630/1*GrzNdmdAdRRmK3I-fdHUEA.png)

Generated screenshot

Puppeteer sets and initial page size to `800px x 600px`, which defines the screenshot size. The page size can be modified using `[Page.setViewport()](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#pagesetviewportviewport)` .

**Creating a PDF**

Create a file by the name of `make_pdf.js` and type in the following code:

![](https://miro.medium.com/v2/resize:fit:630/1*kMi3qyUUnPnAx8uuXJFY3A.png)

make\_pdf.js

![](https://miro.medium.com/v2/resize:fit:630/1*Ji_YOYINa2YpfnH40Uq_tQ.png)

Generated PDF

**Scraping Data**

We will now scrape some data and save it in a file. We will use the data of NHL (National Hockey League) teams from 1990.

First we need to create some selectors. A selector is a path to the data. We will take the help of our browser’s developer tools to do this. Open them on the following page: [https://scrapethissite.com/pages/forms/](https://scrapethissite.com/pages/forms/) by using `Ctlr + Shift + I` if you are using Chrome.

![](https://miro.medium.com/v2/resize:fit:630/1*3AfXcZJ6EIfzV0_NOHustg.png)

We will take only the team name, year, number of wins and number of losses.

Note the following things:

- The data is in a table.
- The rows with team data have a class named `team`.
- Inside `tr.team` are multiple `td` with the class names: `name`, `year`, `wins`, and `losses`.

We will use the following selectors for this example:

- Team row: `tr.team`
- Data: `teamRow > td.${dataName}`

We will save this data in JSON format with the help of following steps:

1. Load the file system module.
2. Convert the data to JSON using `JSON.stringify()`
3. Write the file with `fs.writeFile()`

Create a file `grab_data.js` and add the following code to it:

![](https://miro.medium.com/v2/resize:fit:630/1*j_SVP_vcI4QhOuCi9fBHEw.png)

![](https://miro.medium.com/v2/resize:fit:630/1*fwyarsAOQMeW7czM3SMnAg.png)

Note: `page.evaluate()` is used to run JS code in the browser and communicate back any data which we want.

You can see all the code samples on my github account:

[

## rishabhp99/puppeteer-basic-sample

### Contribute to rishabhp99/puppeteer-basic-sample development by creating an account on GitHub.

github.com



](https://github.com/rishabhp99/puppeteer-basic-sample?source=post_page-----7b20524b6a93--------------------------------)

Well that’s it. I hope you had fun learning something new.

[

JavaScript

](https://medium.com/tag/javascript?source=post_page-----7b20524b6a93---------------javascript-----------------)

[

Scraping

](https://medium.com/tag/scraping?source=post_page-----7b20524b6a93---------------scraping-----------------)

[

Puppeteer

](https://medium.com/tag/puppeteer?source=post_page-----7b20524b6a93---------------puppeteer-----------------)