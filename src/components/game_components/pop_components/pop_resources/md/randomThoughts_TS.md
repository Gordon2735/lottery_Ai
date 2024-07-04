# Random thoughts on randomization in TypeScript

[#typescript](https://dev.to/t/typescript) [#math](https://dev.to/t/math) [#random](https://dev.to/t/random)

Jim Armstrong | ng-conf | Feb 2020

_A few Typescript utility functions that are helpful with computations involving random processes_

This article stems from a recent discussion with a developer that revived a topic I’ve dealt with periodically over several decades and many programming environments. The greatest frequency of encounters with this specific issue have come from work in front-end development, so I thought it would be worth a short article.

I’ve worked in a number of programming environments over the years and each one contained a ‘random’ number generator. Regardless of language, each of these generators share the same problems, and each usage of such a generator spawns the exact same set of issues.

This article discusses a few of the historical problems I’ve encountered involving ‘random’ computations. Some Typescript libraries are provided for you that can be dropped into any Angular (or React/Vue) application.

So, before we begin, here is the GitHub for the article (note that this repo contains selected files from my master Typescript Math Toolkit collection that have been open-sourced):

[theAlgorithmist/TypescriptRandom](https://github.com/theAlgorithmist/TypescriptRandom) on GitHub

### [](https://dev.to/ngconf/random-thoughts-on-randomization-in-typescript-57no#preliminaries)**Preliminaries**

A typical ‘random’ number generator or RNG returns a number in the interval \[0,1). This is just a fancy way to say the interval of numbers greater than or equal to zero, but less than one. In general, _\[a, b\]_ means all numbers in the interval _a_ to _b_, inclusive. _(a, b\]_ means all numbers in the interval _a_ to _b_, excluding _a_, but including _b_. _\[a, b)_ means all numbers in the interval _a_ to _b_, including _a_, but excluding _b_.

Mathematicians like to call RNG’s _pseudo-random_ as the generated iterates are often periodic and not truly random.

The most common algorithm for a RNG is the [linear, congruential generator (LCG)](https://en.wikipedia.org/wiki/Linear_congruential_generator). LCG’s are easy to program, fast, require little memory, and are ‘good enough’ for many applications, given careful consideration of LCG parameters. The sequence of iterates is periodic, but the period is very large. The RNG does not require a seed, so its API is very simple.

Although they are convenient, do not use a language-specific RNG (i.e. _Math.random()_) for any application in which the statistical quality of its output may be called into consideration as part of the acceptance of an application. In other words, okay for simple games, not okay for an online casino :)

The remainder of this article discusses some problems I’ve encountered that involve random computation. And, just in case you are experiencing math anxiety, relax. This is a casual, high-level article with no equations.

### [](https://dev.to/ngconf/random-thoughts-on-randomization-in-typescript-57no#random-integer-in-range)**Random Integer In Range**

This is the primary problem that lead me to write this article. Computing a ‘random’ integer in some prescribed range (or interval) is a common computation in games and interactive applications involving choices that may differ each time the application is executed.

When asked to write the code to return a pseudo-random integer in the interval _\[a, b\]_ (where _a_ and _b_ are integers and _b > a_), a common response is

```typescript
result = a + Math.round(Math.random() * (b - a));
```

Enter fullscreen mode Exit fullscreen mode

Let’s look at some potential pitfalls with the formula. There will be some deviation from a true random distribution of integers as a side-effect of the qualitative aspects of the RNG. But, there is also a problem with bias away from the endpoints of the interval. To see an example of this problem, consider integers ‘randomly’ sampled from the interval \[0, 3\], i.e. 0, 1, 2, or 3.

For a large number of samples, we expect the frequency of each integer to be approximately 1/4 the sample size. In fact, a perfect random generator should approach this result as the sample size tends to infinity.

In reality, the numbers 1 and 2 are about twice as likely to be chosen as 0 and 3 with the above formula, even with a perfectly random number generator! The problem lies in the rounding operation. The result of _Math.random()_ is multiplied by 3, which produces numbers in \[0, 3) that are rounded to the nearest integer. This result is added to the left endpoint, 0, to compute the final result. The choice of 0, 1, 2, 3 makes the following analysis simpler, but it can be generalized to any interval.

Consider that

Numbers in the interval \[0, 0.5) are rounded to zero (interval width ~ 0.5)

Numbers in the interval \[0.5, 1.5) are rounded to one (interval width ~ 1.0)

Numbers in the interval \[1.5, 2.5) are rounded to two (interval width ~ 1.0)

Numbers in the interval \[2.5, 3\] are rounded to three (interval width ~ 0.5)

For uniform samples between zero and one, about twice as many numbers are rounded to 1 or 2 than 0 or 3. We can think of it in terms of a physical device designed to catch rain water. Imagine a collection device that has four compartments. The two compartments at the end are half a foot in length. The two compartments in the middle are a foot in length. If raindrops are uniformly spread across the entire length of the rain collector, we expect about twice as much rain to be gathered in the middle compartments over the long term.

The classic solution to this problem is very simple and goes back to the late 1960s in Fortran. Simply subtract 0.499 from the left endpoint and add 0.499 to the right endpoint before the computation. This expands the interval width for rounding at each of the endpoints to match those inside the interval.

This solution is already implemented in the Typescript Math Toolkit _TSMT$RandomIntInRange_ class, included with the code distribution. The difference between the two approaches is highlighted in the jest test specs. A sample size of 10000 is used and two counts are computed. The first records the number of times 1 or 2 is generated and the second counts the number of times 0 or 3 is generated. For a perfect RNG and a sufficiently large sample size, the ratio of these two counts should be very close to 1.0.

With the Typescript Math Toolkit library, this is the case. The classic formula consistently produces a ratio closer to 2.0. Here is the code segment from the jest tests in the code distribution for this article,

```typescript
describe('Random Integer in Range', () => {
    let i: number;
    let x: number;
    let i1: number = 0;
    let i2: number = 3;
    let f0: number = 0;
    let f1: number = 0;

    for (i = 0; i < 10000; ++i) {
        x = i1 + Math.round(Math.random() * (i2 - i1));

        if (x == 0 || x == 3) f0++;
        else f1++;
    }

    let ratio1: number = f1 / f0;
    console.log('0 & 3 frequency: ', f0);
    console.log('1 & 2 frequency: ', f1);
    console.log('ratio: ', ratio1);

    let generator: TSMT$RandomIntInRange = new TSMT$RandomIntInRange(0, 3);
    f0 = 0;
    f1 = 0;

    for (i = 0; i < 10000; ++i) {
        x = generator.generate();

        if (x == 0 || x == 3) f0++;
        else f1++;
    }

    let ratio2: number = f1 / f0;
    console.log('0 & 3 frequency: ', f0);
    console.log('1 & 2 frequency: ', f1);
    console.log('ratio: ', ratio2);

    test('generates consistent iterates in interval', () => {
        expect(ratio2 < ratio1).toBe(true);
    });
});
```

Enter fullscreen mode Exit fullscreen mode

This test was ported from some old C++ code I wrote back in the 1990’s, so some apologies are in order for my TS code looking like my old C++ code :)

The bias is very noticeable for small intervals and it is almost unnoticeable for large intervals. It can result in a lot of frustration and arguments among developers and project managers/owners, however. I’ve actually been called upon multiple times to investigate allegations of incorrect behavior in educational games that used the above formula to generate an action. In every case, the solution was the same :)

