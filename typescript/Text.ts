import BaseShape from "./BaseShape.js";

export default class Text extends BaseShape {
// #hidden:string;
constructor(name) {      
super(name);  
// this.#hidden = "its hidden";
this.attributes.add("title", "Text");
// this.attributes.add("color", "red");  
this.attributes.add("fontSize", 22);  
this.attributes.add("fontFamily", "Arial");  

}
draw(metal) {
  const ans = metal.drawText(this.attributes);
} //draw ends

widen(fromSecond:number=1,toSecond:number=10,fromWidth:number=100,toWidth:number=200):Counter{
  const w = this.generators.addCounter(
      "fontSize",fromSecond,toSecond,fromWidth, toWidth,[]);
  this.animations.push(w);
  return w;    
}
heighten(fromSecond:number=1,toSecond:number=10,fromWidth:number=100,toWidth:number=200):Counter{
  const w = this.generators.addCounter(
      "fontSize",fromSecond,toSecond,fromWidth, toWidth,[]);
  this.animations.push(w);
  return w;    
}
  //////////////////////////classsss-----------------
}



