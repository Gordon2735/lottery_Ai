'use strict';

// Node Version of LOGIC:
// class ProgressSpinner {
// 	private intervalId: NodeJS.Timeout | null = null;
// 	private isLoading: boolean = false;

// 	startLoading(): void {
// 		if (this.isLoading) return;

// 		this.isLoading = true;
// 		this.intervalId = setInterval(() => this.showSpinner(), 100);
// 	}

// 	stopLoading(): void {
// 		if (!this.isLoading) return;

// 		if (this.intervalId) {
// 			clearInterval(this.intervalId);
// 			this.intervalId = null;
// 			this.isLoading = false;
// 			this.clearSpinner();
// 		}
// 	}

// 	private showSpinner(): void {
// 		process.stdout.write('\r- Loading   ');
// 		process.stdout.write('\r\\ Loading   ');
// 		process.stdout.write('\r| Loading   ');
// 		process.stdout.write('\r/ Loading   ');
// 	}

// 	private clearSpinner(): void {
// 		process.stdout.clearLine(0);
// 		process.stdout.cursorTo(0);
// 		process.stdout.write('- Loading Complete\n');
// 	}
// }

// // Example usage
// const spinner = new ProgressSpinner();

// // Simulate a task that takes 5 seconds to complete
// spinner.startLoading();
// setTimeout(() => {
// 	spinner.stopLoading();
// }, 5000);

// Client-Side Version of LOGIC:
class ProgressSpinner {
	private spinnerElement: HTMLElement | null = null;
	private isLoading: boolean = false;

	constructor(private containerId: string) {
		this.spinnerElement = document.createElement('div');
		this.spinnerElement.innerHTML = `
            <div id="spinner" style="display: none;">
                <div class="spinner"></div>
                <div class="loading-text">Loading...</div>
            </div>
        `;
		document
			.getElementById(this.containerId)
			?.appendChild(this.spinnerElement);
	}

	startLoading(): void {
		if (this.isLoading || !this.spinnerElement) return;

		this.isLoading = true;
		this.spinnerElement.style.display = 'block';
	}

	stopLoading(): void {
		if (!this.isLoading || !this.spinnerElement) return;

		this.isLoading = false;
		this.spinnerElement.style.display = 'none';
	}
}

// Example usage
const spinner = new ProgressSpinner('app');

// Simulate a task that takes 5 seconds to complete
spinner.startLoading();
setTimeout(() => {
	spinner.stopLoading();
}, 5000);
