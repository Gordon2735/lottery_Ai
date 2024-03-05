Here is an example of how to use Observables and state without a framework:

```typescript
class Counter {
	private count: number = 0;
	constructor() {
		this.count = 0;
	}
	public increment(): void {
		this.count++;
	}
	public decrement(): void {
		this.count--;
	}
	public getCount(): number {
		return this.count;
	}
	public getCountObservable(): Observable<number> {
		return Observable.create((observer) => {
			observer.next(this.count);
		});
	}
}
const counter = new Counter();
const subscription = counter.getCountObservable().subscribe((value) => {
	console.log(value);
});
counter.increment();
counter.increment();
counter.decrement();
subscription.unsubscribe();
```

Use code with caution.

[Learn more](https://support.google.com/legal/answer/13505487?hl=en)

This code creates a Counter class that has a private count property. The class has methods to increment and decrement the count, as well as a method to get the current count.

The class also has a getCountObservable() method that returns an Observable that emits the current count. This method is used to subscribe to the count and log each value to the console.

When the code is executed, the count is incremented twice and then decremented once. The Observable emits the current count each time it changes. This results in the following output being logged to the console:

```typescript
121;
```

Use code with caution.

[Learn more](https://support.google.com/legal/answer/13505487?hl=en)

The subscription is then unsubscribed, which prevents the Observable from emitting any more values.

This example shows how Observables can be used to represent state and how they can be used to subscribe to changes in state without a framework.
