"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[652],{75945:function(e,t,n){n.d(t,{j:function(){return a}});var l=n(75300),r=(0,n(2068).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),i=n(2265),o=n(55971),s=n(57437),c=(0,o.Gp)((e,t)=>{let{Component:n,getDividerProps:o}=function(e){var t;let n,o;let{as:s,className:c,orientation:a,...u}=e,d=s||"hr";"hr"===d&&"vertical"===a&&(d="div");let{separatorProps:f}=(t={elementType:"string"==typeof d?d:"hr",orientation:a},o=(0,l.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(n="vertical"),"hr"!==t.elementType)?{separatorProps:{...o,role:"separator","aria-orientation":n}}:{separatorProps:o}),h=(0,i.useMemo)(()=>r({orientation:a,className:c}),[a,c]);return{Component:d,getDividerProps:(0,i.useCallback)((e={})=>({className:h,role:"separator","data-orientation":a,...f,...u,...e}),[h,a,f,u])}}({...e});return(0,s.jsx)(n,{ref:t,...o()})});c.displayName="NextUI.Divider";var a=c},79046:function(e,t,n){n.d(t,{Lj:function(){return l},y7:function(){return r}});var l={ease:[.36,.66,.4,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1],spring:[.155,1.105,.295,1.12],springOut:[.57,-.15,.62,.07],softSpring:[.16,1.11,.3,1.02]};l.easeOut,l.easeIn;var r={scaleSpring:{enter:{transform:"scale(1)",opacity:1,transition:{type:"spring",bounce:0,duration:.2}},exit:{transform:"scale(0.85)",opacity:0,transition:{type:"easeOut",duration:.15}}},scaleSpringOpacity:{initial:{opacity:0,transform:"scale(0.8)"},enter:{opacity:1,transform:"scale(1)",transition:{type:"spring",bounce:0,duration:.3}},exit:{opacity:0,transform:"scale(0.96)",transition:{type:"easeOut",bounce:0,duration:.15}}},scale:{enter:{scale:1},exit:{scale:.95}},scaleFadeIn:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.25,ease:l.easeIn}},exit:{transform:"scale(0.95)",opacity:0,transition:{duration:.2,ease:l.easeOut}}},scaleInOut:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.4,ease:l.ease}},exit:{transform:"scale(1.03)",opacity:0,transition:{duration:.3,ease:l.ease}}},fade:{enter:{opacity:1,transition:{duration:.4,ease:l.ease}},exit:{opacity:0,transition:{duration:.3,ease:l.ease}}},collapse:{enter:{opacity:1,height:"auto",transition:{height:{type:"spring",bounce:0,duration:.3},opacity:{easings:"ease",duration:.4}}},exit:{opacity:0,height:0,transition:{easings:"ease",duration:.3}}}}},27546:function(e,t,n){n.d(t,{MT:function(){return a},QL:function(){return S},cW:function(){return v}});var l=n(87603),r=n(57854),i=n(79248),o=n(2265);let s=o.createContext(null),c=null;function a(e){let t,n,{children:l,contain:a,restoreFocus:u,autoFocus:d}=e,f=(0,o.useRef)(null),v=(0,o.useRef)(null),w=(0,o.useRef)([]),{parentNode:R}=(0,o.useContext)(s)||{},x=(0,o.useMemo)(()=>new E({scopeRef:w}),[w]);(0,i.b)(()=>{let e=R||N.root;if(N.getTreeNode(e.scopeRef)&&c&&!m(c,e.scopeRef)){let t=N.getTreeNode(c);t&&(e=t)}e.addChild(x),N.addNode(x)},[x,R]),(0,i.b)(()=>{let e=N.getTreeNode(w);e&&(e.contain=!!a)},[a]),(0,i.b)(()=>{var e;let t=null===(e=f.current)||void 0===e?void 0:e.nextSibling,n=[];for(;t&&t!==v.current;)n.push(t),t=t.nextSibling;w.current=n},[l]),(0,i.b)(()=>{if(u||a)return;let e=w.current,t=(0,r.r)(e?e[0]:void 0),n=e=>{let t=e.target;p(t,w.current)?c=w:g(t)||(c=null)};return t.addEventListener("focusin",n,!1),null==e||e.forEach(e=>e.addEventListener("focusin",n,!1)),()=>{t.removeEventListener("focusin",n,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",n,!1))}},[w,u,a]),t=(0,o.useRef)(),n=(0,o.useRef)(),(0,i.b)(()=>{let e=w.current;if(!a){n.current&&(cancelAnimationFrame(n.current),n.current=void 0);return}let l=(0,r.r)(e?e[0]:void 0),i=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!y(w)||e.isComposing)return;let t=l.activeElement,n=w.current;if(!n||!p(t,n))return;let r=S(h(n),{tabbable:!0},n);if(!t)return;r.currentNode=t;let i=e.shiftKey?r.previousNode():r.nextNode();i||(r.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,i=e.shiftKey?r.previousNode():r.nextNode()),e.preventDefault(),i&&K(i,!0)},o=e=>{(!c||m(c,w))&&p(e.target,w.current)?(c=w,t.current=e.target):y(w)&&!g(e.target,w)?t.current?t.current.focus():c&&c.current&&b(c.current):y(w)&&(t.current=e.target)},s=e=>{n.current&&cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>{if(l.activeElement&&y(w)&&!g(l.activeElement,w)){if(c=w,l.body.contains(e.target)){var n;t.current=e.target,null===(n=t.current)||void 0===n||n.focus()}else c.current&&b(c.current)}})};return l.addEventListener("keydown",i,!1),l.addEventListener("focusin",o,!1),null==e||e.forEach(e=>e.addEventListener("focusin",o,!1)),null==e||e.forEach(e=>e.addEventListener("focusout",s,!1)),()=>{l.removeEventListener("keydown",i,!1),l.removeEventListener("focusin",o,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",o,!1)),null==e||e.forEach(e=>e.removeEventListener("focusout",s,!1))}},[w,a]),(0,i.b)(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[n]),function(e,t,n){let l=(0,o.useRef)("undefined"!=typeof document?(0,r.r)(e.current?e.current[0]:void 0).activeElement:null);(0,i.b)(()=>{let l=e.current,i=(0,r.r)(l?l[0]:void 0);if(!t||n)return;let o=()=>{(!c||m(c,e))&&p(i.activeElement,e.current)&&(c=e)};return i.addEventListener("focusin",o,!1),null==l||l.forEach(e=>e.addEventListener("focusin",o,!1)),()=>{i.removeEventListener("focusin",o,!1),null==l||l.forEach(e=>e.removeEventListener("focusin",o,!1))}},[e,n]),(0,i.b)(()=>{let l=(0,r.r)(e.current?e.current[0]:void 0);if(!t)return;let i=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!y(e)||t.isComposing)return;let n=l.activeElement;if(!p(n,e.current))return;let r=N.getTreeNode(e);if(!r)return;let i=r.nodeToRestore,o=S(l.body,{tabbable:!0});o.currentNode=n;let s=t.shiftKey?o.previousNode():o.nextNode();if(i&&l.body.contains(i)&&i!==l.body||(i=void 0,r.nodeToRestore=void 0),(!s||!p(s,e.current))&&i){o.currentNode=i;do s=t.shiftKey?o.previousNode():o.nextNode();while(p(s,e.current));(t.preventDefault(),t.stopPropagation(),s)?K(s,!0):g(i)?K(i,!0):n.blur()}};return n||l.addEventListener("keydown",i,!0),()=>{n||l.removeEventListener("keydown",i,!0)}},[e,t,n]),(0,i.b)(()=>{var n;let i=(0,r.r)(e.current?e.current[0]:void 0);if(!t)return;let o=N.getTreeNode(e);if(o)return o.nodeToRestore=null!==(n=l.current)&&void 0!==n?n:void 0,()=>{let n=N.getTreeNode(e);if(!n)return;let l=n.nodeToRestore;if(t&&l&&(p(i.activeElement,e.current)||i.activeElement===i.body&&function(e){let t=N.getTreeNode(c);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let t=N.clone();requestAnimationFrame(()=>{if(i.activeElement===i.body){let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&n.nodeToRestore.isConnected){K(n.nodeToRestore);return}n=n.parent}for(n=t.getTreeNode(e);n;){if(n.scopeRef&&n.scopeRef.current&&N.getTreeNode(n.scopeRef)){b(n.scopeRef.current,!0);return}n=n.parent}}})}}},[e,t])}(w,u,a),function(e,t){let n=o.useRef(t);(0,o.useEffect)(()=>{n.current&&(c=e,!p((0,r.r)(e.current?e.current[0]:void 0).activeElement,c.current)&&e.current&&b(e.current)),n.current=!1},[e])}(w,d),(0,o.useEffect)(()=>{let e=(0,r.r)(w.current?w.current[0]:void 0).activeElement,t=null;if(p(e,w.current)){for(let n of N.traverse())n.scopeRef&&p(e,n.scopeRef.current)&&(t=n);t===N.getTreeNode(w)&&(c=t.scopeRef)}},[w]),(0,i.b)(()=>()=>{var e,t,n;let l=null!==(n=null===(t=N.getTreeNode(w))||void 0===t?void 0:null===(e=t.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null;(w===c||m(w,c))&&(!l||N.getTreeNode(l))&&(c=l),N.removeTreeNode(w)},[w]);let k=(0,o.useMemo)(()=>({focusNext(e={}){let t=w.current,{from:n,tabbable:l,wrap:i,accept:o}=e,s=n||(0,r.r)(t[0]).activeElement,c=t[0].previousElementSibling,a=S(h(t),{tabbable:l,accept:o},t);a.currentNode=p(s,t)?s:c;let u=a.nextNode();return!u&&i&&(a.currentNode=c,u=a.nextNode()),u&&K(u,!0),u},focusPrevious(e={}){let t=w.current,{from:n,tabbable:l,wrap:i,accept:o}=e,s=n||(0,r.r)(t[0]).activeElement,c=t[t.length-1].nextElementSibling,a=S(h(t),{tabbable:l,accept:o},t);a.currentNode=p(s,t)?s:c;let u=a.previousNode();return!u&&i&&(a.currentNode=c,u=a.previousNode()),u&&K(u,!0),u},focusFirst(e={}){let t=w.current,{tabbable:n,accept:l}=e,r=S(h(t),{tabbable:n,accept:l},t);r.currentNode=t[0].previousElementSibling;let i=r.nextNode();return i&&K(i,!0),i},focusLast(e={}){let t=w.current,{tabbable:n,accept:l}=e,r=S(h(t),{tabbable:n,accept:l},t);r.currentNode=t[t.length-1].nextElementSibling;let i=r.previousNode();return i&&K(i,!0),i}}),[]),I=(0,o.useMemo)(()=>({focusManager:k,parentNode:x}),[x,k]);return o.createElement(s.Provider,{value:I},o.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:f}),l,o.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:v}))}let u=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],d=u.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";u.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let f=u.join(':not([hidden]):not([tabindex="-1"]),');function h(e){return e[0].parentElement}function y(e){let t=N.getTreeNode(c);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function p(e,t){return!!e&&!!t&&t.some(t=>t.contains(e))}function g(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of N.traverse(N.getTreeNode(t)))if(n&&p(e,n.current))return!0;return!1}function v(e){return g(e,c)}function m(e,t){var n;let l=null===(n=N.getTreeNode(t))||void 0===n?void 0:n.parent;for(;l;){if(l.scopeRef===e)return!0;l=l.parent}return!1}function K(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{(0,l.e)(e)}catch(e){}}function b(e,t=!0){let n=e[0].previousElementSibling,l=h(e),r=S(l,{tabbable:t},e);r.currentNode=n;let i=r.nextNode();t&&!i&&((r=S(l=h(e),{tabbable:!1},e)).currentNode=n,i=r.nextNode()),K(i)}function S(e,t,n){let l=(null==t?void 0:t.tabbable)?f:d,i=(0,r.r)(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var i;return(null==t?void 0:null===(i=t.from)||void 0===i?void 0:i.contains(e))?NodeFilter.FILTER_REJECT:e.matches(l)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){let t=(0,r.k)(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:l}=e.style,i="none"!==n&&"hidden"!==l&&"collapse"!==l;if(i){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:l}=t(e);i="none"!==n&&"hidden"!==l&&"collapse"!==l}return i}(t)&&!t.hasAttribute("hidden")&&!t.hasAttribute("data-react-aria-prevent-focus")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||p(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(i.currentNode=t.from),i}class w{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let l=this.fastMap.get(null!=t?t:null);if(!l)return;let r=new E({scopeRef:e});l.addChild(r),r.parent=l,this.fastMap.set(e,r),n&&(r.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&p(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let l=t.children;n&&(n.removeChild(t),l.size>0&&l.forEach(e=>n&&n.addChild(e))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e,t;let n=new w;for(let l of this.traverse())n.addTreeNode(l.scopeRef,null!==(t=null===(e=l.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==t?t:null,l.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new E({scopeRef:null}),this.fastMap.set(null,this.root)}}class E{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let N=new w},34909:function(e,t,n){n.d(t,{b:function(){return p},j:function(){return g}});let l=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),r=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function i(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return l.has(t.script)}let t=e.split("-")[0];return r.has(t)}var o=n(2265),s=n(73165);let c=Symbol.for("react-aria.i18n.locale");function a(){let e="undefined"!=typeof window&&window[c]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:i(e)?"rtl":"ltr"}}let u=a(),d=new Set;function f(){for(let e of(u=a(),d))e(u)}function h(){let e=(0,s.Av)(),[t,n]=(0,o.useState)(u);return((0,o.useEffect)(()=>(0===d.size&&window.addEventListener("languagechange",f),d.add(n),()=>{d.delete(n),0===d.size&&window.removeEventListener("languagechange",f)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}let y=o.createContext(null);function p(e){let{locale:t,children:n}=e,l=h(),r=o.useMemo(()=>t?{locale:t,direction:i(t)?"rtl":"ltr"}:l,[l,t]);return o.createElement(y.Provider,{value:r},n)}function g(){let e=h();return(0,o.useContext)(y)||e}},15795:function(e,t,n){n.d(t,{X:function(){return i}});var l=n(34909);let r=new Map;function i(e){let{locale:t}=(0,l.j)(),n=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():"");if(r.has(n))return r.get(n);let i=new Intl.Collator(t,e);return r.set(n,i),i}},76029:function(e,t,n){n.d(t,{d:function(){return r}});var l=n(90731);class r{isDisabled(e){var t;return"all"===this.disabledBehavior&&((null===(t=e.props)||void 0===t?void 0:t.isDisabled)||this.disabledKeys.has(e.key))}getNextKey(e){for(e=this.collection.getKeyAfter(e);null!=e;){let t=this.collection.getItem(e);if("item"===t.type&&!this.isDisabled(t))return e;e=this.collection.getKeyAfter(e)}return null}getPreviousKey(e){for(e=this.collection.getKeyBefore(e);null!=e;){let t=this.collection.getItem(e);if("item"===t.type&&!this.isDisabled(t))return e;e=this.collection.getKeyBefore(e)}return null}findKey(e,t,n){let l=this.getItem(e);if(!l)return null;let r=l.getBoundingClientRect();do e=t(e),l=this.getItem(e);while(l&&n(r,l.getBoundingClientRect()));return e}isSameRow(e,t){return e.top===t.top||e.left!==t.left}isSameColumn(e,t){return e.left===t.left||e.top!==t.top}getKeyBelow(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getNextKey(e),this.isSameRow):this.getNextKey(e)}getKeyAbove(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getPreviousKey(e),this.isSameRow):this.getPreviousKey(e)}getNextColumn(e,t){return t?this.getPreviousKey(e):this.getNextKey(e)}getKeyRightOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"rtl"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):null}getKeyLeftOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"ltr"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):null}getFirstKey(){let e=this.collection.getFirstKey();for(;null!=e;){let t=this.collection.getItem(e);if((null==t?void 0:t.type)==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyAfter(e)}return null}getLastKey(){let e=this.collection.getLastKey();for(;null!=e;){let t=this.collection.getItem(e);if("item"===t.type&&!this.isDisabled(t))return e;e=this.collection.getKeyBefore(e)}return null}getItem(e){return null!==e?this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`):null}getKeyPageAbove(e){let t=this.ref.current,n=this.getItem(e);if(!n)return null;if(!(0,l.a)(t))return this.getFirstKey();let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();if("horizontal"===this.orientation){let l=r.x-t.scrollLeft,o=Math.max(0,i.x-l+i.width-r.width);for(;n&&i.x-l>o;)i=null==(n=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:n.getBoundingClientRect()}else{let l=r.y-t.scrollTop,o=Math.max(0,i.y-l+i.height-r.height);for(;n&&i.y-l>o;)i=null==(n=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:n.getBoundingClientRect()}return null!=e?e:this.getFirstKey()}getKeyPageBelow(e){let t=this.ref.current,n=this.getItem(e);if(!n)return null;if(!(0,l.a)(t))return this.getLastKey();let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();if("horizontal"===this.orientation){let l=r.x-t.scrollLeft,o=Math.min(t.scrollWidth,i.x-l-i.width+r.width);for(;n&&i.x-l<o;)i=null==(n=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:n.getBoundingClientRect()}else{let l=r.y-t.scrollTop,o=Math.min(t.scrollHeight,i.y-l-i.height+r.height);for(;n&&i.y-l<o;)i=null==(n=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:n.getBoundingClientRect()}return null!=e?e:this.getLastKey()}getKeyForSearch(e,t){if(!this.collator)return null;let n=this.collection,l=t||this.getFirstKey();for(;null!=l;){let t=n.getItem(l),r=t.textValue.slice(0,e.length);if(t.textValue&&0===this.collator.compare(r,e))return l;l=this.getKeyBelow(l)}return null}constructor(...e){if(1===e.length){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.disabledBehavior=t.disabledBehavior||"all",this.orientation=t.orientation,this.direction=t.direction,this.layout=t.layout||"stack"}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout="stack",this.orientation="vertical",this.disabledBehavior="all";"stack"===this.layout&&"vertical"===this.orientation&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}}},45371:function(e,t,n){n.d(t,{g:function(){return K}});var l=n(64913),r=n(80112),i=n(54887),o=n(2265),s=n(27546),c=n(87603),a=n(46671),u=n(250),d=n(7353),f=n(90731);function h(e,t){let n=y(e,t,"left"),l=y(e,t,"top"),r=t.offsetWidth,i=t.offsetHeight,o=e.scrollLeft,s=e.scrollTop,{borderTopWidth:c,borderLeftWidth:a}=getComputedStyle(e),u=e.scrollLeft+parseInt(a,10),d=e.scrollTop+parseInt(c,10),f=u+e.clientWidth,h=d+e.clientHeight;n<=o?o=n-parseInt(a,10):n+r>f&&(o+=n+r-f),l<=d?s=l-parseInt(c,10):l+i>h&&(s+=l+i-h),e.scrollLeft=o,e.scrollTop=s}function y(e,t,n){let l="left"===n?"offsetLeft":"offsetTop",r=0;for(;t.offsetParent&&(r+=t[l],t.offsetParent!==e);){if(t.offsetParent.contains(e)){r-=e[l];break}t=t.offsetParent}return r}function p(e,t){if(document.contains(e)){let o=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(o).overflow)for(let t of function(e,t){let n=[];for(;e&&e!==document.documentElement;)(0,f.a)(e,void 0)&&n.push(e),e=e.parentElement;return n}(e))h(t,e);else{var n,l,r,i;let{left:o,top:s}=e.getBoundingClientRect();null==e||null===(n=e.scrollIntoView)||void 0===n||n.call(e,{block:"nearest"});let{left:c,top:a}=e.getBoundingClientRect();(Math.abs(o-c)>1||Math.abs(s-a)>1)&&(null==t||null===(r=t.containingElement)||void 0===r||null===(l=r.scrollIntoView)||void 0===l||l.call(r,{block:"center",inline:"center"}),null===(i=e.scrollIntoView)||void 0===i||i.call(e,{block:"nearest"}))}}}var g=n(22173),v=n(95729),m=n(34909);function K(e){var t,n,f;let y,K,b,{selectionManager:S,keyboardDelegate:w,ref:E,autoFocus:N=!1,shouldFocusWrap:R=!1,disallowEmptySelection:x=!1,disallowSelectAll:k=!1,selectOnFocus:I="replace"===S.selectionBehavior,disallowTypeAhead:C=!1,shouldUseVirtualFocus:T,allowsTabNavigation:F=!1,isVirtualized:L,scrollRef:M=E,linkBehavior:A="action"}=e,{direction:B}=(0,m.j)(),D=(0,a.tv)(),P=(0,o.useRef)({top:0,left:0});t="scroll",n=L?null:()=>{P.current={top:M.current.scrollTop,left:M.current.scrollLeft}},y=(0,d.i)(n),K=null==n,(0,o.useEffect)(()=>{if(K||!M.current)return;let e=M.current;return e.addEventListener(t,y,void 0),()=>{e.removeEventListener(t,y,f)}},[M,t,f,K,y]);let O=(0,o.useRef)(N);(0,o.useEffect)(()=>{if(O.current){let e=null;"first"===N&&(e=w.getFirstKey()),"last"===N&&(e=w.getLastKey());let t=S.selectedKeys;if(t.size){for(let n of t)if(S.canSelectItem(n)){e=n;break}}S.setFocused(!0),S.setFocusedKey(e),null!=e||T||(0,c.e)(E.current)}},[]);let z=(0,o.useRef)(S.focusedKey);(0,o.useEffect)(()=>{let e=(0,v.Jz)();if(S.isFocused&&null!=S.focusedKey&&(null==M?void 0:M.current)){let t=M.current.querySelector(`[data-key="${CSS.escape(S.focusedKey.toString())}"]`);t&&("keyboard"===e||O.current)&&(L||h(M.current,t),"virtual"!==e&&p(t,{containingElement:E.current}))}S.isFocused&&null==S.focusedKey&&null!=z.current&&(0,c.e)(E.current),z.current=S.focusedKey,O.current=!1},[L,M,S.focusedKey,S.isFocused,E]);let $={onKeyDown:e=>{var t,n,r,o,c,a,d,f;if(e.altKey&&"Tab"===e.key&&e.preventDefault(),!E.current.contains(e.target))return;let h=(t,n)=>{if(null!=t){if(S.isLink(t)&&"selection"===A&&I&&!(0,l.F)(e)){(0,i.flushSync)(()=>{S.setFocusedKey(t,n)});let l=M.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`),r=S.getItemProps(t);D.open(l,e,r.href,r.routerOptions);return}S.setFocusedKey(t,n),S.isLink(t)&&"override"===A||(e.shiftKey&&"multiple"===S.selectionMode?S.extendSelection(t):I&&!(0,l.F)(e)&&S.replaceSelection(t))}};switch(e.key){case"ArrowDown":if(w.getKeyBelow){e.preventDefault();let l=null!=S.focusedKey?w.getKeyBelow(S.focusedKey):null===(t=w.getFirstKey)||void 0===t?void 0:t.call(w);null==l&&R&&(l=null===(n=w.getFirstKey)||void 0===n?void 0:n.call(w,S.focusedKey)),h(l)}break;case"ArrowUp":if(w.getKeyAbove){e.preventDefault();let t=null!=S.focusedKey?w.getKeyAbove(S.focusedKey):null===(r=w.getLastKey)||void 0===r?void 0:r.call(w);null==t&&R&&(t=null===(o=w.getLastKey)||void 0===o?void 0:o.call(w,S.focusedKey)),h(t)}break;case"ArrowLeft":if(w.getKeyLeftOf){e.preventDefault();let t=w.getKeyLeftOf(S.focusedKey);null==t&&R&&(t="rtl"===B?null===(c=w.getFirstKey)||void 0===c?void 0:c.call(w,S.focusedKey):null===(a=w.getLastKey)||void 0===a?void 0:a.call(w,S.focusedKey)),h(t,"rtl"===B?"first":"last")}break;case"ArrowRight":if(w.getKeyRightOf){e.preventDefault();let t=w.getKeyRightOf(S.focusedKey);null==t&&R&&(t="rtl"===B?null===(d=w.getLastKey)||void 0===d?void 0:d.call(w,S.focusedKey):null===(f=w.getFirstKey)||void 0===f?void 0:f.call(w,S.focusedKey)),h(t,"rtl"===B?"last":"first")}break;case"Home":if(w.getFirstKey){e.preventDefault();let t=w.getFirstKey(S.focusedKey,(0,l.y)(e));S.setFocusedKey(t),(0,l.y)(e)&&e.shiftKey&&"multiple"===S.selectionMode?S.extendSelection(t):I&&S.replaceSelection(t)}break;case"End":if(w.getLastKey){e.preventDefault();let t=w.getLastKey(S.focusedKey,(0,l.y)(e));S.setFocusedKey(t),(0,l.y)(e)&&e.shiftKey&&"multiple"===S.selectionMode?S.extendSelection(t):I&&S.replaceSelection(t)}break;case"PageDown":w.getKeyPageBelow&&(e.preventDefault(),h(w.getKeyPageBelow(S.focusedKey)));break;case"PageUp":w.getKeyPageAbove&&(e.preventDefault(),h(w.getKeyPageAbove(S.focusedKey)));break;case"a":(0,l.y)(e)&&"multiple"===S.selectionMode&&!0!==k&&(e.preventDefault(),S.selectAll());break;case"Escape":x||0===S.selectedKeys.size||(e.stopPropagation(),e.preventDefault(),S.clearSelection());break;case"Tab":if(!F){if(e.shiftKey)E.current.focus();else{let e,t,n=(0,s.QL)(E.current,{tabbable:!0});do(t=n.lastChild())&&(e=t);while(t);e&&!e.contains(document.activeElement)&&(0,u.A)(e)}}}},onFocus:e=>{if(S.isFocused){e.currentTarget.contains(e.target)||S.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(S.setFocused(!0),null==S.focusedKey){var t,n;let l=e=>{null!=e&&(S.setFocusedKey(e),I&&S.replaceSelection(e))},r=e.relatedTarget;r&&e.currentTarget.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING?l(null!==(t=S.lastSelectedKey)&&void 0!==t?t:w.getLastKey()):l(null!==(n=S.firstSelectedKey)&&void 0!==n?n:w.getFirstKey())}else L||(M.current.scrollTop=P.current.top,M.current.scrollLeft=P.current.left);if(!L&&null!=S.focusedKey){let e=M.current.querySelector(`[data-key="${CSS.escape(S.focusedKey.toString())}"]`);e&&(e.contains(document.activeElement)||(0,u.A)(e),"keyboard"===(0,v.Jz)()&&p(e,{containingElement:E.current}))}}},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||S.setFocused(!1)},onMouseDown(e){M.current===e.target&&e.preventDefault()}},{typeSelectProps:V}=(0,r.i)({keyboardDelegate:w,selectionManager:S});return C||($=(0,g.d)(V,$)),T||(b=null==S.focusedKey?0:-1),{collectionProps:{...$,tabIndex:b}}}},8993:function(e,t,n){n.d(t,{_:function(){return s}});var l=n(45371),r=n(76029),i=n(15795),o=n(2265);function s(e){let{selectionManager:t,collection:n,disabledKeys:s,ref:c,keyboardDelegate:a}=e,u=(0,i.X)({usage:"search",sensitivity:"base"}),d=t.disabledBehavior,f=(0,o.useMemo)(()=>a||new r.d({collection:n,disabledKeys:s,disabledBehavior:d,ref:c,collator:u}),[a,n,s,c,u,d]),{collectionProps:h}=(0,l.g)({...e,ref:c,selectionManager:t,keyboardDelegate:f});return{listProps:h}}},80112:function(e,t,n){n.d(t,{i:function(){return r}});var l=n(2265);function r(e){let{keyboardDelegate:t,selectionManager:n,onTypeSelect:r}=e,i=(0,l.useRef)({search:"",timeout:null}).current;return{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{var l;let o=1!==(l=e.key).length&&/^[A-Z]/i.test(l)?"":l;if(!o||e.ctrlKey||e.metaKey||!e.currentTarget.contains(e.target))return;" "!==o||!(i.search.trim().length>0)||(e.preventDefault(),"continuePropagation"in e||e.stopPropagation()),i.search+=o;let s=t.getKeyForSearch(i.search,n.focusedKey);null==s&&(s=t.getKeyForSearch(i.search)),null!=s&&(n.setFocusedKey(s),r&&r(s)),clearTimeout(i.timeout),i.timeout=setTimeout(()=>{i.search=""},1e3)}:null}}}},64913:function(e,t,n){n.d(t,{F:function(){return r},y:function(){return i}});var l=n(40541);function r(e){return(0,l.ad)()?e.altKey:e.ctrlKey}function i(e){return(0,l.V5)()?e.metaKey:e.ctrlKey}},90731:function(e,t,n){n.d(t,{a:function(){return l}});function l(e,t){let n=window.getComputedStyle(e),l=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return l&&t&&(l=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),l}},82563:function(e,t,n){n.d(t,{c:function(){return i}});var l=n(2265);function r(e){return null}r.getCollectionNode=function*(e,t){let{childItems:n,title:r,children:i}=e,o=e.title||e.children,s=e.textValue||("string"==typeof o?o:"")||e["aria-label"]||"";s||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:o,textValue:s,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&l.Children.count(e.children)>0),*childNodes(){if(n)for(let e of n)yield{type:"item",value:e};else if(r){let e=[];l.Children.forEach(i,t=>{e.push({type:"item",element:t})}),yield*e}}}};let i=r},34921:function(e,t,n){n.d(t,{K:function(){return s}});var l=n(2265);class r{build(e,t){return this.context=t,i(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:n}=e;if("function"==typeof t){if(!n)throw Error("props.children was a function but props.items is missing");for(let n of e.items)yield*this.getFullNode({value:n},{renderer:t})}else{let e=[];l.Children.forEach(t,t=>{e.push(t)});let n=0;for(let t of e)for(let e of this.getFullNode({element:t,index:n},{}))n++,yield e}}getKey(e,t,n,l){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${l}${t.key}`;let r=t.value;if(null!=r){var i;let e=null!==(i=r.key)&&void 0!==i?i:r.id;if(null==e)throw Error("No key found for item");return e}return l?`${l}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,n,r){let s=e.element;if(!s&&e.value&&t&&t.renderer){let n=this.cache.get(e.value);if(n&&(!n.shouldInvalidate||!n.shouldInvalidate(this.context))){n.index=e.index,n.parentKey=r?r.key:null,yield n;return}s=t.renderer(e.value)}if(l.isValidElement(s)){let l=s.type;if("function"!=typeof l&&"function"!=typeof l.getCollectionNode){let e="function"==typeof s.type?s.type.name:s.type;throw Error(`Unknown element <${e}> in collection.`)}let i=l.getCollectionNode(s.props,this.context),c=e.index,a=i.next();for(;!a.done&&a.value;){let l=a.value;e.index=c;let u=l.key;u||(u=l.element?null:this.getKey(s,e,t,n));let d=[...this.getFullNode({...l,key:u,index:c,wrapper:function(e,t){return e&&t?n=>e(t(n)):e||t||void 0}(e.wrapper,l.wrapper)},this.getChildState(t,l),n?`${n}${s.key}`:s.key,r)];for(let t of d){if(t.value=l.value||e.value,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${o(t.type)}> in <${o(r.type)}>. Only <${o(e.type)}> is supported.`);c++,yield t}a=i.next(d)}return}if(null==e.key)return;let c=this,a={type:e.type,props:e.props,key:e.key,parentKey:r?r.key:null,value:e.value,level:r?r.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:i(function*(){if(!e.hasChildNodes)return;let n=0;for(let l of e.childNodes())for(let e of(null!=l.key&&(l.key=`${a.key}${l.key}`),l.index=n,c.getFullNode(l,c.getChildState(t,l),a.key,a)))n++,yield e})};yield a}constructor(){this.cache=new WeakMap}}function i(e){let t=[],n=null;return{*[Symbol.iterator](){for(let e of t)yield e;for(let l of(n||(n=e()),n))t.push(l),yield l}}}function o(e){return e[0].toUpperCase()+e.slice(1)}function s(e,t,n){let i=(0,l.useMemo)(()=>new r,[]),{children:o,items:s,collection:c}=e;return(0,l.useMemo)(()=>c||t(i.build({children:o,items:s},n)),[i,o,s,c,n,t])}},91980:function(e,t,n){n.d(t,{Y:function(){return l}});class l extends Set{constructor(e,t,n){super(e),e instanceof l?(this.anchorKey=t||e.anchorKey,this.currentKey=n||e.currentKey):(this.anchorKey=t,this.currentKey=n)}}},12187:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(91980);function r(e,t,n){if(t.parentKey===n.parentKey)return t.index-n.index;let l=[...i(e,t),t],r=[...i(e,n),n],o=l.slice(0,r.length).findIndex((e,t)=>e!==r[t]);return -1!==o?(t=l[o],n=r[o],t.index-n.index):l.findIndex(e=>e===n)>=0?1:(r.findIndex(e=>e===t),-1)}function i(e,t){let n=[];for(;(null==t?void 0:t.parentKey)!=null;)n.unshift(t=e.getItem(t.parentKey));return n}class o{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(null==e||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return"all"===this.state.selectedKeys?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return"none"!==this.state.selectionMode&&(e=this.getKey(e),"all"===this.state.selectedKeys?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return"all"!==this.state.selectedKeys&&0===this.state.selectedKeys.size}get isSelectAll(){if(this.isEmpty)return!1;if("all"===this.state.selectedKeys)return!0;if(null!=this._isSelectAll)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&0>r(this.collection,n,e))&&(e=n)}return null==e?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&r(this.collection,n,e)>0)&&(e=n)}return null==e?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){let t;if("none"!==this.selectionMode){if("single"===this.selectionMode){this.replaceSelection(e);return}if(e=this.getKey(e),"all"===this.state.selectedKeys)t=new l.Y([e],e,e);else{let n=this.state.selectedKeys,r=n.anchorKey||e;for(let i of(t=new l.Y(n,r,e),this.getKeyRange(r,n.currentKey||e)))t.delete(i);for(let n of this.getKeyRange(e,r))this.canSelectItem(n)&&t.add(n)}this.state.setSelectedKeys(t)}}getKeyRange(e,t){let n=this.collection.getItem(e),l=this.collection.getItem(t);return n&&l?0>=r(this.collection,n,l)?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let n=[],l=e;for(;l;){let e=this.collection.getItem(l);if((e&&"item"===e.type||"cell"===e.type&&this.allowsCellSelection)&&n.push(l),l===t)return n;l=this.collection.getKeyAfter(l)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||"cell"===t.type&&this.allowsCellSelection)return e;for(;"item"!==t.type&&null!=t.parentKey;)t=this.collection.getItem(t.parentKey);return t&&"item"===t.type?t.key:null}toggleSelection(e){if("none"===this.selectionMode)return;if("single"===this.selectionMode&&!this.isSelected(e)){this.replaceSelection(e);return}if(null==(e=this.getKey(e)))return;let t=new l.Y("all"===this.state.selectedKeys?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),this.disallowEmptySelection&&0===t.size||this.state.setSelectedKeys(t)}replaceSelection(e){if("none"===this.selectionMode||null==(e=this.getKey(e)))return;let t=this.canSelectItem(e)?new l.Y([e],e,e):new l.Y;this.state.setSelectedKeys(t)}setSelectedKeys(e){if("none"===this.selectionMode)return;let t=new l.Y;for(let n of e)if(null!=(n=this.getKey(n))&&(t.add(n),"single"===this.selectionMode))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=n=>{for(;null!=n;){if(this.canSelectItem(n)){let r=this.collection.getItem(n);if("item"===r.type&&e.push(n),r.hasChildNodes&&(this.allowsCellSelection||"item"!==r.type)){var l;t(function(e,t){let n=0;for(let t of e){if(0===n)return t;n++}}("function"==typeof(l=this.collection).getChildren?l.getChildren(r.key):r.childNodes,0).key)}}n=this.collection.getKeyAfter(n)}};return t(this.collection.getFirstKey()),e}selectAll(){this.isSelectAll||"multiple"!==this.selectionMode||this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&("all"===this.state.selectedKeys||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new l.Y)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode&&("single"===this.selectionMode?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior||t&&("touch"===t.pointerType||"virtual"===t.pointerType)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){var t;if("none"===this.state.selectionMode||this.state.disabledKeys.has(e))return!1;let n=this.collection.getItem(e);return!!n&&(null==n||null===(t=n.props)||void 0===t||!t.isDisabled)&&("cell"!==n.type||!!this.allowsCellSelection)}isDisabled(e){var t,n;return"all"===this.state.disabledBehavior&&(this.state.disabledKeys.has(e)||!!(null===(n=this.collection.getItem(e))||void 0===n?void 0:null===(t=n.props)||void 0===t?void 0:t.isDisabled))}isLink(e){var t,n;return!!(null===(n=this.collection.getItem(e))||void 0===n?void 0:null===(t=n.props)||void 0===t?void 0:t.href)}getItemProps(e){var t;return null===(t=this.collection.getItem(e))||void 0===t?void 0:t.props}constructor(e,t,n){var l;this.collection=e,this.state=t,this.allowsCellSelection=null!==(l=null==n?void 0:n.allowsCellSelection)&&void 0!==l&&l,this._isSelectAll=null}}},18926:function(e,t,n){n.d(t,{q:function(){return i}});var l=n(91980),r=n(2265);function i(e){let{selectionMode:t="none",disallowEmptySelection:n,allowDuplicateSelectionEvents:i,selectionBehavior:s="toggle",disabledBehavior:c="all"}=e,a=(0,r.useRef)(!1),[,u]=(0,r.useState)(!1),d=(0,r.useRef)(null),f=(0,r.useRef)(null),[,h]=(0,r.useState)(null),[y,p]=function(e,t,n){let[l,i]=(0,r.useState)(e||t),o=(0,r.useRef)(void 0!==e),s=void 0!==e;(0,r.useEffect)(()=>{let e=o.current;e!==s&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}.`),o.current=s},[s]);let c=s?e:l,a=(0,r.useCallback)((e,...t)=>{let l=(e,...t)=>{n&&!Object.is(c,e)&&n(e,...t),s||(c=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((n,...r)=>{let i=e(s?c:n,...r);return(l(i,...t),s)?n:i})):(s||i(e),l(e,...t))},[s,c,n]);return[c,a]}((0,r.useMemo)(()=>o(e.selectedKeys),[e.selectedKeys]),(0,r.useMemo)(()=>o(e.defaultSelectedKeys,new l.Y),[e.defaultSelectedKeys]),e.onSelectionChange),g=(0,r.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[v,m]=(0,r.useState)(s);"replace"===s&&"toggle"===v&&"object"==typeof y&&0===y.size&&m("replace");let K=(0,r.useRef)(s);return(0,r.useEffect)(()=>{s!==K.current&&(m(s),K.current=s)},[s]),{selectionMode:t,disallowEmptySelection:n,selectionBehavior:v,setSelectionBehavior:m,get isFocused(){return a.current},setFocused(e){a.current=e,u(e)},get focusedKey(){return d.current},get childFocusStrategy(){return f.current},setFocusedKey(e,t="first"){d.current=e,f.current=t,h(e)},selectedKeys:y,setSelectedKeys(e){(i||!function(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}(e,y))&&p(e)},disabledKeys:g,disabledBehavior:c}}function o(e,t){return e?"all"===e?"all":new l.Y(e):t}},41821:function(e,t,n){n.d(t,{z:function(){return r}});var l=n(2265);function r(e,t,n){let[r,i]=(0,l.useState)(e||t),o=(0,l.useRef)(void 0!==e),s=void 0!==e;(0,l.useEffect)(()=>{let e=o.current;e!==s&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}.`),o.current=s},[s]);let c=s?e:r,a=(0,l.useCallback)((e,...t)=>{let l=(e,...t)=>{n&&!Object.is(c,e)&&n(e,...t),s||(c=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((n,...r)=>{let i=e(s?c:n,...r);return(l(i,...t),s)?n:i})):(s||i(e),l(e,...t))},[s,c,n]);return[c,a]}}}]);