// import BaseShape from "../../baseShape/BaseShape.js";
const BaseShape2 = require('../../baseShape/BaseShape');

module.exports = class Arc extends BaseShape2 {

constructor(name) {
super(name);
this.attributes.add("openingAngle", 0);    
this.attributes.add("closingAngle", 360);    
// this.attributes.add("filled", true); 

}

draw(metal) {
  metal.saveCtx();  
  metal.getCtxValues(this.attributes);
  
  //if (this.attributes.getProperty("currentRotateAngle") > 0) {
      
   metal.translateCanvas(this.attributes);
   
   metal.rotateCanvas(this.attributes);
  
   metal.unTranslateCanvas(this.attributes);
  //}   
  
  //--------------draw rect-- if visible
 // if ((this.attributes.getProperty("transparent") === false)  ) {

    metal.drawArc(this.attributes); 
 // }
  
  //------------------------------
  metal.restoreCtx();  
}


//---------------------------------------  
 
  //////////////////////////classsss-----------------
}