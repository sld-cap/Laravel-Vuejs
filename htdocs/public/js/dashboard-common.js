/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return $(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?o['offset'+e]+n['margin'+('Height'===e?'Top':'Left')]+n['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=document.body,t=document.documentElement,o=r(10)&&getComputedStyle(t);return{height:h('Height',e,t,o),width:h('Width',e,t,o)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c():{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&'HTML'===o.nodeName&&(a.top=$(a.top,0),a.left=$(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var y=parseFloat(m.marginTop,10),w=parseFloat(m.marginLeft,10);b.top-=h-y,b.bottom-=h-y,b.left-=c-w,b.right-=c-w,b.marginTop=y,b.marginLeft=w}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=$(o.clientWidth,window.innerWidth||0),r=$(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function w(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||w(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=y(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!w(d)){var m=c(),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}return s.left+=i,s.top+=i,s.right-=i,s.bottom-=i,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function I(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function F(){this.state.eventsEnabled||(this.state=I(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function K(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function G(e){return'end'===e?'start':'start'===e?'end':e}function z(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}function V(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?$(document.documentElement.clientHeight,window.innerHeight||0):$(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function _(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function X(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:_(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var J=Math.min,Q=Math.round,Z=Math.floor,$=Math.max,ee='undefined'!=typeof window&&'undefined'!=typeof document,te=['Edge','Trident','Firefox'],oe=0,ne=0;ne<te.length;ne+=1)if(ee&&0<=navigator.userAgent.indexOf(te[ne])){oe=1;break}var i=ee&&window.Promise,ie=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=ee&&!!(window.MSInputMethodContext&&document.documentMode),pe=ee&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3),he={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ce=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return F.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ce.Utils=('undefined'==typeof window?global:window).PopperUtils,ce.placements=fe,ce.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:X,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=$(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=J(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=$(J(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,Q(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case he.FLIP:p=[n,i];break;case he.CLOCKWISE:p=z(n);break;case he.COUNTERCLOCKWISE:p=z(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=G(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h={left:Z(i.left),top:Q(i.top),bottom:Q(i.bottom),right:Z(i.right)},c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==g?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==g?-1:1;m[c]=d*y,m[g]=s*w,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),K(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ce});
//# sourceMappingURL=popper.min.js.map
/*!
 * perfect-scrollbar v1.3.0
 * (c) 2017 Hyunje Jun
 * @license MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.PerfectScrollbar=e()}(this,function(){"use strict";function t(t){return getComputedStyle(t)}function e(t,e){for(var i in e){var r=e[i];"number"==typeof r&&(r+="px"),t.style[i]=r}return t}function i(t){var e=document.createElement("div");return e.className=t,e}function r(t,e){if(!v)throw new Error("No element matching method supported");return v.call(t,e)}function l(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function n(t,e){return Array.prototype.filter.call(t.children,function(t){return r(t,e)})}function o(t,e){var i=t.element.classList,r=m.state.scrolling(e);i.contains(r)?clearTimeout(Y[e]):i.add(r)}function s(t,e){Y[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(m.state.scrolling(e))},t.settings.scrollingThreshold)}function a(t,e){o(t,e),s(t,e)}function c(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function h(t,e,i,r,l){var n=i[0],o=i[1],s=i[2],h=i[3],u=i[4],d=i[5];void 0===r&&(r=!0),void 0===l&&(l=!1);var f=t.element;t.reach[h]=null,f[s]<1&&(t.reach[h]="start"),f[s]>t[n]-t[o]-1&&(t.reach[h]="end"),e&&(f.dispatchEvent(c("ps-scroll-"+h)),e<0?f.dispatchEvent(c("ps-scroll-"+u)):e>0&&f.dispatchEvent(c("ps-scroll-"+d)),r&&a(t,h)),t.reach[h]&&(e||l)&&f.dispatchEvent(c("ps-"+h+"-reach-"+t.reach[h]))}function u(t){return parseInt(t,10)||0}function d(t){return r(t,"input,[contenteditable]")||r(t,"select,[contenteditable]")||r(t,"textarea,[contenteditable]")||r(t,"button,[contenteditable]")}function f(e){var i=t(e);return u(i.width)+u(i.paddingLeft)+u(i.paddingRight)+u(i.borderLeftWidth)+u(i.borderRightWidth)}function p(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function b(t,i){var r={width:i.railXWidth};i.isRtl?r.left=i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:r.left=t.scrollLeft,i.isScrollbarXUsingBottom?r.bottom=i.scrollbarXBottom-t.scrollTop:r.top=i.scrollbarXTop+t.scrollTop,e(i.scrollbarXRail,r);var l={top:t.scrollTop,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?l.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth:l.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?l.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:l.left=i.scrollbarYLeft+t.scrollLeft,e(i.scrollbarYRail,l),e(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),e(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}function g(t,e){function i(e){p[d]=b+v*(e[a]-g),o(t,f),T(t),e.stopPropagation(),e.preventDefault()}function r(){s(t,f),t.event.unbind(t.ownerDocument,"mousemove",i)}var l=e[0],n=e[1],a=e[2],c=e[3],h=e[4],u=e[5],d=e[6],f=e[7],p=t.element,b=null,g=null,v=null;t.event.bind(t[h],"mousedown",function(e){b=p[d],g=e[a],v=(t[n]-t[l])/(t[c]-t[u]),t.event.bind(t.ownerDocument,"mousemove",i),t.event.once(t.ownerDocument,"mouseup",r),e.stopPropagation(),e.preventDefault()})}var v="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector),m={main:"ps",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},Y={x:null,y:null},X=function(t){this.element=t,this.handlers={}},w={isEmpty:{configurable:!0}};X.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},X.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(r){return!(!e||r===e)||(i.element.removeEventListener(t,r,!1),!1)})},X.prototype.unbindAll=function(){var t=this;for(var e in t.handlers)t.unbind(e)},w.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(X.prototype,w);var y=function(){this.eventElements=[]};y.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new X(t),this.eventElements.push(e)),e},y.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},y.prototype.unbind=function(t,e,i){var r=this.eventElement(t);r.unbind(e,i),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},y.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},y.prototype.once=function(t,e,i){var r=this.eventElement(t),l=function(t){r.unbind(e,l),i(t)};r.bind(e,l)};var W=function(t,e,i,r,l){void 0===r&&(r=!0),void 0===l&&(l=!1);var n;if("top"===e)n=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");n=["contentWidth","containerWidth","scrollLeft","x","left","right"]}h(t,i,n,r,l)},L={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},T=function(t){var e=t.element;t.containerWidth=e.clientWidth,t.containerHeight=e.clientHeight,t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(n(e,m.element.rail("x")).forEach(function(t){return l(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(n(e,m.element.rail("y")).forEach(function(t){return l(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=p(t,u(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=u((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=p(t,u(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=u(e.scrollTop*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),b(e,t),t.scrollbarXActive?e.classList.add(m.state.active("x")):(e.classList.remove(m.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=0),t.scrollbarYActive?e.classList.add(m.state.active("y")):(e.classList.remove(m.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)},R={"click-rail":function(t){t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,T(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,T(t),e.stopPropagation()})},"drag-thumb":function(t){g(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x"]),g(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y"])},keyboard:function(t){function e(e,r){var l=i.scrollTop;if(0===e){if(!t.scrollbarYActive)return!1;if(0===l&&r>0||l>=t.contentHeight-t.containerHeight&&r<0)return!t.settings.wheelPropagation}var n=i.scrollLeft;if(0===r){if(!t.scrollbarXActive)return!1;if(0===n&&e<0||n>=t.contentWidth-t.containerWidth&&e>0)return!t.settings.wheelPropagation}return!0}var i=t.element,l=function(){return r(i,":hover")},n=function(){return r(t.scrollbarX,":focus")||r(t.scrollbarY,":focus")};t.event.bind(t.ownerDocument,"keydown",function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&(l()||n())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(d(o))return}var s=0,a=0;switch(r.which){case 37:s=r.metaKey?-t.contentWidth:r.altKey?-t.containerWidth:-30;break;case 38:a=r.metaKey?t.contentHeight:r.altKey?t.containerHeight:30;break;case 39:s=r.metaKey?t.contentWidth:r.altKey?t.containerWidth:30;break;case 40:a=r.metaKey?-t.contentHeight:r.altKey?-t.containerHeight:-30;break;case 32:a=r.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(i.scrollTop-=a,i.scrollLeft+=s,T(t),e(s,a)&&r.preventDefault())}})},wheel:function(e){function i(t,i){var r=0===o.scrollTop,l=o.scrollTop+o.offsetHeight===o.scrollHeight,n=0===o.scrollLeft,s=o.scrollLeft+o.offsetWidth===o.offsetWidth;return!(Math.abs(i)>Math.abs(t)?r||l:n||s)||!e.settings.wheelPropagation}function r(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!==e&&i!==i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}function l(e,i,r){if(!L.isWebKit&&o.querySelector("select:focus"))return!0;if(!o.contains(e))return!1;for(var l=e;l&&l!==o;){if(l.classList.contains(m.element.consuming))return!0;var n=t(l);if([n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&!(0===l.scrollTop&&r>0||l.scrollTop===s&&r<0))return!0;var a=l.scrollLeft-l.clientWidth;if(a>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===a&&i>0))return!0}l=l.parentNode}return!1}function n(t){var n=r(t),s=n[0],a=n[1];if(!l(t.target,s,a)){var c=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(a?o.scrollTop-=a*e.settings.wheelSpeed:o.scrollTop+=s*e.settings.wheelSpeed,c=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(s?o.scrollLeft+=s*e.settings.wheelSpeed:o.scrollLeft-=a*e.settings.wheelSpeed,c=!0):(o.scrollTop-=a*e.settings.wheelSpeed,o.scrollLeft+=s*e.settings.wheelSpeed),T(e),(c=c||i(s,a))&&!t.ctrlKey&&(t.stopPropagation(),t.preventDefault())}}var o=e.element;void 0!==window.onwheel?e.event.bind(o,"wheel",n):void 0!==window.onmousewheel&&e.event.bind(o,"mousewheel",n)},touch:function(e){function i(t,i){var r=h.scrollTop,l=h.scrollLeft,n=Math.abs(t),o=Math.abs(i);if(o>n){if(i<0&&r===e.contentHeight-e.containerHeight||i>0&&0===r)return 0===window.scrollY&&i>0&&L.isChrome}else if(n>o&&(t<0&&l===e.contentWidth-e.containerWidth||t>0&&0===l))return!0;return!0}function r(t,i){h.scrollTop-=i,h.scrollLeft-=t,T(e)}function l(t){return t.targetTouches?t.targetTouches[0]:t}function n(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function o(t){if(n(t)){var e=l(t);u.pageX=e.pageX,u.pageY=e.pageY,d=(new Date).getTime(),null!==p&&clearInterval(p)}}function s(e,i,r){if(!h.contains(e))return!1;for(var l=e;l&&l!==h;){if(l.classList.contains(m.element.consuming))return!0;var n=t(l);if([n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/)){var o=l.scrollHeight-l.clientHeight;if(o>0&&!(0===l.scrollTop&&r>0||l.scrollTop===o&&r<0))return!0;var s=l.scrollLeft-l.clientWidth;if(s>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===s&&i>0))return!0}l=l.parentNode}return!1}function a(t){if(n(t)){var e=l(t),o={pageX:e.pageX,pageY:e.pageY},a=o.pageX-u.pageX,c=o.pageY-u.pageY;if(s(t.target,a,c))return;r(a,c),u=o;var h=(new Date).getTime(),p=h-d;p>0&&(f.x=a/p,f.y=c/p,d=h),i(a,c)&&t.preventDefault()}}function c(){e.settings.swipeEasing&&(clearInterval(p),p=setInterval(function(){e.isInitialized?clearInterval(p):f.x||f.y?Math.abs(f.x)<.01&&Math.abs(f.y)<.01?clearInterval(p):(r(30*f.x,30*f.y),f.x*=.8,f.y*=.8):clearInterval(p)},10))}if(L.supportsTouch||L.supportsIePointer){var h=e.element,u={},d=0,f={},p=null;L.supportsTouch?(e.event.bind(h,"touchstart",o),e.event.bind(h,"touchmove",a),e.event.bind(h,"touchend",c)):L.supportsIePointer&&(window.PointerEvent?(e.event.bind(h,"pointerdown",o),e.event.bind(h,"pointermove",a),e.event.bind(h,"pointerup",c)):window.MSPointerEvent&&(e.event.bind(h,"MSPointerDown",o),e.event.bind(h,"MSPointerMove",a),e.event.bind(h,"MSPointerUp",c)))}}},H=function(r,l){var n=this;if(void 0===l&&(l={}),"string"==typeof r&&(r=document.querySelector(r)),!r||!r.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=r,r.classList.add(m.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1};for(var o in l)n.settings[o]=l[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return r.classList.add(m.state.focus)},a=function(){return r.classList.remove(m.state.focus)};this.isRtl="rtl"===t(r).direction,this.isNegativeScroll=function(){var t=r.scrollLeft,e=null;return r.scrollLeft=-1,e=r.scrollLeft<0,r.scrollLeft=t,e}(),this.negativeScrollAdjustment=this.isNegativeScroll?r.scrollWidth-r.clientWidth:0,this.event=new y,this.ownerDocument=r.ownerDocument||document,this.scrollbarXRail=i(m.element.rail("x")),r.appendChild(this.scrollbarXRail),this.scrollbarX=i(m.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=u(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=u(c.borderLeftWidth)+u(c.borderRightWidth),e(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=u(c.marginLeft)+u(c.marginRight),e(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(m.element.rail("y")),r.appendChild(this.scrollbarYRail),this.scrollbarY=i(m.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var h=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(h.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=u(h.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?f(this.scrollbarY):null,this.railBorderYWidth=u(h.borderTopWidth)+u(h.borderBottomWidth),e(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=u(h.marginTop)+u(h.marginBottom),e(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:r.scrollLeft<=0?"start":r.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:r.scrollTop<=0?"start":r.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(t){return R[t](n)}),this.lastScrollTop=r.scrollTop,this.lastScrollLeft=r.scrollLeft,this.event.bind(this.element,"scroll",function(t){return n.onScroll(t)}),T(this)};return H.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:"block"}),e(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=u(t(this.scrollbarXRail).marginLeft)+u(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=u(t(this.scrollbarYRail).marginTop)+u(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:"none"}),e(this.scrollbarYRail,{display:"none"}),T(this),W(this,"top",0,!1,!0),W(this,"left",0,!1,!0),e(this.scrollbarXRail,{display:""}),e(this.scrollbarYRail,{display:""}))},H.prototype.onScroll=function(t){this.isAlive&&(T(this),W(this,"top",this.element.scrollTop-this.lastScrollTop),W(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=this.element.scrollTop,this.lastScrollLeft=this.element.scrollLeft)},H.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),l(this.scrollbarX),l(this.scrollbarY),l(this.scrollbarXRail),l(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},H.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")},H});

/* Chartist.js 0.11.0
 * Copyright © 2017 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */

!function(a,b){"function"==typeof define&&define.amd?define("Chartist",[],function(){return a.Chartist=b()}):"object"==typeof module&&module.exports?module.exports=b():a.Chartist=b()}(this,function(){var a={version:"0.11.0"};return function(a,b,c){"use strict";c.namespaces={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",ct:"http://gionkunz.github.com/chartist-js/ct"},c.noop=function(a){return a},c.alphaNumerate=function(a){return String.fromCharCode(97+a%26)},c.extend=function(a){var b,d,e;for(a=a||{},b=1;b<arguments.length;b++){d=arguments[b];for(var f in d)e=d[f],"object"!=typeof e||null===e||e instanceof Array?a[f]=e:a[f]=c.extend(a[f],e)}return a},c.replaceAll=function(a,b,c){return a.replace(new RegExp(b,"g"),c)},c.ensureUnit=function(a,b){return"number"==typeof a&&(a+=b),a},c.quantity=function(a){if("string"==typeof a){var b=/^(\d+)\s*(.*)$/g.exec(a);return{value:+b[1],unit:b[2]||void 0}}return{value:a}},c.querySelector=function(a){return a instanceof Node?a:b.querySelector(a)},c.times=function(a){return Array.apply(null,new Array(a))},c.sum=function(a,b){return a+(b?b:0)},c.mapMultiply=function(a){return function(b){return b*a}},c.mapAdd=function(a){return function(b){return b+a}},c.serialMap=function(a,b){var d=[],e=Math.max.apply(null,a.map(function(a){return a.length}));return c.times(e).forEach(function(c,e){var f=a.map(function(a){return a[e]});d[e]=b.apply(null,f)}),d},c.roundWithPrecision=function(a,b){var d=Math.pow(10,b||c.precision);return Math.round(a*d)/d},c.precision=8,c.escapingMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},c.serialize=function(a){return null===a||void 0===a?a:("number"==typeof a?a=""+a:"object"==typeof a&&(a=JSON.stringify({data:a})),Object.keys(c.escapingMap).reduce(function(a,b){return c.replaceAll(a,b,c.escapingMap[b])},a))},c.deserialize=function(a){if("string"!=typeof a)return a;a=Object.keys(c.escapingMap).reduce(function(a,b){return c.replaceAll(a,c.escapingMap[b],b)},a);try{a=JSON.parse(a),a=void 0!==a.data?a.data:a}catch(b){}return a},c.createSvg=function(a,b,d,e){var f;return b=b||"100%",d=d||"100%",Array.prototype.slice.call(a.querySelectorAll("svg")).filter(function(a){return a.getAttributeNS(c.namespaces.xmlns,"ct")}).forEach(function(b){a.removeChild(b)}),f=new c.Svg("svg").attr({width:b,height:d}).addClass(e),f._node.style.width=b,f._node.style.height=d,a.appendChild(f._node),f},c.normalizeData=function(a,b,d){var e,f={raw:a,normalized:{}};return f.normalized.series=c.getDataArray({series:a.series||[]},b,d),e=f.normalized.series.every(function(a){return a instanceof Array})?Math.max.apply(null,f.normalized.series.map(function(a){return a.length})):f.normalized.series.length,f.normalized.labels=(a.labels||[]).slice(),Array.prototype.push.apply(f.normalized.labels,c.times(Math.max(0,e-f.normalized.labels.length)).map(function(){return""})),b&&c.reverseData(f.normalized),f},c.safeHasProperty=function(a,b){return null!==a&&"object"==typeof a&&a.hasOwnProperty(b)},c.isDataHoleValue=function(a){return null===a||void 0===a||"number"==typeof a&&isNaN(a)},c.reverseData=function(a){a.labels.reverse(),a.series.reverse();for(var b=0;b<a.series.length;b++)"object"==typeof a.series[b]&&void 0!==a.series[b].data?a.series[b].data.reverse():a.series[b]instanceof Array&&a.series[b].reverse()},c.getDataArray=function(a,b,d){function e(a){if(c.safeHasProperty(a,"value"))return e(a.value);if(c.safeHasProperty(a,"data"))return e(a.data);if(a instanceof Array)return a.map(e);if(!c.isDataHoleValue(a)){if(d){var b={};return"string"==typeof d?b[d]=c.getNumberOrUndefined(a):b.y=c.getNumberOrUndefined(a),b.x=a.hasOwnProperty("x")?c.getNumberOrUndefined(a.x):b.x,b.y=a.hasOwnProperty("y")?c.getNumberOrUndefined(a.y):b.y,b}return c.getNumberOrUndefined(a)}}return a.series.map(e)},c.normalizePadding=function(a,b){return b=b||0,"number"==typeof a?{top:a,right:a,bottom:a,left:a}:{top:"number"==typeof a.top?a.top:b,right:"number"==typeof a.right?a.right:b,bottom:"number"==typeof a.bottom?a.bottom:b,left:"number"==typeof a.left?a.left:b}},c.getMetaData=function(a,b){var c=a.data?a.data[b]:a[b];return c?c.meta:void 0},c.orderOfMagnitude=function(a){return Math.floor(Math.log(Math.abs(a))/Math.LN10)},c.projectLength=function(a,b,c){return b/c.range*a},c.getAvailableHeight=function(a,b){return Math.max((c.quantity(b.height).value||a.height())-(b.chartPadding.top+b.chartPadding.bottom)-b.axisX.offset,0)},c.getHighLow=function(a,b,d){function e(a){if(void 0!==a)if(a instanceof Array)for(var b=0;b<a.length;b++)e(a[b]);else{var c=d?+a[d]:+a;g&&c>f.high&&(f.high=c),h&&c<f.low&&(f.low=c)}}b=c.extend({},b,d?b["axis"+d.toUpperCase()]:{});var f={high:void 0===b.high?-Number.MAX_VALUE:+b.high,low:void 0===b.low?Number.MAX_VALUE:+b.low},g=void 0===b.high,h=void 0===b.low;return(g||h)&&e(a),(b.referenceValue||0===b.referenceValue)&&(f.high=Math.max(b.referenceValue,f.high),f.low=Math.min(b.referenceValue,f.low)),f.high<=f.low&&(0===f.low?f.high=1:f.low<0?f.high=0:f.high>0?f.low=0:(f.high=1,f.low=0)),f},c.isNumeric=function(a){return null!==a&&isFinite(a)},c.isFalseyButZero=function(a){return!a&&0!==a},c.getNumberOrUndefined=function(a){return c.isNumeric(a)?+a:void 0},c.isMultiValue=function(a){return"object"==typeof a&&("x"in a||"y"in a)},c.getMultiValue=function(a,b){return c.isMultiValue(a)?c.getNumberOrUndefined(a[b||"y"]):c.getNumberOrUndefined(a)},c.rho=function(a){function b(a,c){return a%c===0?c:b(c,a%c)}function c(a){return a*a+1}if(1===a)return a;var d,e=2,f=2;if(a%2===0)return 2;do e=c(e)%a,f=c(c(f))%a,d=b(Math.abs(e-f),a);while(1===d);return d},c.getBounds=function(a,b,d,e){function f(a,b){return a===(a+=b)&&(a*=1+(b>0?o:-o)),a}var g,h,i,j=0,k={high:b.high,low:b.low};k.valueRange=k.high-k.low,k.oom=c.orderOfMagnitude(k.valueRange),k.step=Math.pow(10,k.oom),k.min=Math.floor(k.low/k.step)*k.step,k.max=Math.ceil(k.high/k.step)*k.step,k.range=k.max-k.min,k.numberOfSteps=Math.round(k.range/k.step);var l=c.projectLength(a,k.step,k),m=l<d,n=e?c.rho(k.range):0;if(e&&c.projectLength(a,1,k)>=d)k.step=1;else if(e&&n<k.step&&c.projectLength(a,n,k)>=d)k.step=n;else for(;;){if(m&&c.projectLength(a,k.step,k)<=d)k.step*=2;else{if(m||!(c.projectLength(a,k.step/2,k)>=d))break;if(k.step/=2,e&&k.step%1!==0){k.step*=2;break}}if(j++>1e3)throw new Error("Exceeded maximum number of iterations while optimizing scale step!")}var o=2.221e-16;for(k.step=Math.max(k.step,o),h=k.min,i=k.max;h+k.step<=k.low;)h=f(h,k.step);for(;i-k.step>=k.high;)i=f(i,-k.step);k.min=h,k.max=i,k.range=k.max-k.min;var p=[];for(g=k.min;g<=k.max;g=f(g,k.step)){var q=c.roundWithPrecision(g);q!==p[p.length-1]&&p.push(q)}return k.values=p,k},c.polarToCartesian=function(a,b,c,d){var e=(d-90)*Math.PI/180;return{x:a+c*Math.cos(e),y:b+c*Math.sin(e)}},c.createChartRect=function(a,b,d){var e=!(!b.axisX&&!b.axisY),f=e?b.axisY.offset:0,g=e?b.axisX.offset:0,h=a.width()||c.quantity(b.width).value||0,i=a.height()||c.quantity(b.height).value||0,j=c.normalizePadding(b.chartPadding,d);h=Math.max(h,f+j.left+j.right),i=Math.max(i,g+j.top+j.bottom);var k={padding:j,width:function(){return this.x2-this.x1},height:function(){return this.y1-this.y2}};return e?("start"===b.axisX.position?(k.y2=j.top+g,k.y1=Math.max(i-j.bottom,k.y2+1)):(k.y2=j.top,k.y1=Math.max(i-j.bottom-g,k.y2+1)),"start"===b.axisY.position?(k.x1=j.left+f,k.x2=Math.max(h-j.right,k.x1+1)):(k.x1=j.left,k.x2=Math.max(h-j.right-f,k.x1+1))):(k.x1=j.left,k.x2=Math.max(h-j.right,k.x1+1),k.y2=j.top,k.y1=Math.max(i-j.bottom,k.y2+1)),k},c.createGrid=function(a,b,d,e,f,g,h,i){var j={};j[d.units.pos+"1"]=a,j[d.units.pos+"2"]=a,j[d.counterUnits.pos+"1"]=e,j[d.counterUnits.pos+"2"]=e+f;var k=g.elem("line",j,h.join(" "));i.emit("draw",c.extend({type:"grid",axis:d,index:b,group:g,element:k},j))},c.createGridBackground=function(a,b,c,d){var e=a.elem("rect",{x:b.x1,y:b.y2,width:b.width(),height:b.height()},c,!0);d.emit("draw",{type:"gridBackground",group:a,element:e})},c.createLabel=function(a,d,e,f,g,h,i,j,k,l,m){var n,o={};if(o[g.units.pos]=a+i[g.units.pos],o[g.counterUnits.pos]=i[g.counterUnits.pos],o[g.units.len]=d,o[g.counterUnits.len]=Math.max(0,h-10),l){var p=b.createElement("span");p.className=k.join(" "),p.setAttribute("xmlns",c.namespaces.xhtml),p.innerText=f[e],p.style[g.units.len]=Math.round(o[g.units.len])+"px",p.style[g.counterUnits.len]=Math.round(o[g.counterUnits.len])+"px",n=j.foreignObject(p,c.extend({style:"overflow: visible;"},o))}else n=j.elem("text",o,k.join(" ")).text(f[e]);m.emit("draw",c.extend({type:"label",axis:g,index:e,group:j,element:n,text:f[e]},o))},c.getSeriesOption=function(a,b,c){if(a.name&&b.series&&b.series[a.name]){var d=b.series[a.name];return d.hasOwnProperty(c)?d[c]:b[c]}return b[c]},c.optionsProvider=function(b,d,e){function f(b){var f=h;if(h=c.extend({},j),d)for(i=0;i<d.length;i++){var g=a.matchMedia(d[i][0]);g.matches&&(h=c.extend(h,d[i][1]))}e&&b&&e.emit("optionsChanged",{previousOptions:f,currentOptions:h})}function g(){k.forEach(function(a){a.removeListener(f)})}var h,i,j=c.extend({},b),k=[];if(!a.matchMedia)throw"window.matchMedia not found! Make sure you're using a polyfill.";if(d)for(i=0;i<d.length;i++){var l=a.matchMedia(d[i][0]);l.addListener(f),k.push(l)}return f(),{removeMediaQueryListeners:g,getCurrentOptions:function(){return c.extend({},h)}}},c.splitIntoSegments=function(a,b,d){var e={increasingX:!1,fillHoles:!1};d=c.extend({},e,d);for(var f=[],g=!0,h=0;h<a.length;h+=2)void 0===c.getMultiValue(b[h/2].value)?d.fillHoles||(g=!0):(d.increasingX&&h>=2&&a[h]<=a[h-2]&&(g=!0),g&&(f.push({pathCoordinates:[],valueData:[]}),g=!1),f[f.length-1].pathCoordinates.push(a[h],a[h+1]),f[f.length-1].valueData.push(b[h/2]));return f}}(window,document,a),function(a,b,c){"use strict";c.Interpolation={},c.Interpolation.none=function(a){var b={fillHoles:!1};return a=c.extend({},b,a),function(b,d){for(var e=new c.Svg.Path,f=!0,g=0;g<b.length;g+=2){var h=b[g],i=b[g+1],j=d[g/2];void 0!==c.getMultiValue(j.value)?(f?e.move(h,i,!1,j):e.line(h,i,!1,j),f=!1):a.fillHoles||(f=!0)}return e}},c.Interpolation.simple=function(a){var b={divisor:2,fillHoles:!1};a=c.extend({},b,a);var d=1/Math.max(1,a.divisor);return function(b,e){for(var f,g,h,i=new c.Svg.Path,j=0;j<b.length;j+=2){var k=b[j],l=b[j+1],m=(k-f)*d,n=e[j/2];void 0!==n.value?(void 0===h?i.move(k,l,!1,n):i.curve(f+m,g,k-m,l,k,l,!1,n),f=k,g=l,h=n):a.fillHoles||(f=k=h=void 0)}return i}},c.Interpolation.cardinal=function(a){var b={tension:1,fillHoles:!1};a=c.extend({},b,a);var d=Math.min(1,Math.max(0,a.tension)),e=1-d;return function f(b,g){var h=c.splitIntoSegments(b,g,{fillHoles:a.fillHoles});if(h.length){if(h.length>1){var i=[];return h.forEach(function(a){i.push(f(a.pathCoordinates,a.valueData))}),c.Svg.Path.join(i)}if(b=h[0].pathCoordinates,g=h[0].valueData,b.length<=4)return c.Interpolation.none()(b,g);for(var j,k=(new c.Svg.Path).move(b[0],b[1],!1,g[0]),l=0,m=b.length;m-2*!j>l;l+=2){var n=[{x:+b[l-2],y:+b[l-1]},{x:+b[l],y:+b[l+1]},{x:+b[l+2],y:+b[l+3]},{x:+b[l+4],y:+b[l+5]}];j?l?m-4===l?n[3]={x:+b[0],y:+b[1]}:m-2===l&&(n[2]={x:+b[0],y:+b[1]},n[3]={x:+b[2],y:+b[3]}):n[0]={x:+b[m-2],y:+b[m-1]}:m-4===l?n[3]=n[2]:l||(n[0]={x:+b[l],y:+b[l+1]}),k.curve(d*(-n[0].x+6*n[1].x+n[2].x)/6+e*n[2].x,d*(-n[0].y+6*n[1].y+n[2].y)/6+e*n[2].y,d*(n[1].x+6*n[2].x-n[3].x)/6+e*n[2].x,d*(n[1].y+6*n[2].y-n[3].y)/6+e*n[2].y,n[2].x,n[2].y,!1,g[(l+2)/2])}return k}return c.Interpolation.none()([])}},c.Interpolation.monotoneCubic=function(a){var b={fillHoles:!1};return a=c.extend({},b,a),function d(b,e){var f=c.splitIntoSegments(b,e,{fillHoles:a.fillHoles,increasingX:!0});if(f.length){if(f.length>1){var g=[];return f.forEach(function(a){g.push(d(a.pathCoordinates,a.valueData))}),c.Svg.Path.join(g)}if(b=f[0].pathCoordinates,e=f[0].valueData,b.length<=4)return c.Interpolation.none()(b,e);var h,i,j=[],k=[],l=b.length/2,m=[],n=[],o=[],p=[];for(h=0;h<l;h++)j[h]=b[2*h],k[h]=b[2*h+1];for(h=0;h<l-1;h++)o[h]=k[h+1]-k[h],p[h]=j[h+1]-j[h],n[h]=o[h]/p[h];for(m[0]=n[0],m[l-1]=n[l-2],h=1;h<l-1;h++)0===n[h]||0===n[h-1]||n[h-1]>0!=n[h]>0?m[h]=0:(m[h]=3*(p[h-1]+p[h])/((2*p[h]+p[h-1])/n[h-1]+(p[h]+2*p[h-1])/n[h]),isFinite(m[h])||(m[h]=0));for(i=(new c.Svg.Path).move(j[0],k[0],!1,e[0]),h=0;h<l-1;h++)i.curve(j[h]+p[h]/3,k[h]+m[h]*p[h]/3,j[h+1]-p[h]/3,k[h+1]-m[h+1]*p[h]/3,j[h+1],k[h+1],!1,e[h+1]);return i}return c.Interpolation.none()([])}},c.Interpolation.step=function(a){var b={postpone:!0,fillHoles:!1};return a=c.extend({},b,a),function(b,d){for(var e,f,g,h=new c.Svg.Path,i=0;i<b.length;i+=2){var j=b[i],k=b[i+1],l=d[i/2];void 0!==l.value?(void 0===g?h.move(j,k,!1,l):(a.postpone?h.line(j,f,!1,g):h.line(e,k,!1,l),h.line(j,k,!1,l)),e=j,f=k,g=l):a.fillHoles||(e=f=g=void 0)}return h}}}(window,document,a),function(a,b,c){"use strict";c.EventEmitter=function(){function a(a,b){d[a]=d[a]||[],d[a].push(b)}function b(a,b){d[a]&&(b?(d[a].splice(d[a].indexOf(b),1),0===d[a].length&&delete d[a]):delete d[a])}function c(a,b){d[a]&&d[a].forEach(function(a){a(b)}),d["*"]&&d["*"].forEach(function(c){c(a,b)})}var d=[];return{addEventHandler:a,removeEventHandler:b,emit:c}}}(window,document,a),function(a,b,c){"use strict";function d(a){var b=[];if(a.length)for(var c=0;c<a.length;c++)b.push(a[c]);return b}function e(a,b){var d=b||this.prototype||c.Class,e=Object.create(d);c.Class.cloneDefinitions(e,a);var f=function(){var a,b=e.constructor||function(){};return a=this===c?Object.create(e):this,b.apply(a,Array.prototype.slice.call(arguments,0)),a};return f.prototype=e,f["super"]=d,f.extend=this.extend,f}function f(){var a=d(arguments),b=a[0];return a.splice(1,a.length-1).forEach(function(a){Object.getOwnPropertyNames(a).forEach(function(c){delete b[c],Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c))})}),b}c.Class={extend:e,cloneDefinitions:f}}(window,document,a),function(a,b,c){"use strict";function d(a,b,d){return a&&(this.data=a||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.eventEmitter.emit("data",{type:"update",data:this.data})),b&&(this.options=c.extend({},d?this.options:this.defaultOptions,b),this.initializeTimeoutId||(this.optionsProvider.removeMediaQueryListeners(),this.optionsProvider=c.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter))),this.initializeTimeoutId||this.createChart(this.optionsProvider.getCurrentOptions()),this}function e(){return this.initializeTimeoutId?a.clearTimeout(this.initializeTimeoutId):(a.removeEventListener("resize",this.resizeListener),this.optionsProvider.removeMediaQueryListeners()),this}function f(a,b){return this.eventEmitter.addEventHandler(a,b),this}function g(a,b){return this.eventEmitter.removeEventHandler(a,b),this}function h(){a.addEventListener("resize",this.resizeListener),this.optionsProvider=c.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.addEventHandler("optionsChanged",function(){this.update()}.bind(this)),this.options.plugins&&this.options.plugins.forEach(function(a){a instanceof Array?a[0](this,a[1]):a(this)}.bind(this)),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=void 0}function i(a,b,d,e,f){this.container=c.querySelector(a),this.data=b||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.defaultOptions=d,this.options=e,this.responsiveOptions=f,this.eventEmitter=c.EventEmitter(),this.supportsForeignObject=c.Svg.isSupported("Extensibility"),this.supportsAnimations=c.Svg.isSupported("AnimationEventsAttribute"),this.resizeListener=function(){this.update()}.bind(this),this.container&&(this.container.__chartist__&&this.container.__chartist__.detach(),this.container.__chartist__=this),this.initializeTimeoutId=setTimeout(h.bind(this),0)}c.Base=c.Class.extend({constructor:i,optionsProvider:void 0,container:void 0,svg:void 0,eventEmitter:void 0,createChart:function(){throw new Error("Base chart type can't be instantiated!")},update:d,detach:e,on:f,off:g,version:c.version,supportsForeignObject:!1})}(window,document,a),function(a,b,c){"use strict";function d(a,d,e,f,g){a instanceof Element?this._node=a:(this._node=b.createElementNS(c.namespaces.svg,a),"svg"===a&&this.attr({"xmlns:ct":c.namespaces.ct})),d&&this.attr(d),e&&this.addClass(e),f&&(g&&f._node.firstChild?f._node.insertBefore(this._node,f._node.firstChild):f._node.appendChild(this._node))}function e(a,b){return"string"==typeof a?b?this._node.getAttributeNS(b,a):this._node.getAttribute(a):(Object.keys(a).forEach(function(b){if(void 0!==a[b])if(b.indexOf(":")!==-1){var d=b.split(":");this._node.setAttributeNS(c.namespaces[d[0]],b,a[b])}else this._node.setAttribute(b,a[b])}.bind(this)),this)}function f(a,b,d,e){return new c.Svg(a,b,d,this,e)}function g(){return this._node.parentNode instanceof SVGElement?new c.Svg(this._node.parentNode):null}function h(){for(var a=this._node;"svg"!==a.nodeName;)a=a.parentNode;return new c.Svg(a)}function i(a){var b=this._node.querySelector(a);return b?new c.Svg(b):null}function j(a){var b=this._node.querySelectorAll(a);return b.length?new c.Svg.List(b):null}function k(){return this._node}function l(a,d,e,f){if("string"==typeof a){var g=b.createElement("div");g.innerHTML=a,a=g.firstChild}a.setAttribute("xmlns",c.namespaces.xmlns);var h=this.elem("foreignObject",d,e,f);return h._node.appendChild(a),h}function m(a){return this._node.appendChild(b.createTextNode(a)),this}function n(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}function o(){return this._node.parentNode.removeChild(this._node),this.parent()}function p(a){return this._node.parentNode.replaceChild(a._node,this._node),a}function q(a,b){return b&&this._node.firstChild?this._node.insertBefore(a._node,this._node.firstChild):this._node.appendChild(a._node),this}function r(){return this._node.getAttribute("class")?this._node.getAttribute("class").trim().split(/\s+/):[]}function s(a){return this._node.setAttribute("class",this.classes(this._node).concat(a.trim().split(/\s+/)).filter(function(a,b,c){return c.indexOf(a)===b}).join(" ")),this}function t(a){var b=a.trim().split(/\s+/);return this._node.setAttribute("class",this.classes(this._node).filter(function(a){return b.indexOf(a)===-1}).join(" ")),this}function u(){return this._node.setAttribute("class",""),this}function v(){return this._node.getBoundingClientRect().height}function w(){return this._node.getBoundingClientRect().width}function x(a,b,d){return void 0===b&&(b=!0),Object.keys(a).forEach(function(e){function f(a,b){var f,g,h,i={};a.easing&&(h=a.easing instanceof Array?a.easing:c.Svg.Easing[a.easing],delete a.easing),a.begin=c.ensureUnit(a.begin,"ms"),a.dur=c.ensureUnit(a.dur,"ms"),h&&(a.calcMode="spline",a.keySplines=h.join(" "),a.keyTimes="0;1"),b&&(a.fill="freeze",i[e]=a.from,this.attr(i),g=c.quantity(a.begin||0).value,a.begin="indefinite"),f=this.elem("animate",c.extend({attributeName:e},a)),b&&setTimeout(function(){try{f._node.beginElement()}catch(b){i[e]=a.to,this.attr(i),f.remove()}}.bind(this),g),d&&f._node.addEventListener("beginEvent",function(){d.emit("animationBegin",{element:this,animate:f._node,params:a})}.bind(this)),f._node.addEventListener("endEvent",function(){d&&d.emit("animationEnd",{element:this,animate:f._node,params:a}),b&&(i[e]=a.to,this.attr(i),f.remove())}.bind(this))}a[e]instanceof Array?a[e].forEach(function(a){f.bind(this)(a,!1)}.bind(this)):f.bind(this)(a[e],b)}.bind(this)),this}function y(a){var b=this;this.svgElements=[];for(var d=0;d<a.length;d++)this.svgElements.push(new c.Svg(a[d]));Object.keys(c.Svg.prototype).filter(function(a){return["constructor","parent","querySelector","querySelectorAll","replace","append","classes","height","width"].indexOf(a)===-1}).forEach(function(a){b[a]=function(){var d=Array.prototype.slice.call(arguments,0);return b.svgElements.forEach(function(b){c.Svg.prototype[a].apply(b,d)}),b}})}c.Svg=c.Class.extend({constructor:d,attr:e,elem:f,parent:g,root:h,querySelector:i,querySelectorAll:j,getNode:k,foreignObject:l,text:m,empty:n,remove:o,replace:p,append:q,classes:r,addClass:s,removeClass:t,removeAllClasses:u,height:v,width:w,animate:x}),c.Svg.isSupported=function(a){return b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#"+a,"1.1")};var z={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};c.Svg.Easing=z,c.Svg.List=c.Class.extend({constructor:y})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e,f,g){var h=c.extend({command:f?a.toLowerCase():a.toUpperCase()},b,g?{data:g}:{});d.splice(e,0,h)}function e(a,b){a.forEach(function(c,d){u[c.command.toLowerCase()].forEach(function(e,f){b(c,e,d,f,a)})})}function f(a,b){this.pathElements=[],this.pos=0,this.close=a,this.options=c.extend({},v,b)}function g(a){return void 0!==a?(this.pos=Math.max(0,Math.min(this.pathElements.length,a)),this):this.pos}function h(a){return this.pathElements.splice(this.pos,a),this}function i(a,b,c,e){return d("M",{x:+a,y:+b},this.pathElements,this.pos++,c,e),this}function j(a,b,c,e){return d("L",{x:+a,y:+b},this.pathElements,this.pos++,c,e),this}function k(a,b,c,e,f,g,h,i){return d("C",{x1:+a,y1:+b,x2:+c,y2:+e,x:+f,y:+g},this.pathElements,this.pos++,h,i),this}function l(a,b,c,e,f,g,h,i,j){return d("A",{rx:+a,ry:+b,xAr:+c,lAf:+e,sf:+f,x:+g,y:+h},this.pathElements,this.pos++,i,j),this}function m(a){var b=a.replace(/([A-Za-z])([0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(function(a,b){return b.match(/[A-Za-z]/)&&a.push([]),a[a.length-1].push(b),a},[]);"Z"===b[b.length-1][0].toUpperCase()&&b.pop();var d=b.map(function(a){var b=a.shift(),d=u[b.toLowerCase()];return c.extend({command:b},d.reduce(function(b,c,d){return b[c]=+a[d],b},{}))}),e=[this.pos,0];return Array.prototype.push.apply(e,d),Array.prototype.splice.apply(this.pathElements,e),this.pos+=d.length,this}function n(){var a=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(function(b,c){var d=u[c.command.toLowerCase()].map(function(b){return this.options.accuracy?Math.round(c[b]*a)/a:c[b]}.bind(this));return b+c.command+d.join(",")}.bind(this),"")+(this.close?"Z":"")}function o(a,b){return e(this.pathElements,function(c,d){c[d]*="x"===d[0]?a:b}),this}function p(a,b){return e(this.pathElements,function(c,d){c[d]+="x"===d[0]?a:b}),this}function q(a){return e(this.pathElements,function(b,c,d,e,f){var g=a(b,c,d,e,f);(g||0===g)&&(b[c]=g)}),this}function r(a){var b=new c.Svg.Path(a||this.close);return b.pos=this.pos,b.pathElements=this.pathElements.slice().map(function(a){return c.extend({},a)}),b.options=c.extend({},this.options),b}function s(a){var b=[new c.Svg.Path];return this.pathElements.forEach(function(d){d.command===a.toUpperCase()&&0!==b[b.length-1].pathElements.length&&b.push(new c.Svg.Path),b[b.length-1].pathElements.push(d)}),b}function t(a,b,d){for(var e=new c.Svg.Path(b,d),f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.pathElements.length;h++)e.pathElements.push(g.pathElements[h]);return e}var u={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},v={accuracy:3};c.Svg.Path=c.Class.extend({constructor:f,position:g,remove:h,move:i,line:j,curve:k,arc:l,scale:o,translate:p,transform:q,parse:m,stringify:n,clone:r,splitByCommand:s}),c.Svg.Path.elementDescriptions=u,c.Svg.Path.join=t}(window,document,a),function(a,b,c){"use strict";function d(a,b,c,d){this.units=a,this.counterUnits=a===f.x?f.y:f.x,this.chartRect=b,this.axisLength=b[a.rectEnd]-b[a.rectStart],this.gridOffset=b[a.rectOffset],this.ticks=c,this.options=d}function e(a,b,d,e,f){var g=e["axis"+this.units.pos.toUpperCase()],h=this.ticks.map(this.projectValue.bind(this)),i=this.ticks.map(g.labelInterpolationFnc);h.forEach(function(j,k){var l,m={x:0,y:0};l=h[k+1]?h[k+1]-j:Math.max(this.axisLength-j,30),c.isFalseyButZero(i[k])&&""!==i[k]||("x"===this.units.pos?(j=this.chartRect.x1+j,m.x=e.axisX.labelOffset.x,"start"===e.axisX.position?m.y=this.chartRect.padding.top+e.axisX.labelOffset.y+(d?5:20):m.y=this.chartRect.y1+e.axisX.labelOffset.y+(d?5:20)):(j=this.chartRect.y1-j,m.y=e.axisY.labelOffset.y-(d?l:0),"start"===e.axisY.position?m.x=d?this.chartRect.padding.left+e.axisY.labelOffset.x:this.chartRect.x1-10:m.x=this.chartRect.x2+e.axisY.labelOffset.x+10),g.showGrid&&c.createGrid(j,k,this,this.gridOffset,this.chartRect[this.counterUnits.len](),a,[e.classNames.grid,e.classNames[this.units.dir]],f),g.showLabel&&c.createLabel(j,l,k,i,this,g.offset,m,b,[e.classNames.label,e.classNames[this.units.dir],"start"===g.position?e.classNames[g.position]:e.classNames.end],d,f))}.bind(this))}var f={x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}};c.Axis=c.Class.extend({constructor:d,createGridAndLabels:e,projectValue:function(a,b,c){throw new Error("Base axis can't be instantiated!")}}),c.Axis.units=f}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){var f=e.highLow||c.getHighLow(b,e,a.pos);this.bounds=c.getBounds(d[a.rectEnd]-d[a.rectStart],f,e.scaleMinSpace||20,e.onlyInteger),this.range={min:this.bounds.min,max:this.bounds.max},c.AutoScaleAxis["super"].constructor.call(this,a,d,this.bounds.values,e)}function e(a){return this.axisLength*(+c.getMultiValue(a,this.units.pos)-this.bounds.min)/this.bounds.range}c.AutoScaleAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){var f=e.highLow||c.getHighLow(b,e,a.pos);this.divisor=e.divisor||1,this.ticks=e.ticks||c.times(this.divisor).map(function(a,b){return f.low+(f.high-f.low)/this.divisor*b}.bind(this)),this.ticks.sort(function(a,b){return a-b}),this.range={min:f.low,max:f.high},c.FixedScaleAxis["super"].constructor.call(this,a,d,this.ticks,e),this.stepLength=this.axisLength/this.divisor}function e(a){return this.axisLength*(+c.getMultiValue(a,this.units.pos)-this.range.min)/(this.range.max-this.range.min)}c.FixedScaleAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){c.StepAxis["super"].constructor.call(this,a,d,e.ticks,e);var f=Math.max(1,e.ticks.length-(e.stretch?1:0));this.stepLength=this.axisLength/f}function e(a,b){return this.stepLength*b}c.StepAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a){var b=c.normalizeData(this.data,a.reverseData,!0);this.svg=c.createSvg(this.container,a.width,a.height,a.classNames.chart);var d,e,g=this.svg.elem("g").addClass(a.classNames.gridGroup),h=this.svg.elem("g"),i=this.svg.elem("g").addClass(a.classNames.labelGroup),j=c.createChartRect(this.svg,a,f.padding);d=void 0===a.axisX.type?new c.StepAxis(c.Axis.units.x,b.normalized.series,j,c.extend({},a.axisX,{ticks:b.normalized.labels,stretch:a.fullWidth})):a.axisX.type.call(c,c.Axis.units.x,b.normalized.series,j,a.axisX),e=void 0===a.axisY.type?new c.AutoScaleAxis(c.Axis.units.y,b.normalized.series,j,c.extend({},a.axisY,{high:c.isNumeric(a.high)?a.high:a.axisY.high,low:c.isNumeric(a.low)?a.low:a.axisY.low})):a.axisY.type.call(c,c.Axis.units.y,b.normalized.series,j,a.axisY),d.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),e.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&c.createGridBackground(g,j,a.classNames.gridBackground,this.eventEmitter),b.raw.series.forEach(function(f,g){var i=h.elem("g");i.attr({"ct:series-name":f.name,"ct:meta":c.serialize(f.meta)}),i.addClass([a.classNames.series,f.className||a.classNames.series+"-"+c.alphaNumerate(g)].join(" "));var k=[],l=[];b.normalized.series[g].forEach(function(a,h){var i={x:j.x1+d.projectValue(a,h,b.normalized.series[g]),y:j.y1-e.projectValue(a,h,b.normalized.series[g])};k.push(i.x,i.y),l.push({value:a,valueIndex:h,meta:c.getMetaData(f,h)})}.bind(this));var m={lineSmooth:c.getSeriesOption(f,a,"lineSmooth"),showPoint:c.getSeriesOption(f,a,"showPoint"),showLine:c.getSeriesOption(f,a,"showLine"),showArea:c.getSeriesOption(f,a,"showArea"),areaBase:c.getSeriesOption(f,a,"areaBase")},n="function"==typeof m.lineSmooth?m.lineSmooth:m.lineSmooth?c.Interpolation.monotoneCubic():c.Interpolation.none(),o=n(k,l);if(m.showPoint&&o.pathElements.forEach(function(b){var h=i.elem("line",{x1:b.x,y1:b.y,x2:b.x+.01,y2:b.y},a.classNames.point).attr({"ct:value":[b.data.value.x,b.data.value.y].filter(c.isNumeric).join(","),"ct:meta":c.serialize(b.data.meta)});this.eventEmitter.emit("draw",{type:"point",value:b.data.value,index:b.data.valueIndex,meta:b.data.meta,series:f,seriesIndex:g,axisX:d,axisY:e,group:i,element:h,x:b.x,y:b.y})}.bind(this)),m.showLine){var p=i.elem("path",{d:o.stringify()},a.classNames.line,!0);this.eventEmitter.emit("draw",{type:"line",values:b.normalized.series[g],path:o.clone(),chartRect:j,index:g,series:f,seriesIndex:g,seriesMeta:f.meta,axisX:d,axisY:e,group:i,element:p})}if(m.showArea&&e.range){var q=Math.max(Math.min(m.areaBase,e.range.max),e.range.min),r=j.y1-e.projectValue(q);o.splitByCommand("M").filter(function(a){return a.pathElements.length>1}).map(function(a){var b=a.pathElements[0],c=a.pathElements[a.pathElements.length-1];return a.clone(!0).position(0).remove(1).move(b.x,r).line(b.x,b.y).position(a.pathElements.length+1).line(c.x,r)}).forEach(function(c){var h=i.elem("path",{d:c.stringify()},a.classNames.area,!0);this.eventEmitter.emit("draw",{type:"area",values:b.normalized.series[g],path:c.clone(),series:f,seriesIndex:g,axisX:d,axisY:e,chartRect:j,index:g,group:i,element:h})}.bind(this))}}.bind(this)),this.eventEmitter.emit("created",{bounds:e.bounds,chartRect:j,axisX:d,axisY:e,svg:this.svg,options:a})}function e(a,b,d,e){c.Line["super"].constructor.call(this,a,b,f,c.extend({},f,d),e)}var f={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,type:void 0},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,type:void 0,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,showGridBackground:!1,low:void 0,high:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};c.Line=c.Base.extend({constructor:e,createChart:d})}(window,document,a),function(a,b,c){"use strict";function d(a){var b,d;a.distributeSeries?(b=c.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),b.normalized.series=b.normalized.series.map(function(a){return[a]})):b=c.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),this.svg=c.createSvg(this.container,a.width,a.height,a.classNames.chart+(a.horizontalBars?" "+a.classNames.horizontalBars:""));var e=this.svg.elem("g").addClass(a.classNames.gridGroup),g=this.svg.elem("g"),h=this.svg.elem("g").addClass(a.classNames.labelGroup);if(a.stackBars&&0!==b.normalized.series.length){var i=c.serialMap(b.normalized.series,function(){
return Array.prototype.slice.call(arguments).map(function(a){return a}).reduce(function(a,b){return{x:a.x+(b&&b.x)||0,y:a.y+(b&&b.y)||0}},{x:0,y:0})});d=c.getHighLow([i],a,a.horizontalBars?"x":"y")}else d=c.getHighLow(b.normalized.series,a,a.horizontalBars?"x":"y");d.high=+a.high||(0===a.high?0:d.high),d.low=+a.low||(0===a.low?0:d.low);var j,k,l,m,n,o=c.createChartRect(this.svg,a,f.padding);k=a.distributeSeries&&a.stackBars?b.normalized.labels.slice(0,1):b.normalized.labels,a.horizontalBars?(j=m=void 0===a.axisX.type?new c.AutoScaleAxis(c.Axis.units.x,b.normalized.series,o,c.extend({},a.axisX,{highLow:d,referenceValue:0})):a.axisX.type.call(c,c.Axis.units.x,b.normalized.series,o,c.extend({},a.axisX,{highLow:d,referenceValue:0})),l=n=void 0===a.axisY.type?new c.StepAxis(c.Axis.units.y,b.normalized.series,o,{ticks:k}):a.axisY.type.call(c,c.Axis.units.y,b.normalized.series,o,a.axisY)):(l=m=void 0===a.axisX.type?new c.StepAxis(c.Axis.units.x,b.normalized.series,o,{ticks:k}):a.axisX.type.call(c,c.Axis.units.x,b.normalized.series,o,a.axisX),j=n=void 0===a.axisY.type?new c.AutoScaleAxis(c.Axis.units.y,b.normalized.series,o,c.extend({},a.axisY,{highLow:d,referenceValue:0})):a.axisY.type.call(c,c.Axis.units.y,b.normalized.series,o,c.extend({},a.axisY,{highLow:d,referenceValue:0})));var p=a.horizontalBars?o.x1+j.projectValue(0):o.y1-j.projectValue(0),q=[];l.createGridAndLabels(e,h,this.supportsForeignObject,a,this.eventEmitter),j.createGridAndLabels(e,h,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&c.createGridBackground(e,o,a.classNames.gridBackground,this.eventEmitter),b.raw.series.forEach(function(d,e){var f,h,i=e-(b.raw.series.length-1)/2;f=a.distributeSeries&&!a.stackBars?l.axisLength/b.normalized.series.length/2:a.distributeSeries&&a.stackBars?l.axisLength/2:l.axisLength/b.normalized.series[e].length/2,h=g.elem("g"),h.attr({"ct:series-name":d.name,"ct:meta":c.serialize(d.meta)}),h.addClass([a.classNames.series,d.className||a.classNames.series+"-"+c.alphaNumerate(e)].join(" ")),b.normalized.series[e].forEach(function(g,k){var r,s,t,u;if(u=a.distributeSeries&&!a.stackBars?e:a.distributeSeries&&a.stackBars?0:k,r=a.horizontalBars?{x:o.x1+j.projectValue(g&&g.x?g.x:0,k,b.normalized.series[e]),y:o.y1-l.projectValue(g&&g.y?g.y:0,u,b.normalized.series[e])}:{x:o.x1+l.projectValue(g&&g.x?g.x:0,u,b.normalized.series[e]),y:o.y1-j.projectValue(g&&g.y?g.y:0,k,b.normalized.series[e])},l instanceof c.StepAxis&&(l.options.stretch||(r[l.units.pos]+=f*(a.horizontalBars?-1:1)),r[l.units.pos]+=a.stackBars||a.distributeSeries?0:i*a.seriesBarDistance*(a.horizontalBars?-1:1)),t=q[k]||p,q[k]=t-(p-r[l.counterUnits.pos]),void 0!==g){var v={};v[l.units.pos+"1"]=r[l.units.pos],v[l.units.pos+"2"]=r[l.units.pos],!a.stackBars||"accumulate"!==a.stackMode&&a.stackMode?(v[l.counterUnits.pos+"1"]=p,v[l.counterUnits.pos+"2"]=r[l.counterUnits.pos]):(v[l.counterUnits.pos+"1"]=t,v[l.counterUnits.pos+"2"]=q[k]),v.x1=Math.min(Math.max(v.x1,o.x1),o.x2),v.x2=Math.min(Math.max(v.x2,o.x1),o.x2),v.y1=Math.min(Math.max(v.y1,o.y2),o.y1),v.y2=Math.min(Math.max(v.y2,o.y2),o.y1);var w=c.getMetaData(d,k);s=h.elem("line",v,a.classNames.bar).attr({"ct:value":[g.x,g.y].filter(c.isNumeric).join(","),"ct:meta":c.serialize(w)}),this.eventEmitter.emit("draw",c.extend({type:"bar",value:g,index:k,meta:w,series:d,seriesIndex:e,axisX:m,axisY:n,chartRect:o,group:h,element:s},v))}}.bind(this))}.bind(this)),this.eventEmitter.emit("created",{bounds:j.bounds,chartRect:o,axisX:m,axisY:n,svg:this.svg,options:a})}function e(a,b,d,e){c.Bar["super"].constructor.call(this,a,b,f,c.extend({},f,d),e)}var f={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,scaleMinSpace:30,onlyInteger:!1},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,high:void 0,low:void 0,referenceValue:0,chartPadding:{top:15,right:15,bottom:5,left:10},seriesBarDistance:15,stackBars:!1,stackMode:"accumulate",horizontalBars:!1,distributeSeries:!1,reverseData:!1,showGridBackground:!1,classNames:{chart:"ct-chart-bar",horizontalBars:"ct-horizontal-bars",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",bar:"ct-bar",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};c.Bar=c.Base.extend({constructor:e,createChart:d})}(window,document,a),function(a,b,c){"use strict";function d(a,b,c){var d=b.x>a.x;return d&&"explode"===c||!d&&"implode"===c?"start":d&&"implode"===c||!d&&"explode"===c?"end":"middle"}function e(a){var b,e,f,h,i,j=c.normalizeData(this.data),k=[],l=a.startAngle;this.svg=c.createSvg(this.container,a.width,a.height,a.donut?a.classNames.chartDonut:a.classNames.chartPie),e=c.createChartRect(this.svg,a,g.padding),f=Math.min(e.width()/2,e.height()/2),i=a.total||j.normalized.series.reduce(function(a,b){return a+b},0);var m=c.quantity(a.donutWidth);"%"===m.unit&&(m.value*=f/100),f-=a.donut&&!a.donutSolid?m.value/2:0,h="outside"===a.labelPosition||a.donut&&!a.donutSolid?f:"center"===a.labelPosition?0:a.donutSolid?f-m.value/2:f/2,h+=a.labelOffset;var n={x:e.x1+e.width()/2,y:e.y2+e.height()/2},o=1===j.raw.series.filter(function(a){return a.hasOwnProperty("value")?0!==a.value:0!==a}).length;j.raw.series.forEach(function(a,b){k[b]=this.svg.elem("g",null,null)}.bind(this)),a.showLabel&&(b=this.svg.elem("g",null,null)),j.raw.series.forEach(function(e,g){if(0!==j.normalized.series[g]||!a.ignoreEmptyValues){k[g].attr({"ct:series-name":e.name}),k[g].addClass([a.classNames.series,e.className||a.classNames.series+"-"+c.alphaNumerate(g)].join(" "));var p=i>0?l+j.normalized.series[g]/i*360:0,q=Math.max(0,l-(0===g||o?0:.2));p-q>=359.99&&(p=q+359.99);var r,s,t,u=c.polarToCartesian(n.x,n.y,f,q),v=c.polarToCartesian(n.x,n.y,f,p),w=new c.Svg.Path(!a.donut||a.donutSolid).move(v.x,v.y).arc(f,f,0,p-l>180,0,u.x,u.y);a.donut?a.donutSolid&&(t=f-m.value,r=c.polarToCartesian(n.x,n.y,t,l-(0===g||o?0:.2)),s=c.polarToCartesian(n.x,n.y,t,p),w.line(r.x,r.y),w.arc(t,t,0,p-l>180,1,s.x,s.y)):w.line(n.x,n.y);var x=a.classNames.slicePie;a.donut&&(x=a.classNames.sliceDonut,a.donutSolid&&(x=a.classNames.sliceDonutSolid));var y=k[g].elem("path",{d:w.stringify()},x);if(y.attr({"ct:value":j.normalized.series[g],"ct:meta":c.serialize(e.meta)}),a.donut&&!a.donutSolid&&(y._node.style.strokeWidth=m.value+"px"),this.eventEmitter.emit("draw",{type:"slice",value:j.normalized.series[g],totalDataSum:i,index:g,meta:e.meta,series:e,group:k[g],element:y,path:w.clone(),center:n,radius:f,startAngle:l,endAngle:p}),a.showLabel){var z;z=1===j.raw.series.length?{x:n.x,y:n.y}:c.polarToCartesian(n.x,n.y,h,l+(p-l)/2);var A;A=j.normalized.labels&&!c.isFalseyButZero(j.normalized.labels[g])?j.normalized.labels[g]:j.normalized.series[g];var B=a.labelInterpolationFnc(A,g);if(B||0===B){var C=b.elem("text",{dx:z.x,dy:z.y,"text-anchor":d(n,z,a.labelDirection)},a.classNames.label).text(""+B);this.eventEmitter.emit("draw",{type:"label",index:g,group:b,element:C,text:""+B,x:z.x,y:z.y})}}l=p}}.bind(this)),this.eventEmitter.emit("created",{chartRect:e,svg:this.svg,options:a})}function f(a,b,d,e){c.Pie["super"].constructor.call(this,a,b,g,c.extend({},g,d),e)}var g={width:void 0,height:void 0,chartPadding:5,classNames:{chartPie:"ct-chart-pie",chartDonut:"ct-chart-donut",series:"ct-series",slicePie:"ct-slice-pie",sliceDonut:"ct-slice-donut",sliceDonutSolid:"ct-slice-donut-solid",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutSolid:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelPosition:"inside",labelInterpolationFnc:c.noop,labelDirection:"neutral",reverseData:!1,ignoreEmptyValues:!1};c.Pie=c.Base.extend({constructor:f,createChart:e,determineAnchorPosition:d})}(window,document,a),a});
//# sourceMappingURL=chartist.min.js.map

/*
 * arrive.js
 * v2.4.1
 * https://github.com/uzairfarooq/arrive
 * MIT licensed
 *
 * Copyright (c) 2014-2017 Uzair Farooq
 */

var Arrive=function(e,t,n){"use strict";function r(e,t,n){l.addMethod(t,n,e.unbindEvent),l.addMethod(t,n,e.unbindEventWithSelectorOrCallback),l.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function i(e){e.arrive=f.bindEvent,r(f,e,"unbindArrive"),e.leave=d.bindEvent,r(d,e,"unbindLeave")}if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var o=0,l=function(){var t=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector;return{matchesSelector:function(e,n){return e instanceof HTMLElement&&t.call(e,n)},addMethod:function(e,t,r){var i=e[t];e[t]=function(){return r.length==arguments.length?r.apply(this,arguments):"function"==typeof i?i.apply(this,arguments):n}},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback)},checkChildNodesRecursively:function(e,t,n,r){for(var i,o=0;i=e[o];o++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&l.checkChildNodesRecursively(i.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return n===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}}(),c=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},e.prototype.beforeAdding=function(e){this._beforeAdding=e},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e},e}(),a=function(t,r){var i=new c,o=this,a={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,l=n.target;(l===e.document||l===e)&&(l=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n)});var c=t(n.options);i.observe(l,c),n.observer=i,n.me=o}),i.beforeRemoving(function(e){e.observer.disconnect()}),this.bindEvent=function(e,t,n){t=l.mergeArrays(a,t);for(var r=l.toElementsArray(this),o=0;o<r.length;o++)i.addEvent(r[o],e,t,n)},this.unbindEvent=function(){var e=l.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(e){var t,r=l.toElementsArray(this),o=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===o)return!0;return!1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1},i.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=l.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1})},this},s=function(){function e(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t}function t(e,t){e.forEach(function(e){var n=e.addedNodes,i=e.target,o=[];null!==n&&n.length>0?l.checkChildNodesRecursively(n,t,r,o):"attributes"===e.type&&r(i,t,o)&&o.push({callback:t.callback,elem:i}),l.callCallbacks(o,t)})}function r(e,t){return l.matchesSelector(e,t.selector)&&(e._id===n&&(e._id=o++),-1==t.firedElems.indexOf(e._id))?(t.firedElems.push(e._id),!0):!1}var i={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};f=new a(e,t);var c=f.bindEvent;return f.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t);var o=l.toElementsArray(this);if(t.existing){for(var a=[],s=0;s<o.length;s++)for(var u=o[s].querySelectorAll(e),f=0;f<u.length;f++)a.push({callback:r,elem:u[f]});if(t.onceOnly&&a.length)return r.call(a[0].elem,a[0].elem);setTimeout(l.callCallbacks,1,a)}c.call(this,e,t,r)},f},u=function(){function e(){var e={childList:!0,subtree:!0};return e}function t(e,t){e.forEach(function(e){var n=e.removedNodes,i=[];null!==n&&n.length>0&&l.checkChildNodesRecursively(n,t,r,i),l.callCallbacks(i,t)})}function r(e,t){return l.matchesSelector(e,t.selector)}var i={};d=new a(e,t);var o=d.bindEvent;return d.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t),o.call(this,e,t,r)},d},f=new s,d=new u;t&&i(t.fn),i(HTMLElement.prototype),i(NodeList.prototype),i(HTMLCollection.prototype),i(HTMLDocument.prototype),i(Window.prototype);var h={};return r(f,h,"unbindAllArrive"),r(d,h,"unbindAllLeave"),h}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);

