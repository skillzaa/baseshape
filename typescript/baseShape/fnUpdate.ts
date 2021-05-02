module.exports = function update(currentSecondMilli:number,this){
//==================LLLLLOOOOPPPPP======================== 
this.animations.data.forEach(animation => {
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