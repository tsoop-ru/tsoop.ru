import{p as e,j as t,l as i,o as a,f as s,g as n}from"./framework.1c5d7d8e.js";import{B as r,d as o,R as h,D as l,b as c,S as d,W as m,C as u,e as f}from"./three.f5e6a78f.js";e("data-v-3e24d270");const p={id:"waves"};t();const v={props:{},setup(e){class t{constructor(){this.renderParam={clearColor:6710886,width:window.innerWidth,height:window.innerHeight},this.cameraParam={left:-1,right:1,top:1,bottom:1,near:0,far:-1},this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.mesh=null,this.isInitialized=!1}init(){this._setScene(),this._setRender(),this._setCamera(),this.isInitialized=!0}_setScene(){this.scene=new d}_setRender(){this.renderer=new m({canvas:document.getElementById("waves")}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(new u(this.renderParam.clearColor)),this.renderer.setSize(this.renderParam.width,this.renderParam.height)}_setCamera(){this.isInitialized||(this.camera=new f(this.cameraParam.left,this.cameraParam.right,this.cameraParam.top,this.cameraParam.bottom,this.cameraParam.near,this.cameraParam.far));const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}_render(){this.renderer.render(this.scene,this.camera)}onResize(){this._setCamera()}onRaf(){this._render()}}class n{constructor(e){this.canvas=document.getElementById("waves"),this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.uniforms={resolution:{type:"v2",value:[this.canvasWidth,this.canvasHeight]},time:{type:"f",value:0},xScale:{type:"f",value:1},yScale:{type:"f",value:.5},distortion:{type:"f",value:.05}},this.stage=e,this.mesh=null,this.xScale=3,this.yScale=.7,this.distortion=.1}init(){this._setMesh(),this._setGui()}_setMesh(){const e=new r(new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0]),3),t=new o;t.setAttribute("position",e);const i=new h({vertexShader:"\nattribute vec3 position;\n\nvoid main()\t{\n  gl_Position = vec4(position, 1.0);\n}\n",fragmentShader:"\nprecision highp float;\nuniform vec2 resolution;\nuniform float time;\nuniform float xScale;\nuniform float yScale;\nuniform float distortion;\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);\n  \n  float d = length(p) * distortion;\n  \n  float rx = p.x * (1.0 + d);\n  float gx = p.x;\n  float bx = p.x * (1.0 - d);\n\n  float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);\n  float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);\n  float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);\n  \n  gl_FragColor = vec4(r, g, b, 1.0);\n}\n",uniforms:this.uniforms,side:l});this.mesh=new c(t,i),this.stage.scene.add(this.mesh)}_render(){this.uniforms.time.value+=.01}_setGui(){this.xScale,this.yScale,this.distortion}onRaf(){this._render()}}return i((()=>{const e=new t;e.init();const i=new n(e);i.init(),window.addEventListener("resize",(()=>{e.onResize()}));const a=()=>{window.requestAnimationFrame((()=>{e.onRaf(),i.onRaf(),a()}))};a()})),(e,t)=>(a(),s("canvas",p))},__scopeId:"data-v-3e24d270"},w='{"title":"Waves","description":"","frontmatter":{"title":"Waves","source":"https://codepen.io/Web_yuki1027/pen/yLgYpWM"},"relativePath":"exp/waves.md","lastUpdated":1624396244024}',g={},x=n("p",null,[n("a",{href:"/"},"back")],-1);g.render=function(e,t,i,r,o,h){const l=v;return a(),s("div",null,[x,n(l)])};export default g;export{w as __pageData};
