(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{3454:function(e,t,r){"use strict";var n,o;e.exports=(null===(n=r.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(o=r.g.process)||void 0===o?void 0:o.env)?r.g.process:r(7663)},8961:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(8953)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=(u=r(7294))&&u.__esModule?u:{default:u},a=r(1003),c=r(880),l=r(9246);var f={};function s(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),u=i.default.useMemo((function(){var t=o(a.resolveHref(n,e.href,!0),2),r=t[0],u=t[1];return{href:r,as:e.as?a.resolveHref(n,e.as):u||r}}),[n,e.href,e.as]),d=u.href,p=u.as,v=i.default.useRef(d),h=i.default.useRef(p),y=e.children,m=e.replace,b=e.shallow,g=e.scroll,w=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var E=(t=i.default.Children.only(y))&&"object"===typeof t&&t.ref,T=o(l.useIntersection({rootMargin:"200px"}),3),j=T[0],x=T[1],_=T[2],L=i.default.useCallback((function(e){h.current===p&&v.current===d||(_(),h.current=p,v.current=d),j(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[p,E,d,_,j]);i.default.useEffect((function(){var e=x&&r&&a.isLocalURL(d),t="undefined"!==typeof w?w:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,x,w,r,n]);var A={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:u,locale:c,scroll:i}))}(e,n,d,p,m,b,g,w)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof w?w:n&&n.locale,C=n&&n.isLocaleDomain&&a.getDomainLocale(p,k,n&&n.locales,n&&n.domainLocales);A.href=C||a.addBasePath(a.addLocale(p,k,n&&n.defaultLocale))}return i.default.cloneElement(t,A)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!a,f=u.useRef(),s=o(u.useState(!1),2),d=s[0],p=s[1],v=o(u.useState(t?t.current:null),2),h=v[0],y=v[1],m=u.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:u,elements:o}),t}(r),o=n.id,u=n.observer,i=n.elements;return i.set(e,t),u.observe(e),function(){if(i.delete(e),u.unobserve(e),0===i.size){u.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]),b=u.useCallback((function(){p(!1)}),[]);return u.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),u.useEffect((function(){t&&y(t.current)}),[t]),[m,d,b]};var u=r(7294),i=r(4686),a="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8953:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(5893),o=r(1664),u=r.n(o),i=r(3454);function a(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"About us"}),(0,n.jsxs)("div",{children:["Back to"," ",(0,n.jsx)(u(),{href:"/",as:i.env.BACKEND_URL+"/",children:(0,n.jsx)("a",{children:"Home"})})]})]})}},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,c=[],l=!1,f=-1;function s(){l&&a&&(l=!1,a.length?c=a.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=i(s);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var u=r[e]={exports:{}},i=!0;try{t[e](u,u.exports,n),i=!1}finally{i&&delete r[e]}return u.exports}n.ab="//";var o=n(162);e.exports=o}()},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);