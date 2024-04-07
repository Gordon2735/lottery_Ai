### QUESTION || Bing Search Ai Response:

-   Web Scraping with Puppeteer and Querying multiple elements is a powerful combination. Let’s dive into some TypeScript examples.

# Web Scraping with Puppeteer Extra, TypeScript, & AWS Lambda:

-   This guide walks through building and deploying robust web scrapers using the following tools:
    [] TypeScript: TypeScript is preferred over JavaScript for its readability and maintainability.
    [] Puppeteer Extra: An extended version of Puppeteer with additional plugins.
    [] AWS Lambda: Ideal for one-offs and quick deployment.
    [] Serverless: Used for deployment.
    [] AWS CodeBuild: Replaces running memory-intensive Docker locally.
    [] AWS Elastic Container Registry (ECR): For container image storage.
    [] GitHub: Version control.
    [] Proxy services from oxylabs.io: Useful for rotating IP addresses when blocked.

-   The scraping continuum ranges from simple methods (like Python requests or JavaScript fetch) to more complex ones using Puppeteer. In this guide, we’ll explore the advanced approach with Puppeteer Extra and proxy services1.

## **Querying Multiple Elements Example**:

-   Suppose you want to scrape a list of GitHub repositories. Here’s how you can extract relevant information using Puppeteer:

**TypeScript**

```typescript
const repos = await page.$$eval('article.border', (repoCards) => {
	return repoCards.map((card) => {
		const [user, repo] = card.querySelectorAll('h3 a');
		const stars = card
			.querySelector('#repo-stars-counter-star')
			.getAttribute('title');
		const description = card.querySelector('div.px-3 > p');
		const topics = card.querySelectorAll('a.topic-tag');

		const toText = (element) => element && element.innerText.trim();
		const parseNumber = (text) => Number(text.replace(/,/g, ''));

		return {
			user: toText(user),
			repo: toText(repo),
			url: repo.href,
			stars: parseNumber(stars),
			description: toText(description),
			topics: Array.from(topics).map((t) => toText(t))
		};
	});
});
```

**AI-generated code. Review and use carefully. More info on FAQ.**

-   In this example, we’re querying multiple elements within each repository card:
    [] User and repo names.
    [] Star count.
    [] Description.
    [] Topics/tags.

-   Remember to adjust the selectors according to the specific website you’re scraping. TypeScript provides strong typing and makes your code more maintainable. Happy scraping! 🚀🔍🌐

-   For more details, you can refer to the full guide on Medium1 and the Apify Blog2.

Learn more
1

medium.com
2

blog.apify.com
3

stackoverflow.com
4

forloop.ai
+1 **more**
