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
}
