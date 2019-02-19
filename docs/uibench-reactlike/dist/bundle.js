!function(){"use strict";function r(e,n){e.prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n}var c=Array.isArray;function d(e){var n=typeof e;return"string"===n||"number"===n}function _(e){return h(e)||H(e)}function $(e){return H(e)||false===e||true===e||h(e)}function j(e){return"function"==typeof e}function p(e){return"string"==typeof e}function H(e){return null===e}function h(e){return void 0===e}function v(e){return"object"==typeof e}function C(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var l in n)t[l]=n[l];return t}var Q={};function g(e){return e.substr(2).toLowerCase()}function w(e,n){e.appendChild(n)}function X(e,n,t){H(t)?w(e,n):e.insertBefore(n,t)}function U(e,n){e.removeChild(n)}function f(e){for(var n;void 0!==(n=e.shift());)n()}function G(e,n){for(var t,r;e;){if(2033&(t=e.flags))return e.dom;r=e.children,e=8192&t?2===e.childFlags?r:r[n?0:r.length-1]:4&t?r.$LI:r}return null}function x(e,n){var t=e.flags;if(2033&t)U(n,e.dom);else{var r=e.children;if(4&t)x(r.$LI,n);else if(8&t)x(r,n);else if(8192&t)if(2===e.childFlags)x(r,n);else for(var l=0,a=r.length;l<a;++l)x(r[l],n)}}function L(e,n,t){var r=e.flags;if(2033&r)X(n,e.dom,t);else{var l=e.children;if(4&r)L(l.$LI,n,t);else if(8&r)L(l,n,t);else if(8192&r)if(2===e.childFlags)L(l,n,t);else for(var a=0,o=l.length;a<o;++a)L(l[a],n,t)}}function K(e,n,t){return e.constructor.getDerivedStateFromProps?C(t,e.constructor.getDerivedStateFromProps(n,t)):t}var m={v:false},y={componentComparator:null,createVNode:null,renderComplete:null};function q(e,n){e.textContent=n}function b(e,n){return e&&n&&v(e)&&v(n)&&e.event===n.event&&e.data===n.data}var k="$";function S(e,n,t,r,l,a,o,i){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===l?null:l,this.props=void 0===a?null:a,this.ref=void 0===o?null:o,this.type=i}function a(e,n,t,r,l,a,o,i){var u=void 0===l?1:l,s=new S(u,r,t,e,o,a,i,n),f=y.createVNode;return j(f)&&f(s),0===u&&function(e,n){var t,r=1;if($(n))t=n;else if(d(n))r=16,t=n;else if(c(n)){for(var l=n.length,a=0;a<l;++a){var o=n[a];if($(o)||c(o)){F(n,t=t||n.slice(0,a),a,"");break}if(d(o))(t=t||n.slice(0,a)).push(P(o,k+a));else{var i=o.key,u=0<(81920&o.flags),s=H(i),f=p(i)&&i[0]===k;u||s||f?(t=t||n.slice(0,a),(u||f)&&(o=J(o)),(s||f)&&(o.key=k+a),t.push(o)):t&&t.push(o),o.flags|=65536}}r=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=J(n)),r=2;e.children=t,e.childFlags=r}(s,s.children),s}function o(e,n,t,r,l){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var a=n.defaultProps;if(!_(a))for(var o in t||(t={}),a)h(t[o])&&(t[o]=a[o]);if(0<(8&e)&&0==(32768&e)){var i=n.defaultHooks;if(!_(i))if(l)for(var u in i)h(l[u])&&(l[u]=i[u]);else l=i}var s=new S(1,null,null,e,r,t,l,n),f=y.createVNode;return j(f)&&f(s),s}function P(e,n){return new S(1,_(e)?"":e,null,16,n,null,null,null)}function i(e,n,t){var r=a(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=z(),r.childFlags=2;break;case 16:r.children=[P(e)],r.childFlags=4}return r}function J(e){var n=-16385&e.flags,t=e.props;if(14&n&&!H(t)){var r=t;for(var l in t={},r)t[l]=r[l]}return 0==(8192&n)?new S(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type):function(e){var n,t=e.children,r=e.childFlags;if(2===r)n=J(t);else if(12&r){n=[];for(var l=0,a=t.length;l<a;++l)n.push(J(t[l]))}return i(n,r,e.key)}(e)}function z(){return P("",null)}function F(e,n,t,r){for(var l=e.length;t<l;t++){var a=e[t];if(!$(a)){var o=r+k+t;if(c(a))F(a,n,0,o);else{if(d(a))a=P(a,o);else{var i=a.key,u=p(i)&&i[0]===k;(81920&a.flags||u)&&(a=J(a)),a.flags|=65536,u?i.substring(0,r.length)!==r&&(a.key=r+i):H(i)?a.key=o:a.key=r+i}n.push(a)}}}}var e="http://www.w3.org/1999/xlink",n="http://www.w3.org/XML/1998/namespace",N={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":n,"xml:lang":n,"xml:space":n};function u(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var s=u(0),V=u(null),I=u(true);function B(e,n,t){var r,l,a=t.$EV;n?(0===s[e]&&(V[e]=(r=e,l=function(e){var n="onClick"===r||"onDblClick"===r;if(n&&0!==e.button)e.stopPropagation();else{e.isDefaultPrevented=T,e.isPropagationStopped=A,e.stopPropagation=M;var t={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return t.dom}}),function(e,n,t,r,l){for(var a=n;!H(a);){if(t&&a.disabled)return;var o=a.$EV;if(o){var i=o[r];if(i&&(l.dom=a,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}a=a.parentNode}}(e,e.target,n,r,t)}},document.addEventListener(g(r),l),l)),a||(a=t.$EV=u(null)),a[e]||++s[e],a[e]=n):a&&a[e]&&(0==--s[e]&&(document.removeEventListener(g(e),V[e]),V[e]=null),a[e]=null)}function M(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function T(){return this.defaultPrevented}function A(){return this.cancelBubble}function D(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var l=n.toLowerCase();e[l]&&e[l](t)}}function t(i,u){var e=function(e){var n=this.$V;if(n){var t=n.props||Q,r=n.dom;if(p(i))D(t,i,e);else for(var l=0;l<i.length;++l)D(t,i[l],e);if(j(u)){var a=this.$V,o=a.props||Q;u(o,r,false,a)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Y(e,n,t){var r="$"+n,l=e[r];l&&l[1].wrapped||(l&&(e.removeEventListener.apply(e,l),e[r]=null),j(t)&&(e.addEventListener(n,t),e[r]=[n,t]))}function Z(e){return"checkbox"===e||"radio"===e}var ee=t("onInput",E),ne=t(["onClick","onChange"],E);function te(e){e.stopPropagation()}function E(e,n){var t=e.type,r=e.value,l=e.checked,a=e.multiple,o=e.defaultValue,i=!_(r);t&&t!==n.type&&n.setAttribute("type",t),_(a)||a===n.multiple||(n.multiple=a),_(o)||i||(n.defaultValue=o+""),Z(t)?(i&&(n.value=r),_(l)||(n.checked=l)):i&&n.value!==r?(n.defaultValue=r,n.value=r):_(l)||(n.checked=l)}te.wrapped=true;var re=t("onChange",W);function W(e,n,t,r){var l=Boolean(e.multiple);_(e.multiple)||l===n.multiple||(n.multiple=l);var a=e.selectedIndex;if(-1===a&&(n.selectedIndex=-1),1!==r.childFlags){var o=e.value;"number"==typeof a&&-1<a&&n.options[a]&&(o=n.options[a].value),t&&_(o)&&(o=e.defaultValue),function e(n,t){if("option"===n.type)u=t,s=(i=n).props||Q,(f=i.dom).value=s.value,s.value===u||c(u)&&-1!==u.indexOf(s.value)?f.selected=true:_(u)&&_(s.selected)||(f.selected=s.selected||false);else{var r=n.children,l=n.flags;if(4&l)e(r.$LI,t);else if(8&l)e(r,t);else if(2===n.childFlags)e(r,t);else if(12&n.childFlags)for(var a=0,o=r.length;a<o;++a)e(r[a],t)}var i,u,s,f}(r,o)}}var O,R,le=t("onInput",oe),ae=t("onChange");function oe(e,n,t){var r=e.value,l=n.value;if(_(r)){if(t){var a=e.defaultValue;_(a)||a===l||(n.defaultValue=a,n.value=a)}}else l!==r&&(n.defaultValue=r,n.value=r)}function ie(e,n,t,r,l,a){64&e?E(r,t):256&e?W(r,t,l,n):128&e&&oe(r,t,l),a&&(t.$V=n)}function ue(e){return e.type&&Z(e.type)?!_(e.checked):!_(e.value)}function se(e){e&&(j(e)?e(null):e.current&&(e.current=null))}function fe(e,n,t){var r,l;e&&(j(e)?(r=n,l=e,t.push(function(){l(r)})):void 0!==e.current&&(e.current=n))}function ce(e,n){de(e),n&&x(e,n)}function de(e){var n,t=e.flags,r=e.children;if(481&t){n=e.ref;var l=e.props;se(n);var a=e.childFlags;if(!H(l))for(var o=Object.keys(l),i=0,u=o.length;i<u;i++){var s=o[i];I[s]&&B(s,null,e.dom)}12&a?pe(r):2===a&&de(r)}else r&&(4&t?(j(r.componentWillUnmount)&&r.componentWillUnmount(),se(e.ref),r.$UN=true,de(r.$LI)):8&t?(!_(n=e.ref)&&j(n.onComponentWillUnmount)&&n.onComponentWillUnmount(G(e,true),e.props||Q),de(r)):1024&t?ce(r,e.ref):8192&t&&12&e.childFlags&&pe(r))}function pe(e){for(var n=0,t=e.length;n<t;++n)de(e[n])}function he(e){e.textContent=""}function ve(e,n,t){pe(t),8192&n.flags?x(n,e):he(e)}function ge(u,e,n,t,r,l,a){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":t.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":t[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(l&&"value"===u)break;var o=_(n)?"":n;t[u]!==o&&(t[u]=o);break;case"style":!function(e,n,t){if(_(n))t.removeAttribute("style");else{var r,l,a=t.style;if(p(n))a.cssText=n;else if(_(e)||p(e))for(r in n)l=n[r],a.setProperty(r,l);else{for(r in n)(l=n[r])!==e[r]&&a.setProperty(r,l);for(r in e)_(n[r])&&a.removeProperty(r)}}}(e,n,t);break;case"dangerouslySetInnerHTML":var i=e&&e.__html||"",s=n&&n.__html||"";i!==s&&(_(s)||(f=t,c=s,(d=document.createElement("i")).innerHTML=c,d.innerHTML===f.innerHTML)||(H(a)||(12&a.childFlags?pe(a.children):2===a.childFlags&&de(a.children),a.children=null,a.childFlags=1),t.innerHTML=s));break;default:I[u]?b(e,n)||B(u,n,t):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,t,r){var l,a,o=g(u);if(v(t)&&!H(t)){var i=t.event;b(n,t)||Y(r,o,(l=i,a=t,function(e){l(a.data,e)}))}else Y(r,o,t)}(0,e,n,t):_(n)?t.removeAttribute(u):r&&N[u]?t.setAttributeNS(N[u],u,n):t.setAttribute(u,n)}var f,c,d}function me(e,n,t){var r=ye(e.render(n,e.state,t)),l=t;return j(e.getChildContext)&&(l=C(t,e.getChildContext())),e.$CX=l,r}function ye(e){return $(e)?e=z():d(e)?e=P(e,null):c(e)?e=i(e,0,null):16384&e.flags&&(e=J(e)),e}function be(e,n,t,r,l,a){var o,i,u,s,f,c,d,p,h,v,g,m,y,b,k,$,C,w,U,x,S,P,F,L,N,V,I,B,M,T,A,D,E,W,O,R=e.flags|=16384;481&R?function(e,n,t,r,l,a){var o=e.flags,i=e.props,u=e.className,s=e.ref,f=e.children,c=e.childFlags;r=r||0<(32&o);var d,p=(d=e.type,r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,_(u)||""===u||(r?p.setAttribute("class",u):p.className=u),16===c)q(p,f);else if(1!==c){var h=r&&"foreignObject"!==e.type;2===c?(16384&f.flags&&(e.children=f=J(f)),be(f,p,t,h,null,a)):8!==c&&4!==c||$e(f,p,t,h,null,a)}H(n)||X(n,p,l),H(i)||function(e,n,t,r,l){var a,o,i,u,s,f,c=false,d=0<(448&n);for(var p in d&&(c=ue(t))&&(o=r,i=t,f=s=u=void 0,64&(a=n)?(f=o,Z(i.type)?(Y(f,"change",ne),Y(f,"click",te)):Y(f,"input",ee)):256&a?Y(o,"change",re):128&a&&(s=i,Y(u=o,"input",le),s.onChange&&Y(u,"change",ae))),t)ge(p,null,t[p],r,l,c,null);d&&ie(n,e,r,t,true,c)}(e,o,i,p,r),fe(s,p,a)}(e,n,t,r,l,a):4&R?(U=n,x=t,S=r,P=l,F=a,be((L=function(e,n,t,r,l,a){var o=new n(t,r),i=o.$N=Boolean(n.getDerivedStateFromProps||o.getSnapshotBeforeUpdate);if(o.$SVG=l,o.$L=a,(e.children=o).$BS=false,o.context=r,o.props===Q&&(o.props=t),i)o.state=K(o,t,o.state);else if(j(o.componentWillMount)){o.$BR=true,o.componentWillMount();var u=o.$PS;if(!H(u)){var s=o.state;if(H(s))o.state=u;else for(var f in u)s[f]=u[f];o.$PS=null}o.$BR=false}return o.$LI=me(o,t,r),o}(w=e,w.type,w.props||Q,x,S,F)).$LI,U,L.$CX,S,P,F),fe(w.ref,N=L,V=F),j(N.componentDidMount)&&V.push((I=N,function(){I.componentDidMount()}))):8&R?(i=n,u=t,s=r,f=l,c=a,d=(o=e).type,p=o.props||Q,h=o.ref,v=ye(32768&o.flags?d(p,h,u):d(p,u)),be(o.children=v,i,u,s,f,c),g=p,y=o,b=c,_(m=h)||(j(m.onComponentWillMount)&&m.onComponentWillMount(g),j(m.onComponentDidMount)&&b.push((k=m,$=y,C=g,function(){k.onComponentDidMount(G($,true),C)})))):512&R||16&R?ke(e,n,l):8192&R?(M=n,T=t,A=r,D=l,E=a,W=(B=e).children,12&(O=B.childFlags)&&0===W.length&&(O=B.childFlags=2,W=B.children=z()),2===O?be(W,M,D,A,D,E):$e(W,M,T,A,D,E)):1024&R&&function(e,n,t,r,l){be(e.children,e.ref,n,false,null,l);var a=z();ke(a,t,r),e.dom=a.dom}(e,t,n,l,a)}function ke(e,n,t){var r=e.dom=document.createTextNode(e.children);H(n)||X(n,r,t)}function $e(e,n,t,r,l,a){for(var o=0,i=e.length;o<i;++o){var u=e[o];16384&u.flags&&(e[o]=u=J(u)),be(u,n,t,r,l,a)}}function Ce(e,n,t,r,l,a,o){var i,u,s,f,c,d,p,h,v,g,m,y,b,k=n.flags|=16384;e.flags!==k||e.type!==n.type||e.key!==n.key||0!=(2048&k)?16384&e.flags?(u=n,s=t,f=r,c=l,d=o,de(i=e),0!=(u.flags&i.flags&2033)?(be(u,null,f,c,null,d),p=s,h=u.dom,v=i.dom,p.replaceChild(h,v)):(be(u,s,f,c,G(i,true),d),x(i,s))):be(n,t,r,l,a,o):481&k?function(e,n,t,r,l,a){var o,i=e.dom,u=e.props,s=n.props,f=false,c=false;if(n.dom=i,r=r||0<(32&l),u!==s){var d=u||Q;if((o=s||Q)!==Q)for(var p in(f=0<(448&l))&&(c=ue(o)),o){var h=d[p],v=o[p];h!==v&&ge(p,h,v,i,r,c,e)}if(d!==Q)for(var g in d)_(o[g])&&!_(d[g])&&ge(g,d[g],null,i,r,c,e)}var m,y,b=n.children,k=n.className;e.className!==k&&(_(k)?i.removeAttribute("class"):r?i.setAttribute("class",k):i.className=k),4096&l?(y=b,(m=i).textContent!==y&&(m.textContent=y)):we(e.childFlags,n.childFlags,e.children,b,i,t,r&&"foreignObject"!==n.type,null,e,a),f&&ie(l,n,i,o,false,c);var $=n.ref,C=e.ref;C!==$&&(se(C),fe($,i,a))}(e,n,r,l,k,o):4&k?function(e,n,t,r,l,a,o){var i=n.children=e.children;if(!H(i)){i.$L=o;var u=n.props||Q,s=n.ref,f=e.ref,c=i.state;if(!i.$N){if(j(i.componentWillReceiveProps)){if(i.$BR=true,i.componentWillReceiveProps(u,r),i.$UN)return;i.$BR=false}H(i.$PS)||(c=C(c,i.$PS),i.$PS=null)}Ue(i,c,u,t,r,l,false,a,o),f!==s&&(se(f),fe(s,i,o))}}(e,n,t,r,l,a,o):8&k?function(e,n,t,r,l,a,o){var i=true,u=n.props||Q,s=n.ref,f=e.props,c=!_(s),d=e.children;if(c&&j(s.onComponentShouldUpdate)&&(i=s.onComponentShouldUpdate(f,u)),false!==i){c&&j(s.onComponentWillUpdate)&&s.onComponentWillUpdate(f,u);var p=n.type,h=ye(32768&n.flags?p(u,s,r):p(u,r));Ce(d,h,t,r,l,a,o),n.children=h,c&&j(s.onComponentDidUpdate)&&s.onComponentDidUpdate(f,u)}else n.children=d}(e,n,t,r,l,a,o):16&k?(g=e,y=(m=n).children,b=g.dom,y!==g.children&&(b.nodeValue=y),m.dom=b):512&k?n.dom=e.dom:8192&k?function(e,n,t,r,l,a){var o=e.children,i=n.children,u=e.childFlags,s=n.childFlags,f=null;12&s&&0===i.length&&(s=n.childFlags=2,i=n.children=z());var c=0!=(2&s);if(12&u){var d=o.length;(8&u&&8&s||c||!c&&i.length>d)&&(f=G(o[d-1],false).nextSibling)}we(u,s,o,i,t,r,l,f,e,a)}(e,n,t,r,l,o):function(e,n,t,r){var l=e.ref,a=n.ref,o=n.children;if(we(e.childFlags,n.childFlags,e.children,o,l,t,false,null,e,r),n.dom=e.dom,l!==a&&!$(o)){var i=o.dom;U(l,i),w(a,i)}}(e,n,r,o)}function we(e,n,t,r,l,a,o,i,u,s){switch(e){case 2:switch(n){case 2:Ce(t,r,l,a,o,i,s);break;case 1:ce(t,l);break;case 16:de(t),q(l,r);break;default:g=r,m=l,y=a,b=o,k=s,de(v=t),$e(g,m,y,b,G(v,true),k),x(v,m)}break;case 1:switch(n){case 2:be(r,l,a,o,i,s);break;case 1:break;case 16:q(l,r);break;default:$e(r,l,a,o,i,s)}break;case 16:switch(n){case 16:h=l,(d=t)!==(p=r)&&(""!==d?h.firstChild.nodeValue=p:q(h,p));break;case 2:he(l),be(r,l,a,o,i,s);break;case 1:he(l);break;default:he(l),$e(r,l,a,o,i,s)}break;default:switch(n){case 16:pe(t),q(l,r);break;case 2:ve(l,u,t),be(r,l,a,o,i,s);break;case 1:ve(l,u,t);break;default:var f=0|t.length,c=0|r.length;0===f?0<c&&$e(r,l,a,o,i,s):0===c?ve(l,u,t):8===n&&8===e?function(e,n,t,r,l,a,o,i,u,s){var f,c,d=a-1,p=o-1,h=0,v=0,g=e[v],m=n[v];e:{for(;g.key===m.key;){if(16384&m.flags&&(n[v]=m=J(m)),Ce(g,m,t,r,l,i,s),e[v]=m,d<++v||p<v)break e;g=e[v],m=n[v]}for(g=e[d],m=n[p];g.key===m.key;){if(16384&m.flags&&(n[p]=m=J(m)),Ce(g,m,t,r,l,i,s),e[d]=m,p--,--d<v||p<v)break e;g=e[d],m=n[p]}}if(d<v){if(v<=p)for(c=(f=p+1)<o?G(n[f],true):i;v<=p;)16384&(m=n[v]).flags&&(n[v]=m=J(m)),++v,be(m,t,r,l,c,s)}else if(p<v)for(;v<=d;)ce(e[v++],t);else{var y=v,b=v,k=d-v+1,$=p-v+1,C=new Int32Array($-h+1);h=$+2;var w=k===a,U=false,x=0,S=0;if(o<4||(k|$)<32)for(h=y;h<=d;++h)if(g=e[h],S<$){for(v=b;v<=p;v++)if(m=n[v],g.key===m.key){if(C[v-b]=h+1,w)for(w=false;y<h;)ce(e[y++],t);v<x?U=true:x=v,16384&m.flags&&(n[v]=m=J(m)),Ce(g,m,t,r,l,i,s),++S;break}!w&&p<v&&ce(g,t)}else w||ce(g,t);else{var P={};for(h=b;h<=p;++h)P[n[h].key]=h;for(h=y;h<=d;++h)if(g=e[h],S<$)if(void 0!==(v=P[g.key])){if(w)for(w=false;y<h;)ce(e[y++],t);m=n[v],C[v-b]=h+1,v<x?U=true:x=v,16384&m.flags&&(n[v]=m=J(m)),Ce(g,m,t,r,l,i,s),++S}else w||ce(g,t);else w||ce(g,t)}if(w)ve(t,u,e),$e(n,t,r,l,i,s);else if(U){var F=function(e){var n=0,t=0,r=0,l=0,a=0,o=0,i=0,u=e.length;for(xe<u&&(O=new Int32Array(xe=u),R=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=O[l]]<n){R[t]=r,O[++l]=t;continue}for(a=0,o=l;a<o;)e[O[i=a+o>>1]]<n?a=i+1:o=i;n<e[O[a]]&&(0<a&&(R[t]=O[a-1]),O[a]=t)}a=t=l+1;var s=new Int32Array(a);for(o=O[a-1];0<a--;)s[a]=o,o=R[o];for(;0<t--;)O[t]=0;return s}(C);for(v=F.length-1,h=$-1;0<=h;h--)0===C[h]?(16384&(m=n[x=h+b]).flags&&(n[x]=m=J(m)),be(m,t,r,l,(f=x+1)<o?G(n[f],true):i,s)):v<0||h!==F[v]?L(m=n[x=h+b],t,(f=x+1)<o?G(n[f],true):i):v--}else if(S!==$)for(h=$-1;0<=h;h--)0===C[h]&&(16384&(m=n[x=h+b]).flags&&(n[x]=m=J(m)),be(m,t,r,l,(f=x+1)<o?G(n[f],true):i,s))}}(t,r,l,a,o,f,c,i,u,s):function(e,n,t,r,l,a,o,i,u){for(var s,f,c=o<a?o:a,d=0;d<c;++d)s=n[d],f=e[d],16384&s.flags&&(s=n[d]=J(s)),Ce(f,s,t,r,l,i,u),e[d]=s;if(a<o)for(d=c;d<o;++d)16384&(s=n[d]).flags&&(s=n[d]=J(s)),be(s,t,r,l,i,u);else if(o<a)for(d=c;d<a;++d)ce(e[d],t)}(t,r,l,a,o,f,c,i,s)}}var d,p,h,v,g,m,y,b,k}function Ue(e,n,t,r,l,a,o,i,u){var s,f,c,d,p=e.state,h=e.props,v=Boolean(e.$N),g=j(e.shouldComponentUpdate);if(v&&(n=K(e,t,n!==p?C(p,n):n)),o||!g||g&&e.shouldComponentUpdate(t,n,l)){!v&&j(e.componentWillUpdate)&&e.componentWillUpdate(t,n,l),e.props=t,e.state=n,e.context=l;var m=null,y=me(e,t,l);v&&j(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(h,p)),Ce(e.$LI,y,r,e.$CX,a,i,u),e.$LI=y,j(e.componentDidUpdate)&&(s=e,f=h,c=p,d=m,u.push(function(){s.componentDidUpdate(f,c,d)}))}else e.props=t,e.state=n,e.context=l}var xe=0;function l(e,n,t,r){var l,a,o,i,u,s;void 0===t&&(t=null),void 0===r&&(r=Q),l=e,o=t,i=r,u=[],s=(a=n).$V,m.v=true,_(s)?_(l)||(16384&l.flags&&(l=J(l)),be(l,a,i,false,null,u),s=a.$V=l):_(l)?(ce(s,a),a.$V=null):(16384&l.flags&&(l=J(l)),Ce(s,l,a,i,false,null,u),s=a.$V=l),0<u.length&&f(u),m.v=false,j(o)&&o(),j(y.renderComplete)&&y.renderComplete(s,a)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null);var Se=[],Pe="undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window),Fe=false;function Le(e,n,t,r){var l=e.$PS;if(j(n)&&(n=n(l?C(e.state,l):e.state,e.props,e.context)),_(l))e.$PS=n;else for(var a in n)l[a]=n[a];if(e.$BR)j(t)&&e.$L.push(t.bind(e));else{if(!m.v&&0===Se.length)return void Ie(e,r,t);if(-1===Se.indexOf(e)&&Se.push(e),Fe||(Fe=true,Pe(Ve)),j(t)){var o=e.$QU;o||(o=e.$QU=[]),o.push(t)}}}function Ne(e){for(var n=e.$QU,t=0,r=n.length;t<r;++t)n[t].call(e);e.$QU=null}function Ve(){var e;for(Fe=false;e=Se.pop();)Ie(e,false,e.$QU?Ne.bind(null,e):null)}function Ie(e,n,t){if(!e.$UN){if(n||!e.$BR){var r=e.$PS;e.$PS=null;var l=[];m.v=true,Ue(e,C(e.state,r),e.props,G(e.$LI,true).parentNode,e.context,e.$SVG,n,null,l),0<l.length&&f(l),m.v=false}else e.state=e.$PS,e.$PS=null;j(t)&&t.call(e)}}var Be=function(e,n){this.state=null,this.$BR=false,this.$BS=true,this.$PS=null,this.$LI=null,this.$UN=false,this.$CX=null,this.$QU=null,this.$N=false,this.$L=null,this.$SVG=false,this.props=e||Q,this.context=n||Q};Be.prototype.forceUpdate=function(e){this.$UN||Le(this,{},e,true)},Be.prototype.setState=function(e,n){this.$UN||this.$BS||Le(this,e,n,false)},Be.prototype.render=function(e,n,t){return null},uibench.init("Inferno [same as react]","7.1.8");var Me=function(t){function e(e){var n;return(n=t.call(this,e)||this).onClick=n.onClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}r(e,t);var n=e.prototype;return n.shouldComponentUpdate=function(e,n){return this.props.text!==e.text},n.onClick=function(e){console.log("Clicked"+this.props.text),e.stopPropagation()},n.render=function(){return a(1,"td","TableCell",this.props.text,0,{onClick:this.onClick},null,null)},e}(Be),Te=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){for(var e=this.props.data,n=e.active?"TableRow active":"TableRow",t=e.props,r=[o(2,Me,{text:"#"+e.id},-1,null)],l=0;l<t.length;l++)r.push(o(2,Me,{text:t[l]},l,null));return a(1,"tr",n,r,0,{"data-id":e.id},null,null)},n}(Be),Ae=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){for(var e=this.props.data.items,n=[],t=0;t<e.length;t++){var r=e[t];n.push(o(2,Te,{data:r},r.id,null))}return a(1,"table","Table",a(1,"tbody",null,n,0,null,null,null),2,null,null,null)},n}(Be),De=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){var e=this.props.data,n=e.time,t={"border-radius":(n%10).toString()+"px",background:"rgba(0,0,0,"+(.5+n%10/10).toString()+")"};return a(1,"div","AnimBox",null,1,{"data-id":e.id,style:t},null,null)},n}(Be),Ee=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){for(var e=this.props.data.items,n=[],t=0;t<e.length;t++){var r=e[t];n.push(o(2,De,{data:r},r.id,null))}return a(1,"div","Anim",n,0,null,null,null)},n}(Be),We=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){return a(1,"li","TreeLeaf",this.props.data.id,0,null,null,null)},n}(Be),Oe=function(e){function l(){return e.apply(this,arguments)||this}r(l,e);var n=l.prototype;return n.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},n.render=function(){for(var e=this.props.data,n=[],t=0;t<e.children.length;t++){var r=e.children[t];r.container?n.push(o(2,l,{data:r},r.id,null)):n.push(o(2,We,{data:r},r.id,null))}return a(1,"ul","TreeNode",n,0,null,null,null)},l}(Be),Re=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){return a(1,"div","Tree",o(2,Oe,{data:this.props.data.root},null,null),2,null,null,null)},n}(Be),_e=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){var e,n=this.props.data,t=n.location;return"table"===t?e=o(2,Ae,{data:n.table},null,null):"anim"===t?e=o(2,Ee,{data:n.anim},null,null):"tree"===t&&(e=o(2,Re,{data:n.tree},null,null)),a(1,"div","Main",e,0,null,null,null)},n}(Be);document.addEventListener("DOMContentLoaded",function(e){var n=document.querySelector("#App");uibench.run(function(e){l(o(2,_e,{data:e},null,null),n)},function(e){l(a(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),n)})})}();
