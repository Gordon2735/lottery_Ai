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

    // interface IPick3DataObject {
    //     [year: string]: string;
    //     [midDay: string]: string[];
    //     [evening: string]: string[];
    // }
    [];
    interface IPick3DataObject {
        [years: string]: {
            year: string[];
            midDay: string[];
            evening: string[];
        };
    }
    [];
}
