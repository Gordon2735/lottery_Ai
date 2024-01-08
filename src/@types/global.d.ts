export {};

declare global {
	interface Window {
		somePropertyHere: any;
	}
	interface Date {
		getWeek(): number;
	}
}
