# HTML5 <details> Tag

Last Updated : 29 Jan, 2024

**HTML <details> Tag** is used for the content/information which is initially hidden but could be displayed if the user wishes to see it. This tag is used to create an interactive widget that the user can **open or close.**

It is used with the [`<summary>`](https://www.geeksforgeeks.org/html-5-summary-tag/) tag, which provides the title or header for the details section. It’s generally used for FAQs, dropdown menus, or to show/hide additional content.

## **Syntax**

```html
<details>
    <summary>  Text content  </summary>
    <div> Content... >
</details>
```

## **Attribute**

[**details open**](https://www.geeksforgeeks.org/html-details-open-attribute/)

The detail tag has an attribute called \***\*open\*\*** which is used to display the hidden information by default.

## **Event**

[**toggle event**](https://www.geeksforgeeks.org/how-to-toggle-an-element-class-in-javascript/)

It’s a feature allowing hiding or showing extra information by interaction with the summary in HTML details

## Supported Attributes

This tag is new in [HTML5](https://www.geeksforgeeks.org/html5-introduction/) and also supports the [Global Attributes](https://www.geeksforgeeks.org/html-global-attributes/) and [Event Attributes](https://www.geeksforgeeks.org/html-event-attributes-complete-reference/) in HTML.

**Example**: Implementation of details tag in HTML.

-   HTML

## HTML

```html
<table border="0" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td class="code">
                <div class="container">
                    <div class="line number1 index0 alt2">
                        <code class="plain">&lt;!DOCTYPE html&gt;</code>
                    </div>
                    <div class="line number2 index1 alt1">
                        <code class="plain">&lt;</code
                        ><code class="keyword">html</code>
                        <code class="color1">lang</code
                        ><code class="plain">=</code
                        ><code class="string">"en"</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number3 index2 alt2">
                        <code class="plain">&lt;</code
                        ><code class="keyword">html</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number4 index3 alt1">&nbsp;</div>
                    <div class="line number5 index4 alt2">
                        <code class="plain">&lt;</code
                        ><code class="keyword">body</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number6 index5 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">h1</code
                        ><code class="plain">&gt;GeeksforGeeks&lt;/</code
                        ><code class="keyword">h1</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number7 index6 alt2">
                        <code class="undefined spaces">&nbsp;&nbsp;</code>&nbsp;
                    </div>
                    <div class="line number8 index7 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="comments"
                            >&lt;!-- details tag starts here --&gt;</code
                        >
                    </div>
                    <div class="line number9 index8 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">details</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number10 index9 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">summary</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number11 index10 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">GeeksforGeeks</code>
                    </div>
                    <div class="line number12 index11 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;/</code
                        ><code class="keyword">summary</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number13 index12 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">p</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number14 index13 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain"
                            >A computer science portal for geeks</code
                        >
                    </div>
                    <div class="line number15 index14 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;/</code
                        ><code class="keyword">p</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number16 index15 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">div</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number17 index16 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain"
                            >It is a computer science portal</code
                        >
                    </div>
                    <div class="line number18 index17 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain"
                            >where you can learn programming.</code
                        >
                    </div>
                    <div class="line number19 index18 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;/</code
                        ><code class="keyword">div</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number20 index19 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        >&nbsp;
                    </div>
                    <div class="line number21 index20 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="comments"
                            >&lt;!-- details tag ends here --&gt;</code
                        >
                    </div>
                    <div class="line number22 index21 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;/</code
                        ><code class="keyword">details</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number23 index22 alt2">
                        <code class="plain">&lt;/</code
                        ><code class="keyword">body</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number24 index23 alt1">&nbsp;</div>
                    <div class="line number25 index24 alt2">
                        <code class="plain">&lt;/</code
                        ><code class="keyword">html</code
                        ><code class="plain">&gt;</code>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
```

**Output**:

![Create a Perfect Portfolio as a Content Writer | GeeksforGeeks](https://content1.avplayer.com/63f61879c01d725811007616/videos/66051d72ff657b2394068bc6/4450c3fd-3680-445a-bea4-339f2bc1e1e0.webp)

![wsd](https://media.geeksforgeeks.org/wp-content/uploads/20231229085412/wsd.gif)

**Example 2**: Use of the open attribute with the details tag.

-   HTML

## HTML

```html
<table border="0" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td class="code">
                <div class="container">
                    <div class="line number1 index0 alt2">
                        <code class="plain">&lt;!DOCTYPE html&gt;</code>
                    </div>
                    <div class="line number2 index1 alt1">
                        <code class="plain">&lt;</code
                        ><code class="keyword">html</code>
                        <code class="color1">lang</code
                        ><code class="plain">=</code
                        ><code class="string">"en"</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number3 index2 alt2">&nbsp;</div>
                    <div class="line number4 index3 alt1">
                        <code class="plain">&lt;</code
                        ><code class="keyword">head</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number5 index4 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">title</code
                        ><code class="plain">&gt;HTML5 details Tag&lt;/</code
                        ><code class="keyword">title</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number6 index5 alt1">
                        <code class="plain">&lt;/</code
                        ><code class="keyword">head</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number7 index6 alt2">&nbsp;</div>
                    <div class="line number8 index7 alt1">
                        <code class="plain">&lt;</code
                        ><code class="keyword">body</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number9 index8 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">h1</code
                        ><code class="plain">&gt;GeeksforGeeks&lt;/</code
                        ><code class="keyword">h1</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number10 index9 alt1">&nbsp;</div>
                    <div class="line number11 index10 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="comments"
                            >&lt;!-- details open tag starts here --&gt;</code
                        >
                    </div>
                    <div class="line number12 index11 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">details</code>
                        <code class="plain">open&gt;</code>
                    </div>
                    <div class="line number13 index12 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">summary</code
                        ><code class="plain">&gt;GeeksforGeeks&lt;/</code
                        ><code class="keyword">summary</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number14 index13 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">p</code
                        ><code class="plain"
                            >&gt;A computer science portal for geeks&lt;/</code
                        ><code class="keyword">p</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number15 index14 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;</code
                        ><code class="keyword">div</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number16 index15 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain"
                            >It is a computer science portal</code
                        >
                    </div>
                    <div class="line number17 index16 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain"
                            >where you can learn programming.</code
                        >
                    </div>
                    <div class="line number18 index17 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;/</code
                        ><code class="keyword">div</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number19 index18 alt2">&nbsp;</div>
                    <div class="line number20 index19 alt1">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="comments"
                            >&lt;!-- details open tag ends here --&gt;</code
                        >
                    </div>
                    <div class="line number21 index20 alt2">
                        <code class="undefined spaces"
                            >&nbsp;&nbsp;&nbsp;&nbsp;</code
                        ><code class="plain">&lt;/</code
                        ><code class="keyword">details</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number22 index21 alt1">
                        <code class="plain">&lt;/</code
                        ><code class="keyword">body</code
                        ><code class="plain">&gt;</code>
                    </div>
                    <div class="line number23 index22 alt2">&nbsp;</div>
                    <div class="line number24 index23 alt1">
                        <code class="plain">&lt;/</code
                        ><code class="keyword">html</code
                        ><code class="plain">&gt;</code>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
```

**Output**:

![wsd](https://media.geeksforgeeks.org/wp-content/uploads/20231229090927/wsd.gif)

## **Supported Browsers**

-   Google Chrome 12
-   Edge 79
-   Firefox 49
-   Opera 15
-   Safari 6

“This course was packed with amazing and well-organized content! The project-based approach of this course made it even better to understand concepts faster. Also the instructor in the live classes is really good and knowledgeable.”- **Tejas | Deutsche Bank**

With our revamped [Full Stack Development Program](https://www.geeksforgeeks.org/courses/full-stack-node?utm_source=geeksforgeeks&utm_medium=article_bottom_text_fullstacktags&utm_campaign=courses): **master Node.js and React that enables you to create dynamic web applications**.

So get ready for salary hike only with our [Full Stack Development Course](https://www.geeksforgeeks.org/courses/full-stack-node?utm_source=geeksforgeeks&utm_medium=article_bottom_text_fullstacktags&utm_campaign=courses).

[R](https://auth.geeksforgeeks.org/user/RahulRanjan4/articles?utm_source=geeksforgeeks&utm_medium=article_author&utm_campaign=auth_user)

[RahulRanjan4](https://auth.geeksforgeeks.org/user/RahulRanjan4/articles?utm_source=geeksforgeeks&utm_medium=article_author&utm_campaign=auth_user)

[Previous Article](https://www.geeksforgeeks.org/html-del-tag/?ref=previous_article)

[HTML <del> Tag](https://www.geeksforgeeks.org/html-del-tag/?ref=previous_article)

[Next Article](https://www.geeksforgeeks.org/html5-dialog-tag/?ref=next_article)

[HTML5 <dialog> Tag](https://www.geeksforgeeks.org/html5-dialog-tag/?ref=next_article)

### Please Login to comment...

### Similar Reads
