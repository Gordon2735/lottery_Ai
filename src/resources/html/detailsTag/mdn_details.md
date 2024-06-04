# <details>: The Details disclosure element

## Baseline Widely available

This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.

-   [Learn more](https://developer.mozilla.org/en-US/blog/baseline-evolution-on-mdn/)
-   [See full compatibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#browser_compatibility)
-   [Report feedback](https://survey.alchemer.com/s3/7634825/MDN-baseline-feedback?page=%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement%2Fdetails&level=high)

The **`<details>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) element.

A disclosure widget is typically presented onscreen using a small triangle that rotates (or twists) to indicate open/closed status, with a label next to the triangle. The contents of the `<summary>` element are used as the label for the disclosure widget. The contents of the `<details>` provide the [accessible description](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_description) for the `<summary>`.

## [Try it](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#try_it)

A `<details>` widget can be in one of two states. The default _closed_ state displays only the triangle and the label inside `<summary>` (or a [user agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent)\-defined default string if no `<summary>`).

When the user clicks on the widget or focuses it then presses the space bar, it "twists" open, revealing its contents. The common use of a triangle which rotates or twists around to represent opening or closing the widget is why these are sometimes called "twisty".

You can use CSS to style the disclosure widget, and you can programmatically open and close the widget by setting/removing its [`open`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#open) attribute. Unfortunately, at this time, there's no built-in way to animate the transition between open and closed.

By default when closed, the widget is only tall enough to display the disclosure triangle and summary. When open, it expands to display the details contained within.

Fully standards-compliant implementations automatically apply the CSS ``[`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display): list-item`` to the [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) element. You can use this to customize its appearance further. See [Customizing the disclosure widget](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#customizing_the_disclosure_widget) for further details.

## [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#attributes)

This element includes the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

[`open`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#open)

This Boolean attribute indicates whether the details — that is, the contents of the `<details>` element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.

**Note:** You have to remove this attribute entirely to make the details hidden. `open="false"` makes the details visible because this attribute is Boolean.

[`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name)

This attribute enables multiple `<details>` elements to be connected, with only one open at a time. This allows developers to easily create UI features such as accordions without scripting.

The `name` attribute specifies a group name — give multiple `<details>` elements the same `name` value to group them. Only one of the grouped `<details>` elements can be open at a time — opening one will cause another to close. If multiple grouped `<details>` elements are given the `open` attribute, only the first one in the source order will be rendered open.

**Note:** `<details>` elements don't have to be adjacent to one another in the source to be part of the same group.

## [Events](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#events)

In addition to the usual events supported by HTML elements, the `<details>` element supports the [`toggle`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement/toggle_event 'toggle') event, which is dispatched to the `<details>` element whenever its state changes between open and closed. It is sent _after_ the state is changed, although if the state changes multiple times before the browser can dispatch the event, the events are coalesced so that only one is sent.

You can use an event listener for the `toggle` event to detect when the widget changes state:

```javascript
details.addEventListener('toggle', (event) => {
    if (details.open) {
        /* the element was toggled open */
    } else {
        /* the element was toggled closed */
    }
});
```

## [Examples](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#examples)

### [A simple disclosure example](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#a_simple_disclosure_example)

This example shows a simple `<details>` element with a `<summary>`.

```html
<details>
    <summary>System Requirements</summary>
    <p>
        Requires a computer running an operating system. The computer must have
        some memory and ideally some kind of long-term storage. An input device
        as well as some form of output device is recommended.
    </p>
</details>
```

#### Result

play

### [Creating an open disclosure box](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#creating_an_open_disclosure_box)

To start the `<details>` box in its open state, add the Boolean `open` attribute:

```html
<details open>
    <summary>System Requirements</summary>
    <p>
        Requires a computer running an operating system. The computer must have
        some memory and ideally some kind of long-term storage. An input device
        as well as some form of output device is recommended.
    </p>
</details>
```

#### Result

play

### [Customizing the appearance](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#customizing_the_appearance)

Now let's apply some CSS to customize the appearance of the disclosure box.

#### CSS

```css
details {
    font:
        16px 'Open Sans',
        Calibri,
        sans-serif;
    width: 620px;
}

details > summary {
    padding: 2px 6px;
    width: 15em;
    background-color: #ddd;
    border: none;
    box-shadow: 3px 3px 4px black;
    cursor: pointer;
}

details > p {
    border-radius: 0 0 10px 10px;
    background-color: #ddd;
    padding: 2px 6px;
    margin: 0;
    box-shadow: 3px 3px 4px black;
}

details[open] > summary {
    background-color: #ccf;
}
```

This CSS creates a look similar to a tabbed interface, where clicking the tab opens it to reveal its contents.

The selector `details[open]` can be used to style the element which is open.

#### HTML

```html
<details>
    <summary>System Requirements</summary>
    <p>
        Requires a computer running an operating system. The computer must have
        some memory and ideally some kind of long-term storage. An input device
        as well as some form of output device is recommended.
    </p>
</details>
```

#### Result

play

### [Customizing the disclosure widget](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#customizing_the_disclosure_widget)

The disclosure triangle itself can be customized, although this is not as broadly supported. There are variations in how browsers support this customization due to experimental implementations as the element was standardized, so we'll have to use multiple approaches for a while.

The [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) element supports the [`list-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style) shorthand property and its longhand properties, such as [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type), to change the disclosure triangle to whatever you choose (usually with [`list-style-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image)). For example, we can remove the disclosure widget icon by setting `list-style: none`.

#### CSS

```css
details {
    font:
        16px 'Open Sans',
        Calibri,
        sans-serif;
    width: 620px;
}

details > summary {
    padding: 2px 6px;
    width: 15em;
    background-color: #ddd;
    border: none;
    box-shadow: 3px 3px 4px black;
    cursor: pointer;
    list-style: none;
}

details > p {
    border-radius: 0 0 10px 10px;
    background-color: #ddd;
    padding: 2px 6px;
    margin: 0;
    box-shadow: 3px 3px 4px black;
}
```

This CSS creates a look similar to a tabbed interface, where activating the tab expands and opens it to reveal its contents.

#### HTML

```html
<details>
    <summary>System Requirements</summary>
    <p>
        Requires a computer running an operating system. The computer must have
        some memory and ideally some kind of long-term storage. An input device
        as well as some form of output device is recommended.
    </p>
</details>
```

#### Result

play

## [Technical summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#technical_summary)

<table class="properties"><tbody><tr><th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories">Content categories</a></th><td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>, sectioning root, interactive content, palpable content.</td></tr><tr><th scope="row">Permitted content</th><td>One <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary"><code>&lt;summary&gt;</code></a> element followed by <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content">flow content</a>.</td></tr><tr><th scope="row">Tag omission</th><td>None, both the starting and ending tag are mandatory.</td></tr><tr><th scope="row">Permitted parents</th><td>Any element that accepts <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content">flow content</a>.</td></tr><tr><th scope="row">Implicit ARIA role</th><td><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td></tr><tr><th scope="row">Permitted ARIA roles</th><td>No <code>role</code> permitted</td></tr><tr><th scope="row">DOM interface</th><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement"><code>HTMLDetailsElement</code></a></td></tr></tbody></table>

## [Specifications](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#specifications)

| Specification |
| ------------- |

| [HTML Standard  
\# the-details-element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element) |

## [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#browser_compatibility)

[Report problems with this compatibility data on GitHub](https://github.com/mdn/browser-compat-data/issues/new?mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement%2Fdetails&metadata=%3C%21--+Do+not+make+changes+below+this+line+--%3E%0A%3Cdetails%3E%0A%3Csummary%3EMDN+page+report+details%3C%2Fsummary%3E%0A%0A*+Query%3A+%60html.elements.details%60%0A*+Report+started%3A+2024-06-04T07%3A31%3A32.612Z%0A%0A%3C%2Fdetails%3E&title=html.elements.details+-+%3CSUMMARIZE+THE+PROBLEM%3E&template=data-problem.yml 'Report an issue with this compatibility data')

### Legend

Tip: you can click/tap on a cell for more information.

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

## [See also](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#see_also)

-   [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
