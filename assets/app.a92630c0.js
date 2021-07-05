var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,c=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))r.call(t,n)&&s(e,n,t[n]);return e},i=(e,o)=>t(e,n(o));import{r as l,a as p,c as u,i as d,b as m,m as h,n as f,w,d as g,h as v,e as b,f as y,g as _,t as C,u as L,p as j,j as k,o as E,k as O,l as S,q as P,s as T}from"./framework.93eee356.js";const I=/^https?:/i,A="undefined"!=typeof window;function $(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return}(t,Object.keys(e));return n?e[n]:void 0}function D(e,t){t=function(e,t){if(!A)return t;const n=e.base,o=n.endsWith("/")?n.slice(0,-1):n;return t.slice(o.length)}(e,t);const n=$(e.locales||{},t)||{},o=$(e.themeConfig&&e.themeConfig.locales||{},t)||{};return i(c(c({},e),n),{themeConfig:i(c(c({},e.themeConfig),o),{locales:{}}),lang:o.lang||e.lang,locales:{}})}const U=Symbol(),N=l((q='{"lang":"en","title":"tsoop","description":"live music generation","base":"/","head":[["meta",{"name":"author","content":"Denis Starov"}],["meta",{"name":"keywords","content":"electronic, music, live, generation, jam, tsoop, op-z, op-1, nts-1, zoom r-16, fusion"}],["link",{"rel":"icon","type":"image/svg+xml","href":"/img/tsoop-icon.svg"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"white-translucent"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"HandheldFriendly","content":"True"}],["meta",{"name":"MobileOptimized","content":"320"}],["meta",{"name":"theme-color","content":"#0ea5e9"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:site","content":"www.tsoop.ru"}],["meta",{"name":"twitter:title","value":"tsoop"}],["meta",{"name":"twitter:description","value":"live music generation"}],["meta",{"name":"twitter:image","content":"/img/tsoop-icon.svg"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-EN"}],["meta",{"property":"og:site","content":"www.tsoop.ru"}],["meta",{"property":"og:site_name","content":"tsoop"}],["meta",{"property":"og:title","content":"tsoop"}],["meta",{"property":"og:image","content":"/img/tsoop-icon.svg"}],["meta",{"property":"og:description","content":"live music generation"}]],"themeConfig":{"repo":"","logo":"/media/circle/circle.svg","docsDir":".","docsBranch":"master","docsRepo":"","editLinks":false,"editLinkText":"Нашли ошибку?"},"locales":{},"customData":{}}',p(JSON.parse(q))));var q;function H(e){const t=u((()=>D(N.value,e.path)));return{site:t,theme:u((()=>t.value.themeConfig)),page:u((()=>e.data)),frontmatter:u((()=>e.data.frontmatter)),lang:u((()=>t.value.lang)),localePath:u((()=>{const{locales:e,lang:n}=t.value,o=Object.keys(e).find((t=>e[t].lang===n));return function(e){return I.test(e)?e:function(e,t){return`${e}${t}`.replace(/\/+/g,"/")}(N.value.base,e)}(e&&o||"/")})),title:u((()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title)),description:u((()=>e.data.description||t.value.description))}}function M(){const e=d(U);if(!e)throw new Error("vitepress data not properly injected in app");return e}function R(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),A){const e="/";t=t.slice(e.length).replace(/\//g,"_")+".md";const n=__VP_HASH_MAP__[t.toLowerCase()];t=`${e}assets/${t}.${n}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const x=Symbol();function W(){return function(){const e=d(x);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function F(e,t,n=!1){const o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(o){const e=o.offsetTop;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function K(e,t){let n=[],o=!0;w((()=>{const a=e.data,r=t.value,s=a&&a.title,c=a&&a.description,i=a&&a.frontmatter.head;var l;document.title=(s?s+" | ":"")+r.title,document.querySelector("meta[name=description]").setAttribute("content",c||r.description),(e=>{if(o)return void(o=!1);const t=[],a=Math.min(n.length,e.length);for(let o=0;o<a;o++){let a=n[o];const[r,s,c=""]=e[o];if(a.tagName.toLocaleLowerCase()===r){for(const e in s)a.getAttribute(e)!==s[e]&&a.setAttribute(e,s[e]);for(let e=0;e<a.attributes.length;e++){const t=a.attributes[e].name;t in s||a.removeAttribute(t)}a.innerHTML!==c&&(a.innerHTML=c)}else document.head.removeChild(a),a=V(e[o]),document.head.append(a);t.push(a)}n.slice(a).forEach((e=>document.head.removeChild(e))),e.slice(a).forEach((e=>{const n=V(e);document.head.appendChild(n),t.push(n)})),n=t})([...i?(l=i,l.filter((e=>{return!("meta"===(t=e)[0]&&t[1]&&"description"===t[1].name);var t}))):[]])}))}function V([e,t,n]){const o=document.createElement(e);for(const a in t)o.setAttribute(a,t[a]);return n&&(o.innerHTML=n),o}const z=g({name:"VitePressContent",setup(){const e=W();return()=>v("div",{style:{position:"relative"}},[e.component?v(e.component):null])}});j("data-v-538c21a6");const B=_("p",{class:"title"},"Debug",-1),J={class:"block"};k();g({setup(e){const t=M(),n=l(null),o=l(!1);return b(o,(e=>{!1===e&&(n.value.scrollTop=0)})),(e,a)=>(E(),y("div",{class:["debug",{open:o.value}],ref:n,onClick:a[1]||(a[1]=e=>o.value=!o.value)},[B,_("pre",J,C(L(t)),1)],2))}}).__scopeId="data-v-538c21a6";j("data-v-7185447f");const Y={class:"page"};k();const G={setup:e=>(M(),(e,t)=>{const n=O("content");return E(),y("div",Y,[_(n)])}),__scopeId:"data-v-7185447f"};const X={setup:e=>(e,t)=>(E(),y("p",null,"not found")),__scopeId:"data-v-380338b2"};var Q={Layout:G,NotFound:X,enhanceApp({app:e}){"undefined"!=typeof window&&(window.owa_baseUrl="http://stats.frkt.ru/",window.owa_cmds=window.owa_cmds||[],window.owa_cmds.push(["setSiteId","f5c705255d57f1ccf9f557b1bea75160"]),window.owa_cmds.push(["trackPageView"]),window.owa_cmds.push(["trackClicks"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,window.owa_baseUrl="https:"==document.location.protocol?window.owa_baseSecUrl||window.owa_baseUrl.replace(/http:/,"https:"):window.owa_baseUrl,e.src=window.owa_baseUrl+"modules/base/js/owa.tracker-combined-min.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}())}};const Z=new Set,ee=()=>document.createElement("link");let te;const ne=A&&(te=ee())&&te.relList&&te.relList.supports&&te.relList.supports("prefetch")?e=>{const t=ee();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const oe=g({setup(e,{slots:t}){const n=l(!1);return S((()=>{n.value=!0})),()=>n.value&&t.default?t.default():null}}),ae=Q.NotFound||(()=>"404 Not Found"),re={name:"VitePressApp",setup(){const{site:e}=M();return S((()=>{b((()=>e.value.lang),(e=>{document.documentElement.lang=e}),{immediate:!0})})),function(){if(!A)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const o=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:o}=t;if(!Z.has(o)){Z.add(o);const e=R(o);ne(e)}}}))})),t((()=>{document.querySelectorAll("#app a").forEach((e=>{const{target:t,hostname:o,pathname:a}=e,r=a.match(/\.\w+$/);r&&".html"!==r[0]||"_blank"!==t&&o===location.hostname&&(a!==location.pathname?n.observe(e):Z.add(a))}))}))};S(o);const a=W();b((()=>a.path),o),P((()=>{n&&n.disconnect()}))}(),()=>v(Q.Layout)}};function se(){const e=function(){let e,t=A;return function(e,t){const n=m({path:"/",component:null,data:null});function o(e=(A?location.href:"/")){const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),A&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),r(e)}let a=null;async function r(o,r=0){const s=new URL(o,"http://a.com"),c=a=s.pathname;try{let t=e(c);if("then"in t&&"function"==typeof t.then&&(t=await t),a===c){a=null;const{default:e,__pageData:o}=t;if(!e)throw new Error(`Invalid route component: ${e}`);n.path=c,n.component=h(e),n.data=p(JSON.parse(o)),A&&f((()=>{if(s.hash&&!r){const e=document.querySelector(decodeURIComponent(s.hash));if(e)return void F(e,s.hash)}window.scrollTo(0,r)}))}}catch(i){i.message.match(/fetch/)||console.error(i),a===c&&(a=null,n.path=c,n.component=t?h(t):null)}}return A&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:a,hostname:r,pathname:s,hash:c,target:i}=t,l=window.location,p=s.match(/\.\w+$/);e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===i||a!==l.protocol||r!==l.hostname||p&&".html"!==p[0]||(e.preventDefault(),s===l.pathname?c&&c!==l.hash&&(history.pushState(null,"",c),F(t,c,t.classList.contains("header-anchor"))):o(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{r(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:n,go:o}}((n=>{let o=R(n);return t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),A?(t=!1,import(o)):require(o)}),ae)}(),t=T(re);t.provide(x,e);const n=H(e.route);return t.provide(U,n),A&&K(e.route,n.site),t.component("Content",z),t.component("ClientOnly",oe),t.component("Debug",(()=>null)),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get:()=>n.frontmatter.value}),Q.enhanceApp&&Q.enhanceApp({app:t,router:e,siteData:N}),{app:t,router:e}}if(A){const{app:e,router:t}=se();t.go().then((()=>{e.mount("#app")}))}export{se as createApp};
