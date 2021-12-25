import{v as Se,a as me}from"./framework.402455be.js";import{l as Y,O as Be,P as Ee,_ as Ae,a as Ge,o as B,e as E,K as h,Q as ee,R as r,S as fe,T as pe,U as Oe,M as Re,N as Xe,f as Ye}from"./plugin-vue_export-helper.32ef5ae6.js";const Ke=.5*(Math.sqrt(3)-1),de=(3-Math.sqrt(3))/6,Le=1/3,I=1/6,We=(Math.sqrt(5)-1)/4,D=(5-Math.sqrt(5))/20,b=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),y=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);class Ze{constructor(e=Math.random){const t=typeof e=="function"?e:Je(e);this.p=He(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=this.p[s&255],this.permMod12[s]=this.perm[s]%12}noise2D(e,t){const s=this.permMod12,i=this.perm;let n=0,a=0,u=0;const c=(e+t)*Ke,o=Math.floor(e+c),f=Math.floor(t+c),S=(o+f)*de,U=o-S,V=f-S,P=e-U,O=t-V;let A,N;P>O?(A=1,N=0):(A=0,N=1);const $=P-A+de,j=O-N+de,M=P-1+2*de,m=O-1+2*de,v=o&255,_=f&255;let p=.5-P*P-O*O;if(p>=0){const g=s[v+i[_]]*3;p*=p,n=p*p*(b[g]*P+b[g+1]*O)}let w=.5-$*$-j*j;if(w>=0){const g=s[v+A+i[_+N]]*3;w*=w,a=w*w*(b[g]*$+b[g+1]*j)}let x=.5-M*M-m*m;if(x>=0){const g=s[v+1+i[_+1]]*3;x*=x,u=x*x*(b[g]*M+b[g+1]*m)}return 70*(n+a+u)}noise3D(e,t,s){const i=this.permMod12,n=this.perm;let a,u,c,o;const f=(e+t+s)*Le,S=Math.floor(e+f),U=Math.floor(t+f),V=Math.floor(s+f),P=(S+U+V)*I,O=S-P,A=U-P,N=V-P,$=e-O,j=t-A,M=s-N;let m,v,_,p,w,x;$>=j?j>=M?(m=1,v=0,_=0,p=1,w=1,x=0):$>=M?(m=1,v=0,_=0,p=1,w=0,x=1):(m=0,v=0,_=1,p=1,w=0,x=1):j<M?(m=0,v=0,_=1,p=0,w=1,x=1):$<M?(m=0,v=1,_=0,p=0,w=1,x=1):(m=0,v=1,_=0,p=1,w=1,x=0);const g=$-m+I,F=j-v+I,K=M-_+I,L=$-p+2*I,W=j-w+2*I,Z=M-x+2*I,Q=$-1+3*I,H=j-1+3*I,J=M-1+3*I,G=S&255,R=U&255,X=V&255;let q=.6-$*$-j*j-M*M;if(q<0)a=0;else{const k=i[G+n[R+n[X]]]*3;q*=q,a=q*q*(b[k]*$+b[k+1]*j+b[k+2]*M)}let T=.6-g*g-F*F-K*K;if(T<0)u=0;else{const k=i[G+m+n[R+v+n[X+_]]]*3;T*=T,u=T*T*(b[k]*g+b[k+1]*F+b[k+2]*K)}let z=.6-L*L-W*W-Z*Z;if(z<0)c=0;else{const k=i[G+p+n[R+w+n[X+x]]]*3;z*=z,c=z*z*(b[k]*L+b[k+1]*W+b[k+2]*Z)}let C=.6-Q*Q-H*H-J*J;if(C<0)o=0;else{const k=i[G+1+n[R+1+n[X+1]]]*3;C*=C,o=C*C*(b[k]*Q+b[k+1]*H+b[k+2]*J)}return 32*(a+u+c+o)}noise4D(e,t,s,i){const n=this.perm;let a,u,c,o,f;const S=(e+t+s+i)*We,U=Math.floor(e+S),V=Math.floor(t+S),P=Math.floor(s+S),O=Math.floor(i+S),A=(U+V+P+O)*D,N=U-A,$=V-A,j=P-A,M=O-A,m=e-N,v=t-$,_=s-j,p=i-M;let w=0,x=0,g=0,F=0;m>v?w++:x++,m>_?w++:g++,m>p?w++:F++,v>_?x++:g++,v>p?x++:F++,_>p?g++:F++;const K=w>=3?1:0,L=x>=3?1:0,W=g>=3?1:0,Z=F>=3?1:0,Q=w>=2?1:0,H=x>=2?1:0,J=g>=2?1:0,G=F>=2?1:0,R=w>=1?1:0,X=x>=1?1:0,q=g>=1?1:0,T=F>=1?1:0,z=m-K+D,C=v-L+D,k=_-W+D,_e=p-Z+D,he=m-Q+2*D,we=v-H+2*D,xe=_-J+2*D,ye=p-G+2*D,ge=m-R+3*D,ke=v-X+3*D,be=_-q+3*D,De=p-T+3*D,Me=m-1+4*D,$e=v-1+4*D,je=_-1+4*D,Pe=p-1+4*D,oe=U&255,ne=V&255,se=P&255,le=O&255;let ie=.6-m*m-v*v-_*_-p*p;if(ie<0)a=0;else{const d=n[oe+n[ne+n[se+n[le]]]]%32*4;ie*=ie,a=ie*ie*(y[d]*m+y[d+1]*v+y[d+2]*_+y[d+3]*p)}let re=.6-z*z-C*C-k*k-_e*_e;if(re<0)u=0;else{const d=n[oe+K+n[ne+L+n[se+W+n[le+Z]]]]%32*4;re*=re,u=re*re*(y[d]*z+y[d+1]*C+y[d+2]*k+y[d+3]*_e)}let ce=.6-he*he-we*we-xe*xe-ye*ye;if(ce<0)c=0;else{const d=n[oe+Q+n[ne+H+n[se+J+n[le+G]]]]%32*4;ce*=ce,c=ce*ce*(y[d]*he+y[d+1]*we+y[d+2]*xe+y[d+3]*ye)}let ae=.6-ge*ge-ke*ke-be*be-De*De;if(ae<0)o=0;else{const d=n[oe+R+n[ne+X+n[se+q+n[le+T]]]]%32*4;ae*=ae,o=ae*ae*(y[d]*ge+y[d+1]*ke+y[d+2]*be+y[d+3]*De)}let ue=.6-Me*Me-$e*$e-je*je-Pe*Pe;if(ue<0)f=0;else{const d=n[oe+1+n[ne+1+n[se+1+n[le+1]]]]%32*4;ue*=ue,f=ue*ue*(y[d]*Me+y[d+1]*$e+y[d+2]*je+y[d+3]*Pe)}return 27*(a+u+c+o+f)}}var Qe=Ze;function He(l){const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=t;for(let t=0;t<255;t++){const s=t+~~(l()*(256-t)),i=e[t];e[t]=e[s],e[s]=i}return e}function Je(l){let e=0,t=0,s=0,i=1;const n=et();return e=n(" "),t=n(" "),s=n(" "),e-=n(l),e<0&&(e+=1),t-=n(l),t<0&&(t+=1),s-=n(l),s<0&&(s+=1),function(){const a=2091639*e+i*23283064365386963e-26;return e=t,t=s,s=a-(i=a|0)}}function et(){let l=4022871197;return function(e){e=e.toString();for(let t=0;t<e.length;t++){l+=e.charCodeAt(t);let s=.02519603282416938*l;l=s>>>0,s-=l,s*=l,l=s>>>0,s-=l,l+=s*4294967296}return(l>>>0)*23283064365386963e-26}}function Fe(l){return Be()?(Ee(l),!0):!1}const te=typeof window!="undefined",Ie=()=>+Date.now();function tt(l,e=1e3,t={}){const{immediate:s=!0,immediateCallback:i=!1}=t;let n=null;const a=Y(!1);function u(){n&&(clearInterval(n),n=null)}function c(){a.value=!1,u()}function o(){e<=0||(a.value=!0,i&&l(),u(),n=setInterval(l,e))}return s&&te&&o(),Fe(c),{isActive:a,pause:c,resume:o}}const ot=te?window:void 0;te&&window.document;te&&window.navigator;te&&window.location;const Ue="__vueuse_ssr_handlers__";globalThis[Ue]=globalThis[Ue]||{};function nt(l,e={}){const{immediate:t=!0,window:s=ot}=e,i=Y(!1);function n(){!i.value||!s||(l(),s.requestAnimationFrame(n))}function a(){!i.value&&s&&(i.value=!0,n())}function u(){i.value=!1}return t&&a(),Fe(u),{isActive:i,pause:u,resume:a}}var Ve,ze;te&&(window==null?void 0:window.navigator)&&((Ve=window==null?void 0:window.navigator)==null?void 0:Ve.platform)&&/iP(ad|hone|od)/.test((ze=window==null?void 0:window.navigator)==null?void 0:ze.platform);var st=Object.defineProperty,Ce=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,Ne=(l,e,t)=>e in l?st(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,rt=(l,e)=>{for(var t in e||(e={}))lt.call(e,t)&&Ne(l,t,e[t]);if(Ce)for(var t of Ce(e))it.call(e,t)&&Ne(l,t,e[t]);return l};const ct={top:0,left:0,bottom:0,right:0,height:0,width:0};rt({text:""},ct);var at=Object.defineProperty,qe=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,Te=(l,e,t)=>e in l?at(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,pt=(l,e)=>{for(var t in e||(e={}))ut.call(e,t)&&Te(l,t,e[t]);if(qe)for(var t of qe(e))ft.call(e,t)&&Te(l,t,e[t]);return l};function dt(l={}){const{controls:e=!1,offset:t=0,immediate:s=!0,interval:i="requestAnimationFrame"}=l,n=Y(Ie()+t),a=()=>n.value=Ie()+t,u=i==="requestAnimationFrame"?nt(a,{immediate:s}):tt(a,i,{immediate:s});return e?pt({timestamp:n},u):n}const ve=l=>(Re("data-v-74da09c4"),l=l(),Xe(),l),mt={class:"flex flex-col items-center"},vt={class:"flex"},_t={class:"p-2 border-1 rounded-xl m-2"},ht=ve(()=>h("label",{class:"p-2",for:"box"},"Boxes",-1)),wt=ve(()=>h("label",{class:"p-2",for:"line"},"Lines",-1)),xt=ve(()=>h("label",{class:"p-2",for:"circle"},"Circles",-1)),yt=ve(()=>h("label",{class:"p-2",for:"polygon"},"Polygons",-1)),gt={class:"max-h-full m-auto",style:{"transform-box":"fill-box"},version:"1.1",baseProfile:"full",viewBox:"-10 -10 100 100",xmlns:"http://www.w3.org/2000/svg"},kt=["fill","x","y"],bt=["transform-origin","x1","x2","y1","y2","transform"],Dt=["cx","cy","stroke","r"],Mt=["points","fill"],$t=["x1","y1","x2","y2"],jt=["fill","cx","cy","r"],Pt={setup(l){const e=dt({offset:-Date.now()}),t=Ge({box:!1,line:!1,circle:!1,polygon:!0});Y(1);const s=Y(1e4);Y("box");const i=Y(5),n=new Qe;function a(u){let c="";for(let o=1;o<4;o++)c+=`${n.noise3D(u*o,u*u*o,e.value/s.value)*40+50},${n.noise3D((u*u+5)*o,(u+5)*o,e.value/s.value)*40+50} `;return c}return(u,c)=>(B(),E("div",mt,[h("div",vt,[ee(h("input",{"onUpdate:modelValue":c[0]||(c[0]=o=>s.value=o),id:"speed",type:"range",max:"20000",min:"1000"},null,512),[[Se,s.value]]),h("div",_t,[ee(h("input",{type:"checkbox",id:"box","onUpdate:modelValue":c[1]||(c[1]=o=>r(t).box=o)},null,512),[[me,r(t).box]]),ht,ee(h("input",{type:"checkbox",id:"line","onUpdate:modelValue":c[2]||(c[2]=o=>r(t).line=o)},null,512),[[me,r(t).line]]),wt,ee(h("input",{type:"checkbox",id:"circle","onUpdate:modelValue":c[3]||(c[3]=o=>r(t).circle=o)},null,512),[[me,r(t).circle]]),xt,ee(h("input",{type:"checkbox",id:"polygon","onUpdate:modelValue":c[4]||(c[4]=o=>r(t).polygon=o)},null,512),[[me,r(t).polygon]]),yt]),ee(h("input",{"onUpdate:modelValue":c[5]||(c[5]=o=>i.value=o),id:"zoom",type:"range",max:"100",min:"1",step:"1"},null,512),[[Se,i.value]])]),(B(),E("svg",gt,[(B(),E(fe,null,pe(20,o=>h("g",{key:o},[r(t).box?(B(),E(fe,{key:0},pe(20,f=>h("rect",{key:f,fill:`hsla(${r(n).noise3D(o/i.value,f/i.value,r(e)/s.value)*180},50%,50%,1)`,x:f*4-4,y:o*4-2,rx:"2",ry:"2",width:"4",height:"4"},null,8,kt)),64)):Oe("",!0),r(t).line?(B(),E(fe,{key:1},pe(20,f=>h("line",{key:f,"stroke-linecap":"round",stroke:"white","transform-origin":`${f*4-2}  ${o*4}`,"stroke-width":"0.4",x1:f*4-2,x2:f*4-2,y1:o*4-1.5,y2:o*4+1.5,transform:`rotate(${r(n).noise3D(o/i.value,f/i.value,r(e)/s.value)*180})`},null,8,bt)),64)):Oe("",!0),r(t).circle?(B(),E(fe,{key:2},pe(20,f=>h("circle",{key:f,cx:f*4-2,cy:o*4+.2,fill:"none","stroke-width":"0.1",stroke:`hsla(${r(n).noise3D(o/i.value,f/i.value,r(e)/s.value)*180},50%,50%,1)`,r:r(n).noise3D(o/i.value,f/i.value,r(e)/s.value)*4+4},null,8,Dt)),64)):Oe("",!0)])),64)),(B(),E(fe,null,pe(3,o=>h("g",{key:o},[h("polygon",{class:"fltr mix-blend-multiply",points:a(o),fill:`hsla(${r(n).noise3D(o*o*20,o*20,r(e)/s.value)*180},50%,50%,1)`},null,8,Mt),h("line",{class:"mix-blend-difference",stroke:"white","stroke-width":"0.2",x1:r(n).noise3D(o+5,o+5,r(e)/s.value)*40+40,y1:r(n).noise3D(o+10,o+10,r(e)/s.value)*40+40,x2:r(n).noise3D(o+20,o+20,r(e)/s.value)*40+40,y2:r(n).noise3D(o+30,o+30,r(e)/s.value)*40+40},null,8,$t),h("circle",{class:"mix-blend-screen",fill:`hsla(${r(n).noise3D(o*o,o+100,r(e)/s.value)*180},50%,50%,1)`,cx:r(n).noise3D(o+o*20,o+20,r(e)/s.value)*30+40,cy:r(n).noise3D(o*o+200,o-10,r(e)/s.value)*30+40,r:r(n).noise3D(o*20,o+220,r(e)/s.value)*10+15},null,8,jt)])),64))]))]))}};var Ot=Ae(Pt,[["__scopeId","data-v-74da09c4"]]);const Vt='{"title":"Simplex noise playground","description":"","frontmatter":{"title":"Simplex noise playground"},"relativePath":"exp/simplex.md","lastUpdated":1624396257000}',St={},At=h("p",null,[h("a",{href:"/"},"back")],-1);function Ft(l,e,t,s,i,n){const a=Ot;return B(),E("div",null,[At,Ye(a)])}var zt=Ae(St,[["render",Ft]]);export{Vt as __pageData,zt as default};