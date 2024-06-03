<!-- NPM MySQL2 with Sessions -->

# **Express Sessions and MySQL**

-   [Express Sessions and MySQL](https://stackoverflow.com/questions/61921655/express-sessions-and-mysql)

[Ask Question](https://stackoverflow.com/questions/ask)

Asked 4 years ago

Modified [4 years ago](https://stackoverflow.com/questions/61921655/express-sessions-and-mysql?lastactivity '2020-05-20 20:44:24Z')

Viewed 327 times

This question shows research effort; it is useful and clear

1

This question does not show any research effort; it is unclear or not useful

Save this question.

[](https://stackoverflow.com/posts/61921655/timeline)

Show activity on this post.

I'm trying to wrap my head around sessions right now.. At the moment, I have a express/NodeJS app that uses query parameters to store values from a script that looks like this

**script** **snippet:**

```sql
curl localhost:3000/register?name=bob\&width=13.970000\&time=0
curl localhost:3000/wheels?left=0.000000\&right=0.000000\&time=0 --cookie "USER=bob"
curl localhost:3000/echo?dist=9.220000\&time=10 --cookie "USER=bob"
curl localhost:3000/line?l1=1\&l2=1\&l3=1\&time=20 --cookie "USER=bob"
curl localhost:3000/other?ir=0\&time=30 --cookie "USER=bob"
curl localhost:3000/wheels?left=3.000000\&right=3.000000\&time=100 --cookie "USER=bob"
curl localhost:3000/echo?dist=9.220000\&time=110 --cookie "USER=bob"
curl localhost:3000/line?l1=1\&l2=1\&l3=1\&time=120 --cookie "USER=bob"
curl localhost:3000/other?ir=0\&time=130 --cookie "USER=bob"
curl localhost:3000/wheels?left=3.000000\&right=3.000000\&time=200 --cookie "USER=bob"
curl localhost:3000/echo?dist=9.220000\&time=210 --cookie "USER=bob"
curl localhost:3000/line?l1=1\&l2=1\&l3=1\&time=220 --cookie "USER=bob"
```

I have been able to store each piece of data from name, width, left, right, l1, l2, etc into a database on MySQL. I've even created a nice UI to browse the database and filter through it. The next part of my project is to now create a way to browse through the various sessions and see whether they are active or not... But, I'm having issues on trying to do this.

First, some questions:

1. How do I store these sessions to mysql?
2. How does a session link to information that the user stores in a database? For instance, when I create the UI to browse particular sessions, I want to be able to click on a session and then view the name, width, left, right, l1, l2, etc information that they stored while that user was logged in?

I've read through the express-sessions documentation and it's really sort of vague on the database information I'm looking for. If this doesn't make sense then I'm VERY sorry. I'm finding out half the battle for me is putting my issues into words, but I'm trying my best to learn express, node js, and mysql by putting my best foot forward on this project. Any help would be greatly appreciated!

-   [mysql](https://stackoverflow.com/questions/tagged/mysql "show questions tagged 'mysql'")
-   [node.js](https://stackoverflow.com/questions/tagged/node.js "show questions tagged 'node.js'")
-   [express](https://stackoverflow.com/questions/tagged/express "show questions tagged 'express'")
-   [session](https://stackoverflow.com/questions/tagged/session "show questions tagged 'session'")

[Share](https://stackoverflow.com/q/61921655/15588573 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/61921655/edit 'Revise and improve this post')

Follow

Follow this question to receive notifications

asked May 20, 2020 at 19:48

[

![JStone's user avatar](https://i.sstatic.net/owJou.jpg?s=64)

](https://stackoverflow.com/users/5844430/jstone)

[JStone](https://stackoverflow.com/users/5844430/jstone)JStone

11911 silver badge1010 bronze badges

[Add a comment](https://stackoverflow.com/questions/61921655/express-sessions-and-mysql# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.') | [](https://stackoverflow.com/questions/61921655/express-sessions-and-mysql# 'Expand to show all comments on this post')

Report this ad

## 1 Answer 1

Sorted by: [Reset to default](https://stackoverflow.com/questions/61921655/express-sessions-and-mysql?answertab=scoredesc#tab-top)

Highest score (default) Trending (recent votes count more) Date modified (newest first) Date created (oldest first)

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/61922559/timeline)

Show activity on this post.

with Express-session for mysql you use connector like [https://www.npmjs.com/package/express-mysql-session](https://www.npmjs.com/package/express-mysql-session) , and as given basic example you can setup that your express-session will be managed in mysql database.

when you configure this with app.use(--) in your application. As it will be a middle ware in the node application. you will have access to a **req.session** object

**Simple use case** 1.After user login you have user data you can add that info to `req.session.user = {...userInfo};` 2. in other call where you access req object , after setting session you can use to retrieve info .. `const userInfo = req.session.user;` and as you want mysql to save session info , so as per setup session will be manged with respect to that.

you have access to methods like

```javascript
req.session.destroy(function (err) {
    // cannot access session here -- you can use it at logout time or clear
});
```

[Share](https://stackoverflow.com/a/61922559/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/61922559/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered May 20, 2020 at 20:44

[

![LogicBlower's user avatar](https://i.sstatic.net/yF2YU.jpg?s=64)

](https://stackoverflow.com/users/8110123/logicblower)

[LogicBlower](https://stackoverflow.com/users/8110123/logicblower)LogicBlower

1,31011 gold badge99 silver badges1515 bronze badges

[Add a comment](https://stackoverflow.com/questions/61921655/express-sessions-and-mysql# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') | [](https://stackoverflow.com/questions/61921655/express-sessions-and-mysql# 'Expand to show all comments on this post')

## Your Answer
