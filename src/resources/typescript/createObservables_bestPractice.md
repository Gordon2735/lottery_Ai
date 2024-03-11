-   ![Writer's picture](https://images-wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/488a9981-7043-48af-af03-baaa1dc76438/1673161886205-04.jpg/v1/fill/w_320,h_320/file.jpg)Ahmed Tarek

-   -   Nov 14, 2021

        -   4 min read

# The Right Way to Create Observable Subjects in JavaScript

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

### A best practice on how to define your Subjects in JavaScript objects.

![The Right Way to Create Observable Subjects in JavaScript. A best practice on how to define your Observable Subjects in JavaScript objects. JavaScript JS Promise Async Await. Best Practice Code Coding Programming Software Development Architecture Engineering](https://static.wixstatic.com/media/488a99_ecd4e9dd21ac40c593f9ea817ab36366~mv2.png/v1/fill/w_666,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/488a99_ecd4e9dd21ac40c593f9ea817ab36366~mv2.png)

Photo by Robert Ruggiero on Unsplash

While working on your cool JavaScript project, you might need to implement a service which manages a stream of data. In this case, the first thing pops up into your mind is using Observables or Subjects.

You can do this using libraries like Rxjs or you can even implement it yourself as I showed you before on my article [How to Use Observables with Vanilla JavaScript. No frameworks used, just pure vanilla JavaScript](https://www.developmentsimplyput.com/post/how-to-use-observables-with-vanilla-javascript).

Either ways, at the end you would need to wrap a Subject inside your service object. However, there are more than one way to do it.

In this article, we would get introduced to a Best Practice on how to implement this.

![The Right Way to Create Observable Subjects in JavaScript. A best practice on how to define your Observable Subjects in JavaScript objects. JavaScript JS Promise Async Await. Best Practice Code Coding Programming Software Development Architecture Engineering](https://static.wixstatic.com/media/488a99_fdab69f6aa9b4c558155aefbe16d220d~mv2.png/v1/fill/w_666,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/488a99_fdab69f6aa9b4c558155aefbe16d220d~mv2.png)

Photo by Chris Ried on Unsplash

## Time for Code

Let’s come up with a simple example. In our solution, we have an Authentication Service which handles logging in, logging out, getting current logged in user,….

We also have Some Module which does some interesting stuff and needs to know about the logged in user at some point.

We will implement this solution in simple steps and see where it goes.

![The Right Way to Create Observable Subjects in JavaScript. A best practice on how to define your Observable Subjects in JavaScript objects. JavaScript JS Promise Async Await. Best Practice Code Coding Programming Software Development Architecture Engineering](https://static.wixstatic.com/media/488a99_e7817af199f34b4c9c16d5aad7ac3e0e~mv2.png/v1/fill/w_666,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/488a99_e7817af199f34b4c9c16d5aad7ac3e0e~mv2.png)

Photo by Lindsay Henwood on Unsplash

In our solution, I would use my own implementation of the Subscription and Subject objects as I explained on [my other article](https://www.developmentsimplyput.com/post/how-to-use-observables-with-vanilla-javascript).

Therefore, just for brevity, I will include the code here as a quick reference.

```typescript

const Subscription = function(handlerId, unsubscribeNotificationCallback) {
const self = this;

    self.unsubscribe = () => {
        if (unsubscribeNotificationCallback) {
            unsubscribeNotificationCallback(handlerId);
        }
    };

    return self;

};

const Subject = function(subscribersStateChangeNotificationCallback) {
const self = this;

    let handlers = {};

    Object.defineProperty(self, "subscribersFound", {
        get() {
            let found = false;

            for (const prop in handlers) {
                if (handlers.hasOwnProperty(prop)) {
                    found = true;
                    break;
                }
            }

            return found;
        }
    });

    Object.defineProperty(self, "subscribersCount", {
        get() {
            let count = 0;

            for (const prop in handlers) {
                if (handlers.hasOwnProperty(prop)) {
                    count++;
                }
            }

            return count;
        }
    });

    let unsubscribeNotificationCallback = (handlerId) => {
        if (handlerId && handlerId !== '' && handlers.hasOwnProperty(handlerId)) {
            delete handlers\[handlerId\];

            if (subscribersStateChangeNotificationCallback && !self.subscribersFound) {
                subscribersStateChangeNotificationCallback(false);
            }
        }
    };

    let createGuid = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/\[xy\]/g, function(c) {
            var r = Math.random() \* 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    self.subscribe = (handler) => {
        let handlerId = createGuid();
        handlers\[handlerId\] = handler;

        if (subscribersStateChangeNotificationCallback && self.subscribersCount === 1) {
            subscribersStateChangeNotificationCallback(true);
        }

        return new Subscription(handlerId, unsubscribeNotificationCallback);
    };

    self.next = (data) => {
        for (const handlerId in handlers) {
            handlers\[handlerId\](data);
        }
    };

    return self;

};
```

### Authentication Service

```typescript
const AuthenticationService = function () {
	const self = this;

	self.loggedInUser = new Subject();

	self.logIn = function (username, password) {
		// log in, get some user details (username, age,....), and update loggedInUser

		let user = {
			username: username,
			age: age
		};

		self.loggedInUser.next(user);
	};

	return self;
};
```

This is what we can notice here:

1. Inside the AuthenticationService, we have a loggedInUser which is a Subject.
2. Using this loggedInUser, other modules can subscribe to the stream of changes applied on the logged in user.
3. We also have logIn function which does some API calls and finally sets the logged in user and trigger the loggedInUser Subject.

### Initializing the Authentication Service

Somewhere in the main application, it is as simple as that.

const authenticationService = new AuthenticationService();

### Some Module

```typescript
const SomeModule = function () {
	const self = this;

	let loggedInUser = null;

	const subscription = authenticationService.loggedInUser.subscribe(
		(user) => {
			loggedInUser = user;
		}
	);

	self.DoSomeStuff = function () {
		// need to know the logged in user
		console.log(self.loggedInUser);
	};

	console.log(self.loggedInUser); // self.loggedInUser would be null

	return self;
};
```

This is what we can notice here:

1. The module subscribes to the authenticationService.loggedInUser Subject to get updates about the logged in user.
2. Whenever an update happens, a local variable called loggedInUser would be set.
3. On the DoSomeStuff function, we log the value of the local variable loggedInUser which should be in sync with the latest updates on the AuthenticationService… or not?
4. Actually, not. The problem is that by the time we are creating an instance of the SomeModule, the AuthenticationService would already be created and initialized.
5. This means that on line number 15 in the code above, the local loggedInUser variable would still be null because up to that moment it was never set to another value.

![The Right Way to Create Observable Subjects in JavaScript. A best practice on how to define your Observable Subjects in JavaScript objects. JavaScript JS Promise Async Await. Best Practice Code Coding Programming Software Development Architecture Engineering](https://static.wixstatic.com/media/488a99_897364553af340d5bb29045ed05cfd2f~mv2.png/v1/fill/w_666,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/488a99_897364553af340d5bb29045ed05cfd2f~mv2.png)

Photo by Markus Spiske on Unsplash

## The Right Way to Do It

It is not that complicated actually. There is a pattern used in this kind of cases and I am sure you had seen it before. It is even applied in different client-side Frameworks.

Enough talking, let’s see some code.

#### Enhanced Authentication Service

```typescript
const AuthenticationService = function () {
	const self = this;

	self.snapshot = {
		loggedInUser: null
	};

	self.loggedInUser = new Subject();

	self.logIn = function (username, password) {
		// log in, get some user details (username, age,....), and update loggedInUser

		self.snapshot = {
			loggedInUser: {
				username: username,
				age: age
			}
		};

		self.loggedInUser.next(self.snapshot.loggedInUser);
	};

	return self;
};
```

This is what we can notice here:

1. We added a new member called snapshot and it represents an object with a logged in user as a member inside.
2. We also updated the logIn function implementation in a way that it first updates the snapshot object and then does what it used to do.

### Enhanced Some Module

```typescript
const SomeModule = function () {
	const self = this;

	let loggedInUser = authenticationService.snapshot.loggedInUser;

	const subscription = authenticationService.loggedInUser.subscribe(
		(user) => {
			loggedInUser = user;
		}
	);

	self.DoSomeStuff = function () {
		// need to know the logged in user
		console.log(self.loggedInUser);
	};

	console.log(self.loggedInUser); // self.loggedInUser would have some value

	return self;
};
```

This is what we can notice here:

1. We updated the initialization of the local loggedInUser variable to get its value from the authenticationService.snapshot.loggedInUser.
2. Therefore, on line 15 in the code above, the value of the local loggedInUser variable would not be null, it would hold the latest value of the logged in user.

![The Right Way to Create Observable Subjects in JavaScript. A best practice on how to define your Observable Subjects in JavaScript objects. JavaScript JS Promise Async Await. Best Practice Code Coding Programming Software Development Architecture Engineering](https://static.wixstatic.com/media/488a99_f1ce571808864caba36ad48c25f229e4~mv2.png/v1/fill/w_666,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/488a99_f1ce571808864caba36ad48c25f229e4~mv2.png)

Photo by Grégoire Bertaud on Unsplash

Finally, hope you found reading this story as interesting as I found writing it.
