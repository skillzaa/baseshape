import Animations from "../../../animation/Generators.js";
//import ITextAnimations from "./ITextAnimations.js";


export default class TextAnimations extends Animations {

constructor(){
    super();
}
scale = (fromSecond:number,toSecond:number,fromWidth:number,toWidth:number,fromHeight:number,toHeight:number)=>{
    const w = this.getLinear(
        {attributeToAnimateName: "width",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:fromWidth, to:toWidth});
    this.data.push(w);    
//----------------------------
    const h = this.getLinear(
        {attributeToAnimateName: "height",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:fromHeight, to:toHeight});
    this.data.push(h);    
    return true;    
}
rotate(fromSecond:number=1, toSecond:number=5,from:number=1,to:number=100):Linear{
    
    const w = this.getLinear(
        {attributeToAnimateName: "currentRotateAngle",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:from, to:to});
    this.data.push(w);    
    return w;
}
bla(tf=true){
    return tf;
}
////888888888888888888888888888888888888888888888888    
////888888888888888888888888888888888888888888888888    
////888888888888888888888888888888888888888888888888    
}