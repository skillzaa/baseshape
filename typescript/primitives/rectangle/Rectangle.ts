//import Shape from "../../../shapesModuleOld/shape/Shape.js";

const BaseShape3 = require('../../baseShape/BaseShape');

module.exports =  class Rectangle extends BaseShape3 {
  animations:RectangleAnimations;
  constructor(name) {
    super(name);
    
//    this.animations = new RectangleAnimations();
  }
draw(metal) {
  const ans = metal.drawRectangle(this.attributes);
} //draw ends
   
  
 
  //////////////////////////classsss-----------------
}