/*



     Creative Tim Modifications

     Lines: 236 was changed from top: 5px to top: 50% and we added margin-top: -9px. In this way the close button will be aligned vertically
     Line:219 - modified when the icon is set, we add the class "alert-with-icon", so there will be enough space for the icon.
	 Lines: 179/222 - class() was changed to html() so we can add the Material Design Icons



*/


/*
 * Project: Bootstrap Notify = v3.1.5
 * Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
 * Author: Mouse0270 aka Robert McIntosh
 * License: MIT License
 * Website: https://github.com/mouse0270/bootstrap-growl
 */

/* global define:false, require: false, jQuery:false */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    // Create the defaults once
    var defaults = {
        element: 'body',
        position: null,
        type: "info",
        allow_dismiss: true,
        allow_duplicates: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        timer: 1000,
        url_target: '_blank',
        mouse_over: null,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="material-icons">close</i></button><i data-notify="icon" class="material-icons"></i><span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };

    String.format = function() {
        var str = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            str = str.replace(RegExp("\\{" + (i - 1) + "\\}", "gm"), arguments[i]);
        }
        return str;
    };

    function isDuplicateNotification(notification) {
        var isDupe = false;

        $('[data-notify="container"]').each(function(i, el) {
            var $el = $(el);
            var title = $el.find('[data-notify="title"]').text().trim();
            var message = $el.find('[data-notify="message"]').html().trim();

            // The input string might be different than the actual parsed HTML string!
            // (<br> vs <br /> for example)
            // So we have to force-parse this as HTML here!
            var isSameTitle = title === $("<div>" + notification.settings.content.title + "</div>").html().trim();
            var isSameMsg = message === $("<div>" + notification.settings.content.message + "</div>").html().trim();
            var isSameType = $el.hasClass('alert-' + notification.settings.type);

            if (isSameTitle && isSameMsg && isSameType) {
                //we found the dupe. Set the var and stop checking.
                isDupe = true;
            }
            return !isDupe;
        });

        return isDupe;
    }

    function Notify(element, content, options) {
        // Setup Content of Notify
        var contentObj = {
            content: {
                message: typeof content === 'object' ? content.message : content,
                title: content.title ? content.title : '',
                icon: content.icon ? content.icon : '',
                url: content.url ? content.url : '#',
                target: content.target ? content.target : '-'
            }
        };

        options = $.extend(true, {}, contentObj, options);
        this.settings = $.extend(true, {}, defaults, options);
        this._defaults = defaults;
        if (this.settings.content.target === "-") {
            this.settings.content.target = this.settings.url_target;
        }
        this.animations = {
            start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
            end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
        };

        if (typeof this.settings.offset === 'number') {
            this.settings.offset = {
                x: this.settings.offset,
                y: this.settings.offset
            };
        }

        //if duplicate messages are not allowed, then only continue if this new message is not a duplicate of one that it already showing
        if (this.settings.allow_duplicates || (!this.settings.allow_duplicates && !isDuplicateNotification(this))) {
            this.init();
        }
    }

    $.extend(Notify.prototype, {
        init: function() {
            var self = this;

            this.buildNotify();
            if (this.settings.content.icon) {
                this.setIcon();
            }
            if (this.settings.content.url != "#") {
                this.styleURL();
            }
            this.styleDismiss();
            this.placement();
            this.bind();

            this.notify = {
                $ele: this.$ele,
                update: function(command, update) {
                    var commands = {};
                    if (typeof command === "string") {
                        commands[command] = update;
                    } else {
                        commands = command;
                    }
                    for (var cmd in commands) {
                        switch (cmd) {
                            case "type":
                                this.$ele.removeClass('alert-' + self.settings.type);
                                this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
                                self.settings.type = commands[cmd];
                                this.$ele.addClass('alert-' + commands[cmd]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[cmd]);
                                break;
                            case "icon":
                                var $icon = this.$ele.find('[data-notify="icon"]');
                                if (self.settings.icon_type.toLowerCase() === 'class') {
                                    $icon.html(commands[cmd]);
                                } else {
                                    if (!$icon.is('img')) {
                                        $icon.find('img');
                                    }
                                    $icon.attr('src', commands[cmd]);
                                }
                                break;
                            case "progress":
                                var newDelay = self.settings.delay - (self.settings.delay * (commands[cmd] / 100));
                                this.$ele.data('notify-delay', newDelay);
                                this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[cmd]).css('width', commands[cmd] + '%');
                                break;
                            case "url":
                                this.$ele.find('[data-notify="url"]').attr('href', commands[cmd]);
                                break;
                            case "target":
                                this.$ele.find('[data-notify="url"]').attr('target', commands[cmd]);
                                break;
                            default:
                                this.$ele.find('[data-notify="' + cmd + '"]').html(commands[cmd]);
                        }
                    }
                    var posX = this.$ele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
                    self.reposition(posX);
                },
                close: function() {
                    self.close();
                }
            };

        },
        buildNotify: function() {
            var content = this.settings.content;
            this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
            this.$ele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);
            if (!this.settings.allow_dismiss) {
                this.$ele.find('[data-notify="dismiss"]').css('display', 'none');
            }
            if ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) {
                this.$ele.find('[data-notify="progressbar"]').remove();
            }
        },
        setIcon: function() {

            this.$ele.addClass('alert-with-icon');

            if (this.settings.icon_type.toLowerCase() === 'class') {
                this.$ele.find('[data-notify="icon"]').html(this.settings.content.icon);
            } else {
                if (this.$ele.find('[data-notify="icon"]').is('img')) {
                    this.$ele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
                } else {
                    this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />');
                }
            }
        },
        styleDismiss: function() {
            this.$ele.find('[data-notify="dismiss"]').css({
                position: 'absolute',
                right: '10px',
                top: '50%',
                marginTop: '-9px',
                zIndex: this.settings.z_index + 2
            });
        },
        styleURL: function() {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: this.settings.z_index + 1
            });
        },
        placement: function() {
            var self = this,
                offsetAmt = this.settings.offset.y,
                css = {
                    display: 'inline-block',
                    margin: '15px auto',
                    position: this.settings.position ? this.settings.position : (this.settings.element === 'body' ? 'fixed' : 'absolute'),
                    transition: 'all .5s ease-in-out',
                    zIndex: this.settings.z_index
                },
                hasAnimation = false,
                settings = this.settings;

            $('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
                offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settings.placement.from)) + parseInt($(this).outerHeight()) + parseInt(settings.spacing));
            });
            if (this.settings.newest_on_top === true) {
                offsetAmt = this.settings.offset.y;
            }
            css[this.settings.placement.from] = offsetAmt + 'px';

            switch (this.settings.placement.align) {
                case "left":
                case "right":
                    css[this.settings.placement.align] = this.settings.offset.x + 'px';
                    break;
                case "center":
                    css.left = 0;
                    css.right = 0;
                    break;
            }
            this.$ele.css(css).addClass(this.settings.animate.enter);
            $.each(Array('webkit-', 'moz-', 'o-', 'ms-', ''), function(index, prefix) {
                self.$ele[0].style[prefix + 'AnimationIterationCount'] = 1;
            });

            $(this.settings.element).append(this.$ele);

            if (this.settings.newest_on_top === true) {
                offsetAmt = (parseInt(offsetAmt) + parseInt(this.settings.spacing)) + this.$ele.outerHeight();
                this.reposition(offsetAmt);
            }

            if ($.isFunction(self.settings.onShow)) {
                self.settings.onShow.call(this.$ele);
            }

            this.$ele.one(this.animations.start, function() {
                hasAnimation = true;
            }).one(this.animations.end, function() {
                if ($.isFunction(self.settings.onShown)) {
                    self.settings.onShown.call(this);
                }
            });

            setTimeout(function() {
                if (!hasAnimation) {
                    if ($.isFunction(self.settings.onShown)) {
                        self.settings.onShown.call(this);
                    }
                }
            }, 600);
        },
        bind: function() {
            var self = this;

            this.$ele.find('[data-notify="dismiss"]').on('click', function() {
                self.close();
            });

            this.$ele.mouseover(function() {
                $(this).data('data-hover', "true");
            }).mouseout(function() {
                $(this).data('data-hover', "false");
            });
            this.$ele.data('data-hover', "false");

            if (this.settings.delay > 0) {
                self.$ele.data('notify-delay', self.settings.delay);
                var timer = setInterval(function() {
                    var delay = parseInt(self.$ele.data('notify-delay')) - self.settings.timer;
                    if ((self.$ele.data('data-hover') === 'false' && self.settings.mouse_over === "pause") || self.settings.mouse_over != "pause") {
                        var percent = ((self.settings.delay - delay) / self.settings.delay) * 100;
                        self.$ele.data('notify-delay', delay);
                        self.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
                    }
                    if (delay <= -(self.settings.timer)) {
                        clearInterval(timer);
                        self.close();
                    }
                }, self.settings.timer);
            }
        },
        close: function() {
            var self = this,
                posX = parseInt(this.$ele.css(this.settings.placement.from)),
                hasAnimation = false;

            this.$ele.data('closing', 'true').addClass(this.settings.animate.exit);
            self.reposition(posX);

            if ($.isFunction(self.settings.onClose)) {
                self.settings.onClose.call(this.$ele);
            }

            this.$ele.one(this.animations.start, function() {
                hasAnimation = true;
            }).one(this.animations.end, function() {
                $(this).remove();
                if ($.isFunction(self.settings.onClosed)) {
                    self.settings.onClosed.call(this);
                }
            });

            setTimeout(function() {
                if (!hasAnimation) {
                    self.$ele.remove();
                    if (self.settings.onClosed) {
                        self.settings.onClosed(self.$ele);
                    }
                }
            }, 600);
        },
        reposition: function(posX) {
            var self = this,
                notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
                $elements = this.$ele.nextAll(notifies);
            if (this.settings.newest_on_top === true) {
                $elements = this.$ele.prevAll(notifies);
            }
            $elements.each(function() {
                $(this).css(self.settings.placement.from, posX);
                posX = (parseInt(posX) + parseInt(self.settings.spacing)) + $(this).outerHeight();
            });
        }
    });

    $.notify = function(content, options) {
        var plugin = new Notify(this, content, options);
        return plugin.notify;
    };
    $.notifyDefaults = function(options) {
        defaults = $.extend(true, {}, defaults, options);
        return defaults;
    };
    $.notifyClose = function(command) {
        if (typeof command === "undefined" || command === "all") {
            $('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
        } else {
            $('[data-notify-position="' + command + '"]').find('[data-notify="dismiss"]').trigger('click');
        }
    };

}));
$().ready(function(){
  $sidebar = $('.sidebar');
  $sidebar_img_container = $sidebar.find('.sidebar-background');

  $full_page = $('.full-page');

  $sidebar_responsive = $('body > .navbar-collapse');

  window_width = $(window).width();

  fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

  if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
      if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
          $('.fixed-plugin .dropdown').addClass('open');
      }

  }

  $('.fixed-plugin a').click(function(event) {
      // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
      if ($(this).hasClass('switch-trigger')) {
          if (event.stopPropagation) {
              event.stopPropagation();
          } else if (window.event) {
              window.event.cancelBubble = true;
          }
      }
  });

  $('.fixed-plugin .active-color span').click(function() {
      $full_page_background = $('.full-page-background');

      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      var new_color = $(this).data('color');

      if ($sidebar.length != 0) {
          $sidebar.attr('data-color', new_color);
      }

      if ($full_page.length != 0) {
          $full_page.attr('filter-color', new_color);
      }

      if ($sidebar_responsive.length != 0) {
          $sidebar_responsive.attr('data-color', new_color);
      }
  });

  $('.fixed-plugin .background-color span').click(function() {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      var new_color = $(this).data('color');

      if ($sidebar.length != 0) {
          $sidebar.attr('data-background-color', new_color);
      }
  });

  $('.fixed-plugin .img-holder').click(function() {
      $full_page_background = $('.full-page-background');

      $(this).parent('li').siblings().removeClass('active');
      $(this).parent('li').addClass('active');


      var new_image = $(this).find("img").attr('src');

      if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
          $sidebar_img_container.fadeOut('fast', function() {
              $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
              $sidebar_img_container.fadeIn('fast');
          });
      }

      if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
          var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

          $full_page_background.fadeOut('fast', function() {
              $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
              $full_page_background.fadeIn('fast');
          });
      }

      if ($('.switch-sidebar-image input:checked').length == 0) {
          var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
          var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

          $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
          $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
      }

      if ($sidebar_responsive.length != 0) {
          $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
      }
  });

  $('.switch-sidebar-image input').change(function() {
      $full_page_background = $('.full-page-background');

      $input = $(this);

      if ($input.is(':checked')) {
          if ($sidebar_img_container.length != 0) {
              $sidebar_img_container.fadeIn('fast');
              $sidebar.attr('data-image', '#');
          }

          if ($full_page_background.length != 0) {
              $full_page_background.fadeIn('fast');
              $full_page.attr('data-image', '#');
          }

          background_image = true;
      } else {
          if ($sidebar_img_container.length != 0) {
              $sidebar.removeAttr('data-image');
              $sidebar_img_container.fadeOut('fast');
          }

          if ($full_page_background.length != 0) {
              $full_page.removeAttr('data-image', '#');
              $full_page_background.fadeOut('fast');
          }

          background_image = false;
      }
  });

  $('.switch-sidebar-mini input').change(function() {
      $body = $('body');

      $input = $(this);

      if (md.misc.sidebar_mini_active == true) {
          $('body').removeClass('sidebar-mini');
          md.misc.sidebar_mini_active = false;

          $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

      } else {

          $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');

          setTimeout(function() {
              $('body').addClass('sidebar-mini');

              md.misc.sidebar_mini_active = true;
          }, 300);
      }

      // we simulate the window Resize so the charts will get updated in realtime.
      var simulateWindowResize = setInterval(function() {
          window.dispatchEvent(new Event('resize'));
      }, 180);

      // we stop the simulation of Window Resize after the animations are completed
      setTimeout(function() {
          clearInterval(simulateWindowResize);
      }, 1000);

  });


});

