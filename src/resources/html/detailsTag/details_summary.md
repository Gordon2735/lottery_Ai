<!-- The details and summary elements, again -->

# **The details and Summary Elements/Tags, Again**

**Published:** 2022.09.12

I've already written about the [`<details>` and `<summary>` elements](https://www.scottohara.me/blog/2018/09/03/details-and-summary.html), but there is more to tell, and there have been some changes since I last wrote at length about them in 2018.

## `<details>` and `<summary>`

HTML’s [`<details>`](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element) and [`<summary>`](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element) elements can be used to create native disclosure widgets - an expand/collapse widget where more information or interactive controls related to a topic (identified via the subtree content of the `<summary>`, or text preceding the disclosure widget) can be found. These native disclosure widgets function without JavaScript, unless you need to support legacy browsers. Yes, IE11 is no longer supported, but that doesn’t mean it’s been erased from existence. Do what’s necessary for your users.

HTML classifies both elements as [“interactive elements”](https://html.spec.whatwg.org/multipage/interactive-elements.html#interactive-elements). The `<details>` element serves as the containing element for the widget, though it is not expected to be directly interacted with by users. Nor is `<details>` generally expected to be exposed to assistive technologies. The [`open` attribute](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-details-open) of the `<details>` element is used to modify the expanded or collapsed state of the widget. When present it represents the widget being in the expanded state, and when absent the collapsed state. While the attribute is used on the `<details>` element, the state is programmatically communicated by its [required `<summary>` element](https://www.scottohara.me/blog/2022/09/12/details-summary.html#required-summary).

The `<summary>` element, the only child content of the `<details>` that will be persistently visible regardless of the widget’s state, acts as the disclosure widget trigger. It serves as its “legend” or “caption” as a means to represent the further contents of the `<details>` element. Interacting with the element will toggle the `open` attribute of its parent `<details>`. Generally, the `<summary>` element will expose an “expanded” or “collapsed” state, correlating to the `open` attribute existing or not on the parent `<details>`, and thus programmatically conveying whether the associated content is shown or hidden.

The `<summary>` element is ‘supposed to be’ exposed to assistive technologies as having a “`button`” role. However, its role may also be announced as “summary”, or even as a “disclosure triangle” because that’s a choice someone made on purpose… and even sometimes (unfortunately) no role at all. How it is exposed is contingent on the platform/browser and screen reader pairing. More on this later.

The following is an example of a `<details>` and `<summary>`.

Learn how the `<summary>` element is exposed to AT:

Depending on the screen reader and browser pairing you may be using, the `<summary>` element would have been exposed in one of the following ways:

-   "Disclosure Triangle" with Narrator, VoiceOver and TalkBack when paired with Edge/Chrome.
-   "Button" with NVDA when paired with Firefox, Edge or Chrome.
-   "Summary" with VoiceOver when paired with Firefox or Safari.
-   Bugged behavior or no role announced with TalkBack with Firefox or iOS VO with Safari, respectively.

These results and more can be found [with this CodePen](https://codepen.io/scottohara/pen/aaJXYG).

The simplified markup of the previous disclosure widget is as follows:

```html
<details open>
    <summary>...</summary>
    <div>
        <p>...</p>
        ...
    </div>
</details>
```

You _don't need_ to have a `<div>` as a sibling element to the `<summary>`. I just like to add it for styling purposes. [`<div>`s are fine](https://www.scottohara.me/blog/2022/01/20/divisive.html) if used appropriately, after all.

### A summary, whether you want it or not

Browsers will automatically add a `<summary>` element as the first child element of a `<details>` if it was not explicitly added. The subtree for this overlooked `<summary>` would contain the localized fallback text of “details” (which would be the `<summary>` element’s accessible name). The following disclosure widget demonstrates this error correction:

Oh hi there. Forget your summary, didja?

This fallback expectation is mentioned in the definition for the [`<details>` element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element) in the HTML specification, as well as in the [HTML AAM accessible name calculation steps](https://w3c.github.io/html-aam/#summary-element-accessible-name-computation).

Additionally, a `<summary>` is supposed to be the first child element of a `<details>`. However, if you were to do something like the following:

```html
<details>
    I'm putting content here even though the summary is supposed to be the first
    element.

    <summary>I'm out of place, but I won't stay that way</summary>
</details>
```

Browsers will render the `<summary>` as the first element anyway, mitigating one’s inability to follow very simple markup instructions.

### Styling a disclosure widget

The `<details>` and `<summary>` elements are fairly flexible with their styling. You can even remove the UA styling for the default triangle icon.

This would be done via two selectors:

```css
summary::-webkit-details-marker {
    display: none;
}

summary {
    list-style: none;
}
```

Then, for example, a new icon to visually indicate state could be added via pseudo-elements, or adding in your own image, or whatever. You do you. Just remember that the `<summary>` already (mostly) indicates the expand/collapse state. So if you use an inline graphic (image, SVG, font-icon, whatever), it _should_ be treated as decorative. More on this later.

```html
<details>
    <summary><img src="my-icon.png" alt /> ...</summary>
    ...
</details>
```

Using the `open` attribute, one can create styles specific to the expanded and collapsed state of disclosure widget. For instance:

```css
details > summary {
    /* closed styles as necessary */
}

details[open] > summary {
    /* opened styles as necessary */
}
```

The following is a quick example of how one could use the `summary::after` pseudo-element selector to create a CSS-only state indicator.

#### Impact of removing the default disclosure triangle

It’s worth noting that with Firefox in particular, it exposes the default disclosure widget triangle marker as part of the `<summary>`’s accessible name. This can lead to some ‘interesting’ (ridiculous) announcements such as “black pointing small triangle” being part of the element’s accessible name. And [here’s the Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1783925) I filed for this silliness.

If removing this marker so you can insert your own custom chevron or other visual expanded/collapsed state marker, it will actually make the state of the widget unclear with Firefox and VoiceOver, since the announcement of the default triangle direction **is the only way state is communicated in that pairing**.

Cool.

However, Firefox and VoiceOver alone is not the only pairing that is impacted by the removal of the default triangle marker. VoiceOver, JAWS and NVDA all have an issue with consistently announcing the toggled state of the disclosure widget if this marker is removed.

Something to keep in mind as you determine just how important it is to restyle an element whose semantics are, at least presently, semi-reliant on their default styling.

### Special find-in-page behavior

Previously, when a `<details>` element lacked the `open` attribute, all of its descendant elements, except for the `<summary>` element, would be completely hidden to all users. That has changed. Now, if a user performs a find-in-page (e.g., <kbd>Ctrl</kbd> or <kbd>Command</kbd> + <kbd>F</kbd> keys) when using a Chromium browser, then the content of these disclosure widgets can become discoverable.

Give it a try. Search for the word “heyo” if you’re using Chrome or Edge. The following `<details>` and `<summary>` will automatically open:

Search for "heyo" instead of toggling me!

Heyo! You found me (maybe... 'it depends™').

A common criticism of disclosure widgets is that they make the discoverability of information difficult, and this find-in-page reveal helps mitigate that criticism. It would be nice to see this get implemented in Firefox and Safari as well.

Consider this find-in-page feature before thinking you might use a `<details>` and `<summary>` as the foundation for other command-centric (navigation or menus) or dialog (especially modal) components. You probably don't want a disclosure widget of menu items, or a custom modal dialog to randomly open when performing an in-page-search.

Granted, you can get around this by making sure the non-`<summary>` contents of the customized `<details>` are set to `display: none` or `visibility: hidden`. I mean, with enough time and effort, one **can** suppress enough of the native functionality and implicit ARIA semantics of the `<details>` and `<summary>` elements, and mold them into some other component entirely. But, generally the amount of effort this entails can be equal to or greater than just creating a more traditional JS-based control, or using other HTML features like [the `<dialog>` element](https://www.scottohara.me/blog/2019/03/05/open-dialog.html).

### Oddities and further accessibility information

It may be of little surprise to you that the `<details>` and `<summary>` elements do have accessibility quirks, especially since I already talked about some of them. But being aware of these can help you avoid possible accessibility issues. Some of these quirks are a result of misuse/bending of the element’s purpose, while some are surfaced due to _valid use_ of the elements.

#### Consistent role announcements? Just be aware…

As mentioned, the implicit ARIA semantics for the `<summary>` element (e.g., the role that is exposed) is a bit varied. One might think to “fix” this by specifying a `role=button` on the `<summary>` element. Doing so would forcibly expose it as a button on all platforms.

However, if one were to do that, macOS Safari would treat the element as a standard button and the expanded/collapsed state would be dropped. This would also impact any instance that had a heading nested within the `<summary>` element. The `role=button` of the `<summary>` element would cause the nested heading semantics to be dropped with macOS Safari. Adding the role would at least make iOS VO announce **a role** for the `<summary>` element, but would still do nothing to mitigate the lack of iOS announcing state.

If your goal is to create an absolutely consistent disclosure widget behavior across browsers, i.e., ensuring that all `<summary>`s are exposed as expand/collapse buttons, then you’d be better off creating your own using JavaScript and the necessary ARIA attributes. You’d lose out on the find-in-page functionality that the native disclosure widget provides… but depending on the type of disclosure widget you’re creating, you may actually want that. You can check out my [GitHub repo for an ARIA disclosure widget](https://github.com/scottaohara/aria_disclosure_widget) I created, or check out the examples on the [demo page](https://scottaohara.github.io/aria_disclosure_widget/). Or, go look at [the ARIA Authoring Practices disclosure widget examples](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/). Or, the tons of other show/hide buttons that people have made over the years.

In the future the \`hidden\` attribute will hopefully (likely?) have wider support for the `until-found` value. This would allow authors to effectively create native `<details>` and `<summary>` behavior with ARIA and JS-powered disclosure widgets, if they so chose.

#### Giving detail to `<details>`

As mentioned, the `<details>` element isn’t really meant to be exposed or interacted with directly. But hey, maybe you have different ideas?

Well, if you [decided to name a `<details>` element](https://codepen.io/scottohara/pen/ExogpRN), you’d generally find that a `details` or `group` role would be exposed (note one of those is a valid ARIA role, and the other is merely the element’s tag name being conveyed as its role). Naming the `<details>` would result in no other noticeable impact to the `<summary>` element’s exposure to the tested screen readers. With TalkBack and Edge/Chrome, the name, let alone the existence of the details/group role was not announced. That’s not a big deal though… especially since naming the `<details>` element is something you probably shouldn’t be doing anyway.

Where things get more quirky is if you [want to change the implicit role of the `<details>` element](https://codepen.io/scottohara/pen/VwrqrOm). This has a direct impact on how the `<summary>` element’s role will be exposed (spoiler, it generally won’t be).

This is something that Firefox should probably get to fixing. But, it also begs the question why someone couldn’t just do:

```html
<!-- look ma', no ARIA! -->
<article>
    <details>
        <summary>...</summary>
        ...
    </details>
</article>
```

You know… don’t use ARIA if you don’t need to? I think [someone wrote about that somewhere](https://www.w3.org/TR/using-aria/#rule1).

#### Invalid `<summary>`

The great thing about browsers is that they will correct for many author errors to help ensure that a web page will render, regardless of invalid HTML markup. The not so great thing about browsers is that they will correct for many author errors to help ensure that a web page will still render, regardless of invalid HTML markup.

A `<summary>` element is only valid as a child of a `<details>` element. Additionally, only a single `<summary>` is valid within a `<details>` element. However, if a web developer were to do the following (_and they have_):

```html
<details>
    <summary>I'm valid</summary>
    <summary>I'm not... why the hell am I here?</summary>
    ...
</details>

<!-- or -->

<div>
    <summary>Sumdivery?</summary>
</div>
```

Browsers would parse the above, silently groan (yes, browsers judge you) about how often people mess up the fundamental programming language of the web, and then mitigate for this lack of knowledge and figure out the best way to render the invalid content. For instance:

The following demonstrates the output of the invalid markup in the previous code snippet.

I'm valid I'm not... why the hell am I here? ...

Sumdivery?

Browsers correct for the double `<summary>` elements within the `<details>` by only using the first `<summary>` for its intended purpose, and then including the second element as a part of the collapsible content of the widget.

Both this secondary `<summary>`, and the one placed outside the context of a `<details>` are visually rendered as static text and may still be rendered with a list marker, making it appear as a single item within a list.

Oh. But, I said “visually rendered” there. That was important.

In Chromium browsers the errant `<summary>` is exposed as a `generic` element. Which makes sense since it is not an interactive element.

Firefox and Safari, however, do not presently modify the exposed role of the element. So, while the `<summary>` is no longer keyboard accessible, AT will still expose it as if it was an interactive element. [This HTML AAM PR](https://github.com/w3c/html-aam/pull/436) and the browser bugs linked within will hopefully rectify this relatively soon.

#### `<summary>` can have nested interactive elements and headings

So if you’ve heard anything about accessibility quirks with `<details>` and `<summary>` elements, this is probably the topic that gets brought up the most. The HTML specification indicates the allowed content model for [the `<summary>` element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element) allows for [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) with optionally intermixed [heading content](https://html.spec.whatwg.org/multipage/dom.html#heading-content-2).

Phrasing content includes various interactive elements such as `<input>`, `<textarea>`, `<button>`, `<a href>`, etc., and heading content - as the name would suggest - includes `<h1>` to `<h6>` elements, as well as `<hgroup>`.

While HTML allows such elements within a `<summary>`, there is an [open issue about whether or not it should](https://github.com/whatwg/html/issues/2272). Since I’ve responded to that issue with a wall of text, I don’t think I need to re-get into it here. But the gist is that, as mentioned, `<summary>` element mappings are messy and part of the reason why nested headings and interactive elements are not consistently exposed. Safari, Firefox and Chromium browsers all treat nested interactive elements a bit differently - as outside their use in `<summary>` elements, it’s invalid HTML to nest them. And because `<button>` elements - or elements like `<summary>` that are supposed to map to `role=button` are _supposed_ to treat child elements as presentational, this is why headings or other elements with semantics important to accessibility are not consistently exposed.

It’s honestly a very messy issue with pros and cons all over the place concerning what could be done. We’ll just have to see how that all pans out and in the meantime, people should just realize that just because something is allowed in HTML, that doesn’t mean it’s going to be a good idea for all users. As another example, allowing `<a href>` elements to wrap all sorts of things. I’m not going to even get started on how awful that can be…

## Creating an ARIA disclosure widget

OK, so you’ve decided that you want to roll your own disclosure widget because you’re now fully up to speed on how `<details>` and `<summary>` are weirdos with some issues they need to work out.

To create your own custom disclosure widget, you would essentially need a `<button>` element, an element to serve as your content “container” and then a few ARIA attributes to communicate the expanded and collapsed state.

For instance, a very basic widget could be made with the following markup:

```html
<button type="button" aria-expanded="true|false">My trigger's name</button>
<div class="dw-panel">
    <!-- content goes here! -->
</div>
```

A minimal script to toggle the content would be as follows:

```javascript
const dwBtn = document.querySelector('button[aria-expanded]');

dwBtn.addEventListener('click', function () {
    if (this.getAttribute('aria-expanded') === 'true') {
        this.setAttribute('aria-expanded', 'false');
    } else {
        this.setAttribute('aria-expanded', 'true');
    }
});
```

Being a custom widget, styling is also as intricate or bare bones as you require. Per the above markup and scripted behavior, and without introducing anymore complexity than necessary, the following style selectors can be used and expanded upon.

```css
button[aria-expanded] {
    /* style as you see fit */
}

button[aria-expanded='false'] ~ .dw-panel {
    display: none;
}
```

### An important note about rolling your own disclosure widget!

Depending on the situations your disclosure widget might be used in, you should strongly consider creating such components with a progressive enhancement mindset.

For instance, if you are going to use disclosure widgets on a web page that a user could parse via a browser's reader mode, then you should ensure that your `<button>` and especially its `aria-expanded` state are provided by your JavaScript.

The reason for this is because in a browser's reader mode, all your styling and JavaScript is dropped, but your markup generally remains. So if you have a hard coded `<button aria-expanded=false>`, then that can still be presented in the reader mode version of your web page.

What is especially important here is also to avoid hard coding the `hidden` attribute for your custom disclosure widgets. It too will be respected in reader mode, so if used on your disclosure widget content panels, then that content will not render in reader mode.

The `<details>` and `<summary>` elements **continue to function** in a browser's reader mode.

Also, notice the lack of `aria-hidden=true` on the containing element for the content that shows/hides. `display: none` already hides the content from assistive technologies, which would mean using `aria-hidden=true` on the `.dw-panel` would not only be useless, but introduce a potential for inaccessible content were the CSS of the page to be blocked somehow, as then the content would be visible, but not readable to assistive technologies.

### Other disclosure widget options

To more clearly expose the boundaries of a disclosure widget to users of assistive technologies, the content container can be provided additional ARIA attributes which AT may use to convey ‘start’ and ‘end’ boundaries of the content.

For instance,

```html
<button type="button" aria-expanded="..." id="dwtrigger">Example name</button>
<div class="dw-panel" role="choose your role" aria-labelledby="dwtrigger">
    <!-- content goes here! -->
</div>
```

A `role` attribute can be used to expose the content container as a particular type of [document structure](https://w3c.github.io/aria//#document_structure_roles) or [landmark](https://w3c.github.io/aria/#landmark_roles) element.

The type of role you choose will be contingent on the importance and type of content the disclosure widget represents. For instance, you might use a `group`, `region`, `article`, or even a `note` role. For simplicity’s sake, let’s use the `region` role for this example. The [`region` role](https://w3c.github.io/aria/#region) representing a generic landmark element, so the assumption here is that this exposed content is important to call out and allow someone to quickly navigate back to, via screen reader landmark navigation commands, as necessary.

The `region` can be named by use of `aria-labelledby`, where the value of the attribute would be the `id` of the `<button>` element.

A user expanding this disclosure widget and then entering the expanded contents could then be met with a “start of example name, region”. And when they are leaving, they might hear something along the lines of “end of example name, region”.

## OK, I think I’m done for now

So, this probably came across as me being down on `<details>` and `<summary>` which is unfortunate because I actually rather like the elements and outside of some current bugs - content model aside - they’re just so convenient to use.

For instance, here’s a very basic example of using them to create form group sections that can expand/collapse.

With that said, I don’t have a neat little bow I can tie this whole thing up in. `<details>` and `<summary>` elements are complicated. Saying don’t use them isn’t really practical and there’s a lot of good things about them. But they do have bugs. I filed some. It’d be great if other people would file some too!

It really just all comes down to what sort of experience you want to provide to people, and how OK you might be knowing that the native elements are going to be exposed differently, have different gaps but also different features to them. Or, you can roll your own disclosure widgets and provide a consistent experience that you are fully in charge of… but it may not be as feature rich as what the browsers could provide, and your disclosure widgets need to degrade gracefully if viewed in a browser’s reading mode.

The decision of what you do is up to you. At least now, hopefully you have enough information to help you make it.

![https://www.scottohara.me/assets/img/scott.jpg](https://www.scottohara.me/assets/img/scott.jpg)
[https://www.scottohara.me/](https://www.scottohara.me/)

-   [About Me](https://www.scottohara.me/about)
-   [GitHub: scottaohara](https://github.com/scottaohara)
-   [Twitter: scottohara](https://twitter.com/scottohara)
-   [RSS Feed](https://www.scottohara.me/feed.xml)

No large language models (LLMs) were used to create the content of this website.

© Scott O'Hara, 2013 - 2024
