<!-- Node.js-Express-mysql-session Store with Typescript -->

# **Express mysql session store with Typescript**

-   [Express mysql session store with Typescript](https://stackoverflow.com/questions/69602441/express-mysql-session-store-with-typescript)

[Ask Question](https://stackoverflow.com/questions/ask)

Asked 2 years, 7 months ago

Modified [2 years, 7 months ago](https://stackoverflow.com/questions/69602441/express-mysql-session-store-with-typescript?lastactivity '2021-10-18 08:59:00Z')

Viewed 1k times

This question shows research effort; it is useful and clear

0

This question does not show any research effort; it is unclear or not useful

Save this question.

[](https://stackoverflow.com/posts/69602441/timeline)

Show activity on this post.

I'm trying to create a mysql session storage in NestJS with Typescript. I have installed the express-session, express-mysql-session and @types/express-mysql-session package. The code below compiles (main.ts file), but then there's an error in the console:

```javascript
import { AppModule } from './app.module';
import { env } from './common/env';
import session from 'express-session';
import MySQLStore from 'express-mysql-session';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: { credentials: env.ENABLE_CORS, origin: env.CLIENT_HOST }
    });

    //session store
    const options = {
        host: 'db',
        port: 3306,
        user: env.DB_USER,
        password: env.DB_PASSWD,
        database: env.DATABASE,
        checkExpirationInterval: 1000 * 60 * 60 * 2,
        expiration: 1000 * 60 * 60 * 24
    };

    const store = MySQLStore(session);
    const sessionStore = new store(options);

    app.use(
        session({
            secret: env.COOKIE_SECRET,
            store: sessionStore,
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
            }
        })
    );

    await app.listen(env.PORT_BACKEND || 8080);
}
bootstrap();
```

And the error is [picture here](https://i.sstatic.net/1mWfF.png)

Doing it with require instead of import won't even compile, I have tried the express-mysql-session package way:

`var MySQLStore = require('express-mysql-session')(session);`

How should I make it work? Or is there another better package for that?

-   [typescript](https://stackoverflow.com/questions/tagged/typescript "show questions tagged 'typescript'")
-   [express](https://stackoverflow.com/questions/tagged/express "show questions tagged 'express'")
-   [session](https://stackoverflow.com/questions/tagged/session "show questions tagged 'session'")
-   [nestjs](https://stackoverflow.com/questions/tagged/nestjs "show questions tagged 'nestjs'")
-   [session-store](https://stackoverflow.com/questions/tagged/session-store "show questions tagged 'session-store'")

[Share](https://stackoverflow.com/q/69602441/15588573 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/69602441/edit 'Revise and improve this post')

Follow

Follow this question to receive notifications

asked Oct 17, 2021 at 8:10

[

![FluffyTanuki's user avatar](https://lh3.googleusercontent.com/-MONk1iuGmWY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxgFP0rrCmVR59pR9UP16ZFNTmDQ/s96-c/photo.jpg?sz=64)

](https://stackoverflow.com/users/15226847/fluffytanuki)

[FluffyTanuki](https://stackoverflow.com/users/15226847/fluffytanuki)FluffyTanuki

333 bronze badges

[Add a comment](https://stackoverflow.com/questions/69602441/express-mysql-session-store-with-typescript# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.') | [](https://stackoverflow.com/questions/69602441/express-mysql-session-store-with-typescript# 'Expand to show all comments on this post')

Report this ad

## 1 Answer 1

Sorted by: [Reset to default](https://stackoverflow.com/questions/69602441/express-mysql-session-store-with-typescript?answertab=scoredesc#tab-top)

Highest score (default) Trending (recent votes count more) Date modified (newest first) Date created (oldest first)

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/69613323/timeline)

Show activity on this post.

Ok, so I made it work. Ended up installing also mysql2 package, you can read [here](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server) why.

Code ended up like this:

```javascript
import { NestFactory } from '@nestjs/core';
import { env } from './common/env';
import { AppModule } from './modules/app/app.module';
import * as session from 'express-session';
import * as MySQLStoreCreator from 'express-mysql-session';
import * as mysql2 from 'mysql2/promise';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: { credentials: env.ENABLE_CORS, origin: env.CLIENT_HOST }
    });

    //session store
    const options = {
        host: 'db',
        port: 3306,
        user: env.DB_USER,
        password: env.DB_PASSWD,
        database: env.DATABASE,
        checkExpirationInterval: 1000 * 60 * 60 * 2,
        expiration: 1000 * 60 * 60 * 24
    };

    const connection = mysql2.createPool(options);
    const sessionStore = new (MySQLStoreCreator(session))({}, connection);

    app.use(
        session({
            secret: env.COOKIE_SECRET,
            store: sessionStore,
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
            }
        })
    );

    await app.listen(env.PORT_BACKEND || 8080);
}
bootstrap();
```

Maybe someone will find it helpful C:

[Share](https://stackoverflow.com/a/69613323/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/69613323/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Oct 18, 2021 at 8:59

[

![FluffyTanuki's user avatar](https://lh3.googleusercontent.com/-MONk1iuGmWY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxgFP0rrCmVR59pR9UP16ZFNTmDQ/s96-c/photo.jpg?sz=64)

](https://stackoverflow.com/users/15226847/fluffytanuki)

[FluffyTanuki](https://stackoverflow.com/users/15226847/fluffytanuki)FluffyTanuki

333 bronze badges

1

-   1
    When I change from `import session from 'express-session';` to `import * as session from 'express-session';` I get an error "This expression is not callable." on line `app.use(session({`... How do I get around that?
    – [Björn Andersson](https://stackoverflow.com/users/424586/bj%c3%b6rn-andersson '879 reputation')
    [Dec 14, 2021 at 12:31](https://stackoverflow.com/questions/69602441/express-mysql-session-store-with-typescript#comment124355456_69613323)

[Add a comment](https://stackoverflow.com/questions/69602441/express-mysql-session-store-with-typescript# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') | [](https://stackoverflow.com/questions/69602441/express-mysql-session-store-with-typescript# 'Expand to show all comments on this post')

## Your Answer