var demo = {

      initContactUsMap: function(){
           var myLatlng = new google.maps.LatLng(44.433530, 26.093928);
           var mapOptions = {
             zoom: 14,
             center: myLatlng,
             styles:
   [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}],
             scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          };
           var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);

           var marker = new google.maps.Marker({
               position: myLatlng,
               title:"Hello World!"
           });
           marker.setMap(map);
       },

       initContactUs2Map: function(){
           var lat = 44.433530;
           var long = 26.093928;

           var centerLong = long - 0.025;

           var myLatlng = new google.maps.LatLng(lat,long);
           var centerPosition = new google.maps.LatLng(lat, centerLong);

           var mapOptions = {
             zoom: 14,
             center: centerPosition,
             styles:
   [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}],
             scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          };
           var map = new google.maps.Map(document.getElementById("contactUs2Map"), mapOptions);

           var marker = new google.maps.Marker({
               position: myLatlng,
               title:"Hello World!"
           });
           marker.setMap(map);
       },

       presentationAnimations: function(){
           $(function() {

             var $window           = $(window),
                 isTouch           = Modernizr.touch;

             if (isTouch) { $('.add-animation').addClass('animated'); }

             $window.on('scroll', revealAnimation);

             function revealAnimation() {
               // Showed...
               $(".add-animation:not(.animated)").each(function () {
                 var $this     = $(this),
                     offsetTop = $this.offset().top,
                     scrolled = $window.scrollTop(),
                     win_height_padded = $window.height();
                 if (scrolled + win_height_padded > offsetTop) {
                     $this.addClass('animated');
                 }
               });
               // Hidden...
              $(".add-animation.animated").each(function (index) {
                 var $this     = $(this),
                     offsetTop = $this.offset().top;
                     scrolled = $window.scrollTop(),
                     windowHeight = $window.height();

                     win_height_padded = windowHeight * 0.8;
                 if (scrolled + win_height_padded < offsetTop) {
                   $(this).removeClass('animated')
                 }
               });
             }

             revealAnimation();
           });

       },


    initPickColor: function() {
      $('.pick-class-label').click(function() {
          var new_class = $(this).attr('new-class');
          var old_class = $('#display-buttons').attr('data-class');
          var display_div = $('#display-buttons');
          if (display_div.length) {
              var display_buttons = display_div.find('.btn');
              display_buttons.removeClass(old_class);
              display_buttons.addClass(new_class);
              display_div.attr('data-class', new_class);
          }
      });
    },

    checkFullPageBackgroundImage: function() {
      $page = $('.full-page');
      image_src = $page.data('image');

      if (image_src !== undefined) {
          image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
          $page.append(image_container);
      }
    },

    initMaterialWizard: function() {
      // Code for the Validator
      var $validator = $('.card-wizard form').validate({
          rules: {
              firstname: {
                  required: true,
                  minlength: 3
              },
              lastname: {
                  required: true,
                  minlength: 3
              },
              email: {
                  required: true,
                  minlength: 3,
              }
          },

          errorPlacement: function(error, element) {
              $(element).parent('div').addClass('has-danger');
          }
      });

      // Wizard Initialization
      $('.card-wizard').bootstrapWizard({
          'tabClass': 'nav nav-pills',
          'nextSelector': '.btn-next',
          'previousSelector': '.btn-previous',

          onNext: function(tab, navigation, index) {
              var $valid = $('.card-wizard form').valid();
              if (!$valid) {
                  $validator.focusInvalid();
                  return false;
              }
          },

          onInit: function(tab, navigation, index) {
              //check number of tabs and fill the entire row
              var $total = navigation.find('li').length;
              var $wizard = navigation.closest('.card-wizard');

              $first_li = navigation.find('li:first-child a').html();
              $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
              $('.card-wizard .wizard-navigation').append($moving_div);

              refreshAnimation($wizard, index);

              $('.moving-tab').css('transition', 'transform 0s');
          },

          onTabClick: function(tab, navigation, index) {
              var $valid = $('.card-wizard form').valid();

              if (!$valid) {
                  return false;
              } else {
                  return true;
              }
          },

          onTabShow: function(tab, navigation, index) {
              var $total = navigation.find('li').length;
              var $current = index + 1;

              var $wizard = navigation.closest('.card-wizard');

              // If it's the last tab then hide the last button and show the finish instead
              if ($current >= $total) {
                  $($wizard).find('.btn-next').hide();
                  $($wizard).find('.btn-finish').show();
              } else {
                  $($wizard).find('.btn-next').show();
                  $($wizard).find('.btn-finish').hide();
              }

              button_text = navigation.find('li:nth-child(' + $current + ') a').html();

              setTimeout(function() {
                  $('.moving-tab').text(button_text);
              }, 150);

              var checkbox = $('.footer-checkbox');

              if (!index == 0) {
                  $(checkbox).css({
                      'opacity': '0',
                      'visibility': 'hidden',
                      'position': 'absolute'
                  });
              } else {
                  $(checkbox).css({
                      'opacity': '1',
                      'visibility': 'visible'
                  });
              }

              refreshAnimation($wizard, index);
          }
        });


        // Prepare the preview for profile picture
        $("#wizard-picture").change(function() {
            readURL(this);
        });

        $('[data-toggle="wizard-radio"]').click(function() {
            wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });

        $('[data-toggle="wizard-checkbox"]').click(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            } else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });

        $('.set-full-height').css('height', 'auto');

        //Function to show image before upload

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        $(window).resize(function() {
            $('.card-wizard').each(function() {
                $wizard = $(this);

                index = $wizard.bootstrapWizard('currentIndex');
                refreshAnimation($wizard, index);

                $('.moving-tab').css({
                    'transition': 'transform 0s'
                });
            });
        });

        function refreshAnimation($wizard, index) {
            $total = $wizard.find('.nav li').length;
            $li_width = 100 / $total;

            total_steps = $wizard.find('.nav li').length;
            move_distance = $wizard.width() / total_steps;
            index_temp = index;
            vertical_level = 0;

            mobile_device = $(document).width() < 600 && $total > 3;

            if (mobile_device) {
                move_distance = $wizard.width() / 2;
                index_temp = index % 2;
                $li_width = 50;
            }

            $wizard.find('.nav li').css('width', $li_width + '%');

            step_width = move_distance;
            move_distance = move_distance * index_temp;

            $current = index + 1;

            if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                move_distance -= 8;
            } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                move_distance += 8;
            }

            if (mobile_device) {
                vertical_level = parseInt(index / 2);
                vertical_level = vertical_level * 38;
            }

            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
                'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

            });
        }
    },


    initDocumentationCharts: function() {
        if ($('#dailySalesChart').length != 0 && $('#websiteViewsChart').length != 0) {
            /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

            dataDailySalesChart = {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                series: [
                    [12, 17, 7, 17, 23, 18, 38]
                ]
            };

            optionsDailySalesChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            }

            var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

            var animationHeaderChart = new Chartist.Line('#websiteViewsChart', dataDailySalesChart, optionsDailySalesChart);
        }
    },

    initCharts: function() {
        if ($('#roundedLineChart').length != 0 && $('#straightLinesChart').length != 0 && $('#colouredRoundedLineChart').length != 0 && $('#colouredBarsChart').length != 0 && $('#simpleBarChart').length != 0 && $('#multipleBarsChart').length != 0) {
            /* ----------==========    Rounded Line Chart initialization    ==========---------- */

            dataRoundedLineChart = {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                series: [
                    [12, 17, 7, 17, 23, 18, 38]
                ]
            };

            optionsRoundedLineChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 10
                }),
                axisX: {
                    showGrid: false,
                },
                low: 0,
                high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                showPoint: false
            }

            var RoundedLineChart = new Chartist.Line('#roundedLineChart', dataRoundedLineChart, optionsRoundedLineChart);

            md.startAnimationForLineChart(RoundedLineChart);


            /*  **************** Straight Lines Chart - single line with points ******************** */

            dataStraightLinesChart = {
                labels: ['\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
                series: [
                    [10, 16, 8, 13, 20, 15, 20, 34, 30]
                ]
            };

            optionsStraightLinesChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                classNames: {
                    point: 'ct-point ct-white',
                    line: 'ct-line ct-white'
                }
            }

            var straightLinesChart = new Chartist.Line('#straightLinesChart', dataStraightLinesChart, optionsStraightLinesChart);

            md.startAnimationForLineChart(straightLinesChart);


            /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */


            dataColouredRoundedLineChart = {
                labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
                series: [
                    [287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944]
                ]
            };

            optionsColouredRoundedLineChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 10
                }),
                axisY: {
                    showGrid: true,
                    offset: 40
                },
                axisX: {
                    showGrid: false,
                },
                low: 0,
                high: 1000,
                showPoint: true,
                height: '300px'
            };


            var colouredRoundedLineChart = new Chartist.Line('#colouredRoundedLineChart', dataColouredRoundedLineChart, optionsColouredRoundedLineChart);

            md.startAnimationForLineChart(colouredRoundedLineChart);


            /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */


            dataColouredBarsChart = {
                labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
                series: [
                    [287, 385, 490, 554, 586, 698, 695, 752, 788, 846, 944],
                    [67, 152, 143, 287, 335, 435, 437, 539, 542, 544, 647],
                    [23, 113, 67, 190, 239, 307, 308, 439, 410, 410, 509]
                ]
            };

            optionsColouredBarsChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 10
                }),
                axisY: {
                    showGrid: true,
                    offset: 40
                },
                axisX: {
                    showGrid: false,
                },
                low: 0,
                high: 1000,
                showPoint: true,
                height: '300px'
            };


            var colouredBarsChart = new Chartist.Line('#colouredBarsChart', dataColouredBarsChart, optionsColouredBarsChart);

            md.startAnimationForLineChart(colouredBarsChart);



            /*  **************** Public Preferences - Pie Chart ******************** */

            var dataPreferences = {
                labels: ['62%', '32%', '6%'],
                series: [62, 32, 6]
            };

            var optionsPreferences = {
                height: '230px'
            };

            Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

            /*  **************** Simple Bar Chart - barchart ******************** */

            var dataSimpleBarChart = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
                ]
            };

            var optionsSimpleBarChart = {
                seriesBarDistance: 10,
                axisX: {
                    showGrid: false
                }
            };

            var responsiveOptionsSimpleBarChart = [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function(value) {
                            return value[0];
                        }
                    }
                }]
            ];

            var simpleBarChart = Chartist.Bar('#simpleBarChart', dataSimpleBarChart, optionsSimpleBarChart, responsiveOptionsSimpleBarChart);

            //start animation for the Emails Subscription Chart
            md.startAnimationForBarChart(simpleBarChart);


            var dataMultipleBarsChart = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
                ]
            };

            var optionsMultipleBarsChart = {
                seriesBarDistance: 10,
                axisX: {
                    showGrid: false
                },
                height: '300px'
            };

            var responsiveOptionsMultipleBarsChart = [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function(value) {
                            return value[0];
                        }
                    }
                }]
            ];

            var multipleBarsChart = Chartist.Bar('#multipleBarsChart', dataMultipleBarsChart, optionsMultipleBarsChart, responsiveOptionsMultipleBarsChart);

            //start animation for the Emails Subscription Chart
            md.startAnimationForBarChart(multipleBarsChart);
        }

    },

    initDashboardPageCharts: function() {

        if ($('#dailySalesChart').length != 0 || $('#completedTasksChart').length != 0 || $('#websiteViewsChart').length != 0) {
            /* ----------==========     Daily Sales Chart initialization    ==========---------- */

            dataDailySalesChart = {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                series: [
                    [12, 17, 7, 17, 23, 18, 38]
                ]
            };

            optionsDailySalesChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            }

            var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

            md.startAnimationForLineChart(dailySalesChart);



            /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

            dataCompletedTasksChart = {
                labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
                series: [
                    [230, 750, 450, 300, 280, 240, 200, 190]
                ]
            };

            optionsCompletedTasksChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

            // start animation for the Completed Tasks Chart - Line Chart
            md.startAnimationForLineChart(completedTasksChart);


            /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

            var dataWebsiteViewsChart = {
                labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                series: [
                    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

                ]
            };
            var optionsWebsiteViewsChart = {
                axisX: {
                    showGrid: false
                },
                low: 0,
                high: 1000,
                chartPadding: {
                    top: 0,
                    right: 5,
                    bottom: 0,
                    left: 0
                }
            };
            var responsiveOptions = [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function(value) {
                            return value[0];
                        }
                    }
                }]
            ];
            var websiteViewsChart = Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

            //start animation for the Emails Subscription Chart
            md.startAnimationForBarChart(websiteViewsChart);
        }
    },

    showSwal: function(type) {
        if (type == 'basic') {
            swal({
                title: "Here's a message!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            }).catch(swal.noop)

        } else if (type == 'title-and-text') {
            swal({
                title: "Here's a message!",
                text: "It's pretty, isn't it?",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-info"
            }).catch(swal.noop)

        } else if (type == 'success-message') {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                type: "success"
            }).catch(swal.noop)

        } else if (type == 'warning-message-and-confirmation') {
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes, delete it!',
                buttonsStyling: false
            }).then(function() {
                swal({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    type: 'success',
                    confirmButtonClass: "btn btn-success",
                    buttonsStyling: false
                })
            }).catch(swal.noop)
        } else if (type == 'warning-message-and-cancel') {
            swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                buttonsStyling: false
            }).then(function() {
                swal({
                    title: 'Deleted!',
                    text: 'Your imaginary file has been deleted.',
                    type: 'success',
                    confirmButtonClass: "btn btn-success",
                    buttonsStyling: false
                }).catch(swal.noop)
            }, function(dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    swal({
                        title: 'Cancelled',
                        text: 'Your imaginary file is safe :)',
                        type: 'error',
                        confirmButtonClass: "btn btn-info",
                        buttonsStyling: false
                    }).catch(swal.noop)
                }
            })

        } else if (type == 'custom-html') {
            swal({
                title: 'HTML example',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="http://github.com">links</a> ' +
                    'and other HTML tags'
            }).catch(swal.noop)

        } else if (type == 'auto-close') {
            swal({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            }).catch(swal.noop)
        } else if (type == 'input-field') {
            swal({
                title: 'Input something',
                html: '<div class="form-group">' +
                    '<input id="input-field" type="text" class="form-control" />' +
                    '</div>',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function(result) {
                swal({
                    type: 'success',
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false

                })
            }).catch(swal.noop)
        }
    },

    initVectorMap: function() {
        var mapData = {
            "AU": 760,
            "BR": 550,
            "CA": 120,
            "DE": 1300,
            "FR": 540,
            "GB": 690,
            "GE": 200,
            "IN": 200,
            "RO": 600,
            "RU": 300,
            "US": 2920,
        };

        $('#worldMap').vectorMap({
            map: 'world_mill_en',
            backgroundColor: "transparent",
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 0.9,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                }
            },

            series: {
                regions: [{
                    values: mapData,
                    scale: ["#AAAAAA", "#444444"],
                    normalizeFunction: 'polynomial'
                }]
            },
        });
    },

    initGoogleMaps: function() {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                "featureType": "water",
                "stylers": [{
                    "saturation": 43
                }, {
                    "lightness": -11
                }, {
                    "hue": "#0088ff"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "hue": "#ff0000"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 99
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "lightness": 54
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ece2d9"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ccdca1"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#767676"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b8cb93"
                }]
            }, {
                "featureType": "poi.park",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.medical",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }]

        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    initSmallGoogleMaps: function() {

        // Regular Map
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 8,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        };

        var map = new google.maps.Map(document.getElementById("regularMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Regular Map!"
        });

        marker.setMap(map);


        // Custom Skin & Settings Map
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            disableDefaultUI: true, // a way to quickly hide all controls
            zoomControl: true,
            styles: [{
                "featureType": "water",
                "stylers": [{
                    "saturation": 43
                }, {
                    "lightness": -11
                }, {
                    "hue": "#0088ff"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "hue": "#ff0000"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 99
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "lightness": 54
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ece2d9"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ccdca1"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#767676"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b8cb93"
                }]
            }, {
                "featureType": "poi.park",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.medical",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }]

        }

        var map = new google.maps.Map(document.getElementById("customSkinMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Custom Skin & Settings Map!"
        });

        marker.setMap(map);



        // Satellite Map
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 3,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        }

        var map = new google.maps.Map(document.getElementById("satelliteMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Satellite Map!"
        });

        marker.setMap(map);


    },

    initFullCalendar: function() {
        $calendar = $('#fullCalendar');

        today = new Date();
        y = today.getFullYear();
        m = today.getMonth();
        d = today.getDate();

        $calendar.fullCalendar({
            viewRender: function(view, element) {
                // We make sure that we activate the perfect scrollbar when the view isn't on Month
                if (view.name != 'month') {
                    $(element).find('.fc-scroller').perfectScrollbar();
                }
            },
            header: {
                left: 'title',
                center: 'month,agendaWeek,agendaDay',
                right: 'prev,next,today'
            },
            defaultDate: today,
            selectable: true,
            selectHelper: true,
            views: {
                month: { // name of view
                    titleFormat: 'MMMM YYYY'
                    // other view-specific options here
                },
                week: {
                    titleFormat: " MMMM D YYYY"
                },
                day: {
                    titleFormat: 'D MMM, YYYY'
                }
            },

            select: function(start, end) {

                // on select we show the Sweet Alert modal with an input
                swal({
                    title: 'Create an Event',
                    html: '<div class="form-group">' +
                        '<input class="form-control" placeholder="Event Title" id="input-field">' +
                        '</div>',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function(result) {

                    var eventData;
                    event_title = $('#input-field').val();

                    if (event_title) {
                        eventData = {
                            title: event_title,
                            start: start,
                            end: end
                        };
                        $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                    }

                    $calendar.fullCalendar('unselect');

                });
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events


            // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
            events: [{
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    className: 'event-default'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d - 4, 6, 0),
                    allDay: false,
                    className: 'event-rose'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 3, 6, 0),
                    allDay: false,
                    className: 'event-rose'
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d - 1, 10, 30),
                    allDay: false,
                    className: 'event-green'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d + 7, 12, 0),
                    end: new Date(y, m, d + 7, 14, 0),
                    allDay: false,
                    className: 'event-red'
                },
                {
                    title: 'Md-pro Launch',
                    start: new Date(y, m, d - 2, 12, 0),
                    allDay: true,
                    className: 'event-azure'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    className: 'event-azure'
                },
                {
                    title: 'Click for Creative Tim',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'http://www.creative-tim.com/',
                    className: 'event-orange'
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'http://www.creative-tim.com/',
                    className: 'event-orange'
                }
            ]
        });
    },

    showNotification: function(from, align) {
        type = ['', 'info', 'danger','success', 'warning', 'rose', 'primary'];

        color = Math.floor((Math.random() * 6) + 1);

        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 3000,
            placement: {
                from: from,
                align: align
            }
        });
    }
};

