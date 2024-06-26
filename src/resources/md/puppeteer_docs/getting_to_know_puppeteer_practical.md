[

Nitay Neeman's Blog

](<https://nitayneeman.com/>)

# Getting to Know Puppeteer Using Practical Examples

## July 13, 2019 17 min read Node.js

An overview, concrete guide and kinda cheat sheet for the popular browser automation library, based on Node.js, which provides a high-level API over the Chrome DevTools Protocol.

Contents

-   [How to Install](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#how-to-install)
    -   [Library Package](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#library-package)
    -   [Product Package](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#product-package)
-   [Interacting Browser](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#interacting-browser)
    -   [Launching Chromium](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#launching-chromium)
    -   [Connecting Chromium](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#connecting-chromium)
    -   [Launching Firefox](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#launching-firefox)
    -   [Browser Context](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#browser-context)
    -   [Headful Mode](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#headful-mode)
    -   [Debugging](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#debugging)
-   [Interacting Page](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#interacting-page)
    -   [Navigating by URL](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#navigating-by-url)
    -   [Emulating Devices](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#emulating-devices)
    -   [Handling Events](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#handling-events)
    -   [Operating Mouse](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#operating-mouse)
    -   [Operating Keyboard](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#operating-keyboard)
    -   [Taking Screenshots](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#taking-screenshots)
    -   [Generating PDF](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#generating-pdf)
    -   [Faking Geolocation](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#faking-geolocation)
    -   [Accessibility](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#accessibility)
    -   [Code Coverage](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#code-coverage)
    -   [Measuring Performance](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#measuring-performance)
-   [Summary](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#summary)
-   [VS Code Snippets](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/#vs-code-snippets)

(adsbygoogle = window.adsbygoogle || \[\]).push({});

[Puppeteer](https://pptr.dev/) is a project from the Google Chrome team which enables us to control a Chrome (or any other Chrome DevTools Protocol based browser) and execute common actions, much like in a real browser - programmatically, through a decent API. Put simply, it’s a super useful and easy tool for **automating, testing and scraping** web pages over a headless mode or headful either.

In this article we’re going to try out Puppeteer and demonstrate a variety of the available capabilities, through concrete examples.

_**Disclaimer:** This article doesn’t claim to replace [the official documentation](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md) but rather elaborate it - you definitely should go over it in order to be aligned with the most updated API specification._

_**Sponsor:**_

[![Active Reliability for Modern DevOps Teams](https://www.checklyhq.com/images/text_racoon_logo.afa37391.svg)

#### Active Reliability for Modern DevOps Teams

](<https://www.checklyhq.com/>)

[](https://www.checklyhq.com/)

Checkly does in-depth API monitoring and synthetic monitoring using Puppeteer. It lets us run Puppeteer scripts every couple of minutes or trigger them from the continuous integration pipeline. Check it out during the article or afterwards.

# How to Install

To begin with, we’ll have to install one of Puppeteer’s [packages](https://pptr.dev/#?product=Puppeteer&show=api-puppeteer-vs-puppeteer-core).

## Library Package

A lightweight package, called `puppeteer-core`, which is a **library** that interacts with any browser that’s based on DevTools protocol - without actually installing Chromium. It comes in handy mainly when we don’t need a downloaded version of Chromium, for instance, bundling this library within a project that interacts with a browser remotely.

In order to install, just run:

```bash
npm install puppeteer-core
```

## Product Package

The main package, called `puppeteer`, which is actually a full **product** for browser automation on top of `puppeteer-core`. Once it’s installed, the most recent version of Chromium is placed inside `node_modules`, what guarantees that the downloaded version is compatible with the host operating system.

Simply run the following to install:

```bash

npm install puppeteer
```

Now, we’re absolutely ready to go! 🤓

# Interacting Browser

As mentioned before, Puppeteer is just an API over the Chrome DevTools Protocol. Naturally, it should have a Chromium instance to interact with. This is the reason why Puppeteer’s ecosystem provides methods to launch a new Chromium instance and connect an existing instance also.

Let’s examine a few cases.

## Launching Chromium

The easiest way to interact with the browser is by launching a Chromium instance using Puppeteer:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span>
				<span class="pl-en">require</span>(<span class="pl-s"
					>'puppeteer'</span
				>);
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span>
				<span class="pl-k">async</span> <span class="pl-kos">(</span
				><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> {
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span>.<span class="pl-en"
					>launch</span
				>(<span class="pl-kos">)</span>;
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span>.<span class="pl-en"
					>info</span
				>(<span class="pl-s1">browser</span>);
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span>.<span class="pl-en"
					>close</span
				>(<span class="pl-kos">)</span>;
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
				<span class="pl-kos">)</span>(<span class="pl-kos">)</span>;
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/08c100ef25dffa0ddce9bcacd1925377/raw/6048964a3376872ec7bf4fbf61ecb53d6ed9175e/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/08c100ef25dffa0ddce9bcacd1925377#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

The `launch` method initializes the instance at first, and then attaching Puppeteer to that. Notice this method is **asynchronous** (like most Puppeteer’s methods) which, as we know, returns a `Promise`. Once it’s resolved, we get a [browser](https://pptr.dev/#?product=Puppeteer&show=api-class-browser) instance that represents our initialized instance.

## Connecting Chromium

Sometimes we want to interact with an existing Chromium instance - whether using `puppeteer-core` or just attaching a remote instance:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">chromeLauncher</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'chrome-launcher'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">axios</span> <span class="pl-c1">=</span>
				<span class="pl-en">require</span><span class="pl-kos">(</span
				><span class="pl-s">'axios'</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Initializing a Chrome instance manually</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">chrome</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">chromeLauncher</span
				><span class="pl-kos">.</span><span class="pl-en">launch</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">chromeFlags</span>:
				<span class="pl-kos">[</span
				><span class="pl-s">'--headless'</span
				><span class="pl-kos">]</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">response</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">axios</span><span class="pl-kos">.</span
				><span class="pl-en">get</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`<a class="vglnk" href="http://localhost/" rel="nofollow"
						><span>http</span><span>://</span
						><span>localhost</span></a
					>:<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">chrome</span
						><span class="pl-kos">.</span
						><span class="pl-c1">port</span
						><span class="pl-kos">}</span></span
					>/json/version`</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-kos">{</span> webSocketDebuggerUrl
				<span class="pl-kos">}</span> <span class="pl-c1">=</span>
				<span class="pl-s1">response</span><span class="pl-kos">.</span
				><span class="pl-c1">data</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Connecting the instance using `browserWSEndpoint`</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">connect</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">browserWSEndpoint</span>:
				<span class="pl-s1">webSocketDebuggerUrl</span>
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s1">browser</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">chrome</span
				><span class="pl-kos">.</span><span class="pl-en">kill</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/69876fea604aed196ad6cdf4c3e25f97/raw/fefa2e121a0e727898b970f49fb052b3965c8fc5/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/69876fea604aed196ad6cdf4c3e25f97#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Well, it’s easy to see that we use [chrome-launcher](https://github.com/GoogleChrome/chrome-launcher) in order to launch a Chrome instance **manually**. Then, we simply fetch the `webSocketDebuggerUrl` value of the created instance.

The `connect` method attaches the instance we just created to Puppeteer. All we’ve to do is supplying the WebSocket endpoint of our instance.

_**Note:** Of course, chrome-launcher is only to demonstrate an instance creation. We absolutely could connect an instance in other ways, as long as we have the appropriate WebSocket endpoint._

## Launching Firefox

Some of you might wonder - could Puppeteer interact with other browsers besides Chromium? 🤔

~Although there are projects that claim to support the variety browsers - the official team has started to maintain an [experimental project](https://github.com/puppeteer/puppeteer/tree/main/experimental/puppeteer-firefox) that interacts with **Firefox**, specifically:~

```bash
npm install puppeteer-firefox
```

**Update:** `puppeteer-firefox` was an experimental package to examine communication with an outdated Firefox fork, however, this project is no longer maintained. Presently, the way to go is by setting the `PUPPETEER_PRODUCT` environment variable to `firefox` and so fetching the binary of Firefox Nightly.

We can easily do that as part of the installation:

```bash
PUPPETEER_PRODUCT=firefox npm install puppeteer
```

Alternatively, we can use the [BrowserFetcher](https://pptr.dev/#?product=Puppeteer&show=api-class-browserfetcher) to fetch the binary.

Once we’ve the binary, we merely need to change the `product` to “firefox” whereas the rest of the lines remain the same - what means we’re already familiar with how to launch the browser:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Deprecated package</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// const puppeteer = require('puppeteer-firefox');</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// FireFox's binary is needed to be fetched before</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">product</span>:
				<span class="pl-s">'firefox'</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s1">browser</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/4c1cf0ad571891a94564bb39020c4975/raw/771b35406fc8ea33519e1efb011acbb4cae44468/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/4c1cf0ad571891a94564bb39020c4975#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

⚠️ Pay attention - the API integration isn’t totally ready yet and implemented progressively. Also, it’s better to check out the implementation status [here](https://aslushnikov.github.io/ispuppeteerfirefoxready/).

## Browser Context

Imagine that instead of recreating a browser instance each time, which is pretty expensive operation, we could use the same instance but separate it into different individual sessions which belong to this shared browser.

It’s actually possible, and these sessions are known as **[Browser Contexts](https://pptr.dev/#?product=Puppeteer&show=api-class-browsercontext)**.

A default browser context is created as soon as creating a browser instance, but we can create additional browser contexts as necessary:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// A reference for the default browser context</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">defaultContext</span>
				<span class="pl-c1">=</span> <span class="pl-s1">browser</span
				><span class="pl-kos">.</span
				><span class="pl-en">defaultBrowserContext</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s1">defaultContext</span
				><span class="pl-kos">.</span
				><span class="pl-en">isIncognito</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
				<span class="pl-c">// False</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Creates a new browser context</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">newContext</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">createIncognitoBrowserContext</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s1">newContext</span
				><span class="pl-kos">.</span
				><span class="pl-en">isIncognito</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
				<span class="pl-c">// True</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Closes the created browser context</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">newContext</span
				><span class="pl-kos">.</span><span class="pl-en">close</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Closes the browser with the default context</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/1d7782b6430b280b5e64956d2ffabff8/raw/c7016501392010708e3470d070cb66bb2fb7a4db/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/1d7782b6430b280b5e64956d2ffabff8#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Apart from the fact that we demonstrate how to access each context, we need to know that the only way to terminate the default context is by closing the browser instance - which, in fact, terminates all the contexts that belong to the browser.

Better yet, the browser context also come in handy when we want to apply a specific configuration on the session isolatedly - for instance, granting additional permissions.

## Headful Mode

As opposed to the **headless** mode - which merely uses the command line, the **headful** mode opens the browser with a graphical user interface during the instruction:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Makes the browser to be launched in a headful way</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s1">browser</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/da8135d4035a964cb251920a0c56944d/raw/cd213815ce822fc87a86182f8707bbf7ec36e9dd/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/da8135d4035a964cb251920a0c56944d#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Because of the fact that the browser is launched in headless mode by default, we demonstrate how to launch it in a headful way.

In case you wonder - headless mode is mostly useful for environments that don’t really need the UI or neither support such an interface. The cool thing is that we can headless almost everything in Puppeteer. 💪

_**Note:** We’re going to launch the browser in a headful mode for most of the upcoming examples, which will allow us to notice the result clearly._

## Debugging

When writing code, we should be aware of what kinds of ways are available to debug our program. The documentation lists several [tips](https://developers.google.com/web/tools/puppeteer/debugging) about debugging Puppeteer.

Let’s cover the core principles:

**1️⃣ - Checking how the browser is operated**

That’s fairly probable we would like to see how our script instructs the browser and what’s actually displayed, at some point.

The headful mode, which we’re already familiar with, helps us to practically do that:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span><span class="pl-kos">,</span>
				<span class="pl-c1">slowMo</span>:
				<span class="pl-c1">200</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Browser operations</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/a43a27099aa3e1d2a3d6efc16203974f/raw/f375927eef5b2c327181123ee5da9a36b6db2a0e/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/a43a27099aa3e1d2a3d6efc16203974f#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Beyond that the browser is truly opened, we can notice now the operated instructions clearly - due to `slowMo` which slows down Puppeteer when performing each operation.

**2️⃣ - Debugging our application code in the browser**

In case we want to debug the application itself in the opened browser - it basically means to open the DevTools and start debugging as usual:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">devtools</span>:
				<span class="pl-c1">true</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Browser operations</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Holds the browser until we terminate the process
					explicitly</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">waitForTarget</span
				><span class="pl-kos">(</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
				<span class="pl-c1">false</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/2264841aaee50c8621536a8f39f81576/raw/48db94607e7bee4f8a4502632a6124003714254d/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/2264841aaee50c8621536a8f39f81576#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Notice that we use `devtools` which launches the browser in a headful mode by default and opens the DevTools automatically. On top of that, we utilize `waitForTarget` in order to hold the browser process until we terminate it **explicitly**.

Apparently - some of you may wonder if it’s possible to **sleep** the browser with a specified time period, so:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">devtools</span>:
				<span class="pl-c1">true</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Browser operations</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Option 1 - resolving a promise when `setTimeout`
					finishes</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-en">sleep</span> <span class="pl-c1">=</span>
				<span class="pl-s1">duration</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-k">new</span>
				<span class="pl-v">Promise</span><span class="pl-kos">(</span
				><span class="pl-s1">resolve</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-en">setTimeout</span
				><span class="pl-kos">(</span><span class="pl-s1">resolve</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">duration</span><span class="pl-kos">)</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-en">sleep</span
				><span class="pl-kos">(</span><span class="pl-c1">3000</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Option 2 - if we have a page instance, just using
					`waitFor`</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">waitFor</span
				><span class="pl-kos">(</span><span class="pl-c1">3000</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/7d52c5724b19ac0e28196ee0b9574aaa/raw/614177a65241a72699d06e332d1b9cd8af0c757b/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/7d52c5724b19ac0e28196ee0b9574aaa#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

The first approach is merely a function that resolves a promise when `setTimeout` finishes. The second approach, however, is much simpler but demands having a page instance (we’ll get to that later).

**3️⃣ - Debugging the process that uses Puppeteer**

As we know, Puppeteer is executed in a Node.js process - which is absolutely separated from the browser process. Hence, in this case, we should treat it as much as we debug a regular Node.js application.

Whether we connect to an [inspector client](https://nodejs.org/en/docs/guides/debugging-getting-started/#inspector-clients) or prefer using [ndb](https://nitayneeman.com/posts/debugging-nodejs-application-in-chrome-devtools-using-ndb/) - it’s all about placing the breakpoints right before Puppeteer’s operation. Adding them programmatically is possible either, simply by inserting the `debugger;` statement, obviously.

(adsbygoogle = window.adsbygoogle || \[\]).push({});

# Interacting Page

Now that Puppeteer is attached to a browser instance - which, as we already mentioned, represents our browser instance (Chromium, Firefox, whatever), allows us creating easily a page (or multiple pages):

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Creates a new page on the default browser context</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s1">page</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/9f082cbf5fa5bab43a6f0458369a057b/raw/58861f39825fe8c8a480e30ec77826431128fc00/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/9f082cbf5fa5bab43a6f0458369a057b#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

In the code example above we plainly create a new page by invoking the `newPage` method. Notice it’s created on the default browser context.

Basically, `Page` is a class that represents a single tab in the browser (or an [extension background](https://developer.chrome.com/extensions/background_pages)). As you guess, this class provides handy methods and events in order to interact with the page (such as selecting elements, retrieving information, waiting for elements, etc.).

Well, it’s about time to present a list of practical examples, as promised. To do this, we’re going to scrape data from [the official Puppeteer website](https://pptr.dev/) and operate it.🕵

## Navigating by URL

One of the earliest things is, intuitively, instructing the blank page to navigate to a specified URL:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Instructs the blank page to navigate a URL</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Fetches page's title</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">title</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">title</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`The title is:
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">title</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/c40b7dcb7752f961e2301bde52751ffd/raw/8275925b72ee8c844ef6399f44f9e7a78a7adc8d/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/c40b7dcb7752f961e2301bde52751ffd#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

We use `goto` to drive the created page to navigate Puppeteer’s website. Afterward, we just take the title of Page’s main frame, print it, and expect to get that as an output:

![Navigating by a URL and scraping the title](https://d33wubrfki0l68.cloudfront.net/a9ddcfd11c579a020459f942ee7a7ac41cf2fc93/63d90/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer.example.gif)

#### Navigating by a URL and scraping the title

As we notice, the title is unexpectedly missing. 🧐

This example shows us which there’s no guarantee that our page would render the selected element at the right moment, and if anything. To clarify - possible reasons could be that the page is loaded slowly, part of the page is lazy-loaded, or perhaps it’s navigated immediately to another page.

That’s exactly why Puppeteer provides methods to wait for stuff like [elements](https://pptr.dev/#?product=Puppeteer&show=api-pagewaitforselectorselector-options), [navigation](https://pptr.dev/#?product=Puppeteer&show=api-pagewaitfornavigationoptions), [functions](https://pptr.dev/#?product=Puppeteer&show=api-pagewaitforfunctionpagefunction-options-args), [requests](https://pptr.dev/#?product=Puppeteer&show=api-pagewaitforrequesturlorpredicate-options), [responses](https://pptr.dev/#?product=Puppeteer&show=api-pagewaitforresponseurlorpredicate-options) or simply a certain [predicate](https://pptr.dev/#?product=Puppeteer&show=api-pagewaitforselectororfunctionortimeout-options-args) - mainly to deal with an **asynchronous** flow.

Anyway, it turns out that Puppeteer’s website has an entry page, which immediately redirects us to the well-known website’s index page. The thing is, that entry page in question doesn’t render a `title` meta element:

![Evaluating the title meta element](https://d33wubrfki0l68.cloudfront.net/bee4443f4c56ef79a8a669da3a374b1f23339947/9ae10/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer2.example.gif)

#### Evaluating the title meta element

When navigating to Puppeteer’s website, the `title` element is evaluated as an empty string. However, a few moments later, the page is really navigated to the website’s index page and rendered with a title.

This means that the invoked `title` method is actually applied too early, on the entry page, instead of the website’s index page. Thus, the entry page is considered as the first main frame, and eventually its title, which is an empty string, is returned.

Let’s solve that case in a simple way:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Waits until the `title` meta element is rendered</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span><span class="pl-s">'title'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">title</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">title</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`The title is:
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">title</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/33efd11d066b17dcd42e6aebca06e65f/raw/4bea8738f0c48ec9a9f8da9dc00e7f8f47d8137e/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/33efd11d066b17dcd42e6aebca06e65f#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

All we do, is instructing Puppeteer to wait until the page renders a `title` meta element, which is achieved by invoking `waitForSelector`. This method basically waits until the selected element is rendered within the page.

In that way - we can easily deal with asynchronous rendering and ensure that elements are visible on the page.

## Emulating Devices

Puppeteer’s library provides tools for approximating how the page looks and behaves on various devices, which are pretty useful when testing a website’s responsiveness.

Let’s emulate a mobile device and navigate to the official website:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Emulates an iPhone X</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setUserAgent</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X)
					AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0
					Mobile/15A372 Safari/604.1'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setViewport</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">width</span>: <span class="pl-c1">375</span
				><span class="pl-kos">,</span>
				<span class="pl-c1">height</span>:
				<span class="pl-c1">812</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/c90a7fb97bd7cf25a9afda84e44086ac/raw/effd490b1c07cd528f4cb625a0a8a7c3ddb098c1/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/c90a7fb97bd7cf25a9afda84e44086ac#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

We choose to emulate an iPhone X - which means changing the user agent appropriately. Furthermore, we adjust the viewport size according to the display points that appear [here](https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Displays/Displays.html).

It’s easy to understand that `setUserAgent` defines a specific user agent for the page, whereas `setViewport` modifies the viewport definition of the page. In case of multiple pages, each one has its own user agent and viewport definition.

Here’s the result of the code example above:

![Emulating an iPhone X](https://d33wubrfki0l68.cloudfront.net/e3ece42c36997561f49f75036eaec5205b31a0d9/4736d/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer3.example.png)

#### Emulating an iPhone X

Indeed, the console panel shows us that the page is opened with the right user agent and viewport size.

The truth is that we don’t have to specify the iPhone X’s descriptions explicitly, because the library arrives with a built-in list of [device descriptors](https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js). On top of that, it provides a method called `emulate` which is practically a shortcut for invoking `setUserAgent` and `setViewport`, one after another.

Let’s use that:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">devices</span> <span class="pl-c1">=</span>
				<span class="pl-en">require</span><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer/DeviceDescriptors'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">emulate</span
				><span class="pl-kos">(</span><span class="pl-s1">devices</span
				><span class="pl-kos">[</span
				><span class="pl-s">'iPhone X'</span
				><span class="pl-kos">]</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/4d5aff2659bd6eb62446da749a8d49d1/raw/96bb2bfaa7e0ff535dfe148c15de7bee04de1c68/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/4d5aff2659bd6eb62446da749a8d49d1#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

It’s merely changed to pass the [boilerplate descriptor](https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js#L451) to `emulate` (instead of declaring that explicitly). Notice we import the descriptors out of `puppeteer/DeviceDescriptors`.

## Handling Events

The `Page` class supports emitting of various events by actually extending the Node.js’s `EventEmitter` object. This means we can use the [natively supported methods](https://nodejs.org/api/events.html#events_class_eventemitter) in order to handle these events - such as: `on`, `once`, `removeListener` and so on.

Here’s the list of the supported events:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when the DOM is parsed and ready (without
					waiting for resources)</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">once</span><span class="pl-kos">(</span
				><span class="pl-s">'domcontentloaded'</span
				><span class="pl-kos">,</span> <span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s">'✅ DOM is ready'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when the page is fully loaded</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">once</span><span class="pl-kos">(</span
				><span class="pl-s">'load'</span><span class="pl-kos">,</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s">'✅ Page is loaded'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when the page attaches a frame</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'frameattached'</span
				><span class="pl-kos">,</span> <span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s">'✅ Frame is attached'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when a frame within the page is navigated to a
					new URL</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'framenavigated'</span
				><span class="pl-kos">,</span> <span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s">'👉 Frame is navigated'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when a script within the page uses
					`console.timeStamp`</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'metrics'</span
				><span class="pl-kos">,</span> <span class="pl-s1">data</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`👉 Timestamp added at
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">data</span
						><span class="pl-kos">.</span
						><span class="pl-c1">metrics</span
						><span class="pl-kos">.</span
						><span class="pl-c1">Timestamp</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L21"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="21"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC21"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L22"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="22"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC22"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when a script within the page uses
					`console`</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L23"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="23"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC23"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'console'</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">message</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">[</span
				><span class="pl-s1">message</span><span class="pl-kos">.</span
				><span class="pl-en">type</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">]</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>`👉
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">message</span
						><span class="pl-kos">.</span
						><span class="pl-en">text</span
						><span class="pl-kos">(</span
						><span class="pl-kos">)</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L24"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="24"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC24"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L25"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="25"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC25"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when the page emits an error event (for example,
					the page crashes)</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L26"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="26"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC26"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'error'</span><span class="pl-kos">,</span>
				<span class="pl-s1">error</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">error</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`❌
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">error</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L27"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="27"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC27"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L28"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="28"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC28"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when a script within the page has uncaught
					exception</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L29"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="29"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC29"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'pageerror'</span
				><span class="pl-kos">,</span> <span class="pl-s1">error</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">error</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`❌
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">error</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L30"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="30"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC30"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L31"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="31"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC31"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when a script within the page uses `alert`,
					`prompt`, `confirm` or `beforeunload`</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L32"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="32"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC32"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'dialog'</span
				><span class="pl-kos">,</span> <span class="pl-k">async</span>
				<span class="pl-s1">dialog</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L33"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="33"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC33"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`👉
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">dialog</span
						><span class="pl-kos">.</span
						><span class="pl-en">message</span
						><span class="pl-kos">(</span
						><span class="pl-kos">)</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L34"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="34"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC34"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">dialog</span
				><span class="pl-kos">.</span><span class="pl-en">dismiss</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L35"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="35"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC35"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L36"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="36"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC36"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L37"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="37"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC37"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when a new page, that belongs to the browser
					context, is opened</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L38"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="38"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC38"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'popup'</span><span class="pl-kos">,</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s">'👉 New page is opened'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L39"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="39"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC39"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L40"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="40"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC40"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when the page produces a request</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L41"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="41"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC41"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'request'</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">request</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`👉 Request:
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">request</span
						><span class="pl-kos">.</span
						><span class="pl-en">url</span
						><span class="pl-kos">(</span
						><span class="pl-kos">)</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L42"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="42"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC42"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L43"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="43"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC43"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when a request, which is produced by the page,
					fails</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L44"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="44"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC44"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'requestfailed'</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">request</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`❌ Failed request:
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">request</span
						><span class="pl-kos">.</span
						><span class="pl-en">url</span
						><span class="pl-kos">(</span
						><span class="pl-kos">)</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L45"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="45"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC45"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L46"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="46"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC46"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when a request, which is produced by the page,
					finishes successfully</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L47"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="47"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC47"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'requestfinished'</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">request</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`👉 Finished request:
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">request</span
						><span class="pl-kos">.</span
						><span class="pl-en">url</span
						><span class="pl-kos">(</span
						><span class="pl-kos">)</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L48"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="48"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC48"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L49"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="49"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC49"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Emitted when a response is received</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L50"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="50"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC50"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'response'</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">response</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`👉 Response:
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">response</span
						><span class="pl-kos">.</span
						><span class="pl-en">url</span
						><span class="pl-kos">(</span
						><span class="pl-kos">)</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L51"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="51"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC51"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L52"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="52"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC52"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when the page creates a dedicated
					WebWorker</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L53"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="53"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC53"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'workercreated'</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">worker</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`👉 Worker:
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">worker</span
						><span class="pl-kos">.</span
						><span class="pl-en">url</span
						><span class="pl-kos">(</span
						><span class="pl-kos">)</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L54"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="54"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC54"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L55"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="55"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC55"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when the page destroys a dedicated
					WebWorker</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L56"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="56"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC56"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'workerdestroyed'</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">worker</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s"
					>`👉 Destroyed worker:
					<span class="pl-s1"
						><span class="pl-kos">${</span
						><span class="pl-s1">worker</span
						><span class="pl-kos">.</span
						><span class="pl-en">url</span
						><span class="pl-kos">(</span
						><span class="pl-kos">)</span
						><span class="pl-kos">}</span></span
					>`</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L57"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="57"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC57"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L58"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="58"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC58"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Emitted when the page detaches a frame</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L59"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="59"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC59"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">on</span><span class="pl-kos">(</span
				><span class="pl-s">'framedetached'</span
				><span class="pl-kos">,</span> <span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s">'✅ Frame is detached'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L60"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="60"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC60"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L61"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="61"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC61"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Emitted after the page is closed</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L62"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="62"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC62"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">once</span><span class="pl-kos">(</span
				><span class="pl-s">'close'</span><span class="pl-kos">,</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s">'✅ Page is closed'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L63"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="63"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC63"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L64"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="64"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC64"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L65"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="65"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC65"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L66"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="66"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC66"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L67"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="67"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC67"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/34f212f8727e27521f48b864e78b4771/raw/c80d0ac913c45d850c733fc91b3d3cedaeb3dfb7/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/34f212f8727e27521f48b864e78b4771#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

From looking at the list above - we clearly understand that the supported events include aspects of loading, frames, metrics, console, errors, requests, responses and even more!

Let’s simulate and trigger part of the events by adding this script:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Triggers `metrics` event</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">evaluate</span
				><span class="pl-kos">(</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">timeStamp</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Triggers `console` event</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">evaluate</span
				><span class="pl-kos">(</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s">'A console message within the page'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Triggers `dialog` event</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">evaluate</span
				><span class="pl-kos">(</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
				<span class="pl-en">alert</span><span class="pl-kos">(</span
				><span class="pl-s">'An alert within the page'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Triggers `error` event</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-en">emit</span><span class="pl-kos">(</span
				><span class="pl-s">'error'</span><span class="pl-kos">,</span>
				<span class="pl-k">new</span> <span class="pl-v">Error</span
				><span class="pl-kos">(</span
				><span class="pl-s">'An error within the page'</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Triggers `close` event</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">close</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/7546990595cb946c8a45dc44869814c8/raw/d25596321db0508ae0570ca1fb2f934d883391ed/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/7546990595cb946c8a45dc44869814c8#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

As we probably know, `evaluate` just executes the supplied script within the page context.

Though, the output is going to reflect the events we listen:

![Listening the page events](https://d33wubrfki0l68.cloudfront.net/34f535b0b1adec45010489abc0235da6180e110c/005f6/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer4.example.gif)

#### Listening the page events

In case you wonder - it’s possible to listen for **custom events** that are triggered in the page. Basically it means to define the event handler on page’s window using the `exposeFunction` method. Check out [this](https://github.com/GoogleChrome/puppeteer/blob/master/examples/custom-event.js) example to understand exactly how to implement it.

(adsbygoogle = window.adsbygoogle || \[\]).push({});

## Operating Mouse

In general, the mouse controls the motion of a pointer in two dimensions within a viewport. Unsurprisingly, Puppeteer represents the mouse by a class called `Mouse`.

Moreover, every `Page` instance has a `Mouse` - which allows performing operations such as changing its position and clicking within the viewport.

Let’s start with changing the mouse position:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setViewport</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">width</span>: <span class="pl-c1">1920</span
				><span class="pl-kos">,</span>
				<span class="pl-c1">height</span>:
				<span class="pl-c1">1080</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Waits until the API sidebar is rendered</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span
				><span class="pl-s">'sidebar-component'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Hovers the second link inside the API sidebar</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">mouse</span
				><span class="pl-kos">.</span><span class="pl-en">move</span
				><span class="pl-kos">(</span><span class="pl-c1">40</span
				><span class="pl-kos">,</span> <span class="pl-c1">150</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/c8460dd50235c93d3ceb57517980b068/raw/340198e092cf735d2e03ba602412e2a9948e4fa2/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/c8460dd50235c93d3ceb57517980b068#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

The scenario we simulate is moving the mouse over the second link of the left API sidebar. We set a viewport size and wait explicitly for the sidebar component to ensure it’s really rendered.

Then, we invoke `move` in order to position the mouse with appropriate coordinates, that actually represent the center of the second link.

This is the expected result:

![Hovering the second link](https://d33wubrfki0l68.cloudfront.net/590fda7859240dfbb59565fb182ad971d89611f2/f4a7d/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer5.example.png)

#### Hovering the second link

Although it’s hard to see, the second link is hovered as we planned.

The next step is simply clicking on the link by the respective coordinates:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setViewport</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">width</span>: <span class="pl-c1">1920</span
				><span class="pl-kos">,</span>
				<span class="pl-c1">height</span>:
				<span class="pl-c1">1080</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span
				><span class="pl-s">'sidebar-component'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Clicks the second link and triggers `mouseup` event
					after 1000ms</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">mouse</span
				><span class="pl-kos">.</span><span class="pl-en">click</span
				><span class="pl-kos">(</span><span class="pl-c1">40</span
				><span class="pl-kos">,</span> <span class="pl-c1">150</span
				><span class="pl-kos">,</span> <span class="pl-kos">{</span>
				<span class="pl-c1">delay</span>:
				<span class="pl-c1">1000</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/d15e2a83f245f778cf4a75aa94e4b576/raw/087201af0100e099338555d0e6501c3fae9deff0/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/d15e2a83f245f778cf4a75aa94e4b576#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Instead of changing the position explicitly, we just use `click` - which basically triggers `mousemove`, `mousedown` and `mouseup` events, one after another.

_**Note:** We delay the pressing in order to demonstrate how to modify the click behavior, nothing more. It’s worth pointing out that we can also control the mouse buttons (left, center, right) and the number of clicks._

Another nice thing is the ability to simulate a **drag and drop** behavior easily:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setViewport</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">width</span>: <span class="pl-c1">1920</span
				><span class="pl-kos">,</span>
				<span class="pl-c1">height</span>:
				<span class="pl-c1">1080</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span
				><span class="pl-s">'sidebar-component'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Drags the mouse from a point</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">mouse</span
				><span class="pl-kos">.</span><span class="pl-en">move</span
				><span class="pl-kos">(</span><span class="pl-c1">0</span
				><span class="pl-kos">,</span> <span class="pl-c1">0</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">mouse</span
				><span class="pl-kos">.</span><span class="pl-en">down</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Drops the mouse to another point</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">mouse</span
				><span class="pl-kos">.</span><span class="pl-en">move</span
				><span class="pl-kos">(</span><span class="pl-c1">100</span
				><span class="pl-kos">,</span> <span class="pl-c1">100</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">mouse</span
				><span class="pl-kos">.</span><span class="pl-en">up</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/d8cd4b051e7c419bbc959cc4267da286/raw/7206305357eea1e2630d285562550e35389d5ebd/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/d8cd4b051e7c419bbc959cc4267da286#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

All we do is using the `Mouse` methods for grabbing the mouse, from one position to another, and afterward releasing it.

## Operating Keyboard

The keyboard is another way to interact with the page, mostly for input purposes.

Similar to the mouse, Puppeteer represents the keyboard by a class called `Keyboard` - and every `Page` instance holds such an instance.

Let’s type some text within the search input:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setViewport</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">width</span>: <span class="pl-c1">1920</span
				><span class="pl-kos">,</span>
				<span class="pl-c1">height</span>:
				<span class="pl-c1">1080</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Waits until the toolbar is rendered</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span
				><span class="pl-s">'toolbar-component'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Focuses the search input</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">focus</span
				><span class="pl-kos">(</span
				><span class="pl-s">'[type="search"]'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Types the text into the focused element</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">keyboard</span
				><span class="pl-kos">.</span><span class="pl-en">type</span
				><span class="pl-kos">(</span
				><span class="pl-s">'Keyboard'</span
				><span class="pl-kos">,</span> <span class="pl-kos">{</span>
				<span class="pl-c1">delay</span>:
				<span class="pl-c1">100</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/6e67f7662d46c462adc174ebe76654e9/raw/d3748d2f7eece9ae9a78877e09a2d651ad1da481/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/6e67f7662d46c462adc174ebe76654e9#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Notice that we wait for the toolbar (instead of the API sidebar). Then, we focus the search input element and simply type a text into it.

On top of typing text, it’s obviously possible to trigger keyboard events:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">headless</span>:
				<span class="pl-c1">false</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setViewport</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">width</span>: <span class="pl-c1">1920</span
				><span class="pl-kos">,</span>
				<span class="pl-c1">height</span>:
				<span class="pl-c1">1080</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span
				><span class="pl-s">'toolbar-component'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">focus</span
				><span class="pl-kos">(</span
				><span class="pl-s">'[type="search"]'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">keyboard</span
				><span class="pl-kos">.</span><span class="pl-en">type</span
				><span class="pl-kos">(</span
				><span class="pl-s">'Keyboard'</span
				><span class="pl-kos">,</span> <span class="pl-kos">{</span>
				<span class="pl-c1">delay</span>:
				<span class="pl-c1">100</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Choosing the third result</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">keyboard</span
				><span class="pl-kos">.</span><span class="pl-en">press</span
				><span class="pl-kos">(</span
				><span class="pl-s">'ArrowDown'</span
				><span class="pl-kos">,</span> <span class="pl-kos">{</span>
				<span class="pl-c1">delay</span>:
				<span class="pl-c1">200</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">keyboard</span
				><span class="pl-kos">.</span><span class="pl-en">press</span
				><span class="pl-kos">(</span
				><span class="pl-s">'ArrowDown'</span
				><span class="pl-kos">,</span> <span class="pl-kos">{</span>
				<span class="pl-c1">delay</span>:
				<span class="pl-c1">200</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">keyboard</span
				><span class="pl-kos">.</span><span class="pl-en">press</span
				><span class="pl-kos">(</span><span class="pl-s">'Enter'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/4aa1c17b612ce08f6049735166fd36bb/raw/21b96047e629e1e3f2f530f3cb94563dc7221311/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/4aa1c17b612ce08f6049735166fd36bb#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Basically, we press `ArrowDown` twice and `Enter` in order to choose the third search result.

See that in action:

![Choosing a search result using the keyboard](https://d33wubrfki0l68.cloudfront.net/12f476512961c9ed6d32506b86dcb1cffc2100da/60d7f/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer6.example.gif)

#### Choosing a search result using the keyboard

By the way, it’s nice to know that there is a [list](https://github.com/GoogleChrome/puppeteer/blob/master/lib/USKeyboardLayout.js) of the key codes.

## Taking Screenshots

Taking screenshots through Puppeteer is a quite easy mission.

The API provides us a dedicated method for that:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setViewport</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">width</span>: <span class="pl-c1">1920</span
				><span class="pl-kos">,</span>
				<span class="pl-c1">height</span>:
				<span class="pl-c1">1080</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span><span class="pl-s">'title'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Takes a screenshot of the whole viewport</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">screenshot</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">path</span>:
				<span class="pl-s">'screenshot.png'</span>
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/d058aeb61e73d6d4d0c1b9580da90b68/raw/9f0b64e85523b5396d47b79c657ac91706acdbb3/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/d058aeb61e73d6d4d0c1b9580da90b68#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

As we see, the `screenshot` method makes all the charm - whereas we just have to insert a path for the output.

Moreover, it’s also possible to control the type, quality and even clipping the image:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setViewport</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">width</span>: <span class="pl-c1">1920</span
				><span class="pl-kos">,</span>
				<span class="pl-c1">height</span>:
				<span class="pl-c1">1080</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span><span class="pl-s">'title'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Takes a screenshot of an area within the page</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">screenshot</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">path</span>:
				<span class="pl-s">'screenshot.jpg'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">type</span>: <span class="pl-s">'jpeg'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">quality</span>: <span class="pl-c1">80</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">clip</span>: <span class="pl-kos">{</span>
				<span class="pl-c1">x</span>: <span class="pl-c1">220</span
				><span class="pl-kos">,</span> <span class="pl-c1">y</span>:
				<span class="pl-c1">0</span><span class="pl-kos">,</span>
				<span class="pl-c1">width</span>: <span class="pl-c1">630</span
				><span class="pl-kos">,</span>
				<span class="pl-c1">height</span>:
				<span class="pl-c1">360</span> <span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/8cff466fa9c094e0fb80a8ca18dc9371/raw/9e3e7d3997f7a99e195e1cec9107c21fdb66be05/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/8cff466fa9c094e0fb80a8ca18dc9371#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Here’s the output:

![Capturing an area within the page](https://d33wubrfki0l68.cloudfront.net/0130bb3e10ca459bf52270cb592e7247291f5124/b7e54/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer7.example.jpg)

#### Capturing an area within the page

## Generating PDF

Puppeteer is either useful for generating a PDF file from the page content.

Let’s demonstrate that:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Navigates to the project README file</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a
						class="vglnk"
						href="https://github.com/GoogleChrome/puppeteer/blob/master/README.md"
						rel="nofollow"
						><span>https</span><span>://</span><span>github</span
						><span>.</span><span>com</span><span>/</span
						><span>GoogleChrome</span><span>/</span
						><span>puppeteer</span><span>/</span><span>blob</span
						><span>/</span><span>master</span><span>/</span
						><span>README</span><span>.</span><span>md</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Generates a PDF from the page content</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">pdf</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">path</span>:
				<span class="pl-s">'overview.pdf'</span>
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/357b53391fe7afbdd4f4a2e9084fb31f/raw/756f6d680d6f0171586abc375bf5bd7dc2651e73/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/357b53391fe7afbdd4f4a2e9084fb31f#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Running the `pdf` method simply generates us the following file:

![Generating a PDF file from the content](https://d33wubrfki0l68.cloudfront.net/459fa3b18f9b1b40223039f4b82727a02600187b/9eaf7/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer8.example.gif)

#### Generating a PDF file from the content

## Faking Geolocation

Many websites customize their content based on the user’s geolocation.

Modifying the geolocation of a page is pretty obvious:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">{</span>
				<span class="pl-c1">devtools</span>:
				<span class="pl-c1">true</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Grants permission for changing geolocation</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">context</span> <span class="pl-c1">=</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">defaultBrowserContext</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">context</span><span class="pl-kos">.</span
				><span class="pl-en">overridePermissions</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">,</span> <span class="pl-kos">[</span
				><span class="pl-s">'geolocation'</span
				><span class="pl-kos">]</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span><span class="pl-s">'title'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Changes to the north pole's location</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">setGeolocation</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">latitude</span>:
				<span class="pl-c1">90</span><span class="pl-kos">,</span>
				<span class="pl-c1">longitude</span>:
				<span class="pl-c1">0</span> <span class="pl-kos">}</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/bb00805785011013d4117a8e59a4aa8a/raw/2353658e5b1db93860fc80a98a87cfb41610cc8a/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/bb00805785011013d4117a8e59a4aa8a#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

First, we grants the browser context the appropriate permissions. Then, we use `setGeolocation` to override the current geolocation with the coordinates of the north pole.

Here’s what we get when printing the location through `navigator`:

![Changing the geolocation of the page](https://d33wubrfki0l68.cloudfront.net/24b351dc0af93891b977a39e6d490eb612662455/f39dd/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer9.example.png)

#### Changing the geolocation of the page

## Accessibility

The [accessibility tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree) is a subset of the DOM that includes only elements with relevant information for assistive technologies such as screen readers, voice controls and so on. Having the accessibility tree means we can analyze and test the accessibility support in the page.

When it comes to Puppeteer, it enables to capture the current state of the tree:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span><span class="pl-s">'title'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Captures the current state of the accessibility
					tree</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">snapshot</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-c1">accessibility</span
				><span class="pl-kos">.</span><span class="pl-en">snapshot</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s1">snapshot</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/06e407d4e7f40fee2199dc02f8d2595c/raw/b2990a87e83bf0312aa3499d0264d5540b745870/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/06e407d4e7f40fee2199dc02f8d2595c#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

The snapshot doesn’t pretend to be the full tree, but rather including just the interesting nodes (those which are acceptable by most of the assistive technologies).

_**Note:** We can obtain the full tree through setting `interestingOnly` to false._

## Code Coverage

The code coverage feature was introduced officially as part of [Chrome v59](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) - and provides the ability to measure how much code is being used, compared to the code that is actually loaded. In this manner, we can reduce the dead code and eventually speed up the loading time of the pages.

With Puppeteer, we can manipulate the same feature programmatically:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Starts to gather coverage information for JS and CSS
					files</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-v">Promise</span
				><span class="pl-kos">.</span><span class="pl-en">all</span
				><span class="pl-kos">(</span><span class="pl-kos">[</span
				><span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-c1">coverage</span><span class="pl-kos">.</span
				><span class="pl-en">startJSCoverage</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">,</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">coverage</span
				><span class="pl-kos">.</span
				><span class="pl-en">startCSSCoverage</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">]</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span><span class="pl-s">'title'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Stops the coverage gathering</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-kos">[</span
				><span class="pl-s1">jsCoverage</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">cssCoverage</span
				><span class="pl-kos">]</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span> <span class="pl-v">Promise</span
				><span class="pl-kos">.</span><span class="pl-en">all</span
				><span class="pl-kos">(</span><span class="pl-kos">[</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-c1">coverage</span><span class="pl-kos">.</span
				><span class="pl-en">stopJSCoverage</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">page</span><span class="pl-kos">.</span
				><span class="pl-c1">coverage</span><span class="pl-kos">.</span
				><span class="pl-en">stopCSSCoverage</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">]</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Calculates how many bytes are being used based on the
					coverage</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-en">calculateUsedBytes</span>
				<span class="pl-c1">=</span> <span class="pl-kos">(</span
				><span class="pl-s1">type</span><span class="pl-kos">,</span>
				<span class="pl-s1">coverage</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L21"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="21"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC21"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">coverage</span><span class="pl-kos">.</span
				><span class="pl-en">map</span><span class="pl-kos">(</span
				><span class="pl-kos">(</span
				><span class="pl-kos">{</span> url<span class="pl-kos">,</span>
				ranges<span class="pl-kos">,</span> text
				<span class="pl-kos">}</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L22"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="22"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC22"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">let</span>
				<span class="pl-s1">usedBytes</span>
				<span class="pl-c1">=</span> <span class="pl-c1">0</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L23"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="23"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC23"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L24"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="24"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC24"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s1">ranges</span><span class="pl-kos">.</span
				><span class="pl-en">forEach</span><span class="pl-kos">(</span
				><span class="pl-s1">range</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">(</span
				><span class="pl-s1">usedBytes</span>
				<span class="pl-c1">+=</span> <span class="pl-s1">range</span
				><span class="pl-kos">.</span><span class="pl-c1">end</span>
				<span class="pl-c1">-</span> <span class="pl-s1">range</span
				><span class="pl-kos">.</span><span class="pl-c1">start</span>
				<span class="pl-c1">-</span> <span class="pl-c1">1</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L25"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="25"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC25"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L26"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="26"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC26"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">return</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L27"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="27"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC27"
				class="blob-code blob-code-inner js-file-line">
				url<span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L28"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="28"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC28"
				class="blob-code blob-code-inner js-file-line">
				type<span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L29"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="29"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC29"
				class="blob-code blob-code-inner js-file-line">
				usedBytes<span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L30"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="30"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC30"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">totalBytes</span>:
				<span class="pl-s1">text</span><span class="pl-kos">.</span
				><span class="pl-c1">length</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L31"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="31"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC31"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L32"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="32"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC32"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L33"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="33"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC33"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L34"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="34"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC34"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-kos">[</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L35"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="35"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC35"
				class="blob-code blob-code-inner js-file-line">
				...<span class="pl-en">calculateUsedBytes</span
				><span class="pl-kos">(</span><span class="pl-s">'js'</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">jsCoverage</span
				><span class="pl-kos">)</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L36"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="36"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC36"
				class="blob-code blob-code-inner js-file-line">
				...<span class="pl-en">calculateUsedBytes</span
				><span class="pl-kos">(</span><span class="pl-s">'css'</span
				><span class="pl-kos">,</span>
				<span class="pl-s1">cssCoverage</span
				><span class="pl-kos">)</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L37"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="37"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC37"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">]</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L38"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="38"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC38"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L39"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="39"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC39"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L40"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="40"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC40"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/acd0c653f5bf3dea1a0fd34ce1018099/raw/39310d05ec0b76f8e16a222a584eed59c4614cbc/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/acd0c653f5bf3dea1a0fd34ce1018099#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

We instruct Puppeteer to gather coverage information for JavaScript and CSS files, until the page is loaded. Thereafter, we define `calculateUsedBytes` which goes through a collected coverage data and calculates how many bytes are being used (based on the coverage). At last, we merely invoke the created function on both coverages.

Let’s look at the output:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">[</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">url</span>:
				<span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span><span>/</span></a
					>'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">type</span>: <span class="pl-s">'js'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">usedBytes</span>:
				<span class="pl-c1">149</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">totalBytes</span>:
				<span class="pl-c1">150</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">url</span>:
				<span class="pl-s"
					>'<a
						class="vglnk"
						href="https://www.googletagmanager.com/gtag/js?id=UA-106086244-2"
						rel="nofollow"
						><span>https</span><span>://</span><span>www</span
						><span>.</span><span>googletagmanager</span
						><span>.</span><span>com</span><span>/</span
						><span>gtag</span><span>/</span><span>js</span
						><span>?</span><span>id</span><span>=</span
						><span>UA</span><span>-</span><span>106086244</span
						><span>-</span><span>2</span></a
					>'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">type</span>: <span class="pl-s">'js'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">usedBytes</span>:
				<span class="pl-c1">21018</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">totalBytes</span>:
				<span class="pl-c1">66959</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">url</span>:
				<span class="pl-s"
					>'<a
						class="vglnk"
						href="https://pptr.dev/index.js"
						rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span><span>/</span
						><span>index</span><span>.</span><span>js</span></a
					>'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">type</span>: <span class="pl-s">'js'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">usedBytes</span>:
				<span class="pl-c1">108922</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">totalBytes</span>:
				<span class="pl-c1">141703</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L21"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="21"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC21"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">url</span>:
				<span class="pl-s"
					>'<a
						class="vglnk"
						href="https://www.google-analytics.com/analytics.js"
						rel="nofollow"
						><span>https</span><span>://</span><span>www</span
						><span>.</span><span>google</span><span>-</span
						><span>analytics</span><span>.</span><span>com</span
						><span>/</span><span>analytics</span><span>.</span
						><span>js</span></a
					>'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L22"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="22"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC22"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">type</span>: <span class="pl-s">'js'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L23"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="23"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC23"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">usedBytes</span>:
				<span class="pl-c1">19665</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L24"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="24"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC24"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">totalBytes</span>:
				<span class="pl-c1">44287</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L25"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="25"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC25"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L26"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="26"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC26"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L27"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="27"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC27"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">url</span>:
				<span class="pl-s"
					>'<a
						class="vglnk"
						href="https://pptr.dev/style.css"
						rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span><span>/</span
						><span>style</span><span>.</span><span>css</span></a
					>'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L28"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="28"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC28"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">type</span>: <span class="pl-s">'css'</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L29"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="29"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC29"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">usedBytes</span>:
				<span class="pl-c1">5135</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L30"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="30"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC30"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">totalBytes</span>:
				<span class="pl-c1">14326</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L31"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="31"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC31"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L32"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="32"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC32"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">]</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/48b9f0f7f26210667f3ae1fcc64d2950/raw/fb18fab9c267b2fa7a02d6158c081a7c6b107076/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/48b9f0f7f26210667f3ae1fcc64d2950#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

As expected, the output contains `usedBytes` and `totalBytes` for each file.

(adsbygoogle = window.adsbygoogle || \[\]).push({});

## Measuring Performance

One objective of measuring performance in terms of websites is to analyze how a page performs, during load and runtime - intending to make it faster.

Let’s see how we use Puppeteer to measure our page performance:

**1️⃣ - Analyzing load time through metrics**

[Navigation Timing](https://www.w3.org/TR/navigation-timing/) is a Web API that provides information and metrics relating to page navigation and load events, and accessible by `window.performance`.

In order to benefit from it, we should evaluate this API within the page context:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span><span class="pl-s">'title'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Executes Navigation API within the page context</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">metrics</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">evaluate</span
				><span class="pl-kos">(</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
				<span class="pl-c1">JSON</span><span class="pl-kos">.</span
				><span class="pl-en">stringify</span
				><span class="pl-kos">(</span><span class="pl-smi">window</span
				><span class="pl-kos">.</span
				><span class="pl-c1">performance</span
				><span class="pl-kos">)</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Parses the result to JSON</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-c1">JSON</span><span class="pl-kos">.</span
				><span class="pl-en">parse</span><span class="pl-kos">(</span
				><span class="pl-s1">metrics</span><span class="pl-kos">)</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/b75273777f14a37f8ec4c04a0a01f9ec/raw/b67e7c27c574c700f8c6cd48004ede9ab78216ad/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/b75273777f14a37f8ec4c04a0a01f9ec#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Notice that if `evaluate` receives a function which returns a non-serializable value - then `evaluate` returns eventually `undefined`. That’s exactly why we stringify `window.performance` when evaluating within the page context.

The result is transformed into a comfy object, which looks like the following:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">timeOrigin</span>:
				<span class="pl-c1">1562785571340.2559</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">timing</span>: <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">navigationStart</span>:
				<span class="pl-c1">1562785571340</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">unloadEventStart</span>:
				<span class="pl-c1">0</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">unloadEventEnd</span>:
				<span class="pl-c1">0</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">redirectStart</span>:
				<span class="pl-c1">0</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">redirectEnd</span>:
				<span class="pl-c1">0</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">fetchStart</span>:
				<span class="pl-c1">1562785571340</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">domainLookupStart</span>:
				<span class="pl-c1">1562785571347</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">domainLookupEnd</span>:
				<span class="pl-c1">1562785571348</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">connectStart</span>:
				<span class="pl-c1">1562785571348</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">connectEnd</span>:
				<span class="pl-c1">1562785571528</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">secureConnectionStart</span>:
				<span class="pl-c1">1562785571425</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">requestStart</span>:
				<span class="pl-c1">1562785571529</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">responseStart</span>:
				<span class="pl-c1">1562785571607</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">responseEnd</span>:
				<span class="pl-c1">1562785571608</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">domLoading</span>:
				<span class="pl-c1">1562785571615</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">domInteractive</span>:
				<span class="pl-c1">1562785571621</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">domContentLoadedEventStart</span>:
				<span class="pl-c1">1562785571918</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L21"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="21"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC21"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">domContentLoadedEventEnd</span>:
				<span class="pl-c1">1562785571926</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L22"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="22"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC22"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">domComplete</span>:
				<span class="pl-c1">1562785572538</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L23"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="23"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC23"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">loadEventStart</span>:
				<span class="pl-c1">1562785572538</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L24"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="24"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC24"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">loadEventEnd</span>:
				<span class="pl-c1">1562785572538</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L25"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="25"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC25"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L26"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="26"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC26"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">navigation</span>:
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L27"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="27"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC27"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">type</span>: <span class="pl-c1">0</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L28"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="28"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC28"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">redirectCount</span>:
				<span class="pl-c1">0</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L29"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="29"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC29"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L30"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="30"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC30"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/5b8967e8acdadcee36e774ea24187275/raw/c45a247887702a40b786301f75a5bef4a4e18e2e/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/5b8967e8acdadcee36e774ea24187275#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Now we can simply combine these metrics and calculate different load times over the loading timeline. For instance, `loadEventEnd - navigationStart` represents the time since the navigation started until the page is loaded.

_**Note:** All explanations about the different timings above are available [here](https://www.w3.org/TR/navigation-timing/#processing-model)._

**2️⃣ - Analyzing runtime through metrics**

As far as the runtime metrics, unlike load time, Puppeteer provides a neat API:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span><span class="pl-s">'title'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Returns runtime metrics of the page</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">metrics</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">metrics</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-smi">console</span><span class="pl-kos">.</span
				><span class="pl-en">info</span><span class="pl-kos">(</span
				><span class="pl-s1">metrics</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/2b2c92450d5f7a5a8ba177293df25282/raw/1f61619787fad887b131aa63a719d41529e59a99/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/2b2c92450d5f7a5a8ba177293df25282#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

We invoke the `metrics` method and get the following result:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">Timestamp</span>:
				<span class="pl-c1">6400.768827</span
				><span class="pl-kos">,</span>
				<span class="pl-c">// When the metrics were taken</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">Documents</span>:
				<span class="pl-c1">13</span><span class="pl-kos">,</span>
				<span class="pl-c">// Number of documents</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">Frames</span>: <span class="pl-c1">7</span
				><span class="pl-kos">,</span>
				<span class="pl-c">// Number of frames</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">JSEventListeners</span>:
				<span class="pl-c1">33</span><span class="pl-kos">,</span>
				<span class="pl-c">// Number of events</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">Nodes</span>:
				<span class="pl-c1">51926</span><span class="pl-kos">,</span>
				<span class="pl-c">// Number of DOM elements</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">LayoutCount</span>:
				<span class="pl-c1">6</span><span class="pl-kos">,</span>
				<span class="pl-c">// Number of page layouts</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">RecalcStyleCount</span>:
				<span class="pl-c1">13</span><span class="pl-kos">,</span>
				<span class="pl-c">// Number of page style recalculations</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">LayoutDuration</span>:
				<span class="pl-c1">0.545877</span><span class="pl-kos">,</span>
				<span class="pl-c">// Total duration of all page layouts</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">RecalcStyleDuration</span>:
				<span class="pl-c1">0.011856</span><span class="pl-kos">,</span>
				<span class="pl-c"
					>// Total duration of all page style recalculations</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">ScriptDuration</span>:
				<span class="pl-c1">0.064591</span><span class="pl-kos">,</span>
				<span class="pl-c"
					>// Total duration of JavaScript executions</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">TaskDuration</span>:
				<span class="pl-c1">1.244381</span><span class="pl-kos">,</span>
				<span class="pl-c"
					>// Total duration of all performed tasks by the
					browser</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">JSHeapUsedSize</span>:
				<span class="pl-c1">17158776</span><span class="pl-kos">,</span>
				<span class="pl-c">// Actual memory usage by JavaScript</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c1">JSHeapTotalSize</span>:
				<span class="pl-c1">33492992</span>
				<span class="pl-c"
					>// Total memory usage, including free allocated space, by
					JavaScript</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/10f3528f9f549d68627196e1ba9012a5/raw/92fc2f0f56a5ecd18cf3a01ceda0d090b5b8e175/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/10f3528f9f549d68627196e1ba9012a5#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

The interesting metric above is apparently `JSHeapUsedSize` which represents, in other words, the actual memory usage of the page. Notice that the result is actually the output of `Performance.getMetrics`, which is part of [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/tot/Performance#method-getMetrics).

**3️⃣ - Analyzing browser activities through tracing**

[Chromium Tracing](http://www.chromium.org/developers/how-tos/trace-event-profiling-tool) is a profiling tool that allows recording what the browser is really doing under the hood - with an emphasis on every thread, tab, and process. And yet, it’s reflected in Chrome DevTools as part of the [Timeline](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool) panel.

Furthermore, this tracing ability is possible with Puppeteer either - which, as we might guess, practically uses the [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/tot/Tracing).

For example, let’s record the browser activities during navigation:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">puppeteer</span>
				<span class="pl-c1">=</span> <span class="pl-en">require</span
				><span class="pl-kos">(</span
				><span class="pl-s">'puppeteer'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">(</span><span class="pl-k">async</span>
				<span class="pl-kos">(</span><span class="pl-kos">)</span>
				<span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span>
				<span class="pl-s1">browser</span> <span class="pl-c1">=</span>
				<span class="pl-k">await</span>
				<span class="pl-s1">puppeteer</span><span class="pl-kos">.</span
				><span class="pl-en">launch</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">const</span> <span class="pl-s1">page</span>
				<span class="pl-c1">=</span> <span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">newPage</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c"
					>// Starts to record a trace of the operations</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">tracing</span
				><span class="pl-kos">.</span><span class="pl-en">start</span
				><span class="pl-kos">(</span><span class="pl-kos">{</span>
				<span class="pl-c1">path</span>:
				<span class="pl-s">'trace.json'</span>
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-en">goto</span
				><span class="pl-kos">(</span
				><span class="pl-s"
					>'<a class="vglnk" href="https://pptr.dev/" rel="nofollow"
						><span>https</span><span>://</span><span>pptr</span
						><span>.</span><span>dev</span></a
					>'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span
				><span class="pl-en">waitForSelector</span
				><span class="pl-kos">(</span><span class="pl-s">'title'</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// Stops the recording</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span> <span class="pl-s1">page</span
				><span class="pl-kos">.</span><span class="pl-c1">tracing</span
				><span class="pl-kos">.</span><span class="pl-en">stop</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line"></td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-k">await</span>
				<span class="pl-s1">browser</span><span class="pl-kos">.</span
				><span class="pl-en">close</span><span class="pl-kos">(</span
				><span class="pl-kos">)</span><span class="pl-kos">;</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">)</span
				><span class="pl-kos">(</span><span class="pl-kos">)</span
				><span class="pl-kos">;</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/a7aa5b461498da58790c8b8b0ea1e54e/raw/9debaf32517582cd8a9cd59b54271169662e15c1/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/a7aa5b461498da58790c8b8b0ea1e54e#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

When the recording is stopped, a file called `trace.json` is created and contains the output that looks like:

```html
<table
	data-hpc=""
	class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file"
	data-tab-size="8"
	data-paste-markdown-skip=""
	data-tagsearch-lang="JavaScript"
	data-tagsearch-path="getting-to-know-puppeteer.example.js">
	<tbody>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L1"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="1"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC1"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L2"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="2"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC2"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"traceEvents"</span>:<span class="pl-kos"
					>[</span
				>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L3"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="3"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC3"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L4"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="4"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC4"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"pid"</span>: <span class="pl-c1">21975</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L5"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="5"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC5"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"tid"</span>: <span class="pl-c1">38147</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L6"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="6"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC6"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"ts"</span>:
				<span class="pl-c1">17376402124</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L7"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="7"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC7"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"ph"</span>: <span class="pl-s">"X"</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L8"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="8"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC8"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"cat"</span>:
				<span class="pl-s">"toplevel"</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L9"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="9"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC9"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"name"</span>:
				<span class="pl-s">"MessageLoop::RunTask"</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L10"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="10"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC10"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"args"</span>: <span class="pl-kos">{</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L11"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="11"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC11"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"src_file"</span>:
				<span class="pl-s"
					>"../../mojo/public/cpp/system/simple_watcher.cc"</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L12"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="12"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC12"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"src_func"</span>:
				<span class="pl-s">"Notify"</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L13"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="13"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC13"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L14"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="14"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC14"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"dur"</span>: <span class="pl-c1">68</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L15"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="15"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC15"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"tdur"</span>: <span class="pl-c1">56</span
				><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L16"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="16"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC16"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-s">"tts"</span>:
				<span class="pl-c1">26330</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L17"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="17"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC17"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span><span class="pl-kos">,</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L18"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="18"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC18"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-c">// More trace events</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L19"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="19"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC19"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">]</span>
			</td>
		</tr>
		<tr>
			<td
				id="file-getting-to-know-puppeteer-example-js-L20"
				class="blob-num js-line-number js-code-nav-line-number js-blob-rnum"
				data-line-number="20"></td>
			<td
				id="file-getting-to-know-puppeteer-example-js-LC20"
				class="blob-code blob-code-inner js-file-line">
				<span class="pl-kos">}</span>
			</td>
		</tr>
	</tbody>
</table>
```

[view raw](https://gist.github.com/nitayneeman/05b903701d236406d98537ddb08d86e3/raw/cad5414233d571ae9e14d2bcff0d5c260b3ad489/getting-to-know-puppeteer.example.js) [getting-to-know-puppeteer.example.js](https://gist.github.com/nitayneeman/05b903701d236406d98537ddb08d86e3#file-getting-to-know-puppeteer-example-js) hosted with ❤ by [GitHub](https://github.com/)

Now that we’ve the trace file, we can open it using Chrome DevTools, [chrome://tracing](chrome://tracing/) or [Timeline Viewer](https://chromedevtools.github.io/timeline-viewer/).

Here’s the Performance panel after importing the trace file into the DevTools:

![Importing a trace file](https://d33wubrfki0l68.cloudfront.net/e5fee1863ff460eb709686601c2c2d4b723a073f/567c5/images/posts/2019-03-16-getting-to-know-puppeteer-using-practical-examples/getting-to-know-puppeteer11.example.png)

#### Importing a trace file

# Summary

We introduced today the Puppeteer’s API through concrete examples.

Let’s recap the main points:

-   Puppeteer is a Node.js library for automating, testing and scraping web pages on top of the Chrome DevTools Protocol.
-   Puppeteer’s ecosystem provides a lightweight package, `puppeteer-core`, which is a library for browser automation - that interacts with any browser, which is based on DevTools protocol, without installing Chromium.
-   Puppeteer’s ecosystem provides a package, which is actually the full product, that installs Chromium in addition to the browser automation library.
-   Puppeteer provides the ability to launch a Chromium browser instance or just connect an existing instance.
-   Puppeteer’s ecosystem provides an experimental package, `puppeteer-firefox`, that interacts with Firefox.
-   The browser context allows separating different sessions for a single browser instance.
-   Puppeteer launches the browser in a headless mode by default, which merely uses the command line. Also - a headful mode, for opening the browser with a GUI, is supported either.
-   Puppeteer provides several ways to debug our application in the browser, whereas, debugging the process that executes Puppeteer is obviously the same as debugging a regular Node.js process.
-   Puppeteer allows navigating to a page by a URL and operating the page through the mouse and keyboard.
-   Puppeteer allows examining a page’s visibility, behavior and responsiveness on various devices.
-   Puppeteer allows taking screenshots of the page and generating PDFs from the content, easily.
-   Puppeteer allows analyzing and testing the accessibility support in the page.
-   Puppeteer allows speeding up the page performance by providing information about the dead code, handy metrics and manually tracing ability.

And finally, Puppeteer is a powerful browser automation tool with a pretty simple API. A decent number of capabilities are supported, including such we haven’t covered at all - and that’s why your next step could definitely be [the official documentation](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md). 😉

Here’s attached the final [project](https://github.com/nitayneeman/puppeteer-examples):

# VS Code Snippets

Well, if you wish to get some useful code snippets of Puppeteer API for Visual Studio Code - then the following extension might interest you:

![Using the snippets to generate a bsic Puppeteer script](https://github.com/nitayneeman/vscode-puppeteer-snippets/blob/master/images/preview.gif?raw=true)

#### Using the snippets to generate a basic Puppeteer script

You’re welcome to take a look at [the extension page](https://marketplace.visualstudio.com/items?itemName=nitayneeman.puppeteer-snippets).

✉️ Subscription

Only new content, no spam.

If you like this information and find it interesting or useful - share it 👉
