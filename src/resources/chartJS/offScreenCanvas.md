<img src="../../../public/images/mdn/001_mdn.webp" style="width: 20vw; border-radius: 3%; filter: drop-shadow(0rem 0rem 1.2rem hsla(163, 19%, 7%, 0.993));">

[mdn web docs](https://developer.mozilla.org/en-US/)

# OffscreenCanvas

## Baseline 2023

Newly available

Since March 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.

-   [Learn more](https://developer.mozilla.org/en-US/blog/baseline-evolution-on-mdn/)
-   [See full compatibility](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#browser_compatibility)
-   [Report feedback](https://survey.alchemer.com/s3/7634825/MDN-baseline-feedback?page=%2Fen-US%2Fdocs%2FWeb%2FAPI%2FOffscreenCanvas&level=low)

**Note:** This feature is available in [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

When using the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element or the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), rendering, animation, and user interaction usually happen on the main execution thread of a web application. The computation relating to canvas animations and rendering can have a significant impact on application performance.

The **`OffscreenCanvas`** interface provides a canvas that can be rendered off screen, decoupling the DOM and the Canvas API so that the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element is no longer entirely dependent on the DOM. Rendering operations can also be run inside a [worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) context, allowing you to run some tasks in a separate thread and avoid heavy work on the main thread.

`OffscreenCanvas` is a [transferable object](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

EventTarget OffscreenCanvas

## [Constructors](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#constructors)

[`OffscreenCanvas()`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/OffscreenCanvas 'OffscreenCanvas()')

`OffscreenCanvas` constructor. Creates a new `OffscreenCanvas` object.

## [Instance properties](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#instance_properties)

[`OffscreenCanvas.height`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/height)

The height of the offscreen canvas.

[`OffscreenCanvas.width`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/width)

The width of the offscreen canvas.

## [Instance methods](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#instance_methods)

[`OffscreenCanvas.getContext()`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/getContext)

Returns a rendering context for the offscreen canvas.

[`OffscreenCanvas.convertToBlob()`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/convertToBlob)

Creates a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object representing the image contained in the canvas.

[`OffscreenCanvas.transferToImageBitmap()`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/transferToImageBitmap)

Creates an [`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap) object from the most recently rendered image of the `OffscreenCanvas`. See the [`API description`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/transferToImageBitmap 'API description') for important notes on managing this [`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap).

## [Events](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#events)

_Inherits events from its parent, [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)._

Listen to these events using [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener 'addEventListener()') or by assigning an event listener to the `oneventname` property of this interface.

-   [`contextlost`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/contextlost_event)
-   : Fired if the browser detects that an [`OffscreenCanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D) context is lost.
-   [`contextrestored`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/contextrestored_event)
    -   : Fired if the browser successfully restores an [`OffscreenCanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D) context.

## [Examples](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#examples)

### [Synchronous display of frames produced by an `OffscreenCanvas`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#synchronous_display_of_frames_produced_by_an_offscreencanvas)

One way to use the `OffscreenCanvas` API is to use a rendering context that has been obtained from an `OffscreenCanvas` object to generate new frames. Once a new frame has finished rendering in this context, the [`transferToImageBitmap()`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/transferToImageBitmap 'transferToImageBitmap()') method can be called to save the most recent rendered image. This method returns an [`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap) object, which can be used in a variety of Web APIs and also in a second canvas without creating a transfer copy.

To display the `ImageBitmap`, you can use an [`ImageBitmapRenderingContext`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext) context, which can be created by calling `canvas.getContext("bitmaprenderer")` on a (visible) canvas element. This context only provides functionality to replace the canvas's contents with the given `ImageBitmap`. A call to [`ImageBitmapRenderingContext.transferFromImageBitmap()`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) with the previously rendered and saved `ImageBitmap` from the OffscreenCanvas, will display the `ImageBitmap` on the canvas and transfer its ownership to the canvas. A single `OffscreenCanvas` may transfer frames into an arbitrary number of other `ImageBitmapRenderingContext` objects.

Given these two [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) elements

```html
<canvas id="one"></canvas> <canvas id="two"></canvas>
```

the following code will provide the rendering using `OffscreenCanvas` as described above.

```javascript
const one = document.getElementById('one').getContext('bitmaprenderer');
const two = document.getElementById('two').getContext('bitmaprenderer');

const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext('webgl');

// Perform some drawing for the first canvas using the gl context
const bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// Perform some more drawing for the second canvas
const bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### [Asynchronous display of frames produced by an `OffscreenCanvas`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas)

Another way to use the `OffscreenCanvas` API, is to call [`transferControlToOffscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen 'transferControlToOffscreen()') on a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element, either on a [worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) or the main thread, which will return an `OffscreenCanvas` object from an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) object from the main thread. Calling [`getContext()`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/getContext 'getContext()') will then obtain a rendering context from that `OffscreenCanvas`.

The `main.js` script (main thread) may look like this:

```javascript
const htmlCanvas = document.getElementById('canvas');
const offscreen = htmlCanvas.transferControlToOffscreen();

const worker = new Worker('offscreencanvas.js');
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

While the `offscreencanvas.js` script (worker thread) can look like this:

```javascript
onmessage = (evt) => {
    const canvas = evt.data.canvas;
    const gl = canvas.getContext('webgl');
    // Perform some drawing using the gl context
};
```

It's also possible to use [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame 'requestAnimationFrame()') in workers:

```javascript
onmessage = (evt) => {
    const canvas = evt.data.canvas;
    const gl = canvas.getContext('webgl');

    function render(time) {
        // Perform some drawing using the gl context
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
};
```

For a full example, see the [OffscreenCanvas example source](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) on GitHub or run the [OffscreenCanvas example live](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/).

## [Specifications](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#specifications)

| Specification |
| ------------- |

| [HTML Standard  
\# the-offscreencanvas-interface](https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface) |

## [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#browser_compatibility)

[Report problems with this compatibility data on GitHub](https://github.com/mdn/browser-compat-data/issues/new?mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FOffscreenCanvas&metadata=%3C%21--+Do+not+make+changes+below+this+line+--%3E%0A%3Cdetails%3E%0A%3Csummary%3EMDN+page+report+details%3C%2Fsummary%3E%0A%0A*+Query%3A+%60api.OffscreenCanvas%60%0A*+Report+started%3A+2024-06-10T23%3A13%3A42.761Z%0A%0A%3C%2Fdetails%3E&title=api.OffscreenCanvas+-+%3CSUMMARIZE+THE+PROBLEM%3E&template=data-problem.yml 'Report an issue with this compatibility data')

|     | desktop | mobile |
| --- | ------- | ------ |
|     |

Toggle history |
| [`OffscreenCanvas()` constructor](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/OffscreenCanvas) |

Toggle history |
| [`convertToBlob`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/convertToBlob) |

`option.type` parameter supports `"image/webp"`

Toggle history |
| [`getContext`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/getContext) |

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

## [See also](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas#see_also)

-   [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
-   [`OffscreenCanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D)
-   [`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap)
-   [`ImageBitmapRenderingContext`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext)
-   [`HTMLCanvasElement.transferControlToOffscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen)
-   [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame 'requestAnimationFrame()')
-   [WebGL Off the Main Thread – Mo](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/)

## "types": [

            "offscreencanvas"
        ]
