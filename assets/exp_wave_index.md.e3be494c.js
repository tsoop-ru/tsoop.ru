import{B as u,d as f,R as p,D as _,b as w,S as v,W as g,C as x,e as S}from"./chunks/three.module.f91d972d.js";import{d as y,o as c,c as l,_ as b,e as P,a as h}from"./app.707b8cc5.js";const R={id:"waves"},C={__name:"waves",setup(d){const a=`
attribute vec3 position;

void main()	{
  gl_Position = vec4(position, 1.0);
}
`,s=`
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float xScale;
uniform float yScale;
uniform float distortion;

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  
  float d = length(p) * distortion;
  
  float rx = p.x * (1.0 + d);
  float gx = p.x;
  float bx = p.x * (1.0 - d);

  float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
  float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
  float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
  
  gl_FragColor = vec4(r, g, b, 1.0);
}
`;class r{constructor(){this.renderParam={clearColor:6710886,width:window.innerWidth,height:window.innerHeight},this.cameraParam={left:-1,right:1,top:1,bottom:1,near:0,far:-1},this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.mesh=null,this.isInitialized=!1}init(){this._setScene(),this._setRender(),this._setCamera(),this.isInitialized=!0}_setScene(){this.scene=new v}_setRender(){this.renderer=new g({canvas:document.getElementById("waves")}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(new x(this.renderParam.clearColor)),this.renderer.setSize(this.renderParam.width,this.renderParam.height)}_setCamera(){this.isInitialized||(this.camera=new S(this.cameraParam.left,this.cameraParam.right,this.cameraParam.top,this.cameraParam.bottom,this.cameraParam.near,this.cameraParam.far));const e=window.innerWidth,i=window.innerHeight;this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i)}_render(){this.renderer.render(this.scene,this.camera)}onResize(){this._setCamera()}onRaf(){this._render()}}class n{constructor(e){this.canvas=document.getElementById("waves"),this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.uniforms={resolution:{type:"v2",value:[this.canvasWidth,this.canvasHeight]},time:{type:"f",value:0},xScale:{type:"f",value:1},yScale:{type:"f",value:.5},distortion:{type:"f",value:.05}},this.stage=e,this.mesh=null,this.xScale=3,this.yScale=.7,this.distortion=.1}init(){this._setMesh(),this._setGui()}_setMesh(){const e=[-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0],i=new u(new Float32Array(e),3),o=new f;o.setAttribute("position",i);const m=new p({vertexShader:a,fragmentShader:s,uniforms:this.uniforms,side:_});this.mesh=new w(o,m),this.stage.scene.add(this.mesh)}_render(){this.uniforms.time.value+=.01}_setGui(){this.xScale,this.yScale,this.distortion}onRaf(){this._render()}}return y(()=>{const t=new r;t.init();const e=new n(t);e.init(),window.addEventListener("resize",()=>{t.onResize()});const i=()=>{window.requestAnimationFrame(()=>{t.onRaf(),e.onRaf(),i()})};i()}),(t,e)=>(c(),l("canvas",R))}},H='{"title":"Waves","description":"","frontmatter":{"title":"Waves","source":"https://codepen.io/Web_yuki1027/pen/yLgYpWM"},"headers":[],"relativePath":"exp/wave/index.md"}',W={},z=h("p",null,[h("a",{href:"/"},"back")],-1);function B(d,a,s,r,n,t){const e=C;return c(),l("div",null,[z,P(e)])}var I=b(W,[["render",B]]);export{H as __pageData,I as default};
