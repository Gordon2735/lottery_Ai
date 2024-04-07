[![Jacob Lee](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F108131%2F41a9c0d0-aa25-446a-949f-ef3889c73248.jpg)](https://dev.to/hacubu)

[Jacob Lee](https://dev.to/hacubu)

Posted on Jan 26, 2021 • Updated on Feb 1, 2021

![](https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg) 16 ![](https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg) 8 ![](https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg) ![](https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg) ![](https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg)

# An Introduction to Scraping (Almost) Anything With Puppeteer and Node.js

[#webscraping](https://dev.to/t/webscraping) [#node](https://dev.to/t/node) [#puppeteer](https://dev.to/t/puppeteer) [#autocode](https://dev.to/t/autocode)

Despite the macabre name, headless browsers aren't scary (at least, to most people). They're similar to standard web browsers, but are controlled through code instead of with a mouse and keyboard. You can do almost anything with a headless browser on a page that you can do with a normal web browser, including submit forms, wait for asynchronous JavaScript, and set cookies. When used in combination with modern cloud platforms, it's easier than ever to create automated scrapers.

In this article, I'll walk you through a few web scraping tricks and examples using [Puppeteer](https://pptr.dev/), a headless browser based on Chromium that has become an industry standard, and Node.js. We'll also use [Autocode](https://autocode.com/) to easily run and iterate on our scraper code.

All you need to get started is a free Autocode account. Let's dive in!

# [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#tldr-30s)TL;DR (30s)

Getting a basic scraper working is simple. Start by going to [https://autocode.com](https://autocode.com/) and creating or logging into your account. Create a new project, and paste the following code into the editor:

```typescript
// authenticates you with the API standard library
const lib = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN });
const puppeteer = require('autocode-puppeteer');

let browser = await puppeteer.launch();
let page = await browser.newPage();
await page.goto('https://www.youtube.com/'); // Any URL you'd like
let title = await page.title();
await browser.close();
return title;
```

Enter fullscreen mode Exit fullscreen mode

Autocode will automatically add required dependencies, so all you need to do now is, press the **Save** or **Run** button to push your code live. And that's it! You're now scraping the title of the page (what you'd see in the tab bar when you open the site in Chrome) with Puppeteer.

[![Scraping the title from youtube.com](https://res.cloudinary.com/practicaldev/image/fetch/s--NnfiZ_qj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/zb15ntjzp0t6pjl5sxz5.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--NnfiZ_qj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/zb15ntjzp0t6pjl5sxz5.png)

# [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#breaking-it-down)Breaking It Down

Here's what happens in the above code:

1. We require a [variant of Puppeteer configured to work in the Autocode environment](https://www.npmjs.com/package/autocode-puppeteer). Note that the default Puppeteer package will not work due to dependency size constraints.
2. We prepare Puppeteer by launching it and opening a new page.
3. We navigate to the desired page with `await page.goto()`.
4. Once on the right page, we use the [`page.title()`](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-pagetitle) method to scrape the page title.
5. We close the browser instance when we're finished.

This flow is analogous to opening Chrome on your computer, typing `https://youtube.com/` in the navbar, checking the title of the page, and finally closing the browser. We'll follow this general pattern when web scraping with Puppeteer.

We're just scratching the surface of what's possible, but there's something important to emphasize first.

# [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#with-great-power)With Great Power...

Many websites disallow scraping, and use tools like reCAPTCHA or contain a [robots.txt](https://en.wikipedia.org/wiki/Robots_exclusion_standard) file containing guidelines for scrapers and other automated tools. You should always check and respect site rules before scraping.

# [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#scraping-data-from-page-content)Scraping Data From Page Content

Now that you've got the basics down, let's explore how to scrape more useful data from a page. One key piece of functionality Puppeteer provides is the ability to query a page for HTML elements with [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). For example, Puppeteer's [`page.$$eval()`](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-pageevalselector-pagefunction-args) method takes a selector and allows you to run code in the context of the browser on all elements matching the selector.

Here's what it looks like in action:

```typescript
// authenticates you with the API standard library
const lib = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN });
const puppeteer = require('autocode-puppeteer');

let browser = await puppeteer.launch();
let page = await browser.newPage();
await page.goto('https://www.youtube.com/');
let videoData = await page.$$eval('a#video-title-link', (titleLinkEls) => {
	return titleLinkEls.map((titleLinkEl) => {
		return {
			title: titleLinkEl.getAttribute('title'),
			link: 'https://youtube.com' + titleLinkEl.getAttribute('href')
		};
	});
});
await browser.close();
return videoData;
```

Enter fullscreen mode Exit fullscreen mode

[![The results of scraping video links and titles](https://res.cloudinary.com/practicaldev/image/fetch/s--foiKP_nk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/h6rgv349ppgd3gae26a1.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--foiKP_nk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/h6rgv349ppgd3gae26a1.png)

Once we've loaded YouTube in a page, we can use the `page.$$eval()` function to query for each video link on the front page and return the name of the video and a link to it. We've essentially created a custom trending video API!

# [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#crafting-selectors-with-chrome-devtools)Crafting Selectors With Chrome Devtools

One tricky part about creating scrapers is figuring out what elements of the page contain relevant data - after all, it's not immediately obvious that `a#video-title-link` matches all the video links on YouTube. One convenient tool for this is the inspector in Chrome's devtools.

You can open the inspector under **View > Developer > Inspect Elements** in the topbar, or by using the keyboard shortcut **CMD + Option + C**:

[![Accessing the Chrome inspector](https://res.cloudinary.com/practicaldev/image/fetch/s--UBvy2P61--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/jpx3qixio92pe8s4h90l.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--UBvy2P61--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/jpx3qixio92pe8s4h90l.png)

Once you have the inspector open, you can mouse over elements on the page and see them highlighted. Clicking one will show the element in the devtools window, including its attributes and position in the DOM.

[![Highlighting elements in the Chrome inspector](https://res.cloudinary.com/practicaldev/image/fetch/s--EfRROeMn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/8byhz5nwg6d36mz7sg4p.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--EfRROeMn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/8byhz5nwg6d36mz7sg4p.png)

With the inspector, you should be able to figure out a way to reference the correct elements and scrape the data you want.

# [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#debugging-with-screenshots)Debugging With Screenshots

Puppeteer allows you to take screenshots of pages using the [`page.screenshot()`](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-pagescreenshotoptions) method. This can be especially useful to see the current page state when composing flows that involve interaction with [`page.click()`](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-pageclickselector-options) or [`page.select()`](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-pageselectselector-values), much like a `console.log` statement.

For example, let's say you want to build a flow that involves clicking on the first video on the front page of YouTube to scrape its like and dislike count. You might try something like this:

```typescript
// authenticates you with the API standard library
const lib = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN });
const puppeteer = require('autocode-puppeteer');

/**
 * An HTTP endpoint that acts as a webhook for HTTP(S) request event
 * @returns {object.http} result
 */
module.exports = async (context) => {
	let browser = await puppeteer.launch();
	let page = await browser.newPage();
	await page.goto('https://www.youtube.com/');
	await page.click('a#video-title-link');
	let screenshot = await page.screenshot();
	await browser.close();
	return {
		statusCode: 200,
		body: screenshot,
		headers: {
			'Content-Type': 'image/png'
		}
	};
};
```

Enter fullscreen mode Exit fullscreen mode

**Note:** To make the screenshot return as an image rather than just binary data, we must pass back the proper `Content-Type` header. The above code is an example of how to do this in Autocode with the `object.http` return type. To return other types of data, you'll need to remove the return type or change the return type to match the type of data you're returning. For more information, you can read about the [FunctionScript specification](https://github.com/functionscript/functionscript#types) Autocode uses for parameters and return types.

If you were to try running the above code a few times, you would notice that the screenshot is either not changing from the main page, or that you'd see something like this:

[![Loading state](https://res.cloudinary.com/practicaldev/image/fetch/s--dmvuQCQy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/i0rkb9ecaa3i1r9832ag.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--dmvuQCQy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/i0rkb9ecaa3i1r9832ag.png)

This would clue you in to the fact that you need to wait for parts of the page to load using something like [`page.waitForSelector()`](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-pagewaitforselectorselector-options):

```typescript
// authenticates you with the API standard library
const lib = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN });
const puppeteer = require('autocode-puppeteer');

/**
 * An HTTP endpoint that acts as a webhook for HTTP(S) request event
 * @returns {object.http} result
 */
module.exports = async (context) => {
	let browser = await puppeteer.launch();
	let page = await browser.newPage();
	await page.goto('https://www.youtube.com/');
	await page.click('a#video-title-link');
	await page.waitForSelector('#top-level-buttons');
	let screenshot = await page.screenshot();
	await browser.close();
	return {
		statusCode: 200,
		body: screenshot,
		headers: {
			'Content-Type': 'image/png'
		}
	};
};
```

Enter fullscreen mode Exit fullscreen mode

Other use-cases include combining screenshots with the [Autocode scheduler](https://docs.autocode.com/getting-started/creating-your-first-project/the-autocode-scheduler/), a file hosting platform like [Box](https://box.com/), and a package like [pixelmatch](https://github.com/mapbox/pixelmatch) to create daily screenshot diffs for regression testing.

# [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#other-tips)Other Tips

## [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#tuning-your-scraper)Tuning Your Scraper

The web is a wild place, and new standards are appearing all the time. If a technique doesn't work the way you expect on a first attempt, you may need to try a different method, like waiting for a selector or even just waiting for a set amount of time rather than a `DOMContentLoaded` event, or using a different selector. Luckily, Puppeteer has plenty of options!

## [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#increasing-your-autocode-timeout)Increasing Your Autocode Timeout

Complicated flows that involve visiting multiple pages or flows that visit slow pages may require more than the default 10 second timeout on Autocode. If your scraper is consistently timing out, you can try increasing the timeout under **Advanced Settings** in the bottom left corner of the Autocode editor.

[![Increasing your Autocode timeout](https://res.cloudinary.com/practicaldev/image/fetch/s--h6FXJ7Cl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/0aliamwshsebmvzb58xt.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--h6FXJ7Cl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/0aliamwshsebmvzb58xt.png)

Free accounts can increase their timeouts to up to 30 seconds, while [Professional Tier accounts](https://autocode.com/pricing) can go up to 2 minutes.

## [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#simulating-loggedin-states-advanced)Simulating Logged-In States (Advanced)

Many websites show different data based on whether or not the current viewer is logged in. To simulate this state in Puppeteer, you might be able to use the [`page.setCookie()`](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-pagesetcookiecookies) method using cookies obtained from the Chrome devtools. You can also attempt to use and submit a site's login form directly with your username and password, but many sites use CAPTCHAs to prevent this.

Be careful not to set cookies under the wrong domain if you try this!

# [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#limitations)Limitations

Because web scrapers usually rely on the structure of the DOM for pages they visit, frontend updates can break scrapers. For this reason, it's often better to use a supported API if it is available to you.

If your desired data follows a specific format and the page you're scraping obfuscates their CSS attributes or changes them frequently, Puppeteer does have a [`page.content()`](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-pagecontent) method that returns the current DOM structure of the page as a string. You can then use a regex or some other method to extract your data.

# [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#thank-you)Thank You!

Puppeteer is an extremely powerful tool, and if you're interested in a deeper dive, I would encourage you to check out [the official documentation](https://pptr.dev/).

If you have any questions or feedback, a good place to get in touch with me is the Autocode community Slack channel. You can get an invite under **Docs > Ask for Help in Slack** in the topbar on autocode.com. You can also reach out to me on Twitter [@Hacubu](https://twitter.com/Hacubu).

If you want to stay up to date on the latest from Autocode, I would also encourage you to follow [@AutocodeHQ](https://twitter.com/AutocodeHQ). Happy hacking!

## Top comments (0)

Crown

### Sort discussion:

-   [
    Selected Sort Option Top
    Most upvoted and relevant comments will be first
    ](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g?comments_sort=top#toggle-comments-sort-dropdown)
-   [
    Latest
    Most recent comments will be first
    ](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g?comments_sort=latest#toggle-comments-sort-dropdown)
-   [
    Oldest
    The oldest comments will be first
    ](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g?comments_sort=oldest#toggle-comments-sort-dropdown)

Subscribe

    ![pic](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F713708%2F0016d06f-04a4-467a-a54b-10b4d05262f3.jpeg)

Personal Trusted User

[Create template](https://dev.to/settings/response-templates)

Templates let you quickly answer FAQs or store snippets for re-use.

Submit Preview [Dismiss](https://dev.to/404.html)

[Code of Conduct](https://dev.to/code-of-conduct) • [Report abuse](https://dev.to/report-abuse)

Are you sure you want to hide this comment? It will become hidden in your post, but will still be visible via the comment's [permalink](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#).

Hide child comments as well

Confirm

For further actions, you may consider blocking this person and/or [reporting abuse](https://dev.to/report-abuse)

[![profile](https://media.dev.to/cdn-cgi/image/width=64,height=64,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F4463%2F82fbfc88-f8c9-44b6-abde-c8ec452f1822.png)

Platform.sh

](https://dev.to/platformsh)Promoted

Dropdown menu

-   [What's a billboard?](https://dev.to/billboards)
-   [Manage preferences](https://dev.to/settings/customization#sponsors)

---

-   [Report billboard](https://dev.to/report-abuse?billboard=85439)

[![Deploy your node.js applications seamlessly](https://res.cloudinary.com/practicaldev/image/fetch/s--PscRJhme--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_775/https://pro.forem.tools/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBRdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a9848cde9026dc0c9c8c28bd85880666e579855/3.png)](https://auth.api.platform.sh/register?utm_source=devto&utm_medium=paid_social&utm_campaign=conversion_psh_free_trial_various_messaging_old)

## [](https://dev.to/hacubu/an-introduction-to-scraping-almost-anything-with-puppeteer-and-node-js-e9g#build-and-deploy-your-greatestever-app)[Build and deploy your greatest-ever app ❤️](https://auth.api.platform.sh/register?utm_source=devto&utm_medium=paid_social&utm_campaign=conversion_psh_free_trial_various_messaging_old)

**Deploy your apps seamlessly on an all-in-one PaaS.**  
🚀 Flexible, automated infrastructure provisioning.  
🎯 Multicloud and multistack.  
👾 Safe, secure and reliable around-the-clock.  
👉 Get a 30-day free trial to build and deploy your way.[Get a free trial](https://auth.api.platform.sh/register?utm_source=devto&utm_medium=paid_social&utm_campaign=conversion_psh_free_trial_various_messaging_old)

## Read next

[![manthanank profile image](https://media.dev.to/cdn-cgi/image/width=100,height=100,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F583429%2Faa97b3f4-f9ee-457d-afbf-e728ecc4b491.png)

### NGINX Cheatsheet: A Quick Reference Guide

Manthan Ankolekar - Jan 29](https://dev.to/manthanank/nginx-cheatsheet-a-quick-reference-guide-o0m) [![manoj_004d profile image](https://media.dev.to/cdn-cgi/image/width=100,height=100,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F138802%2F8bbb787a-3922-4853-9bf8-0dcf40653dae.jpg)

### Stream Data to Charts in Real-Time using Websockets and Express

Manoj Mohan - Jan 29](https://dev.to/manoj_004d/stream-data-to-charts-in-real-time-using-websockets-and-express-173b) [![teyim profile image](https://media.dev.to/cdn-cgi/image/width=100,height=100,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F475429%2Feca311a6-ca27-4993-88fa-7e3ac1c96dc2.jpg)

### Dynamic Readme image based on GitHub Activity

Teyim Asobo - Jan 29](https://dev.to/teyim/dynamic-readme-image-based-on-github-activity-2ac3) [![abeinevincent profile image](https://media.dev.to/cdn-cgi/image/width=100,height=100,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F616519%2F93874dae-c3d9-4479-b8a0-025cfafe651d.jpeg)

### Machine Learning in NodeJS || Part 1: TensorflowJS Basics

Abeinemukama Vicent - Jan 28](https://dev.to/abeinevincent/machine-learning-in-nodejs-part-1-tensorflowjs-basics-1ok4)