Another advantage of the Typescript Math Toolkit class is the ability to use a seeded RNG. This serves as a good segue into the next topic.

### [](https://dev.to/ngconf/random-thoughts-on-randomization-in-typescript-57no#seeded-rngs)**Seeded RNG’s**

RNG’s typically require a seed or initial value. _Math.random()_ does not expose a seed as part of its API. As a result, a different sequence of iterates is produced every time an application is run. There is nothing more frustrating than to run an application for the first time and notice a bug during the third pass through some sequence of UI operations. The entire application is then run again through the debugger and the problem seems to disappear.

The issue here is that computations performed on the result of _Math.random()_ that in turn affect UI behavior make the UI non-deterministic. This can make debugging highly interactive, game-like applications a serious pain in the \*\*\*.

I’ve applied two different techniques to solving this problem in the past. The first is to replace _Math.random()_ with an (injected) static value, say 0.1. Then, progressively increment by an arbitrary delta (such as 0.1) until the problem is isolated. This results in a bracket interval in which a problem results. Computations can then be examined for issues/outliers that occur for values in the problem interval.

The second approach is to use a seeded random number generator.

A seeded RNG takes an initial (integer) seed value as an argument and generates a sequences of pseudo-random iterates. The exact same sequence of iterates is always produced for the same seed value. This makes debugging easier in the sense that with a fixed seed, each execution of an application produces the same sequence of iterates. So, if a bug is present on the third pass through a sequence of interactions with the UI, it will always be present on the third pass. To make the process different for each run of the application, it is necessary to have a procedure to vary the seed value.

