# **Generative AI is experimental**. [Learn more](https://support.google.com/websearch?p=data_genai_search&hl=en)

Generating

Choose what you’re giving feedback on

Or give [general feedback](https://www.google.com/search?q=decorators+in+typescript+definition+and+examples+and+references&rlz=1C2FHFK_enUS956US1075&sca_esv=245afc22ddb75264&sxsrf=ACQVn0-4iGW-mydCnmpTUTwcswSor2F-FQ%3A1709366841320&source=hp&ei=Od7iZfK0EYWuwbkPjuSYkA8&iflsig=ANes7DEAAAAAZeLsSXR4a7SnMlGivHZ-jzqEbV2-osp5&ved=0ahUKEwiytfbaj9WEAxUFVzABHQ4yBvIQ4dUDCBc&uact=5&oq=decorators+in+typescript+definition+and+examples+and+references&gs_lp=Egdnd3Mtd2l6Ij9kZWNvcmF0b3JzIGluIHR5cGVzY3JpcHQgZGVmaW5pdGlvbiBhbmQgZXhhbXBsZXMgYW5kIHJlZmVyZW5jZXMyBRAhGKABMgUQIRigATIFECEYnwVIxLoCUOcFWKSuAnABeACQAQCYAbkBoAHqNKoBBTQ3LjIxuAEDyAEA-AEC-AEBmAI8oALsL6gCCsICBxAjGOoCGCfCAgYQABgWGB7CAggQABgWGB4YD8ICCxAAGIAEGIoFGIYDwgIGEAAYCBgewgIIEAAYCBgHGB7CAgoQABgIGAcYHhgPwgIFEAAYgATCAgYQABgHGB7CAgsQABiABBixAxiDAcICEBAAGIAEGIoFGLEDGIMBGArCAggQABiABBixA8ICCxAuGIAEGMcBGK8BwgILEC4YgAQYxwEY0QPCAg0QABiABBixAxiDARgKwgIEECEYFZgDDJIHBTI4LjMy&sclient=gws-wiz#)

**Here is a definition of decorators in TypeScript, along with some examples and references:**

TypeScript decorators are a feature that allows developers to modify or extend the behavior of classes, methods, accessors, and properties. Decorators are functions that are prefixed with the '@' symbol and placed immediately before the construct they are meant to modify.

**For example, the following decorator logs the name of the method it is applied to:**

```typescript
function logMethod(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
): void {
	console.log(`Method called: ${propertyKey}`);
}
class Example {
	@logMethod greet() {
		console.log('Hello, world!');
	}
}
const example = new Example();
example.greet(); // logs 'Method called: greet'
```

**Use code with caution.**

[Learn more](https://support.google.com/legal/answer/13505487?hl=en)

Decorators can also be used to add metadata to classes, methods, and properties. This metadata can then be used by other tools, such as transpilers or IDEs.

For example, the following decorator adds a `@deprecated` tag to the method it is applied to:

```typescript
function deprecated(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
): void {
	descriptor.deprecated = true;
}
class Example {
	@deprecated greet() {
		console.log('Hello, world!');
	}
}
const example = new Example();
example.greet(); // logs 'Method called: greet'
```

Use code with caution.

[Learn more](https://support.google.com/legal/answer/13505487?hl=en)

When this code is transpiled to JavaScript, the `@deprecated` tag will be preserved in the output. This can be used by IDEs to warn developers when they are using deprecated methods.

Decorators are a powerful feature that can be used to add a variety of functionality to TypeScript code. They are similar to Java annotations and C# attributes.

Here are some additional examples of decorators in TypeScript:

-   @Injectable()
    \- This decorator marks a class as injectable. This means that the class can be automatically instantiated and provided to other classes by the dependency injection system.
-   @Component()
    \- This decorator marks a class as a component. This means that the class can be used to create a reusable piece of UI.
-   @NgModule()
    \- This decorator marks a class as a module. This means that the class can be used to organize and import other modules.

Decorators are a powerful tool that can be used to add a variety of functionality to TypeScript code. They are similar to Java annotations and C# attributes.

Here are some references where you can learn more about decorators in TypeScript:

-   TypeScript documentation on decorators
-   Article on decorators in TypeScript
-   Book on TypeScript

```typescript
(function(){var ctid='\_Y97iZeiCM92FwbkPp5iH2AM_1';(function(){'use strict'; var d=this||self;var f,k;a:{for(var l=\["CLOSURE_FLAGS"\],n=d,p=0;p<l.length;p++)if(n=n\[l\[p\]\],null==n){k=null;break a}k=n}var q=k&&k\[610401301\];f=null!=q?q:!1;var r;const t=d.navigator;r=t?t.userAgentData||null:null;function u(a){return f?r?r.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function v(a){var b;a:{if(b=d.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function w(){return f?!!r&&0<r.brands.length:!1}function x(){!v("Safari")||y()||(w()?0:v("Coast"))||(w()?0:v("Opera"))||(w()?0:v("Edge"))||(w()?u("Microsoft Edge"):v("Edg/"))||w()&&u("Opera")}function y(){return w()?u("Chromium"):(v("Chrome")||v("CriOS"))&&!(w()?0:v("Edge"))||v("Silk")};var z=w()?!1:v("Trident")||v("MSIE");!v("Android")||y();y();x();class A{}class B{}Object.freeze(new A);Object.freeze(new B);z||x();encodeURIComponent("$,/:;?@\[\]^\`{|}").substr(1).replace(/%/g,"|");encodeURIComponent("=&$,/:;@\[\]^\`{|}").substr(1).replace(/%/g,"|");window.matchMedia("(prefers-reduced-motion: reduce)");var C=function(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a};var E=function(a,b=-1){const c=a.getBoundingClientRect().top+b;D(a,c,0>b)},D=function(a,b,c){if(c||!(a.getBoundingClientRect().bottom<b)){var m=c||a.getBoundingClientRect().top>b;m&&F(a);Array.from(a.children).forEach(e=>{D(e,b,m)})}},F=function(a){if(!a.hasAttribute("data-tibak"))if(a.hasAttribute("tabindex")){var b=a.getAttribute("tabindex");a.setAttribute("tabindex","-1");a.setAttribute("data-tibak",b)}else{if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName|| "SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!a.hasAttribute("tabindex")||C(a)):a.hasAttribute("tabindex")&&C(a))&&z){var c;"function"!==typeof a.getBoundingClientRect||z&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();b=null!=c&&0<c.height&&0<c.width}b&&(a.setAttribute("tabindex","-1"),a.setAttribute("data-tibak","none"))}a.hasAttribute("aria-hidden")||(a.setAttribute("ahbak","true"),a.setAttribute("aria-hidden","true"))};function K(){const a=L.querySelectorAll(".ifiyWc");a.forEach(b=>{b.style.display="block"});setTimeout(()=>{a.forEach(b=>{b.style.opacity="1.0"})},50)}const L=document.getElementById(ctid);if(L){var M=L;let a;null==(a=M.querySelector('\[jsname="yEBWhe"\]'))||a.remove();const b=M.querySelector('\[jsname="Ol3kkd"\]');b&&(b.style.display="");K();var N=L;const c=N.querySelector(".h7Tj7e"),m=N.querySelector(".D5ad8b");if(c&&m){var O=Number(c.style.maxHeight.replace("px",""));if(0!==O){const e=c.querySelector(".RDmXvc"),g=c.querySelector(".zNsLfb");let h,G=null!=(h=null==e?void 0:e.offsetHeight)?h:68,H,I;if((null!=(H=null==e?void 0:e.getBoundingClientRect().bottom)?H:0)<(null!=(I=null==g?void 0:g.getBoundingClientRect().bottom)?I:0)){let J;G+=null!=(J=null==g?void 0:g.offsetHeight)?J:60}E(m,O-G)}}var P=L;if(document.getAnimations){var Q=P.querySelector(".mNfcNd"),R;for(const e of(null==(R=Q)?void 0:R.getAnimations())||\[\])if("response-pushdown"===e.animationName&&e.effect){const g=e.effect,h=g.getKeyframes();1<h.length&&(h\[h.length-1\].maxHeight=\`${Q.scrollHeight}`px\,g.setKeyframes(h));break}}google.fce&&google.fce(L,"mgqo8b")}let S,T;null==(S=google.sge)||null==(T=S.moo)||T.disconnect();}).call(this);})();
```

```css
.aDFspc {
	min-height: 218px;
}
.fO4k7.aDFspc {
	min-height: inherit;
}
.XNfAUb {
	display: block;
	position: relative;
}
.RyIFgf {
	display: block;
	overflow-x: auto;
	overflow-y: hidden;
	position: relative;
	transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}
