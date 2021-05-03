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
   
  
//   draw() {
// //this.metal.drawRectangle(this.attributes);       
// //--------------------------------------------
// this.metal.saveCtx();  
// this.metal.getCtxValues(this.attributes);

// //if (this.attributes.getProperty("currentRotateAngle") > 0) {
    
//  this.metal.translateCanvas(this.attributes);
 
//  this.metal.rotateCanvas(this.attributes);

//  this.metal.unTranslateCanvas(this.attributes);
// //}   

// //--------------draw rect-- if visible
// if ((this.attributes.getProperty("transparent") === false)  ) {
// this.metal.drawRectangle(this.attributes);
// }

// //------------------------------
// this.metal.restoreCtx();
// //--------------------------------------------
//   }//draw ends
 
  //////////////////////////classsss-----------------
}