<!-- Node.js Flash Messages -->

# **Express, Handlebars show flash messages**

-   [Express, Handlebars show flash messages](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages)

[Ask Question](https://stackoverflow.com/questions/ask)

Modified [3 years, 3 months ago](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages?lastactivity '2020-11-28 21:57:08Z')

[](https://stackoverflow.com/posts/25564123/timeline)

_I'm using Node with express and handlebars. I have a login form, and should display a login error message to a user. My code is as follows: Validation (using passport)_:

```javascript
else if (password != user.password) {
            return done(null, false, req.flash('message', 'Wrong password'));

```

_In routes I got this_:

```javascript
app.post(
	'/sign-in',
	passport.authenticate('local', {
		successRedirect: '/', // redirect to the home page
		failureRedirect: '/sign-in', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	})
);
```

Then to render my handlebars template,

```javascript
app.get('/sign-in', function (req, res) {
	res.render('signin.handlebars', {
		layout: 'users.handlebars',
		action: 'Sign in',
		message: req.flash('message'),
		csrf: 'CSRF token goes here'
	});
});
```

Problem is, the flash message ain't shown as required when a wrong password is entered.

_Edit: My express setup is_:

```javascript
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('models', __dirname + '/models');
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(cookieParser());
app.use(
	expressSession({
		secret: 'somesecrettokenhere',
		resave: true,
		saveUninitialized: true
	})
);
app.use(passport.initialize());
app.use(passport.session());
//app.use(session({ store: new RedisStore }));
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(flash());
app.use(morgan('dev'));
app.disable('x-powered-by');
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
});
```

-   [node.js](https://stackoverflow.com/questions/tagged/node.js "show questions tagged 'node.js'")
-   [express](https://stackoverflow.com/questions/tagged/express "show questions tagged 'express'")
-   [handlebars.js](https://stackoverflow.com/questions/tagged/handlebars.js "show questions tagged 'handlebars.js'")

[Share](https://stackoverflow.com/q/25564123/15588573 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/25564123/edit 'Revise and improve this post')

[edited Aug 29, 2014 at 11:06](https://stackoverflow.com/posts/25564123/revisions 'show all edits to this post')

[

![Denny's user avatar](https://www.gravatar.com/avatar/dfce38e13c513e4a0795c4c17f5a0109?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1768608/denny)

[Denny](https://stackoverflow.com/users/1768608/denny)Denny

1,74933 gold badges2020 silver badges3939 bronze badges

7

-   Have you install express-flash?
    – [Vinz243](https://stackoverflow.com/users/2533082/vinz243 '9,782 reputation')
    [Aug 29, 2014 at 9:47](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages#comment39924917_25564123)
-   I'm using connect-flash
    – [Denny](https://stackoverflow.com/users/1768608/denny '1,749 reputation')
    [Aug 29, 2014 at 9:56](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages#comment39925216_25564123)
-   Have you tried a simple flash message in an other route?
    – [Vinz243](https://stackoverflow.com/users/2533082/vinz243 '9,782 reputation')
    [Aug 29, 2014 at 10:00](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages#comment39925329_25564123)
-   Yap...nothing is showing on the other page either. Is my code above correct?
    – [Denny](https://stackoverflow.com/users/1768608/denny '1,749 reputation')
    [Aug 29, 2014 at 10:48](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages#comment39926680_25564123)
-   1
    First thing I notice is your error middleware is only setting a status and never sending a response.
    – [Jordonias](https://stackoverflow.com/users/751467/jordonias '5,798 reputation')
    [Aug 29, 2014 at 15:16](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages#comment39935649_25564123)

[](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.') | [Show **2** more comments](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages# 'Expand to show all comments on this post')

## 2 Answers 2

Sorted by: [Reset to default](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages?answertab=scoredesc#tab-top)

Highest score (default) Trending (recent votes count more) Date modified (newest first) Date created (oldest first)

This answer is useful

8

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/25623077/timeline)

Show activity on this post.

I solved it btw like so: ...

```javascript
if (!user) {
            return done(null, false, {
                message: 'The email you entered is incorrect'
            });
```

... That encodes the message in JSON. Then in routes I got:

```javascript
app.get('/sign-in', function(req, res) {
        res.render("signin.handlebars", {layout: 'users.handlebars', action: 'Sign in', ***error: req.flash('error')***,
                    csrf: 'CSRF token goes here' });
    })
```

Then in my handlebars template:

```javascript
{{#if error}}
    <div class="alert alert-danger">{{error}}</div>
{{/if}}
```

[Share](https://stackoverflow.com/a/25623077/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/25623077/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Sep 2, 2014 at 12:08

[

![Denny's user avatar](https://www.gravatar.com/avatar/dfce38e13c513e4a0795c4c17f5a0109?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1768608/denny)

[Denny](https://stackoverflow.com/users/1768608/denny)Denny

1,74933 gold badges2020 silver badges3939 bronze badges

[Add a comment](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') | [](https://stackoverflow.com/questions/25564123/express-handlebars-show-flash-messages# 'Expand to show all comments on this post')

This answer is useful

2

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/65054864/timeline)

Show activity on this post.

You need to add a global variable in your index.js

```javascript
app.use((req, res, next) => {
	app.locals.success = req.flash('success');
	next();
});
```

Then in your route you add the message

```javascript
req.flash('success', 'Your message');
```

Finally you .hbs

```javascript
{{#if success}}
{{success}}
{{/if}}
```

[Share](https://stackoverflow.com/a/65054864/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/65054864/edit 'Revise and improve this post')

Follow
