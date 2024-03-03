# **TypeScript Accessor**

In TypeScript, there are two supported methods getter and setter to access and set the class members. The greater method control over how a member is accessed on each object.   
**Methods of the typescript accessor property:**

-   **getter:** This method comes when you want to access any property of an object.
-   **setter:** This method comes when you want to change any property of an object.

**getter:** For extracting the value of a variable **getter accessor** property is the conventional method. It is denoted by **get** keyword, in an object literal.   
**Syntax:**

```javascript
get accessName() {
 // getter, the code executed on getting obj.accessName
 },
```

**Example:**

-   javascript

## javascript

```html
<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td class="code">
				<div class="container">
					<div class="line number1 index0 alt2">
						<code class="plain">class MyClass {</code>
					</div>
					<div class="line number2 index1 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">private _with:number = 5;</code>
					</div>
					<div class="line number3 index2 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">private _height:number = 10;</code>
					</div>
					<div class="line number4 index3 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">get square() {</code>
					</div>
					<div class="line number5 index4 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="keyword">return</code>
						<code class="keyword">this</code
						><code class="plain">._with * </code
						><code class="keyword">this</code
						><code class="plain">._height;</code>
					</div>
					<div class="line number6 index5 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">}</code>
					</div>
					<div class="line number7 index6 alt2">
						<code class="plain">}</code>
					</div>
					<div class="line number8 index7 alt1">
						<code class="plain">console.log(</code
						><code class="keyword">new</code>
						<code class="plain">MyClass().square);</code>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>
```

**Output:**

50

A getter can be public, protected, private. It is just artificial to make something behave like a property or a function. So, get square() and new MyClass().square is the same as square() and new MyClass().square().  
**Setter:** For updating the value of a variable the **setter accessor** property is the conventional method which is used. They are denoted by **set** keyword in an object literal.  
**Syntax:**

```javascript
set accessName(value) {
 // the code executed on setting
//obj.accessName = value, from setter
 }
```

**Example:**

-   javascript

## javascript / HTML

````html
<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td class="code">
				<div class="container">
					<div class="line number1 index0 alt2">
						<code class="plain">set fullname {</code>
					</div>
					<div class="line number2 index1 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">const parts = value.split (</code
						><code class="string">''</code
						><code class="plain">);</code>
					</div>
					<div class="line number3 index2 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="keyword">this</code
						><code class="plain">.partname = firstname[0];</code>
					</div>
					<div class="line number4 index3 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="keyword">this</code
						><code class="plain">.partname = firstname[1];</code>
					</div>
					<div class="line number5 index4 alt2">
						<code class="plain">}</code>
					</div>
					<div class="line number6 index5 alt1">
						<code class="plain">person fullname = </code
						><code class="string">"Hitangshu Agarwal"</code>
					</div>
					<div class="line number7 index6 alt2">
						<code class="plain">console.log(person);</code>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

