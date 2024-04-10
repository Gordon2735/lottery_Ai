 [![Cover image for How to use JsDoc annotations with VsCode for intellisense - PART 1 👨‍💻😎](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fevob6u6vl4gjhtdbcyny.png)](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fevob6u6vl4gjhtdbcyny.png) 

[![Suman Sarkar](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F708218%2Fffc96d04-9bcf-41c8-876f-f6cd1f347c6f.jpeg)](https://dev.to/sumansarkar)

[Suman Sarkar](https://dev.to/sumansarkar)

Posted on Sep 19, 2021 • Updated on Sep 24, 2021

 ![](https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg) 45  ![](https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg) 10   ![](https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg)    ![](https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg)   ![](https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg) 

# How to use JsDoc annotations with VsCode for intellisense - PART 1 👨‍💻😎

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#the-problem)The Problem 🤦‍♂️

For many of us JavaScript devs, we love the fact that TypeScript exists. It has type hinting, type checking, helps with intellisense and many more. As a JavaScript developer you can start using TypeScript right now. But there is a catch that you cannot use TS in your favourite project without re-writing it and making it compatible for TS. But what if you want these goddies without going through the struggle of re-writing your entire application?

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#the-solution)The Solution 👨

We can utilise JsDoc with VSCode to get all these feature without going through the hassle. For those of you who are not familiar with JsDoc and VsCode, JsDoc is an API documentation generator for JavaScript and VSCode or Visual Studio Code is microsoft's lighter version of it's legendary IDE Visual Studio. VSCode has excellent support for many programming languages and if you do not like using products that are managed by Microsoft then you will be happy to realise that VSCode is open source but if you still do not want any customisation made by Microsoft then you can use Code OSS

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#lets-get-started-already)Let's get started already 💁‍♂️

**[@param](https://dev.to/param)**

<table data-hpc="" class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file" data-tab-size="8" data-paste-markdown-skip="" data-tagsearch-lang="JavaScript" data-tagsearch-path="sumOfArray.js"><tbody><tr><td id="file-sumofarray-js-L1" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="1"></td><td id="file-sumofarray-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">getTotalScore</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">scores</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></td></tr><tr><td id="file-sumofarray-js-L2" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="2"></td><td id="file-sumofarray-js-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-s1">scores</span><span class="pl-kos">.</span><span class="pl-en">reduce</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">total</span><span class="pl-kos">,</span> <span class="pl-s1">nextScore</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">total</span> <span class="pl-c1">+</span> <span class="pl-s1">nextScore</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-sumofarray-js-L3" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="3"></td><td id="file-sumofarray-js-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span></td></tr><tr><td id="file-sumofarray-js-L4" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="4"></td><td id="file-sumofarray-js-LC4" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-sumofarray-js-L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td><td id="file-sumofarray-js-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-s1">scores</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">,</span><span class="pl-c1">2</span><span class="pl-kos">,</span><span class="pl-c1">3</span><span class="pl-kos">]</span><span class="pl-kos">;</span></td></tr><tr><td id="file-sumofarray-js-L6" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="6"></td><td id="file-sumofarray-js-LC6" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-sumofarray-js-L7" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="7"></td><td id="file-sumofarray-js-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-s1">totalScore</span> <span class="pl-c1">=</span> <span class="pl-en">getTotalScore</span><span class="pl-kos">(</span><span class="pl-s1">scores</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-sumofarray-js-L8" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="8"></td><td id="file-sumofarray-js-LC8" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-sumofarray-js-L9" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="9"></td><td id="file-sumofarray-js-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-kos">{</span>totalScore<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr></tbody></table>

[view raw](https://gist.github.com/sumansarkarwd/14cb304db7de48a046c47ed558e18e96/raw/266d0553e335f9e9b12058c3e5216b4c60e09125/sumOfArray.js) [sumOfArray.js](https://gist.github.com/sumansarkarwd/14cb304db7de48a046c47ed558e18e96#file-sumofarray-js) hosted with ❤ by [GitHub](https://github.com/)

  
Now, Lets write it using JSDoc specs  

<table data-hpc="" class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file" data-tab-size="8" data-paste-markdown-skip="" data-tagsearch-lang="JavaScript" data-tagsearch-path="sumOfArray.js"><tbody><tr><td id="file-sumofarray-js-L1" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="1"></td><td id="file-sumofarray-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td></tr><tr><td id="file-sumofarray-js-L2" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="2"></td><td id="file-sumofarray-js-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* <span class="pl-k">@param</span> {<span class="pl-smi">Array</span>} scores</span></td></tr><tr><td id="file-sumofarray-js-L3" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="3"></td><td id="file-sumofarray-js-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* <span class="pl-k">@returns</span> {<span class="pl-smi">number</span>}</span></td></tr><tr><td id="file-sumofarray-js-L4" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="4"></td><td id="file-sumofarray-js-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td></tr><tr><td id="file-sumofarray-js-L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td><td id="file-sumofarray-js-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">getTotalScore</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">scores</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></td></tr><tr><td id="file-sumofarray-js-L6" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="6"></td><td id="file-sumofarray-js-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-s1">scores</span><span class="pl-kos">.</span><span class="pl-en">reduce</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">total</span><span class="pl-kos">,</span> <span class="pl-s1">nextScore</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">total</span> <span class="pl-c1">+</span> <span class="pl-s1">nextScore</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-sumofarray-js-L7" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="7"></td><td id="file-sumofarray-js-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span></td></tr><tr><td id="file-sumofarray-js-L8" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="8"></td><td id="file-sumofarray-js-LC8" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-sumofarray-js-L9" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="9"></td><td id="file-sumofarray-js-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-s1">scores</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">,</span><span class="pl-c1">2</span><span class="pl-kos">,</span><span class="pl-c1">3</span><span class="pl-kos">]</span><span class="pl-kos">;</span></td></tr><tr><td id="file-sumofarray-js-L10" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="10"></td><td id="file-sumofarray-js-LC10" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-sumofarray-js-L11" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="11"></td><td id="file-sumofarray-js-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-s1">totalScore</span> <span class="pl-c1">=</span> <span class="pl-en">getTotalScore</span><span class="pl-kos">(</span><span class="pl-s1">scores</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-sumofarray-js-L12" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="12"></td><td id="file-sumofarray-js-LC12" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-sumofarray-js-L13" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="13"></td><td id="file-sumofarray-js-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-kos">{</span>totalScore<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr></tbody></table>

[view raw](https://gist.github.com/sumansarkarwd/2d2448225fe7529cc0a063197d114997/raw/ae46247236bc42bda9e4016483eda3e53dc267ab/sumOfArray.js) [sumOfArray.js](https://gist.github.com/sumansarkarwd/2d2448225fe7529cc0a063197d114997#file-sumofarray-js) hosted with ❤ by [GitHub](https://github.com/)

  
![thalava.com - Sum of array with JSDoc](https://res.cloudinary.com/practicaldev/image/fetch/s--42RXU-VL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thalava.com/uploads/1630747772.gif)  
Excelente! 👍 You have typehinting in VSCode with the help of JsDoc.

**@typedef**

Now, lets write another example with custom data types. Here we'll work with moment JS  

<table data-hpc="" class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file" data-tab-size="8" data-paste-markdown-skip="" data-tagsearch-lang="JavaScript" data-tagsearch-path="typedef.js"><tbody><tr><td id="file-typedef-js-L1" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="1"></td><td id="file-typedef-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-s1">moment</span> <span class="pl-k">from</span> <span class="pl-s">"moment"</span><span class="pl-kos">;</span></td></tr><tr><td id="file-typedef-js-L2" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="2"></td><td id="file-typedef-js-LC2" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-typedef-js-L3" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="3"></td><td id="file-typedef-js-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td></tr><tr><td id="file-typedef-js-L4" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="4"></td><td id="file-typedef-js-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @typedef {import('moment').Moment} Moment</span></td></tr><tr><td id="file-typedef-js-L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td><td id="file-typedef-js-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td></tr><tr><td id="file-typedef-js-L6" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="6"></td><td id="file-typedef-js-LC6" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-typedef-js-L7" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="7"></td><td id="file-typedef-js-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td></tr><tr><td id="file-typedef-js-L8" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="8"></td><td id="file-typedef-js-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @description This function takes Moment objects and calculates</span></td></tr><tr><td id="file-typedef-js-L9" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="9"></td><td id="file-typedef-js-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* the difference between the two dates</span></td></tr><tr><td id="file-typedef-js-L10" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="10"></td><td id="file-typedef-js-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @param {Moment} startDate</span></td></tr><tr><td id="file-typedef-js-L11" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="11"></td><td id="file-typedef-js-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @param {Moment} endDate</span></td></tr><tr><td id="file-typedef-js-L12" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="12"></td><td id="file-typedef-js-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @returns {number}</span></td></tr><tr><td id="file-typedef-js-L13" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="13"></td><td id="file-typedef-js-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td></tr><tr><td id="file-typedef-js-L14" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="14"></td><td id="file-typedef-js-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">getDiff</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">startDate</span><span class="pl-kos">,</span> <span class="pl-s1">endDate</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">startDate</span><span class="pl-kos">.</span><span class="pl-en">diff</span><span class="pl-kos">(</span><span class="pl-s1">endDate</span><span class="pl-kos">,</span> <span class="pl-s">'days'</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-typedef-js-L15" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="15"></td><td id="file-typedef-js-LC15" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-typedef-js-L16" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="16"></td><td id="file-typedef-js-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-en">getDiff</span><span class="pl-kos">(</span><span class="pl-en">moment</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">,</span> <span class="pl-en">moment</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span><span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-s">'days'</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr></tbody></table>

[view raw](https://gist.github.com/sumansarkarwd/6da4631f94744429406eb7572642c1e3/raw/c38c5b8b818419e592a994443dbc33354ac5e7ee/typedef.js) [typedef.js](https://gist.github.com/sumansarkarwd/6da4631f94744429406eb7572642c1e3#file-typedef-js) hosted with ❤ by [GitHub](https://github.com/)

  
Here, we are using @typedef to define custom type definations, in this case type Moment which is provided in the "moment" library and using it in the @param annotation to get type hinting. Notice when I type startDate, it suggest methods coming with a moment object.  
![thalava.com - Custom type defination using @typedef](https://res.cloudinary.com/practicaldev/image/fetch/s--Nux9b9Qj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thalava.com/uploads/1630755623.gif)

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#how-do-i-create-a-custom-type)How do I create a custom type? 🤷‍♂️

Its easy, you just have to know a little bit of TypeScript. Let me show you the directory structure.. It looks like this

src  
┣ controllers  
┃ ┗ post.controller.js  
┗ models  
┃ ┣ post.model.d.ts  
┃ ┗ post.model.js  

<table data-hpc="" class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file" data-tab-size="8" data-paste-markdown-skip="" data-tagsearch-lang="JavaScript" data-tagsearch-path="post.model.js"><tbody><tr><td id="file-post-model-js-L1" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="1"></td><td id="file-post-model-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-s1">mongoose</span> <span class="pl-k">from</span> <span class="pl-s">"mongoose"</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-model-js-L2" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="2"></td><td id="file-post-model-js-LC2" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-post-model-js-L3" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="3"></td><td id="file-post-model-js-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-s1">postSchema</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-s1">mongoose</span><span class="pl-kos">.</span><span class="pl-c1">Schema</span><span class="pl-kos">(</span><span class="pl-kos">{</span></td></tr><tr><td id="file-post-model-js-L4" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="4"></td><td id="file-post-model-js-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">title</span>: <span class="pl-v">String</span><span class="pl-kos">,</span></td></tr><tr><td id="file-post-model-js-L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td><td id="file-post-model-js-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">slug</span>: <span class="pl-v">String</span><span class="pl-kos">,</span></td></tr><tr><td id="file-post-model-js-L6" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="6"></td><td id="file-post-model-js-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-model-js-L7" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="7"></td><td id="file-post-model-js-LC7" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-post-model-js-L8" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="8"></td><td id="file-post-model-js-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">postSchema</span><span class="pl-kos">.</span><span class="pl-c1">statics</span><span class="pl-kos">.</span><span class="pl-en">findBySlug</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-en">findBySlug</span><span class="pl-kos">(</span><span class="pl-s1">slug</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td></tr><tr><td id="file-post-model-js-L9" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="9"></td><td id="file-post-model-js-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">findOne</span><span class="pl-kos">(</span><span class="pl-kos">{</span> slug <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-model-js-L10" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="10"></td><td id="file-post-model-js-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-model-js-L11" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="11"></td><td id="file-post-model-js-LC11" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-post-model-js-L12" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="12"></td><td id="file-post-model-js-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-s1">postModel</span> <span class="pl-c1">=</span> <span class="pl-s1">mongoose</span><span class="pl-kos">.</span><span class="pl-en">model</span><span class="pl-kos">(</span><span class="pl-s">'Post'</span><span class="pl-kos">,</span> <span class="pl-s1">postSchema</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-model-js-L13" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="13"></td><td id="file-post-model-js-LC13" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-post-model-js-L14" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="14"></td><td id="file-post-model-js-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-s1">postModel</span><span class="pl-kos">;</span></td></tr></tbody></table>

[view raw](https://gist.github.com/sumansarkarwd/7ea85cacb8610aa281db90c6e64e5956/raw/e049c200ece293fe2325a7724d339693945bc995/post.model.js) [post.model.js](https://gist.github.com/sumansarkarwd/7ea85cacb8610aa281db90c6e64e5956#file-post-model-js) hosted with ❤ by [GitHub](https://github.com/)

  

<table data-hpc="" class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file" data-tab-size="8" data-paste-markdown-skip="" data-tagsearch-lang="TypeScript" data-tagsearch-path="post.model.d.ts"><tbody><tr><td id="file-post-model-d-ts-L1" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="1"></td><td id="file-post-model-d-ts-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-s1">mongoose</span> <span class="pl-k">from</span> <span class="pl-s">"mongoose"</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-model-d-ts-L2" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="2"></td><td id="file-post-model-d-ts-LC2" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-post-model-d-ts-L3" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="3"></td><td id="file-post-model-d-ts-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">interface</span> <span class="pl-smi">PostDocument</span> <span class="pl-k">extends</span> <span class="pl-s1">mongoose</span><span class="pl-kos">.</span><span class="pl-smi">Document</span> <span class="pl-kos">{</span></td></tr><tr><td id="file-post-model-d-ts-L4" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="4"></td><td id="file-post-model-d-ts-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">title</span>: <span class="pl-smi">string</span><span class="pl-kos">,</span></td></tr><tr><td id="file-post-model-d-ts-L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td><td id="file-post-model-d-ts-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">slug</span>: <span class="pl-smi">string</span><span class="pl-kos">,</span></td></tr><tr><td id="file-post-model-d-ts-L6" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="6"></td><td id="file-post-model-d-ts-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span></td></tr><tr><td id="file-post-model-d-ts-L7" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="7"></td><td id="file-post-model-d-ts-LC7" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-post-model-d-ts-L8" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="8"></td><td id="file-post-model-d-ts-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">interface</span> <span class="pl-smi">PostModel</span> <span class="pl-k">extends</span> <span class="pl-s1">mongoose</span><span class="pl-kos">.</span><span class="pl-smi">Model</span><span class="pl-kos">&lt;</span><span class="pl-smi">PostDocument</span><span class="pl-kos">&gt;</span> <span class="pl-kos">{</span></td></tr><tr><td id="file-post-model-d-ts-L9" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="9"></td><td id="file-post-model-d-ts-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">findBySlug</span><span class="pl-kos">(</span><span class="pl-s1">slug</span>: <span class="pl-smi">string</span><span class="pl-kos">)</span>: <span class="pl-smi">Promise</span><span class="pl-kos">&lt;</span><span class="pl-smi">PostDocument</span><span class="pl-kos">&gt;</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-model-d-ts-L10" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="10"></td><td id="file-post-model-d-ts-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span></td></tr></tbody></table>

[view raw](https://gist.github.com/sumansarkarwd/e63f54ce366c712537cece3a9bc5b099/raw/dbb5a3a5d1c91a4564e95b4dbf622450245aa0b6/post.model.d.ts) [post.model.d.ts](https://gist.github.com/sumansarkarwd/e63f54ce366c712537cece3a9bc5b099#file-post-model-d-ts) hosted with ❤ by [GitHub](https://github.com/)

  

<table data-hpc="" class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file" data-tab-size="8" data-paste-markdown-skip="" data-tagsearch-lang="JavaScript" data-tagsearch-path="post.controller.js"><tbody><tr><td id="file-post-controller-js-L1" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="1"></td><td id="file-post-controller-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td></tr><tr><td id="file-post-controller-js-L2" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="2"></td><td id="file-post-controller-js-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @typedef {import('../models/post.model').PostDocument} PostDocument</span></td></tr><tr><td id="file-post-controller-js-L3" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="3"></td><td id="file-post-controller-js-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @typedef {import('../models/post.model').PostModel} PostModel</span></td></tr><tr><td id="file-post-controller-js-L4" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="4"></td><td id="file-post-controller-js-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td></tr><tr><td id="file-post-controller-js-L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td><td id="file-post-controller-js-LC5" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-post-controller-js-L6" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="6"></td><td id="file-post-controller-js-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td></tr><tr><td id="file-post-controller-js-L7" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="7"></td><td id="file-post-controller-js-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @type PostModel</span></td></tr><tr><td id="file-post-controller-js-L8" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="8"></td><td id="file-post-controller-js-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td></tr><tr><td id="file-post-controller-js-L9" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="9"></td><td id="file-post-controller-js-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-v">Post</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">"../models/post.model"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-controller-js-L10" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="10"></td><td id="file-post-controller-js-LC10" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-post-controller-js-L11" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="11"></td><td id="file-post-controller-js-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td></tr><tr><td id="file-post-controller-js-L12" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="12"></td><td id="file-post-controller-js-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td></tr><tr><td id="file-post-controller-js-L13" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="13"></td><td id="file-post-controller-js-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @param {string} slug</span></td></tr><tr><td id="file-post-controller-js-L14" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="14"></td><td id="file-post-controller-js-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @returns PostDocument</span></td></tr><tr><td id="file-post-controller-js-L15" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="15"></td><td id="file-post-controller-js-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td></tr><tr><td id="file-post-controller-js-L16" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="16"></td><td id="file-post-controller-js-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">getPostBySlug</span> <span class="pl-c1">=</span> <span class="pl-k">async</span> <span class="pl-kos">(</span><span class="pl-s1">slug</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></td></tr><tr><td id="file-post-controller-js-L17" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="17"></td><td id="file-post-controller-js-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td></tr><tr><td id="file-post-controller-js-L18" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="18"></td><td id="file-post-controller-js-LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @type PostDocument</span></td></tr><tr><td id="file-post-controller-js-L19" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="19"></td><td id="file-post-controller-js-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td></tr><tr><td id="file-post-controller-js-L20" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="20"></td><td id="file-post-controller-js-LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-s1">post</span> <span class="pl-c1">=</span> <span class="pl-k">await</span> <span class="pl-v">Post</span><span class="pl-kos">.</span><span class="pl-en">findBySlug</span><span class="pl-kos">(</span><span class="pl-s1">slug</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-controller-js-L21" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="21"></td><td id="file-post-controller-js-LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">post</span><span class="pl-kos">.</span><span class="pl-c1">title</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-controller-js-L22" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="22"></td><td id="file-post-controller-js-LC22" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-post-controller-js-L23" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="23"></td><td id="file-post-controller-js-LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-s1">post</span><span class="pl-kos">;</span></td></tr><tr><td id="file-post-controller-js-L24" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="24"></td><td id="file-post-controller-js-LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span></td></tr></tbody></table>

[view raw](https://gist.github.com/sumansarkarwd/3ca8e85bf6c9d86843084d7b3e692ffc/raw/f316add150c035e6bc2717c8ff005efda5c1a2b5/post.controller.js) [post.controller.js](https://gist.github.com/sumansarkarwd/3ca8e85bf6c9d86843084d7b3e692ffc#file-post-controller-js) hosted with ❤ by [GitHub](https://github.com/)

  
The controller method is utilising PostModel and PostDocument type definations and suggesting the properties that are available.  
![thalava.com - Making custom types @typedef](https://res.cloudinary.com/practicaldev/image/fetch/s--r0_zanS0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thalava.com/uploads/1630757699.gif)  
The interfaces defined in post.model.d.ts defines your types and helps with suggestions. This is very useful because in mongoose static methods and schema properties does not appear normally in suggesions. So from now on you can import any type in your project and utilise it's definations.

Note: In the example of moment js we saw that type definations were provided in the library itself but in case if it is not then chances are you will find the type definations in the npm repository. For example you can install type definations for the bcrypt library on @types/bcrypt

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#enforcing-correct-types)Enforcing correct types 🙅‍♂️

In the moment JS example we passed 2 argument to getDiff function. How do we make sure that when executing this function we only pass 2 moment js object and not anything else. Well, there are 2 ways

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#tscheck)_@ts-check_

@ts-check enables errors in your JavaScript files. In order to use it in a JavaScript file, you need to add it at the top of the file.  
[![thalava.com - @ts-check](https://res.cloudinary.com/practicaldev/image/fetch/s--10-6VgyP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thalava.com/uploads/1630759304.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--10-6VgyP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thalava.com/uploads/1630759304.png)  
Notice how on line #17 VSCode is complaining that the type of the first argument passed is not correct.

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#vscode-implicit-project-config-%E2%9A%99)VSCode Implicit Project Config ⚙

You can enable this globally as well in your JS project by toggling

> "js/ts.implicitProjectConfig.checkJs": true

That is it, now you can utilise JSDoc and VSCode together for type hinting. Thanks for reading tutorial. We are hoping to update more tutorials like these very soon.

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#tools-used-in-this-tutorial)Tools used in this tutorial

1. Visual Studio Code (IDE)
2. JsDoc (API documentation generator)
3. Peek (Screen recorder)
4. VSCode theme - GitHub Dark Default

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#part-2)Part 2

Part 2 of this tutorial is updated here - [How to use JsDoc annotations with VsCode for intellisense - PART 2 👨‍💻😎](https://thalava.com/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-part-2)  
In part 2 we discuss about _@callback_, _@class_, _@constructor_, _@private_ and _[@public](https://dev.to/public)_ .

### [](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#from-author)From author

Before you leave, I just want to thank you for reading this article 🖤. Me and my friend started working on our own blog [thalava.com](https://thalava.com/)  
Please visit our blog for more tutorials. We are excited to share more tutorials.  
Thanks again, love from [thalava.com](https://thalava.com/) 🖤

## Top comments (8)

Crown

### Sort discussion:

- [
    
    Selected Sort Option Top
    
    Most upvoted and relevant comments will be first
    
    ](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co?comments_sort=top#toggle-comments-sort-dropdown)
- [
    
    Latest
    
    Most recent comments will be first
    
    ](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co?comments_sort=latest#toggle-comments-sort-dropdown)
- [
    
    Oldest
    
    The oldest comments will be first
    
    ](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co?comments_sort=oldest#toggle-comments-sort-dropdown)

Subscribe

    ![pic](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F713708%2F0016d06f-04a4-467a-a54b-10b4d05262f3.jpeg) 

Personal Trusted User

[Create template](https://dev.to/settings/response-templates)

Templates let you quickly answer FAQs or store snippets for re-use.

Submit Preview [Dismiss](https://dev.to/404.html)

Collapse Expand

  

 [![seancassiere profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F581156%2F18acc7ab-276d-493a-a52b-f9e2977610a0.jpeg)](https://dev.to/seancassiere) 

[Sean Cassiere](https://dev.to/seancassiere)

Sean Cassiere

 [![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F581156%2F18acc7ab-276d-493a-a52b-f9e2977610a0.jpeg) Sean Cassiere](https://dev.to/seancassiere) 

Follow

A business analyst who has a deep passion for messing around with some code.

- Location
    
    Invercargill, New Zealand
    
- Education
    
    University of Westminster
    
- Work
    
    Hobby-ist Typescript Developer
    
- Joined
    
    Feb 17, 2021
    

• [Sep 19 '21](https://dev.to/seancassiere/comment/1i6kl)

Dropdown menu

- [Copy link](https://dev.to/seancassiere/comment/1i6kl)

- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/seancassiere/comment/1i6kl)

This pretty neat!  
Not really a replacement for TypeScript but allows you to bootstrap some of its more strict type-checking into a legacy JavaScript project.

I'm definitely not turning away from TypeScript, but maybe this'll be good weekend project to add these JSDoc hints to my legacy repos.

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co/comments/new/1i6kl)

Collapse Expand

  

 [![sumansarkar profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F708218%2Fffc96d04-9bcf-41c8-876f-f6cd1f347c6f.jpeg)](https://dev.to/sumansarkar) 

[Suman Sarkar](https://dev.to/sumansarkar)

Suman Sarkar

 [![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F708218%2Fffc96d04-9bcf-41c8-876f-f6cd1f347c6f.jpeg) Suman Sarkar](https://dev.to/sumansarkar) 

Follow

Software Developer & blogger at thalava.com

- Location
    
    India
    
- Work
    
    Codebuddy Technologies Private Limited
    
- Joined
    
    Sep 17, 2021
    

• [Sep 19 '21](https://dev.to/sumansarkar/comment/1i6km)

Dropdown menu

- [Copy link](https://dev.to/sumansarkar/comment/1i6km)

- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sumansarkar/comment/1i6km)

Yes [@seancassiere](https://dev.to/seancassiere)  
You are right.. I am a beginner in TypeScript and have lots of legacy projects to maintain. This is the way to go for me know :)  
For new projects me and my friend are creating boilerplates in TypeScript using yarn workspaces

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co/comments/new/1i6km)

Collapse Expand

  

 [![lyrod profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F110090%2Fafa40460-d4be-4d97-ad86-e51aa46f0060.jpeg)](https://dev.to/lyrod) 

[Lyrod](https://dev.to/lyrod)

Lyrod

 [![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F110090%2Fafa40460-d4be-4d97-ad86-e51aa46f0060.jpeg) Lyrod](https://dev.to/lyrod) 

Follow

Web developer at Freelance.

- Location
    
    Nantes, France
    
- Education
    
    BTS SIO
    
- Work
    
    Web developer at Freelance
    
- Joined
    
    Oct 25, 2018
    

• [Sep 19 '21](https://dev.to/lyrod/comment/1i6kg)

Dropdown menu

- [Copy link](https://dev.to/lyrod/comment/1i6kg)

- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/lyrod/comment/1i6kg)

Great post. You're missing one thing: array of type. `Array<string>`

Like comment: Like comment: 3 likes Like [Comment button Reply](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co/comments/new/1i6kg)

Collapse Expand

  

 [![sumansarkar profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F708218%2Fffc96d04-9bcf-41c8-876f-f6cd1f347c6f.jpeg)](https://dev.to/sumansarkar) 

[Suman Sarkar](https://dev.to/sumansarkar)

Suman Sarkar

 [![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F708218%2Fffc96d04-9bcf-41c8-876f-f6cd1f347c6f.jpeg) Suman Sarkar](https://dev.to/sumansarkar) 

Follow

Software Developer & blogger at thalava.com

- Location
    
    India
    
- Work
    
    Codebuddy Technologies Private Limited
    
- Joined
    
    Sep 17, 2021
    

• [Sep 19 '21](https://dev.to/sumansarkar/comment/1i6kj)

Dropdown menu

- [Copy link](https://dev.to/sumansarkar/comment/1i6kj)

- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sumansarkar/comment/1i6kj)

Thanks, I'm preparing a second article with more helpful methods.. Will include it there :)

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co/comments/new/1i6kj)

Collapse Expand

  

 [![abulka profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F597018%2Fa9486007-b160-44e0-8ebc-e1f21858df39.jpeg)](https://dev.to/abulka) 

[Andy Bulka](https://dev.to/abulka)

Andy Bulka

 [![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F597018%2Fa9486007-b160-44e0-8ebc-e1f21858df39.jpeg) Andy Bulka](https://dev.to/abulka) 

Follow

- Location
    
    Melbourne Australia
    
- Joined
    
    Mar 15, 2021
    

• [May 30 '22](https://dev.to/abulka/comment/1p1c8)

Dropdown menu

- [Copy link](https://dev.to/abulka/comment/1p1c8)

- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/abulka/comment/1p1c8)

The part 2 article link gives me 404?

Like comment: Like comment: 3 likes Like [Comment button Reply](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co/comments/new/1p1c8)

Collapse Expand

  

 [![sumansarkar profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F708218%2Fffc96d04-9bcf-41c8-876f-f6cd1f347c6f.jpeg)](https://dev.to/sumansarkar) 

[Suman Sarkar](https://dev.to/sumansarkar)

Suman Sarkar

 [![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F708218%2Fffc96d04-9bcf-41c8-876f-f6cd1f347c6f.jpeg) Suman Sarkar](https://dev.to/sumansarkar) 

Follow

Software Developer & blogger at thalava.com

- Location
    
    India
    
- Work
    
    Codebuddy Technologies Private Limited
    
- Joined
    
    Sep 17, 2021
    

• [Sep 21 '21](https://dev.to/sumansarkar/comment/1i850)

Dropdown menu

- [Copy link](https://dev.to/sumansarkar/comment/1i850)

- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sumansarkar/comment/1i850)

Hi readers, the 2nd part of this tutorial is updated here - [thalava.com/how-to-use-jsdoc-annot...](https://thalava.com/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-part-2). Here I explain about @callback, [@class](https://dev.to/class), @constructor, @private and [@public](https://dev.to/public)  
Please read, share, provide feedback and let me know on which topics you guys would like me to post next 🖤

Like comment: Like comment: 2 likes Like [Comment button Reply](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co/comments/new/1i850)

Collapse Expand

  

 [![akuoko_konadu profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F675876%2Fa99c760e-7e98-4bb3-a9a8-f29e21ccbd8f.png)](https://dev.to/akuoko_konadu) 

[Konadu Akwasi Akuoko](https://dev.to/akuoko_konadu)

Konadu Akwasi Akuoko

 [![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F675876%2Fa99c760e-7e98-4bb3-a9a8-f29e21ccbd8f.png) Konadu Akwasi Akuoko](https://dev.to/akuoko_konadu) 

Follow

Building software (Software and DevOps Eng) 🏗️ Technical writer ✍️ About me: konadu.dev/about 🛠Built konadu.dev Talking about software engineering, devops AWS Certified

- Location
    
    Kumasi, Ghana
    
- Joined
    
    Jul 28, 2021
    

• [Jun 30 '22](https://dev.to/akuoko_konadu/comment/1poej)

Dropdown menu

- [Copy link](https://dev.to/akuoko_konadu/comment/1poej)

- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/akuoko_konadu/comment/1poej)

Hello, please it seems your link is dead.  
I got a 404 page

Like comment: Like comment: 3 likes Like [Comment button Reply](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co/comments/new/1poej)

Collapse Expand

  

 [![drazisil profile image](https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F24630%2F0557c662-6773-4872-8d86-667a11a56de4.png)](https://dev.to/drazisil) 

[Molly Crendraven](https://dev.to/drazisil)

Molly Crendraven

 [![](https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F24630%2F0557c662-6773-4872-8d86-667a11a56de4.png) Molly Crendraven](https://dev.to/drazisil) 

Follow

- Education
    
    Homeschooled
    
- Work
    
    Sr. Support Engineer (Codecov) @ Sentry.io
    
- Joined
    
    Jul 4, 2017
    

• [Dec 23 '23](https://dev.to/drazisil/comment/2bjio)

Dropdown menu

- [Copy link](https://dev.to/drazisil/comment/2bjio)

- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/drazisil/comment/2bjio)

Here is part 2 [web.archive.org/web/20210923060250...](https://web.archive.org/web/20210923060250/https://thalava.com/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-part-2)

Like comment: Like comment: 1 like Like [Comment button Reply](https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co#/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co/comments/new/2bjio)

[Code of Conduct](https://dev.to/code-of-conduct) • [Report abuse](https://dev.to/report-abuse)