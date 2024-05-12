[

![Puppeteer Logo](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)

**Puppeteer**](https://pptr.dev/)[Docs](https://pptr.dev/category/introduction)[Puppeteer API](https://pptr.dev/api/puppeteer.puppeteernode)[@puppeteer/browsers API](https://pptr.dev/browsers-api/)

[22.8.0](https://pptr.dev/)

-   [Next](https://pptr.dev/next/api/)
-   [22.8.0](https://pptr.dev/api/)

---

-   **Archived versions**
-   [22.7.1](https://github.com/puppeteer/puppeteer/blob/puppeteer-v22.7.1/docs/api/index.md)
-   [22.7.0](https://github.com/puppeteer/puppeteer/blob/puppeteer-v22.7.0/docs/api/index.md)
-   [22.6.5](https://github.com/puppeteer/puppeteer/blob/puppeteer-v22.6.5/docs/api/index.md)

[](https://github.com/puppeteer/puppeteer)

Search<kbd class="DocSearch-Button-Key">K</kbd>

Version: 22.8.0

On this page

# API Reference

## Classes[​](https://pptr.dev/api#classes 'Direct link to Classes')

|
Class

|

Description

|                                                               |
| ------------------------------------------------------------- |
| [Accessibility](https://pptr.dev/api/puppeteer.accessibility) |

The Accessibility class provides methods for inspecting the browser's accessibility tree. The accessibility tree is used by assistive technology such as [screen readers](https://en.wikipedia.org/wiki/Screen_reader) or [switches](https://en.wikipedia.org/wiki/Switch_access).

**Remarks:**

Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output.

Blink - Chrome's rendering engine - has a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives users access to the Blink Accessibility Tree.

Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Puppeteer tries to approximate this filtering, exposing only the "interesting" nodes of the tree.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Accessibility` class.

|
| [Browser](https://pptr.dev/api/puppeteer.browser) |

[Browser](https://pptr.dev/api/puppeteer.browser) represents a browser instance that is either:

-   connected to via [Puppeteer.connect()](https://pptr.dev/api/puppeteer.puppeteer.connect) or - launched by [PuppeteerNode.launch()](https://pptr.dev/api/puppeteer.puppeteernode.launch).

[Browser](https://pptr.dev/api/puppeteer.browser) [emits](https://pptr.dev/api/puppeteer.eventemitter.emit) various events which are documented in the [BrowserEvent](https://pptr.dev/api/puppeteer.browserevent) enum.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Browser` class.

|
| [BrowserContext](https://pptr.dev/api/puppeteer.browsercontext) |

[BrowserContext](https://pptr.dev/api/puppeteer.browsercontext) represents individual user contexts within a [browser](https://pptr.dev/api/puppeteer.browser).

When a [browser](https://pptr.dev/api/puppeteer.browser) is launched, it has a single [browser context](https://pptr.dev/api/puppeteer.browsercontext) by default. Others can be created using [Browser.createBrowserContext()](https://pptr.dev/api/puppeteer.browser.createbrowsercontext). Each context has isolated storage (cookies/localStorage/etc.)

[BrowserContext](https://pptr.dev/api/puppeteer.browsercontext) [emits](https://pptr.dev/api/puppeteer.eventemitter) various events which are documented in the [BrowserContextEvent](https://pptr.dev/api/puppeteer.browsercontextevent) enum.

If a [page](https://pptr.dev/api/puppeteer.page) opens another [page](https://pptr.dev/api/puppeteer.page), e.g. using `window.open`, the popup will belong to the parent [page's browser context](https://pptr.dev/api/puppeteer.page.browsercontext).

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `BrowserContext` class.

|
| [CDPSession](https://pptr.dev/api/puppeteer.cdpsession) |

The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.

**Remarks:**

Protocol methods can be called with [CDPSession.send()](https://pptr.dev/api/puppeteer.cdpsession.send) method and protocol events can be subscribed to with `CDPSession.on` method.

Useful links: [DevTools Protocol Viewer](https://chromedevtools.github.io/devtools-protocol/) and [Getting Started with DevTools Protocol](https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md).

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `CDPSession` class.

|
| [Connection](https://pptr.dev/api/puppeteer.connection) | |
| [ConsoleMessage](https://pptr.dev/api/puppeteer.consolemessage) |

ConsoleMessage objects are dispatched by page via the 'console' event.

|
| [Coverage](https://pptr.dev/api/puppeteer.coverage) |

The Coverage class provides methods to gather information about parts of JavaScript and CSS that were used by the page.

**Remarks:**

To output coverage in a form consumable by [Istanbul](https://github.com/istanbuljs), see [puppeteer-to-istanbul](https://github.com/istanbuljs/puppeteer-to-istanbul).

|
| [CSSCoverage](https://pptr.dev/api/puppeteer.csscoverage) | |
| [DeviceRequestPrompt](https://pptr.dev/api/puppeteer.devicerequestprompt) |

Device request prompts let you respond to the page requesting for a device through an API like WebBluetooth.

**Remarks:**

`DeviceRequestPrompt` instances are returned via the [Page.waitForDevicePrompt()](https://pptr.dev/api/puppeteer.page.waitfordeviceprompt) method.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `DeviceRequestPrompt` class.

|
| [DeviceRequestPromptDevice](https://pptr.dev/api/puppeteer.devicerequestpromptdevice) |

Device in a request prompt.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `DeviceRequestPromptDevice` class.

|
| [Dialog](https://pptr.dev/api/puppeteer.dialog) |

Dialog instances are dispatched by the [Page](https://pptr.dev/api/puppeteer.page) via the `dialog` event.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Dialog` class.

|
| [ElementHandle](https://pptr.dev/api/puppeteer.elementhandle) |

ElementHandle represents an in-page DOM element.

**Remarks:**

ElementHandles can be created with the [Page.$()](https://pptr.dev/api/puppeteer.page._) method.

```javascript
import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    const hrefElement = await page.$('a');
    await hrefElement.click();  // ...})();
```

ElementHandle prevents the DOM element from being garbage-collected unless the handle is [disposed](https://pptr.dev/api/puppeteer.jshandle.dispose). ElementHandles are auto-disposed when their origin frame gets navigated.

ElementHandle instances can be used as arguments in [Page.$eval()](https://pptr.dev/api/puppeteer.page._eval) and [Page.evaluate()](https://pptr.dev/api/puppeteer.page.evaluate) methods.

If you're using TypeScript, ElementHandle takes a generic argument that denotes the type of element the handle is holding within. For example, if you have a handle to a `<select>` element, you can type it as `ElementHandle<HTMLSelectElement>` and you get some nicer type checks.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ElementHandle` class.

|
| [EventEmitter](https://pptr.dev/api/puppeteer.eventemitter) |

The EventEmitter class that many Puppeteer classes extend.

**Remarks:**

This allows you to listen to events that Puppeteer classes fire and act accordingly. Therefore you'll mostly use [on](https://pptr.dev/api/puppeteer.eventemitter.on) and [off](https://pptr.dev/api/puppeteer.eventemitter.off) to bind and unbind to event listeners.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `EventEmitter` class.

|
| [FileChooser](https://pptr.dev/api/puppeteer.filechooser) |

File choosers let you react to the page requesting for a file.

**Remarks:**

`FileChooser` instances are returned via the [Page.waitForFileChooser()](https://pptr.dev/api/puppeteer.page.waitforfilechooser) method.

In browsers, only one file chooser can be opened at a time. All file choosers must be accepted or canceled. Not doing so will prevent subsequent file choosers from appearing.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `FileChooser` class.

|
| [Frame](https://pptr.dev/api/puppeteer.frame) |

Represents a DOM frame.

To understand frames, you can think of frames as `<iframe>` elements. Just like iframes, frames can be nested, and when JavaScript is executed in a frame, the JavaScript does not effect frames inside the ambient frame the JavaScript executes in.

**Remarks:**

Frame lifecycles are controlled by three events that are all dispatched on the parent [page](https://pptr.dev/api/puppeteer.frame.page):

-   [PageEvent.FrameAttached](https://pptr.dev/api/puppeteer.pageevent) - [PageEvent.FrameNavigated](https://pptr.dev/api/puppeteer.pageevent) - [PageEvent.FrameDetached](https://pptr.dev/api/puppeteer.pageevent)

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Frame` class.

|
| [HTTPRequest](https://pptr.dev/api/puppeteer.httprequest) |

Represents an HTTP request sent by a page.

**Remarks:**

Whenever the page sends a request, such as for a network resource, the following events are emitted by Puppeteer's `page`:

-   `request`: emitted when the request is issued by the page. - `requestfinished` - emitted when the response body is downloaded and the request is complete.

If request fails at some point, then instead of `requestfinished` event the `requestfailed` event is emitted.

All of these events provide an instance of `HTTPRequest` representing the request that occurred:

```javascript
page.on('request', request => ...)
```

NOTE: HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with `requestfinished` event.

If request gets a 'redirect' response, the request is successfully finished with the `requestfinished` event, and a new request is issued to a redirected url.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `HTTPRequest` class.

|
| [HTTPResponse](https://pptr.dev/api/puppeteer.httpresponse) |

The HTTPResponse class represents responses which are received by the [Page](https://pptr.dev/api/puppeteer.page) class.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `HTTPResponse` class.

|
| [JSCoverage](https://pptr.dev/api/puppeteer.jscoverage) | |
| [JSHandle](https://pptr.dev/api/puppeteer.jshandle) |

Represents a reference to a JavaScript object. Instances can be created using [Page.evaluateHandle()](https://pptr.dev/api/puppeteer.page.evaluatehandle).

Handles prevent the referenced JavaScript object from being garbage-collected unless the handle is purposely [disposed](https://pptr.dev/api/puppeteer.jshandle.dispose). JSHandles are auto-disposed when their associated frame is navigated away or the parent context gets destroyed.

Handles can be used as arguments for any evaluation function such as [Page.$eval()](https://pptr.dev/api/puppeteer.page._eval), [Page.evaluate()](https://pptr.dev/api/puppeteer.page.evaluate), and [Page.evaluateHandle()](https://pptr.dev/api/puppeteer.page.evaluatehandle). They are resolved to their referenced object.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `JSHandle` class.

|
| [Keyboard](https://pptr.dev/api/puppeteer.keyboard) |

Keyboard provides an api for managing a virtual keyboard. The high level api is [Keyboard.type()](https://pptr.dev/api/puppeteer.keyboard.type), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.

**Remarks:**

For finer control, you can use [Keyboard.down()](https://pptr.dev/api/puppeteer.keyboard.down), [Keyboard.up()](https://pptr.dev/api/puppeteer.keyboard.up), and [Keyboard.sendCharacter()](https://pptr.dev/api/puppeteer.keyboard.sendcharacter) to manually fire events as if they were generated from a real keyboard.

On macOS, keyboard shortcuts like `⌘ A` -> Select All do not work. See [#1313](https://github.com/puppeteer/puppeteer/issues/1313).

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Keyboard` class.

|
| [Locator](https://pptr.dev/api/puppeteer.locator) |

Locators describe a strategy of locating objects and performing an action on them. If the action fails because the object is not ready for the action, the whole operation is retried. Various preconditions for a successful action are checked automatically.

|
| [Mouse](https://pptr.dev/api/puppeteer.mouse) |

The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.

**Remarks:**

Every `page` object has its own Mouse, accessible with \[`page.mouse`\](#pagemouse).

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Mouse` class.

|
| [Page](https://pptr.dev/api/puppeteer.page) |

Page provides methods to interact with a single tab or [extension background page](https://developer.chrome.com/extensions/background_pages) in the browser.

note

One Browser instance might have multiple Page instances.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Page` class.

|
| [ProductLauncher](https://pptr.dev/api/puppeteer.productlauncher) |

Describes a launcher - a class that is able to create and launch a browser instance.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ProductLauncher` class.

|
| [ProtocolError](https://pptr.dev/api/puppeteer.protocolerror) |

ProtocolError is emitted whenever there is an error from the protocol.

|
| [Puppeteer](https://pptr.dev/api/puppeteer.puppeteer) |

The main Puppeteer class.

IMPORTANT: if you are using Puppeteer in a Node environment, you will get an instance of [PuppeteerNode](https://pptr.dev/api/puppeteer.puppeteernode) when you import or require `puppeteer`. That class extends `Puppeteer`, so has all the methods documented below as well as all that are defined on [PuppeteerNode](https://pptr.dev/api/puppeteer.puppeteernode).

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Puppeteer` class.

|
| [PuppeteerError](https://pptr.dev/api/puppeteer.puppeteererror) |

The base class for all Puppeteer-specific errors

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `PuppeteerError` class.

|
| [PuppeteerNode](https://pptr.dev/api/puppeteer.puppeteernode) |

Extends the main [Puppeteer](https://pptr.dev/api/puppeteer.puppeteer) class with Node specific behaviour for fetching and downloading browsers.

If you're using Puppeteer in a Node environment, this is the class you'll get when you run `require('puppeteer')` (or the equivalent ES `import`).

**Remarks:**

The most common method to use is [launch](https://pptr.dev/api/puppeteer.puppeteernode.launch), which is used to launch and connect to a new browser instance.

See [the main Puppeteer class](https://pptr.dev/api/puppeteer.puppeteer) for methods common to all environments, such as [Puppeteer.connect()](https://pptr.dev/api/puppeteer.puppeteer.connect).

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `PuppeteerNode` class.

|
| [ScreenRecorder](https://pptr.dev/api/puppeteer.screenrecorder) |

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ScreenRecorder` class.

|
| [SecurityDetails](https://pptr.dev/api/puppeteer.securitydetails) |

The SecurityDetails class represents the security details of a response that was received over a secure connection.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `SecurityDetails` class.

|
| [Target](https://pptr.dev/api/puppeteer.target) |

Target represents a [CDP target](https://chromedevtools.github.io/devtools-protocol/tot/Target/). In CDP a target is something that can be debugged such a frame, a page or a worker.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Target` class.

|
| [TimeoutError](https://pptr.dev/api/puppeteer.timeouterror) |

TimeoutError is emitted whenever certain operations are terminated due to timeout.

**Remarks:**

Example operations are [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector) or [puppeteer.launch](https://pptr.dev/api/puppeteer.puppeteernode.launch).

|
| [Touchscreen](https://pptr.dev/api/puppeteer.touchscreen) |

The Touchscreen class exposes touchscreen events.

**Remarks:**

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Touchscreen` class.

|
| [Tracing](https://pptr.dev/api/puppeteer.tracing) |

The Tracing class exposes the tracing audit interface.

**Remarks:**

You can use `tracing.start` and `tracing.stop` to create a trace file which can be opened in Chrome DevTools or [timeline viewer](https://chromedevtools.github.io/timeline-viewer/).

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Tracing` class.

|
| [UnsupportedOperation](https://pptr.dev/api/puppeteer.unsupportedoperation) |

Puppeteer will throw this error if a method is not supported by the currently used protocol

|
| [WebWorker](https://pptr.dev/api/puppeteer.webworker) |

This class represents a [WebWorker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

**Remarks:**

The events `workercreated` and `workerdestroyed` are emitted on the page object to signal the worker lifecycle.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `WebWorker` class.

|

## Enumerations[​](https://pptr.dev/api#enumerations 'Direct link to Enumerations')

|
Enumeration

|

Description

|                                                                           |
| ------------------------------------------------------------------------- | --- |
| [BrowserContextEvent](https://pptr.dev/api/puppeteer.browsercontextevent) |     |
| [BrowserEvent](https://pptr.dev/api/puppeteer.browserevent)               |

All the events a [browser instance](https://pptr.dev/api/puppeteer.browser) may emit.

|
| [InterceptResolutionAction](https://pptr.dev/api/puppeteer.interceptresolutionaction) | |
| [LocatorEvent](https://pptr.dev/api/puppeteer.locatorevent) |

All the events that a locator instance may emit.

|
| [PageEvent](https://pptr.dev/api/puppeteer.pageevent) |

All the events that a page instance may emit.

|
| [TargetType](https://pptr.dev/api/puppeteer.targettype) | |

## Functions[​](https://pptr.dev/api#functions 'Direct link to Functions')

|
Function

|

Description

|                                                                                       |
| ------------------------------------------------------------------------------------- |
| [clearCustomQueryHandlers()](https://pptr.dev/api/puppeteer.clearcustomqueryhandlers) |

**Deprecated:**

Import [Puppeteer](https://pptr.dev/api/puppeteer.puppeteer) and use the static method [Puppeteer.clearCustomQueryHandlers()](https://pptr.dev/api/puppeteer.puppeteer.clearcustomqueryhandlers)

|
| [connect(options)](https://pptr.dev/api/puppeteer.connect) | |
| [customQueryHandlerNames()](https://pptr.dev/api/puppeteer.customqueryhandlernames) |

**Deprecated:**

Import [Puppeteer](https://pptr.dev/api/puppeteer.puppeteer) and use the static method [Puppeteer.customQueryHandlerNames()](https://pptr.dev/api/puppeteer.puppeteer.customqueryhandlernames)

|
| [defaultArgs(options)](https://pptr.dev/api/puppeteer.defaultargs) | |
| [executablePath(channel)](https://pptr.dev/api/puppeteer.executablepath) | |
| [launch(options)](https://pptr.dev/api/puppeteer.launch) | |
| [registerCustomQueryHandler(name, handler)](https://pptr.dev/api/puppeteer.registercustomqueryhandler) |

**Deprecated:**

Import [Puppeteer](https://pptr.dev/api/puppeteer.puppeteer) and use the static method [Puppeteer.registerCustomQueryHandler()](https://pptr.dev/api/puppeteer.puppeteer.registercustomqueryhandler)

|
| [trimCache()](https://pptr.dev/api/puppeteer.trimcache) | |
| [unregisterCustomQueryHandler(name)](https://pptr.dev/api/puppeteer.unregistercustomqueryhandler) |

**Deprecated:**

Import [Puppeteer](https://pptr.dev/api/puppeteer.puppeteer) and use the static method [Puppeteer.unregisterCustomQueryHandler()](https://pptr.dev/api/puppeteer.puppeteer.unregistercustomqueryhandler)

|

## Interfaces[​](https://pptr.dev/api#interfaces 'Direct link to Interfaces')

|
Interface

|

Description

|                                                                               |
| ----------------------------------------------------------------------------- | --- |
| [ActionOptions](https://pptr.dev/api/puppeteer.actionoptions)                 |     |
| [AutofillData](https://pptr.dev/api/puppeteer.autofilldata)                   |     |
| [BoundingBox](https://pptr.dev/api/puppeteer.boundingbox)                     |     |
| [BoxModel](https://pptr.dev/api/puppeteer.boxmodel)                           |     |
| [BrowserConnectOptions](https://pptr.dev/api/puppeteer.browserconnectoptions) |

Generic browser options that can be passed when launching any browser or when connecting to an existing browser instance.

|
| [BrowserContextEvents](https://pptr.dev/api/puppeteer.browsercontextevents) | |
| [BrowserContextOptions](https://pptr.dev/api/puppeteer.browsercontextoptions) | |
| [BrowserEvents](https://pptr.dev/api/puppeteer.browserevents) | |
| [BrowserLaunchArgumentOptions](https://pptr.dev/api/puppeteer.browserlaunchargumentoptions) |

Launcher options that only apply to Chrome.

|
| [CDPSessionEvents](https://pptr.dev/api/puppeteer.cdpsessionevents) | |
| [ClickOptions](https://pptr.dev/api/puppeteer.clickoptions) | |
| [CommandOptions](https://pptr.dev/api/puppeteer.commandoptions) | |
| [CommonEventEmitter](https://pptr.dev/api/puppeteer.commoneventemitter) | |
| [Configuration](https://pptr.dev/api/puppeteer.configuration) |

Defines options to configure Puppeteer's behavior during installation and runtime.

See individual properties for more information.

|
| [ConnectionTransport](https://pptr.dev/api/puppeteer.connectiontransport) | |
| [ConnectOptions](https://pptr.dev/api/puppeteer.connectoptions) | |
| [ConsoleMessageLocation](https://pptr.dev/api/puppeteer.consolemessagelocation) | |
| [ContinueRequestOverrides](https://pptr.dev/api/puppeteer.continuerequestoverrides) | |
| [Cookie](https://pptr.dev/api/puppeteer.cookie) |

Represents a cookie object.

|
| [CookieParam](https://pptr.dev/api/puppeteer.cookieparam) |

Cookie parameter object

|
| [CoverageEntry](https://pptr.dev/api/puppeteer.coverageentry) |

The CoverageEntry class represents one entry of the coverage report.

|
| [Credentials](https://pptr.dev/api/puppeteer.credentials) | |
| [CSSCoverageOptions](https://pptr.dev/api/puppeteer.csscoverageoptions) |

Set of configurable options for CSS coverage.

|
| [CustomQueryHandler](https://pptr.dev/api/puppeteer.customqueryhandler) | |
| [DebugInfo](https://pptr.dev/api/puppeteer.debuginfo) |

**_(Experimental)_**

|
| [DeleteCookiesRequest](https://pptr.dev/api/puppeteer.deletecookiesrequest) | |
| [Device](https://pptr.dev/api/puppeteer.device) | |
| [ElementScreenshotOptions](https://pptr.dev/api/puppeteer.elementscreenshotoptions) | |
| [FrameAddScriptTagOptions](https://pptr.dev/api/puppeteer.frameaddscripttagoptions) | |
| [FrameAddStyleTagOptions](https://pptr.dev/api/puppeteer.frameaddstyletagoptions) | |
| [FrameEvents](https://pptr.dev/api/puppeteer.frameevents) | |
| [FrameWaitForFunctionOptions](https://pptr.dev/api/puppeteer.framewaitforfunctionoptions) | |
| [GeolocationOptions](https://pptr.dev/api/puppeteer.geolocationoptions) | |
| [GoToOptions](https://pptr.dev/api/puppeteer.gotooptions) | |
| [InterceptResolutionState](https://pptr.dev/api/puppeteer.interceptresolutionstate) | |
| [InternalNetworkConditions](https://pptr.dev/api/puppeteer.internalnetworkconditions) | |
| [JSCoverageEntry](https://pptr.dev/api/puppeteer.jscoverageentry) |

The CoverageEntry class for JavaScript

|
| [JSCoverageOptions](https://pptr.dev/api/puppeteer.jscoverageoptions) |

Set of configurable options for JS coverage.

|
| [KeyboardTypeOptions](https://pptr.dev/api/puppeteer.keyboardtypeoptions) | |
| [KeyDownOptions](https://pptr.dev/api/puppeteer.keydownoptions) | |
| [LaunchOptions](https://pptr.dev/api/puppeteer.launchoptions) |

Generic launch options that can be passed when launching any browser.

|
| [LocatorEvents](https://pptr.dev/api/puppeteer.locatorevents) | |
| [LocatorOptions](https://pptr.dev/api/puppeteer.locatoroptions) | |
| [LocatorScrollOptions](https://pptr.dev/api/puppeteer.locatorscrolloptions) | |
| [MediaFeature](https://pptr.dev/api/puppeteer.mediafeature) | |
| [Metrics](https://pptr.dev/api/puppeteer.metrics) | |
| [MouseClickOptions](https://pptr.dev/api/puppeteer.mouseclickoptions) | |
| [MouseMoveOptions](https://pptr.dev/api/puppeteer.mousemoveoptions) | |
| [MouseOptions](https://pptr.dev/api/puppeteer.mouseoptions) | |
| [MouseWheelOptions](https://pptr.dev/api/puppeteer.mousewheeloptions) | |
| [Moveable](https://pptr.dev/api/puppeteer.moveable) | |
| [NetworkConditions](https://pptr.dev/api/puppeteer.networkconditions) | |
| [NewDocumentScriptEvaluation](https://pptr.dev/api/puppeteer.newdocumentscriptevaluation) | |
| [Offset](https://pptr.dev/api/puppeteer.offset) | |
| [PageEvents](https://pptr.dev/api/puppeteer.pageevents) |

Denotes the objects received by callback functions for page events.

See [PageEvent](https://pptr.dev/api/puppeteer.pageevent) for more detail on the events and when they are emitted.

|
| [PDFMargin](https://pptr.dev/api/puppeteer.pdfmargin) | |
| [PDFOptions](https://pptr.dev/api/puppeteer.pdfoptions) |

Valid options to configure PDF generation via [Page.pdf()](https://pptr.dev/api/puppeteer.page.pdf).

|
| [Point](https://pptr.dev/api/puppeteer.point) | |
| [PuppeteerLaunchOptions](https://pptr.dev/api/puppeteer.puppeteerlaunchoptions) | |
| [RemoteAddress](https://pptr.dev/api/puppeteer.remoteaddress) | |
| [ResponseForRequest](https://pptr.dev/api/puppeteer.responseforrequest) |

Required response data to fulfill a request with.

|
| [ScreencastOptions](https://pptr.dev/api/puppeteer.screencastoptions) |

**_(Experimental)_**

|
| [ScreenshotClip](https://pptr.dev/api/puppeteer.screenshotclip) | |
| [ScreenshotOptions](https://pptr.dev/api/puppeteer.screenshotoptions) | |
| [SerializedAXNode](https://pptr.dev/api/puppeteer.serializedaxnode) |

Represents a Node and the properties of it that are relevant to Accessibility.

|
| [SnapshotOptions](https://pptr.dev/api/puppeteer.snapshotoptions) | |
| [TracingOptions](https://pptr.dev/api/puppeteer.tracingoptions) | |
| [Viewport](https://pptr.dev/api/puppeteer.viewport) | |
| [WaitForNetworkIdleOptions](https://pptr.dev/api/puppeteer.waitfornetworkidleoptions) | |
| [WaitForOptions](https://pptr.dev/api/puppeteer.waitforoptions) | |
| [WaitForSelectorOptions](https://pptr.dev/api/puppeteer.waitforselectoroptions) | |
| [WaitForTargetOptions](https://pptr.dev/api/puppeteer.waitfortargetoptions) | |
| [WaitTimeoutOptions](https://pptr.dev/api/puppeteer.waittimeoutoptions) | |

## Namespaces[​](https://pptr.dev/api#namespaces 'Direct link to Namespaces')

|
Namespace

|

Description

|                                                                   |
| ----------------------------------------------------------------- |
| [CDPSessionEvent](https://pptr.dev/api/puppeteer.cdpsessionevent) |

Events that the CDPSession class emits.

|

## Variables[​](https://pptr.dev/api#variables 'Direct link to Variables')

|
Variable

|

Description

|                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- |
| [DEFAULT_INTERCEPT_RESOLUTION_PRIORITY](https://pptr.dev/api/puppeteer.default_intercept_resolution_priority) |

The default cooperative request interception resolution priority

|
| [KnownDevices](https://pptr.dev/api/puppeteer.knowndevices) |

A list of devices to be used with [Page.emulate()](https://pptr.dev/api/puppeteer.page.emulate).

|
| [MouseButton](https://pptr.dev/api/puppeteer.mousebutton) |

Enum of valid mouse buttons.

|
| [PredefinedNetworkConditions](https://pptr.dev/api/puppeteer.predefinednetworkconditions) |

A list of network conditions to be used with [Page.emulateNetworkConditions()](https://pptr.dev/api/puppeteer.page.emulatenetworkconditions).

|
| [puppeteer](https://pptr.dev/api/puppeteer.puppeteer) | |

## Type Aliases[​](https://pptr.dev/api#type-aliases 'Direct link to Type Aliases')

|
Type Alias

|

Description

|                                                                             |
| --------------------------------------------------------------------------- | --- |
| [ActionResult](https://pptr.dev/api/puppeteer.actionresult)                 |     |
| [Awaitable](https://pptr.dev/api/puppeteer.awaitable)                       |     |
| [AwaitableIterable](https://pptr.dev/api/puppeteer.awaitableiterable)       |     |
| [AwaitablePredicate](https://pptr.dev/api/puppeteer.awaitablepredicate)     |     |
| [AwaitedLocator](https://pptr.dev/api/puppeteer.awaitedlocator)             |     |
| [CDPEvents](https://pptr.dev/api/puppeteer.cdpevents)                       |     |
| [ChromeReleaseChannel](https://pptr.dev/api/puppeteer.chromereleasechannel) |     |
| [ConsoleMessageType](https://pptr.dev/api/puppeteer.consolemessagetype)     |

The supported types for console messages.

|
| [CookiePriority](https://pptr.dev/api/puppeteer.cookiepriority) |

Represents the cookie's 'Priority' status: [https://tools.ietf.org/html/draft-west-cookie-priority-00](https://tools.ietf.org/html/draft-west-cookie-priority-00)

|
| [CookieSameSite](https://pptr.dev/api/puppeteer.cookiesamesite) |

Represents the cookie's 'SameSite' status: [https://tools.ietf.org/html/draft-west-first-party-cookies](https://tools.ietf.org/html/draft-west-first-party-cookies)

|
| [CookieSourceScheme](https://pptr.dev/api/puppeteer.cookiesourcescheme) |

Represents the source scheme of the origin that originally set the cookie. A value of "Unset" allows protocol clients to emulate legacy cookie scope for the scheme. This is a temporary ability and it will be removed in the future.

|
| [ElementFor](https://pptr.dev/api/puppeteer.elementfor) | |
| [ErrorCode](https://pptr.dev/api/puppeteer.errorcode) | |
| [EvaluateFunc](https://pptr.dev/api/puppeteer.evaluatefunc) | |
| [EvaluateFuncWith](https://pptr.dev/api/puppeteer.evaluatefuncwith) | |
| [EventsWithWildcard](https://pptr.dev/api/puppeteer.eventswithwildcard) | |
| [EventType](https://pptr.dev/api/puppeteer.eventtype) | |
| [ExperimentsConfiguration](https://pptr.dev/api/puppeteer.experimentsconfiguration) |

Defines experiment options for Puppeteer.

See individual properties for more information.

|
| [FlattenHandle](https://pptr.dev/api/puppeteer.flattenhandle) | |
| [HandleFor](https://pptr.dev/api/puppeteer.handlefor) | |
| [HandleOr](https://pptr.dev/api/puppeteer.handleor) | |
| [Handler](https://pptr.dev/api/puppeteer.handler) | |
| [InnerParams](https://pptr.dev/api/puppeteer.innerparams) | |
| [KeyInput](https://pptr.dev/api/puppeteer.keyinput) |

All the valid keys that can be passed to functions that take user input, such as [keyboard.press](https://pptr.dev/api/puppeteer.keyboard.press)

|
| [KeyPressOptions](https://pptr.dev/api/puppeteer.keypressoptions) | |
| [LocatorClickOptions](https://pptr.dev/api/puppeteer.locatorclickoptions) | |
| [LowerCasePaperFormat](https://pptr.dev/api/puppeteer.lowercasepaperformat) | |
| [Mapper](https://pptr.dev/api/puppeteer.mapper) | |
| [MouseButton](https://pptr.dev/api/puppeteer.mousebutton) | |
| [NodeFor](https://pptr.dev/api/puppeteer.nodefor) | |
| [PaperFormat](https://pptr.dev/api/puppeteer.paperformat) |

All the valid paper format types when printing a PDF.

**Remarks:**

The sizes of each format are as follows:

-   `Letter`: 8.5in x 11in
-   `Legal`: 8.5in x 14in
-   `Tabloid`: 11in x 17in
-   `Ledger`: 17in x 11in
-   `A0`: 33.1in x 46.8in
-   `A1`: 23.4in x 33.1in
-   `A2`: 16.54in x 23.4in
-   `A3`: 11.7in x 16.54in
-   `A4`: 8.27in x 11.7in
-   `A5`: 5.83in x 8.27in
-   `A6`: 4.13in x 5.83in

|
| [Permission](https://pptr.dev/api/puppeteer.permission) | |
| [Predicate](https://pptr.dev/api/puppeteer.predicate) | |
| [Product](https://pptr.dev/api/puppeteer.product) |

Supported products.

|
| [ProtocolLifeCycleEvent](https://pptr.dev/api/puppeteer.protocollifecycleevent) | |
| [ProtocolType](https://pptr.dev/api/puppeteer.protocoltype) | |
| [PuppeteerLifeCycleEvent](https://pptr.dev/api/puppeteer.puppeteerlifecycleevent) | |
| [PuppeteerNodeLaunchOptions](https://pptr.dev/api/puppeteer.puppeteernodelaunchoptions) |

Utility type exposed to enable users to define options that can be passed to `puppeteer.launch` without having to list the set of all types.

|
| [Quad](https://pptr.dev/api/puppeteer.quad) | |
| [ResourceType](https://pptr.dev/api/puppeteer.resourcetype) |

Resource types for HTTPRequests as perceived by the rendering engine.

|
| [TargetFilterCallback](https://pptr.dev/api/puppeteer.targetfiltercallback) | |
| [VisibilityOption](https://pptr.dev/api/puppeteer.visibilityoption) | |
