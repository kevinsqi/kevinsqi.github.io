webpackJsonp([0x8eb291567e75],{43:function(e,t,n){var r,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===a)for(var l in r)i.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?(n.default=n,e.exports=n):(r=[],a=function(){return n}.apply(t,r),!(void 0!==a&&(e.exports=a)))}()},50:function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=o.call(e),t=o.call(t),c(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=l(e),d=l(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(s=f[i],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var o=Array.prototype.slice,l=n(52),u=n(51),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},51:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},52:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},53:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},59:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(7),p=r(d),m=n(61),E=r(m),T=n(50),h=r(T),b=n(60),A=n(21),y=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),o(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},a,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return u({},a,(t={},t[r.type]=o,t.titleAttributes=u({},i),t));case A.TAG_NAMES.BODY:return u({},a,{bodyAttributes:u({},i)});case A.TAG_NAMES.HTML:return u({},a,{htmlAttributes:u({},i)})}return u({},a,(n={},n[r.type]=u({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,o=i.children,l=a(i,["children"]),u=(0,b.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,o),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),i=u({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,b.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},S=(0,E.default)(b.reducePropsToState,b.handleClientStateChange,b.mapStateOnServer)(v),_=y(S);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},21:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},60:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),l=r(o),u=n(5),c=r(u),s=n(21),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a],o=i.toLowerCase();if(e.indexOf(o)!==-1&&n[o])return t.concat(n)}return t},[])},T=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],u=l.toLowerCase();t.indexOf(u)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(l)===-1||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],u=(0,c.default)({},r[l],a[l]);r[l]=u}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},b=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:m(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(s.ATTRIBUTE_NAMES.HTML,e),linkTags:T(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:T(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:m(s.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),y=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,_=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,R=function(e){g&&S(g),e.defer?g=v(function(){N(e,function(){g=null})}):(N(e),g=null)},N=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;O(s.TAG_NAMES.BODY,r),O(s.TAG_NAMES.HTML,a),w(d,p);var m={baseTag:M(s.TAG_NAMES.BASE,n),linkTags:M(s.TAG_NAMES.LINK,i),metaTags:M(s.TAG_NAMES.META,o),noscriptTags:M(s.TAG_NAMES.NOSCRIPT,l),scriptTags:M(s.TAG_NAMES.SCRIPT,c),styleTags:M(s.TAG_NAMES.STYLE,f)},E={},T={};Object.keys(m).forEach(function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(T[e]=m[e].oldTags)}),t&&t(),u(e,E,T)},P=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),O(s.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var u=o[l],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),a.indexOf(u)===-1&&a.push(u);var f=i.indexOf(u);f!==-1&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);a.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},M=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return o=t,n.isEqualNode(e)})?a.splice(o,1):i.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:i}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var a=C(n),i=P(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+f(i,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+a:a},""),i=r.innerHTML||r.cssText||"",o=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")},"")},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,a=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=k(n,a);return[l.default.createElement(s.TAG_NAMES.TITLE,i,t)]},j=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),l.default.createElement(e,a)})},x=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return k(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return j(e,t)},toString:function(){return L(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(s.TAG_NAMES.BASE,t,r),bodyAttributes:x(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(s.ATTRIBUTE_NAMES.HTML,a,r),link:x(s.TAG_NAMES.LINK,i,r),meta:x(s.TAG_NAMES.META,o,r),noscript:x(s.TAG_NAMES.NOSCRIPT,l,r),script:x(s.TAG_NAMES.SCRIPT,u,r),style:x(s.TAG_NAMES.STYLE,c,r),title:x(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=R,t.mapStateOnServer=B,t.reducePropsToState=b,t.requestAnimationFrame=v,t.warn=_}).call(t,function(){return this}())},61:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function d(){m=e(p.map(function(e){return e.props})),E.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],m=void 0,E=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return o(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return c.createElement(l,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=s.canUseDOM,E}}var u=n(1),c=r(u),s=r(n(53)),f=r(n(63));e.exports=l},63:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var c=i[u];if(!l(c))return!1;var s=e[c],f=t[c];if(a=n?n.call(r,s,f,c):void 0,a===!1||void 0===a&&s!==f)return!1}return!0}},41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=r(a),o=n(78),l=r(o),u=n(43),c=r(u),s=function(e){return i.default.createElement("nav",{className:(0,c.default)("display-font",e.className)},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"Nav"},i.default.createElement("div",{className:"flex-1"},i.default.createElement(l.default,{to:"/",className:"NavLink NavBrand text-2 uppercase font-weight-500"},"Kevin Qi")),i.default.createElement("div",{className:"d-flex"},i.default.createElement(l.default,{to:"/",className:"NavLink",activeClassName:"NavLink--active",exact:!0},"Home"),i.default.createElement(l.default,{to:"/about",className:"NavLink",activeClassName:"NavLink--active",exact:!0},"About"),i.default.createElement(l.default,{to:"/resume",className:"NavLink",activeClassName:"NavLink--active",exact:!0},"Resume"),i.default.createElement("a",{className:"NavLink",href:"https://github.com/kevinsqi"},"Github"),i.default.createElement("a",{className:"NavLink",href:"https://medium.com/@kevin_qi"},"Blog")))))};t.default=s,e.exports=t.default},87:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=r(a),o=n(59),l=r(o),u=n(41),c=r(u),s=function(e){var t=e.title,n=e.children;return i.default.createElement("div",null,i.default.createElement(l.default,{title:t+" - Kevin Qi"||"Kevin Qi"}),i.default.createElement("div",{className:"intro py-4"},i.default.createElement(c.default,null)),i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"pt-5"},n)))};t.default=s,e.exports=t.default},42:function(e,t){"use strict";t.__esModule=!0;t.PROJECTS={react_piano:{github:"https://github.com/kevinsqi/react-piano",description:"An open source interactive piano component which supports custom sounds, touch/click/keyboard events, programmatic playback, and fully configurable styling. Published on npm."},react_circular_progressbar:{github:"https://github.com/kevinsqi/react-circular-progressbar",description:"An open source circular progressbar component for React, built with SVG and extensively customizable. It's published on npm with over 30,000 weekly downloads and has 300+ stars on Github."},react_calendar_heatmap:{github:"https://github.com/patientslikeme/react-calendar-heatmap",description:"An open source calendar heatmap inspired by Github's contribution graph, developed while I was at PatientsLikeMe. It's published on npm and has 500+ stars on Github. Built with React and SVG."},save_tabbed_images:{github:"https://github.com/kevinsqi/save_tabbed_images",description:"An open source Chrome extension for downloading images in tabs super quick. Has more than 9,000 weekly users. Built with React."},eventmapper:{description:"A web app that maps out concerts in your city, sorted by popularity. Built with Rails and the Songkick API."},patientslikeme_app:{website:"https://itunes.apple.com/us/app/connect-patientslikeme-control/id955272281",description:"Treatment report functionality on native PatientsLikeMe iOS app, with useful info on cost, effectiveness, side effects, and patient evaluations. Built with Swift."}}},221:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return c.default.createElement("div",{className:e.className},c.default.createElement("p",null,"Hi! I'm a full-stack web developer with an affinity for frontend development and design. I have 6 years of experience working at web startups, and have helped introduce tech and engineering practices such as React, ES6, integration testing, and code review."),c.default.createElement("p",null,"I always aim to write readable, well-documented and tested code - while still iterating quickly. I like to have ownership of a product and take a holistic view beyond coding, thinking about things like product impact, A/B testing, and scalable design systems."),c.default.createElement("p",null,"I'd love to work at a startup or small company where I can help build interesting, impactful products."))}function i(e){return c.default.createElement("div",{className:e.className},c.default.createElement(m,{name:"Amino",position:"Senior software engineer",startDate:"Jan 2017",endDate:"present"},c.default.createElement("ul",null,c.default.createElement("li",null,"Lead engineer on the HSA banking product."))),c.default.createElement(m,{name:"PatientsLikeMe",position:"Senior software engineer",startDate:"Dec 2014",endDate:"Aug 2016"},c.default.createElement("ul",null,c.default.createElement("li",null,"Built React frontend for general-purpose patient interview framework, and wrote dozens of other React components."),c.default.createElement("li",null,"Helped introduce technologies and best practices, including React/ES6/webpack and javascript testing. Gave presentations on GraphQL, ES6 best practices, and React."),c.default.createElement("li",null,"Open-sourced two react components,"," ",c.default.createElement("a",{href:d.PROJECTS.react_calendar_heatmap.github},"react-calendar-heatmap")," and"," ",c.default.createElement("a",{href:"https://github.com/kevinsqi/react-circular-progressbar"},"react-circular-progressbar"),"."),c.default.createElement("li",null,"Quickly learned and handled development on"," ",c.default.createElement("a",{href:d.PROJECTS.patientslikeme_app.website},"PLM Connect iOS app")," for two months, adding treatment reports and other features to the app."))),c.default.createElement(m,{name:"Freelance web developer",startDate:"Apr 2014",endDate:"Nov 2014"},c.default.createElement("ul",null,c.default.createElement("li",null,"Designed and built new websites for clients like"," ",c.default.createElement("a",{href:"http://www.neurosaveinc.com/"},"NeuroSave"),"."))),c.default.createElement(m,{name:"Panjiva",position:"Software engineer",startDate:"May 2011",endDate:"Apr 2014"},c.default.createElement("ul",null,c.default.createElement("li",null,"Built a shipment search interface with sophisticated refinements and filtering, and an interface to visualize Chinese trade data"),c.default.createElement("li",null,"Helped introduce performance monitoring via NewRelic, acceptance testing, easier A/B testing, and established a code review process."),c.default.createElement("li",null,"Worked on numerous projects on homepage, search, subscription flows, and user dashboard. Improved conversion rate of high-traffic public company profiles."))),c.default.createElement(m,{name:"Lockheed Martin",position:"Software engineer",startDate:"Jan 2010",endDate:"May 2011"},c.default.createElement("ul",null,c.default.createElement("li",null,"Developed major frontend improvements to an emergency preparedness training application built on Ruby on Rails."))))}function o(e){return c.default.createElement("div",{className:e.className},c.default.createElement("h3",null,"react-circular-progressbar"),c.default.createElement("p",null,c.default.createElement("a",{className:"text-muted",href:d.PROJECTS.react_circular_progressbar.github},d.PROJECTS.react_circular_progressbar.github),c.default.createElement("br",null),d.PROJECTS.react_circular_progressbar.description),c.default.createElement("h3",null,"react-calendar-heatmap"),c.default.createElement("p",null,c.default.createElement("a",{className:"text-muted",href:d.PROJECTS.react_calendar_heatmap.github},d.PROJECTS.react_calendar_heatmap.github),c.default.createElement("br",null),d.PROJECTS.react_calendar_heatmap.description),c.default.createElement("h3",null,"react-piano"),c.default.createElement("p",null,c.default.createElement("a",{className:"text-muted",href:d.PROJECTS.react_piano.github},d.PROJECTS.react_piano.github),c.default.createElement("br",null),d.PROJECTS.react_piano.description),c.default.createElement("h3",null,"Save Tabbed Images"),c.default.createElement("p",null,c.default.createElement("a",{className:"text-muted",href:d.PROJECTS.save_tabbed_images.github},d.PROJECTS.save_tabbed_images.github),c.default.createElement("br",null),d.PROJECTS.save_tabbed_images.description))}function l(e){var t=e.className,n=e.email,r=e.github,a=e.website;return c.default.createElement("div",{className:t},c.default.createElement("ul",{className:"list-unstyled"},c.default.createElement("li",null,"Email: ",c.default.createElement("a",{href:"mailto:"+n},n)),c.default.createElement("li",null,"Website: ",c.default.createElement("a",{href:a},a)),c.default.createElement("li",null,"Github: ",c.default.createElement("a",{href:"https://github.com/"+r},"@",r))))}t.__esModule=!0;var u=n(1),c=r(u),s=n(87),f=r(s),d=n(42),p=function(){return c.default.createElement(f.default,{title:"Resume"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-12 col-12 mb-3"},c.default.createElement("h1",null,"Resume - Kevin Qi")),c.default.createElement("div",{className:"col-12 col-sm-8"},c.default.createElement("h2",{className:"ResumeHeader"},"Summary"),c.default.createElement(a,{className:"mt-3 mb-5"}),c.default.createElement("h2",{className:"ResumeHeader"},"Experience"),c.default.createElement(i,{className:"mt-3 mb-5"}),c.default.createElement("h2",{className:"ResumeHeader"},"Projects"),c.default.createElement(o,{className:"mt-3 mb-5"}),c.default.createElement("h2",{className:"ResumeHeader"},"Education"),c.default.createElement("div",{className:"mt-3 mb-5"},c.default.createElement("h3",null,"Carnegie Mellon University"),c.default.createElement("p",null,"B.S. in Computer Science, 2006-2009"))),c.default.createElement("div",{className:"col-xs-12 col-sm-4"},c.default.createElement("h2",{className:"ResumeHeader"},"Contact"),c.default.createElement(l,{className:"mt-3 mb-5",email:"iqnivek@gmail.com",github:"kevinsqi",website:"https://kevinqi.com"}),c.default.createElement("h2",{className:"ResumeHeader"},"Skills"),c.default.createElement("div",{className:"mt-3 mb-5"},c.default.createElement("ul",{className:"list-unstyled"},c.default.createElement("li",null,"Python"),c.default.createElement("li",null,"Ruby, Ruby on Rails"),c.default.createElement("li",null,"PostgreSQL"),c.default.createElement("li",null,"Javascript, Typescript, Flow, ES6"),c.default.createElement("li",null,"NodeJS"),c.default.createElement("li",null,"React, Redux"),c.default.createElement("li",null,"Conversant in Mandarin Chinese"))))))},m=function(e){var t=e.name,n=e.position,r=e.startDate,a=e.endDate,i=e.children;return c.default.createElement("div",null,c.default.createElement("h3",null,t),c.default.createElement("p",{className:"text-muted"},n?n+", ":null,r,a?"–"+a:null),i)};t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-resume-js-bc04b448c0954e9ed5ca.js.map