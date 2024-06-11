export {};

declare global {
    interface Window {
        somePropertyHere: string;
        myNewProperty: string;
    }
    interface Date {
        getWeek(): number;
    }
    // interface User {
    // 	username: string;
    // 	password: string;
    // }

    interface State {
        [key: string]: object;
    }
    interface Actions {
        [key: string]: object;
    }
    interface Mutations {
        [key: string]: object;
    }
    interface Stores {
        actions: Actions;
        mutations: Mutations;
        state: State;
        status: string;
        events: PubSub;
        mixed: Array<number | string | boolean>;
    }
    type mixed = Array<number | string | boolean>;

    type GlobalErrorContent = {
        message: string;
        context?: { [key: string]: unknown };
    };

    interface HTMLElementTagNameMap {
        'pick3-scrape': Pick3Scrape;
    }

    interface scrapeData {
        [drawEvent: string | null | undefined]: string;
        [winNumbers: string]: string;
        [fireNum: string | null | undefined]: string;
    }
    [] | null | undefined | string;

    interface IPick3DataObject {
        [years: number]: {
            year: string[];
            midDay: string[];
            evening: string[];
        };
    }
    [];

    interface HTMLCanvasElement extends HTMLElement {
        // ...
        transferControlToOffscreen(): OffscreenCanvas;
    }
    interface OffscreenCanvasRenderingContext2D
        extends CanvasState,
            CanvasTransform,
            CanvasCompositing,
            CanvasImageSmoothing,
            CanvasFillStrokeStyles,
            CanvasShadowStyles,
            CanvasFilters,
            CanvasRect,
            CanvasDrawPath,
            CanvasUserInterface,
            CanvasText,
            CanvasDrawImage,
            CanvasImageData,
            CanvasPathDrawingStyles,
            CanvasTextDrawingStyles,
            CanvasPath {
        readonly canvas: OffscreenCanvas;
    }
    declare const OffscreenCanvasRenderingContext2D: {
        prototype: OffscreenCanvasRenderingContext2D;
        new (): OffscreenCanvasRenderingContext2D;
    };

    type Transferable =
        | ArrayBuffer
        | MessagePort
        | ImageBitmap
        | OffscreenCanvas;
}

// interface OffscreenCanvas extends EventTarget {
//     width: number;
//     height: number;
//     getContext(
//         contextId: '2d',
//         contextAttributes?: CanvasRenderingContext2DSettings
//     ): OffscreenCanvasRenderingContext2D | null;
// }
// declare const OffscreenCanvas: {
//     prototype: OffscreenCanvas;
//     new (width: number, height: number): OffscreenCanvas;
// };
