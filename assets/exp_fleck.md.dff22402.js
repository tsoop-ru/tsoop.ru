import{_ as a,g as p,o as d,e as l,M as f,N as m,K as h,f as k}from"./plugin-vue_export-helper.aae5aba0.js";const v="modulepreload",i={},g="/",x=function(n,s){return!s||s.length===0?n():Promise.all(s.map(t=>{if(t=`${g}${t}`,t in i)return;i[t]=!0;const r=t.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${c}`))return;const e=document.createElement("link");if(e.rel=r?"stylesheet":v,r||(e.as="script",e.crossOrigin=""),e.href=t,document.head.appendChild(e),r)return new Promise((_,u)=>{e.addEventListener("load",_),e.addEventListener("error",u)})})).then(()=>n())};const S=o=>(f("data-v-dfd60268"),o=o(),m(),o),$={class:"flex flex-col items-center"},y=S(()=>h("div",{class:"fleck-demo p-100","data-theme":"blue"},null,-1)),E=[y],I={setup(o){return p(async function(){CSS.paintWorklet===void 0&&await x(()=>import("https://unpkg.com/css-paint-polyfill"),[]),CSS.paintWorklet.addModule("https://unpkg.com/@georgedoescode/houdini-fleck"),setTimeout(()=>{document.querySelectorAll(".fleck-demo").forEach(n=>{n.style.width="100%"})},250)}),(n,s)=>(d(),l("div",$,E))}};var P=a(I,[["__scopeId","data-v-dfd60268"]]);const B='{"title":"Fleck houdini experiments","description":"","frontmatter":{"title":"Fleck houdini experiments","source":"https://codepen.io/georgedoescode/pen/eYvjOMN"},"headers":[],"relativePath":"exp/fleck.md","lastUpdated":1624393444000}',w={};function C(o,n,s,t,r,c){const e=P;return d(),l("div",null,[k(e)])}var L=a(w,[["render",C]]);export{B as __pageData,L as default};