export {};

declare global {
	interface Window {
		somePropertyHere: string;
	}
	interface Date {
		getWeek(): number;
	}
	// interface User {
	// 	username: string;
	// 	password: string;
	// }
}
