(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"GlobalContext",(function(){return y}));var r=n("o0o1"),o=n.n(r),a=n("rePB"),c=n("HaE+"),i=n("q1tI"),u=n.n(i),s=n("8Bbg"),l=n.n(s),f=n("8Kt/"),p=n.n(f),h=(n("6zHJ"),n("q4pp")),m=n("qoWs"),v=u.a.createElement;function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=Object(i.createContext)({}),b=function(t){var e=t.Component,n=t.pageProps,r=n.global;return v(u.a.Fragment,null,v(p.a,null,v("link",{rel:"shortcut icon",href:Object(h.a)(r.favicon)}),v("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Staatliches"}),v("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"}),v("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"}),v("script",{src:"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"}),v("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"})),v(y.Provider,{value:r},v(e,n)))};b.getInitialProps=function(){var t=Object(c.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getInitialProps(e);case 2:return n=t.sent,t.next=5,Object(m.a)("/global");case 5:return r=t.sent,t.abrupt("return",d(d({},n),{},{pageProps:{global:r}}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.default=b},"6zHJ":function(t,e,n){},"7aRM":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("q4pp"),c=o.a.createElement;e.a=function(t){var e=t.image,n=t.style,r=Object(a.a)(e);return c("img",{src:r,alt:e.alternativeText||e.name,style:n})}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8oxB":function(t,e){var n,r,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&h())}function h(){if(!l){var t=i(p);l=!0;for(var e=s.length;e;){for(u=s,s=[];++f<e;)u&&u[f].run();f=-1,e=s.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),o=n("lwsE"),a=n("W8MJ"),c=n("7W2i"),i=n("a1gu"),u=n("Nsbk"),s=n("yXPU");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var f=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=d,e.default=void 0;var p=f(n("q1tI")),h=n("g/15");function m(t){return v.apply(this,arguments)}function v(){return(v=s(r.mark((function t(e){var n,o,a;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,h.loadGetInitialProps)(n,o);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=h.AppInitialProps,e.NextWebVitalsMetric=h.NextWebVitalsMetric;var g=function(t){c(n,t);var e=l(n);function n(){return o(this,n),e.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||a?{}:{url:d(e)}))}}]),n}(p.default.Component);function d(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=g,g.origGetInitialProps=m,g.getInitialProps=m},CafY:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),i=o.a.createElement,u=function(t){var e=t.categories;return i("div",null,i("nav",{className:"uk-navbar-container","data-uk-navbar":!0},i("div",{className:"uk-navbar-left"},i("ul",{className:"uk-navbar-nav"},i("li",null,i(c.a,{href:"/"},i("a",null,"Strapi Blog"))),i("li",null,i(c.a,{href:"http://0f4a4153177f.ngrok.io/connect/google"},i("a",null,"Google Login"))))),i("div",{className:"uk-navbar-right"},i("ul",{className:"uk-navbar-nav"},e.map((function(t){return i("li",{key:t.id},i(c.a,{as:"/category/".concat(t.slug),href:"/category/[id]"},i("a",{className:"uk-link-reset"},t.name)))}))))))},s=o.a.createElement;e.a=function(t){var e=t.children,n=t.categories;t.seo;return s(o.a.Fragment,null,s(u,{categories:n}),e)}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var c=t.apply(e,n);function i(t){r(c,o,a,i,u,"next",t)}function u(t){r(c,o,a,i,u,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return o}))},UkKX:function(t,e,n){"use strict";var r=n("rePB"),o=n("q1tI"),a=n.n(o),c=n("8Kt/"),i=n.n(c),u=n("1TCz"),s=n("q4pp"),l=a.a.createElement;function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e=t.seo,n=Object(o.useContext)(u.GlobalContext),r=n.defaultSeo,c=n.siteName,f=p(p({},r),e),h=p(p({},f),{},{metaTitle:"".concat(f.metaTitle," | ").concat(c),shareImage:Object(s.a)(f.shareImage)});return l(i.a,null,h.metaTitle&&l(a.a.Fragment,null,l("title",null,h.metaTitle),l("meta",{property:"og:title",content:h.metaTitle}),l("meta",{name:"twitter:title",content:h.metaTitle})),h.metaDescription&&l(a.a.Fragment,null,l("meta",{name:"description",content:h.metaDescription}),l("meta",{property:"og:description",content:h.metaDescription}),l("meta",{name:"twitter:description",content:h.metaDescription})),h.shareImage&&l(a.a.Fragment,null,l("meta",{property:"og:image",content:h.shareImage}),l("meta",{name:"twitter:image",content:h.shareImage}),l("meta",{name:"image",content:h.shareImage})),h.article&&l("meta",{property:"og:type",content:"article"}),l("meta",{name:"twitter:card",content:"summary_large_image"}))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("J4zp"),o=n("284h");e.__esModule=!0,e.default=void 0;var a,c=o(n("q1tI")),i=n("elyg"),u=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var p=function(t,e){var n=a||(l?a=new l((function(t){t.forEach((function(t){if(s.has(t.target)){var e=s.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(t.target),s.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),s.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}s.delete(t)}):function(){}};function h(t,e,n,r){(0,i.isLocalURL)(e)&&(t.prefetch(e,n,r).catch((function(t){0})),f[e+"%"+n]=!0)}var m=function(t){var e=!1!==t.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],s=o[1],m=(0,u.useRouter)(),v=m&&m.pathname||"/",g=c.default.useMemo((function(){var e=(0,i.resolveHref)(v,t.href,!0),n=r(e,2),o=n[0],a=n[1];return{href:o,as:t.as?(0,i.resolveHref)(v,t.as):a||o}}),[v,t.href,t.as]),d=g.href,y=g.as;c.default.useEffect((function(){if(e&&l&&a&&a.tagName&&(0,i.isLocalURL)(d)&&!f[d+"%"+y])return p(a,(function(){h(m,d,y)}))}),[e,a,d,y,m]);var b=t.children,w=t.replace,O=t.shallow,j=t.scroll;"string"===typeof b&&(b=c.default.createElement("a",null,b));var P=c.Children.only(b),k={ref:function(t){t&&s(t),P&&"object"===typeof P&&P.ref&&("function"===typeof P.ref?P.ref(t):"object"===typeof P.ref&&(P.ref.current=t))},onClick:function(t){P.props&&"function"===typeof P.props.onClick&&P.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,a,c){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,i.isLocalURL)(n))&&(t.preventDefault(),null==c&&(c=r.indexOf("#")<0),e[o?"replace":"push"](n,r,{shallow:a}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())})))}(t,m,d,y,w,O,j)}};return e&&(k.onMouseEnter=function(t){(0,i.isLocalURL)(d)&&(P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(t),h(m,d,y,{priority:!0}))}),(t.passHref||"a"===P.type&&!("href"in P.props))&&(k.href=(0,i.addBasePath)(y)),c.default.cloneElement(P,k)};e.default=m},q4pp:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("qoWs");function o(t){return console.log("AAAAAAAAAAAA"),t.url.startsWith("/")?Object(r.b)(t.url):t.url}},qoWs:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i}));var r=n("o0o1"),o=n.n(r),a=n("HaE+");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(t.env.NEXT_PUBLIC_STRAPI_API_URL||"http://192.168.99.105:1337").concat(e)}function i(t){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c(e),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}).call(this,n("8oxB"))},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}}]);