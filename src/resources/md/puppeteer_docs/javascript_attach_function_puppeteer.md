[](https://stackoverflow.com/)

1. [Products](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context#)

1. [Stack Overflow Public questions & answers](https://stackoverflow.com/)
1. [Stack Overflow for Teams Where developers & technologists share private knowledge with coworkers](https://stackoverflow.co/teams/)
1. [Talent Build your employer brand](https://stackoverflow.co/talent/)
1. [Advertising Reach developers & technologists worldwide](https://stackoverflow.co/advertising/)
1. [Labs The future of collective knowledge sharing](https://stackoverflow.co/labs/)
1. [About the company](https://stackoverflow.co/)

Loading…

2. [

    ![Gordon  Mullen's user avatar](https://lh3.googleusercontent.com/a-/AOh14Ghm4xGOhasdNUKZL1KvvlUUasoF7uXcRcI3Tv4j=k-s48)

    Gordon Mullen

    - 11 , 11 reputation
    - ●11 silver badge●33 bronze badges

    ](https://stackoverflow.com/users/15588573/gordon-mullen)

3. [1](https://stackexchange.com/users/21197248?tab=inbox 'You have unread inbox messages')
4. [+0](https://stackexchange.com/users/21197248?tab=reputation 'Recent achievements: reputation, badges, and privileges earned')

-   [Tour Start here for a quick overview of the site](https://stackoverflow.com/tour)
-   [Help Center Detailed answers to any questions you might have](https://stackoverflow.com/help)
-   [Meta Discuss the workings and policies of this site](https://meta.stackoverflow.com/)
-   [About Us Learn more about Stack Overflow the company, and our products](https://stackoverflow.co/)

8. ### [current community](https://stackoverflow.com/)

    [

    ![Gordon  Mullen's user avatar](https://lh3.googleusercontent.com/a-/AOh14Ghm4xGOhasdNUKZL1KvvlUUasoF7uXcRcI3Tv4j=k-s32)

    ](https://stackoverflow.com/users/15588573/gordon-mullen)

    [Gordon Mullen](https://stackoverflow.com/users/15588573/gordon-mullen)

    1111 silver badge33 bronze badges

    [log out](https://stackoverflow.com/users/logout)

    - [
      Stack Overflow](https://stackoverflow.com/)
      [help](https://stackoverflow.com/help) [chat](https://chat.stackoverflow.com/?tab=site&host=stackoverflow.com) [log out](https://stackoverflow.com/users/logout)
    - [
      Meta Stack Overflow](https://meta.stackoverflow.com/)

    ### [your communities](https://stackexchange.com/users/21197248/?tab=accounts)

    [edit](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context#) [cancel](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context#)

    - [
      Stack Overflow 11](https://stackoverflow.com/)
    - [
      Android Enthusiasts 1](https://android.stackexchange.com/)
    - [
      Artificial Intelligence 1](https://ai.stackexchange.com/)
    - [
      Ask Different 1](https://apple.stackexchange.com/)
    - [
      Biblical Hermeneutics 1](https://hermeneutics.stackexchange.com/)

    Add

    [Reset](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context#) Save

    ### [more stack exchange communities](https://stackexchange.com/sites)

    [company blog](https://stackoverflow.blog/)

StackExchange.ready(function () { StackExchange.topbar.init(); }); StackExchange.scrollPadding.setPaddingTop(50, 10);

# [How c](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context)

[https://stackoverflow.com/](https://stackoverflow.com/)

# [How can you attach Typescript/Javascript Functions to Puppeteer Page Context](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context)

[Ask Question](https://stackoverflow.com/questions/ask)

Asked 3 years, 6 months ago

Modified [3 years, 6 months ago](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context?lastactivity '2020-10-06 21:41:05Z')

Viewed 1k times

Report this ad

This question shows research effort; it is useful and clear

0

This question does not show any research effort; it is unclear or not useful

Save this question.

[](https://stackoverflow.com/posts/64199245/timeline)

Show activity on this post.

I'm writing a web scraping application in Typescript with Puppeteer. I'm "attaching" a Javascript file with utility functions to the page instance, to make the scraping easier (This is done with Pupeteer's `page.addScriptTag` function, see the API [here](https://pptr.dev/#?product=Puppeteer&version=v5.3.1&show=api-pageaddscripttagoptions)). Here's what one of the utility functions on the page might look like:

```javascript
// functions.ts

export const getLink = (node: Element) => {
  let link = node.querySelector("a");
  return link ? link.href : null;
};
```

Then you can use the functions inside `page.evaluate`:

```javascript
// process.ts

import { getLink } from "../functions";

interface LinkArgs {
  page: puppeteer.Page;
  selector: selector;
}

export const getLinkFromPage = async ({ page, selector }): LinkArgs) =>
  page.evaluate((selector) => {
    const link = getLink(selector); // I'm using the function here.
    return link;
  }, selectors);
```

The problem is that when I'm doing this, the imports are failing during development. _I believe_ this is because the `import` and `export` compiled syntax is not working inside of chrome. Here's the error from my browser:

```javascript
Could not get links.  Error: Evaluation failed: ReferenceError: src_1 is not defined
    at __puppeteer_evaluation_script__:2:20
    at ExecutionContext._evaluateInternal (/Users/harrisoncramer/Desktop/Code/projects/gql3.0_schedulers/node_modules/puppeteer/lib/cjs/puppeteer/common/ExecutionContext.js:217
:19)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async ExecutionContext.evaluate (/Users/harrisoncramer/Desktop/Code/projects/gql3.0_schedulers/node_modules/puppeteer/lib/cjs/puppeteer/common/ExecutionContext.js:106:16
)
Evaluation failed: ReferenceError: src_1 is not defined
    at __puppeteer_evaluation_script__:2:20
```

I've got a hacky workaround: I'm punching the `functions.ts` file into a compiler, and then removing all of the `export` keywords from the `functions.js` file. Then, I'm removing all of the `import` statements from inside the `process.ts` file, like this:

```javascript
// functions.js

const getLink = (node) => {
  let link = node.querySelector("a");
  return link ? link.href : null;
};

// process.js

    // Turning off this import...
    // import { getLink } from "../functions";

interface LinkArgs {
  page: puppeteer.Page;
  selector: selector;
}

export const getLinkFromPage = async ({ page, selector }): LinkArgs) =>
  page.evaluate((selector) => {
    const link = getLink(selector); // I'm using the function here.
    return link;
  }, selectors);
```

This, however, breaks the type checking during development! What's the better way of solving this problem?! How can one import compiled Javascript functions onto the page without breaking the Typescript type-checking?

-   [javascript](https://stackoverflow.com/questions/tagged/javascript "show questions tagged 'javascript'")
-   [typescript](https://stackoverflow.com/questions/tagged/typescript "show questions tagged 'typescript'")
-   [web-scraping](https://stackoverflow.com/questions/tagged/web-scraping "show questions tagged 'web-scraping'")
-   [module](https://stackoverflow.com/questions/tagged/module "show questions tagged 'module'")
-   [puppeteer](https://stackoverflow.com/questions/tagged/puppeteer "show questions tagged 'puppeteer'")

[Share](https://stackoverflow.com/q/64199245/15588573 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/64199245/edit 'Revise and improve this post')

Follow

Follow this question to receive notifications

[edited Oct 4, 2020 at 20:00](https://stackoverflow.com/posts/64199245/revisions 'show all edits to this post')

Harrison Cramer

asked Oct 4, 2020 at 19:54

[

![Harrison Cramer's user avatar](https://i.stack.imgur.com/7m33s.jpg?s=64&g=1)

](https://stackoverflow.com/users/7860026/harrison-cramer)

[Harrison Cramer](https://stackoverflow.com/users/7860026/harrison-cramer)Harrison Cramer

4,16499 gold badges3434 silver badges6666 bronze badges

[Add a comment](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.') | [](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context# 'Expand to show all comments on this post')

## 1 Answer 1

Sorted by: [Reset to default](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context?answertab=scoredesc#tab-top)

Highest score (default) Trending (recent votes count more) Date modified (newest first) Date created (oldest first)

This answer is useful

0

This answer is not useful

Save this answer.

[](https://stackoverflow.com/posts/64234192/timeline)

Show activity on this post.

Anything inside of `page.evaluate` is essentially run inside of Chrome's DevTools console, or in the same context you'd be in if you were to do so. So imports won't work in this context, at least not how you're attempting it. You have to explicitly pass the function into the context like this:

```javascript
const getLink = (node) => {
  let link = node.querySelector("a");
  return link ? link.href : null;
};

// process.js

    // Turning off this import...
    // import { getLink } from "../functions";

interface LinkArgs {
  page: puppeteer.Page;
  selector: selector;
}

export const getLinkFromPage = async ({ page, selector }): LinkArgs) =>
  page.evaluate((selector, getLink) => {
    const link = getLink(selector); // I'm using the function here.
    return link;
  }, selectors, getLink);
```

[Share](https://stackoverflow.com/a/64234192/15588573 'Short permalink to this answer')

Share a link to this answer (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://stackoverflow.com/posts/64234192/edit 'Revise and improve this post')

Follow

Follow this answer to receive notifications

answered Oct 6, 2020 at 21:41

[

![Todd Price's user avatar](https://www.gravatar.com/avatar/72f5e3d20c3e1feb8c75b2e464a690e9?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/29107/todd-price)

[Todd Price](https://stackoverflow.com/users/29107/todd-price)Todd Price

2,69411 gold badge1818 silver badges2626 bronze badges

1

-   1
    This does not work... the `getLink` function is not assignable to the parameter of type `SerializableOrJSHandle`.
    – [EFernandes](https://stackoverflow.com/users/1251884/efernandes '1,366 reputation')
    [Oct 16, 2021 at 18:50](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context#comment123018939_64234192)

[Add a comment](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context# 'Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.') | [](https://stackoverflow.com/questions/64199245/how-can-you-attach-typescript-javascript-functions-to-puppeteer-page-context# 'Expand to show all comments on this post')

## Your Answer

StackExchange.ifUsing("editor", function () { StackExchange.using("externalEditor", function () { StackExchange.using("snippets", function () { StackExchange.snippets.init(); }); }); }, "code-snippets"); StackExchange.ready(function() { var channelOptions = { tags: "".split(" "), id: "1" }; initTagRenderer("".split(" "), "".split(" "), channelOptions); StackExchange.using("externalEditor", function() { // Have to fire editor after snippets, if snippets enabled if (StackExchange.settings.snippets.snippetsEnabled) { StackExchange.using("snippets", function() { createEditor(); }); } else { createEditor(); } }); function createEditor() { StackExchange.prepareEditor({ useStacksEditor: false, heartbeatType: 'answer', autoActivateHeartbeat: false, convertImagesToLinks: false, noModals: true, showLowRepImageUploadWarning: true, reputationToPostImages: null, bindNavPrevention: true, postfix: "", imageUploadEnabled: true, imageUploader: { brandingHtml: "Powered by \\u003ca href=\\"https://imgur.com/\\"\\u003e\\u003csvg class=\\"svg-icon\\" width=\\"50\\" height=\\"18\\" viewBox=\\"0 0 50 18\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003e\\u003ctitle\\u003eImgur Logo\\u003c/title\\u003e\\u003cpath d=\\"M46.1709 9.17788C46.1709 8.26454 46.2665 7.94324 47.1084 7.58816C47.4091 7.46349 47.7169 7.36433 48.0099 7.26993C48.9099 6.97997 49.672 6.73443 49.672 5.93063C49.672 5.22043 48.9832 4.61182 48.1414 4.61182C47.4335 4.61182 46.7256 4.91628 46.0943 5.50789C45.7307 4.9328 45.2525 4.66231 44.6595 4.66231C43.6264 4.66231 43.1481 5.28821 43.1481 6.59048V11.9512C43.1481 13.2535 43.6264 13.8962 44.6595 13.8962C45.6924 13.8962 46.1709 13.2535 46.1709 11.9512V9.17788Z\\"/\\u003e\\u003cpath d=\\"M32.492 10.1419C32.492 12.6954 34.1182 14.0484 37.0451 14.0484C39.9723 14.0484 41.5985 12.6954 41.5985 10.1419V6.59049C41.5985 5.28821 41.1394 4.66232 40.1061 4.66232C39.0732 4.66232 38.5948 5.28821 38.5948 6.59049V9.60062C38.5948 10.8521 38.2696 11.5455 37.0451 11.5455C35.8209 11.5455 35.4954 10.8521 35.4954 9.60062V6.59049C35.4954 5.28821 35.0173 4.66232 34.0034 4.66232C32.9703 4.66232 32.492 5.28821 32.492 6.59049V10.1419Z\\" /\\u003e\\u003cpath fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M25.6622 17.6335C27.8049 17.6335 29.3739 16.9402 30.2537 15.6379C30.8468 14.7755 30.9615 13.5579 30.9615 11.9512V6.59049C30.9615 5.28821 30.4833 4.66231 29.4502 4.66231C28.9913 4.66231 28.4555 4.94978 28.1109 5.50789C27.499 4.86533 26.7335 4.56087 25.7005 4.56087C23.1369 4.56087 21.0134 6.57349 21.0134 9.27932C21.0134 11.9852 23.003 13.913 25.3754 13.913C26.5612 13.913 27.4607 13.4902 28.1109 12.6616C28.1109 12.7229 28.1161 12.7799 28.121 12.8346C28.1256 12.8854 28.1301 12.9342 28.1301 12.983C28.1301 14.4373 27.2502 15.2321 25.777 15.2321C24.8349 15.2321 24.1352 14.9821 23.5661 14.7787C23.176 14.6393 22.8472 14.5218 22.5437 14.5218C21.7977 14.5218 21.2429 15.0123 21.2429 15.6887C21.2429 16.7375 22.9072 17.6335 25.6622 17.6335ZM24.1317 9.27932C24.1317 7.94324 24.9928 7.09766 26.1024 7.09766C27.2119 7.09766 28.0918 7.94324 28.0918 9.27932C28.0918 10.6321 27.2311 11.5116 26.1024 11.5116C24.9737 11.5116 24.1317 10.6491 24.1317 9.27932Z\\"/\\u003e\\u003cpath d=\\"M16.8045 11.9512C16.8045 13.2535 17.2637 13.8962 18.2965 13.8962C19.3298 13.8962 19.8079 13.2535 19.8079 11.9512V8.12928C19.8079 5.82936 18.4879 4.62866 16.4027 4.62866C15.1594 4.62866 14.279 4.98375 13.3609 5.88013C12.653 5.05154 11.6581 4.62866 10.3573 4.62866C9.34336 4.62866 8.57809 4.89931 7.9466 5.5079C7.58314 4.9328 7.10506 4.66232 6.51203 4.66232C5.47873 4.66232 5.00066 5.28821 5.00066 6.59049V11.9512C5.00066 13.2535 5.47873 13.8962 6.51203 13.8962C7.54479 13.8962 8.0232 13.2535 8.0232 11.9512V8.90741C8.0232 7.58817 8.44431 6.91179 9.53458 6.91179C10.5104 6.91179 10.893 7.58817 10.893 8.94108V11.9512C10.893 13.2535 11.3711 13.8962 12.4044 13.8962C13.4375 13.8962 13.9157 13.2535 13.9157 11.9512V8.90741C13.9157 7.58817 14.3365 6.91179 15.4269 6.91179C16.4027 6.91179 16.8045 7.58817 16.8045 8.94108V11.9512Z\\"/\\u003e\\u003cpath d=\\"M3.31675 6.59049C3.31675 5.28821 2.83866 4.66232 1.82471 4.66232C0.791758 4.66232 0.313354 5.28821 0.313354 6.59049V11.9512C0.313354 13.2535 0.791758 13.8962 1.82471 13.8962C2.85798 13.8962 3.31675 13.2535 3.31675 11.9512V6.59049Z\\" /\\u003e\\u003cpath d=\\"M1.87209 0.400291C0.843612 0.400291 0 1.1159 0 1.98861C0 2.87869 0.822846 3.57676 1.87209 3.57676C2.90056 3.57676 3.7234 2.87869 3.7234 1.98861C3.7234 1.1159 2.90056 0.400291 1.87209 0.400291Z\\" fill=\\"#1BB76E\\"/\\u003e\\u003c/svg\\u003e\\u003c/a\\u003e", contentPolicyHtml: "User contributions licensed under \\u003ca href=\\"https://stackoverflow.com/help/licensing\\"\\u003eCC BY-SA\\u003c/a\\u003e \\u003ca href=\\"https://stackoverflow.com/legal/acceptable-use-policy\\"\\u003e(content policy)\\u003c/a\\u003e", allowUrls: true, }, onDemand: false, discardSelector: ".discard-answer", enableTables: true, isStacksEditorPreviewEnabled: false ,userId:15588573,enableTables:true,enableSnippets:true }); } });

**Reminder:** Answers generated by artificial intelligence tools are not allowed on Stack Overflow. [Learn more](https://stackoverflow.com/help/ai-policy)

Thanks for contributing an answer to Stack Overflow!

-   Please be sure to _answer the question_. Provide details and share your research!

But _avoid_ …

-   Asking for help, clarification, or responding to other answers.
-   Making statements based on opinion; back them up with references or personal experience.

To learn more, see our [tips on writing great answers](https://stackoverflow.com/help/how-to-answer).

Some of your past answers have not been well-received, and you're in danger of being [blocked from answering](https://stackoverflow.com/help/answer-bans).

Please pay close attention to the following guidance:

-   Please be sure to _answer the question_. Provide details and share your research!

But _avoid_ …

-   Asking for help, clarification, or responding to other answers.
-   Making statements based on opinion; back them up with references or personal experience.

To learn more, see our [tips on writing great answers](https://stackoverflow.com/help/how-to-answer).

Draft saved

Draft discarded

Community wiki

Post Your Answer Discard

##

Not the answer you're looking for? Browse other questions tagged

-   [javascript](https://stackoverflow.com/questions/tagged/javascript "show questions tagged 'javascript'")
-   [typescript](https://stackoverflow.com/questions/tagged/typescript "show questions tagged 'typescript'")
-   [web-scraping](https://stackoverflow.com/questions/tagged/web-scraping "show questions tagged 'web-scraping'")
-   [module](https://stackoverflow.com/questions/tagged/module "show questions tagged 'module'")
-   [puppeteer](https://stackoverflow.com/questions/tagged/puppeteer "show questions tagged 'puppeteer'")

or [ask your own question](https://stackoverflow.com/questions/ask).