**output:** firstname: "Hitangshu" lastname: "Agarwal" Below example illustrates
the concept of getter and setter clearly: **Example:** - javascript ##
javascript ```html
<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td class="code">
				<div class="container">
					<div class="line number1 index0 alt2">
						<code class="plain">const company = {</code>
					</div>
					<div class="line number2 index1 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">companyName = </code
						><code class="string">"GeeksforGeeks"</code
						><code class="plain">,</code>
					</div>
					<div class="line number3 index2 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">companyTag = </code
						><code class="string">"Edutech"</code
						><code class="plain">,</code>
					</div>
					<div class="line number4 index3 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						>&nbsp;
					</div>
					<div class="line number5 index4 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="comments"
							>// Function that return the Full description</code
						>
					</div>
					<div class="line number6 index5 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="comments"
							>// combined both comapnyName and companyTag</code
						>
					</div>
					<div class="line number7 index6 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">get full_Desc () {</code>
					</div>
					<div class="line number8 index7 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="keyword">return</code>
						<code class="plain"
							>`${company.companyName}
							${company.CompanyTag}`</code
						>
					</div>
					<div class="line number9 index8 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">},</code>
					</div>
					<div class="line number10 index9 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						>&nbsp;
					</div>
					<div class="line number11 index10 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						>&nbsp;
					</div>
					<div class="line number12 index11 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="comments"
							>// It will return separately companyName and
							companyTag</code
						>
					</div>
					<div class="line number13 index12 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">set full_Desc(value) {</code>
					</div>
					<div class="line number14 index13 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">const parts = value.split (</code
						><code class="string">''</code
						><code class="plain">);</code>
					</div>
					<div class="line number15 index14 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="keyword">this</code
						><code class="plain">.partname = companyName[0];</code>
					</div>
					<div class="line number16 index15 alt1">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="keyword">this</code
						><code class="plain">.partname = CompanyTag[1];</code>
					</div>
					<div class="line number17 index16 alt2">
						<code class="undefined spaces"
							>&nbsp;&nbsp;&nbsp;&nbsp;</code
						><code class="plain">}</code>
					</div>
					<div class="line number18 index17 alt1">
						<code class="plain">};</code>
					</div>
					<div class="line number19 index18 alt2">&nbsp;</div>
					<div class="line number20 index19 alt1">
						<code class="plain">company.full_Desc = </code
						><code class="string">"GeeksforGeeks Edutech"</code
						><code class="plain">;</code>
					</div>
					<div class="line number21 index20 alt2">
						<code class="plain">console.log(company);</code>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>
````

**Output:** GeeksforGeeks Edutech **Point To Be Remember:** - We achieved a
proper control over, how a member is accessed on each object with the help of
**getter** and **setter**. - TypeScript accessors require to set the compiler to
output ECMAScript 5 or higher we should require typescript accessor. It does not
support below ECMAScript 5. - Accessor with a get and no set property are
automatically assumed to be read-only no need for manual work. This is helpful
when we are generating a **.d.ts** file from our code. Here's a complete roadmap
for you to become a developer: **Learn DSA -> Master Frontend/Backend/Full Stack
-> Build Projects -> Keep Applying to Jobs** And why go anywhere else when our
[**DSA to Development: Coding
Guide**](https://www.geeksforgeeks.org/courses/dsa-to-development-coding-guide?utm_source=geeksforgeeks&utm_medium=article_bottom_text_default&utm_campaign=courses)
helps you do this in a single program! Apply now to our [DSA to Development
Program](https://www.geeksforgeeks.org/courses/dsa-to-development-coding-guide?utm_source=geeksforgeeks&utm_medium=article_bottom_text_default&utm_campaign=courses)
and our counsellors will connect with you for further guidance & support.

```css
.bb*wrapper {
	cursor: default;
	margin: 0;
	box-sizing: content-box;
}
.bb_wrapper div {
	margin: 0;
}
.bb_wrapper .bb-layer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none !important;
	overflow: hidden;
}
.bb_wrapper .bb-layer .bb-head,
.bb_wrapper .bb-layer .bb-head video {
	width: 100%;
	height: 100%;
}
.bb_wrapper video::-webkit-media-controls-start-playback-button {
	display: none;
	-webkit-appearance: none;
}
.bb_wrapper audio::-webkit-media-controls-start-playback-button {
	display: none;
	-webkit-appearance: none;
}
.bb_wrapper .bb-fitme {
	pointer-events: none !important;
}
.bb_wrapper .bb-fitme.bb-poster-layer {
	width: 100%;
	height: 100%;
}
.bb_wrapper .bb-head-html5-video video {
	max-width: none !important;
	max-height: none !important;
}
[ ](https://devopsdays.org/events/2024-austin/sponsor) .bb_wrapper
.bb-head-html5-ima .bb-ad-container video {
	left: 0;
	top: 0;
}
.bb-commercial-layer .bb-cta-layer .bb-dimmed {
	background: rgba(0, 0, 0, 0.4);
	transition: background 0.3s linear;
}
.bb-commercial-layer .bb-cta-layer .bb-opaque {
	background: rgba(0, 0, 0, 1);
	transition: background 0.3s linear;
}
```

LEARN MORE [ Blue Billywig
Video
Player](https://www.bluebillywig.com/?utm_medium=referral&utm_campaign=player-traffic&pp=geeksforgeeks&utm_source=geeksforgeeks)
Last Updated : 03 Feb, 2023 Like Article 2 Save Article
[Previous](https://www.geeksforgeeks.org/typescript-array-includes-method/?ref=previous_article)
[TypeScript Array includes()
Method](https://www.geeksforgeeks.org/typescript-array-includes-method/?ref=previous_article)
[Next](https://www.geeksforgeeks.org/php-imagick-profileimage-function/?ref=next_article)
[PHP | Imagick profileImage()
Function](https://www.geeksforgeeks.org/php-imagick-profileimage-function/?ref=next_article)
Share your thoughts in the comments Add Your Comment ### Please Login to
comment... Similar Reads [ Underscore.js \_.accessor() Method
](https://www.geeksforgeeks.org/underscore-js-*-accessor-method/)[ Lodash
\_.accessor() Method ](https://www.geeksforgeeks.org/lodash-_-accessor-method/)[
Identifiers and Keywords in TypeScript
](https://www.geeksforgeeks.org/identifiers-and-keywords-in-typescript/)[
JavaScript/TypeScript: Standard way to keep the cause of an Error
](https://www.geeksforgeeks.org/javascript-typescript-standard-way-to-keep-the-cause-of-an-error/)[
Data types in TypeScript
](https://www.geeksforgeeks.org/data-types-in-typescript/)[ TypeScript Mapped
Types ](https://www.geeksforgeeks.org/typescript-mapped-types/)[ Hello World in
TypeScript ](https://www.geeksforgeeks.org/hello-world-in-typescript-language/)[
Variables in TypeScript
](https://www.geeksforgeeks.org/variables-in-typescript/)[ Explain the concept
of null and its uses in TypeScript
](https://www.geeksforgeeks.org/explain-the-concept-of-null-and-its-uses-in-typescript/)[
When to use interfaces and when to use class
](https://www.geeksforgeeks.org/when-to-use-interfaces-and-when-to-use-classes-in-typescript/)

```

```

```

```