.RyIFgf::-webkit-scrollbar {
	display: none;
}
.wjuhKf {
	overflow-x: hidden;
}
.FspLPc {
	white-space: nowrap;
	display: inline-block;
}
.HG5ZQb {
	display: flex;
}
.dsKwub {
	display: inline-flex;
}
.XNfAUb.vbKu7e {
	overflow-y: visible;
}
.XNfAUb.vbKu7e .RyIFgf {
	position: static;
}
.XRVJtc.CLLuUd {
	background-color: #202124;
	display: flex;
	flex-direction: column;
	flex: none;
}
.CLLuUd > .VqeGe {
	display: flex;
	flex-direction: column;
	flex: auto;
}
.XRVJtc.KAt2X > .VqeGe {
	margin-right: 20px;
}
.XRVJtc.KAt2X:not(.q2ch8c):last-of-type > .VqeGe {
	margin-right: 0px;
}
.p7bv {
	display: flex;
	flex-direction: column;
	flex: auto;
}
@media (forced-colors: active) {
	.ar9V1 {
		border: 1px solid transparent;
	}
}
.T3Fozb {
	text-decoration: none;
}
.T3Fozb:hover {
	text-decoration: none;
}
.gdOPf {
	transition-duration: 200ms;
	transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
}
.c30Ztd:hover ~ .T3Fozb .CvgGZ {
	text-decoration: underline;
}
.c30Ztd:hover ~ .CvgGZ {
	text-decoration: underline;
}
.c30Ztd:hover ~ .T3Fozb .gdOPf {
	transform: scale(1.15);
}
.ddkIM:focus-visible {
	border: 2px solid #a8c7fa;
	border-radius: 16px;
	box-sizing: border-box;
	outline: none;
}
.qrtwm:focus-visible {
	border: 2px solid #a8c7fa;
	border-radius: 8px;
	box-sizing: border-box;
	outline: none;
}
.EXH1Ce {
	position: relative;
}
.dsxN8b {
	border-radius: inherit;
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow: hidden;
}
.dsxN8b .aKoISd.yVCOtc:hover {
	text-decoration: none;
}
.pieH8c .R8BTeb {
	color: inherit !important;
}
.sx8gIb .dsxN8b {
	background-color: unset;
}
.IqywMd {
	display: flex;
	flex: 1;
}
.VrUVsb .IqywMd {
	flex-direction: column;
}
.ODrFK {
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow: hidden;
	padding: 12px 8px;
	gap: 4px;
}
.VrUVsb .ODrFK,
.VrUVsb .ODrFK.CwjDuc {
	padding: 10px 16px;
}
.ODrFK.CwjDuc {
	padding: 12px;
}
.JvYF8d {
	margin-top: auto;
}
.I6Kpxd .sx8gIb {
	background-color: var(--mc2);
	border: 1px solid var(--mc17);
	box-shadow: none;
	color: var(--mc6);
}
.I6Kpxd .cQEt3 {
	color: inherit;
}
.rz5jw {
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
.y9pG6d {
	position: relative;
	z-index: 1;
}
.q07dbf.q07dbf {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
.Ci5Wxb {
	display: contents;
}
.uhHOwf {
	position: relative;
}
.uhHOwf::after {
	background-color: rgba(0, 0, 0, 0.03);
	bottom: 0;
	content: '';
	display: block;
	left: 0;
	pointer-events: none;
	position: absolute;
	right: 0;
	top: 0;
}
.uhHOwf img {
	display: block;
}
.ez24Df {
	overflow: hidden;
}
.ez24Df:not(\[style\*='padding-top:'\]) {
	height: 100%;
}
.ez24Df img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}
.ez24Df\[style\*='padding-top:'\] img {
	position: absolute;
	top: 0;
}
.YIQBp.YIQBp {
	object-fit: fill;
}
.VeBrne.VeBrne {
	object-fit: contain;
}
.Yt787 {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	white-space: normal;
	overflow: hidden;
	overflow-wrap: break-word;
	text-overflow: ellipsis;
}
.AZxNrb.aKoISd {
	color: #bdc1c6;
}
.AZxNrb.cPUhZb {
	color: #bdc1c6;
}
.AZxNrb.iokfce {
	color: #bdc1c6;
}
.AZxNrb.aKoISd:hover {
	text-decoration: underline;
}
.AZxNrb.cPUhZb:hover {
	text-decoration: underline;
}
.AZxNrb.iokfce:hover {
	text-decoration: underline;
}
.nfF3Me {
	min-height: 36px;
}
.buzUwc {
	min-height: 29px;
}
.iDBaYb {
	display: flex;
	position: relative;
	flex-wrap: nowrap;
	align-items: center;
}
.LbKnXb {
	flex: 1;
	min-width: 0;
	width: calc(var(--google-fs, 1) \* 100%);
}
.n6s7e.n6s7e {
	flex: none;
	flex-shrink: 1;
	width: auto;
}
.YAG2qc {
	margin-left: 8px;
}
.R8BTeb {
	font-size: 14px;
	line-height: 20px;
	align-items: center;
	letter-spacing: 0.1px;
	color: #e8eaed;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.vDF3Oc.vDF3Oc .R8BTeb,
.vDF3Oc.vDF3Oc .ouxCkc {
	color: #e8e8e8;
}
.vDF3Oc.vDF3Oc .ob9lvb {
	color: #9e9e9e;
	text-overflow: ellipsis;
	overflow: hidden;
}
.J0EDnf {
	margin-left: 12px;
}
.Ss6Sxb {
	margin-left: 0;
	margin-top: 3px;
}
.DMUiif.DMUiif {
	display: flex;
	align-items: center;
}
.du278d.du278d {
	font-size: 12px;
	line-height: 16px;
}
.UYJxh.UYJxh {
	margin-left: 6px;
}
.iKOnjb.iKOnjb {
	margin-left: 8px;
}
.d6R6kf {
	align-self: center;
}
.oRVWZ {
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
}
.CZ61cb {
	height: 26px;
	width: 26px;
	background-color: #fff;
	border: 1px solid #9aa0a6;
}
.qr5Pe {
	height: 16px;
	width: 16px;
	background-color: #fff;
}
.g7Jr2c {
	height: 28px;
	width: 28px;
	background-color: #fff;
}
.CZ61cb.GB3ilc,
.GB3ilc {
	background-color: #fff;
}
.PIcRzd {
	height: 26px;
	width: 26px;
	background-color: #fff;
	border: 1px solid #3c4043;
}
.mAl5Zc {
	border-radius: 50%;
	content: '';
	height: 26px;
	-webkit-mask:
		linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	mask:
		linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
	padding: 1px;
	position: absolute;
	width: 26px;
}
.Vwoesf:not(.oRVWZ) {
	display: inline-block;
}
.Vwoesf {
	vertical-align: middle;
}
.XNo5Ab.XNo5Ab {
	display: block;
}
.lWlVCe {
	border-radius: 50%;
}
.bJVp8c {
	color: #697988;
}
.Jj3Uob {
	color: #697988;
}
.Ux0Ks {
	margin-top: -2px;
	margin-bottom: -2px;
	margin-right: -24px;
	padding-left: 8px;
}
.Ux0Ks .mzNRm {
	padding-left: 0;
}
.Ux0Ks:hover .xTFaxe {
	background-color: rgba(189, 193, 198, 0.08);
	border-radius: 50%;
}
.y6CIle {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
	background-color: #28292a;
}
.bcT5Pb {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
	background-color: #202124;
}
.O3IdHf {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
	background-color: #333438;
}
sentinel {
}
.DfMusf {
	border-radius: 16px;
}
sentinel {
}
.aKoISd {
	font-size: 14px;
	line-height: 18px;
	font-weight: 500;
	font-family:
		Google Sans,
		Roboto-medium,
		arial,
		sans-serif-medium,
		sans-serif;
	color: #e8eaed;
}
sentinel {
}
.GWRUbe {
	margin-bottom: 8px;
}
sentinel {
}
.ec0wHe {
	-webkit-box-flex: 1;
	-webkit-flex-grow: 1;
	flex-grow: 1;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
}
.ec0wHe > \* + \* {
	margin-top: 8px;
}
.mqRHbb {
	-webkit-box-flex: 1;
	-webkit-flex-grow: 1;
	flex-grow: 1;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
}
.mqRHbb > \* + \* {
	margin-top: 12px;
}
sentinel {
}
.VaiWld {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-box-flex: 0;
	-webkit-flex-grow: 0;
	flex-grow: 0;
	-webkit-flex-shrink: 0;
	flex-shrink: 0;
	word-break: break-word;
}
.VaiWld > \* + \* {
	margin-top: 4px;
}
.vG7Rsb {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-box-flex: 0;
	-webkit-flex-grow: 0;
	flex-grow: 0;
	-webkit-flex-shrink: 0;
	flex-shrink: 0;
	word-break: break-word;
}
.vG7Rsb > \* + \* {
	margin-top: 8px;
}
.McAGc {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-box-flex: 0;
	-webkit-flex-grow: 0;
	flex-grow: 0;
	-webkit-flex-shrink: 0;
	flex-shrink: 0;
	word-break: break-word;
}
.McAGc > \* + \* {
	margin-top: 12px;
}
.ojAl6e.Y9KNBf {
	-webkit-box-flex: 1;
	-webkit-flex-grow: 1;
	flex-grow: 1;
}
sentinel {
}
.ESvzac {
	-webkit-flex-shrink: 0;
	flex-shrink: 0;
	-webkit-box-flex: 0;
	-webkit-flex-grow: 0;
	flex-grow: 0;
	overflow: hidden;
}
.PND3bd {
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
}
.Vgpgjf {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}
sentinel {
}
.g1yMoc {
	width: 100%;
	height: auto;
	display: block;
}
sentinel {
}
.DH9lqb {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	position: relative;
	-webkit-flex-wrap: nowrap;
	flex-wrap: nowrap;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
}
.wep10b {
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
	min-width: 0;
	width: 100%;
}
.lqPjrf {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	position: relative;
	-webkit-flex-wrap: nowrap;
	flex-wrap: nowrap;
	-webkit-box-align: start;
	-webkit-align-items: start;
	align-items: start;
}
sentinel {
}
.wYFOId {
	border-radius: 8px;
}
sentinel {
}
.GUHazd {
	padding-bottom: 12px;
}
sentinel {
}
.zUdppc {
	padding-bottom: 4px;
}
sentinel {
}
.ZTblUe {
	padding-left: 2px;
	padding-right: 2px;
}
sentinel {
}
.N8D9gb {
	padding-left: 12px;
	padding-right: 12px;
}
sentinel {
}
.e1H2sd > \* + \* {
	margin-top: 8px;
}
sentinel {
}
.cB4NFc {
	padding-top: 16px;
}
sentinel {
}
.Kc1gdb {
	padding-top: 4px;
}
sentinel {
}
.DBCMPb {
	font-size: 14px;
	line-height: 18px;
	font-weight: 400;
	font-family:
		Google Sans,
		Roboto,
		arial,
		sans-serif;
	color: #e8eaed;
}
sentinel {
}
.mcFSkd {
	font-size: 20px;
	line-height: 24px;
	font-weight: 400;
	font-family: Roboto, arial, sans-serif;
	color: #e8eaed;
}
.mcFSkd {
	font-family:
		Google Sans,
		Roboto,
		arial,
		sans-serif;
}
sentinel {
}
.cPUhZb {
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;
	font-family:
		Google Sans,
		Roboto-medium,
		arial,
		sans-serif-medium,
		sans-serif;
	color: #e8eaed;
}
sentinel {
}
.iokfce {
	font-size: 20px;
	line-height: 24px;
	font-weight: 500;
	font-family:
		Google Sans,
		Roboto-medium,
		arial,
		sans-serif-medium,
		sans-serif;
	color: #e8eaed;
}
sentinel {
}
.pEjysf {
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	font-family: Roboto, arial, sans-serif;
	color: #e8eaed;
}
.pEjysf {
	font-size: 18px;
	line-height: 24px;
	font-weight: 400;
	font-family:
		Google Sans,
		Roboto,
		arial,
		sans-serif;
}
sentinel {
}
.t6uYac {
	font-size: 12px;
	line-height: 16px;
	font-weight: 500;
	font-family:
		Google Sans,
		Roboto-medium,
		arial,
		sans-serif-medium,
		sans-serif;
	color: #e8eaed;
}
sentinel {
}
.YiPTpf {
	font-size: 14px;
	line-height: 18px;
	font-weight: 400;
	font-family:
		Google Sans,
		Roboto,
		arial,
		sans-serif;
	color: #e8eaed;
}
.YiPTpf {
	font-size: 18px;
	line-height: 24px;
	font-weight: 400;
}
sentinel {
}
```

[](https://medium.com/@islizeqiang/a-quick-guide-to-typescript-5-0-decorators-d06cabe09e8c#:~:text=Decorators%20are%20a%20powerful%20feature%20in%20TypeScript,behavior%20of%20classes%2C%20methods%2C%20accessors%2C%20and%20properties.)

![](data:image/jpeg;base64,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)

TypeScript 5.0 Decorators: Unveiling Practical Techniques and ...

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAAAAAAB+fn7ExMTOzs6WlpZvb2+JiYn////a2totLS2enp6oqKi7u7vz8/NERETGDIFEAAAAAXRSTlNy/u3IdgAAAFJJREFUeAFjYBQEAwEGQSjAxhAyCRRMBzE8OjqlOtQ2Moh1dHTEdMy5yCALZDh39BgyCAMZk0EMISBjD1AKpLhPvqNoI4Og6MyDgtrYTYYCuDMA1vkcdUfZ87kAAAAASUVORK5CYII=)

medium.com

```typescript
(function(){ (this||self).Bqpk9e=function(f,d,n,e,k,p){var g=document.getElementById(f);if(g&&(0!==g.offsetWidth||0!==g.offsetHeight)){var l=g.querySelector("div"),h=l.querySelector("div"),a=0;f=Math.max(l.scrollWidth-l.offsetWidth,0);if(0<d&&(h=h.children,a=h\[d\].offsetLeft-h\[0\].offsetLeft,e)){for(var m=a=0;m<d;++m)a+=h\[m\].offsetWidth;a=Math.min(f,a)}a+=n;d=Math.min(e?f-a:a,f);l.scrollLeft=e&&p?a:e&&k?-a:d;var b=g.getElementsByTagName("g-left-button")\[0\],c=g.getElementsByTagName("g-right-button")\[0\];b&&c&&(e= RegExp("\\\\btHT0l\\\\b"),k=RegExp("\\\\bpQXcHc\\\\b"),b.className=b.className.replace(e,""),c.className=c.className.replace(e,""),b.className=0===d?"pQXcHc "+b.className:b.className.replace(k,""),c.className=d===f?"pQXcHc "+c.className:c.className.replace(k,""),setTimeout(function(){b.className+=" tHT0l";c.className+=" tHT0l"},50))}};}).call(this);(function(){var id='\_Y97iZeiCM92FwbkPp5iH2AM_65';var index=0;var offset=0;var is_rtl=false;var is_gecko=false;var is_edge=false;var init='Bqpk9e';window\[init\](id,index,offset,is_rtl,is_gecko,is_edge);})();
```

```css
.Kgs6dd {
	flex: 1 1 auto;
	margin-right: 10px;
}
.RPu3af {
	margin-top: -8px;
	order: -1;
}
.L4rQVd {
	display: flex;
	flex-direction: row;
	gap: 10px;
	margin-top: 8px;
}
.wMcnBf {
	flex-basis: 100%;
	min-width: 0;
	margin-bottom: 8px;
}
.wMcnBf .rAzITb:last-of-type {
	margin-right: 0;
}
.wMcnBf .HG5ZQb::after {
	content: '';
	padding-right: 12px;
}
.wMcnBf .rAzITb {
	margin-right: 12px;
}
.Yrj0Ob .wMcnBf .rAzITb:first-of-type {
	margin-left: 0;
}
.wMcnBf .wgbRNb g-fab {
	background: var(--mc9) !important;
	color: var(--mc14) !important;
	border: none !important;
	box-shadow: none !important;
}
.YvNJLe.z1Mm0e .RyIFgf > \* {
	margin-left: 12px;
}
.YvNJLe.z1Mm0e .RyIFgf {
	margin-left: -12px;
	-webkit-mask-image: linear-gradient(
		90deg,
		transparent,
		black 12px,
		black calc(100% - 12px),
		transparent
	);
	mask-image: linear-gradient(
		90deg,
		transparent,
		black 12px,
		black calc(100% - 12px),
		transparent
	);
	-webkit-mask-size: 100%;
	mask-size: 100%;
	transition:
		-webkit-mask-size 0.5s,
		mask-size 0.5s;
}
.YvNJLe .RyIFgf.n8pD0b {
	-webkit-mask-size: calc(100% + 12px);
	mask-size: calc(100% + 12px);
}
.VZuv1 {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.pQXcHc {
	cursor: default;
	opacity: 0;
	visibility: hidden;
}
.BERAof {
	width: auto;
	flex: 1 1 auto;
	margin-inline-end: auto;
	max-width: 632px;
	padding-top: 8px;
	padding-bottom: 14px;
}
.BERAof .bDo4af.bDo4af {
	margin-left: 0;
	max-width: calc(100% - 32px);
}
.jzmtDd {
	background: 0;
	border: 0;
	color: inherit;
	padding: 0;
	cursor: default;
	margin: 0 -16px 0 8px;
	opacity: 0.5;
}
.bDo4af .d1TRBf .jzmtDd {
	width: 44px;
	height: 46px;
}
.OIXGAd .jzmtDd svg {
	height: 18px;
	width: 18px;
}
.Uceduc .jzmtDd {
	cursor: pointer;
	opacity: 1;
}
.bDo4af {
	align-items: center;
	background: rgba(var(--mc2t), 0.5);
	border-radius: 20px 2px 20px 20px;
	border: 1px solid var(--mc29);
	color: var(--mc4);
	display: flex;
	flex: 1;
	gap: 8px;
	overflow: hidden;
	padding: 0 16px;
	transition: max-width 350ms cubic-bezier(0.05, 0.7, 0.1, 1);
	border-radius: 24px 4px 24px 24px;
	max-width: 355px;
	transition: max-width 450ms cubic-bezier(0.05, 0.7, 0.1, 1);
}
.bDo4af .yQLaje,
.bDo4af .oTiGzc {
	padding: 10px 0;
	max-height: 20px;
}
.bDo4af ::placeholder {
	color: var(--mc5);
	font-family:
		Google Sans,
		Roboto,
		Helvetica Neue,
		Arial,
		sans-serif;
	font-size: 16px;
	line-height: 20px;
}
.lH996d {
	border: none;
	outline: none;
}
.lH996d {
	color: var(--mc5);
	flex: 1;
	font-family:
		Google Sans,
		Roboto,
		Helvetica Neue,
		Arial,
		sans-serif;
	font-size: 16px;
	line-height: 20px;
	resize: none;
}
.OIXGAd {
	align-items: center;
	display: flex;
	flex-grow: 1;
	min-height: 46px;
}
.a1qmk {
	flex-grow: 1;
}
.WQMPge {
	margin-right: 8px;
	height: 32px;
	width: 44px;
}
.iIkNgf {
	line-height: 0;
	margin: 0 8px;
}
.d1TRBf {
	align-items: center;
	color: var(--mc4);
	display: flex;
}
.QDmqye .bDo4af,
.sG4Xue .bDo4af {
	margin-right: 16px;
	max-width: calc(100% - 32px - 32px);
	margin-left: 16px;
	margin-left: 0;
	margin-right: 0;
	max-width: calc(100% - 32px);
}
button.KZ0FVb {
	background: 0;
	border: none;
	padding: 0;
	position: relative;
	overflow: hidden;
	transform: translateZ(0);
}
.SYFWme {
	border-radius: 8px;
	height: 100%;
	width: 100%;
	position: relative;
	object-fit: cover;
}
.SYFWme:not(\[src\]) {
	display: none;
}
.dsKKL {
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 8px;
	pointer-events: none;
	position: absolute;
	fill: #fff;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
}
.dsKKL svg {
	width: 50%;
	margin: 0 auto;
}
.SYFWme:hover ~ .dsKKL {
	opacity: 1;
}
.SYFWme:hover {
	cursor: pointer;
}
.rB1GCe {
	align-items: center;
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	background-color: rgb(255, 255, 255, 0.6);
	color: #4285f4;
}
.rB1GCe svg {
	margin: auto;
}
.Z3shwc {
	width: 28px;
	height: 28px;
}
.ZqAPqd {
	stroke-dasharray: 58.9;
	stroke-dashoffset: 58.9;
}
.Z3shwc,
.Z3shwc \* {
	transform-origin: 50% 50%;
}
@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.Z3shwc {
	animation-name: rotate;
	animation-duration: 1568.63ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}
@keyframes fillunfill {
	from {
		stroke-dashoffset: 58.8;
	}
	50% {
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: -58.4;
	}
}
@keyframes rot {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(-360deg);
	}
}
.ZqAPqd {
	animation-name: fillunfill, rot;
	animation-duration: 1333ms, 5332ms;
	animation-iteration-count: infinite, infinite;
	animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1), steps(4);
	animation-play-state: running, running;
	animation-fill-mode: forwards;
}
.ReJkDe {
	display: grid;
}
.oTiGzc {
	visibility: hidden;
}
.oTiGzc,
.yQLaje {
	max-height: 8em;
	grid-area: 1/1/2/2;
	border: 0;
	padding: 22px;
	padding-left: 0;
	background: inherit;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	white-space: pre-wrap;
	overflow-wrap: anywhere;
	overflow-y: auto;
}
.yQLaje::placeholder {
	color: var(--mc6);
}
.yQLaje {
	resize: none;
}
.JpOLod {
	flex: 1 0 auto;
	color: var(--mc14);
	line-height: 0;
	background-color: transparent;
	cursor: pointer;
	border: none;
	padding: 0;
}
.JpOLod:disabled {
	opacity: 0.4;
	cursor: not-allowed;
}
.JpOLod span {
	height: 20px;
	width: 20px;
}
.O6lGXc {
	width: 0;
	height: 0;
}
.C5ZtL {
	background-color: transparent;
	border: none;
	border-radius: 8px;
	border-radius: 8px;
	box-sizing: border-box;
	cursor: pointer;
	display: inline-block;
	font-size: 14px;
	font-weight: 500;
	padding-top: 6px;
	padding-bottom: 3px;
	min-width: 88px;
	position: relative;
	text-decoration: none !important;
	-webkit-user-select: none;
	white-space: nowrap;
}
.C5ZtL:disabled,
.C5ZtL\[disabled\]:not(\[disabled=false\]) {
	pointer-events: none;
}
.C5ZtL.C8PMuc {
	min-width: 64px;
}
.C5ZtL.J0KQDb {
	color: #bdc1c6;
}
.J0KQDb:hover {
	background-color: rgba(102, 102, 102, 0.2);
}
.J0KQDb:focus {
	background-color: rgba(102, 102, 102, 0.2);
}
.J0KQDb:active {
	background-color: rgba(102, 102, 102, 0.4);
}
.C5ZtL.J0KQDb:disabled,
.C5ZtL.J0KQDb\[disabled\]:not(\[disabled=false\]) {
	color: rgba(255, 255, 255, 0.26) !important;
}
.C5ZtL.ybnC1 {
	color: #000;
}
.ybnC1:hover {
	background-color: rgba(204, 204, 204, 0.15);
}
.ybnC1:focus {
	background-color: rgba(204, 204, 204, 0.15);
}
.ybnC1:active {
	background-color: rgba(204, 204, 204, 0.25);
}
.C5ZtL.ybnC1:disabled,
.C5ZtL.ybnC1\[disabled\]:not(\[disabled=false\]) {
	color: rgba(0, 0, 0, 0.3) !important;
}
.X7yl2b svg {
	transform: rotate(0deg) !important;
}
.X7yl2b {
	background: none !important;
	color: unset !important;
}
.X7yl2b.FR7ZSc.k0Jjg .niO4u {
	background: none !important;
	color: unset !important;
}
.X7yl2b.FR7ZSc .niO4u {
	border: 1px solid var(--mc16) !important;
	height: 46px !important;
	min-height: 46px !important;
}
.X7yl2b.FR7ZSc .niO4u .clOx1e {
	white-space: nowrap;
}
.X7yl2b.FR7ZSc .niO4u .d3o3Ad,
.X7yl2b.FR7ZSc .niO4u .WoA9Zd {
	color: var(--mc14);
	fill: var(--mc14);
}
.X7yl2b.FR7ZSc.k0Jjg .niO4u:hover .d3o3Ad,
.X7yl2b.FR7ZSc.k0Jjg .niO4u:hover .WoA9Zd {
	color: var(--mc14) !important;
	fill: var(--mc14) !important;
}
.X7yl2b.FR7ZSc:not(\[disabled\]):not(\[selected\]).k0Jjg:hover .kHtcsd {
	background-color: var(--mc3) !important;
}
.X7yl2b.FR7ZSc.k0Jjg .niO4u::before {
	content: none !important;
}
.rAzITb .X7yl2b.oXLe0e .niO4u {
	background-color: var(--mc19) !important;
	border: none !important;
	color: var(--mc21) !important;
}
.rAzITb .X7yl2b.oXLe0e.FR7ZSc .niO4u .d3o3Ad,
.rAzITb .X7yl2b.oXLe0e.FR7ZSc .niO4u .WoA9Zd {
	color: var(--mc21) !important;
	fill: var(--mc21) !important;
}
.rAzITb .X7yl2b.oXLe0e .niO4u .kHtcsd:active,
.rAzITb .X7yl2b.oXLe0e .niO4u .kHtcsd:hover:active {
	background-color: rgba(0, 0, 0, 0.4) !important;
	border: none !important;
}
.rAzITb .X7yl2b.oXLe0e .niO4u .kHtcsd:hover {
	background-color: rgba(0, 0, 0, 0.2) !important;
	border: none !important;
}
.ddYehe {
	align-items: center;
	display: flex;
	gap: 5px;
	padding: 5px 0;
	height: 36px;
	color: var(--mc5);
	white-space: nowrap;
}
.eSLKe {
	color: var(--mc14);
	fill: var(--mc14);
}
.ecCHhd .EpPYLd.CjiZvb {
	background-color: var(--mc3);
}
.FV1zuf {
	font-family:
		Google Sans,
		Roboto,
		Helvetica Neue,
		Arial,
		sans-serif;
	border-radius: 16px !important;
	margin: 0 20px;
	display: flex;
	max-width: 360px;
	justify-content: flex-end;
	align-items: flex-start;
	gap: 8px;
}
.FV1zuf .lEuUeb {
	font-family:
		Google Sans,
		Roboto,
		Helvetica Neue,
		Arial,
		sans-serif;
}
.FV1zuf .lEuUeb .niO4u {
	border: none !important;
}
.FV1zuf .lEuUeb .niO4u {
	background: var(--mc19);
	color: var(--mc21);
}
.FV1zuf .lEuUeb .niO4u:hover {
	background-color: var(--mc10);
	color: var(--mc5);
}
.q7gX8 {
	align-items: center;
	color: var(--mc5);
	display: flex;
	justify-content: space-between;
	margin: 0 20px;
}
.aMgJWc {
	line-height: 26px;
	font-weight: 500;
}
.lq7Bqb {
	background-clip: content-box;
	cursor: pointer;
	margin: -12px;
	padding: 12px;
}
.BwaQcd {
	color: var(--mc5);
	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
	margin: 20px;
}
.ihF3Ud {
	align-items: end;
	align-self: stretch;
	display: flex;
	gap: 12px;
	justify-content: flex-end;
	margin: 16px 20px;
}
.Nnr8Zb {
	align-items: center;
	display: flex;
	gap: 10px;
}
.FPZbsc {
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	max-width: 410px;
	display: -webkit-box;
	overflow: hidden;
	white-space: normal;
}
.jbbBh {
	margin-left: 16px !important;
}
.i1eWpb .GTERze {
	display: none;
}
.ky4hfd {
	display: none;
}
.i1eWpb .ky4hfd {
	display: block;
}
.GMnjn {
	text-align: right;
}
.YUg0se .WGbsof {
	align-items: center;
	border-radius: 40px;
	border: 1px solid var(--mc16);
	box-sizing: border-box;
	display: inline-flex;
	height: 40px;
	justify-content: center;
	margin-right: 10px;
	width: 40px;
}
.YUg0se .WGbsof {
	align-items: center;
	border-radius: 46px;
	border: 1px solid var(--mc16);
	box-sizing: border-box;
	display: inline-flex;
	height: 46px;
	justify-content: center;
	margin-right: 10px;
	width: 46px;
}
.WGbsof:hover {
	cursor: pointer;
	background-color: var(--mc3);
}
.YUg0se .NtaMpb.k0Jjg .niO4u::before {
	content: none !important;
}
.YUg0se .NtaMpb.k0Jjg:hover .niO4u .kHtcsd {
	background: none !important;
}
.YUg0se .WGbsof {
	margin-right: 10px;
}
.YUg0se .WGbsof:last-child {
	margin-right: 0;
}
.sZKvbe {
	fill: currentColor;
	width: 18px;
}
.ah4FOe {
	transform: rotate(180deg);
}
.YUg0se .NtaMpb .niO4u {
	background: none !important;
	color: var(--mc14) !important;
}
.YUg0se .k0Jjg\[selected\] .d3o3Ad.d3o3Ad.d3o3Ad.d3o3Ad {
	color: #28292a;
}
.WGbsof\[selected\] {
	background-color: var(--mc14);
	border: 1px solid var(--mc14);
}
.TBC9ub {
	margin-left: 0px;
	margin-right: 0px;
}
.OZ5bRd {
	margin-bottom: auto;
	margin-top: auto;
}
.wgbRNb {
	cursor: pointer;
	height: 72px;
	position: absolute;
	display: block;
	visibility: inherit;
	width: 36px;
	bottom: 0;
	opacity: 0.8;
	top: 0;
	z-index: 101;
}
.wgbRNb.tHT0l {
	-webkit-transition:
		opacity 0.5s,
		visibility 0.5s;
	transition:
		opacity 0.5s,
		visibility 0.5s;
}
.wgbRNb:hover {
	opacity: 0.9;
}
.wgbRNb.pQXcHc,
.wgbRNb.pQXcHc:hover {
	cursor: default;
	opacity: 0;
	visibility: hidden;
}
.b5K9zd {
	bottom: 0;
	display: block;
	position: absolute !important;
	top: 0;
}
sentinel {
}
.wgbRNb.zfpUke:hover g-fab {
	color: #dadce0 !important;
}
.wgbRNb.zfpUke {
	height: 36px;
	width: 36px;
	opacity: 0;
}
.z1Mm0e:hover .wgbRNb.zfpUke {
	opacity: 0.9;
}
.z1Mm0e .wgbRNb.zfpUke:hover,
.z1Mm0e .wgbRNb.zfpUke:focus-visible {
	opacity: 1;
}
.wgbRNb.zfpUke.pQXcHc,
.wgbRNb.zfpUke.pQXcHc:hover {
	opacity: 0;
}
.bCwlI.zfpUke g-fab,
.VdehBf.zfpUke g-fab {
	box-shadow:
		0 0 0 1px rgba(0, 0, 0, 0.04),
		0 4px 8px 0 rgba(0, 0, 0, 0.2);
	cursor: pointer;
	height: 36px;
	width: 36px;
}
.bCwlI.zfpUke {
	left: 16px;
}
.VdehBf.zfpUke {
	right: 16px;
}
sentinel {
}
.OvQkSb {
	border-radius: 9999px;
}
.S3PB2d {
	margin: auto;
}
.sr9hec {
	display: block;
	position: relative;
	z-index: 0;
}
.sr9hec {
	cursor: pointer;
}
.sr9hec {
	box-shadow:
		0,
		0,
		2,
		0 rgba(0, 0, 0, 0.5);
}
.sr9hec:focus {
	outline: none;
}
.sr9hec .U8v51e {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 24px;
	height: 24px;
}
.s3IB3 {
	width: 40px;
	height: 40px;
}
.a11Pr {
	width: 56px;
	height: 56px;
}
.MKCV1b {
	width: 28px;
	height: 28px;
}
.sr9hec.MKCV1b .U8v51e {
	width: 22px;
	height: 22px;
}
.OZQDWd {
	width: 18px;
	height: 18px;
}
.sr9hec.OZQDWd .U8v51e {
	width: 12px;
	height: 12px;
}
sentinel {
}
.zJUuqf {
	margin-bottom: 4px;
}
.AB4Wff {
	margin-left: 16px;
}
.v0rrvd {
	padding-bottom: 16px;
}
@-webkit-keyframes g-snackbar-show {
	from {
		pointer-events: none;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	to {
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
	}
}
@keyframes g-snackbar-show {
	from {
		pointer-events: none;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	to {
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
	}
}
@-webkit-keyframes g-snackbar-hide {
	from {
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
	}
	to {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
}
@keyframes g-snackbar-hide {
	from {
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
	}
	to {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
}
@-webkit-keyframes g-snackbar-show-content {
	from {
		opacity: 0;
	}
}
@keyframes g-snackbar-show-content {
	from {
		opacity: 0;
	}
}
@-webkit-keyframes g-snackbar-hide-content {
	to {
		opacity: 0;
	}
}
@keyframes g-snackbar-hide-content {
	to {
		opacity: 0;
	}
}
.LH3wG,
.jhZvod {
	bottom: 0;
	height: 0;
	position: fixed;
	z-index: 999;
}
.Ox8Cyd {
	height: 0;
	position: fixed;
	z-index: 999;
}
.E7Hdgb {
	box-sizing: border-box;
	visibility: hidden;
	display: inline-block;
}
.yK6jqe,
.Wu0v9b {
	box-sizing: border-box;
	visibility: hidden;
}
.rTYTNb {
	-webkit-animation: g-snackbar-hide 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
	animation: g-snackbar-hide 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
	visibility: inherit;
}
.UewPMd {
	-webkit-animation: g-snackbar-show 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
	animation: g-snackbar-show 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
	visibility: inherit;
}
.b77HKf {
	background-color: #3c4043;
	padding: 0 24px;
}
.rIxsve {
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	display: box;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
}
.rTYTNb .rIxsve {
	-webkit-animation: g-snackbar-hide-content 0.35s cubic-bezier(
			0.4,
			0,
			0.2,
			1
		) both;
	animation: g-snackbar-hide-content 0.35s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.UewPMd .rIxsve {
	-webkit-animation: g-snackbar-show-content 0.35s cubic-bezier(
			0.4,
			0,
			0.2,
			1
		) 0.15s both;
	animation: g-snackbar-show-content 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both;
}
.Txngnb.Txngnb {
	line-height: 20px;
}
.Txngnb {
	color: #fff;
	-webkit-box-flex: 1;
	-webkit-flex: 1 1 auto;
	flex: 1 1 auto;
	margin: 14px 0;
	word-break: break-word;
}
.sHFNYd {
	margin-right: -8px;
}
@media (min-width: 569px) and (min-height: 569px) {
	.LH3wG,
	.jhZvod {
		text-align: center;
	}
	.Wu0v9b,
	.yK6jqe {
		display: inline-block;
		max-width: 568px;
		min-width: 288px;
		text-align: left;
	}
	.b77HKf {
		border-radius: 8px;
	}
	.sHFNYd {
		margin-left: 40px;
	}
}
.V9O1Yd .rIxsve {
	display: block;
	padding: 8px 0;
}
.V9O1Yd .sHFNYd {
	margin-left: 0;
}
.V9O1Yd .sHFNYd g-flat-button {
	padding-left: 0;
}
.jhZvod {
	left: 16px;
	right: auto;
}
.LH3wG,
.Ox8Cyd {
	left: 0;
	right: 0;
}
.yK6jqe,
.Wu0v9b,
.E7Hdgb {
	position: relative;
}
.G9jore {
	position: absolute;
	top: -24px;
	bottom: -24px;
	left: -24px;
	right: -24px;
}
sentinel {
}
.hObAcc {
	margin-left: 4px;
	margin-right: 4px;
}
.r2fjmd {
	margin-bottom: 0px;
	margin-top: 0px;
}
.gTewb {
	padding-left: 8px;
	padding-right: 8px;
}
sentinel {
}
@media (min-height: 576px) {
	.uSolm .qk7LXc {
		height: 100%;
	}
	.uSolm {
		padding: 64px 0px;
	}
}
@media (max-height: 575px) {
	.uSolm .qk7LXc {
		height: 100%;
		max-height: 448px;
	}
}
@media (min-height: 496px) {
	.GeOznc .qk7LXc {
		height: 100%;
	}
	.GeOznc {
		padding: 24px 0px;
	}
}
@media (max-height: 495px) {
	.GeOznc .qk7LXc {
		height: 100%;
		max-height: 448px;
	}
}
.kJFf0c.ivkdbf {
	-webkit-filter: none;
	filter: none;
}
.KUf18.ivkdbf {
	background-color: rgba(0, 0, 0, 0.6);
	opacity: 1;
	visibility: inherit;
}
.VfsLpf.ivkdbf {
	background-color: #000;
	opacity: 0.4;
	visibility: inherit;
}
.J3Hnlf.ivkdbf {
	background-color: #202124;
	opacity: 0.7;
	visibility: inherit;
}
.X46m8.ivkdbf {
	background-color: #000;
	opacity: 0.8;
	visibility: inherit;
}
.cBoDed.ivkdbf {
	background-color: #303134;
	opacity: 0.85;
	visibility: inherit;
}
.kyk7qb.ivkdbf {
	background-color: #202124;
	opacity: 0.6;
	visibility: inherit;
}
.qk7LXc.ivkdbf {
	opacity: 1;
}
.mcPPZ.ivkdbf {
	opacity: 1;
	visibility: inherit;
}
.mcPPZ.nP0TDe {
	cursor: pointer;
}
.mcPPZ.nP0TDe .qk7LXc {
	cursor: default;
}
.kJFf0c {
	position: fixed;
	z-index: 9997;
	right: 0;
	bottom: -200px;
	top: 0;
	left: 0;
	-webkit-transition: opacity 0.25s;
	transition: opacity 0.25s;
	opacity: 0;
	visibility: hidden;
}
.qk7LXc {
	display: inline-block;
	z-index: 9997;
	background-color: #202124;
	opacity: 0;
	white-space: normal;
	overflow: hidden;
}
.qk7LXc {
	border-radius: 8px;
}
.qk7LXc {
	box-shadow:
		0px 5px 26px 0px rgba(0, 0, 0, 0.5),
		0px 20px 28px 0px rgba(0, 0, 0, 0.5);
}
.qk7LXc.DJEOfc {
	background-color: transparent;
}
.qk7LXc.DJEOfc {
	box-shadow: none;
}
.qk7LXc.Fb1AKc {
	position: relative;
	vertical-align: middle;
}
.qk7LXc.ulWzbd {
	position: absolute;
}
.qk7LXc.P1WYLb {
	border: 1px solid #3c4043;
	box-shadow: #dadce0;
}
.mcPPZ {
	position: fixed;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	z-index: 9997;
	vertical-align: middle;
	visibility: hidden;
	white-space: nowrap;
	max-height: 100%;
	max-width: 100%;
	overflow-x: hidden;
	overflow-y: auto;
}
.mcPPZ.xg7rAe {
	text-align: center;
}
.mcPPZ::after {
	content: '';
	display: inline-block;
	height: 100%;
	vertical-align: middle;
}
.LjfRsf {
	height: 0;
	opacity: 0;
	position: absolute;
	width: 0;
}
.VH47ed {
	visibility: hidden;
}
.TaoyYc {
	overflow: hidden;
}
.qk7LXc.aJPx6e {
	overflow: visible;
}
.vAJJzd {
	opacity: 0.999;
}
.yMNJR .qk7LXc {
	max-width: 100%;
}
.cJFqsd .qk7LXc {
	height: 100%;
}
.rfx2Y .qk7LXc {
	width: 100%;
}
.BhUHze .qk7LXc {
	width: 75%;
}
.dgVGnc .qk7LXc {
	width: 90%;
}
sentinel {
}
.Tbiej {
	margin-bottom: 0px;
}
.u60jwe {
	margin-right: 0px;
}
.yUgQte {
	padding-left: 24px;
}
.NLkY2 {
	padding: 12px;
}
.I7Y2H {
	padding-right: 0px;
}
.KYn1Oe {
	display: block;
}
.SkCS {
	display: none;
}
.w4hKSe {
	padding: 24px 8px 20px 24px;
}
.w4hKSe:after {
	content: '';
	display: block;
	clear: both;
}
.l3gL0e .w4hKSe {
	display: none;
}
.prytSd {
	width: 24px;
	height: 24px;
	display: none;
	padding-top: 6px;
	padding-bottom: 6px;
	margin-top: -7px;
	margin-left: -20px;
	float: left;
}
.ZOeHRd {
	font-size: 20px;
	font-weight: 500;
	color: #e8eaed;
	float: left;
}
.k2XGCd {
	font-size: 13px;
	font-weight: 400;
	color: #9aa0a6;
}
.Cs2h6e .bwXN0b {
	width: 280px;
}
.Cs2h6e .w4hKSe {
	width: 248px;
}
.Cs2h6e .k2XGCd {
	width: 280px;
}
.cYONBc {
	cursor: pointer;
	float: right;
	height: 24px;
	margin: -12px 4px -12px -12px;
	width: 24px;
}
sentinel {
}
.iRPzcb {
	border-bottom: 1px solid #3c4043;
}
sentinel {
}
.UZXANc.UZXANc.LwdV0e .niO4u {
	top: 3px;
	height: 0;
}
.mKjEAd.mKjEAd.LwdV0e .niO4u {
	height: 0;
}
.LwdV0e .R04TOd,
.LwdV0e .d3o3Ad {
	height: 18px;
}
.LwdV0e.rlt7Ub .clOx1e {
	margin: 5px 16px;
}
.bacHod.LwdV0e .R04TOd,
.bacHod.LwdV0e .d3o3Ad {
	height: 16px;
}
.LwdV0e .WoA9Zd {
	height: 18px;
}
.LwdV0e.gzV1t .niO4u {
	min-height: 36px;
}
.LwdV0e.PrjL8c .niO4u {
	height: 36px;
}
.eFSWxd.LwdV0e .clOx1e {
	margin: 5px 16px 5px 8px;
}
.R04TOd,
.eFSWxd.LwdV0e .d3o3Ad {
	margin-left: 12px;
}
sentinel {
}
.expUPd .niO4u {
	background-color: #a8c7fa;
	color: #202124;
}
.expUPd .QuU3Wb {
	color: #202124;
}
.expUPd.k0Jjg .d3o3Ad {
	color: #202124;
}
.expUPd.k0Jjg:active .d3o3Ad {
	color: #202124;
}
.expUPd.k0Jjg:hover .d3o3Ad {
	color: #202124;
}
.expUPd.k0Jjg:focus .d3o3Ad {
	color: #202124;
}
.brKmxb:focus-visible .expUPd:not(\[disabled\]).k0Jjg .kHtcsd,
.expUPd:not(\[disabled\]).k0Jjg:focus-visible .kHtcsd {
	background-color: #eef0ff33;
}
.brKmxb .expUPd:not(\[disabled\]).k0Jjg:hover .kHtcsd,
.expUPd:not(\[disabled\]).k0Jjg:hover .kHtcsd {
	background-color: #eef0ff39;
}
.brKmxb:active .expUPd:not(\[disabled\]).k0Jjg .kHtcsd,
.expUPd:not(\[disabled\]).k0Jjg:active .kHtcsd {
	background-color: #eef0ff66;
}
@media (prefers-contrast: more) {
	.expUPd .niO4u {
		outline: 1px solid #202124;
	}
}
sentinel {
}
g-dropdown-menu {
	display: inline-block;
	position: relative;
}
.Jb0Zif g-dropdown-menu {
	vertical-align: middle;
}
.WNN1b {
	background-color: #202124;
}
.W4XqN {
	cursor: pointer;
	background-color: #202124;
}
.GKXWV {
	border-top: 1px solid #5f6368;
	height: 0;
	margin-left: 5px;
	margin-right: 5px;
}
.eNRwyf {
	height: 100%;
	width: 100%;
}
sentinel {
}
.pkWBse {
	box-shadow: 1px 1px 15px 0px #171717;
}
.pkWBse {
	border-radius: 8px;
}
.UjBGL {
	display: block;
}
.CcNe6e {
	cursor: pointer;
	display: inline-block;
}
.iRQHZe {
	position: absolute;
}
.Qaqu5 {
	position: relative;
}
.shnMoc.CcNe6e {
	display: block;
}
.v4Zpbe.CcNe6e {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	height: 100%;
	width: 100%;
}
sentinel {
}
.rlt7Ub.erFMrf .clOx1e.clOx1e,
.eFSWxd.erFMrf .clOx1e.clOx1e {
	margin-right: 0;
}
.WoA9Zd {
	margin: 0 8px 0 4px;
}
sentinel {
}
.PBn44e {
	border-radius: 8px;
}
.yTik0 {
	border: none;
	display: block;
	outline: none;
}
.wplJBd {
	white-space: nowrap;
}
.JM22S::-webkit-scrollbar {
	width: 8px;
}
.JM22S::-webkit-scrollbar-thumb {
	background-color: #bababa;
	border-right: 4px solid #fff;
}
.iQXTJe {
	padding: 5px 0;
}
sentinel {
}
.Zt0a5e.LGiluc {
	border-top-color: #3c4043;
}
.Zt0a5e.LGiluc,
.Zt0a5e.EpPYLd\[disabled\] {
	color: rgba(255, 255, 255, 0.26) !important;
}
.CjiZvb,
.GZnQqe.EpPYLd:active {
	background-color: rgba(255, 255, 255, 0.1);
}
.EpPYLd {
	display: block;
	position: relative;
}
.YpcDnf {
	padding: 0 16px;
	vertical-align: middle;
}
.YpcDnf.HG1dvd {
	padding: 0;
}
.HG1dvd > \* {
	padding: 0 16px;
}
.WtV5nd .YpcDnf {
	padding-left: 28px;
}
.Zt0a5e .YpcDnf {
	line-height: 48px;
}
.GZnQqe .YpcDnf {
	line-height: 23px;
}
.EpPYLd:hover {
	cursor: pointer;
}
.EpPYLd,
.CB8nDe:hover {
	cursor: default;
}
.LGiluc,
.EpPYLd\[disabled\] {
	pointer-events: none;
	cursor: default;
}
.LGiluc {
	border-top: 1px solid;
	height: 0;
	margin: 5px 0;
}
.Zt0a5e.CB8nDe {
	background: no-repeat left 8px center;
}
.Zt0a5e.CB8nDe {
	background-image: url(https://ssl.gstatic.com/images/icons/material/system/1x/done\_white\_16dp.png);
}
.GZnQqe.CB8nDe {
	background: no-repeat left center;
}
.GZnQqe.CB8nDe {
	background-image: url(https://ssl.gstatic.com/ui/v1/menu/checkmark2-light.png);
}
.GZnQqe.LGiluc,
.GZnQqe.EpPYLd\[disabled\] {
	color: #dadce0 !important;
}
.GZnQqe.LGiluc {
	border-top-color: #3c4043;
}
sentinel {
}
.jbBItf {
	display: block;
	position: relative;
}
.DU0NJ {
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
}
.lP3Jof {
	display: inline-block;
	position: relative;
}
.nNMuOd {
	-webkit-animation: qli-container-rotate 1568.2352941176ms linear infinite;
	animation: qli-container-rotate 1568.2352941176ms linear infinite;
}
@-webkit-keyframes qli-container-rotate {
	from {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}
	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn);
	}
}
@keyframes qli-container-rotate {
	from {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}
	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn);
	}
}
.RoKmhb {
	height: 100%;
	opacity: 0;
	position: absolute;
	width: 100%;
}
.nNMuOd .VQdeab {
	-webkit-animation:
		qli-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
		qli-blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
	animation:
		qli-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
		qli-blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.nNMuOd .IEqiAf {
	-webkit-animation:
		qli-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
		qli-red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
	animation:
		qli-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
		qli-red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.nNMuOd .smocse {
	-webkit-animation:
		qli-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
		qli-yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
	animation:
		qli-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
		qli-yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.nNMuOd .FlKbCe {
	-webkit-animation:
		qli-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
		qli-green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
	animation:
		qli-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
		qli-green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.BSnLb .nNMuOd .RoKmhb {
	-webkit-animation: qli-fill-unfill-rotate 5332ms cubic-bezier(
			0.4,
			0,
			0.2,
			1
		) infinite both;
	animation: qli-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite
		both;
	opacity: 0.99;
}
@-webkit-keyframes qli-fill-unfill-rotate {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}
	12.5% {
		-webkit-transform: rotate(135deg);
		transform: rotate(135deg);
	}
	25% {
		-webkit-transform: rotate(270deg);
		transform: rotate(270deg);
	}
	37.5% {
		-webkit-transform: rotate(405deg);
		transform: rotate(405deg);
	}
	50% {
		-webkit-transform: rotate(540deg);
		transform: rotate(540deg);
	}
	62.5% {
		-webkit-transform: rotate(675deg);
		transform: rotate(675deg);
	}
	75% {
		-webkit-transform: rotate(810deg);
		transform: rotate(810deg);
	}
	87.5% {
		-webkit-transform: rotate(945deg);
		transform: rotate(945deg);
	}
	100% {
		-webkit-transform: rotate(3turn);
		transform: rotate(3turn);
	}
}
@keyframes qli-fill-unfill-rotate {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}
	12.5% {
		-webkit-transform: rotate(135deg);
		transform: rotate(135deg);
	}
	25% {
		-webkit-transform: rotate(270deg);
		transform: rotate(270deg);
	}
	37.5% {
		-webkit-transform: rotate(405deg);
		transform: rotate(405deg);
	}
	50% {
		-webkit-transform: rotate(540deg);
		transform: rotate(540deg);
	}
	62.5% {
		-webkit-transform: rotate(675deg);
		transform: rotate(675deg);
	}
	75% {
		-webkit-transform: rotate(810deg);
		transform: rotate(810deg);
	}
	87.5% {
		-webkit-transform: rotate(945deg);
		transform: rotate(945deg);
	}
	100% {
		-webkit-transform: rotate(3turn);
		transform: rotate(3turn);
	}
}
@-webkit-keyframes qli-blue-fade-in-out {
	0% {
		opacity: 0.99;
	}
	25% {
		opacity: 0.99;
	}
	26% {
		opacity: 0;
	}
	89% {
		opacity: 0;
	}
	90% {
		opacity: 0.99;
	}
	100% {
		opacity: 0.99;
	}
}
@keyframes qli-blue-fade-in-out {
	0% {
		opacity: 0.99;
	}
	25% {
		opacity: 0.99;
	}
	26% {
		opacity: 0;
	}
	89% {
		opacity: 0;
	}
	90% {
		opacity: 0.99;
	}
	100% {
		opacity: 0.99;
	}
}
@-webkit-keyframes qli-red-fade-in-out {
	0% {
		opacity: 0;
	}
	15% {
		opacity: 0;
	}
	25% {
		opacity: 0.99;
	}
	50% {
		opacity: 0.99;
	}
	51% {
		opacity: 0;
	}
}
@keyframes qli-red-fade-in-out {
	0% {
		opacity: 0;
	}
	15% {
		opacity: 0;
	}
	25% {
		opacity: 0.99;
	}
	50% {
		opacity: 0.99;
	}
	51% {
		opacity: 0;
	}
}
@-webkit-keyframes qli-yellow-fade-in-out {
	0% {
		opacity: 0;
	}
	40% {
		opacity: 0;
	}
	50% {
		opacity: 0.99;
	}
	75% {
		opacity: 0.99;
	}
	76% {
		opacity: 0;
	}
}
@keyframes qli-yellow-fade-in-out {
	0% {
		opacity: 0;
	}
	40% {
		opacity: 0;
	}
	50% {
		opacity: 0.99;
	}
	75% {
		opacity: 0.99;
	}
	76% {
		opacity: 0;
	}
}
@-webkit-keyframes qli-green-fade-in-out {
	0% {
		opacity: 0;
	}
	65% {
		opacity: 0;
	}
	75% {
		opacity: 0.99;
	}
	90% {
		opacity: 0.99;
	}
	100% {
		opacity: 0;
	}
}
@keyframes qli-green-fade-in-out {
	0% {
		opacity: 0;
	}
	65% {
		opacity: 0;
	}
	75% {
		opacity: 0.99;
	}
	90% {
		opacity: 0.99;
	}
	100% {
		opacity: 0;
	}
}
.beDQP {
	display: inline-block;
	height: 100%;
	overflow: hidden;
	position: relative;
	width: 50%;
}
.FcXfi {
	box-sizing: border-box;
	height: 100%;
	left: 45%;
	overflow: hidden;
	position: absolute;
	top: 0;
	width: 10%;
}
.SPKFmc {
	border-radius: 50%;
	border: 3px solid transparent;
	box-sizing: border-box;
}
.x3SdXd {
	width: 200%;
}
.J7uuUe {
	-webkit-transform: rotate(129deg);
	transform: rotate(129deg);
}
.sDPIC {
	left: -100%;
	-webkit-transform: rotate(-129deg);
	transform: rotate(-129deg);
}
.tS3P5 {
	left: -450%;
	width: 1000%;
}
.VQdeab .SPKFmc {
	border-color: #4487f6;
}
.IEqiAf .SPKFmc {
	border-color: #ff7769;
}
.smocse .SPKFmc {
	border-color: #824300;
}
.FlKbCe .SPKFmc {
	border-color: #219540;
}
.RoKmhb .J7uuUe {
	border-bottom-color: transparent;
	border-right-color: transparent;
}
.RoKmhb .sDPIC {
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.RoKmhb .tS3P5 {
	border-bottom-color: transparent;
}
.GgTJWe .nNMuOd .J7uuUe {
	-webkit-animation: qli-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
		both;
	animation: qli-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.GgTJWe .nNMuOd .sDPIC {
	-webkit-animation: qli-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
		both;
	animation: qli-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.BSnLb .nNMuOd .J7uuUe {
	-webkit-animation: qli-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
		both;
	animation: qli-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
	border-left-color: #202124;
	border-top-color: #202124;
}
.BSnLb .nNMuOd .sDPIC {
	-webkit-animation: qli-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
		both;
	animation: qli-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
	border-right-color: #202124;
	border-top-color: #202124;
}
.BSnLb .nNMuOd .tS3P5 {
	border-color: #202124;
	border-bottom-color: transparent;
}
@-webkit-keyframes qli-left-spin {
	0% {
		-webkit-transform: rotate(130deg);
		transform: rotate(130deg);
	}
	50% {
		-webkit-transform: rotate(-5deg);
		transform: rotate(-5deg);
	}
	100% {
		-webkit-transform: rotate(130deg);
		transform: rotate(130deg);
	}
}
@keyframes qli-left-spin {
	0% {
		-webkit-transform: rotate(130deg);
		transform: rotate(130deg);
	}
	50% {
		-webkit-transform: rotate(-5deg);
		transform: rotate(-5deg);
	}
	100% {
		-webkit-transform: rotate(130deg);
		transform: rotate(130deg);
	}
}
@-webkit-keyframes qli-right-spin {
	0% {
		-webkit-transform: rotate(-130deg);
		transform: rotate(-130deg);
	}
	50% {
		-webkit-transform: rotate(5deg);
		transform: rotate(5deg);
	}
	100% {
		-webkit-transform: rotate(-130deg);
		transform: rotate(-130deg);
	}
}
@keyframes qli-right-spin {
	0% {
		-webkit-transform: rotate(-130deg);
		transform: rotate(-130deg);
	}
	50% {
		-webkit-transform: rotate(5deg);
		transform: rotate(5deg);
	}
	100% {
		-webkit-transform: rotate(-130deg);
		transform: rotate(-130deg);
	}
}
sentinel {
}
```

google.tick('chunks','msqc');

What are the best practices for TypeScript decorators?

How do you apply a decorator in TypeScript?

What is the difference between annotations and decorators in TypeScript?
