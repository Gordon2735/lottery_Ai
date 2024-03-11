[![Rahman Fadhil](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F172280%2F2c39ff70-42d7-4e63-a200-e5de97fd9256.png)](https://dev.to/rahmanfadhil)

[Rahman Fadhil](https://dev.to/rahmanfadhil)

Posted on Dec 22, 2019 • Originally published at [rahmanfadhil.com](https://rahmanfadhil.com/javascript-unique-id/)

![](https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg) 89 ![](https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg) 19 ![](https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg) ![](https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg) ![](https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg)

# **How to Generate Unique ID in JavaScript**

[#javascript](https://dev.to/t/javascript)

_Read the original article [here](https://rahmanfadhil.com/javascript-unique-id/)_

There are several ways to generate unique identifier in JavaScript. This could very useful in many cases, such as rendering list efficiently, or storing documents or records in database.

## [](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#using-uuid)Using UUID

UUID is the abbreviation of [univerally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier), which is an identification number to uniquely identify something. The main idea of this thing is everytime we generate this numbers, it will be **universally** unique, which means no one could generate the exact same id as yours.

I personally prefer this approach in any case. In JavaScript, we can use a library called `uuid` to generate UUID.

```bash
$ npm install uuid
```

Enter fullscreen mode Exit fullscreen mode

```typescript
const uuidv4 = require('uuid/v4');
```

```typescript
uuidv4();
```

Enter fullscreen mode Exit fullscreen mode

UUID has several versions, but the version that appropriate for generating unique id is version 4. And, that code will generate something like this.

```typescript
1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
```

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#using-mathrandom)Using Math.random

[Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) is a JavaScript built-in function which allows us to generate a random number. Which means that everytime we run it, it will return a unique combination of numbers.

```typescript
Math.floor(Math.random() * 100);
```

Enter fullscreen mode Exit fullscreen mode

`Math.random` always returns a decimal number, so we need to rounding off that number first. By multiply it with 100, it will return any number between 0 to 99. You can increase the number if you want to get better result.

Result:

```typescript
52;
```

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#using-datenow)Using Date.now

[Date.now](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) is another JavaScript built-in function which allows us to get the number of miliseconds elapsed since January 1, 1970.

```typescript
Date.now();
```

Enter fullscreen mode Exit fullscreen mode

Result:

```typescript
1576996323453;
```

Enter fullscreen mode Exit fullscreen mode

## Top comments (29)

Crown

### Sort discussion:

-   [
    Selected Sort Option Top
    Most upvoted and relevant comments will be first
    ](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13?comments_sort=top#toggle-comments-sort-dropdown)
-   [
    Latest
    Most recent comments will be first
    ](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13?comments_sort=latest#toggle-comments-sort-dropdown)
-   [
    Oldest
    The oldest comments will be first
    ](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13?comments_sort=oldest#toggle-comments-sort-dropdown)

Subscribe

    ![pic](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F713708%2F0016d06f-04a4-467a-a54b-10b4d05262f3.jpeg)

Personal Trusted User

[Create template](https://dev.to/settings/response-templates)

Templates let you quickly answer FAQs or store snippets for re-use.

Submit Preview [Dismiss](https://dev.to/404.html)

Collapse Expand

[![peledzohar profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F226237%2F15c9fcea-0929-4346-b584-9ff84902de8d.jpeg)](https://dev.to/peledzohar)

[Zohar Peled](https://dev.to/peledzohar)

Zohar Peled

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F226237%2F15c9fcea-0929-4346-b584-9ff84902de8d.jpeg) Zohar Peled](https://dev.to/peledzohar)

Follow

By day, try to work. By night, try to sleep.

-   Location
    Israel
-   Work
    .Net Developer
-   Joined
    Sep 9, 2019

• [Dec 22 '19 • Edited on Dec 22 • Edited](https://dev.to/peledzohar/comment/j86n)

Dropdown menu

-   [Copy link](https://dev.to/peledzohar/comment/j86n)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/peledzohar/comment/j86n)

A random number is not the same as a unique number. There is absolutely no guarantee of uniqueness in a collection of randomly generated numbers.

`DateTime.Now()` will also not generate a unique number, unless guaranteed not to run at the exact same millisecond. for quite a while now, computers are fast enough to run a few iteration of a loop within a single millisecond.

Like comment: Like comment: 53 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/j86n)

Collapse Expand

[![coderkearns profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F339154%2F00067e59-f516-4c75-8caf-64fc9e7532f4.png)](https://dev.to/coderkearns)

[coderkearns](https://dev.to/coderkearns)

coderkearns

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F339154%2F00067e59-f516-4c75-8caf-64fc9e7532f4.png) coderkearns](https://dev.to/coderkearns)

Follow

-   Joined
    Feb 20, 2020

• [Feb 20 '20](https://dev.to/coderkearns/comment/lm99)

Dropdown menu

-   [Copy link](https://dev.to/coderkearns/comment/lm99)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/coderkearns/comment/lm99)

You could decrease the chances by using multiple of the author's ways:

Maybe

```typescript
function uniqueID() {
return Math.floor(Math.random() \* Date.now())
}
```

You could even string multiple randoms together:

```typescript
Math.floor(Math.random() \* Math.floor(Math.random() \* Date.now()))
```

Like comment: Like comment: 16 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/lm99)

Collapse Expand

[![wolffe profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F455263%2F80394f4f-c71c-4f05-8934-fa745ff10584.jpeg)](https://dev.to/wolffe)

[Ciprian Popescu](https://dev.to/wolffe)

Ciprian Popescu

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F455263%2F80394f4f-c71c-4f05-8934-fa745ff10584.jpeg) Ciprian Popescu](https://dev.to/wolffe)

Follow

I am a WordPress/PHP/JS developer, working as a web engineer for a proptech company in Dublin, Ireland. I have my side projects and I like to experiment with various web technologies.

-   Location
    Dublin, Ireland
-   Work
    Founder at getButterfly.com.
-   Joined
    Aug 19, 2020

• [Mar 11 '22](https://dev.to/wolffe/comment/1mjp1)

Dropdown menu

-   [Copy link](https://dev.to/wolffe/comment/1mjp1)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/wolffe/comment/1mjp1)

Depending on the application, this is the right way to do it. In my case, I don't have a loop, I have several elements being displayed on subsequent clicks, and there's several seconds between each click. So there's zero chances of an identical ID.

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/1mjp1)

Collapse Expand

[![abbatyya profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F452372%2Fe233d6c7-3577-463b-8770-cd37d39edd70.png)](https://dev.to/abbatyya)

[abbatyya](https://dev.to/abbatyya)

abbatyya

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F452372%2Fe233d6c7-3577-463b-8770-cd37d39edd70.png) abbatyya](https://dev.to/abbatyya)

Follow

-   Joined
    Aug 14, 2020

• [Dec 16 '22](https://dev.to/abbatyya/comment/23g26)

Dropdown menu

-   [Copy link](https://dev.to/abbatyya/comment/23g26)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/abbatyya/comment/23g26)

thank you, this work also. to also include string i use Math.floor(Math.random() \* Date.now()).toString(16)

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/23g26)

Collapse Expand

[![mitchneutron profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F644447%2F18c06e79-1d37-41ff-a964-23be6eef75b2.png)](https://dev.to/mitchneutron)

[Mitchell Mortensen](https://dev.to/mitchneutron)

Mitchell Mortensen

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F644447%2F18c06e79-1d37-41ff-a964-23be6eef75b2.png) Mitchell Mortensen](https://dev.to/mitchneutron)

Follow

-   Joined
    Jun 6, 2021

• [Jun 6 '21](https://dev.to/mitchneutron/comment/1f68b)

Dropdown menu

-   [Copy link](https://dev.to/mitchneutron/comment/1f68b)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/mitchneutron/comment/1f68b)

While yes it's theoretically possible for UUID to produce a duplicate, it is statistically improbable (read: impossible) to do so, even when striving for such and taking into account the birthday paradox. According to wikipedia:

"Only after generating 1 billion UUIDs every second for the next 100 years, the probability of creating just one duplicate would be about 50%. Or, to put it another way, the probability of one duplicate would be about 50% if every person on earth owned 600 million UUIDs."  
[en.wikipedia.org/wiki/Universally\_...](https://en.wikipedia.org/wiki/Universally_unique_identifier)

You actually more likely to have a totally unique ID than to have gotten one that anyone has ever seen in the entire world! And it will be this way until the sun runs out of juice.

UUID is the only one that should be used. Date.now() is terrible for reasons that Zohar mentions.

Like comment: Like comment: 3 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/1f68b)

Collapse Expand

[![rahmanfadhil profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F172280%2F2c39ff70-42d7-4e63-a200-e5de97fd9256.png)](https://dev.to/rahmanfadhil)

[Rahman Fadhil](https://dev.to/rahmanfadhil)

Rahman Fadhil

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F172280%2F2c39ff70-42d7-4e63-a200-e5de97fd9256.png) Rahman Fadhil](https://dev.to/rahmanfadhil)

Follow

Developer, Instructor, and Content Creator

-   Location
    Indonesia
-   Work
    Content Creator
-   Joined
    May 27, 2019

• [Dec 22 '19](https://dev.to/rahmanfadhil/comment/j8eh)

Dropdown menu

-   [Copy link](https://dev.to/rahmanfadhil/comment/j8eh)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/rahmanfadhil/comment/j8eh)

I kind of agree 🤔

I think the title should be "how to generate random id"

But, at least I put UUID as the most recommended approach

Like comment: Like comment: 4 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/j8eh)

Collapse Expand

[![peledzohar profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F226237%2F15c9fcea-0929-4346-b584-9ff84902de8d.jpeg)](https://dev.to/peledzohar)

[Zohar Peled](https://dev.to/peledzohar)

Zohar Peled

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F226237%2F15c9fcea-0929-4346-b584-9ff84902de8d.jpeg) Zohar Peled](https://dev.to/peledzohar)

Follow

By day, try to work. By night, try to sleep.

-   Location
    Israel
-   Work
    .Net Developer
-   Joined
    Sep 9, 2019

• [Dec 23 '19](https://dev.to/peledzohar/comment/j8jh)

Dropdown menu

-   [Copy link](https://dev.to/peledzohar/comment/j8jh)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/peledzohar/comment/j8jh)

In fact, random numbers probability of uniqueness is actually a lot smaller than what one can expect, without knowledge of what's called the [birthday problem](https://en.wikipedia.org/wiki/Birthday_problem).

In a nutshell - Take a group of random people. What are the chances two of them was born in the same date (day and month, year not included)?

Turns out, that if the group contains 32 people, that chance is 50%. With 70 people in the group, its 99.9%.

So the chances of getting the same random number twice when your range is between 0 and 100 increase rapidly the larger the group is.

Like comment: Like comment: 4 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/j8jh)

Collapse Expand

[![siddharthshyniben profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F606915%2F600c7d1f-07db-424f-900b-9f7465b1e994.jpg)](https://dev.to/siddharthshyniben)

[Siddharth](https://dev.to/siddharthshyniben)

Siddharth

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F606915%2F600c7d1f-07db-424f-900b-9f7465b1e994.jpg) Siddharth](https://dev.to/siddharthshyniben)

Follow

Making wild out-on-a-limb schemes which can change the world if they work, but probably wont.

-   Email
    [siddharth.muscat@gmail.com](mailto:siddharth.muscat@gmail.com)
-   Location
    Kannur, Kerala, India
-   Joined
    Apr 1, 2021

• [Sep 19 '21](https://dev.to/siddharthshyniben/comment/1i6g8)

Dropdown menu

-   [Copy link](https://dev.to/siddharthshyniben/comment/1i6g8)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/siddharthshyniben/comment/1i6g8)

I just tried the `Date.now()` method, and even when I ran a loop 1000 times, all the "unique" numbers were the same.

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/1i6g8)

Collapse Expand

[![snakebite382 profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1160696%2F16661541-04a8-4811-afd7-6fa4fc11822f.jpeg)](https://dev.to/snakebite382)

[Caelin Limerick](https://dev.to/snakebite382)

Caelin Limerick

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1160696%2F16661541-04a8-4811-afd7-6fa4fc11822f.jpeg) Caelin Limerick](https://dev.to/snakebite382)

Follow

-   Joined
    Sep 13, 2023

• [Sep 13 '23](https://dev.to/snakebite382/comment/29a9k)

Dropdown menu

-   [Copy link](https://dev.to/snakebite382/comment/29a9k)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/snakebite382/comment/29a9k)

That's because it all ran within the same millisecond. `Date.now()` returns time since epoch in ms, so if you run it twice within 1ms the number will be the same since the time since epoch in ms is the same. This is why UUID is a much better approach (like literally the best, universally agreed on approach) however you can still fix this by adding a 1ms delay in your loop, or doing something like multiply by math.random() to add some varation.

Like comment: Like comment: 3 likes Like Thread Thread

[![siddharthshyniben profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F606915%2F600c7d1f-07db-424f-900b-9f7465b1e994.jpg)](https://dev.to/siddharthshyniben)

[Siddharth](https://dev.to/siddharthshyniben)

Siddharth

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F606915%2F600c7d1f-07db-424f-900b-9f7465b1e994.jpg) Siddharth](https://dev.to/siddharthshyniben)

Follow

Making wild out-on-a-limb schemes which can change the world if they work, but probably wont.

-   Email
    [siddharth.muscat@gmail.com](mailto:siddharth.muscat@gmail.com)
-   Location
    Kannur, Kerala, India
-   Joined
    Apr 1, 2021

• [Sep 13 '23](https://dev.to/siddharthshyniben/comment/29a9l)

Dropdown menu

-   [Copy link](https://dev.to/siddharthshyniben/comment/29a9l)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/siddharthshyniben/comment/29a9l)

Yeah that's right!

Also, UUID is slowly being replaced by NanoID - it's faster, smaller (both package size and IDs), URL friendly, and cryptographically more secure (although both of them are secure enough for that to be irrelevant)

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/29a9l)

Collapse Expand

[![forkbomb profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F266265%2F781f3b39-3fcb-4924-a525-bbab9bf2dde4.png)](https://dev.to/forkbomb)

[Joe Buckle](https://dev.to/forkbomb)

Joe Buckle

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F266265%2F781f3b39-3fcb-4924-a525-bbab9bf2dde4.png) Joe Buckle](https://dev.to/forkbomb)

Follow

I'm a developer with over 10 years of commercial experience. I've worked on all areas of the stack (Web and OS) but do not claim to be a specialist in any one single area.

-   Email
    [joe@white-fire.co.uk](mailto:joe@white-fire.co.uk)
-   Location
    Salisbury UK
-   Education
    Self Taught
-   Work
    Independent consultant at White Fire
-   Joined
    Nov 6, 2019

• [Dec 22 '19](https://dev.to/forkbomb/comment/j8b2)

Dropdown menu

-   [Copy link](https://dev.to/forkbomb/comment/j8b2)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/forkbomb/comment/j8b2)

UUID is the goto solution for JS at least.

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/j8b2)

Collapse Expand

[![roblevintennis profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F91802%2F6991b6d7-08de-447e-8f87-3e5d4839ac79.jpeg)](https://dev.to/roblevintennis)

[Rob Levin](https://dev.to/roblevintennis)

Rob Levin

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F91802%2F6991b6d7-08de-447e-8f87-3e5d4839ac79.jpeg) Rob Levin](https://dev.to/roblevintennis)

Follow

Making web things since 1999! Creator of AgnosticUI https://agnosticui.com Illustrator by night :-) Austin, Texas https://developtodesign.com

-   Location
    Austin, Texas
-   Work
    UI Engineer at MasterCard
-   Joined
    Aug 10, 2018

• [May 23 '22](https://dev.to/roblevintennis/comment/1ol48)

Dropdown menu

-   [Copy link](https://dev.to/roblevintennis/comment/1ol48)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/roblevintennis/comment/1ol48)

I was researching this and while I agree uuid package is probably least human error prone, it does mean potentially adding another package.

It seems like utilizing `Date.now().toString` or perhaps `new Date().getTime()` or similar and also `Math.random` could do the trick:

```
const uid = () =>
  String(
    Date.now().toString(32) +
      Math.random().toString(16)
  ).replace(/\./g, '')
```

Enter fullscreen mode Exit fullscreen mode

We can test it by adding generated to a map and comparing size:

```
const size = 1000000
const set = new Set(new Array(size)
  .fill(0)
  .map(() => uid()))

console.log(
  size === set.size ? 'all ids are unique' : `not unique records ${size - set.size}`
)
```

Enter fullscreen mode Exit fullscreen mode

\_\_

Like comment: Like comment: 9 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/1ol48)

Collapse Expand

[![gregorip02 profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F315558%2Fd9e6a716-5d3c-47fc-b6b1-ff25b33bf9be.jpg)](https://dev.to/gregorip02)

[Gregori Piñeres](https://dev.to/gregorip02)

Gregori Piñeres

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F315558%2Fd9e6a716-5d3c-47fc-b6b1-ff25b33bf9be.jpg) Gregori Piñeres](https://dev.to/gregorip02)

Follow

Full-stack engineer 🤓

-   Email
    [gregori.pineres02@gmail.com](mailto:gregori.pineres02@gmail.com)
-   Location
    Mérida, Venezuela.
-   Work
    Full-stack engineer
-   Joined
    Jan 12, 2020

• [Mar 6 '23](https://dev.to/gregorip02/comment/25959)

Dropdown menu

-   [Copy link](https://dev.to/gregorip02/comment/25959)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/gregorip02/comment/25959)

Your script now are in my personal helpers file. thanks.

[![Image description](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjy7x9cwo2368yo7a39y0.png)](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjy7x9cwo2368yo7a39y0.png)

Like comment: Like comment: 3 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/25959)

Collapse Expand

[![justingolden21 profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F92838%2F67d93a9c-de14-4799-ac24-1568b719799d.png)](https://dev.to/justingolden21)

[Justin Golden](https://dev.to/justingolden21)

Justin Golden

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F92838%2F67d93a9c-de14-4799-ac24-1568b719799d.png) Justin Golden](https://dev.to/justingolden21)

Follow

-   Joined
    Aug 14, 2018

• [May 29 '22](https://dev.to/justingolden21/comment/1p18a)

Dropdown menu

-   [Copy link](https://dev.to/justingolden21/comment/1p18a)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/justingolden21/comment/1p18a)

This is the best comment here, and with only one like! A perfect small utility and a way to test it, all super intuitive and functional : )

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/1p18a)

Collapse Expand

[![lpix11 profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F499255%2Ff4c3f393-1cec-4792-9b63-950b44a7d3a8.jpeg)](https://dev.to/lpix11)

[Mohamed Johnson](https://dev.to/lpix11)

Mohamed Johnson

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F499255%2Ff4c3f393-1cec-4792-9b63-950b44a7d3a8.jpeg) Mohamed Johnson](https://dev.to/lpix11)

Follow

-   Joined
    Oct 26, 2020

• [Apr 20 '23](https://dev.to/lpix11/comment/266dk)

Dropdown menu

-   [Copy link](https://dev.to/lpix11/comment/266dk)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/lpix11/comment/266dk)

For anyone trying out the first example with uuid, it works just fine and the module respects the standards, it just evolved and I guess the post did not 😅.  
Anyhow here's the correct implementation

```
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// ... or using CommonJS syntax:
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

Enter fullscreen mode Exit fullscreen mode

Feel free to test it out ^^

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/266dk)

Collapse Expand

[![sujalshah profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1034514%2F8baf4863-1b43-44e9-a4a8-ab8824c6c0d2.png)](https://dev.to/sujalshah)

[Sujal Shah](https://dev.to/sujalshah)

Sujal Shah

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1034514%2F8baf4863-1b43-44e9-a4a8-ab8824c6c0d2.png) Sujal Shah](https://dev.to/sujalshah)

Follow

Hi, I'm Sujal, and I'm a frontend developer with a strong interest in JavaScript and React. I've been working in the field for over 1.5 years and have developed a passion for it.

-   Location
    India
-   Education
    Msc. (CA & IT) from KSSBM
-   Work
    Software Engineer at Zuru Tech
-   Joined
    Feb 26, 2023

• [Jul 7 '23](https://dev.to/sujalshah/comment/27m0o)

Dropdown menu

-   [Copy link](https://dev.to/sujalshah/comment/27m0o)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sujalshah/comment/27m0o)

There is 1 inbuilt method which returns randomUUID  
`window.crypto.randomUUID()`

No 3rd party library, Super fast ⌛

Like comment: Like comment: 3 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/27m0o)

Collapse Expand

[![guiabc profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1011609%2Fe508b4fe-5acc-4ab3-b570-ce46a01c4f57.png)](https://dev.to/guiabc)

[Gui](https://dev.to/guiabc)

Gui

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1011609%2Fe508b4fe-5acc-4ab3-b570-ce46a01c4f57.png) Gui](https://dev.to/guiabc)

Follow

-   Joined
    Jan 20, 2023

• [Jan 20 '23 • Edited on Jan 20 • Edited](https://dev.to/guiabc/comment/248l4)

Dropdown menu

-   [Copy link](https://dev.to/guiabc/comment/248l4)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/guiabc/comment/248l4)

It's my way to generate a 100% guaranted unique and random local id:

```
var MyLib = {
    //Max id guaranted to be unique will be 999 999 999.
    //Add more zeros to increase the value.
    lastUid : 100000000,

    generateUid : function(){
        this.lastUid++;

        //Way to get a random int value betwen min and max:
        //Math.floor(Math.random() * (max - min) ) + min;
        var randValue = Math.floor(Math.random() * (99999 - 10000)) + 10000;

        return Number(this.lastUid.toString() + randValue);
    }
};

console.log(MyLib.generateUid());
```

Enter fullscreen mode Exit fullscreen mode

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/248l4)

Collapse Expand

[![blendsmile profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F420558%2F1fe37c2a-85f4-445b-9c79-f44e713d056f.png)](https://dev.to/blendsmile)

[Blend_Smile](https://dev.to/blendsmile)

Blend_Smile

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F420558%2F1fe37c2a-85f4-445b-9c79-f44e713d056f.png) Blend_Smile](https://dev.to/blendsmile)

Follow

im blend

-   Location
    Indonesia
-   Work
    a student at a school
-   Joined
    Jun 30, 2020

• [Jun 30 '20 • Edited on Jun 30 • Edited](https://dev.to/blendsmile/comment/117ak)

Dropdown menu

-   [Copy link](https://dev.to/blendsmile/comment/117ak)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/blendsmile/comment/117ak)

i never think of using millisecond to generate an id, nice approach!

greetings from indonesia :)

Like comment: Like comment: 4 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/117ak)

Collapse Expand

[![urielbitton profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F300278%2F9ec236e9-dda7-42c4-8afc-7c10e4a061db.jpg)](https://dev.to/urielbitton)

[Uriel Bitton](https://dev.to/urielbitton)

Uriel Bitton

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F300278%2F9ec236e9-dda7-42c4-8afc-7c10e4a061db.jpg) Uriel Bitton](https://dev.to/urielbitton)

Follow

Hi i'm an avid web and app developer in search for creativity and always going after new ideas. Developer of Atomics Digital, Invoice Me and Reactor JS

-   Email
    [urielas@hotmail.com](mailto:urielas@hotmail.com)
-   Location
    Montreal, Canada
-   Education
    Software Engineer at Concordia University, Montreal, Canada
-   Work
    App Developer at Scorpion Edge Designs & Instructor at The Easy Dev
-   Joined
    Dec 24, 2019

• [May 3 '21](https://dev.to/urielbitton/comment/1e5i5)

Dropdown menu

-   [Copy link](https://dev.to/urielbitton/comment/1e5i5)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/urielbitton/comment/1e5i5)

Math.random does neither generate truly random numbers nor are they unique. Its randomness is of course based on the range you provide and that is its own shortcoming. The other methdos you mentioned are a lot more unique and more random.  
Cheers!

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/1e5i5)

Collapse Expand

[![brunotdantas profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F96798%2F85eaf052-f135-4613-83f5-75fffbb08fb8.png)](https://dev.to/brunotdantas)

[Bruno Dantas](https://dev.to/brunotdantas)

Bruno Dantas

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F96798%2F85eaf052-f135-4613-83f5-75fffbb08fb8.png) Bruno Dantas](https://dev.to/brunotdantas)

Follow

-   Joined
    Aug 29, 2018

• [Mar 4 '20](https://dev.to/brunotdantas/comment/m7l9)

Dropdown menu

-   [Copy link](https://dev.to/brunotdantas/comment/m7l9)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/brunotdantas/comment/m7l9)

I was building a local db with [npmjs.com/package/lowdb](https://www.npmjs.com/package/lowdb) just for testing purposes and the Date.now() is more than enough to get an unique id. Thanks Rahman :)

Like comment: Like comment: 3 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/m7l9)

Collapse Expand

[![rohansawant profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F83899%2Fb877deeb-d3a4-4a45-9eaa-f3b3c695a368.jpg)](https://dev.to/rohansawant)

[Rohan Sawant](https://dev.to/rohansawant)

Rohan Sawant

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F83899%2Fb877deeb-d3a4-4a45-9eaa-f3b3c695a368.jpg) Rohan Sawant](https://dev.to/rohansawant)

Follow

Hi! I'm Rohan, a Full Stack Software Engineer, with a background of working with Deep Learning and AI, who loves to use his skills to create products that are at the intersection of all of these!

-   Email
    [rohansawantct83@gmail.com](mailto:rohansawantct83@gmail.com)
-   Location
    Mumbai, India
-   Work
    Software Engineer at SmartCow
-   Joined
    Jul 11, 2018

• [Dec 22 '19](https://dev.to/rohansawant/comment/j83g)

Dropdown menu

-   [Copy link](https://dev.to/rohansawant/comment/j83g)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/rohansawant/comment/j83g)

What a great read!

🔥

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/j83g)

Collapse Expand

[![pranay_rauthu profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F57310%2Fdfcc1bdf-2780-48c3-ac9e-9427f1349cf5.jpg)](https://dev.to/pranay_rauthu)

[pranay rauthu](https://dev.to/pranay_rauthu)

pranay rauthu

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F57310%2Fdfcc1bdf-2780-48c3-ac9e-9427f1349cf5.jpg) pranay rauthu](https://dev.to/pranay_rauthu)

Follow

pranay 💓 🌐

-   Work
    Web Developer at Amazon
-   Joined
    Feb 11, 2018

• [Dec 22 '19](https://dev.to/pranay_rauthu/comment/j8f5)

Dropdown menu

-   [Copy link](https://dev.to/pranay_rauthu/comment/j8f5)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/pranay_rauthu/comment/j8f5)

Check my article related to uuid in JavaScript

[dev.to/pranay_rauthu/uuid-in-javas...](https://dev.to/pranay_rauthu/uuid-in-javascript-obc)

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/j8f5)

Collapse Expand

[![rahmanfadhil profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F172280%2F2c39ff70-42d7-4e63-a200-e5de97fd9256.png)](https://dev.to/rahmanfadhil)

[Rahman Fadhil](https://dev.to/rahmanfadhil)

Rahman Fadhil

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F172280%2F2c39ff70-42d7-4e63-a200-e5de97fd9256.png) Rahman Fadhil](https://dev.to/rahmanfadhil)

Follow

Developer, Instructor, and Content Creator

-   Location
    Indonesia
-   Work
    Content Creator
-   Joined
    May 27, 2019

• [Dec 23 '19](https://dev.to/rahmanfadhil/comment/j8jo)

Dropdown menu

-   [Copy link](https://dev.to/rahmanfadhil/comment/j8jo)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/rahmanfadhil/comment/j8jo)

Wow, great article 🤩

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/j8jo)

Collapse Expand

[![ndotie profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F769252%2F293d41b2-926f-4f4b-b077-bbf9cbbf5114.png)](https://dev.to/ndotie)

[ndotie](https://dev.to/ndotie)

ndotie

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F769252%2F293d41b2-926f-4f4b-b077-bbf9cbbf5114.png) ndotie](https://dev.to/ndotie)

Follow

We take toooo much of coffee.... And spill too much of </> Huh!!

-   Education
    DIT Tanzania
-   Work
    I dont work, i make art
-   Joined
    Dec 6, 2021

• [Aug 12 '23](https://dev.to/ndotie/comment/28gf2)

Dropdown menu

-   [Copy link](https://dev.to/ndotie/comment/28gf2)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/ndotie/comment/28gf2)

Thanks, this is useful

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/28gf2)

Collapse Expand

[![siddiqueco profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F534650%2Fa83c5a54-6ae0-48a6-bfb0-ecc2844e925f.jpeg)](https://dev.to/siddiqueco)

[Abu Bakar Siddique](https://dev.to/siddiqueco)

Abu Bakar Siddique

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F534650%2Fa83c5a54-6ae0-48a6-bfb0-ecc2844e925f.jpeg) Abu Bakar Siddique](https://dev.to/siddiqueco)

Follow

Love to Code in JavaScript

-   Location
    Sylhet, Bangladesh
-   Education
    CSE
-   Joined
    Dec 6, 2020

• [Feb 10 '21](https://dev.to/siddiqueco/comment/1ban8)

Dropdown menu

-   [Copy link](https://dev.to/siddiqueco/comment/1ban8)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/siddiqueco/comment/1ban8)

I think UUID as the most recommended approach

Like comment: Like comment: 0 Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/1ban8)

Collapse Expand

[![artemkirichuk profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F877455%2Febfa210e-c1f5-46b6-afc6-8f79e3ec2ea8.jpeg)](https://dev.to/artemkirichuk)

[Flashinyourbush](https://dev.to/artemkirichuk)

Flashinyourbush

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F877455%2Febfa210e-c1f5-46b6-afc6-8f79e3ec2ea8.jpeg) Flashinyourbush](https://dev.to/artemkirichuk)

Follow

-   Joined
    Jun 15, 2022

• [Jun 15 '22](https://dev.to/artemkirichuk/comment/1pe47)

Dropdown menu

-   [Copy link](https://dev.to/artemkirichuk/comment/1pe47)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/artemkirichuk/comment/1pe47)

nice! Date.now() good resolve

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/1pe47)

Collapse Expand

[![tomassito profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F299311%2Fb87e58c4-9a38-40de-b225-3a6c55dda0ec.png)](https://dev.to/tomassito)

[Tomassito](https://dev.to/tomassito)

Tomassito

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F299311%2Fb87e58c4-9a38-40de-b225-3a6c55dda0ec.png) Tomassito](https://dev.to/tomassito)

Follow

-   Joined
    Dec 23, 2019

• [Dec 23 '19](https://dev.to/tomassito/comment/j913)

Dropdown menu

-   [Copy link](https://dev.to/tomassito/comment/j913)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/tomassito/comment/j913)

No offense Rahman but this article adds to the information noise of the Internet. What we all need is quality over quantity otherwise we're wasting resources. I'm in favour of knowledge and experience sharing but have a feeling that you published this mainly to show somewhere someone that you're authoring. It'd be much more valuable if you read the already published articles on this to see what you can expand on etc. Again, no hard feelings and ego asife. You'll see yourself what I mean when you want to research a given problem and you get many search results like this.

Like comment: Like comment: 9 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/j913)

Collapse Expand

[![jvarness profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F40990%2F8a7a4e07-31aa-499e-bf06-f7ef97b891c3.jpeg)](https://dev.to/jvarness)

[Jake Varness](https://dev.to/jvarness)

Jake Varness

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F40990%2F8a7a4e07-31aa-499e-bf06-f7ef97b891c3.jpeg) Jake Varness](https://dev.to/jvarness)

Follow

Engineering Manager at Storable, husband, father, nerd

-   Education
    Eastern Washington University, BS in Computer Science
-   Work
    Engineering Manager at Storable
-   Joined
    Nov 12, 2017

• [Jun 30 '20](https://dev.to/jvarness/comment/1189b)

Dropdown menu

-   [Copy link](https://dev.to/jvarness/comment/1189b)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/jvarness/comment/1189b)

Or he could just be wanting to post some quick tips on ID generation he knows about. People should be empowered to share what they know so that developers of any skill level can take advantage.

Like comment: Like comment: 9 likes Like [Comment button Reply](https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13/comments/new/1189b)
