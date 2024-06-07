-   [Design & UX](https://www.sitepoint.com/design-ux/)
-   [HTML & CSS](https://www.sitepoint.com/design-ux/design-html-css/)
-   20 Simple Ways to Style the HTML details Element

[![Ralph Mason](https://uploads.sitepoint.com/wp-content/uploads/2015/05/1430879451rm-96x96.png)](https://www.sitepoint.com/author/rmason/)[Ralph Mason](https://www.sitepoint.com/author/rmason/)

October 26, 2023

# 20 Simple Ways to Style the HTML details Element

[CSS](https://www.sitepoint.com/html-css/css/)[Design & UX](https://www.sitepoint.com/design-ux/)[HTML & CSS](https://www.sitepoint.com/html-css/)[HTML & CSS](https://www.sitepoint.com/design-ux/design-html-css/)[HTML5](https://www.sitepoint.com/html-css/html5-html-css/)

Share this article

![20 Simple Ways to Style the HTML details Element](https://uploads.sitepoint.com/wp-content/uploads/2023/10/1697843489style-html-details-element.jpg)

Table of Contents

-   [Introducing the details Element](https://www.sitepoint.com/style-html-details-element/#introducingthedetailselement)
-   [Background Colors, Borders and Padding](https://www.sitepoint.com/style-html-details-element/#backgroundcolorsbordersandpadding)
-   [Styling the Marker](https://www.sitepoint.com/style-html-details-element/#stylingthemarker)
-   [Creating a Custom Marker for the summary Element](https://www.sitepoint.com/style-html-details-element/#creatingacustommarkerforthesummaryelement)
-   [Miscellaneous Extras](https://www.sitepoint.com/style-html-details-element/#miscellaneousextras)
-   [Conclusion](https://www.sitepoint.com/style-html-details-element/#conclusion)

**In this article, we’ll look at some simple ways to style the HTML `<details>` element, which is a very useful element for revealing and hiding bits of content on a web page.**

Video Player is loading.

PlayNext

Mute

Current Time 0:04

/

Duration 2:00

Loaded: 3.34%

0:04

Stream Type LIVE

Seek to live, currently behind liveLIVE

Remaining Time \-1:56

1x

Playback Rate

Chapters

-   Chapters

Descriptions

-   descriptions off, selected

Captions

-   captions settings, opens captions settings dialog
-   captions off, selected

Audio Track

-   English
-   SoundHandler, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanTransparencyOpaqueSemi-Transparent

BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanTransparencyOpaqueSemi-TransparentTransparent

WindowColorBlackWhiteRedGreenBlueYellowMagentaCyanTransparencyTransparentSemi-TransparentOpaque

Font Size50%75%100%125%150%175%200%300%400%

Text Edge StyleNoneRaisedDepressedUniformDropshadow

Font FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall Caps

Reset restore all settings to the default valuesDone

Close Modal Dialog

End of dialog window.

Backward Skip 10sPlay VideoPause VideoForward Skip 10s

: 0:15

(function () { try { var bundleUrl = 'https://cdn.adpushup.com/45400/apInstreamBundle.js'; var queryParamsString = window.location.search; var sectionId = "a7e73b7a-7523-44c6-b5cd-6156583c9180"; var adContainer = document.getElementById(sectionId); var scr = document.createElement("script"); scr.type = "text/javascript"; scr.language = "javascript"; adContainer.style.visibility = "hidden"; scr.src = bundleUrl; adContainer.appendChild(scr); } catch (error) { console.log(error.message); } })();

It’s handy to have a simple disclosure element in HTML that doesn’t require JavaScript, but the default styling of the `<details>` element might be a turn-off for some. Fortunately, it’s quite easy to change the styling of this element.

The table of contents below is an example of the `<details>` element in use. We’ve added a simple border to it, along with some padding.

Table of Contents

-   [Introducing the details Element](https://www.sitepoint.com/style-html-details-element/#introducingthedetailselement)
-   [Background Colors, Borders and Padding](https://www.sitepoint.com/style-html-details-element/#backgroundcolorsbordersandpadding)
    -   [Adding a border](https://www.sitepoint.com/style-html-details-element/#addingaborder)
    -   [Adding some background color](https://www.sitepoint.com/style-html-details-element/#addingsomebackgroundcolor)
-   [Styling the Marker](https://www.sitepoint.com/style-html-details-element/#stylingthemarker)
    -   [Changing the marker color](https://www.sitepoint.com/style-html-details-element/#changingthemarkercolor)
    -   [Changing the marker spacing](https://www.sitepoint.com/style-html-details-element/#changingthemarkerspacing)
    -   [Changing the marker shape](https://www.sitepoint.com/style-html-details-element/#changingthemarkershape)
-   [Creating a Custom Marker for the summary Element](https://www.sitepoint.com/style-html-details-element/#creatingacustommarkerforthesummaryelement)
    -   [Removing the custom marker](https://www.sitepoint.com/style-html-details-element/#removingthecustommarker)
    -   [Using a background image as a marker](https://www.sitepoint.com/style-html-details-element/#usingabackgroundimageasamarker)
    -   [Using a background image as a marker with ::after](https://www.sitepoint.com/style-html-details-element/#usingabackgroundimageasamarkerwithafter)
    -   [Making the summary element look like a tab](https://www.sitepoint.com/style-html-details-element/#makingthesummaryelementlooklikeatab)
    -   [Limiting the width of the details element](https://www.sitepoint.com/style-html-details-element/#limitingthewidthofthedetailselement)
    -   [Placing the marker arrow at the far end of the summary](https://www.sitepoint.com/style-html-details-element/#placingthemarkerarrowatthefarendofthesummary)
    -   [Using ::after as a marker without a background image](https://www.sitepoint.com/style-html-details-element/#usingafterasamarkerwithoutabackgroundimage)
-   [Miscellaneous Extras](https://www.sitepoint.com/style-html-details-element/#miscellaneousextras)
    -   [Hover effect on the details element](https://www.sitepoint.com/style-html-details-element/#hovereffectonthedetailselement)
    -   [Animating the opening and closing of the details element](https://www.sitepoint.com/style-html-details-element/#animatingtheopeningandclosingofthedetailselement)
    -   [Changing summary content in open and closed states](https://www.sitepoint.com/style-html-details-element/#changingsummarycontentinopenandclosedstates)
    -   [Changing the summary cursor](https://www.sitepoint.com/style-html-details-element/#changingthesummarycursor)
    -   [Changing the accessibility focus styles](https://www.sitepoint.com/style-html-details-element/#changingtheaccessibilityfocusstyles)
    -   [Using multiple details elements like an accordion list](https://www.sitepoint.com/style-html-details-element/#usingmultipledetailselementslikeanaccordionlist)
    -   [Styling a heading inside the summary](https://www.sitepoint.com/style-html-details-element/#stylingaheadinginsidethesummary)
-   [Conclusion](https://www.sitepoint.com/style-html-details-element/#conclusion)

## Introducing the details Element

Here’s the basic code for the `<details>` element:

```markup
<details>
  <summary>Click me!</summary>
  <p>Peekaboo! Here's some hidden content!</p>
</details>
```

Basically any HTML content can be placed inside the `<details>` element. The `<summary>` element provides the prompt for the user to click on the element to reveal more content, and it must be the first child of the `<details>` element.

Here’s a live example of this code:

Click me!

Peekaboo! Here’s some hidden content!

Let’s look at all the ways we can use CSS to enhance the appearance of our `<details>` element.

## Background Colors, Borders and Padding

A really simple way to enhance the look of the `<details>` element is to add some padding along with a border or some background colors.

### Adding a border

As shown in the table of contents above, a simple border can do a lot to enhance and define the `<details>` element, along with some padding and a slight border radius:

```css
details {
    padding: 10px;
    border: 5px solid #f7f7f7;
    border-radius: 3px;
}
```

That’s the simple code we’ve used above to style our ToC.

### Adding some background color

Let’s add a background color to our `<details>` element instead of a border:

```css
details {
    padding: 10px;
    background-color: #e4eaef;
    border-radius: 5px;
}
```

The result is shown in the Pen below.

The background color gives the element better definition, and the padding helps to create some space inside it.

We can also give a different background color to the `<summary>` element to distinguish it from the rest of the content, and change its text color:

```css
summary {
    background-color: #2196f3;
    color: white;
    padding: 10px;
}
```

Note that changing the text color of the `<summary>` element also changes the color of the marker arrow. That’s because the marker is actually attached to the `<summary>` element just as markers (such as bullets) are attached to list items. We’ll see below how to style them separately.

## Styling the Marker

The `<summary>` element is set to a `display` of `list-item`. So the default arrow (▶) that comes with it can be altered just like the default markers on HTML list items. We can change the character that’s used, and independently change its color.

### Changing the marker color

Let’s set the default marker to a different color. Just for fun, let’s also bump up the font size of the marker. We can do this with the `::marker` pseudo-element:

```css
summary::marker {
    color: #e162bf;
    font-size: 1.2em;
}
```

The result is shown below.

It’s a nice, simple solution, although `::marker` unfortunately _isn’t supported in Safari_, so see other options below if that’s a dealbreaker.

### Changing the marker spacing

By default, the marker arrow is pretty close to the summary text. Its `list-style-position` is set to `inside`. If we change it to `outside`, we can add space between the summary text and the marker by adding some left padding. We also need to add some left margin so that the triangle doesn’t hang outside the container:

```css
summary {
    list-style-position: outside;
    margin-left: 30px;
    padding: 10px 10px 10px 20px;
    border-radius: 5px;
}
```

The result is shown below.

I’ve exaggerated the spacing between the arrow marker and the summary text just to make it obvious. Unfortunately, using `list-style-position: outside;` with the `<summary>` element doesn’t work in Safari. Fortunately, there are other options, as we’ll see below.

### Changing the marker shape

The marker on our `<summary>` element doesn’t have to be a triangle. We can replace it with any character we please:

```css
summary {
    list-style-type: '⬇ ';
}
```

Note that we’ve used `'⬇ '` (with a space next to the arrow), which is an alternative to the spacing we tried above.

We now have a down arrow instead of a triangle. **But …** that down arrow won’t change when the `<details>` element is open. That’s because the `<details>` element has two states — `closed` and `open` — and we’ve only set the marker style for the `closed` state. So let’s also set a marker for the `open` state:

```css
details[open] > summary {
    list-style-type: '⬆ ';
}
```

This time, we’ve used an up-pointing arrow. This gives us the result shown below.

Damn! Once again, Safari lets us down, as it doesn’t support `list-style-type` on the `<summary>` element either. Don’t despair, though, as we’ll look at fancier solutions below.

We can try all sorts of other characters, such as + and –, ✓ and Χ or ✗, ⋁ and ⋀ , and even have fun with other characters like ★ or colorful fruits like 🍏 🍌 🍓 🍋 and 🍐, but remember that these characters may not work on all systems, so be a little careful, and once again, `list-style-type` certainly won’t work in Safari.

## Creating a Custom Marker for the summary Element

As we saw above, even though we _can_ set a different character for the default marker, and give it styles such as color and font size, there can be issues with doing so. A better option might be to remove the marker altogether and create a completely custom alternative.

### Removing the custom marker

As with list item markers, we can remove the marker altogether:

```css
summary {
    list-style: none;
}

/* sigh, Safari again */

summary::-webkit-details-marker {
    display: none;
}
```

The standard `list-style: none` works on all browsers except … (can you guess?) … Safari. At least there’s a proprietary `-webkit-` option in this case.

[![Learn to Code with JavaScript](https://cdn.sanity.io/images/708bnrs8/production/9144078672758630a953e5d4989247863d85dbdf-768x260.png?w=768&h=260&auto=format)](https://www.sitepoint.com/premium/books/learn-to-code-with-javascript/?ref_source=bpp)

_Note: another way to remove the marker from the `<summary>` element is to give the `<summary>` element a `display` value of something other than `list-item` — such as `block` or `flex`. This works in every browser except … (do I even need to say it?) … Safari._

Now our element has no marker.

Having no marker gives no visual prompt at all that this element is clickable, so it’s not a great idea to leave it at that.

### Using a background image as a marker

We could place an image on the background, like so:

```css
summary {
    list-style: none;
    padding: 10px 10px 10px 40px;
    background: url(arrow.svg) no-repeat 14px 50%;
    background-size: 18px;
    font-weight: bold;
}
```

The result is shown below.

The downside of using a background image directly on the `<summary>` element is that we can’t rotate it when the `<details>` element is open, because [animations can’t be set directly on background images in CSS](https://www.sitepoint.com/css3-transform-background-image/). (We could, of course, use a different image for the open state, but we still couldn’t animate it, which is much more fun.) So if we’re going to use a background image, it’s better to place it on an element that _can_ be rotated and/or animated.

### Using a background image as a marker with ::after

Let’s put the background image within an `::after` pseudo-element:

```css
summary {
    display: flex;
}

summary::after {
    content: '';
    width: 18px;
    height: 10px;
    background: url('arrow.svg');
    background-size: cover;
    margin-left: 0.75em;
    transition: 0.2s;
}

details[open] > summary::after {
    transform: rotate(180deg);
}
```

Here’s a live demo of this code.

We’ve used `display: flex` on the `<summary>` element to make it easy to position the arrow horizontally.

The nice thing about this setup is that we can add animation to the arrow. (The animation doesn’t seem to work in Safari, but the behavior is good enough, and I’m getting a bit fed up with this browser!)

### Making the summary element look like a tab

We’ve been setting the `<summary>` element to full width, but it doesn’t have to be. We could make it look more like a tab, with this simple change:

```css
summary {
    display: inline-flex;
}
```

An example is shown below.

### Limiting the width of the details element

In all of our examples so far, the `<details>` element has stretched to the full width of its container, because it’s a block-level element. We can give it a different width, however, if we don’t want it so wide, such as `width: 50%;`. Or we could could set it to an inline display so that it’s just as wide as its content:

```css
details {
    display: inline-block;
}
```

Click on the tab below to reveal the narrower width of the `<details>` element.

Try changing `display: inline-block` to `width: 50%` in the Pen above.

### Placing the marker arrow at the far end of the summary

Let’s do something a bit different now, placing the marker arrow on the right-hand side of the `<summary>` element. Because we’ve been using `display: flex`, moving the arrow to the far right is as easy as adding `justify-content: space-between` to the `<summary>` element:

```css
summary {
    display: flex;
    justify-content: space-between;
}
```

### Using ::after as a marker without a background image

There are other ways we could use `::after` without an actual image. Here’s an example that uses just `::after` with borders:

```css
summary::after {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid #15171b;
    border-inline: 7px solid transparent;
    transition: 0.2s;
}
```

Here’s a live demo.

Now we have an arrow that rotates between the closed and open state. We’ve also added a nice drop shadow to the `<details>` element.

Another way to use `::after` without an image is to place Unicode characters within the `content` property:

```css
summary::after {
    content: '\25BC';
    transition: 0.2s;
}
```

This sets a triangle shape (▼) as our marker, as shown in [this CodePen demo](https://codepen.io/SitePoint/pen/KKJPXba).

There are thousands of [Unicode symbols](https://unicode-explorer.com/), and they’re quite fun to explore. Each comes with a code like `U + 25BC` or `U + 025BC`. To use that code inside the `content` property, take the characters after the `+` and place them inside the `content` quotes, with a `\` at the front: `content: "\25BC"`. If there’s one or more zeros at the start, you can leave them out. (For example, `U + 02248` can become `"\02248"` or `"\2248"`.)

## Miscellaneous Extras

So far, the things we’ve done above are more than enough, but there are other things we can have fun with, so let’s just play with a few of them here.

### Hover effect on the details element

We can set various hover effects on the `<details>` element. For example, we might do something like this:

```css
details {
    transition: 0.2s background linear;
}

details:hover {
    background: #dad3b1;
}
```

While we’re at it, let’s also transition the `<summary>` text color in the `open` state:

```css
details > summary {
    transition: color 1s;
}

details[open] > summary {
    color: #d9103e;
}
```

The result is shown below.

We could also just set a background change on the `<summary>` element instead.

### Animating the opening and closing of the details element

Haha, fooled ya! It appears it’s not possible to animate the opening and closing of the `<details>` element. [According to MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details):

> Unfortunately, at this time, there’s no built-in way to animate the transition between open and closed.

Nevertheless, we can have a bit of fun by animating the _contents_ of the `<details>` element. For example, we could set the contents to fade in once revealed:

```css
details article {
    opacity: 0;
}

details[open] article {
    animation: fadeIn 0.75s linear forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
```

The result is shown below.

Another trick might be to slide in the content, like so:

```css
details {
    overflow: hidden;
}

details[open] article {
    animation: animateUp 0.5s linear forwards;
}

@keyframes animateUp {
    0% {
        opacity: 0;
        transform: translatey(100%);
    }
    100% {
        opacity: 1;
        transform: translatey(0);
    }
}
```

The result is shown below.

It’s a bit cheesy, and perhaps overkill, but worth trying anyway. Unfortunately, these animations only work the first time the element is clicked (_unless the browser devtools are open, for some weird reason!_). You basically need [the intervention of JavaScript](https://css-tricks.com/restart-css-animation/) to make the effect work repeatedly.

### Changing summary content in open and closed states

In the demos above, the `<select>` has always had the same text, whether the `<details>` element is open or closed. But we could change that. Firstly, let’s leave the current “Click me” text in place, but also add some extra text for each state using the `::after` pseudo-element:

```css
summary::after {
    content: ' to show hidden content';
}

details[open] summary::after {
    content: ' to hide extra content';
}
```

That gives us the result shown below.

### Changing the summary cursor

The default cursor (or mouse pointer) for the `<details>` element is kind of weird. It’s a standard arrow for the most part, and a text pointer (or I-beam) when hovering over the `<summary>` text.

For fun, let’s change to the hand cursor (or “pointer”):

```css
summary {
    cursor: pointer;
}
```

This sets the mouse pointer to a hand when hovering anywhere over the `<summary>` element, as shown below.

We could set the cursor on the `<details>` element instead, which would force the hand cursor across the entire `<details>` element. I prefer to keep it just on the thing we’re meant to click, though.

### Changing the accessibility focus styles

If we’re navigating a page via the keyboard, we can tab to the `<details>` element and then open it by hitting <kbd>return</kbd>. During focus, the `<summary>` element has a default outline. The image below shows what this looks like in various browsers.

![The default focus outline of Chrome, Firefox, Edge and Safari](https://uploads.sitepoint.com/wp-content/uploads/2023/10/1697701100details-focus.jpg)

They’re much of a muchness: mostly a simple, dark (blue or black), solid outline that’s about `3px` wide.

There are many styles we could set for the focused `<details>` element, but let’s do something simple here as proof of concept, changing the outline to a red dotted line:

```css
summary:focus {
    outline: none;
}
summary:focus-visible {
    outline: 3px dotted #ff0060;
}
summary {
    padding: 10px;
}
```

By default, the focus outline doesn’t display when we click on the `<summary>` element. But if we change the focus style, that style _does_ display even to non-keyboard users (that is, when we click on the `<details>` element with a mouse). So in the code above, we’ve set the `outline` to `none` and instead used `focus-visible` to set the styles, as this means the focus styles will only be visible to keyboard users (for whom it’s actually useful).

The image below shows our new styling.

![Our new custom focus style on the summary element](https://uploads.sitepoint.com/wp-content/uploads/2023/10/1697701217custom-focus.jpg)

Here’s a live demo.

We could have a lot of fun with this, using animations, background colors and so on when the `<details>` element is in focus. I’ll leave it to you to experiment further.

### Using multiple details elements like an accordion list

There are [proposals](https://github.com/openui/open-ui/issues/812) to coordinate multiple details elements in such a way that one closes when another one opens. The HTML specification [even proposes](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element) a shared `name` attribute between multiple `<details>` elements for this purpose.

There’s currently no way to do this with HTML and CSS alone, but there are some nifty examples of doing it with JavaScript (such as [here](https://codepen.io/web-dot-dev/pen/PodYGBz), [here](https://codepen.io/aardrian/pen/gOQJraZ), and [here](https://codepen.io/aardrian/pen/qBLNYBe)).

The best we can do with CSS is to style the currently open element differently from the others, using some of the techniques we’ve covered above.

Here’s a simple example:

```css
details {
    background-color: #2196f3;
}

details[open] {
    background-color: #ce0e99;
}
```

### Styling a heading inside the summary

Some developers, concerned about the structure of their HTML, like to place a heading element inside the `<summary>` element. Whether that’s useful or not is [up for debate](https://css-tricks.com/two-issues-styling-the-details-element-and-how-to-solve-them/), but the default rendering is not nice, with the heading sitting on the line below the arrow. This can be fixed by setting the heading to `display: inline` or `display: inline-block`:

```css
summary h2 {
    display: inline;
}
```

You can see check out a demo of this on [CodePen](https://codepen.io/SitePoint/pen/MWLgEPm).

## Conclusion

As we’ve tried to show above, there are lots of simple ways to style the `<details>` element. Setting borders, padding and background colors is easy, and these in themselves improve the look greatly. Some of the methods for styling the default marker are very handy, but given that [Forrest’s fruit company](https://www.youtube.com/watch?v=SNa4EMUWnAc) () has so many issues with styling the marker, it may be better to steer away from that option, in favor of creating a completely custom marker element. (That said, styling the marker doesn’t _break_ the `<details>` element in Safari.)

There have been attempts to animate the opening and closing of the `<details>` element just with CSS, but they are hacky at best, so it’s not worth trying to go down that rabbit hole. If you really want animated opening and closing, you’ll need JavaScript.

To learn more about the `<details>` element, check out the following:

-   the [MDN entry on the details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
-   the [whatwg.org specification for the details element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)

If you come up with any other cool ways to style the `<details>` element, let me know on [Twitter](https://twitter.com/ralphmason), and we might feature them here.

![Ralph Mason](https://uploads.sitepoint.com/wp-content/uploads/2015/05/1430879451rm-96x96.png)Ralph Mason

[View Author](https://www.sitepoint.com/author/rmason/)

Ralph is a production manager at SitePoint and a freelance copyeditor, web designer and teacher at [Page Affairs](http://pageaffairs.com/).

detailshtml elements

Share
