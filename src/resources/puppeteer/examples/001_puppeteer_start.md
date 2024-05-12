<img src="../images_puppeteer/puppeteer_logo.png" alt="puppeteer Logo Image" 
    style="margin: -0.1011em 0em -0.95em 0.7em; width: 105px; filter: drop-shadow(0.1rem 0rem 0.5rem hsla(158, 68%, 55%, 0.2723)); rotate: 344deg;" />

<h4 style="margin: -1.05em 0em 5em 3.9em; font-family: sans-serif; font-size: 14px; filter: drop-shadow(0.1rem 0rem 0.5rem hsla(158, 68%, 55%, 0.2723));">
    <p style="rotate: 344deg; position: absolute;">
        <a href="https://pptr.dev/" style="color: hsla(158, 68%, 55%, 1); text-shadow: 0.1rem 0rem 0.5rem hsla(163, 19%, 7%, 0.993);">
                Puppeteer
        </a>
    </p>
</h4>

# **Puppeteer Starting Example**

_**[​Example](https://pptr.dev/#example 'Direct link to Example')**_

```javascript
import puppeteer from 'puppeteer';
(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Navigate the page to a URL
    await page.goto('https://developer.chrome.com/');
    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });
    // Type into search box
    await page.type('.devsite-search-field', 'automate beyond recorder');
    // Wait and click on first result
    const searchResultSelector = '.devsite-result-item-link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
        'text/Customize and automate'
    );
    const fullTitle = await textSelector?.evaluate((el) => el.textContent);
    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);
    await browser.close();
})();
```
