# How to Use Observables with Vanilla JavaScript

Updated: Dec 24, 2023

Rated 0 out of 5 stars.No ratings yet

```css
.post-content\_\_body {
	--ricos-text-color: #000000;
	--ricos-text-color-tuple: 0, 0, 0;
	--ricos-action-color: #996e00;
	--ricos-action-color-tuple: 153, 110, 0;
	--ricos-background-color: #ffffff;
	--ricos-background-color-tuple: 255, 255, 255;
	--ricos-fallback-color: #000000;
	--ricos-fallback-color-tuple: 0, 0, 0;
	--ricos-action-color-fallback: #996e00;
	--ricos-action-color-fallback-tuple: 153, 110, 0;
	--ricos-custom-p-font-weight: normal;
	--ricos-custom-p-font-style: normal;
	--ricos-custom-p-line-height: 1.5;
	--ricos-custom-p-font-size: 18px;
	--ricos-custom-p-font-family: proxima-n-w01-reg, proxima-n-w05-reg,
		sans-serif;
	--ricos-custom-p-text-decoration: none;
	--ricos-custom-p-color: rgba(0, 0, 0, 1);
	--ricos-custom-h1-font-weight: normal;
	--ricos-custom-h1-font-style: normal;
	--ricos-custom-h1-line-height: 1.5;
	--ricos-custom-h1-font-size: 40px;
	--ricos-custom-h1-font-family: space grotesk, sans-serif;
	--ricos-custom-h1-color: rgba(0, 0, 0, 1);
	--ricos-custom-h2-font-weight: normal;
	--ricos-custom-h2-font-style: normal;
	--ricos-custom-h2-line-height: 1.5;
	--ricos-custom-h2-font-size: 28px;
	--ricos-custom-h2-font-family: space grotesk, sans-serif;
	--ricos-custom-h2-color: rgba(0, 0, 0, 1);
	--ricos-custom-h3-font-weight: normal;
	--ricos-custom-h3-font-style: normal;
	--ricos-custom-h3-line-height: 1.5;
	--ricos-custom-h3-font-size: 22px;
	--ricos-custom-h3-font-family: space grotesk, sans-serif;
	--ricos-custom-h3-color: rgba(0, 0, 0, 1);
	--ricos-custom-h4-font-weight: normal;
	--ricos-custom-h4-font-style: normal;
	--ricos-custom-h4-line-height: 1.5;
	--ricos-custom-h4-font-size: 20px;
	--ricos-custom-h4-font-family: space grotesk, sans-serif;
	--ricos-custom-h4-color: rgba(0, 0, 0, 1);
	--ricos-custom-h5-font-weight: normal;
	--ricos-custom-h5-font-style: normal;
	--ricos-custom-h5-line-height: 1.5;
	--ricos-custom-h5-font-size: 18px;
	--ricos-custom-h5-font-family: space grotesk, sans-serif;
	--ricos-custom-h5-color: rgba(0, 0, 0, 1);
	--ricos-custom-h6-font-weight: normal;
	--ricos-custom-h6-font-style: normal;
	--ricos-custom-h6-line-height: 1.5;
	--ricos-custom-h6-font-size: 16px;
	--ricos-custom-h6-font-family: space grotesk, sans-serif;
	--ricos-custom-h6-color: rgba(0, 0, 0, 1);
	--ricos-custom-link-line-height: 1.5;
	--ricos-custom-link-text-decoration: inherit;
	--ricos-custom-link-color: rgba(153, 110, 0, 1);
	--ricos-custom-link-font-style: inherit;
	--ricos-custom-link-font-weight: inherit;
	--ricos-custom-hashtag-line-height: 1.5;
	--ricos-custom-hashtag-text-decoration: inherit;
	--ricos-custom-hashtag-color: rgba(153, 110, 0, 1);
	--ricos-custom-hashtag-font-style: inherit;
	--ricos-custom-hashtag-font-weight: inherit;
	--ricos-custom-quote-font-size: 24px;
	--ricos-custom-quote-line-height: 1.5;
	--ricos-custom-quote-font-family: proxima-n-w01-reg, proxima-n-w05-reg,
		sans-serif;
	--ricos-custom-quote-color: rgba(0, 0, 0, 1);
	--ricos-custom-quote-border-color: rgb(153, 110, 0);
	--ricos-custom-quote-margin-inline-start: var(
		--ricosQuoteMarginInlineStart
	);
	--ricos-custom-footer-toolbar-padding-start: var(--ricosFooterPadding);
	--ricos-custom-footer-toolbar-padding-end: var(--ricosFooterPadding);
	--ricos-custom-editor-add-plugin-button-position-inline-start: var(
		--ricosAddPluginButtonStart
	);
	--ricos-breakout-normal-padding-start: var(--ricosNormalPadding);
	--ricos-breakout-normal-padding-end: var(--ricosNormalPadding);
	--ricos-breakout-full-width-padding-start: var(--ricosFullWidthPadding);
	--ricos-breakout-full-width-padding-end: var(--ricosFullWidthPadding);
}
\* {
}
```

