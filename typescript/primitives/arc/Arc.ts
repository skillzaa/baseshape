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
  const ans = metal.drawArc(this.attributes);
} //draw ends
//---------------------------------------  
 
  //////////////////////////classsss-----------------
}