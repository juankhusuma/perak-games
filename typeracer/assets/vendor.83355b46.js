var V,f,He,Re,W,Ne,fe,De,z={},Me=[],xt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function j(e,t){for(var n in t)e[n]=t[n];return e}function Ue(e){var t=e.parentNode;t&&t.removeChild(e)}function P(e,t,n){var r,i,o,u={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:u[o]=t[o];if(arguments.length>2&&(u.children=arguments.length>3?V.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return K(e,u,r,i,null)}function K(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++He:i};return i==null&&f.vnode!=null&&f.vnode(o),o}function ne(){return{current:null}}function $(e){return e.children}function x(e,t){this.props=e,this.context=t}function M(e,t){if(t==null)return e.__?M(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?M(e):null}function Le(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Le(e)}}function Q(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!Y.__r++||fe!==f.debounceRendering)&&((fe=f.debounceRendering)||Ne)(Y)}function Y(){for(var e;Y.__r=W.length;)e=W.sort(function(t,n){return t.__v.__b-n.__v.__b}),W=[],e.some(function(t){var n,r,i,o,u,l;t.__d&&(u=(o=(n=t).__v).__e,(l=n.__P)&&(r=[],(i=j({},o)).__v=o.__v+1,re(l,o,i,n.__n,l.ownerSVGElement!==void 0,o.__h!=null?[u]:null,r,u==null?M(o):u,o.__h),Ke(r,o),o.__e!=u&&Le(o)))})}function Ae(e,t,n,r,i,o,u,l,a,h){var _,g,p,s,y,k,b,d=r&&r.__k||Me,c=d.length;for(n.__k=[],_=0;_<t.length;_++)if((s=n.__k[_]=(s=t[_])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?K(null,s,null,null,s):Array.isArray(s)?K($,{children:s},null,null,null):s.__b>0?K(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(p=d[_])===null||p&&s.key==p.key&&s.type===p.type)d[_]=void 0;else for(g=0;g<c;g++){if((p=d[g])&&s.key==p.key&&s.type===p.type){d[g]=void 0;break}p=null}re(e,s,p=p||z,i,o,u,l,a,h),y=s.__e,(g=s.ref)&&p.ref!=g&&(b||(b=[]),p.ref&&b.push(p.ref,null,s),b.push(g,s.__c||y,s)),y!=null?(k==null&&(k=y),typeof s.type=="function"&&s.__k===p.__k?s.__d=a=Fe(s,a,e):a=We(e,s,p,d,y,a),typeof n.type=="function"&&(n.__d=a)):a&&p.__e==a&&a.parentNode!=e&&(a=M(p))}for(n.__e=k,_=c;_--;)d[_]!=null&&(typeof n.type=="function"&&d[_].__e!=null&&d[_].__e==n.__d&&(n.__d=M(r,_+1)),Ve(d[_],d[_]));if(b)for(_=0;_<b.length;_++)Ie(b[_],b[++_],b[++_])}function Fe(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?Fe(r,t,n):We(n,r,r,i,r.__e,t));return t}function S(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){S(n,t)}):t.push(e)),t}function We(e,t,n,r,i,o){var u,l,a;if(t.__d!==void 0)u=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),u=null;else{for(l=o,a=0;(l=l.nextSibling)&&a<r.length;a+=2)if(l==i)break e;e.insertBefore(i,o),u=o}return u!==void 0?u:i.nextSibling}function Pt(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||G(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||G(e,o,t[o],n[o],r)}function pe(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||xt.test(t)?n:n+"px"}function G(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||pe(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||pe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?he:de,o):e.removeEventListener(t,o?he:de,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function de(e){this.l[e.type+!1](f.event?f.event(e):e)}function he(e){this.l[e.type+!0](f.event?f.event(e):e)}function re(e,t,n,r,i,o,u,l,a){var h,_,g,p,s,y,k,b,d,c,v,m=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,l=t.__e=n.__e,t.__h=null,o=[l]),(h=f.__b)&&h(t);try{e:if(typeof m=="function"){if(b=t.props,d=(h=m.contextType)&&r[h.__c],c=h?d?d.props.value:h.__:r,n.__c?k=(_=t.__c=n.__c).__=_.__E:("prototype"in m&&m.prototype.render?t.__c=_=new m(b,c):(t.__c=_=new x(b,c),_.constructor=m,_.render=St),d&&d.sub(_),_.props=b,_.state||(_.state={}),_.context=c,_.__n=r,g=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),m.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=j({},_.__s)),j(_.__s,m.getDerivedStateFromProps(b,_.__s))),p=_.props,s=_.state,g)m.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(m.getDerivedStateFromProps==null&&b!==p&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(b,c),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(b,_.__s,c)===!1||t.__v===n.__v){_.props=b,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(E){E&&(E.__=t)}),_.__h.length&&u.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(b,_.__s,c),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(p,s,y)})}_.context=c,_.props=b,_.state=_.__s,(h=f.__r)&&h(t),_.__d=!1,_.__v=t,_.__P=e,h=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(r=j(j({},r),_.getChildContext())),g||_.getSnapshotBeforeUpdate==null||(y=_.getSnapshotBeforeUpdate(p,s)),v=h!=null&&h.type===$&&h.key==null?h.props.children:h,Ae(e,Array.isArray(v)?v:[v],t,n,r,i,o,u,l,a),_.base=t.__e,t.__h=null,_.__h.length&&u.push(_),k&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=$t(n.__e,t,n,r,i,o,u,a);(h=f.diffed)&&h(t)}catch(E){t.__v=null,(a||o!=null)&&(t.__e=l,t.__h=!!a,o[o.indexOf(l)]=null),f.__e(E,t,n)}}function Ke(e,t){f.__c&&f.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){f.__e(r,n.__v)}})}function $t(e,t,n,r,i,o,u,l){var a,h,_,g=n.props,p=t.props,s=t.type,y=0;if(s==="svg"&&(i=!0),o!=null){for(;y<o.length;y++)if((a=o[y])&&"setAttribute"in a==!!s&&(s?a.localName===s:a.nodeType===3)){e=a,o[y]=null;break}}if(e==null){if(s===null)return document.createTextNode(p);e=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,p.is&&p),o=null,l=!1}if(s===null)g===p||l&&e.data===p||(e.data=p);else{if(o=o&&V.call(e.childNodes),h=(g=n.props||z).dangerouslySetInnerHTML,_=p.dangerouslySetInnerHTML,!l){if(o!=null)for(g={},y=0;y<e.attributes.length;y++)g[e.attributes[y].name]=e.attributes[y].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(Pt(e,p,g,i,l),_)t.__k=[];else if(y=t.props.children,Ae(e,Array.isArray(y)?y:[y],t,n,r,i&&s!=="foreignObject",o,u,o?o[0]:n.__k&&M(n,0),l),o!=null)for(y=o.length;y--;)o[y]!=null&&Ue(o[y]);l||("value"in p&&(y=p.value)!==void 0&&(y!==e.value||s==="progress"&&!y||s==="option"&&y!==g.value)&&G(e,"value",y,g.value,!1),"checked"in p&&(y=p.checked)!==void 0&&y!==e.checked&&G(e,"checked",y,g.checked,!1))}return e}function Ie(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){f.__e(r,n)}}function Ve(e,t,n){var r,i;if(f.unmount&&f.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ie(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){f.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Ve(r[i],t,typeof e.type!="function");n||e.__e==null||Ue(e.__e),e.__e=e.__d=void 0}function St(e,t,n){return this.constructor(e,n)}function U(e,t,n){var r,i,o;f.__&&f.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],re(t,e=(!r&&n||t).__k=P($,null,[e]),i||z,z,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?V.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),Ke(o,e)}function oe(e,t){U(e,t,oe)}function Be(e,t,n){var r,i,o,u=j({},e.props);for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:u[o]=t[o];return arguments.length>2&&(u.children=arguments.length>3?V.call(arguments,2):n),K(e.type,u,r||e.key,i||e.ref,null)}function _e(e,t){var n={__c:t="__cC"+De++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&i.some(Q)},this.sub=function(u){i.push(u);var l=u.componentWillUnmount;u.componentWillUnmount=function(){i.splice(i.indexOf(u),1),l&&l.call(u)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}V=Me.slice,f={__e:function(e,t){for(var n,r,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(o){e=o}throw e}},He=0,Re=function(e){return e!=null&&e.constructor===void 0},x.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=j({},this.state),typeof e=="function"&&(e=e(j({},n),this.props)),e&&j(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Q(this))},x.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Q(this))},x.prototype.render=$,W=[],Ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y.__r=0,De=0;var wt=Object.freeze(Object.defineProperty({__proto__:null,render:U,hydrate:oe,createElement:P,h:P,Fragment:$,createRef:ne,get isValidElement(){return Re},Component:x,cloneElement:Be,createContext:_e,toChildArray:S,get options(){return f}},Symbol.toStringTag,{value:"Module"})),N,O,ve,L=0,qe=[],ye=f.__b,me=f.__r,be=f.diffed,ge=f.__c,ke=f.unmount;function A(e,t){f.__h&&f.__h(O,e,L||t),L=0;var n=O.__H||(O.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ie(e){return L=1,ue(Xe,e)}function ue(e,t,n){var r=A(N++,2);return r.t=e,r.__c||(r.__=[n?n(t):Xe(void 0,t),function(i){var o=r.t(r.__[0],i);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=O),r.__}function ze(e,t){var n=A(N++,3);!f.__s&&ce(n.__H,t)&&(n.__=e,n.__H=t,O.__H.__h.push(n))}function le(e,t){var n=A(N++,4);!f.__s&&ce(n.__H,t)&&(n.__=e,n.__H=t,O.__h.push(n))}function Ye(e){return L=5,J(function(){return{current:e}},[])}function Ge(e,t,n){L=6,le(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))}function J(e,t){var n=A(N++,7);return ce(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ze(e,t){return L=8,J(function(){return e},t)}function Je(e){var t=O.context[e.__c],n=A(N++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(O)),t.props.value):e.__}function Qe(e,t){f.useDebugValue&&f.useDebugValue(t?t(e):e)}function jt(e){var t=A(N++,10),n=ie();return t.__=e,O.componentDidCatch||(O.componentDidCatch=function(r){t.__&&t.__(r),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Tt(){for(var e;e=qe.shift();)if(e.__P)try{e.__H.__h.forEach(q),e.__H.__h.forEach(X),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){O=null,ye&&ye(e)},f.__r=function(e){me&&me(e),N=0;var t=(O=e.__c).__H;t&&(t.__h.forEach(q),t.__h.forEach(X),t.__h=[])},f.diffed=function(e){be&&be(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(qe.push(t)!==1&&ve===f.requestAnimationFrame||((ve=f.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(o),Ee&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(i,100);Ee&&(r=requestAnimationFrame(i))})(Tt)),O=null},f.__c=function(e,t){t.some(function(n){try{n.__h.forEach(q),n.__h=n.__h.filter(function(r){return!r.__||X(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],f.__e(r,n.__v)}}),ge&&ge(e,t)},f.unmount=function(e){ke&&ke(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{q(r)}catch(i){t=i}}),t&&f.__e(t,n.__v))};var Ee=typeof requestAnimationFrame=="function";function q(e){var t=O,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),O=t}function X(e){var t=O;e.__c=e.__(),O=t}function ce(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Xe(e,t){return typeof t=="function"?t(e):t}function Ht(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function et(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var Rt=et(wt),Nt,Dt,Mt,ee=Rt,Ut=0;function Oe(e,t,n,r,i){var o,u,l={};for(u in t)u=="ref"?o=t[u]:l[u]=t[u];var a={type:e,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ut,__source:r,__self:i};if(typeof e=="function"&&(o=e.defaultProps))for(u in o)l[u]===void 0&&(l[u]=o[u]);return ee.options.vnode&&ee.options.vnode(a),a}Mt=ee.Fragment,Dt=Oe,Nt=Oe;var tt={exports:{}};function nt(e,t){for(var n in t)e[n]=t[n];return e}function te(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Z(e){this.props=e}function rt(e,t){function n(i){var o=this.props.ref,u=o==i.ref;return!u&&o&&(o.call?o(null):o.current=null),t?!t(this.props,i)||!u:te(this.props,i)}function r(i){return this.shouldComponentUpdate=n,P(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Z.prototype=new x).isPureReactComponent=!0,Z.prototype.shouldComponentUpdate=function(e,t){return te(this.props,e)||te(this.state,t)};var Ce=f.__b;f.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ce&&Ce(e)};var Lt=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ot(e){function t(n,r){var i=nt({},n);return delete i.ref,e(i,(r=n.ref||r)&&(typeof r!="object"||"current"in r)?r:null)}return t.$$typeof=Lt,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var xe=function(e,t){return e==null?null:S(S(e).map(t))},_t={map:xe,forEach:xe,count:function(e){return e?S(e).length:0},only:function(e){var t=S(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:S},At=f.__e;f.__e=function(e,t,n){if(e.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}At(e,t,n)};var Pe=f.unmount;function I(){this.__u=0,this.t=null,this.__b=null}function it(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ut(e){var t,n,r;function i(o){if(t||(t=e()).then(function(u){n=u.default||u},function(u){r=u}),r)throw r;if(!n)throw t;return P(n,o)}return i.displayName="Lazy",i.__f=!0,i}function D(){this.u=null,this.o=null}f.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Pe&&Pe(e)},(I.prototype=new x).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=it(r.__v),o=!1,u=function(){o||(o=!0,n.__R=null,i?i(l):l())};n.__R=u;var l=function(){if(!--r.__u){if(r.state.__e){var h=r.state.__e;r.__v.__k[0]=function g(p,s,y){return p&&(p.__v=null,p.__k=p.__k&&p.__k.map(function(k){return g(k,s,y)}),p.__c&&p.__c.__P===s&&(p.__e&&y.insertBefore(p.__e,p.__d),p.__c.__e=!0,p.__c.__P=y)),p}(h,h.__c.__P,h.__c.__O)}var _;for(r.setState({__e:r.__b=null});_=r.t.pop();)_.forceUpdate()}},a=t.__h===!0;r.__u++||a||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(u,u)},I.prototype.componentWillUnmount=function(){this.t=[]},I.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(u,l,a){return u&&(u.__c&&u.__c.__H&&(u.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),u.__c.__H=null),(u=nt({},u)).__c!=null&&(u.__c.__P===a&&(u.__c.__P=l),u.__c=null),u.__k=u.__k&&u.__k.map(function(h){return o(h,l,a)})),u}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__e&&P($,null,e.fallback);return i&&(i.__h=null),[P($,null,t.__e?null:e.children),i]};var $e=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Ft(e){return this.getChildContext=function(){return e.context},e.children}function Wt(e){var t=this,n=e.i;t.componentWillUnmount=function(){U(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),U(P(Ft,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function lt(e,t){return P(Wt,{__v:e,i:t})}(D.prototype=new x).__e=function(e){var t=this,n=it(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),$e(t,e,r)):i()};n?n(o):o()}},D.prototype.render=function(e){this.u=null,this.o=new Map;var t=S(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){$e(e,n,t)})};var ct=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Kt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,It=typeof document!="undefined",Vt=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function at(e,t,n){return t.__k==null&&(t.textContent=""),U(e,t),typeof n=="function"&&n(),e?e.__c:null}function st(e,t,n){return oe(e,t),typeof n=="function"&&n(),e?e.__c:null}x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Se=f.event;function Bt(){}function qt(){return this.cancelBubble}function zt(){return this.defaultPrevented}f.event=function(e){return Se&&(e=Se(e)),e.persist=Bt,e.isPropagationStopped=qt,e.isDefaultPrevented=zt,e.nativeEvent=e};var ft,we={configurable:!0,get:function(){return this.class}},je=f.vnode;f.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var o in r={},n){var u=n[o];It&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in n&&u==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&u===!0?u="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!Vt(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&Kt.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():u===null&&(u=void 0),r[o]=u)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=S(n.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=S(n.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),e.props=r,n.class!=n.className&&(we.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",we))}e.$$typeof=ct,je&&je(e)};var Te=f.__r;f.__r=function(e){Te&&Te(e),ft=e.__c};var pt={ReactCurrentDispatcher:{current:{readContext:function(e){return ft.__n[e.__c].props.value}}}},Yt="17.0.2";function dt(e){return P.bind(null,e)}function ae(e){return!!e&&e.$$typeof===ct}function ht(e){return ae(e)?Be.apply(null,arguments):e}function vt(e){return!!e.__k&&(U(null,e),!0)}function yt(e){return e&&(e.base||e.nodeType===1&&e)||null}var mt=function(e,t){return e(t)},bt=function(e,t){return e(t)},Gt=$,Zt={useState:ie,useReducer:ue,useEffect:ze,useLayoutEffect:le,useRef:Ye,useImperativeHandle:Ge,useMemo:J,useCallback:Ze,useContext:Je,useDebugValue:Qe,version:"17.0.2",Children:_t,render:at,hydrate:st,unmountComponentAtNode:vt,createPortal:lt,createElement:P,createContext:_e,createFactory:dt,cloneElement:ht,createRef:ne,Fragment:$,isValidElement:ae,findDOMNode:yt,Component:x,PureComponent:Z,memo:rt,forwardRef:ot,flushSync:bt,unstable_batchedUpdates:mt,StrictMode:$,Suspense:I,SuspenseList:D,lazy:ut,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pt},Jt=Object.freeze(Object.defineProperty({__proto__:null,default:Zt,version:Yt,Children:_t,render:at,hydrate:st,unmountComponentAtNode:vt,createPortal:lt,createFactory:dt,cloneElement:ht,isValidElement:ae,findDOMNode:yt,PureComponent:Z,memo:rt,forwardRef:ot,flushSync:bt,unstable_batchedUpdates:mt,StrictMode:Gt,Suspense:I,SuspenseList:D,lazy:ut,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pt,createElement:P,createContext:_e,createRef:ne,Fragment:$,Component:x,useState:ie,useReducer:ue,useEffect:ze,useLayoutEffect:le,useRef:Ye,useImperativeHandle:Ge,useMemo:J,useCallback:Ze,useContext:Je,useDebugValue:Qe,useErrorBoundary:jt},Symbol.toStringTag,{value:"Module"})),Qt=et(Jt),gt={exports:{}},Xt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",en=Xt,tn=en;function kt(){}function Et(){}Et.resetWarningCache=kt;var nn=function(){function e(r,i,o,u,l,a){if(a!==tn){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Et,resetWarningCache:kt};return n.PropTypes=n,n};gt.exports=nn();(function(e,t){(function(n,r){e.exports=r(Qt,gt.exports)})(window,function(n,r){return function(i){var o={};function u(l){if(o[l])return o[l].exports;var a=o[l]={i:l,l:!1,exports:{}};return i[l].call(a.exports,a,a.exports,u),a.l=!0,a.exports}return u.m=i,u.c=o,u.d=function(l,a,h){u.o(l,a)||Object.defineProperty(l,a,{enumerable:!0,get:h})},u.r=function(l){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},u.t=function(l,a){if(1&a&&(l=u(l)),8&a||4&a&&typeof l=="object"&&l&&l.__esModule)return l;var h=Object.create(null);if(u.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:l}),2&a&&typeof l!="string")for(var _ in l)u.d(h,_,function(g){return l[g]}.bind(null,_));return h},u.n=function(l){var a=l&&l.__esModule?function(){return l.default}:function(){return l};return u.d(a,"a",a),a},u.o=function(l,a){return Object.prototype.hasOwnProperty.call(l,a)},u.p="",u(u.s=0)}([function(i,o,u){Object.defineProperty(o,"__esModule",{value:!0});var l=u(1);Object.defineProperty(o,"default",{enumerable:!0,get:function(){return function(a){return a&&a.__esModule?a:{default:a}}(l).default}}),i.exports=o.default},function(i,o,u){Object.defineProperty(o,"__esModule",{value:!0});var l=Object.assign||function(k){for(var b=1;b<arguments.length;b++){var d=arguments[b];for(var c in d)Object.prototype.hasOwnProperty.call(d,c)&&(k[c]=d[c])}return k},a=function(){function k(b,d){for(var c=0;c<d.length;c++){var v=d[c];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,v.key,v)}}return function(b,d,c){return d&&k(b.prototype,d),c&&k(b,c),b}}(),h=p(u(2)),_=p(u(3)),g=u(4);function p(k){return k&&k.__esModule?k:{default:k}}var s=[],y=function(k){function b(d){(function(v,m){if(!(v instanceof m))throw new TypeError("Cannot call a class as a function")})(this,b);var c=function(v,m){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?v:m}(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,d));return c.handleKeyboardEvent=c.handleKeyboardEvent.bind(c),c.registerExclusiveHandler=c.registerExclusiveHandler.bind(c),c.deregisterExclusiveHandler=c.deregisterExclusiveHandler.bind(c),c}return function(d,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);d.prototype=Object.create(c&&c.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(d,c):d.__proto__=c)}(b,h.default.Component),a(b,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyboardEvent,!1),document.addEventListener("keyup",this.handleKeyboardEvent,!1),document.addEventListener("keypress",this.handleKeyboardEvent,!1);var d=this.props,c=d.isExclusive,v=d.isDisabled;c&&!v&&this.registerExclusiveHandler()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyboardEvent,!1),document.removeEventListener("keyup",this.handleKeyboardEvent,!1),document.removeEventListener("keypress",this.handleKeyboardEvent,!1),this.deregisterExclusiveHandler()}},{key:"componentDidUpdate",value:function(d){var c=d.isExclusive,v=d.isDisabled;(this.props.isExclusive!==c||this.props.isDisabled!==v)&&(this.props.isExclusive&&!this.props.isDisabled?this.registerExclusiveHandler():this.deregisterExclusiveHandler())}},{key:"registerExclusiveHandler",value:function(){this.deregisterExclusiveHandler(),s.unshift(this)}},{key:"deregisterExclusiveHandler",value:function(){var d=this;s.includes(this)&&(s=s.filter(function(c){return c!==d}))}},{key:"handleKeyboardEvent",value:function(d){var c=this.props,v=c.isDisabled,m=c.handleKeys,E=c.onKeyEvent,C=c.handleEventType,w=c.children,T=c.handleFocusableElements;if(v||C!==d.type||s.length>0&&s[0]!==this)return!1;var H=d.target===document.body||T,B=this.childrenContainer&&this.childrenContainer.contains(d.target);if(!(w?B:H))return!1;var R=(0,g.findMatchedKey)(d,m);return!!R&&(E(R,d),!0)}},{key:"render",value:function(){var d=this,c=this.props.children,v=Object.assign({},this.props),m=!0,E=!1,C=void 0;try{for(var w,T=Object.keys(b.propTypes)[Symbol.iterator]();!(m=(w=T.next()).done);m=!0)delete v[w.value]}catch(H){E=!0,C=H}finally{try{!m&&T.return&&T.return()}finally{if(E)throw C}}return c?h.default.createElement("span",l({ref:function(H){d.childrenContainer=H}},v),c):null}}]),b}();o.default=y,y.propTypes={handleKeys:_.default.array,handleEventType:_.default.oneOf(["keydown","keyup","keypress"]),handleFocusableElements:_.default.bool,onKeyEvent:_.default.func,isDisabled:_.default.bool,isExclusive:_.default.bool,children:_.default.any},y.defaultProps={handleKeys:[],handleFocusableElements:!1,handleEventType:"keydown",onKeyEvent:function(){return null}},i.exports=o.default},function(i,o){i.exports=n},function(i,o){i.exports=r},function(i,o,u){function l(c,v,m){return v in c?Object.defineProperty(c,v,{value:m,enumerable:!0,configurable:!0,writable:!0}):c[v]=m,c}Object.defineProperty(o,"__esModule",{value:!0}),o.matchKeyEvent=d,o.findMatchedKey=function(c,v){var m=v.map(function(E){var C=E.toLowerCase(),w=b[C];return w||[E]}).reduce(function(E,C){return E.concat(C)},[]).find(function(E){return d(c,E)});return!m&&v.includes("all")&&(m="other"),m};var a={backspace:[8],del:[46],delete:[46],ins:[45],insert:[45],tab:[9],enter:[13],return:[13],esc:[27],space:[32],pageup:[33],pagedown:[34],end:[35],home:[36],left:[37],up:[38],right:[39],down:[40],shift:[16],ctrl:[17],alt:[18],cap:[20],num:[144],clear:[12],meta:[91],";":[186,59],"=":[187,61],",":[188,44],"-":[189,45,173,109],minus:[189,45,173,109],".":[190,110],"/":[191,111],"`":[192],"[":[219],"\\":[220],"]":[221],"*":[106],"+":[107],plus:[107],"'":[222],quote:[222]},h=Object.keys(a).reduce(function(c,v){return Object.assign(c,l({},v.toUpperCase(),a[v]))},{}),_="0123456789".split("").reduce(function(c,v,m){return Object.assign(c,l({},v,[m+48,m+96]))},{}),g="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce(function(c,v,m){return Object.assign(c,l({},v.toLowerCase(),[m+65]),l({},v,[m+65]))},{}),p="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19".split(",").reduce(function(c,v,m){return Object.assign(c,l({},"f"+v,[m+112]))},{}),s={control:"ctrl",ctrl:"ctrl",shift:"shift",meta:"meta",cmd:"meta",command:"meta",option:"alt",alt:"alt"},y=o.AllKeys=Object.assign({},a,h,_,g,p),k=Object.assign({},_,g),b={all:Object.keys(y),alphanumeric:Object.keys(k),numeric:Object.keys(_),alphabetic:Object.keys(g),function:Object.keys(p)};function d(c,v){var m=c.which||c.keyCode,E=c.type,C=Object.keys(s).filter(function(F){return c[F+"Key"]}).sort(),w=v.toLowerCase().trim(),T=w==="+"?["+"]:w.split(/\s?\+\s?/),H=T.pop(),B=y[H],R=T;if(E==="keypress")return v==String.fromCharCode(m).toLowerCase();if(R.length===0&&C.length===0)return B.indexOf(m)>=0;if(R.length>0&&C.length>0){var se=R.map(function(F){return s[F]}).sort(),Ot=se.length===C.length&&se.every(function(F,Ct){return C[Ct]===F});return B.indexOf(m)>=0&&Ot}return R.length==0&&C.length===1&&H===C[0]}}])})})(tt);var rn=Ht(tt.exports);export{_e as D,Mt as F,rn as K,U as S,Nt as a,Je as b,Dt as j,ie as l,ue as p,Ye as s,ze as y};