### No frameworks used, just pure vanilla JavaScript.

![How to Use Observables and Subjects with Vanilla JavaScript (JS) without any frameworks or libraries. Best Practice Code Coding Programming Software Development Architecture Engineering](https://static.wixstatic.com/media/488a99_6d8f046af0b24f108e70a577a706fade~mv2.png/v1/fill/w_666,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/488a99_6d8f046af0b24f108e70a577a706fade~mv2.png)

While working on a side project just for fun, I wanted to write a JavaScript script to call a REST API and eventually do some cool stuff on a webpage. It is purely vanilla JavaScript, with no fancy frameworks or even libraries being used.

First, I thought of using Promises for my calls and this was easy for me. I have done that a ton of times. However, it then hit me hard — why don’t I use Observables? I knew that vanilla JavaScript didn’t natively support Observables. But couldn’t I implement it myself? And that’s what I did.

This is how I thought things through

1. The Observable itself would be of a new object type called Subject.
2. This Subject object should expose the subscribe and next functions.
3. subscribe should be called by observers to subscribe to the observable stream of data.
4. next should be called by the Subject owner to push/publish new data whenever available.
5. Additionally, I wanted the Subject owner to be able to know whenever no observers were interested in its data. This would enable the Subject owner to decide if he still wanted to get the data or not.
6. Also, the Subject owner should be able to know whenever at least one observer started being interested in its data. This would give the Subject owner more control on its data flow and any related operations.
7. Now back to the observer. He should be able to unsubscribe from the Subject at any time.
8. This leads us to a new object type called Subscription.
9. This Subscription object should expose an unsubscribe function.
10. unsubscribe should be called by the observer whenever he wants to stop listening to the data stream coming from the Subject.

Following these rules, I came up with the following implementation.

## Implementation

### Subscription

```javascript
let Subscription = function (handlerId, unsubscribeNotificationCallback) {
	let self = this;

	self.unsubscribe = () => {
		if (unsubscribeNotificationCallback) {
			unsubscribeNotificationCallback(handlerId);
		}
	};

	return self;
};
```

Note that Subscription just notifies the Subject when the unsubscribe function is called.

### Subject

```javascript
let Subscription = function (handlerId, unsubscribeNotificationCallback) {
	let self = this;

	self.unsubscribe = () => {
		if (unsubscribeNotificationCallback) {
			unsubscribeNotificationCallback(handlerId);
		}
	};

	return self;
};
```

### Somewhere in the Subject Owner

```javascript

.
.
.
let subscribersStateChangeNotificationCallback = (subscriberFound) => {
	if(!subscriberFound && isNowWatching) {
		stopWatching();
		isNowWatching = false;
	} else if(subscriberFound && !isNowWatching) {
		startWatching();
	}
};

self.data = new Subject(subscribersStateChangeNotificationCallback);
.
.
.
self.data.next(self.snapshot.data);
.
```

### Somewhere in the Observer

```javascript
.
.
.
const dashboardServiceSubscription = myDashboardService.data.subscribe((data) => {
	...
});
.
.
.
dashboardServiceSubscription.unsubscribe();
.

```

That’s it, everything worked like a charm and I was proud of what I achieved.

So, the punch line is that coding in vanilla JavaScript is not always equal to writing boring code, you can make it much more fun 😃
