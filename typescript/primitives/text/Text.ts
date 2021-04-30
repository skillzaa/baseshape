import Shape from "../../baseShape/BaseShape.js";
import Counter from "../../../animation/Counter.js";

export default class Text extends Shape {
// #hidden:string;
constructor() {      
super();  
// this.#hidden = "its hidden";
this.attributes.add({name: "title", value: "Text" });
this.attributes.add({ name: "color", value: "red" });  
this.attributes.add({ name: "fontSize", value: 22 });  
this.attributes.add({ name: "fontFamily", value: "Arial" });  

}

draw(metal) {
  metal.saveCtx();  
  //set its height and width
  const w = metal.ctx.measureText(this.attributes.getProperty("title")).width;
  const h = metal.ctx.measureText(this.attributes.getProperty("M")).width;
  this.attributes.setProperty("width",w+100);
  this.attributes.setProperty("height",h-100);
  metal.getCtxValues(this.attributes);
  
  //if (this.attributes.getProperty("currentRotateAngle") > 0) {
      
   metal.translateCanvas(this.attributes,w,h);
   
   metal.rotateCanvas(this.attributes);
  
   metal.unTranslateCanvas(this.attributes);
  //}   
  
  //--------------draw rect-- if visible
 // if ((this.attributes.getProperty("transparent") === false)  ) {

    metal.drawText(this.attributes);
 // }
  
  //------------------------------
  metal.restoreCtx();  
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvv  
   //VVVVVV
  
}

widen(fromSecond:number=1,toSecond:number=10,fromWidth:number=100,toWidth:number=200):Counter{
  const w = this.generators.getCounter(
      "fontSize",fromSecond,toSecond,fromWidth, toWidth,[]);
  this.animations.add(w);
  return w;    
}
heighten(fromSecond:number=1,toSecond:number=10,fromWidth:number=100,toWidth:number=200):Counter{
  const w = this.generators.getCounter(
      "fontSize",fromSecond,toSecond,fromWidth, toWidth,[]);
  this.animations.add(w);
  return w;    
}
  //////////////////////////classsss-----------------
}



