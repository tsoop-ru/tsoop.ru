import{r as Y,u as r,i as Be,w as Te,g as Ee,h as Ge,_ as Ne,j as We,o as A,c as S,a as h,k as te,v as Ie,l as me,F as fe,m as pe,n as ve,p as Xe,f as Ye,e as Le}from"./app.ec5efa05.js";const Re=.5*(Math.sqrt(3)-1),de=(3-Math.sqrt(3))/6,Ze=1/3,z=1/6,Ke=(Math.sqrt(5)-1)/4,D=(5-Math.sqrt(5))/20,b=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),y=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);class He{constructor(e=Math.random){const o=typeof e=="function"?e:et(e);this.p=Qe(o),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=this.p[s&255],this.permMod12[s]=this.perm[s]%12}noise2D(e,o){const s=this.permMod12,l=this.perm;let n=0,u=0,f=0;const c=(e+o)*Re,t=Math.floor(e+c),a=Math.floor(o+c),V=(t+a)*de,C=t-V,q=a-V,P=e-C,F=o-q;let I,B;P>F?(I=1,B=0):(I=0,B=1);const j=P-I+de,$=F-B+de,M=P-1+2*de,m=F-1+2*de,v=t&255,_=a&255;let p=.5-P*P-F*F;if(p>=0){const g=s[v+l[_]]*3;p*=p,n=p*p*(b[g]*P+b[g+1]*F)}let w=.5-j*j-$*$;if(w>=0){const g=s[v+I+l[_+B]]*3;w*=w,u=w*w*(b[g]*j+b[g+1]*$)}let x=.5-M*M-m*m;if(x>=0){const g=s[v+1+l[_+1]]*3;x*=x,f=x*x*(b[g]*M+b[g+1]*m)}return 70*(n+u+f)}noise3D(e,o,s){const l=this.permMod12,n=this.perm;let u,f,c,t;const a=(e+o+s)*Ze,V=Math.floor(e+a),C=Math.floor(o+a),q=Math.floor(s+a),P=(V+C+q)*z,F=V-P,I=C-P,B=q-P,j=e-F,$=o-I,M=s-B;let m,v,_,p,w,x;j>=$?$>=M?(m=1,v=0,_=0,p=1,w=1,x=0):j>=M?(m=1,v=0,_=0,p=1,w=0,x=1):(m=0,v=0,_=1,p=1,w=0,x=1):$<M?(m=0,v=0,_=1,p=0,w=1,x=1):j<M?(m=0,v=1,_=0,p=0,w=1,x=1):(m=0,v=1,_=0,p=1,w=1,x=0);const g=j-m+z,U=$-v+z,R=M-_+z,Z=j-p+2*z,K=$-w+2*z,H=M-x+2*z,J=j-1+3*z,Q=$-1+3*z,ee=M-1+3*z,G=V&255,W=C&255,X=q&255;let T=.6-j*j-$*$-M*M;if(T<0)u=0;else{const k=l[G+n[W+n[X]]]*3;T*=T,u=T*T*(b[k]*j+b[k+1]*$+b[k+2]*M)}let E=.6-g*g-U*U-R*R;if(E<0)f=0;else{const k=l[G+m+n[W+v+n[X+_]]]*3;E*=E,f=E*E*(b[k]*g+b[k+1]*U+b[k+2]*R)}let O=.6-Z*Z-K*K-H*H;if(O<0)c=0;else{const k=l[G+p+n[W+w+n[X+x]]]*3;O*=O,c=O*O*(b[k]*Z+b[k+1]*K+b[k+2]*H)}let N=.6-J*J-Q*Q-ee*ee;if(N<0)t=0;else{const k=l[G+1+n[W+1+n[X+1]]]*3;N*=N,t=N*N*(b[k]*J+b[k+1]*Q+b[k+2]*ee)}return 32*(u+f+c+t)}noise4D(e,o,s,l){const n=this.perm;let u,f,c,t,a;const V=(e+o+s+l)*Ke,C=Math.floor(e+V),q=Math.floor(o+V),P=Math.floor(s+V),F=Math.floor(l+V),I=(C+q+P+F)*D,B=C-I,j=q-I,$=P-I,M=F-I,m=e-B,v=o-j,_=s-$,p=l-M;let w=0,x=0,g=0,U=0;m>v?w++:x++,m>_?w++:g++,m>p?w++:U++,v>_?x++:g++,v>p?x++:U++,_>p?g++:U++;const R=w>=3?1:0,Z=x>=3?1:0,K=g>=3?1:0,H=U>=3?1:0,J=w>=2?1:0,Q=x>=2?1:0,ee=g>=2?1:0,G=U>=2?1:0,W=w>=1?1:0,X=x>=1?1:0,T=g>=1?1:0,E=U>=1?1:0,O=m-R+D,N=v-Z+D,k=_-K+D,he=p-H+D,we=m-J+2*D,xe=v-Q+2*D,ye=_-ee+2*D,ge=p-G+2*D,ke=m-W+3*D,be=v-X+3*D,De=_-T+3*D,Me=p-E+3*D,je=m-1+4*D,$e=v-1+4*D,Pe=_-1+4*D,Fe=p-1+4*D,oe=C&255,ne=q&255,se=P&255,le=F&255;let ie=.6-m*m-v*v-_*_-p*p;if(ie<0)u=0;else{const d=n[oe+n[ne+n[se+n[le]]]]%32*4;ie*=ie,u=ie*ie*(y[d]*m+y[d+1]*v+y[d+2]*_+y[d+3]*p)}let re=.6-O*O-N*N-k*k-he*he;if(re<0)f=0;else{const d=n[oe+R+n[ne+Z+n[se+K+n[le+H]]]]%32*4;re*=re,f=re*re*(y[d]*O+y[d+1]*N+y[d+2]*k+y[d+3]*he)}let ce=.6-we*we-xe*xe-ye*ye-ge*ge;if(ce<0)c=0;else{const d=n[oe+J+n[ne+Q+n[se+ee+n[le+G]]]]%32*4;ce*=ce,c=ce*ce*(y[d]*we+y[d+1]*xe+y[d+2]*ye+y[d+3]*ge)}let ae=.6-ke*ke-be*be-De*De-Me*Me;if(ae<0)t=0;else{const d=n[oe+W+n[ne+X+n[se+T+n[le+E]]]]%32*4;ae*=ae,t=ae*ae*(y[d]*ke+y[d+1]*be+y[d+2]*De+y[d+3]*Me)}let ue=.6-je*je-$e*$e-Pe*Pe-Fe*Fe;if(ue<0)a=0;else{const d=n[oe+1+n[ne+1+n[se+1+n[le+1]]]]%32*4;ue*=ue,a=ue*ue*(y[d]*je+y[d+1]*$e+y[d+2]*Pe+y[d+3]*Fe)}return 27*(u+f+c+t+a)}}var Je=He;function Qe(i){const e=new Uint8Array(256);for(let o=0;o<256;o++)e[o]=o;for(let o=0;o<255;o++){const s=o+~~(i()*(256-o)),l=e[o];e[o]=e[s],e[s]=l}return e}function et(i){let e=0,o=0,s=0,l=1;const n=tt();return e=n(" "),o=n(" "),s=n(" "),e-=n(i),e<0&&(e+=1),o-=n(i),o<0&&(o+=1),s-=n(i),s<0&&(s+=1),function(){const u=2091639*e+l*23283064365386963e-26;return e=o,o=s,s=u-(l=u|0)}}function tt(){let i=4022871197;return function(e){e=e.toString();for(let o=0;o<e.length;o++){i+=e.charCodeAt(o);let s=.02519603282416938*i;i=s>>>0,s-=i,s*=i,i=s>>>0,s-=i,i+=s*4294967296}return(i>>>0)*23283064365386963e-26}}function Ae(i){return Ee()?(Ge(i),!0):!1}const L=typeof window!="undefined",Ue=()=>+Date.now();function ot(i,e=1e3,o={}){const{immediate:s=!0,immediateCallback:l=!1}=o;let n=null;const u=Y(!1);function f(){n&&(clearInterval(n),n=null)}function c(){u.value=!1,f()}function t(){e<=0||(u.value=!0,l&&i(),f(),n=setInterval(i,r(e)))}if(s&&L&&t(),Be(e)){const a=Te(e,()=>{s&&L&&t()});Ae(a)}return Ae(c),{isActive:u,pause:c,resume:t}}const nt=L?window:void 0;L&&window.document;L&&window.navigator;L&&window.location;const Se=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ve="__vueuse_ssr_handlers__";Se[Ve]=Se[Ve]||{};Se[Ve];function st(i,e={}){const{immediate:o=!0,window:s=nt}=e,l=Y(!1);function n(){!l.value||!s||(i(),s.requestAnimationFrame(n))}function u(){!l.value&&s&&(l.value=!0,n())}function f(){l.value=!1}return o&&u(),Ae(f),{isActive:l,pause:f,resume:u}}var ze,Ce;L&&(window==null?void 0:window.navigator)&&((ze=window==null?void 0:window.navigator)==null?void 0:ze.platform)&&/iP(ad|hone|od)/.test((Ce=window==null?void 0:window.navigator)==null?void 0:Ce.platform);var lt=Object.defineProperty,qe=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,Oe=(i,e,o)=>e in i?lt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[e]=o,ct=(i,e)=>{for(var o in e||(e={}))it.call(e,o)&&Oe(i,o,e[o]);if(qe)for(var o of qe(e))rt.call(e,o)&&Oe(i,o,e[o]);return i};function at(i={}){const{controls:e=!1,offset:o=0,immediate:s=!0,interval:l="requestAnimationFrame"}=i,n=Y(Ue()+o),u=()=>n.value=Ue()+o,f=l==="requestAnimationFrame"?st(u,{immediate:s}):ot(u,l,{immediate:s});return e?ct({timestamp:n},f):n}const _e=i=>(Xe("data-v-804042d0"),i=i(),Ye(),i),ut={class:"flex flex-col items-center"},ft={class:"flex"},pt={class:"p-2 border-1 rounded-xl m-2"},dt=_e(()=>h("label",{class:"p-2",for:"box"},"Boxes",-1)),mt=_e(()=>h("label",{class:"p-2",for:"line"},"Lines",-1)),vt=_e(()=>h("label",{class:"p-2",for:"circle"},"Circles",-1)),_t=_e(()=>h("label",{class:"p-2",for:"polygon"},"Polygons",-1)),ht={class:"max-h-100vh m-auto",style:{"transform-box":"fill-box"},version:"1.1",baseProfile:"full",viewBox:"-10 -10 100 100",xmlns:"http://www.w3.org/2000/svg"},wt={key:0},xt=["fill","x","y"],yt={key:1},gt=["transform-origin","x1","x2","y1","y2","transform"],kt={key:2},bt=["cx","cy","stroke","r"],Dt={key:0},Mt=["points","fill"],jt=["x1","y1","x2","y2"],$t=["fill","cx","cy","r"],Pt={setup(i){const e=at({offset:-Date.now()}),o=We({box:!1,line:!1,circle:!1,polygon:!0});Y(1);const s=Y(1e4);Y("box");const l=Y(5),n=new Je;function u(f){let c="";for(let t=1;t<4;t++)c+=`${n.noise3D(f*t,f*f*t,e.value/s.value)*40+50},${n.noise3D((f*f+5)*t,(f+5)*t,e.value/s.value)*40+50} `;return c}return(f,c)=>(A(),S("div",ut,[h("div",ft,[te(h("input",{"onUpdate:modelValue":c[0]||(c[0]=t=>s.value=t),id:"speed",type:"range",max:"20000",min:"1000"},null,512),[[Ie,s.value]]),h("div",pt,[te(h("input",{type:"checkbox",id:"box","onUpdate:modelValue":c[1]||(c[1]=t=>r(o).box=t)},null,512),[[me,r(o).box]]),dt,te(h("input",{type:"checkbox",id:"line","onUpdate:modelValue":c[2]||(c[2]=t=>r(o).line=t)},null,512),[[me,r(o).line]]),mt,te(h("input",{type:"checkbox",id:"circle","onUpdate:modelValue":c[3]||(c[3]=t=>r(o).circle=t)},null,512),[[me,r(o).circle]]),vt,te(h("input",{type:"checkbox",id:"polygon","onUpdate:modelValue":c[4]||(c[4]=t=>r(o).polygon=t)},null,512),[[me,r(o).polygon]]),_t]),te(h("input",{"onUpdate:modelValue":c[5]||(c[5]=t=>l.value=t),id:"zoom",type:"range",max:"100",min:"1",step:"1"},null,512),[[Ie,l.value]])]),(A(),S("svg",ht,[(A(),S(fe,null,pe(20,t=>h("g",{key:t},[r(o).box?(A(),S("g",wt,[(A(),S(fe,null,pe(20,a=>h("rect",{key:a,fill:`hsla(${r(n).noise3D(t/l.value,a/l.value,r(e)/s.value)*180},50%,50%,1)`,x:a*4-4,y:t*4-2,rx:"2",ry:"2",width:"4",height:"4"},null,8,xt)),64))])):ve("",!0),r(o).line?(A(),S("g",yt,[(A(),S(fe,null,pe(20,a=>h("line",{key:a,"stroke-linecap":"round",stroke:"white","transform-origin":`${a*4-2}  ${t*4}`,"stroke-width":"0.4",x1:a*4-2,x2:a*4-2,y1:t*4-1.5,y2:t*4+1.5,transform:`rotate(${r(n).noise3D(t/l.value,a/l.value,r(e)/s.value)*180})`},null,8,gt)),64))])):ve("",!0),r(o).circle?(A(),S("g",kt,[(A(),S(fe,null,pe(20,a=>h("circle",{key:a,cx:a*4-2,cy:t*4+.2,fill:"none","stroke-width":"0.1",stroke:`hsla(${r(n).noise3D(t/l.value,a/l.value,r(e)/s.value)*180},50%,50%,1)`,r:r(n).noise3D(t/l.value,a/l.value,r(e)/s.value)*4+4},null,8,bt)),64))])):ve("",!0)])),64)),r(o).polygon?(A(),S("g",Dt,[(A(),S(fe,null,pe(3,t=>h("g",{key:t},[h("polygon",{class:"fltr mix-blend-multiply",points:u(t),fill:`hsla(${r(n).noise3D(t*t*20,t*20,r(e)/s.value)*180},50%,50%,1)`},null,8,Mt),h("line",{class:"mix-blend-difference",stroke:"white","stroke-width":"0.2",x1:r(n).noise3D(t+5,t+5,r(e)/s.value)*40+40,y1:r(n).noise3D(t+10,t+10,r(e)/s.value)*40+40,x2:r(n).noise3D(t+20,t+20,r(e)/s.value)*40+40,y2:r(n).noise3D(t+30,t+30,r(e)/s.value)*40+40},null,8,jt),h("circle",{class:"mix-blend-screen",fill:`hsla(${r(n).noise3D(t*t,t+100,r(e)/s.value)*180},50%,50%,1)`,cx:r(n).noise3D(t+t*20,t+20,r(e)/s.value)*30+40,cy:r(n).noise3D(t*t+200,t-10,r(e)/s.value)*30+40,r:r(n).noise3D(t*20,t+220,r(e)/s.value)*10+15},null,8,$t)])),64))])):ve("",!0)]))]))}};var Ft=Ne(Pt,[["__scopeId","data-v-804042d0"]]);const Ut='{"title":"Simplex noise playground","description":"","frontmatter":{"title":"Simplex noise playground"},"headers":[],"relativePath":"exp/simplex.md"}',At={},St=h("p",null,[h("a",{href:"/"},"back")],-1);function Vt(i,e,o,s,l,n){const u=Ft;return A(),S("div",null,[St,Le(u)])}var zt=Ne(At,[["render",Vt]]);export{Ut as __pageData,zt as default};