The code distribution for this article contains an implementation of a seeded Park-Miller RNG. It is still a LCG, but one with generally better statistical qualities than LCG’s provided in language-specific RNG’s. The Park-Miller RNG may be used standalone or selected for use in selecting pseudo-random integers in an interval.

### [](https://dev.to/ngconf/random-thoughts-on-randomization-in-typescript-57no#binning)**Binning**

Another operation often required in highly interactive applications is the selection of a specific action a specified percentage of the time (on average). We are given a list of named actions and each action must be selected a certain percentage of the time. The percentages must sum to 100.

As an example, consider the following:

-   Choose ‘action1’ approximately 50% of the time
-   Choose ‘action2’ approximately 20% of the time
-   Choose ‘action3’ approximately 20% of the time
-   Choose ‘action4’ approximately 10% of the time

‘Approximate’ comes from the realization that the percentages will only be realized exactly in the limit as the number of trials tends to infinity AND with a perfect RNG.

This problem can be solved with a process sometimes called ‘binning.’ The idea is to normalize the percentages to the interval \[0,1\] and create a ‘bin’ for each action. Each bin contains a running sum, which is best illustrated by example. For the above problem, the normalized percentages are 0.5, 0.2, 0.2, and 0.1. The bins may be stored in an array where each array element contains the sum of its value and all prior values, with an initial value of zero. So, the bins are \[0.5, 0.7, 0.9, 1.0\].

Now, generate a uniform iterate from _Math.random()_. Choose the first bin in which the iterate is less than or equal to the bin value. The index of that bin indicates which action to select. Actions are simply a string array whose values are acted on in a manner meaningful to a specific application, i.e. select a route, display a component, etc.

For example, suppose the value from _Math.random()_ is 0.65. The second bin with a value of 0.7 is chosen, so an index of 1 is used to select ‘action2’ from an array of actions.

The Typescript Math Toolkit binning class is provided for you in the code distribution. I’ve used some version of this class in Fortran, C, C++, ActionsScript, JS, and Typescript in past applications. Here is an example that creates three bins for actions ‘action1,’ ‘action2’, and ‘action3’. ‘action1’ is to be chosen approximately 60% of the time, ‘action2’ approximately 30% of the time, and ‘action3’ approximately ‘10%’ of the time.

```typescript
const binning: TSMT$Bin = new TSMT$Bin();
const result: boolean = binning.create([
    { percentage: 60, action: 'action1' },
    { percentage: 30, action: 'action2' },
    { percentage: 10, action: 'action2' }
]);
```

Enter fullscreen mode Exit fullscreen mode

The following block illustrates how to create four bins (‘action1’, ‘action2’, ‘action3’, ‘action4’) that are selected approximately 50, 20, 20 and 10 percent of the time,

```typescript

const binning: TSMT$Bin = new TSMT$Bin();
const result: boolean = binning.create([
  {percentage: 50, action: 'action1'},
  {percentage: 20, action: 'action2'},
  {percentage: 20, action: 'action3'},
  {percentage: 10, action: 'action4'}
]);
.
.
.
let string: result = binning.nextAction();
.
.
.
subsequent calls to nextAction()
```

Enter fullscreen mode Exit fullscreen mode

Each call to the nextAction() method returns one of the specified actions at an approximate frequency indicated by the bin setup. More examples are available for you in the test specs.

### [](https://dev.to/ngconf/random-thoughts-on-randomization-in-typescript-57no#selections-from-other-distributions)**Selections From Other Distributions**

So far, we’ve looked at sampling from a uniform distribution, i.e. all iterates in \[0,1) are equally likely to be chosen. An offshoot of the binning problem is to select items ‘at random’ from non-uniform distributions. This can be useful for cases where some generalities about the distribution of choices is known, but it is not possible to create a 1–1 relationship between percentage of choice and action.