/*
 * Copyright (C) pasonatech 2017
 * bootstrap-material-design
 */
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?t(require('jquery'),require('popper.js')):'function'==typeof define&&define.amd?define(['jquery','popper.js'],t):t(e.jQuery,e.Popper)})(this,function(e,t){'use strict';function n(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function a(){return a=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var i=Math.max;e=e&&e.hasOwnProperty('default')?e['default']:e,t=t&&t.hasOwnProperty('default')?t['default']:t;var l=function(e){function t(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(){return{bindType:i.end,delegateType:i.end,handle:function(t){return e(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}}}function o(){return'undefined'!=typeof window&&window.QUnit?!1:{end:'transitionend'}}function a(t){var n=this,o=!1;return e(this).one(l.TRANSITION_END,function(){o=!0}),setTimeout(function(){o||l.triggerTransitionEnd(n)},t),this}function r(t){return t='function'==typeof e.escapeSelector?e.escapeSelector(t).substr(1):t.replace(/(:|\.|\[|\]|,|=|@)/g,'\\$1'),t}var i=!1,l={TRANSITION_END:'bsTransitionEnd',getUID:function(e){do e+=~~(Math.random()*1e6);while(document.getElementById(e));return e},getSelectorFromElement:function(t){var n=t.getAttribute('data-target');n&&'#'!==n||(n=t.getAttribute('href')||''),'#'===n.charAt(0)&&(n=r(n));try{var o=e(document).find(n);return 0<o.length?n:null}catch(e){return null}},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(i.end)},supportsTransitionEnd:function(){return!!i},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,n,o){for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)){var r=o[a],i=n[a],s=i&&l.isElement(i)?'element':t(i);if(!new RegExp(r).test(s))throw new Error(e.toUpperCase()+': '+('Option "'+a+'" provided type "'+s+'" ')+('but expected type "'+r+'".'))}}};return function(){i=o(),e.fn.emulateTransitionEnd=a,l.supportsTransitionEnd()&&(e.event.special[l.TRANSITION_END]=n())}(),l}(e),s=function(e){var t='alert',n='bs.alert',a='.'+n,r=e.fn[t],i={CLOSE:'close'+a,CLOSED:'closed'+a,CLICK_DATA_API:'click'+a+'.data-api'},s={ALERT:'alert',FADE:'fade',SHOW:'show'},d=function(){function t(e){this._element=e}var a=t.prototype;return a.close=function(e){e=e||this._element;var t=this._getRootElement(e),n=this._triggerCloseEvent(t);n.isDefaultPrevented()||this._removeElement(t)},a.dispose=function(){e.removeData(this._element,n),this._element=null},a._getRootElement=function(t){var n=l.getSelectorFromElement(t),o=!1;return n&&(o=e(n)[0]),o||(o=e(t).closest('.'+s.ALERT)[0]),o},a._triggerCloseEvent=function(t){var n=e.Event(i.CLOSE);return e(t).trigger(n),n},a._removeElement=function(t){var n=this;return e(t).removeClass(s.SHOW),l.supportsTransitionEnd()&&e(t).hasClass(s.FADE)?void e(t).one(l.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(150):void this._destroyElement(t)},a._destroyElement=function(t){e(t).detach().trigger(i.CLOSED).remove()},t._jQueryInterface=function(o){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new t(this),a.data(n,r)),'close'===o&&r[o](this)})},t._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(t,null,[{key:'VERSION',get:function(){return'4.0.0'}}]),t}();return e(document).on(i.CLICK_DATA_API,{DISMISS:'[data-dismiss="alert"]'}.DISMISS,d._handleDismiss(new d)),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=r,d._jQueryInterface},d}(e),d=function(e){var t='button',n='bs.button',a='.'+n,r='.data-api',i=e.fn[t],l={ACTIVE:'active',BUTTON:'btn',FOCUS:'focus'},s={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:'input',ACTIVE:'.active',BUTTON:'.btn'},d={CLICK_DATA_API:'click'+a+r,FOCUS_BLUR_DATA_API:'focus'+a+r+' '+('blur'+a+r)},c=function(){function t(e){this._element=e}var a=t.prototype;return a.toggle=function(){var t=!0,n=!0,o=e(this._element).closest(s.DATA_TOGGLE)[0];if(o){var a=e(this._element).find(s.INPUT)[0];if(a){if('radio'===a.type)if(a.checked&&e(this._element).hasClass(l.ACTIVE))t=!1;else{var r=e(o).find(s.ACTIVE)[0];r&&e(r).removeClass(l.ACTIVE)}if(t){if(a.hasAttribute('disabled')||o.hasAttribute('disabled')||a.classList.contains('disabled')||o.classList.contains('disabled'))return;a.checked=!e(this._element).hasClass(l.ACTIVE),e(a).trigger('change')}a.focus(),n=!1}}n&&this._element.setAttribute('aria-pressed',!e(this._element).hasClass(l.ACTIVE)),t&&e(this._element).toggleClass(l.ACTIVE)},a.dispose=function(){e.removeData(this._element,n),this._element=null},t._jQueryInterface=function(o){return this.each(function(){var a=e(this).data(n);a||(a=new t(this),e(this).data(n,a)),'toggle'===o&&a[o]()})},o(t,null,[{key:'VERSION',get:function(){return'4.0.0'}}]),t}();return e(document).on(d.CLICK_DATA_API,s.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var n=t.target;e(n).hasClass(l.BUTTON)||(n=e(n).closest(s.BUTTON)),c._jQueryInterface.call(e(n),'toggle')}).on(d.FOCUS_BLUR_DATA_API,s.DATA_TOGGLE_CARROT,function(t){var n=e(t.target).closest(s.BUTTON)[0];e(n).toggleClass(l.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[t]=c._jQueryInterface,e.fn[t].Constructor=c,e.fn[t].noConflict=function(){return e.fn[t]=i,c._jQueryInterface},c}(e),c=function(e){var t='carousel',n='bs.carousel',r='.'+n,i='.data-api',s=e.fn[t],d={interval:5e3,keyboard:!0,slide:!1,pause:'hover',wrap:!0},c={interval:'(number|boolean)',keyboard:'boolean',slide:'(boolean|string)',pause:'(string|boolean)',wrap:'boolean'},_={NEXT:'next',PREV:'prev',LEFT:'left',RIGHT:'right'},p={SLIDE:'slide'+r,SLID:'slid'+r,KEYDOWN:'keydown'+r,MOUSEENTER:'mouseenter'+r,MOUSELEAVE:'mouseleave'+r,TOUCHEND:'touchend'+r,LOAD_DATA_API:'load'+r+i,CLICK_DATA_API:'click'+r+i},m={CAROUSEL:'carousel',ACTIVE:'active',SLIDE:'slide',RIGHT:'carousel-item-right',LEFT:'carousel-item-left',NEXT:'carousel-item-next',PREV:'carousel-item-prev',ITEM:'carousel-item'},g={ACTIVE:'.active',ACTIVE_ITEM:'.active.carousel-item',ITEM:'.carousel-item',NEXT_PREV:'.carousel-item-next, .carousel-item-prev',INDICATORS:'.carousel-indicators',DATA_SLIDE:'[data-slide], [data-slide-to]',DATA_RIDE:'[data-ride="carousel"]'},f=function(){function i(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(g.INDICATORS)[0],this._addEventListeners()}var s=i.prototype;return s.next=function(){this._isSliding||this._slide(_.NEXT)},s.nextWhenVisible=function(){!document.hidden&&e(this._element).is(':visible')&&'hidden'!==e(this._element).css('visibility')&&this.next()},s.prev=function(){this._isSliding||this._slide(_.PREV)},s.pause=function(t){t||(this._isPaused=!0),e(this._element).find(g.NEXT_PREV)[0]&&l.supportsTransitionEnd()&&(l.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},s.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},s.to=function(t){var n=this;this._activeElement=e(this._element).find(g.ACTIVE_ITEM)[0];var o=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||0>t)){if(this._isSliding)return void e(this._element).one(p.SLID,function(){return n.to(t)});if(o===t)return this.pause(),void this.cycle();var a=t>o?_.NEXT:_.PREV;this._slide(a,this._items[t])}},s.dispose=function(){e(this._element).off(r),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},s._getConfig=function(e){return e=a({},d,e),l.typeCheckConfig(t,e,c),e},s._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(p.KEYDOWN,function(e){return t._keydown(e)}),'hover'===this._config.pause&&(e(this._element).on(p.MOUSEENTER,function(e){return t.pause(e)}).on(p.MOUSELEAVE,function(e){return t.cycle(e)}),'ontouchstart'in document.documentElement&&e(this._element).on(p.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},s._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next();break;default:}},s._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(g.ITEM)),this._items.indexOf(t)},s._getItemByDirection=function(e,t){var n=e===_.NEXT,o=e===_.PREV,a=this._getItemIndex(t),r=this._items.length-1;if((o&&0===a||n&&a===r)&&!this._config.wrap)return t;var i=e===_.PREV?-1:1,l=(a+i)%this._items.length;return-1==l?this._items[this._items.length-1]:this._items[l]},s._triggerSlideEvent=function(t,n){var o=this._getItemIndex(t),a=this._getItemIndex(e(this._element).find(g.ACTIVE_ITEM)[0]),r=e.Event(p.SLIDE,{relatedTarget:t,direction:n,from:a,to:o});return e(this._element).trigger(r),r},s._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(g.ACTIVE).removeClass(m.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&e(n).addClass(m.ACTIVE)}},s._slide=function(t,n){var o,a,r,i=this,s=e(this._element).find(g.ACTIVE_ITEM)[0],d=this._getItemIndex(s),c=n||s&&this._getItemByDirection(t,s),f=this._getItemIndex(c),u=!!this._interval;if(t===_.NEXT?(o=m.LEFT,a=m.NEXT,r=_.LEFT):(o=m.RIGHT,a=m.PREV,r=_.RIGHT),c&&e(c).hasClass(m.ACTIVE))return void(this._isSliding=!1);var E=this._triggerSlideEvent(c,r);if(!E.isDefaultPrevented()&&s&&c){this._isSliding=!0,u&&this.pause(),this._setActiveIndicatorElement(c);var h=e.Event(p.SLID,{relatedTarget:c,direction:r,from:d,to:f});l.supportsTransitionEnd()&&e(this._element).hasClass(m.SLIDE)?(e(c).addClass(a),l.reflow(c),e(s).addClass(o),e(c).addClass(o),e(s).one(l.TRANSITION_END,function(){e(c).removeClass(o+' '+a).addClass(m.ACTIVE),e(s).removeClass(m.ACTIVE+' '+a+' '+o),i._isSliding=!1,setTimeout(function(){return e(i._element).trigger(h)},0)}).emulateTransitionEnd(600)):(e(s).removeClass(m.ACTIVE),e(c).addClass(m.ACTIVE),this._isSliding=!1,e(this._element).trigger(h)),u&&this.cycle()}},i._jQueryInterface=function(t){return this.each(function(){var o=e(this).data(n),r=a({},d,e(this).data());'object'==typeof t&&(r=a({},r,t));var l='string'==typeof t?t:r.slide;if(o||(o=new i(this,r),e(this).data(n,o)),'number'==typeof t)o.to(t);else if('string'==typeof l){if('undefined'==typeof o[l])throw new TypeError('No method named "'+l+'"');o[l]()}else r.interval&&(o.pause(),o.cycle())})},i._dataApiClickHandler=function(t){var o=l.getSelectorFromElement(this);if(o){var r=e(o)[0];if(r&&e(r).hasClass(m.CAROUSEL)){var s=a({},e(r).data(),e(this).data()),d=this.getAttribute('data-slide-to');d&&(s.interval=!1),i._jQueryInterface.call(e(r),s),d&&e(r).data(n).to(d),t.preventDefault()}}},o(i,null,[{key:'VERSION',get:function(){return'4.0.0'}},{key:'Default',get:function(){return d}}]),i}();return e(document).on(p.CLICK_DATA_API,g.DATA_SLIDE,f._dataApiClickHandler),e(window).on(p.LOAD_DATA_API,function(){e(g.DATA_RIDE).each(function(){var t=e(this);f._jQueryInterface.call(t,t.data())})}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=s,f._jQueryInterface},f}(e),_=function(e){var t='collapse',n='bs.collapse',r='.'+n,i=e.fn[t],s=600,d={toggle:!0,parent:''},c={toggle:'boolean',parent:'(string|element)'},_={SHOW:'show'+r,SHOWN:'shown'+r,HIDE:'hide'+r,HIDDEN:'hidden'+r,CLICK_DATA_API:'click'+r+'.data-api'},p={SHOW:'show',COLLAPSE:'collapse',COLLAPSING:'collapsing',COLLAPSED:'collapsed'},m={WIDTH:'width',HEIGHT:'height'},g={ACTIVES:'.show, .collapsing',DATA_TOGGLE:'[data-toggle="collapse"]'},f=function(){function r(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],'+('[data-toggle="collapse"][data-target="#'+t.id+'"]')));for(var o=e(g.DATA_TOGGLE),a=0;a<o.length;a++){var r=o[a],i=l.getSelectorFromElement(r);null!==i&&0<e(i).filter(t).length&&(this._selector=i,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var i=r.prototype;return i.toggle=function(){e(this._element).hasClass(p.SHOW)?this.hide():this.show()},i.show=function(){var t=this;if(!(this._isTransitioning||e(this._element).hasClass(p.SHOW))){var o,a;if(this._parent&&(o=e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="'+this._config.parent+'"]')),0===o.length&&(o=null)),!(o&&(a=e(o).not(this._selector).data(n),a&&a._isTransitioning))){var i=e.Event(_.SHOW);if(e(this._element).trigger(i),!i.isDefaultPrevented()){o&&(r._jQueryInterface.call(e(o).not(this._selector),'hide'),!a&&e(o).data(n,null));var d=this._getDimension();e(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING),this._element.style[d]=0,0<this._triggerArray.length&&e(this._triggerArray).removeClass(p.COLLAPSED).attr('aria-expanded',!0),this.setTransitioning(!0);var c=function(){e(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.SHOW),t._element.style[d]='',t.setTransitioning(!1),e(t._element).trigger(_.SHOWN)};if(!l.supportsTransitionEnd())return void c();var m=d[0].toUpperCase()+d.slice(1);e(this._element).one(l.TRANSITION_END,c).emulateTransitionEnd(s),this._element.style[d]=this._element['scroll'+m]+'px'}}}},i.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(p.SHOW)){var n=e.Event(_.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var o=this._getDimension();if(this._element.style[o]=this._element.getBoundingClientRect()[o]+'px',l.reflow(this._element),e(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.SHOW),0<this._triggerArray.length)for(var a=0;a<this._triggerArray.length;a++){var r=this._triggerArray[a],i=l.getSelectorFromElement(r);if(null!==i){var d=e(i);d.hasClass(p.SHOW)||e(r).addClass(p.COLLAPSED).attr('aria-expanded',!1)}}this.setTransitioning(!0);var c=function(){t.setTransitioning(!1),e(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(_.HIDDEN)};return this._element.style[o]='',l.supportsTransitionEnd()?void e(this._element).one(l.TRANSITION_END,c).emulateTransitionEnd(s):void c()}}},i.setTransitioning=function(e){this._isTransitioning=e},i.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},i._getConfig=function(e){return e=a({},d,e),e.toggle=!!e.toggle,l.typeCheckConfig(t,e,c),e},i._getDimension=function(){var t=e(this._element).hasClass(m.WIDTH);return t?m.WIDTH:m.HEIGHT},i._getParent=function(){var t=this,n=null;l.isElement(this._config.parent)?(n=this._config.parent,'undefined'!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(o).each(function(e,n){t._addAriaAndCollapsedClass(r._getTargetFromElement(n),[n])}),n},i._addAriaAndCollapsedClass=function(t,n){if(t){var o=e(t).hasClass(p.SHOW);0<n.length&&e(n).toggleClass(p.COLLAPSED,!o).attr('aria-expanded',o)}},r._getTargetFromElement=function(t){var n=l.getSelectorFromElement(t);return n?e(n)[0]:null},r._jQueryInterface=function(t){return this.each(function(){var o=e(this),i=o.data(n),l=a({},d,o.data(),'object'==typeof t&&t);if(!i&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),i||(i=new r(this,l),o.data(n,i)),'string'==typeof t){if('undefined'==typeof i[t])throw new TypeError('No method named "'+t+'"');i[t]()}})},o(r,null,[{key:'VERSION',get:function(){return'4.0.0'}},{key:'Default',get:function(){return d}}]),r}();return e(document).on(_.CLICK_DATA_API,g.DATA_TOGGLE,function(t){'A'===t.currentTarget.tagName&&t.preventDefault();var o=e(this),a=l.getSelectorFromElement(this);e(a).each(function(){var t=e(this),a=t.data(n),r=a?'toggle':o.data();f._jQueryInterface.call(t,r)})}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=i,f._jQueryInterface},f}(e),p=function(e){var t='modal',n='bs.modal',r='.'+n,i=e.fn[t],s=300,d=150,c={backdrop:!0,keyboard:!0,focus:!0,show:!0},_={backdrop:'(boolean|string)',keyboard:'boolean',focus:'boolean',show:'boolean'},p={HIDE:'hide'+r,HIDDEN:'hidden'+r,SHOW:'show'+r,SHOWN:'shown'+r,FOCUSIN:'focusin'+r,RESIZE:'resize'+r,CLICK_DISMISS:'click.dismiss'+r,KEYDOWN_DISMISS:'keydown.dismiss'+r,MOUSEUP_DISMISS:'mouseup.dismiss'+r,MOUSEDOWN_DISMISS:'mousedown.dismiss'+r,CLICK_DATA_API:'click'+r+'.data-api'},m={SCROLLBAR_MEASURER:'modal-scrollbar-measure',BACKDROP:'modal-backdrop',OPEN:'modal-open',FADE:'fade',SHOW:'show'},g={DIALOG:'.modal-dialog',DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:'.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',STICKY_CONTENT:'.sticky-top',NAVBAR_TOGGLER:'.navbar-toggler'},f=function(){function i(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var f=i.prototype;return f.toggle=function(e){return this._isShown?this.hide():this.show(e)},f.show=function(t){var n=this;if(!(this._isTransitioning||this._isShown)){l.supportsTransitionEnd()&&e(this._element).hasClass(m.FADE)&&(this._isTransitioning=!0);var o=e.Event(p.SHOW,{relatedTarget:t});e(this._element).trigger(o),this._isShown||o.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(m.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(p.CLICK_DISMISS,g.DATA_DISMISS,function(e){return n.hide(e)}),e(this._dialog).on(p.MOUSEDOWN_DISMISS,function(){e(n._element).one(p.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},f.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var o=e.Event(p.HIDE);if(e(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()){this._isShown=!1;var a=l.supportsTransitionEnd()&&e(this._element).hasClass(m.FADE);a&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(p.FOCUSIN),e(this._element).removeClass(m.SHOW),e(this._element).off(p.CLICK_DISMISS),e(this._dialog).off(p.MOUSEDOWN_DISMISS),a?e(this._element).one(l.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(s):this._hideModal()}}},f.dispose=function(){e.removeData(this._element,n),e(window,document,this._element,this._backdrop).off(r),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},f.handleUpdate=function(){this._adjustDialog()},f._getConfig=function(e){return e=a({},c,e),l.typeCheckConfig(t,e,_),e},f._showElement=function(t){var n=this,o=l.supportsTransitionEnd()&&e(this._element).hasClass(m.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display='block',this._element.removeAttribute('aria-hidden'),this._element.scrollTop=0,o&&l.reflow(this._element),e(this._element).addClass(m.SHOW),this._config.focus&&this._enforceFocus();var a=e.Event(p.SHOWN,{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(a)};o?e(this._dialog).one(l.TRANSITION_END,r).emulateTransitionEnd(s):r()},f._enforceFocus=function(){var t=this;e(document).off(p.FOCUSIN).on(p.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},f._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(p.KEYDOWN_DISMISS,function(e){e.which===27&&(e.preventDefault(),t.hide())}):!this._isShown&&e(this._element).off(p.KEYDOWN_DISMISS)},f._setResizeEvent=function(){var t=this;this._isShown?e(window).on(p.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(p.RESIZE)},f._hideModal=function(){var t=this;this._element.style.display='none',this._element.setAttribute('aria-hidden',!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(m.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(p.HIDDEN)})},f._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},f._showBackdrop=function(t){var n=this,o=e(this._element).hasClass(m.FADE)?m.FADE:'';if(this._isShown&&this._config.backdrop){var a=l.supportsTransitionEnd()&&o;if(this._backdrop=document.createElement('div'),this._backdrop.className=m.BACKDROP,o&&e(this._backdrop).addClass(o),e(this._backdrop).appendTo(document.body),e(this._element).on(p.CLICK_DISMISS,function(e){return n._ignoreBackdropClick?void(n._ignoreBackdropClick=!1):void(e.target!==e.currentTarget||('static'===n._config.backdrop?n._element.focus():n.hide()))}),a&&l.reflow(this._backdrop),e(this._backdrop).addClass(m.SHOW),!t)return;if(!a)return void t();e(this._backdrop).one(l.TRANSITION_END,t).emulateTransitionEnd(d)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(m.SHOW);var r=function(){n._removeBackdrop(),t&&t()};l.supportsTransitionEnd()&&e(this._element).hasClass(m.FADE)?e(this._backdrop).one(l.TRANSITION_END,r).emulateTransitionEnd(d):r()}else t&&t()},f._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+'px'),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+'px')},f._resetAdjustments=function(){this._element.style.paddingLeft='',this._element.style.paddingRight=''},f._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},f._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){e(g.FIXED_CONTENT).each(function(n,o){var a=e(o)[0].style.paddingRight,r=e(o).css('padding-right');e(o).data('padding-right',a).css('padding-right',parseFloat(r)+t._scrollbarWidth+'px')}),e(g.STICKY_CONTENT).each(function(n,o){var a=e(o)[0].style.marginRight,r=e(o).css('margin-right');e(o).data('margin-right',a).css('margin-right',parseFloat(r)-t._scrollbarWidth+'px')}),e(g.NAVBAR_TOGGLER).each(function(n,o){var a=e(o)[0].style.marginRight,r=e(o).css('margin-right');e(o).data('margin-right',a).css('margin-right',parseFloat(r)+t._scrollbarWidth+'px')});var n=document.body.style.paddingRight,o=e('body').css('padding-right');e('body').data('padding-right',n).css('padding-right',parseFloat(o)+this._scrollbarWidth+'px')}},f._resetScrollbar=function(){e(g.FIXED_CONTENT).each(function(t,n){var o=e(n).data('padding-right');'undefined'!=typeof o&&e(n).css('padding-right',o).removeData('padding-right')}),e(g.STICKY_CONTENT+', '+g.NAVBAR_TOGGLER).each(function(t,n){var o=e(n).data('margin-right');'undefined'!=typeof o&&e(n).css('margin-right',o).removeData('margin-right')});var t=e('body').data('padding-right');'undefined'!=typeof t&&e('body').css('padding-right',t).removeData('padding-right')},f._getScrollbarWidth=function(){var e=document.createElement('div');e.className=m.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},i._jQueryInterface=function(t,o){return this.each(function(){var r=e(this).data(n),l=a({},i.Default,e(this).data(),'object'==typeof t&&t);if(r||(r=new i(this,l),e(this).data(n,r)),'string'==typeof t){if('undefined'==typeof r[t])throw new TypeError('No method named "'+t+'"');r[t](o)}else l.show&&r.show(o)})},o(i,null,[{key:'VERSION',get:function(){return'4.0.0'}},{key:'Default',get:function(){return c}}]),i}();return e(document).on(p.CLICK_DATA_API,g.DATA_TOGGLE,function(t){var o,r=this,i=l.getSelectorFromElement(this);i&&(o=e(i)[0]);var s=e(o).data(n)?'toggle':a({},e(o).data(),e(this).data());('A'===this.tagName||'AREA'===this.tagName)&&t.preventDefault();var d=e(o).one(p.SHOW,function(t){t.isDefaultPrevented()||d.one(p.HIDDEN,function(){e(r).is(':visible')&&r.focus()})});f._jQueryInterface.call(e(o),s,this)}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=i,f._jQueryInterface},f}(e),m=function(e){var n='tooltip',r='bs.tooltip',i='.'+r,s=e.fn[n],d=/(^|\s)bs-tooltip\S+/g,c={animation:'boolean',template:'string',title:'(string|element|function)',trigger:'string',delay:'(number|object)',html:'boolean',selector:'(string|boolean)',placement:'(string|function)',offset:'(number|string)',container:'(string|element|boolean)',fallbackPlacement:'(string|array)',boundary:'(string|element)'},_={AUTO:'auto',TOP:'top',RIGHT:'right',BOTTOM:'bottom',LEFT:'left'},p={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:!1,selector:!1,placement:'top',offset:0,container:!1,fallbackPlacement:'flip',boundary:'scrollParent'},m={SHOW:'show',OUT:'out'},g={HIDE:'hide'+i,HIDDEN:'hidden'+i,SHOW:'show'+i,SHOWN:'shown'+i,INSERTED:'inserted'+i,CLICK:'click'+i,FOCUSIN:'focusin'+i,FOCUSOUT:'focusout'+i,MOUSEENTER:'mouseenter'+i,MOUSELEAVE:'mouseleave'+i},f={FADE:'fade',SHOW:'show'},u={TOOLTIP:'.tooltip',TOOLTIP_INNER:'.tooltip-inner',ARROW:'.arrow'},E={HOVER:'hover',FOCUS:'focus',CLICK:'click',MANUAL:'manual'},h=function(){function s(e,n){if('undefined'==typeof t)throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');this._isEnabled=!0,this._timeout=0,this._hoverState='',this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(n),this.tip=null,this._setListeners()}var h=s.prototype;return h.enable=function(){this._isEnabled=!0},h.disable=function(){this._isEnabled=!1},h.toggleEnabled=function(){this._isEnabled=!this._isEnabled},h.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,o=e(t.currentTarget).data(n);o||(o=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,o)),o._activeTrigger.click=!o._activeTrigger.click,o._isWithActiveTrigger()?o._enter(null,o):o._leave(null,o)}else{if(e(this.getTipElement()).hasClass(f.SHOW))return void this._leave(null,this);this._enter(null,this)}},h.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest('.modal').off('hide.bs.modal'),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},h.show=function(){var n=this;if('none'===e(this.element).css('display'))throw new Error('Please use show on visible elements');var o=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(o);var a=e.contains(this.element.ownerDocument.documentElement,this.element);if(o.isDefaultPrevented()||!a)return;var r=this.getTipElement(),i=l.getUID(this.constructor.NAME);r.setAttribute('id',i),this.element.setAttribute('aria-describedby',i),this.setContent(),this.config.animation&&e(r).addClass(f.FADE);var d='function'==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,c=this._getAttachment(d);this.addAttachmentClass(c);var _=!1===this.config.container?document.body:e(this.config.container);e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(_),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new t(this.element,r,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:u.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&n._handlePopperPlacementChange(e)},onUpdate:function(e){n._handlePopperPlacementChange(e)}}),e(r).addClass(f.SHOW),'ontouchstart'in document.documentElement&&e('body').children().on('mouseover',null,e.noop);var p=function(){n.config.animation&&n._fixTransition();var t=n._hoverState;n._hoverState=null,e(n.element).trigger(n.constructor.Event.SHOWN),t===m.OUT&&n._leave(null,n)};l.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(this.tip).one(l.TRANSITION_END,p).emulateTransitionEnd(s._TRANSITION_DURATION):p()}},h.hide=function(t){var n=this,o=this.getTipElement(),a=e.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==m.SHOW&&o.parentNode&&o.parentNode.removeChild(o),n._cleanTipClass(),n.element.removeAttribute('aria-describedby'),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};e(this.element).trigger(a),a.isDefaultPrevented()||(e(o).removeClass(f.SHOW),'ontouchstart'in document.documentElement&&e('body').children().off('mouseover',null,e.noop),this._activeTrigger[E.CLICK]=!1,this._activeTrigger[E.FOCUS]=!1,this._activeTrigger[E.HOVER]=!1,l.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(o).one(l.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState='')},h.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},h.isWithContent=function(){return!!this.getTitle()},h.addAttachmentClass=function(t){e(this.getTipElement()).addClass('bs-tooltip'+'-'+t)},h.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},h.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(u.TOOLTIP_INNER),this.getTitle()),t.removeClass(f.FADE+' '+f.SHOW)},h.setElementContent=function(t,n){var o=this.config.html;'object'==typeof n&&(n.nodeType||n.jquery)?o?!e(n).parent().is(t)&&t.empty().append(n):t.text(e(n).text()):t[o?'html':'text'](n)},h.getTitle=function(){var e=this.element.getAttribute('data-original-title');return e||(e='function'==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},h._getAttachment=function(e){return _[e.toUpperCase()]},h._setListeners=function(){var t=this,n=this.config.trigger.split(' ');n.forEach(function(n){if('click'===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(n!==E.MANUAL){var o=n===E.HOVER?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,a=n===E.HOVER?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(o,t.config.selector,function(e){return t._enter(e)}).on(a,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest('.modal').on('hide.bs.modal',function(){return t.hide()})}),this.config.selector?this.config=a({},this.config,{trigger:'manual',selector:''}):this._fixTitle()},h._fixTitle=function(){var e=typeof this.element.getAttribute('data-original-title');(this.element.getAttribute('title')||'string'!=e)&&(this.element.setAttribute('data-original-title',this.element.getAttribute('title')||''),this.element.setAttribute('title',''))},h._enter=function(t,n){var o=this.constructor.DATA_KEY;return(n=n||e(t.currentTarget).data(o),n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(o,n)),t&&(n._activeTrigger['focusin'===t.type?E.FOCUS:E.HOVER]=!0),e(n.getTipElement()).hasClass(f.SHOW)||n._hoverState===m.SHOW)?void(n._hoverState=m.SHOW):(clearTimeout(n._timeout),n._hoverState=m.SHOW,n.config.delay&&n.config.delay.show?void(n._timeout=setTimeout(function(){n._hoverState===m.SHOW&&n.show()},n.config.delay.show)):void n.show())},h._leave=function(t,n){var o=this.constructor.DATA_KEY;if(n=n||e(t.currentTarget).data(o),n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(o,n)),t&&(n._activeTrigger['focusout'===t.type?E.FOCUS:E.HOVER]=!1),!n._isWithActiveTrigger())return clearTimeout(n._timeout),n._hoverState=m.OUT,n.config.delay&&n.config.delay.hide?void(n._timeout=setTimeout(function(){n._hoverState===m.OUT&&n.hide()},n.config.delay.hide)):void n.hide()},h._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},h._getConfig=function(t){return t=a({},this.constructor.Default,e(this.element).data(),t),'number'==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),'number'==typeof t.title&&(t.title=t.title.toString()),'number'==typeof t.content&&(t.content=t.content.toString()),l.typeCheckConfig(n,t,this.constructor.DefaultType),t},h._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},h._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr('class').match(d);null!==n&&0<n.length&&t.removeClass(n.join(''))},h._handlePopperPlacementChange=function(e){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},h._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null!==t.getAttribute('x-placement')||(e(t).removeClass(f.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},s._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(r);if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,'object'==typeof t&&t),e(this).data(r,n)),'string'==typeof t)){if('undefined'==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},o(s,null,[{key:'VERSION',get:function(){return'4.0.0'}},{key:'Default',get:function(){return p}},{key:'NAME',get:function(){return n}},{key:'DATA_KEY',get:function(){return r}},{key:'Event',get:function(){return g}},{key:'EVENT_KEY',get:function(){return i}},{key:'DefaultType',get:function(){return c}}]),s}();return e.fn[n]=h._jQueryInterface,e.fn[n].Constructor=h,e.fn[n].noConflict=function(){return e.fn[n]=s,h._jQueryInterface},h}(e,t),g=function(e){var t='popover',n='bs.popover',i='.'+n,l=e.fn[t],s=/(^|\s)bs-popover\S+/g,d=a({},m.Default,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),c=a({},m.DefaultType,{content:'(string|element|function)'}),_={FADE:'fade',SHOW:'show'},p={TITLE:'.popover-header',CONTENT:'.popover-body'},g={HIDE:'hide'+i,HIDDEN:'hidden'+i,SHOW:'show'+i,SHOWN:'shown'+i,INSERTED:'inserted'+i,CLICK:'click'+i,FOCUSIN:'focusin'+i,FOCUSOUT:'focusout'+i,MOUSEENTER:'mouseenter'+i,MOUSELEAVE:'mouseleave'+i},f=function(a){function l(){return a.apply(this,arguments)||this}r(l,a);var m=l.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(t){e(this.getTipElement()).addClass('bs-popover'+'-'+t)},m.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},m.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(p.TITLE),this.getTitle());var n=this._getContent();'function'==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(p.CONTENT),n),t.removeClass(_.FADE+' '+_.SHOW)},m._getContent=function(){return this.element.getAttribute('data-content')||this.config.content},m._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr('class').match(s);null!==n&&0<n.length&&t.removeClass(n.join(''))},l._jQueryInterface=function(t){return this.each(function(){var o=e(this).data(n),a='object'==typeof t?t:null;if((o||!/destroy|hide/.test(t))&&(o||(o=new l(this,a),e(this).data(n,o)),'string'==typeof t)){if('undefined'==typeof o[t])throw new TypeError('No method named "'+t+'"');o[t]()}})},o(l,null,[{key:'VERSION',get:function(){return'4.0.0'}},{key:'Default',get:function(){return d}},{key:'NAME',get:function(){return t}},{key:'DATA_KEY',get:function(){return n}},{key:'Event',get:function(){return g}},{key:'EVENT_KEY',get:function(){return i}},{key:'DefaultType',get:function(){return c}}]),l}(m);return e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=l,f._jQueryInterface},f}(e),f=function(e){var t='scrollspy',n='bs.scrollspy',r='.'+n,s=e.fn[t],d={offset:10,method:'auto',target:''},c={offset:'number',method:'string',target:'(string|element)'},_={ACTIVATE:'activate'+r,SCROLL:'scroll'+r,LOAD_DATA_API:'load'+r+'.data-api'},p={DROPDOWN_ITEM:'dropdown-item',DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active'},m={DATA_SPY:'[data-spy="scroll"]',ACTIVE:'.active',NAV_LIST_GROUP:'.nav, .list-group',NAV_LINKS:'.nav-link',NAV_ITEMS:'.nav-item',LIST_ITEMS:'.list-group-item',DROPDOWN:'.dropdown',DROPDOWN_ITEMS:'.dropdown-item',DROPDOWN_TOGGLE:'.dropdown-toggle'},g={OFFSET:'offset',POSITION:'position'},f=function(){function s(t,n){var o=this;this._element=t,this._scrollElement='BODY'===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+' '+m.NAV_LINKS+','+(this._config.target+' '+m.LIST_ITEMS+',')+(this._config.target+' '+m.DROPDOWN_ITEMS),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(_.SCROLL,function(e){return o._process(e)}),this.refresh(),this._process()}var f=s.prototype;return f.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?g.OFFSET:g.POSITION,o='auto'===this._config.method?n:this._config.method,a=o===g.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var r=e.makeArray(e(this._selector));r.map(function(t){var n,r=l.getSelectorFromElement(t);if(r&&(n=e(r)[0]),n){var i=n.getBoundingClientRect();if(i.width||i.height)return[e(n)[o]().top+a,r]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},f.dispose=function(){e.removeData(this._element,n),e(this._scrollElement).off(r),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},f._getConfig=function(n){if(n=a({},d,n),'string'!=typeof n.target){var o=e(n.target).attr('id');o||(o=l.getUID(t),e(n.target).attr('id',o)),n.target='#'+o}return l.typeCheckConfig(t,n,c),n},f._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},f._getScrollHeight=function(){return this._scrollElement.scrollHeight||i(document.body.scrollHeight,document.documentElement.scrollHeight)},f._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},f._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var o=this._targets[this._targets.length-1];return void(this._activeTarget!==o&&this._activate(o))}if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var a,r=this._offsets.length;r--;)a=this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&('undefined'==typeof this._offsets[r+1]||e<this._offsets[r+1]),a&&this._activate(this._targets[r])},f._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(',');n=n.map(function(e){return e+'[data-target="'+t+'"],'+(e+'[href="'+t+'"]')});var o=e(n.join(','));o.hasClass(p.DROPDOWN_ITEM)?(o.closest(m.DROPDOWN).find(m.DROPDOWN_TOGGLE).addClass(p.ACTIVE),o.addClass(p.ACTIVE)):(o.addClass(p.ACTIVE),o.parents(m.NAV_LIST_GROUP).prev(m.NAV_LINKS+', '+m.LIST_ITEMS).addClass(p.ACTIVE),o.parents(m.NAV_LIST_GROUP).prev(m.NAV_ITEMS).children(m.NAV_LINKS).addClass(p.ACTIVE)),e(this._scrollElement).trigger(_.ACTIVATE,{relatedTarget:t})},f._clear=function(){e(this._selector).filter(m.ACTIVE).removeClass(p.ACTIVE)},s._jQueryInterface=function(t){return this.each(function(){var o=e(this).data(n);if(o||(o=new s(this,'object'==typeof t&&t),e(this).data(n,o)),'string'==typeof t){if('undefined'==typeof o[t])throw new TypeError('No method named "'+t+'"');o[t]()}})},o(s,null,[{key:'VERSION',get:function(){return'4.0.0'}},{key:'Default',get:function(){return d}}]),s}();return e(window).on(_.LOAD_DATA_API,function(){for(var t,n=e.makeArray(e(m.DATA_SPY)),o=n.length;o--;)t=e(n[o]),f._jQueryInterface.call(t,t.data())}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=s,f._jQueryInterface},f}(e),u=function(e){var t='tab',n='bs.tab',a='.'+n,r=e.fn[t],i={HIDE:'hide'+a,HIDDEN:'hidden'+a,SHOW:'show'+a,SHOWN:'shown'+a,CLICK_DATA_API:'click'+a+'.data-api'},s={DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active',DISABLED:'disabled',FADE:'fade',SHOW:'show'},d={DROPDOWN:'.dropdown',NAV_LIST_GROUP:'.nav, .list-group',ACTIVE:'.active',ACTIVE_UL:'> li > .active',DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:'.dropdown-toggle',DROPDOWN_ACTIVE_CHILD:'> .dropdown-menu .active'},c=function(){function t(e){this._element=e}var a=t.prototype;return a.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(s.ACTIVE)||e(this._element).hasClass(s.DISABLED))){var n,o,a=e(this._element).closest(d.NAV_LIST_GROUP)[0],r=l.getSelectorFromElement(this._element);if(a){var c='UL'===a.nodeName?d.ACTIVE_UL:d.ACTIVE;o=e.makeArray(e(a).find(c)),o=o[o.length-1]}var _=e.Event(i.HIDE,{relatedTarget:this._element}),p=e.Event(i.SHOW,{relatedTarget:o});if(o&&e(o).trigger(_),e(this._element).trigger(p),!(p.isDefaultPrevented()||_.isDefaultPrevented())){r&&(n=e(r)[0]),this._activate(this._element,a);var m=function(){var n=e.Event(i.HIDDEN,{relatedTarget:t._element}),a=e.Event(i.SHOWN,{relatedTarget:o});e(o).trigger(n),e(t._element).trigger(a)};n?this._activate(n,n.parentNode,m):m()}}},a.dispose=function(){e.removeData(this._element,n),this._element=null},a._activate=function(t,n,o){var a,r=this;a='UL'===n.nodeName?e(n).find(d.ACTIVE_UL):e(n).children(d.ACTIVE);var i=a[0],c=o&&l.supportsTransitionEnd()&&i&&e(i).hasClass(s.FADE),_=function(){return r._transitionComplete(t,i,o)};i&&c?e(i).one(l.TRANSITION_END,_).emulateTransitionEnd(150):_()},a._transitionComplete=function(t,n,o){if(n){e(n).removeClass(s.SHOW+' '+s.ACTIVE);var a=e(n.parentNode).find(d.DROPDOWN_ACTIVE_CHILD)[0];a&&e(a).removeClass(s.ACTIVE),'tab'===n.getAttribute('role')&&n.setAttribute('aria-selected',!1)}if(e(t).addClass(s.ACTIVE),'tab'===t.getAttribute('role')&&t.setAttribute('aria-selected',!0),l.reflow(t),e(t).addClass(s.SHOW),t.parentNode&&e(t.parentNode).hasClass(s.DROPDOWN_MENU)){var r=e(t).closest(d.DROPDOWN)[0];r&&e(r).find(d.DROPDOWN_TOGGLE).addClass(s.ACTIVE),t.setAttribute('aria-expanded',!0)}o&&o()},t._jQueryInterface=function(o){return this.each(function(){var a=e(this),r=a.data(n);if(r||(r=new t(this),a.data(n,r)),'string'==typeof o){if('undefined'==typeof r[o])throw new TypeError('No method named "'+o+'"');r[o]()}})},o(t,null,[{key:'VERSION',get:function(){return'4.0.0'}}]),t}();return e(document).on(i.CLICK_DATA_API,d.DATA_TOGGLE,function(t){t.preventDefault(),c._jQueryInterface.call(e(this),'show')}),e.fn[t]=c._jQueryInterface,e.fn[t].Constructor=c,e.fn[t].noConflict=function(){return e.fn[t]=r,c._jQueryInterface},c}(e),E=function(){function e(){if(window.QUnit)return!1;var e=document.createElement('bmd');for(var t in o)if(void 0!==e.style[t])return o[t];return!1}var t=!1,n='',o={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};return function(){for(var a in t=e(),o)n+=' '+o[a]}(),{transitionEndSupported:function(){return t},transitionEndSelector:function(){return n},isChar:function(e){return!('undefined'!=typeof e.which)||'number'==typeof e.which&&0<e.which&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&8!==e.which&&9!==e.which&&13!==e.which&&16!==e.which&&17!==e.which&&20!==e.which&&27!==e.which},assert:function(e,t,n){if(t)throw void 0===!e&&e.css('border','1px solid red'),console.error(n,e),n},describe:function(e){return void 0===e?'undefined':0===e.length?'(no matching elements)':e[0].outerHTML.split('>')[0]+'>'}}}(jQuery),h=function(e){var t={BMD_FORM_GROUP:'bmd-form-group',IS_FILLED:'is-filled',IS_FOCUSED:'is-focused'},n={BMD_FORM_GROUP:'.'+t.BMD_FORM_GROUP},o={},a=function(){function a(t,n,a){for(var r in void 0===a&&(a={}),this.$element=t,this.config=e.extend(!0,{},o,n),a)this[r]=a[r]}var r=a.prototype;return r.dispose=function(e){this.$element.data(e,null),this.$element=null,this.config=null},r.addFormGroupFocus=function(){this.$element.prop('disabled')||this.$bmdFormGroup.addClass(t.IS_FOCUSED)},r.removeFormGroupFocus=function(){this.$bmdFormGroup.removeClass(t.IS_FOCUSED)},r.removeIsFilled=function(){this.$bmdFormGroup.removeClass(t.IS_FILLED)},r.addIsFilled=function(){this.$bmdFormGroup.addClass(t.IS_FILLED)},r.findMdbFormGroup=function(t){void 0===t&&(t=!0);var o=this.$element.closest(n.BMD_FORM_GROUP);return 0===o.length&&t&&e.error('Failed to find '+n.BMD_FORM_GROUP+' for '+E.describe(this.$element)),o},a}();return a}(jQuery),A=function(e){var t={FORM_GROUP:'form-group',BMD_FORM_GROUP:'bmd-form-group',BMD_LABEL:'bmd-label',BMD_LABEL_STATIC:'bmd-label-static',BMD_LABEL_PLACEHOLDER:'bmd-label-placeholder',BMD_LABEL_FLOATING:'bmd-label-floating',HAS_DANGER:'has-danger',IS_FILLED:'is-filled',IS_FOCUSED:'is-focused',INPUT_GROUP:'input-group'},n={FORM_GROUP:'.'+t.FORM_GROUP,BMD_FORM_GROUP:'.'+t.BMD_FORM_GROUP,BMD_LABEL_WILDCARD:'label[class^=\''+t.BMD_LABEL+'\'], label[class*=\' '+t.BMD_LABEL+'\']'},o={validate:!1,formGroup:{required:!1},bmdFormGroup:{template:'<span class=\''+t.BMD_FORM_GROUP+'\'></span>',create:!0,required:!0},label:{required:!1,selectors:['.form-control-label','> label'],className:t.BMD_LABEL_STATIC},requiredClasses:[],invalidComponentMatches:[],convertInputSizeVariations:!0},a={"form-control-lg":'bmd-form-group-lg',"form-control-sm":'bmd-form-group-sm'},i=function(i){function l(t,n,a){var r;return void 0===a&&(a={}),r=i.call(this,t,e.extend(!0,{},o,n),a)||this,r._rejectInvalidComponentMatches(),r.rejectWithoutRequiredStructure(),r._rejectWithoutRequiredClasses(),r.$formGroup=r.findFormGroup(r.config.formGroup.required),r.$bmdFormGroup=r.resolveMdbFormGroup(),r.$bmdLabel=r.resolveMdbLabel(),r.resolveMdbFormGroupSizing(),r.addFocusListener(),r.addChangeListener(),''!=r.$element.val()&&r.addIsFilled(),r}r(l,i);var s=l.prototype;return s.dispose=function(e){i.prototype.dispose.call(this,e),this.$bmdFormGroup=null,this.$formGroup=null},s.rejectWithoutRequiredStructure=function(){},s.addFocusListener=function(){var e=this;this.$element.on('focus',function(){e.addFormGroupFocus()}).on('blur',function(){e.removeFormGroupFocus()})},s.addChangeListener=function(){var e=this;this.$element.on('keydown paste',function(t){E.isChar(t)&&e.addIsFilled()}).on('keyup change',function(){if(e.isEmpty()?e.removeIsFilled():e.addIsFilled(),e.config.validate){var t='undefined'==typeof e.$element[0].checkValidity||e.$element[0].checkValidity();t?e.removeHasDanger():e.addHasDanger()}})},s.addHasDanger=function(){this.$bmdFormGroup.addClass(t.HAS_DANGER)},s.removeHasDanger=function(){this.$bmdFormGroup.removeClass(t.HAS_DANGER)},s.isEmpty=function(){return null===this.$element.val()||void 0===this.$element.val()||''===this.$element.val()},s.resolveMdbFormGroup=function(){var e=this.findMdbFormGroup(!1);return(void 0===e||0===e.length)&&(this.config.bmdFormGroup.create&&(void 0===this.$formGroup||0===this.$formGroup.length)?this.outerElement().parent().hasClass(t.INPUT_GROUP)?this.outerElement().parent().wrap(this.config.bmdFormGroup.template):this.outerElement().wrap(this.config.bmdFormGroup.template):this.$formGroup.addClass(t.BMD_FORM_GROUP),e=this.findMdbFormGroup(this.config.bmdFormGroup.required)),e},s.outerElement=function(){return this.$element},s.resolveMdbLabel=function(){var e=this.$bmdFormGroup.find(n.BMD_LABEL_WILDCARD);return(void 0===e||0===e.length)&&(e=this.findMdbLabel(this.config.label.required),void 0===e||0===e.length||e.addClass(this.config.label.className)),e},s.findMdbLabel=function(t){void 0===t&&(t=!0);for(var o=null,a=this.config.label.selectors,r=Array.isArray(a),i=0,a=r?a:a[Symbol.iterator]();;){var l;if(r){if(i>=a.length)break;l=a[i++]}else{if(i=a.next(),i.done)break;l=i.value}var s=l;if(o=e.isFunction(s)?s(this):this.$bmdFormGroup.find(s),void 0!==o&&0<o.length)break}return 0===o.length&&t&&e.error('Failed to find '+n.BMD_LABEL_WILDCARD+' within form-group for '+E.describe(this.$element)),o},s.findFormGroup=function(t){void 0===t&&(t=!0);var o=this.$element.closest(n.FORM_GROUP);return 0===o.length&&t&&e.error('Failed to find '+n.FORM_GROUP+' for '+E.describe(this.$element)),o},s.resolveMdbFormGroupSizing=function(){if(this.config.convertInputSizeVariations)for(var e in a)this.$element.hasClass(e)&&this.$bmdFormGroup.addClass(a[e])},s._rejectInvalidComponentMatches=function(){for(var e=this.config.invalidComponentMatches,t=Array.isArray(e),n=0,e=t?e:e[Symbol.iterator]();;){var o;if(t){if(n>=e.length)break;o=e[n++]}else{if(n=e.next(),n.done)break;o=n.value}var a=o;a.rejectMatch(this.constructor.name,this.$element)}},s._rejectWithoutRequiredClasses=function(){for(var t=this.config.requiredClasses,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var a;if(n){if(o>=t.length)break;a=t[o++]}else{if(o=t.next(),o.done)break;a=o.value}var r=a,i=!1;if(-1!==r.indexOf('||'))for(var l=r.split('||'),s=l,d=Array.isArray(s),c=0,s=d?s:s[Symbol.iterator]();;){var _;if(d){if(c>=s.length)break;_=s[c++]}else{if(c=s.next(),c.done)break;_=c.value}var p=_;if(this.$element.hasClass(p)){i=!0;break}}else this.$element.hasClass(r)&&(i=!0);i||e.error(this.constructor.name+' element: '+E.describe(this.$element)+' requires class: '+r)}},l}(h);return i}(jQuery),C=function(e){var t={label:{required:!1}},n={LABEL:'label'},o=function(o){function a(n,a,r){var i;return i=o.call(this,n,e.extend(!0,{},t,a),r)||this,i.decorateMarkup(),i}r(a,o);var i=a.prototype;return i.decorateMarkup=function(){var t=e(this.config.template);this.$element.after(t),!1!==this.config.ripples&&t.bmdRipples()},i.outerElement=function(){return this.$element.parent().closest('.'+this.outerClass)},i.rejectWithoutRequiredStructure=function(){E.assert(this.$element,'label'===!this.$element.parent().prop('tagName'),this.constructor.name+'\'s '+E.describe(this.$element)+' parent element should be <label>.'),E.assert(this.$element,!this.outerElement().hasClass(this.outerClass),this.constructor.name+'\'s '+E.describe(this.$element)+' outer element should have class '+this.outerClass+'.')},i.addFocusListener=function(){var e=this;this.$element.closest(n.LABEL).hover(function(){e.addFormGroupFocus()},function(){e.removeFormGroupFocus()})},i.addChangeListener=function(){var e=this;this.$element.change(function(){e.$element.blur()})},a}(A);return o}(jQuery),I=function(e){var t='checkbox',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={template:'<span class=\'checkbox-decorator\'><span class=\'check\'></span></span>'},l=function(o){function a(n,a,r){return void 0===r&&(r={inputType:t,outerClass:t}),o.call(this,n,e.extend(!0,i,a),r)||this}r(a,o);var l=a.prototype;return l.dispose=function(e){void 0===e&&(e=n),o.prototype.dispose.call(this,e)},a.matches=function(e){return'checkbox'===e.attr('type')},a.rejectMatch=function(e,t){E.assert(this.$element,this.matches(t),e+' component element '+E.describe(t)+' is invalid for type=\'checkbox\'.')},a._jQueryInterface=function(t){return this.each(function(){var o=e(this),r=o.data(n);r||(r=new a(o,t),o.data(n,r))})},a}(C);return e.fn[o]=l._jQueryInterface,e.fn[o].Constructor=l,e.fn[o].noConflict=function(){return e.fn[o]=a,l._jQueryInterface},l}(jQuery),T=function(e){var t='checkboxInline',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={bmdFormGroup:{create:!1,required:!1}},l=function(t){function o(n,o,a){return void 0===a&&(a={inputType:'checkbox',outerClass:'checkbox-inline'}),t.call(this,n,e.extend(!0,{},i,o),a)||this}r(o,t);var a=o.prototype;return a.dispose=function(){t.prototype.dispose.call(this,n)},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(I);return e.fn[o]=l._jQueryInterface,e.fn[o].Constructor=l,e.fn[o].noConflict=function(){return e.fn[o]=a,l._jQueryInterface},l}(jQuery),N=function(e){var t='collapseInline',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={ANY_INPUT:'input, select, textarea'},l={IN:'in',COLLAPSE:'collapse',COLLAPSING:'collapsing',COLLAPSED:'collapsed',WIDTH:'width'},s={},d=function(t){function o(n,o){var a;a=t.call(this,n,e.extend(!0,{},s,o))||this,a.$bmdFormGroup=a.findMdbFormGroup(!0);var r=n.data('target');a.$collapse=e(r),E.assert(n,0===a.$collapse.length,'Cannot find collapse target for '+E.describe(n)),E.assert(a.$collapse,!a.$collapse.hasClass(l.COLLAPSE),E.describe(a.$collapse)+' is expected to have the \''+l.COLLAPSE+'\' class.  It is being targeted by '+E.describe(n));var d=a.$bmdFormGroup.find(i.ANY_INPUT);return 0<d.length&&(a.$input=d.first()),a.$collapse.hasClass(l.WIDTH)||a.$collapse.addClass(l.WIDTH),a.$input&&(a.$collapse.on('shown.bs.collapse',function(){a.$input.focus()}),a.$input.blur(function(){a.$collapse.collapse('hide')})),a}r(o,t);var a=o.prototype;return a.dispose=function(){t.prototype.dispose.call(this,n),this.$bmdFormGroup=null,this.$collapse=null,this.$input=null},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(h);return e.fn[o]=d._jQueryInterface,e.fn[o].Constructor=d,e.fn[o].noConflict=function(){return e.fn[o]=a,d._jQueryInterface},d}(jQuery),b=function(e){var t='file',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={},l={FILE:t,IS_FILE:'is-file'},s={FILENAMES:'input.form-control[readonly]'},d=function(t){function o(n,o){var a;return a=t.call(this,n,e.extend(!0,i,o))||this,a.$bmdFormGroup.addClass(l.IS_FILE),a}r(o,t);var a=o.prototype;return a.dispose=function(){t.prototype.dispose.call(this,n)},o.matches=function(e){return'file'===e.attr('type')},o.rejectMatch=function(e,t){E.assert(this.$element,this.matches(t),e+' component element '+E.describe(t)+' is invalid for type=\'file\'.')},a.outerElement=function(){return this.$element.parent().closest('.'+l.FILE)},a.rejectWithoutRequiredStructure=function(){E.assert(this.$element,'label'===!this.outerElement().prop('tagName'),this.constructor.name+'\'s '+E.describe(this.$element)+' parent element '+E.describe(this.outerElement())+' should be <label>.'),E.assert(this.$element,!this.outerElement().hasClass(l.FILE),this.constructor.name+'\'s '+E.describe(this.$element)+' parent element '+E.describe(this.outerElement())+' should have class .'+l.FILE+'.')},a.addFocusListener=function(){var e=this;this.$bmdFormGroup.on('focus',function(){e.addFormGroupFocus()}).on('blur',function(){e.removeFormGroupFocus()})},a.addChangeListener=function(){var t=this;this.$element.on('change',function(){var n='';e.each(t.$element.files,function(e,t){n+=t.name+'  , '}),n=n.substring(0,n.length-2),n?t.addIsFilled():t.removeIsFilled(),t.$bmdFormGroup.find(s.FILENAMES).val(n)})},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(A);return e.fn[o]=d._jQueryInterface,e.fn[o].Constructor=d,e.fn[o].noConflict=function(){return e.fn[o]=a,d._jQueryInterface},d}(jQuery),O=function(e){var t='radio',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={template:'<span class=\'bmd-radio\'></span>'},l=function(o){function a(n,a,r){return void 0===r&&(r={inputType:t,outerClass:t}),o.call(this,n,e.extend(!0,i,a),r)||this}r(a,o);var l=a.prototype;return l.dispose=function(e){void 0===e&&(e=n),o.prototype.dispose.call(this,e)},a.matches=function(e){return'radio'===e.attr('type')},a.rejectMatch=function(e,t){E.assert(this.$element,this.matches(t),e+' component element '+E.describe(t)+' is invalid for type=\'radio\'.')},a._jQueryInterface=function(t){return this.each(function(){var o=e(this),r=o.data(n);r||(r=new a(o,t),o.data(n,r))})},a}(C);return e.fn[o]=l._jQueryInterface,e.fn[o].Constructor=l,e.fn[o].noConflict=function(){return e.fn[o]=a,l._jQueryInterface},l}(jQuery),y=function(e){var t='radioInline',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={bmdFormGroup:{create:!1,required:!1}},l=function(t){function o(n,o,a){return void 0===a&&(a={inputType:'radio',outerClass:'radio-inline'}),t.call(this,n,e.extend(!0,{},i,o),a)||this}r(o,t);var a=o.prototype;return a.dispose=function(){t.prototype.dispose.call(this,n)},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(O);return e.fn[o]=l._jQueryInterface,e.fn[o].Constructor=l,e.fn[o].noConflict=function(){return e.fn[o]=a,l._jQueryInterface},l}(jQuery),D=function(e){var t={requiredClasses:['form-control']},n=function(n){function o(o,a){var r;return r=n.call(this,o,e.extend(!0,t,a))||this,r.isEmpty()&&r.removeIsFilled(),r}return r(o,n),o}(A);return n}(jQuery),S=function(e){var t='select',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={requiredClasses:['form-control||custom-select']},l=function(t){function o(n,o){var a;return a=t.call(this,n,e.extend(!0,i,o))||this,a.addIsFilled(),a}r(o,t);var a=o.prototype;return a.dispose=function(){t.prototype.dispose.call(this,n)},o.matches=function(e){return'select'===e.prop('tagName')},o.rejectMatch=function(e,t){E.assert(this.$element,this.matches(t),e+' component element '+E.describe(t)+' is invalid for <select>.')},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(D);return e.fn[o]=l._jQueryInterface,e.fn[o].Constructor=l,e.fn[o].noConflict=function(){return e.fn[o]=a,l._jQueryInterface},l}(jQuery),v=function(e){var t='switch',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={template:'<span class=\'bmd-switch-track\'></span>'},l=function(t){function o(n,o,a){return void 0===a&&(a={inputType:'checkbox',outerClass:'switch'}),t.call(this,n,e.extend(!0,{},i,o),a)||this}r(o,t);var a=o.prototype;return a.dispose=function(){t.prototype.dispose.call(this,n)},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(I);return e.fn[o]=l._jQueryInterface,e.fn[o].Constructor=l,e.fn[o].noConflict=function(){return e.fn[o]=a,l._jQueryInterface},l}(jQuery),R=function(e){var t='text',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={},l=function(t){function o(n,o){return t.call(this,n,e.extend(!0,i,o))||this}r(o,t);var a=o.prototype;return a.dispose=function(e){void 0===e&&(e=n),t.prototype.dispose.call(this,e)},o.matches=function(e){return'text'===e.attr('type')},o.rejectMatch=function(e,t){E.assert(this.$element,this.matches(t),e+' component element '+E.describe(t)+' is invalid for type=\'text\'.')},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(D);return e.fn[o]=l._jQueryInterface,e.fn[o].Constructor=l,e.fn[o].noConflict=function(){return e.fn[o]=a,l._jQueryInterface},l}(jQuery),M=function(e){var t='textarea',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={},l=function(t){function o(n,o){return t.call(this,n,e.extend(!0,i,o))||this}r(o,t);var a=o.prototype;return a.dispose=function(){t.prototype.dispose.call(this,n)},o.matches=function(e){return'textarea'===e.prop('tagName')},o.rejectMatch=function(e,t){E.assert(this.$element,this.matches(t),e+' component element '+E.describe(t)+' is invalid for <textarea>.')},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(D);return e.fn[o]=l._jQueryInterface,e.fn[o].Constructor=l,e.fn[o].noConflict=function(){return e.fn[o]=a,l._jQueryInterface},l}(jQuery),L=function(e){if('undefined'==typeof Popper)throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');var t='dropdown',n='bs.dropdown',a='.'+n,r='.data-api',i=e.fn[t],s=27,d=32,c=9,_=/38|40|27/,p={HIDE:'hide'+a,HIDDEN:'hidden'+a,SHOW:'show'+a,SHOWN:'shown'+a,CLICK:'click'+a,CLICK_DATA_API:'click'+a+r,KEYDOWN_DATA_API:'keydown'+a+r,KEYUP_DATA_API:'keyup'+a+r,TRANSITION_END:'transitionend webkitTransitionEnd oTransitionEnd animationend webkitAnimationEnd oAnimationEnd'},m={DISABLED:'disabled',SHOW:'show',SHOWING:'showing',HIDING:'hiding',DROPUP:'dropup',MENURIGHT:'dropdown-menu-right',MENULEFT:'dropdown-menu-left'},g={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:'.dropdown form',MENU:'.dropdown-menu',NAVBAR_NAV:'.navbar-nav',VISIBLE_ITEMS:'.dropdown-menu .dropdown-item:not(.disabled)'},f={TOP:'top-start',TOPEND:'top-end',BOTTOM:'bottom-start',BOTTOMEND:'bottom-end'},u={placement:f.BOTTOM,offset:0,flip:!0},E={placement:'string',offset:'(number|string)',flip:'boolean'},h=function(){function r(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=r.prototype;return i.toggle=function(){var t=this;if(!(this._element.disabled||e(this._element).hasClass(m.DISABLED))){var n=r._getParentFromElement(this._element),o=e(this._menu).hasClass(m.SHOW);if(r._clearMenus(),!o){var a={relatedTarget:this._element},i=e.Event(p.SHOW,a);if(e(n).trigger(i),!i.isDefaultPrevented()){var l=this._element;e(n).hasClass(m.DROPUP)&&(e(this._menu).hasClass(m.MENULEFT)||e(this._menu).hasClass(m.MENURIGHT))&&(l=n),this._popper=new Popper(l,this._menu,this._getPopperConfig()),'ontouchstart'in document.documentElement&&!e(n).closest(g.NAVBAR_NAV).length&&e('body').children().on('mouseover',null,e.noop),this._element.focus(),this._element.setAttribute('aria-expanded',!0),e(this._menu).one(p.TRANSITION_END,function(){e(n).trigger(e.Event(p.SHOWN,a)),e(t._menu).removeClass(m.SHOWING)}),e(this._menu).addClass(m.SHOW+' '+m.SHOWING),e(n).addClass(m.SHOW)}}}},i.dispose=function(){e.removeData(this._element,n),e(this._element).off(a),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on(p.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},i._getConfig=function(n){var o=e(this._element).data();return void 0!==o.placement&&(o.placement=f[o.placement.toUpperCase()]),n=e.extend({},this.constructor.Default,e(this._element).data(),n),l.typeCheckConfig(t,n,this.constructor.DefaultType),n},i._getMenuElement=function(){if(!this._menu){var t=r._getParentFromElement(this._element);this._menu=e(t).find(g.MENU)[0]}return this._menu},i._getPlacement=function(){var t=e(this._element).parent(),n=this._config.placement;return t.hasClass(m.DROPUP)||this._config.placement===f.TOP?(n=f.TOP,e(this._menu).hasClass(m.MENURIGHT)&&(n=f.TOPEND)):e(this._menu).hasClass(m.MENURIGHT)&&(n=f.BOTTOMEND),n},i._detectNavbar=function(){return 0<e(this._element).closest('.navbar').length},i._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:{offset:this._config.offset},flip:{enabled:this._config.flip}}};return this._inNavbar&&(e.modifiers.applyStyle={enabled:!this._inNavbar}),e},r._jQueryInterface=function(t){return this.each(function(){var o=e(this).data(n),a='object'==typeof t?t:null;if(o||(o=new r(this,a),e(this).data(n,o)),'string'==typeof t){if(void 0===o[t])throw new Error('No method named "'+t+'"');o[t]()}})},r._clearMenus=function(t){if(!(t&&(t.which===3||'keyup'===t.type&&t.which!==c)))for(var o,a=e.makeArray(e(g.DATA_TOGGLE)),l=function(o){var i=r._getParentFromElement(a[o]),l=e(a[o]).data(n),s={relatedTarget:a[o]};if(!l)return'continue';var d=l._menu;if(!e(i).hasClass(m.SHOW))return'continue';if(t&&('click'===t.type&&/input|textarea/i.test(t.target.tagName)||'keyup'===t.type&&t.which===c)&&e.contains(i,t.target))return'continue';var _=e.Event(p.HIDE,s);return e(i).trigger(_),_.isDefaultPrevented()?'continue':void(('ontouchstart'in document.documentElement)&&e('body').children().off('mouseover',null,e.noop),a[o].setAttribute('aria-expanded','false'),e(d).addClass(m.HIDING).removeClass(m.SHOW),e(i).removeClass(m.SHOW),e(d).one(p.TRANSITION_END,function(){e(i).trigger(e.Event(p.HIDDEN,s)),e(d).removeClass(m.HIDING)}))},s=0;s<a.length;s++)o=l(s),'continue'===o},r._getParentFromElement=function(t){var n,o=l.getSelectorFromElement(t);return o&&(n=e(o)[0]),n||t.parentNode},r._dataApiKeydownHandler=function(t){if(!(!_.test(t.which)||/button/i.test(t.target.tagName)&&t.which===d||/input|textarea/i.test(t.target.tagName))&&(t.preventDefault(),t.stopPropagation(),!(this.disabled||e(this).hasClass(m.DISABLED)))){var n=r._getParentFromElement(this),o=e(n).hasClass(m.SHOW);if(!o&&(t.which!==s||t.which!==d)||o&&(t.which===s||t.which===d)){if(t.which===s){var a=e(n).find(g.DATA_TOGGLE)[0];e(a).trigger('focus')}return void e(this).trigger('click')}var i=e(n).find(g.VISIBLE_ITEMS).get();if(i.length){var l=i.indexOf(t.target);t.which===38&&0<l&&l--,t.which===40&&l<i.length-1&&l++,0>l&&(l=0),i[l].focus()}}},o(r,null,[{key:'VERSION',get:function(){return'4.0.0-beta'}},{key:'Default',get:function(){return u}},{key:'DefaultType',get:function(){return E}}]),r}();return e(document).on(p.KEYDOWN_DATA_API,g.DATA_TOGGLE,h._dataApiKeydownHandler).on(p.KEYDOWN_DATA_API,g.MENU,h._dataApiKeydownHandler).on(p.CLICK_DATA_API+' '+p.KEYUP_DATA_API,h._clearMenus).on(p.CLICK_DATA_API,g.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),h._jQueryInterface.call(e(this),'toggle')}).on(p.CLICK_DATA_API,g.FORM_CHILD,function(t){t.stopPropagation()}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=i,h._jQueryInterface},h}(jQuery),U=function(e){var t={CANVAS:'bmd-layout-canvas',CONTAINER:'bmd-layout-container',BACKDROP:'bmd-layout-backdrop'},n={CANVAS:'.'+t.CANVAS,CONTAINER:'.'+t.CONTAINER,BACKDROP:'.'+t.BACKDROP},o={canvas:{create:!0,required:!0,template:'<div class="'+t.CANVAS+'"></div>'},backdrop:{create:!0,required:!0,template:'<div class="'+t.BACKDROP+'"></div>'}},a=function(t){function a(n,a,r){var i;return void 0===r&&(r={}),i=t.call(this,n,e.extend(!0,{},o,a),r)||this,i.$container=i.findContainer(!0),i.$backdrop=i.resolveBackdrop(),i.resolveCanvas(),i}r(a,t);var i=a.prototype;return i.dispose=function(e){t.prototype.dispose.call(this,e),this.$container=null,this.$backdrop=null},i.resolveCanvas=function(){var e=this.findCanvas(!1);return(void 0===e||0===e.length)&&(this.config.canvas.create&&this.$container.wrap(this.config.canvas.template),e=this.findCanvas(this.config.canvas.required)),e},i.findCanvas=function(t,o){void 0===t&&(t=!0),void 0===o&&(o=this.$container);var a=o.closest(n.CANVAS);return 0===a.length&&t&&e.error('Failed to find '+n.CANVAS+' for '+E.describe(o)),a},i.resolveBackdrop=function(){var e=this.findBackdrop(!1);return(void 0===e||0===e.length)&&(this.config.backdrop.create&&this.$container.append(this.config.backdrop.template),e=this.findBackdrop(this.config.backdrop.required)),e},i.findBackdrop=function(t,o){void 0===t&&(t=!0),void 0===o&&(o=this.$container);var a=o.find('> '+n.BACKDROP);return 0===a.length&&t&&e.error('Failed to find '+n.BACKDROP+' for '+E.describe(o)),a},i.findContainer=function(t,o){void 0===t&&(t=!0),void 0===o&&(o=this.$element);var a=o.closest(n.CONTAINER);return 0===a.length&&t&&e.error('Failed to find '+n.CONTAINER+' for '+E.describe(o)),a},a}(h);return a}(jQuery),P=function(e){var t='drawer',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={ESCAPE:27},l={IN:'in',DRAWER_IN:'bmd-drawer-in',DRAWER_OUT:'bmd-drawer-out',DRAWER:'bmd-layout-drawer',CONTAINER:'bmd-layout-container'},s={focusSelector:'a, button, input'},d=function(t){function o(n,o){var a;return a=t.call(this,n,e.extend(!0,{},s,o))||this,a.$toggles=e('[data-toggle="drawer"][href="#'+a.$element[0].id+'"], [data-toggle="drawer"][data-target="#'+a.$element[0].id+'"]'),a._addAria(),a.$backdrop.keydown(function(e){e.which===i.ESCAPE&&a.hide()}).click(function(){a.hide()}),a.$element.keydown(function(e){e.which===i.ESCAPE&&a.hide()}),a.$toggles.click(function(){a.toggle()}),a}r(o,t);var a=o.prototype;return a.dispose=function(){t.prototype.dispose.call(this,n),this.$toggles=null},a.toggle=function(){this._isOpen()?this.hide():this.show()},a.show=function(){if(!(this._isForcedClosed()||this._isOpen())){this.$toggles.attr('aria-expanded',!0),this.$element.attr('aria-expanded',!0),this.$element.attr('aria-hidden',!1);var e=this.$element.find(this.config.focusSelector);0<e.length&&e.first().focus(),this.$container.addClass(l.DRAWER_IN),this.$backdrop.addClass(l.IN)}},a.hide=function(){this._isOpen()&&(this.$toggles.attr('aria-expanded',!1),this.$element.attr('aria-expanded',!1),this.$element.attr('aria-hidden',!0),this.$container.removeClass(l.DRAWER_IN),this.$backdrop.removeClass(l.IN))},a._isOpen=function(){return this.$container.hasClass(l.DRAWER_IN)},a._isForcedClosed=function(){return this.$container.hasClass(l.DRAWER_OUT)},a._addAria=function(){var e=this._isOpen();this.$element.attr('aria-expanded',e),this.$element.attr('aria-hidden',e),this.$toggles.length&&this.$toggles.attr('aria-expanded',e)},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(U);return e.fn[o]=d._jQueryInterface,e.fn[o].Constructor=d,e.fn[o].noConflict=function(){return e.fn[o]=a,d._jQueryInterface},d}(jQuery),w=function(e){var t='ripples',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],r={CONTAINER:'ripple-container',DECORATOR:'ripple-decorator'},l={CONTAINER:'.'+r.CONTAINER,DECORATOR:'.'+r.DECORATOR},s={container:{template:'<div class=\''+r.CONTAINER+'\'></div>'},decorator:{template:'<div class=\''+r.DECORATOR+'\'></div>'},trigger:{start:'mousedown touchstart',end:'mouseup mouseleave touchend'},touchUserAgentRegex:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,duration:500},d=function(){function t(t,n){var o=this;this.$element=t,this.config=e.extend(!0,{},s,n),this.$element.on(this.config.trigger.start,function(e){o._onStartRipple(e)})}var o=t.prototype;return o.dispose=function(){this.$element.data(n,null),this.$element=null,this.$container=null,this.$decorator=null,this.config=null},o._onStartRipple=function(e){var t=this;if(!(this._isTouch()&&'mousedown'===e.type)){this._findOrCreateContainer();var n=this._getRelY(e),o=this._getRelX(e);(n||o)&&(this.$decorator.css({left:o,top:n,"background-color":this._getRipplesColor()}),this._forceStyleApplication(),this.rippleOn(),setTimeout(function(){t.rippleEnd()},this.config.duration),this.$element.on(this.config.trigger.end,function(){t.$decorator&&(t.$decorator.data('mousedown','off'),'off'===t.$decorator.data('animating')&&t.rippleOut())}))}},o._findOrCreateContainer=function(){(!this.$container||0<!this.$container.length)&&(this.$element.append(this.config.container.template),this.$container=this.$element.find(l.CONTAINER)),this.$container.append(this.config.decorator.template),this.$decorator=this.$container.find(l.DECORATOR)},o._forceStyleApplication=function(){return window.getComputedStyle(this.$decorator[0]).opacity},o._getRelX=function(e){var t=this.$container.offset(),n=null;return this._isTouch()?(e=e.originalEvent,n=1===e.touches.length&&e.touches[0].pageX-t.left):n=e.pageX-t.left,n},o._getRelY=function(e){var t=this.$container.offset(),n=null;return this._isTouch()?(e=e.originalEvent,n=1===e.touches.length&&e.touches[0].pageY-t.top):n=e.pageY-t.top,n},o._getRipplesColor=function(){var e=this.$element.data('ripple-color')?this.$element.data('ripple-color'):window.getComputedStyle(this.$element[0]).color;return e},o._isTouch=function(){return this.config.touchUserAgentRegex.test(navigator.userAgent)},o.rippleEnd=function(){this.$decorator&&(this.$decorator.data('animating','off'),'off'===this.$decorator.data('mousedown')&&this.rippleOut(this.$decorator))},o.rippleOut=function(){var e=this;this.$decorator.off(),E.transitionEndSupported()?this.$decorator.addClass('ripple-out'):this.$decorator.animate({opacity:0},100,function(){e.$decorator.trigger('transitionend')}),this.$decorator.on(E.transitionEndSelector(),function(){e.$decorator&&(e.$decorator.remove(),e.$decorator=null)})},o.rippleOn=function(){var e=this,t=this._getNewSize();E.transitionEndSupported()?this.$decorator.css({"-ms-transform":'scale('+t+')',"-moz-transform":'scale('+t+')',"-webkit-transform":'scale('+t+')',transform:'scale('+t+')'}).addClass('ripple-on').data('animating','on').data('mousedown','on'):this.$decorator.animate({width:2*i(this.$element.outerWidth(),this.$element.outerHeight()),height:2*i(this.$element.outerWidth(),this.$element.outerHeight()),"margin-left":-1*i(this.$element.outerWidth(),this.$element.outerHeight()),"margin-top":-1*i(this.$element.outerWidth(),this.$element.outerHeight()),opacity:0.2},this.config.duration,function(){e.$decorator.trigger('transitionend')})},o._getNewSize=function(){return 2.5*(i(this.$element.outerWidth(),this.$element.outerHeight())/this.$decorator.outerWidth())},t._jQueryInterface=function(o){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new t(a,o),a.data(n,r))})},t}();return e.fn[o]=d._jQueryInterface,e.fn[o].Constructor=d,e.fn[o].noConflict=function(){return e.fn[o]=a,d._jQueryInterface},d}(jQuery),k=function(e){var t='autofill',n='bmd.'+t,o='bmd'+(t.charAt(0).toUpperCase()+t.slice(1)),a=e.fn[o],i={},l=function(t){function o(n,o){var a;return a=t.call(this,n,e.extend(!0,{},i,o))||this,a._watchLoading(),a._attachEventHandlers(),a}r(o,t);var a=o.prototype;return a.dispose=function(){t.prototype.dispose.call(this,n)},a._watchLoading=function(){var e=this;setTimeout(function(){clearInterval(e._onLoading)},1e4)},a._onLoading=function(){setInterval(function(){e('input[type!=checkbox]').each(function(t,n){var o=e(n);o.val()&&o.val()!==o.attr('value')&&o.trigger('change')})},100)},a._attachEventHandlers=function(){var t=null;e(document).on('focus','input',function(n){var o=e(n.currentTarget).closest('form').find('input').not('[type=file]');t=setInterval(function(){o.each(function(t,n){var o=e(n);o.val()!==o.attr('value')&&o.trigger('change')})},100)}).on('blur','.form-group input',function(){clearInterval(t)})},o._jQueryInterface=function(t){return this.each(function(){var a=e(this),r=a.data(n);r||(r=new o(a,t),a.data(n,r))})},o}(h);return e.fn[o]=l._jQueryInterface,e.fn[o].Constructor=l,e.fn[o].noConflict=function(){return e.fn[o]=a,l._jQueryInterface},l}(jQuery);Popper.Defaults.modifiers.computeStyle.gpuAcceleration=!1;(function(t){var e='bootstrapMaterialDesign',n='bmd.'+e,o=e,a=t.fn[o],r={global:{validate:!1,label:{className:'bmd-label-static'}},autofill:{selector:'body'},checkbox:{selector:'.checkbox > label > input[type=checkbox]'},checkboxInline:{selector:'label.checkbox-inline > input[type=checkbox]'},collapseInline:{selector:'.bmd-collapse-inline [data-toggle="collapse"]'},drawer:{selector:'.bmd-layout-drawer'},file:{selector:'input[type=file]'},radio:{selector:'.radio > label > input[type=radio]'},radioInline:{selector:'label.radio-inline > input[type=radio]'},ripples:{selector:['.btn:not(.ripple-none)','.card-image:not(.ripple-none)','.navbar a:not(.ripple-none)','.dropdown-menu a:not(.ripple-none)','.nav-tabs a:not(.ripple-none)','.pagination li:not(.active):not(.disabled) a:not(.ripple-none)','.ripple']},select:{selector:['select']},switch:{selector:'.switch > label > input[type=checkbox]'},text:{selector:['input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset])']},textarea:{selector:['textarea']},arrive:!0,instantiation:['ripples','checkbox','checkboxInline','collapseInline','drawer','radio','radioInline','switch','text','textarea','autofill']},i=function(){function e(e,n){var o=this;this.$element=e,this.config=t.extend(!0,{},r,n);for(var a=t(document),i=function(e){var n=o.config[e];if(n){var r=o._resolveSelector(n);n=t.extend(!0,{},o.config.global,n);var i=''+(e.charAt(0).toUpperCase()+e.slice(1)),l='bmd'+i;try{t(r)[l](n),document.arrive&&o.config.arrive&&a.arrive(r,function(){t(this)[l](n)})}catch(o){var s='Failed to instantiate component: $(\''+r+'\')['+l+']('+n+')';throw console.error(s,o,'\nSelected elements: ',t(r)),o}}},l=this.config.instantiation,s=Array.isArray(l),d=0,l=s?l:l[Symbol.iterator]();;){var c;if(s){if(d>=l.length)break;c=l[d++]}else{if(d=l.next(),d.done)break;c=d.value}var _=c;i(_)}}var o=e.prototype;return o.dispose=function(){this.$element.data(n,null),this.$element=null,this.config=null},o._resolveSelector=function(e){var t=e.selector;return Array.isArray(t)&&(t=t.join(', ')),t},e._jQueryInterface=function(o){return this.each(function(){var a=t(this),r=a.data(n);r||(r=new e(a,o),a.data(n,r))})},e}();return t.fn[o]=i._jQueryInterface,t.fn[o].Constructor=i,t.fn[o].noConflict=function(){return t.fn[o]=a,i._jQueryInterface},i})(jQuery)});
/*! =========================================================
 *
 * Material Dashboard - V2.0.0
 *
 * =========================================================
 *
 * Copyright 2018 Creative Tim (http://www.creative-tim.com/product/material-dashboard)
 *
 *
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \|     |// '.
 *                 / \|||  :  |||// \
 *                / _||||| -:- |||||- \
 *               |   | \\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *
 *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *               Buddha Bless:  "No Bugs"
 *
 * ========================================================= */

(function() {
    isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows && !$('body').hasClass('sidebar-mini')) {
        // if we are on windows OS we activate the perfectScrollbar function
        // $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

        $('html').addClass('perfect-scrollbar-on');
    } else {
        $('html').addClass('perfect-scrollbar-off');
    }
})();

var breakCards = true;

var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var mobile_menu_visible = 0,
    mobile_menu_initialized = false,
    toggle_initialized = false,
    bootstrap_nav_initialized = false;

var seq = 0,
    delays = 80,
    durations = 500;
var seq2 = 0,
    delays2 = 80,
    durations2 = 500;


$(document).ready(function() {

   $('body').bootstrapMaterialDesign();

    $sidebar = $('.sidebar');

    md.initSidebarsCheck();

    // if ($('body').hasClass('sidebar-mini')) {
    //     md.misc.sidebar_mini_active = true;
    // }

    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    md.checkSidebarImage();

    md.initMinimizeSidebar();

    //    Activate bootstrap-select
    if ($(".selectpicker").length != 0) {
        $(".selectpicker").selectpicker();
    }

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    //Activate tags
    // we style the badges with our colors
    var tagClass = $('.tagsinput').data('color');

   if($(".tagsinput").length != 0){
     $('.tagsinput').tagsinput();
   }

   $('.bootstrap-tagsinput').addClass(''+ tagClass +'-badge');

    //    Activate bootstrap-select
    $(".select").dropdown({
        "dropdownClass": "dropdown-menu",
        "optionClass": ""
    });

    $('.form-control').on("focus", function() {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function() {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });


    if (breakCards == true) {
        // We break the cards headers if there is too much stress on them :-)
        $('[data-header-animation="true"]').each(function() {
            var $fix_button = $(this)
            var $card = $(this).parent('.card');

            $card.find('.fix-broken-card').click(function() {
                console.log(this);
                var $header = $(this).parent().parent().siblings('.card-header, .card-header-image');

                $header.removeClass('hinge').addClass('fadeInDown');

                $card.attr('data-count', 0);

                setTimeout(function() {
                    $header.removeClass('fadeInDown animate');
                }, 480);
            });

            $card.mouseenter(function() {
                var $this = $(this);
                hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                $this.attr("data-count", hover_count);

                if (hover_count >= 20) {
                    $(this).children('.card-header, .card-header-image').addClass('hinge animated');
                }
            });
        });
    }

    // remove class has-error for checkbox validation
    $('input[type="checkbox"][required="true"], input[type="radio"][required="true"]').on('click', function() {
        if ($(this).hasClass('error')) {
            $(this).closest('div').removeClass('has-error');
        }
    });

});

$(document).on('click', '.navbar-toggler', function() {
    $toggle = $(this);

    if (mobile_menu_visible == 1) {
        $('html').removeClass('nav-open');

        $('.close-layer').remove();
        setTimeout(function() {
            $toggle.removeClass('toggled');
        }, 400);

        mobile_menu_visible = 0;
    } else {
        setTimeout(function() {
            $toggle.addClass('toggled');
        }, 430);

        var $layer = $('<div class="close-layer"></div>');

        if ($('body').find('.main-panel').length != 0) {
            $layer.appendTo(".main-panel");

        } else if (($('body').hasClass('off-canvas-sidebar'))) {
            $layer.appendTo(".wrapper-full-page");
        }

        setTimeout(function() {
            $layer.addClass('visible');
        }, 100);

        $layer.click(function() {
            $('html').removeClass('nav-open');
            mobile_menu_visible = 0;

            $layer.removeClass('visible');

            setTimeout(function() {
                $layer.remove();
                $toggle.removeClass('toggled');

            }, 400);
        });

        $('html').addClass('nav-open');
        mobile_menu_visible = 1;

    }

});

// activate collapse right menu when the windows is resized
$(window).resize(function() {
    md.initSidebarsCheck();

    // reset the seq for charts drawing animations
    seq = seq2 = 0;

    setTimeout(function() {
        demo.initDashboardPageCharts();
    }, 500);
});

md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    },

    checkSidebarImage: function() {
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');

        if (image_src !== undefined) {
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>';
            $sidebar.append(sidebar_container);
        }
    },

    initFormExtendedDatetimepickers: function(){
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
         });

         $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
         });

         $('.timepicker').datetimepicker({
//          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'

            }
         });
    },


    initSliders: function(){
        // Sliders for demo purpose
        var slider = document.getElementById('sliderRegular');

        noUiSlider.create(slider, {
            start: 40,
            connect: [true,false],
            range: {
                min: 0,
                max: 100
            }
        });

        var slider2 = document.getElementById('sliderDouble');

        noUiSlider.create(slider2, {
            start: [ 20, 60 ],
            connect: true,
            range: {
                min:  0,
                max:  100
            }
        });
    },

    initSidebarsCheck: function() {
        if ($(window).width() <= 991) {
            if ($sidebar.length != 0) {
                md.initRightMenu();
            }
        }
    },

    initMinimizeSidebar: function() {

        $('#minimizeSidebar').click(function() {
            var $btn = $(this);

            if (md.misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;
            } else {
                $('body').addClass('sidebar-mini');
                md.misc.sidebar_mini_active = true;
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function() {
                window.dispatchEvent(new Event('resize'));
            }, 180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function() {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    },

    checkScrollForTransparentNavbar: debounce(function() {
        if ($(document).scrollTop() > 260) {
            if (transparent) {
                transparent = false;
                $('.navbar-color-on-scroll').removeClass('navbar-transparent');
            }
        } else {
            if (!transparent) {
                transparent = true;
                $('.navbar-color-on-scroll').addClass('navbar-transparent');
            }
        }
    }, 17),


    initRightMenu: debounce(function() {
        $sidebar_wrapper = $('.sidebar-wrapper');

        if (!mobile_menu_initialized) {
            $navbar = $('nav').find('.navbar-collapse').children('.navbar-nav');

            mobile_menu_content = '';

            nav_content = $navbar.html();

            nav_content = '<ul class="nav navbar-nav nav-mobile-menu">' + nav_content + '</ul>';

            navbar_form = $('nav').find('.navbar-form').get(0).outerHTML;

            $sidebar_nav = $sidebar_wrapper.find(' > .nav');

            // insert the navbar form before the sidebar list
            $nav_content = $(nav_content);
            $navbar_form = $(navbar_form);
            $nav_content.insertBefore($sidebar_nav);
            $navbar_form.insertBefore($nav_content);

            $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
                event.stopPropagation();

            });

            // simulate resize so all the charts/maps will be redrawn
            window.dispatchEvent(new Event('resize'));

            mobile_menu_initialized = true;
        } else {
            if ($(window).width() > 991) {
                // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
                $sidebar_wrapper.find('.navbar-form').remove();
                $sidebar_wrapper.find('.nav-mobile-menu').remove();

                mobile_menu_initialized = false;
            }
        }
    }, 200),


    // initBootstrapNavbarMenu: debounce(function(){
    //
    //     if(!bootstrap_nav_initialized){
    //         $navbar = $('nav').find('.navbar-collapse').first().clone(true);
    //
    //         nav_content = '';
    //         mobile_menu_content = '';
    //
    //         //add the content from the regular header to the mobile menu
    //         $navbar.children('ul').each(function(){
    //             content_buff = $(this).html();
    //             nav_content = nav_content + content_buff;
    //         });
    //
    //         nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';
    //
    //         $navbar.html(nav_content);
    //         $navbar.addClass('off-canvas-sidebar');
    //
    //         // append it to the body, so it will come from the right side of the screen
    //         $('body').append($navbar);
    //
    //         $toggle = $('.navbar-toggle');
    //
    //         $navbar.find('a').removeClass('btn btn-round btn-default');
    //         $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
    //         $navbar.find('button').addClass('btn-simple btn-block');
    //
    //         bootstrap_nav_initialized = true;
    //     }
    // }, 500),

    startAnimationForLineChart: function(chart) {

        chart.on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq = 0;
    },
    startAnimationForBarChart: function(chart) {

        chart.on('draw', function(data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq2 = 0;
    }
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};
