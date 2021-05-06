import BaseShape from "./BaseShape.js";
export default class Arc extends BaseShape {

constructor(name) {
super(name);
this.attributes.add("openingAngle", 0);    
this.attributes.add("closingAngle", 360);    
// this.attributes.add("filled", true); 

}
draw(metal) {
  const ans = metal.drawArc(this.attributes);
} //draw ends
heighten(fromSecond:number=1,toSecond:number=10,from:number=100,to:number=200):Counter{
  return this.simpleCounter("width",fromSecond,toSecond
  ,from,to);    
}

//---------------------------------------  
 
  //////////////////////////classsss-----------------
}