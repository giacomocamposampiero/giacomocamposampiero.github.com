(self.webpackChunkgiacomocamposampiero=self.webpackChunkgiacomocamposampiero||[]).push([[867],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2982:function(e,t,n){"use strict";t.ZP=void 0;var r=n(9),o=(0,r.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);(0,r.createGlobalStyle)(o);var i=o;t.ZP=i},280:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ie}});var r,o,i,a,c=n(7294),u=n(9),s=n(1597),l="active",f=u.default.nav.withConfig({displayName:"navbar__StyledNav",componentId:"sc-1ma2qny-0"})(["margin-bottom:1em;@media (min-width:520px){margin-bottom:2em;}"]),p=u.default.ul.withConfig({displayName:"navbar__StyledList",componentId:"sc-1ma2qny-1"})(["padding:0;display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:0;@media (min-width:520px){display:block;}"]),m=u.default.li.withConfig({displayName:"navbar__ListElement",componentId:"sc-1ma2qny-2"})(["display:inline-block;padding:0.5em;text-align:center;font-size:1.8rem;@media (min-width:300px){font-size:2.2rem;padding-right:0;padding-left:0;}@media (min-width:350px){font-size:2.2rem;}@media (min-width:520px){padding:0;margin-right:2rem;font-size:2.4rem;}&:after{content:' ';display:none;white-space:pre;@media (min-width:520px){display:inline-block;}}"]),d=(0,u.default)(s.Link).attrs({activeClassName:l}).withConfig({displayName:"navbar__NavItem",componentId:"sc-1ma2qny-3"})(["color:black;border:none;&:hover{color:blue;}&.","{font-weight:bold;}"],l),b=function(){return c.createElement(f,null,c.createElement(p,null,c.createElement(m,null,c.createElement(d,{to:"/",activeClassName:l},"home")),c.createElement(m,null,c.createElement(d,{to:"/projects/",activeClassName:l},"projects")),c.createElement(m,null,c.createElement(d,{to:"/about/",activeClassName:l},"about"))))},h=n(5697),y=n.n(h),g=n(4839),w=n.n(g),v=n(2993),T=n.n(v),C=n(6494),E=n.n(C),A="bodyAttributes",O="htmlAttributes",x="titleAttributes",S={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},k=(Object.keys(S).map((function(e){return S[e]})),"charset"),j="cssText",P="href",I="http-equiv",L="innerHTML",N="itemprop",z="name",_="property",M="rel",R="src",q="target",B={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H="defaultTitle",D="defer",Y="encodeSpecialCharacters",F="onChangeClientState",U="titleTemplate",K=Object.keys(B).reduce((function(e,t){return e[B[t]]=t,e}),{}),G=[S.NOSCRIPT,S.SCRIPT,S.STYLE],W="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ee=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},te=function(e){var t=ae(e,S.TITLE),n=ae(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ae(e,H);return t||r||void 0},ne=function(e){return ae(e,F)||function(){}},re=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},oe=function(e,t){return t.filter((function(e){return void 0!==e[S.BASE]})).map((function(e){return e[S.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ie=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&fe("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===M&&"canonical"===e[n].toLowerCase()||u===M&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==L&&c!==j&&c!==N||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=E()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ae=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ce=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ce(e)}),0)}),ue=function(e){return clearTimeout(e)},se="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ce:n.g.requestAnimationFrame||ce,le="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ue:n.g.cancelAnimationFrame||ue,fe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},pe=null,me=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;he(S.BODY,r),he(S.HTML,o),be(f,p);var m={baseTag:ye(S.BASE,n),linkTags:ye(S.LINK,i),metaTags:ye(S.META,a),noscriptTags:ye(S.NOSCRIPT,c),scriptTags:ye(S.SCRIPT,s),styleTags:ye(S.STYLE,l)},d={},b={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(b[e]=m[e].oldTags)})),t&&t(),u(e,d,b)},de=function(e){return Array.isArray(e)?e.join(""):e},be=function(e,t){void 0!==e&&document.title!==e&&(document.title=de(e)),he(S.TITLE,t)},he=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(W),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(W):n.getAttribute(W)!==a.join(",")&&n.setAttribute(W,a.join(","))}},ye=function(e,t){var n=document.head||document.querySelector(S.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===L)n.innerHTML=t.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(W,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ge=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},we=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)},ve=function(e,t,n){switch(e){case S.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[W]=!0,o=we(n,r),[c.createElement(S.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ge(n),i=de(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+ee(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ee(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case A:case O:return{toComponent:function(){return we(t)},toString:function(){return ge(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[W]=!0,r);return Object.keys(t).forEach((function(e){var n=B[e]||e;if(n===L||n===j){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===L||e===j)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+ee(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Te=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ve(S.BASE,t,r),bodyAttributes:ve(A,n,r),htmlAttributes:ve(O,o,r),link:ve(S.LINK,i,r),meta:ve(S.META,a,r),noscript:ve(S.NOSCRIPT,c,r),script:ve(S.SCRIPT,u,r),style:ve(S.STYLE,s,r),title:ve(S.TITLE,{title:f,titleAttributes:p},r)}},Ce=w()((function(e){return{baseTag:oe([P,q],e),bodyAttributes:re(A,e),defer:ae(e,D),encode:ae(e,Y),htmlAttributes:re(O,e),linkTags:ie(S.LINK,[M,P],e),metaTags:ie(S.META,[z,k,I,_,N],e),noscriptTags:ie(S.NOSCRIPT,[L],e),onChangeClientState:ne(e),scriptTags:ie(S.SCRIPT,[R,L],e),styleTags:ie(S.STYLE,[j],e),title:te(e),titleAttributes:re(x,e)}}),(function(e){pe&&le(pe),e.defer?pe=se((function(){me(e,(function(){pe=null}))})):(me(e),pe=null)}),Te)((function(){return null})),Ee=(o=Ce,a=i=function(e){function t(){return V(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!T()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case S.SCRIPT:case S.NOSCRIPT:return{innerHTML:t};case S.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case S.TITLE:return J({},o,((t={})[r.type]=a,t.titleAttributes=J({},i),t));case S.BODY:return J({},o,{bodyAttributes:J({},i)});case S.HTML:return J({},o,{htmlAttributes:J({},i)})}return J({},o,((n={})[r.type]=J({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[K[n]||n]=e[n],t}),t)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case S.LINK:case S.META:case S.NOSCRIPT:case S.SCRIPT:case S.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},$(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:y().object,bodyAttributes:y().object,children:y().oneOfType([y().arrayOf(y().node),y().node]),defaultTitle:y().string,defer:y().bool,encodeSpecialCharacters:y().bool,htmlAttributes:y().object,link:y().arrayOf(y().object),meta:y().arrayOf(y().object),noscript:y().arrayOf(y().object),onChangeClientState:y().func,script:y().arrayOf(y().object),style:y().arrayOf(y().object),title:y().string,titleAttributes:y().object,titleTemplate:y().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=Te({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Ee.renderStatic=Ee.rewind;var Ae=Ee,Oe=function(){return c.createElement(Ae,null,c.createElement("title",null,"Giacomo Camposampiero"),c.createElement("meta",{property:"og:title",content:"Giacomo Camposampiero"}),c.createElement("meta",{property:"og:description",content:"Personal Website"}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{property:"og:url",content:"https://giacomocamposampiero.github.io"}),c.createElement("meta",{name:"theme-color",content:"#ffffff"}))},xe=n(2982),Se=(0,u.createGlobalStyle)([""," html,body{height:100%;}html{box-sizing:border-box;font-size:62.5%;}body{text-align:justify;text-justify:inter-word;font-size:16px;font-size:1.6rem;line-height:1.5em;font-size:1.8rem;font-family:'Roboto Mono',monospace;word-break:break-word;}article{margin-bottom:1em;}p.info{margin-top:-0.5em;color:#999;}a.info{color:#999;}h1,h2,h4,h5,h6{font-family:'Rubik',sans-serif;margin:0.5em 0;}*,*:before,*:after{box-sizing:inherit;}blockquote{margin-left:1em;margin-right:1em;@media (min-width:520px){margin-left:2em;margin-right:2em;}}a{text-decoration:none;color:blue;border-bottom:2px solid transparent;&:hover{color:#999;border-color:#999;}&.anchor{border:none;}}"],xe.ZP),ke=u.default.main.withConfig({displayName:"layout__Main",componentId:"sc-e3t63i-0"})(["max-width:83rem;padding:1em 1em 2em;margin:0 auto;@media (min-width:350px){padding:1em 1.5em 4em;}@media (min-width:520px){padding:2rem 2em 6rem;}"]),je=u.default.header.withConfig({displayName:"layout__StyledHeader",componentId:"sc-e3t63i-1"})(["margin-bottom:4rem;"]),Pe=u.default.h1.withConfig({displayName:"layout__StyledTitle",componentId:"sc-e3t63i-2"})(["margin:0.3em 0;font-family:'Rubik',sans-serif;font-weight:700;@media (min-width:350px){margin:0.5em 0 0.2em;}@media (min-width:520px){margin:0.667em 0;}"]),Ie=function(e){var t=e.children;return c.createElement(ke,null,c.createElement(Se,null),c.createElement(Oe,null),c.createElement(je,null,c.createElement(Pe,null,"giacomo camposampiero"),c.createElement(b,null)),t)}}}]);
//# sourceMappingURL=dbccc7e287c45cbf4532f154d0e84b31ff038f78-10b1e0eaf55550446e43.js.map