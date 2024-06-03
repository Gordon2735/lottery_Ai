<!-- How to use express-mysql-session in Typescript projects? -->

# **How to Use Express-MySQL-Session in Typescript Projects?**

-   [How to use express-mysql-session in Typescript projects?](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects)

[Ask Question](https://stackoverflow.com/questions/ask)

Asked 6 years, 11 months ago

Modified [4 years, 6 months ago](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects?lastactivity '2019-11-25 08:13:27Z')

Viewed 4k times

This question shows research effort; it is useful and clear

8

This question does not show any research effort; it is unclear or not useful

Save this question.

[](https://stackoverflow.com/posts/44920856/timeline)

Show activity on this post.

I'm trying to use express-session and express-mysql-session within a Typescript project. Here's the relevant part of my code:

```javascript
import * as express from "express";
import * as expressSession from "express-session";
import * as expressMySqlSession from "express-mysql-session";

this.express = express();
const sessionStore = new expressMySqlSession(sessionStoreConfig, this.dbConnection);
const sessionHandler = expressSession({
                ...,
                store: sessionStore
            });
this.express.use(sessionHandler);
```

It does not compile because the `store` option is of type `expressSession.Store | expressSession.MemoryStore | undefined` while `sessionStore` is of type `MySQLStore`. What am I doing wrong?

Regards

-   [mysql](https://stackoverflow.com/questions/tagged/mysql "show questions tagged 'mysql'")
-   [express](https://stackoverflow.com/questions/tagged/express "show questions tagged 'express'")
-   [typescript](https://stackoverflow.com/questions/tagged/typescript "show questions tagged 'typescript'")
-   [express-session](https://stackoverflow.com/questions/tagged/express-session "show questions tagged 'express-session'")

[Share](https://stackoverflow.com/q/44920856/15588573 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/44920856/edit 'Revise and improve this post')

Follow

Follow this question to receive notifications

asked Jul 5, 2017 at 8:29

[

![Timo Kunze's user avatar](https://www.gravatar.com/avatar/c4f642c8b4e2d31661f2afebe060ac4c?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://stackoverflow.com/users/6532551/timo-kunze)

[Timo Kunze](https://stackoverflow.com/users/6532551/timo-kunze)Timo Kunze

14511 silver badge66 bronze badges

3

-   Notice how `session` is passed to the result of `require('express-mysql-session')` [in the example code](https://github.com/chill117/express-mysql-session#how-to-use), which is a step that you seem to be missing.
    – [robertklep](https://stackoverflow.com/users/893780/robertklep '201,370 reputation')
    [Jul 5, 2017 at 8:53](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects#comment76818429_44920856)
-   Hmm, yes, you are right, but how would this call look like in ES6 syntax? The following lines should be equivalent, right? `import * as expressSession from "express-session";` `import expressSession = require("express-session");` The first one is the newer, ES6 syntax. But how would I write `require("xyz")(someparameter)` in ES6 syntax? Besides that would this really fix the type mismatch?
    – [Timo Kunze](https://stackoverflow.com/users/6532551/timo-kunze '145 reputation')
    [Jul 5, 2017 at 11:50](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects#comment76826200_44920856)
-   It's ugly, but adding: regenerate: (req: any, fn: (err?: any) => any) => void; load: (sid: string, fn: (err: any, session?: any | null) => any) => void; createSession: (req: any, sess: Express.SessionData) => void; all: (callback: (err: any, obj?: { \[sid: string\]: any; } | null) => void) => void; to MySQLStore declaration in index.d.ts solves it.
    – [Max](https://stackoverflow.com/users/2944332/max '591 reputation')
    [Oct 2, 2018 at 10:28](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects#comment92147025_44920856)

[Add a comment](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.') | [](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects# 'Expand to show all comments on this post')

Report this ad

## 3 Answers 3

Sorted by: [Reset to default](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects?answertab=scoredesc#tab-top)

Highest score (default) Trending (recent votes count more) Date modified (newest first) Date created (oldest first)

This answer is useful

5

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/44925725/timeline)

Show activity on this post.

Try this:

```javascript
import * as express        from "express";
import * as expressSession from "express-session";
import expressMySqlSession from "express-mysql-session";

const MySQLStore   = expressMySqlSession(expressSession);
const sessionStore = new MySQLStore(sessionStoreConfig, this.dbConnection);
...
```

[Share](https://stackoverflow.com/a/44925725/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ 'The current license for this post: CC BY-SA 3.0')

[Edit](https://stackoverflow.com/posts/44925725/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

[edited Jul 5, 2017 at 14:05](https://stackoverflow.com/posts/44925725/revisions 'show all edits to this post')

answered Jul 5, 2017 at 12:02

[

![robertklep's user avatar](https://i.sstatic.net/3j1db.jpg?s=64)

](https://stackoverflow.com/users/893780/robertklep)

[robertklep](https://stackoverflow.com/users/893780/robertklep)robertklep

201k3737 gold badges401401 silver badges388388 bronze badges

3

-   1
    This does not compile. I get the following error (translated from German) on the line `const MySQLStore`: "The value of type 'typeof MySQLStore' cannot be called. Do you want to include 'new'?" I found a solution, but I have the feeling that it uses an old syntax: `const expressMySqlSession = require("express-mysql-session")(expressSession);`, followed by `return new expressMySqlSession(sessionStoreConfig, this.dbConnection);` By the way, I use Typescript 2.4.1 in case this matters.
    – [Timo Kunze](https://stackoverflow.com/users/6532551/timo-kunze '145 reputation')
    [Jul 5, 2017 at 13:37](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects#comment76831188_44925725)
-   @TimoKunze see edit, the import for `express-mysql-session` was incorrect. The code above works in "regular" JS.
    – [robertklep](https://stackoverflow.com/users/893780/robertklep '201,370 reputation')
    [Jul 5, 2017 at 14:06](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects#comment76832503_44925725)
-   2
    Now the import of expressMySqlSession fails with "Module '.../@types/express-mysql-session/index' has no default export."
    – [Timo Kunze](https://stackoverflow.com/users/6532551/timo-kunze '145 reputation')
    [Jul 5, 2017 at 14:52](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects#comment76834770_44925725)

[Add a comment](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') | [](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects# 'Expand to show all comments on this post')

This answer is useful

2

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/58719584/timeline)

Show activity on this post.

With both `express-session`, `express-mysql-session`, and `@types/express-mysql-session` listed as dependencies:

[Current version of the types](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express-mysql-session/index.d.ts) (from about two years ago) tracks an older version of `express-mysql-session`, where the default export is the class. Fortunately, there's some [backwards-compatibility](https://github.com/chill117/express-mysql-session/blob/d95f49d0463a708473317d2f533de29088c9a787/index.js#L487-L491) in the library for this older version, so you can instantiate it directly:

```javascript
import MySQLSessionStore from "express-mysql-session";

const store = new MySQLSessionStore({...});
```

And the library will handle [importing the `express-session` dependency](https://github.com/chill117/express-mysql-session/blob/d95f49d0463a708473317d2f533de29088c9a787/index.js#L17-L20) for you.

Code never lies!

[Share](https://stackoverflow.com/a/58719584/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/58719584/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Nov 5, 2019 at 21:16

[

![adrian's user avatar](https://www.gravatar.com/avatar/5c0e5b383b759dfe98d3212cc2a43818?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/451116/adrian)

[adrian](https://stackoverflow.com/users/451116/adrian)adrian

1,76111 gold badge1111 silver badges55 bronze badges

1

-   Forgetting to add `@types/express-mysql-session` fixed an issue for me.
    – [GHOST-34](https://stackoverflow.com/users/2392473/ghost-34 '378 reputation')
    [Jan 7, 2022 at 20:56](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects#comment124852504_58719584)

[Add a comment](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') | [](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects# 'Expand to show all comments on this post')

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/55866877/timeline)

Show activity on this post.

```php
import * as express from 'express';
import * as session from 'express-session';
const MySQLStore = require('express-mysql-session')(session);

import pool from './database';
const sessionStore = new MySQLStore({
  schema: {
    tableName: 'mire_sessions',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data'
    }
  }
}, pool);

const app = express();
app.use(session({
  secret: 'z',
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}))
```

This code worked for me. But I don't know why

[Share](https://stackoverflow.com/a/55866877/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/55866877/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Apr 26, 2019 at 11:40

[

![Byeongin Yoon's user avatar](https://i.sstatic.net/FelSP.png?s=64)

](https://stackoverflow.com/users/9279003/byeongin-yoon)

[Byeongin Yoon](https://stackoverflow.com/users/9279003/byeongin-yoon)Byeongin Yoon

3,74577 gold badges2828 silver badges5151 bronze badges

[Add a comment](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') | [](https://stackoverflow.com/questions/44920856/how-to-use-express-mysql-session-in-typescript-projects# 'Expand to show all comments on this post')

## Your Answer
