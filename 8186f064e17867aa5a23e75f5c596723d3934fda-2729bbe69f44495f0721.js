(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"03A+":function(e,t,n){var r=n("JTzB"),o=n("ExA7"),a=Object.prototype,i=a.hasOwnProperty,c=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!c.call(e,"callee")};e.exports=u},"5Qhx":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=(n("msNi"),n("zwNX")),c=function(e){var t=e.slug,n=e.title,r=e.date,c=e.subTitle,u=e.tags;return o.a.createElement("div",{className:"wrapper"},o.a.createElement(a.a,{to:t,style:{textDecoration:"none",color:"inherit"}},o.a.createElement("div",{className:"card card-1"},o.a.createElement(s,{title:n,date:r}),o.a.createElement("p",null,c),o.a.createElement("div",{className:"button-container"},u.map((function(e,t){return o.a.createElement(i.a,{key:t,text:e,link:e})}))))))},u=function(e){var t=e.text,n=e.path,r="menu-item ";return"About"===t&&(r+="about-menu-item"),"Contact"===t&&(r+="contact-menu-item"),o.a.createElement(a.a,{to:n,className:r},t)},l=function(e){var t=e.title;return o.a.createElement("h3",null,t)},s=function(e){var t=e.title,n=e.date;return o.a.createElement("h3",null,t," ",o.a.createElement("br",null),o.a.createElement(f,{date:n}))},f=function(e){var t=e.date;return o.a.createElement("span",{color:"#BBB"},"— ",t," ")}},"6sVZ":function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},"7GkX":function(e,t,n){var r=n("b80T"),o=n("A90E"),a=n("MMmD");e.exports=function(e){return a(e)?r(e):o(e)}},"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"98ov":function(e,t,n){var r=n("VhX2"),o=n("P/G1");e.exports=function(e){return r(o(e))}},A2Nt:function(e,t,n){},A90E:function(e,t,n){var r=n("6sVZ"),o=n("V6Ve"),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}},AP2z:function(e,t,n){var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(u){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},B8du:function(e,t){e.exports=function(){return!1}},DSRE:function(e,t,n){(function(e){var r=n("Kz5y"),o=n("B8du"),a=t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,c=i&&i.exports===a?r.Buffer:void 0,u=(c?c.isBuffer:void 0)||o;e.exports=u}).call(this,n("YuTi")(e))},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},JTzB:function(e,t,n){var r=n("NykK"),o=n("ExA7");e.exports=function(e){return o(e)&&"[object Arguments]"==r(e)}},JiHk:function(e,t,n){},JmpY:function(e,t,n){var r=n("eUgh");e.exports=function(e,t){return r(t,(function(t){return e[t]}))}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},MMmD:function(e,t,n){var r=n("lSCD"),o=n("shjB");e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},NykK:function(e,t,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},"P/G1":function(e,t,n){var r=n("JmpY"),o=n("7GkX");e.exports=function(e){return null==e?[]:r(e,o(e))}},PCGc:function(e,t,n){},TS5P:function(e,t,n){},"UNi/":function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},V6Ve:function(e,t,n){var r=n("kekF")(Object.keys,Object);e.exports=r},VhX2:function(e,t,n){var r=n("vlbB");e.exports=function(e){var t=e.length;return t?e[r(0,t-1)]:void 0}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},Zttt:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=(n("A2Nt"),n("qhky")),c=(n("PCGc"),n("5Qhx")),u=(n("i/PE"),function(){return o.a.createElement("div",{className:"test-mobile"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox"}),o.a.createElement("span",{className:"menu"},o.a.createElement("span",{className:"hamburger"})),o.a.createElement("ul",{style:{listStyleType:"none"}},o.a.createElement("li",null,o.a.createElement("a",{href:"/about/"},"About")))))}),l=function(e){var t=e.data;return o.a.createElement("div",null,o.a.createElement(i.a,{title:"Dhruv's Blog",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],style:[{cssText:"\n                body {\n                    background: #fafafa;\n                }\n            "}]}),o.a.createElement("div",{className:"flex-header"},o.a.createElement(a.a,{to:"/",className:"flex-header-title"},o.a.createElement(c.b,{title:t.site.siteMetadata.title})),o.a.createElement("div",{className:"flex-header-content"},o.a.createElement("div",{className:"flex-header-content-search"}),o.a.createElement(u,null),o.a.createElement("div",{className:"flex-header-content-menu"},o.a.createElement(c.a,{text:"About",path:"/about/"}),o.a.createElement(c.a,{text:"Contact",path:"/contact/"})))))},s=(n("TS5P"),function(e){var t=e.children,n=Object(a.c)("3649515864");return o.a.createElement("div",{style:{margin:"1em"}},o.a.createElement(l,{data:n}),o.a.createElement("div",{className:"main-wrapper"},o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear())))})},b80T:function(e,t,n){var r=n("UNi/"),o=n("03A+"),a=n("Z0cm"),i=n("DSRE"),c=n("wJg7"),u=n("c6wG"),l=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),s=!n&&o(e),f=!n&&!s&&i(e),p=!n&&!s&&!f&&u(e),d=n||s||f||p,y=d?r(e.length,String):[],m=y.length;for(var b in e)!t&&!l.call(e,b)||d&&("length"==b||f&&("offset"==b||"parent"==b)||p&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||c(b,m))||y.push(b);return y}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],i[l[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},c6wG:function(e,t,n){var r=n("dD9F"),o=n("sEf8"),a=n("mdPL"),i=a&&a.isTypedArray,c=i?o(i):r;e.exports=c},dD9F:function(e,t,n){var r=n("NykK"),o=n("shjB"),a=n("ExA7"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},fTpD:function(e,t,n){var r=n("VhX2"),o=n("98ov"),a=n("Z0cm");e.exports=function(e){return(a(e)?r:o)(e)}},"i/PE":function(e,t,n){},kekF:function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},lSCD:function(e,t,n){var r=n("NykK"),o=n("GoyQ");e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},mdPL:function(e,t,n){(function(e){var r=n("WFqU"),o=t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,c=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(t){}}();e.exports=c}).call(this,n("YuTi")(e))},msNi:function(e,t,n){},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},qhky:function(e,t,n){"use strict";(function(e){n("E9XD");var r,o,a,i,c=n("17x9"),u=n.n(c),l=n("8+s/"),s=n.n(l),f=n("bmMU"),p=n.n(f),d=n("q1tI"),y=n.n(d),m=n("YVoz"),b=n.n(m),h="bodyAttributes",v="htmlAttributes",T="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",A="href",j="http-equiv",O="innerHTML",x="itemprop",S="name",C="property",k="rel",P="src",N="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",B="encodeSpecialCharacters",D="onChangeClientState",F="titleTemplate",q=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),R=[g.NOSCRIPT,g.SCRIPT,g.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,g.TITLE),n=Q(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,L);return t||r||void 0},J=function(e){return Q(e,D)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==O&&c!==w&&c!==x||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=b()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),ce(f,p);var d={baseTag:le(g.BASE,n),linkTags:le(g.LINK,a),metaTags:le(g.META,i),noscriptTags:le(g.NOSCRIPT,c),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},y={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,y,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[y.a.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),y.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(v,o,r),link:pe(g.LINK,a,r),meta:pe(g.META,i,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,u,r),style:pe(g.STYLE,l,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},ye=s()((function(e){return{baseTag:X([A,N],e),bodyAttributes:W(h,e),defer:Q(e,M),encode:Q(e,B),htmlAttributes:W(v,e),linkTags:Z(g.LINK,[k,A],e),metaTags:Z(g.META,[S,E,j,C,x],e),noscriptTags:Z(g.NOSCRIPT,[O],e),onChangeClientState:J(e),scriptTags:Z(g.SCRIPT,[P,O],e),styleTags:Z(g.STYLE,[w],e),title:G(e),titleAttributes:W(T,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),me=(o=ye,i=a=function(e){function t(){return z(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return _({},r,((t={})[n.type]=[].concat(r[n.type]||[],[_({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return _({},o,((t={})[r.type]=i,t.titleAttributes=_({},a),t));case g.BODY:return _({},o,{bodyAttributes:_({},a)});case g.HTML:return _({},o,{htmlAttributes:_({},a)})}return _({},o,((n={})[r.type]=_({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=_({},t);return Object.keys(e).forEach((function(t){var r;n=_({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return y.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=_({},n);return t&&(r=this.mapChildrenToProps(t,r)),y.a.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(y.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind,t.a=me}).call(this,n("yLpj"))},sEf8:function(e,t){e.exports=function(e){return function(t){return e(t)}}},shjB:function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},vlbB:function(e,t){var n=Math.floor,r=Math.random;e.exports=function(e,t){return e+n(r()*(t-e+1))}},wJg7:function(e,t){var n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&n.test(e))&&e>-1&&e%1==0&&e<t}},zwNX:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("fTpD"),o=n.n(r),a=n("q1tI"),i=n.n(a),c=(n("JiHk"),["-green","-blue","-salmon","-sun","-alge","-flower"]),u=function(e){var t=e.text,n="button "+o()(c);return i.a.createElement("span",{className:n},t)}}}]);
//# sourceMappingURL=8186f064e17867aa5a23e75f5c596723d3934fda-2729bbe69f44495f0721.js.map