Pseudo-random selections from known distributions are called deviates in statistical parlance. A _Deviates_ class is provided for you that allows sampling from uniform, exponential, normal, gamma, and logistic distributions. The Typescript code was based on C code provided with _Numerical Recipes in C_.

Here is one of the examples from the _Deviates_ test specs that samples from a normal distribution with a specified mean and standard deviation.

```typescript
test('normal distribution example', () => {
    const mu: number = 0.5; // mean
    const std: number = 0.2; // std. deviation

    // initial deviate
    let deviate: number = deviates.normal(90210, mu, std);

    // normal curve is above x axis
    expect(deviate).toBeGreaterThan(0);

    // max-value is 1/sqrt(sigma*2PI)
    expect(deviate).toBeLessThanOrEqual(1 / (std * SQRT_TWO_PI));

    // all subsequent deviates
    deviate = deviates.normal(90210, mu, std, false);
    expect(deviate).toBeGreaterThan(0);
    expect(deviate).toBeLessThanOrEqual(1 / (std * SQRT_TWO_PI));
});
```

Enter fullscreen mode Exit fullscreen mode

Place a loop around the second call to _deviates.normal()_ to generate a sequence of normal-distribution values

### [](https://dev.to/ngconf/random-thoughts-on-randomization-in-typescript-57no#shuffling)**Shuffling**

We often think of shuffling as an ‘ideal’ permutation of a deck of cards or something that would only be relevant to an online casino. In fact, there are many front-end applications that require an arbitrary array of objects to be organized in a random or shuffled order. While most FE devs can think of a variety of ways to accomplish this task, they often suffer from overshuffling. Bias in the permutations can be visualized on a small sample set, say 3–4 items, with a histogram chart of the actual frequency of each possible permutation.

Knuth treated shuffling in detail in _The Art of Computer Programming_ and one of the most popular algorithms for the operation is known as Fisher-Yates or Knuth-Fisher-Yates.

A Google search will yield a lot of information for those wishing to read up on the particulars of the algorithm. For sake of this discussion, a Typescript version of the Fisher-Yates algorithm is provided for you, ready to drop right into your next application. Or, you can simply copy/paste (you will need to grab the _TSMT$RandomIntInRange_ class so it may be easier to work with the GitHub code),

```typescript
import { TSMT$RandomIntInRange } from './RandomIntInRange';

export function fisherYates(a: Array<any>): Array<any> {
    if (a === undefined || a == null) {
        return [];
    }

    const n: number = a.length;
    if (n == 0) {
        return [];
    }

    let i: number;
    let j: number;
    let tmp: any;

    let arr: Array<any> = a.slice();

    for (i = 0; i < n; ++i) {
        j = TSMT$RandomIntInRange.generateInRange(0, i);

        if (i != j) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }

    return arr;
}
```

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/ngconf/random-thoughts-on-randomization-in-typescript-57no#summary)**Summary**

These are just a few problems I’ve encountered involving random processes in application development over the decades. The Typescript code I’ve provided with the article has been ported from other languages I’ve used in past applications. I hope it serves you as well in the future as it has served me in the past.

Good luck!

## [](https://dev.to/ngconf/random-thoughts-on-randomization-in-typescript-57no#ngconf-join-us-for-the-reliable-web-summit)**ng-conf: Join us for the Reliable Web Summit**

Come learn from community members and leaders the best ways to build reliable web applications, write quality code, choose scalable architectures, and create effective automated tests. Powered by ng-conf, join us for the Reliable Web Summit this August 26th & 27th, 2021.  
[https://reliablewebsummit.com/](https://reliablewebsummit.com/)

###### [](https://dev.to/ngconf/random-thoughts-on-randomization-in-typescript-57no#thanks-to-jared-youtsey)Thanks to Jared Youtsey.

👋 Before you go

Dropdown menu

-   [What's a billboard?](https://dev.to/billboards)
-   [Manage preferences](https://dev.to/settings/customization#sponsors)

---

-   [Report billboard](https://dev.to/report-abuse?billboard=104705)

Do your career a favor. **Join DEV.** (The website you're on right now)

It takes **_one minute_** and is worth it for your career.

[Get started](https://dev.to/enter?state=new-user)
