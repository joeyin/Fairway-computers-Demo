"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{37561:function(e,t,n){n.d(t,{k:function(){return o}});var r=n(2265);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:o}=e,i=r.createContext(void 0);return i.displayName=o,[i.Provider,function e(){var o;let u=r.useContext(i);if(!u&&t){let t=Error(n);throw t.name="ContextError",null==(o=Error.captureStackTrace)||o.call(Error,t,e),t}return u},i]}},12094:function(e,t,n){n.d(t,{a:function(){return r},w:function(){return o}});var[r,o]=(0,n(37561).k)({name:"ProviderContext",strict:!1})},73165:function(e,t,n){n.d(t,{Av:function(){return v},gP:function(){return c}});var r=n(2265);let o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o),u=r.createContext(!1),a=!!("undefined"!=typeof window&&window.document&&window.document.createElement),l=new WeakMap,c="function"==typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)(v()),i=n?"react-aria":`react-aria${o.prefix}`;return e||`${i}-${t}`}:function(e){let t=(0,r.useContext)(i);t!==o||a||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=function(e=!1){let t=(0,r.useContext)(i),n=(0,r.useRef)(null);if(null===n.current&&!e){var o,u;let e=null===(u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===u?void 0:null===(o=u.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let n=l.get(e);null==n?l.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,l.delete(e))}n.current=++t.current}return n.current}(!!e),u=`react-aria${t.prefix}`;return e||`${u}-${n}`};function f(){return!1}function d(){return!0}function s(e){return()=>{}}function v(){return"function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(s,f,d):(0,r.useContext)(u)}},250:function(e,t,n){function r(e){if(function(){if(null==o){o=!1;try{document.createElement("div").focus({get preventScroll(){return o=!0,!0}})}catch(e){}}return o}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}n.d(t,{A:function(){return r}});let o=null},46671:function(e,t,n){n.d(t,{b0:function(){return c},eY:function(){return v},ib:function(){return s},nG:function(){return f},pG:function(){return a},tv:function(){return l}});var r=n(250),o=n(40541),i=n(2265);let u=(0,i.createContext)({isNative:!0,open:function(e,t){d(e,e=>f(e,t))},useHref:e=>e});function a(e){let{children:t,navigate:n,useHref:r}=e,o=(0,i.useMemo)(()=>({isNative:!1,open:(e,t,r,o)=>{d(e,e=>{c(e,t)?n(r,o):f(e,t)})},useHref:r||(e=>e)}),[n,r]);return i.createElement(u.Provider,{value:o},t)}function l(){return(0,i.useContext)(u)}function c(e,t){let n=e.getAttribute("target");return(!n||"_self"===n)&&e.origin===location.origin&&!e.hasAttribute("download")&&!t.metaKey&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}function f(e,t,n=!0){var i,u;let{metaKey:a,ctrlKey:l,altKey:c,shiftKey:d}=t;(0,o.vU)()&&(null===(u=window.event)||void 0===u?void 0:null===(i=u.type)||void 0===i?void 0:i.startsWith("key"))&&"_blank"===e.target&&((0,o.V5)()?a=!0:l=!0);let s=(0,o.Pf)()&&(0,o.V5)()&&!(0,o.zc)()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:a,ctrlKey:l,altKey:c,shiftKey:d}):new MouseEvent("click",{metaKey:a,ctrlKey:l,altKey:c,shiftKey:d,bubbles:!0,cancelable:!0});f.isOpening=n,(0,r.A)(e),e.dispatchEvent(s),f.isOpening=!1}function d(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let n=document.createElement("a");n.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(n.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(n.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(n.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(n.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(n.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(n),t(n),e.removeChild(n)}}function s(e){return{"data-href":e.href,"data-target":e.target,"data-rel":e.rel,"data-download":e.download,"data-ping":e.ping,"data-referrer-policy":e.referrerPolicy}}function v(e){let t=l();return{href:(null==e?void 0:e.href)?t.useHref(null==e?void 0:e.href):void 0,target:null==e?void 0:e.target,rel:null==e?void 0:e.rel,download:null==e?void 0:e.download,ping:null==e?void 0:e.ping,referrerPolicy:null==e?void 0:e.referrerPolicy}}f.isOpening=!1},40541:function(e,t,n){function r(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function o(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function i(){return o(/^Mac/i)}function u(){return o(/^iPad/i)||i()&&navigator.maxTouchPoints>1}function a(){return o(/^iPhone/i)||u()}function l(){return i()||a()}function c(){return r(/AppleWebKit/i)&&!r(/Chrome/i)}function f(){return r(/Android/i)}function d(){return r(/Firefox/i)}n.d(t,{Dt:function(){return f},Pf:function(){return c},V5:function(){return i},ad:function(){return l},gn:function(){return a},vU:function(){return d},zc:function(){return u}})},565:function(e,t,n){n.d(t,{c:function(){return r}});let r={skipAnimations:!1,useManualTiming:!1}}}]);