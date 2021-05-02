//import ArrayOfObjects from "../../modules/ArrayOfObjects.js";
const ArrayOfObjects = require('@bilzaa.com/arrayofobjects');

module.exports = function getBaseAttributes (){
const attributes = new ArrayOfObjects();

//--The name--
attributes.add({name: "name", value: 0 });
//--x,y,width,height--
attributes.add({name: "x", value: 100 });
attributes.add({ name: "y", value: 100 });
attributes.add({ name: "width", value: 100 });
attributes.add({ name: "height", value: 100 });
// attributes.add({ name: "offsetWidth", value: 0 });
// attributes.add({ name: "offsetHeight", value: 0 });
//--rotation--
attributes.add({ name: "rotateClockwise", value: true});
//---the angle at which);the obj is currently rotated--this is also rpm / rps
attributes.add({ name: "currentRotateAngle", value: 0});   
//--colors--
attributes.add({ name: "color", value: "green" });
attributes.add({ name: "opacity", value: 1 });//----------???? transparency
/**this just became border */
attributes.add({ name: "lineWidth", value: 5 });//----------???? transparency
/**there is no strokeStyle since the color is fillStyle as well as strokeStyle since we have border feature coming later so we do not need this confusion now */
//attributes.add({ name: "strokeStyle", value: "#F0000" });
//--shadows--
attributes.add({ name: "shadowColor", value: "grey" });
attributes.add({ name: "shadowBlur", value: 0 });
attributes.add({ name: "shadowOffsetX", value: 0 });
attributes.add({ name: "shadowOffsetY", value: 0 });  
// if filled draw filled if not draw border only
attributes.add({ name: "filled", value: true });  

attributes.add({ name: "lineDashSize", value: 1});    
attributes.add({ name: "lineDashGap", value: 0});

attributes.add({ name: "drawBoundingRectangle", value: true});    
attributes.add({ name: "boundingRectangleColor", value: "red"});    
attributes.add({ name: "boundingRectanglePadding", value: 20});    
//--18 items
return attributes;
}
//====================================================
// export default getBaseAttributes;