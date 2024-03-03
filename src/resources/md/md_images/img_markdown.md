[![David Boureau](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F561240%2F4232d2c5-c77b-4caa-a8ab-9e85c10309da.png)](https://dev.to/bdavidxyz)

[David Boureau](https://dev.to/bdavidxyz)

Posted on Nov 29, 2021 • Updated on Jan 18

![](https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg) 5 ![](https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg) 1 ![](https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg) ![](https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg) ![](https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg)

# **Markdown : Center Image**

[#markdown](https://dev.to/t/markdown) [#webdev](https://dev.to/t/webdev) [#beginners](https://dev.to/t/beginners)

The goal of this article is to help you to center an image in your markdown file, for example when you use a README.md file at the root of your open-source project, that browser will actually display as HTML.

## [](https://dev.to/bdavidxyz/markdown-center-image-39j1#bad-news-first)Bad news first

Markdown doesn't allow you to tweak alignment directly.

In fact, it would be against the Markdown principles to allow such formatting, as stated in the "Philosophy" section.

> A Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.
>
> — John Gruber, The Daring Fireball Company LLC
>
> Markdown is not a replacement for HTML, or even close to it. Its syntax is very small, corresponding only to a very small subset of HTML tags. The idea is not to create a syntax that makes it easier to insert HTML tags.
>
> — John Gruber, The Daring Fireball Company LLC

## [](https://dev.to/bdavidxyz/markdown-center-image-39j1#classic-picture-insertion-thanks-to-markdown)Classic picture insertion thanks to markdown

This markdown code :

!\[\](https://res.cloudinary.com/bdavidxyz-com/image/upload/v1637503750/bootstrap/admin\_crudZ3.png)

Will produce the following output

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--I1pSfvSe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://res.cloudinary.com/bdavidxyz-com/image/upload/v1637503750/bootstrap/admin_crudZ3.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--I1pSfvSe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://res.cloudinary.com/bdavidxyz-com/image/upload/v1637503750/bootstrap/admin_crudZ3.png)

Screenshot from Bootiful (figcaption not part of the generated markdown alas).

Whereas this markdown code :

!\[A random screenshot\](https://res.cloudinary.com/bdavidxyz-com/image/upload/v1637503750/bootstrap/admin\_crudZ3.png)

Will produce the following output

[![A random screenshot](https://res.cloudinary.com/practicaldev/image/fetch/s--I1pSfvSe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://res.cloudinary.com/bdavidxyz-com/image/upload/v1637503750/bootstrap/admin_crudZ3.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--I1pSfvSe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://res.cloudinary.com/bdavidxyz-com/image/upload/v1637503750/bootstrap/admin_crudZ3.png)

Same screenshot as above (figcaption not part of the generated markdown alas).

Visually no difference, but screen readers can read what the image is about, thanks to the "alt" attribute added.

## [](https://dev.to/bdavidxyz/markdown-center-image-39j1#how-to-center-the-image-with-markdown)How to center the image with markdown

You can't do this by **only** relying on Markdown syntax. Markdown doesn't care about positioning.

So you will have to use something else, and now the good news is that Markdown, in theory, supports plain HTML. In other words, HTML can be considered as Markdown language.

Be aware that there is no guarantee the picture will actually be centered if the document isn't read through a browser (Visual Studio Web Essentials Markdown preview, Sublime Text Markdown preview, and so on).

**Depending on you environment, one of the following solution could work**

## [](https://dev.to/bdavidxyz/markdown-center-image-39j1#solution-1-html-attributes-with-markdown)Solution 1 : HTML attributes with Markdown

You add extra brackets to the Markdown, and it will be transformed into attributes :

!\[Picture\](Picture.svg){ width="800" height="600" style="display: block; margin: 0 auto" }

Could be rendered like this :

<img src\="Picture.svg"
alt\="Picture"
width\="800"
height\="600"
style\="display: block; margin: 0 auto" />

## [](https://dev.to/bdavidxyz/markdown-center-image-39j1#solution-2-use-the-align-deprecated-attribute)Solution 2 : use the "align" deprecated attribute

This is not recommended, but in some cases this is the only way to center the image. Insert this HTML snippet into your markdown file.

<p align\="center"\>
    <img src\="..."\>
p\>

You can also try to put the "align" attribute directly into the "img" tag.

## [](https://dev.to/bdavidxyz/markdown-center-image-39j1#solution-3-centering-image-using-css-where-you-have-control-over-css-styles)Solution 3 : centering image using CSS where you have control over CSS styles

### [](https://dev.to/bdavidxyz/markdown-center-image-39j1#31-apply-to-all-images)3.1 Apply to all images

As long as CSS is not explicitly forbidden, you can try as follow :

img {
display: block;
float: none;
margin-left: auto;
margin-right: auto;
width: 50%;
}

### [](https://dev.to/bdavidxyz/markdown-center-image-39j1#32-target-specific-image-with-url-hash)3.2 Target specific image with URL hash

!\[img\](/img/any.jpg#center)

img\[src\*='#center'\] {
display: block;
margin: auto;
}

## [](https://dev.to/bdavidxyz/markdown-center-image-39j1#a-few-words-about-markdown)A few words about Markdown

For any markup that does not exist in the Markdown-defined syntax, you can just use HTML itself. There is no need to indicate or show that you’re switching from Markdown to HTML; you just use the usual tags. There is no order in which you can actually use the tag. You start either by Markdown, or HTML.

Note that Markdown formatting syntax will not be processed inside an HTML tag. For example, you can't use Markdown-style **bold** inside an HTML block.

## [](https://dev.to/bdavidxyz/markdown-center-image-39j1#credits)Credits

-   [https://stackoverflow.com/a/12091563/2595513](https://stackoverflow.com/a/12091563/2595513)
-   [https://stackoverflow.com/a/62383408/2595513](https://stackoverflow.com/a/62383408/2595513)
-   [https://daringfireball.net/projects/markdown/syntax](https://daringfireball.net/projects/markdown/syntax)

## Top comments (5)

Crown

### Sort discussion:

-   [
    Selected Sort Option Top
    Most upvoted and relevant comments will be first
    ](https://dev.to/bdavidxyz/markdown-center-image-39j1?comments_sort=top#toggle-comments-sort-dropdown)
-   [
    Latest
    Most recent comments will be first
    ](https://dev.to/bdavidxyz/markdown-center-image-39j1?comments_sort=latest#toggle-comments-sort-dropdown)
-   [
    Oldest
    The oldest comments will be first
    ](https://dev.to/bdavidxyz/markdown-center-image-39j1?comments_sort=oldest#toggle-comments-sort-dropdown)

Subscribe

    ![pic](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F713708%2F0016d06f-04a4-467a-a54b-10b4d05262f3.jpeg)

Personal Trusted User

[Create template](https://dev.to/settings/response-templates)

Templates let you quickly answer FAQs or store snippets for re-use.

Submit Preview [Dismiss](https://dev.to/404.html)

Collapse Expand

[![mccurcio profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F104778%2F83006b19-39d2-4510-8ed0-99faf0ef18bf.jpg)](https://dev.to/mccurcio)

[Matt Curcio](https://dev.to/mccurcio)

Matt Curcio

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F104778%2F83006b19-39d2-4510-8ed0-99faf0ef18bf.jpg) Matt Curcio](https://dev.to/mccurcio)

Follow

Scientist able to bridge multiple disciplines seeks position in data science.

-   Email
    [matt.curcio.ri@gmail.com](mailto:matt.curcio.ri@gmail.com)
-   Location
    MA, USA
-   Education
    Self-Taught Data Scientist with scientific background
-   Joined
    Sep 27, 2018

• [Nov 29 '21](https://dev.to/mccurcio/comment/1k58p)

Dropdown menu

-   [Copy link](https://dev.to/mccurcio/comment/1k58p)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/mccurcio/comment/1k58p)

Great!.  
I work with markdown a lot and find myself looking for this one every week.  
Thanks

Like comment: Like comment: 4 likes Like [Comment button Reply](https://dev.to/bdavidxyz/markdown-center-image-39j1#/bdavidxyz/markdown-center-image-39j1/comments/new/1k58p)

Collapse Expand

[![joestrout profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F955389%2Ffdd96374-bc61-43f2-bf73-c2d6d6968a72.png)](https://dev.to/joestrout)

[JoeStrout](https://dev.to/joestrout)

JoeStrout

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F955389%2Ffdd96374-bc61-43f2-bf73-c2d6d6968a72.png) JoeStrout](https://dev.to/joestrout)

Follow

Creator of the MiniScript programming language and Mini Micro retro-styled virtual computer.

-   Education
    MS in CS at Colorado State University; MS in Neuroscience at UCSD
-   Work
    lead software engineer at Luminary Apps, LLC
-   Joined
    Oct 25, 2022

• [Dec 17 '22](https://dev.to/joestrout/comment/23ggb)

Dropdown menu

-   [Copy link](https://dev.to/joestrout/comment/23ggb)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/joestrout/comment/23ggb)

Which (if any) of these actually work here on dev.to?

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/bdavidxyz/markdown-center-image-39j1#/bdavidxyz/markdown-center-image-39j1/comments/new/23ggb)

Collapse Expand

[![gogorichie profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F169412%2F290e2c47-aaa9-410b-b19c-61eb6ab4452f.jpg)](https://dev.to/gogorichie)

[Richard Lewis](https://dev.to/gogorichie)

Richard Lewis

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F169412%2F290e2c47-aaa9-410b-b19c-61eb6ab4452f.jpg) Richard Lewis](https://dev.to/gogorichie)

Follow

Been hacking hardware and code since '95. Set my 1st PC on fire at 8 got my A+ Cert at 15. I'm a Dev, BA, DBA, SysAdmin, TV Producer, Community Organizer & Motivational Speaker some days of the week.

-   Location
    Chicago, Illinois USA
-   Work
    Azure & DevOps Consultant
-   Joined
    May 19, 2019

• [Jun 25 '22](https://dev.to/gogorichie/comment/1pl3i)

Dropdown menu

-   [Copy link](https://dev.to/gogorichie/comment/1pl3i)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/gogorichie/comment/1pl3i)

Thanks for sharing your knowledge this was really helpful!

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/bdavidxyz/markdown-center-image-39j1#/bdavidxyz/markdown-center-image-39j1/comments/new/1pl3i)

Collapse Expand

[![leon0824 profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F92118%2F0ba206fe-abb3-4220-9aad-65732e2d40b5.jpeg)](https://dev.to/leon0824)

[Leon](https://dev.to/leon0824)

Leon

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F92118%2F0ba206fe-abb3-4220-9aad-65732e2d40b5.jpeg) Leon](https://dev.to/leon0824)

Follow

-   Joined
    Aug 12, 2018

• [Nov 29 '21](https://dev.to/leon0824/comment/1k5b5)

Dropdown menu

-   [Copy link](https://dev.to/leon0824/comment/1k5b5)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/leon0824/comment/1k5b5)

Is the 'extra brackets' widely adopted in most Markdown processor?

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/bdavidxyz/markdown-center-image-39j1#/bdavidxyz/markdown-center-image-39j1/comments/new/1k5b5)

Collapse Expand

[![bdavidxyz profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F561240%2F4232d2c5-c77b-4caa-a8ab-9e85c10309da.png)](https://dev.to/bdavidxyz)

[David Boureau](https://dev.to/bdavidxyz)

David Boureau

[![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F561240%2F4232d2c5-c77b-4caa-a8ab-9e85c10309da.png) David Boureau](https://dev.to/bdavidxyz)

Follow

Rails & JS dev. Build products.

-   Location
    Nantes, France.
-   Joined
    Jan 16, 2021

• [Nov 29 '21](https://dev.to/bdavidxyz/comment/1k5cj)

Dropdown menu

-   [Copy link](https://dev.to/bdavidxyz/comment/1k5cj)

-   Hide

-   [Report abuse](https://dev.to/report-abuse?url=https://dev.to/bdavidxyz/comment/1k5cj)

Probably not, since it's not in the official docs. All solutions listed could work, but could also fail. This is why I Iisted many of them.

Like comment: Like comment: 3 likes Like [Comment button Reply](https://dev.to/bdavidxyz/markdown-center-image-39j1#/bdavidxyz/markdown-center-image-39j1/comments/new/1k5cj)

[Code of Conduct](https://dev.to/code-of-conduct) • [Report abuse](https://dev.to/report-abuse)
