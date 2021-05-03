export {};
const ArrayOfObjects = require('@bilzaa.com/arrayofobjects');
const Generators = require('aninumber');
const getBaseAttributes = require('./baseAttributeCollection');

module.exports = class BaseShape{  
public attributes:InstanceType<typeof ArrayOfObjects>; 
// animations: InstanceType<typeof ArrayOfObjects>;
animations: object[];
protected generators:InstanceType<typeof Generators>;

constructor(name) {              
this.attributes = getBaseAttributes(name); 
this.animations = [];   
this.generators = new Generators();
}

preUpdate(){}
postUpdate(){}

public update(currentSecondMilli:number){
//==================LLLLLOOOOPPPPP======================== 
this.animations.forEach(animation => {
    //----STEP 1 -- GET DATA FROM ATTRIBUTES COLLECTION
    //filter out not relavant seq here
    if( (currentSecondMilli >= animation.fromSecond)
     && 
     (currentSecondMilli <= animation.toSecond)){
    //----STEP 2 -- GET DATA FROM ATTRIBUTES COLLECTION
    //---get item by name since its one item --a string
    const attributeToAnimateValue = this.attributes.getItem(animation.attributeToAnimateName).value;

    const readOnlyElementData = this.attributes.getItemsByNames(animation.readOnlyElementAttrNames);
    //----STEP 3 -- Animate the data
    const retValue = animation.animate(attributeToAnimateValue,currentSecondMilli,readOnlyElementData);//wofffffff
    //----STEP 4 -- SAVE ATTRIBUTES
this.attributes.setAttr(animation.attributeToAnimateName,retValue);
   
}/////--filter no relevant animations
    //========================================== 
    });
return true;    
}
preDraw(){
   
}
public draw(metal){
 //console.log("Base Shape");
}//draw ends
postDraw(){
   
}

public setAttr(attrName:string,attrValue:string|number|boolean):string|number|boolean{
return Number(this.attributes.setAttr(attrName, attrValue));
}

public getAttr(attrName:string){
    return (this.attributes.getAttr(attrName));
    }
  
////////////////////////////////---Animations---/////
moveHorizontal(fromSecond=1,toSecond=5,from=1,to=100):Counter{
const l = this.generators.addCounter("x",fromSecond,toSecond,from,to);
this.animations.push(l);
return l;  
}
// //---------------------------------
moveVerticle(fromSecond=1,toSecond=5,fromY=1,toY=100):Counter{
  const l = this.generators.addCounter("y",fromSecond,toSecond,from,to);
  this.animations.push(l);
  return l;      
}
// //---------------------------------
moveDiagonal(fromSecond=1,toSecond=5,fromX=1,toX=100,fromY=1,toY=100):boolean{
  const lX = this.generators.addCounter("x",fromSecond,toSecond,fromX,toX);
  this.animations.push(lX);   

  const ly = this.generators.addCounter("y",fromSecond,toSecond,fromY,toY);
  this.animations.push(ly);   
  return true;    
}
protected simpleCounter(attribToAnimate="x",fromSecond:number=1,toSecond:number=10,from:number=100,to:number=200):Counter{
  const w = this.generators.addCounter(
    attribToAnimate,fromSecond,toSecond,from, to,[]);
this.animations.push(w);
return w;    
} 
widen(fromSecond:number=1,toSecond:number=10,fromWidth:number=100,toWidth:number=200):Counter{
  return this.simpleCounter("width",fromSecond,toSecond
  ,fromWidth,toWidth);    
}
heighten(fromSecond:number=1,toSecond:number=10,fromWidth:number=100,toWidth:number=200):Counter{
  return this.simpleCounter("height",fromSecond,toSecond
  ,fromWidth,toWidth);    
}

scale(fromSecond:number,toSecond:number,fromWidth:number,toWidth:number,fromHeight:number,toHeight:number):boolean{
  this.simpleCounter("width",fromSecond,toSecond
  ,fromWidth,toWidth); 
//----------------------------
  this.simpleCounter("height",fromSecond,toSecond
  ,fromHeight,toHeight);   
  return true;    
}
rotate(fromSecond:number=1, toSecond:number=5,from:number=1,to:number=100):Counter{
  const w = this.simpleCounter("currentRotateAngle",fromSecond,toSecond
  ,from,to);    
  return w;
}
  
//////////////////////////classsss-----------------
}

//==========================================================
//==========================================================
//==========================================================
