# Fetch API

**Note:** This feature is available in [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

## [Concepts and usage](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#concepts_and_usage)

The Fetch API uses [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.

For making a request and fetching a resource, use the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method. It is a global method in both [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) and [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope "Worker") contexts. This makes it available in pretty much any context you might want to fetch resources in.

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to that request — as soon as the server responds with headers — **even if the server response is an HTTP error status**. You can also optionally pass in an `init` options object as the second argument (see [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)).

Once a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) is retrieved, there are a number of methods available to define what the body content is and how it should be handled.

You can create a request and response directly using the [`Request()`](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request "Request()") and [`Response()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response "Response()") constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions (for example, [`FetchEvent.respondWith()`](https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith) from service workers).

Find out more about using the Fetch API features in [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), and study concepts in [Fetch basic concepts](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Basic_concepts).

## [Fetch Interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#fetch_interfaces)

[`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

The `fetch()` method used to fetch a resource.

[`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers)

Represents response/request headers, allowing you to query them and take different actions depending on the results.

[`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)

Represents a resource request.

[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)

Represents the response to a request.

## [Specifications](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#specifications)

| Specification                                                 |
| ------------------------------------------------------------- |
| [Fetch Standard                                               |
| \# fetch-method](https://fetch.spec.whatwg.org/#fetch-method) |

## [Browser compati](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#browser_compatibility)