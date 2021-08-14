import{r as e,E as l,v as a,p as r,k as n,b as t,o,f as i,g as s,G as u,H as v,I as c,u as f,F as p,C as d,B as m,q as h}from"./framework.07588156.js";var x,y,g={exports:{}};x=g,y=g.exports,function(){var e=.5*(Math.sqrt(3)-1),l=(3-Math.sqrt(3))/6,a=1/6,r=(Math.sqrt(5)-1)/4,n=(5-Math.sqrt(5))/20;function t(e){var l;l="function"==typeof e?e:e?function(){var e=0,l=0,a=0,r=1,n=i();e=n(" "),l=n(" "),a=n(" ");for(var t=0;t<arguments.length;t++)(e-=n(arguments[t]))<0&&(e+=1),(l-=n(arguments[t]))<0&&(l+=1),(a-=n(arguments[t]))<0&&(a+=1);return n=null,function(){var n=2091639*e+2.3283064365386963e-10*r;return e=l,l=a,a=n-(r=0|n)}}(e):Math.random,this.p=o(l),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var a=0;a<512;a++)this.perm[a]=this.p[255&a],this.permMod12[a]=this.perm[a]%12}function o(e){var l,a=new Uint8Array(256);for(l=0;l<256;l++)a[l]=l;for(l=0;l<255;l++){var r=l+~~(e()*(256-l)),n=a[l];a[l]=a[r],a[r]=n}return a}function i(){var e=4022871197;return function(l){l=l.toString();for(var a=0;a<l.length;a++){var r=.02519603282416938*(e+=l.charCodeAt(a));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)}}t.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(a,r){var n,t,o=this.permMod12,i=this.perm,s=this.grad3,u=0,v=0,c=0,f=(a+r)*e,p=Math.floor(a+f),d=Math.floor(r+f),m=(p+d)*l,h=a-(p-m),x=r-(d-m);h>x?(n=1,t=0):(n=0,t=1);var y=h-n+l,g=x-t+l,b=h-1+2*l,w=x-1+2*l,k=255&p,D=255&d,M=.5-h*h-x*x;if(M>=0){var U=3*o[k+i[D]];u=(M*=M)*M*(s[U]*h+s[U+1]*x)}var A=.5-y*y-g*g;if(A>=0){var $=3*o[k+n+i[D+t]];v=(A*=A)*A*(s[$]*y+s[$+1]*g)}var q=.5-b*b-w*w;if(q>=0){var F=3*o[k+1+i[D+1]];c=(q*=q)*q*(s[F]*b+s[F+1]*w)}return 70*(u+v+c)},noise3D:function(e,l,r){var n,t,o,i,s,u,v,c,f,p,d=this.permMod12,m=this.perm,h=this.grad3,x=.3333333333333333*(e+l+r),y=Math.floor(e+x),g=Math.floor(l+x),b=Math.floor(r+x),w=(y+g+b)*a,k=e-(y-w),D=l-(g-w),M=r-(b-w);k>=D?D>=M?(s=1,u=0,v=0,c=1,f=1,p=0):k>=M?(s=1,u=0,v=0,c=1,f=0,p=1):(s=0,u=0,v=1,c=1,f=0,p=1):D<M?(s=0,u=0,v=1,c=0,f=1,p=1):k<M?(s=0,u=1,v=0,c=0,f=1,p=1):(s=0,u=1,v=0,c=1,f=1,p=0);var U=k-s+a,A=D-u+a,$=M-v+a,q=k-c+2*a,F=D-f+2*a,N=M-p+2*a,I=k-1+.5,P=D-1+.5,V=M-1+.5,E=255&y,O=255&g,T=255&b,C=.6-k*k-D*D-M*M;if(C<0)n=0;else{var S=3*d[E+m[O+m[T]]];n=(C*=C)*C*(h[S]*k+h[S+1]*D+h[S+2]*M)}var B=.6-U*U-A*A-$*$;if(B<0)t=0;else{var G=3*d[E+s+m[O+u+m[T+v]]];t=(B*=B)*B*(h[G]*U+h[G+1]*A+h[G+2]*$)}var H=.6-q*q-F*F-N*N;if(H<0)o=0;else{var L=3*d[E+c+m[O+f+m[T+p]]];o=(H*=H)*H*(h[L]*q+h[L+1]*F+h[L+2]*N)}var _=.6-I*I-P*P-V*V;if(_<0)i=0;else{var j=3*d[E+1+m[O+1+m[T+1]]];i=(_*=_)*_*(h[j]*I+h[j+1]*P+h[j+2]*V)}return 32*(n+t+o+i)},noise4D:function(e,l,a,t){var o,i,s,u,v,c,f,p,d,m,h,x,y,g,b,w,k,D=this.perm,M=this.grad4,U=(e+l+a+t)*r,A=Math.floor(e+U),$=Math.floor(l+U),q=Math.floor(a+U),F=Math.floor(t+U),N=(A+$+q+F)*n,I=e-(A-N),P=l-($-N),V=a-(q-N),E=t-(F-N),O=0,T=0,C=0,S=0;I>P?O++:T++,I>V?O++:C++,I>E?O++:S++,P>V?T++:C++,P>E?T++:S++,V>E?C++:S++;var B=I-(c=O>=3?1:0)+n,G=P-(f=T>=3?1:0)+n,H=V-(p=C>=3?1:0)+n,L=E-(d=S>=3?1:0)+n,_=I-(m=O>=2?1:0)+2*n,j=P-(h=T>=2?1:0)+2*n,R=V-(x=C>=2?1:0)+2*n,W=E-(y=S>=2?1:0)+2*n,z=I-(g=O>=1?1:0)+3*n,J=P-(b=T>=1?1:0)+3*n,K=V-(w=C>=1?1:0)+3*n,Q=E-(k=S>=1?1:0)+3*n,X=I-1+4*n,Y=P-1+4*n,Z=V-1+4*n,ee=E-1+4*n,le=255&A,ae=255&$,re=255&q,ne=255&F,te=.6-I*I-P*P-V*V-E*E;if(te<0)o=0;else{var oe=D[le+D[ae+D[re+D[ne]]]]%32*4;o=(te*=te)*te*(M[oe]*I+M[oe+1]*P+M[oe+2]*V+M[oe+3]*E)}var ie=.6-B*B-G*G-H*H-L*L;if(ie<0)i=0;else{var se=D[le+c+D[ae+f+D[re+p+D[ne+d]]]]%32*4;i=(ie*=ie)*ie*(M[se]*B+M[se+1]*G+M[se+2]*H+M[se+3]*L)}var ue=.6-_*_-j*j-R*R-W*W;if(ue<0)s=0;else{var ve=D[le+m+D[ae+h+D[re+x+D[ne+y]]]]%32*4;s=(ue*=ue)*ue*(M[ve]*_+M[ve+1]*j+M[ve+2]*R+M[ve+3]*W)}var ce=.6-z*z-J*J-K*K-Q*Q;if(ce<0)u=0;else{var fe=D[le+g+D[ae+b+D[re+w+D[ne+k]]]]%32*4;u=(ce*=ce)*ce*(M[fe]*z+M[fe+1]*J+M[fe+2]*K+M[fe+3]*Q)}var pe=.6-X*X-Y*Y-Z*Z-ee*ee;if(pe<0)v=0;else{var de=D[le+1+D[ae+1+D[re+1+D[ne+1]]]]%32*4;v=(pe*=pe)*pe*(M[de]*X+M[de+1]*Y+M[de+2]*Z+M[de+3]*ee)}return 27*(o+i+s+u+v)}},t._buildPermutationTable=o,y.SimplexNoise=t,x.exports=t}();var b=g.exports;const w="undefined"!=typeof window,k=()=>+Date.now();function D(e){l()&&a(e)}const M=w?window:void 0;var U,A;function $(l={}){const{controls:a=!1,offset:r=0,interval:n="requestAnimationFrame"}=l,t=e(k()+r),o=()=>t.value=k()+r,i="requestAnimationFrame"===n?function(l,a={}){const{immediate:r=!0,window:n=M}=a,t=e(!1);function o(){t.value&&(l(),n&&n.requestAnimationFrame(o))}function i(){t.value||(t.value=!0,o())}function s(){t.value=!1}return r&&i(),D(s),{isActive:t,pause:s,resume:i}}(o,{immediate:!0}):function(l,a=1e3,r={}){const{immediate:n=!0,immediateCallback:t=!1}=r;let o=null;const i=e(!1);function s(){o&&(clearInterval(o),o=null)}function u(){i.value=!1,s()}function v(){a<=0||(i.value=!0,t&&l(),s(),o=setInterval(l,a))}return n&&w&&v(),D(u),{isActive:i,pause:u,resume:v}}(o,n,{immediate:!0});return a?Object.assign({timestamp:t},i):t}(A=U||(U={})).UP="UP",A.RIGHT="RIGHT",A.DOWN="DOWN",A.LEFT="LEFT",A.NONE="NONE";r("data-v-74da09c4");const q={class:"flex flex-col items-center"},F={class:"flex"},N={class:"p-2 border-1 rounded-xl m-2"},I=s("label",{class:"p-2",for:"box"},"Boxes",-1),P=s("label",{class:"p-2",for:"line"},"Lines",-1),V=s("label",{class:"p-2",for:"circle"},"Circles",-1),E=s("label",{class:"p-2",for:"polygon"},"Polygons",-1),O={class:"max-h-full m-auto",style:{"transform-box":"fill-box"},version:"1.1",baseProfile:"full",viewBox:"-10 -10 100 100",xmlns:"http://www.w3.org/2000/svg"},T=["fill","x","y"],C=["transform-origin","x1","x2","y1","y2","transform"],S=["cx","cy","stroke","r"],B=["points","fill"],G=["x1","y1","x2","y2"],H=["fill","cx","cy","r"];n();const L={setup(l){const a=$({offset:-Date.now()}),r=t({box:!1,line:!1,circle:!1,polygon:!0});e(1);const n=e(1e4);e("box");const h=e(5),x=new b;function y(e){let l="";for(let r=1;r<4;r++)l+=`${40*x.noise3D(e*r,e*e*r,a.value/n.value)+50},${40*x.noise3D((e*e+5)*r,(e+5)*r,a.value/n.value)+50} `;return l}return(e,l)=>(o(),i("div",q,[s("div",F,[u(s("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),id:"speed",type:"range",max:"20000",min:"1000"},null,512),[[v,n.value]]),s("div",N,[u(s("input",{type:"checkbox",id:"box","onUpdate:modelValue":l[1]||(l[1]=e=>f(r).box=e)},null,512),[[c,f(r).box]]),I,u(s("input",{type:"checkbox",id:"line","onUpdate:modelValue":l[2]||(l[2]=e=>f(r).line=e)},null,512),[[c,f(r).line]]),P,u(s("input",{type:"checkbox",id:"circle","onUpdate:modelValue":l[3]||(l[3]=e=>f(r).circle=e)},null,512),[[c,f(r).circle]]),V,u(s("input",{type:"checkbox",id:"polygon","onUpdate:modelValue":l[4]||(l[4]=e=>f(r).polygon=e)},null,512),[[c,f(r).polygon]]),E]),u(s("input",{"onUpdate:modelValue":l[5]||(l[5]=e=>h.value=e),id:"zoom",type:"range",max:"100",min:"1",step:"1"},null,512),[[v,h.value]])]),(o(),i("svg",O,[(o(),i(p,null,d(20,(e=>s("g",{key:e},[f(r).box?(o(),i(p,{key:0},d(20,(l=>s("rect",{key:l,fill:`hsla(${180*f(x).noise3D(e/h.value,l/h.value,f(a)/n.value)},50%,50%,1)`,x:4*l-4,y:4*e-2,rx:"2",ry:"2",width:"4",height:"4"},null,8,T))),64)):m("v-if",!0),f(r).line?(o(),i(p,{key:1},d(20,(l=>s("line",{key:l,"stroke-linecap":"round",stroke:"white","transform-origin":`${4*l-2}  ${4*e}`,"stroke-width":"0.4",x1:4*l-2,x2:4*l-2,y1:4*e-1.5,y2:4*e+1.5,transform:`rotate(${180*f(x).noise3D(e/h.value,l/h.value,f(a)/n.value)})`},null,8,C))),64)):m("v-if",!0),f(r).circle?(o(),i(p,{key:2},d(20,(l=>s("circle",{key:l,cx:4*l-2,cy:4*e+.2,fill:"none","stroke-width":"0.1",stroke:`hsla(${180*f(x).noise3D(e/h.value,l/h.value,f(a)/n.value)},50%,50%,1)`,r:4*f(x).noise3D(e/h.value,l/h.value,f(a)/n.value)+4},null,8,S))),64)):m("v-if",!0)]))),64)),(o(),i(p,null,d(3,(e=>s("g",{key:e},[s("polygon",{class:"fltr mix-blend-multiply",points:y(e),fill:`hsla(${180*f(x).noise3D(e*e*20,20*e,f(a)/n.value)},50%,50%,1)`},null,8,B),s("line",{class:"mix-blend-difference",stroke:"white","stroke-width":"0.2",x1:40*f(x).noise3D(e+5,e+5,f(a)/n.value)+40,y1:40*f(x).noise3D(e+10,e+10,f(a)/n.value)+40,x2:40*f(x).noise3D(e+20,e+20,f(a)/n.value)+40,y2:40*f(x).noise3D(e+30,e+30,f(a)/n.value)+40},null,8,G),s("circle",{class:"mix-blend-screen",fill:`hsla(${180*f(x).noise3D(e*e,e+100,f(a)/n.value)},50%,50%,1)`,cx:30*f(x).noise3D(e+20*e,e+20,f(a)/n.value)+40,cy:30*f(x).noise3D(e*e+200,e-10,f(a)/n.value)+40,r:10*f(x).noise3D(20*e,e+220,f(a)/n.value)+15},null,8,H)]))),64))]))]))},__scopeId:"data-v-74da09c4"},_='{"title":"Simplex noise playground","description":"","frontmatter":{"title":"Simplex noise playground"},"relativePath":"exp/simplex.md","lastUpdated":1624396257089}',j={},R=s("p",null,[s("a",{href:"/"},"back")],-1);j.render=function(e,l,a,r,n,t){const s=L;return o(),i("div",null,[R,h(s)])};export default j;export{_ as __pageData};
