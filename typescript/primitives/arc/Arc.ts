import BaseShape from "../../baseShape/BaseShape.js";

export default class Arc extends BaseShape {

constructor() {
super();
this.attributes.add({ name: "openingAngle", value: 0, comments: "" });    
this.attributes.add({ name: "closingAngle", value: 360, comments: "" });    
this.attributes.add({ name: "filled", value: true, comments: "" }); 

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