const ArrayOfObjects = require('@bilzaa.com/arrayofobjects');
const Generators = require('aninumber');
const getBaseAttributes = require('./baseAttributeCollection');
module.exports = class BaseShape {
    constructor(name) {
        this.attributes = getBaseAttributes(name);
        this.animations = [];
        this.generators = new Generators();
    }
    preUpdate() { }
    postUpdate() { }
    update(currentSecondMilli) {
        //==================LLLLLOOOOPPPPP======================== 
        this.animations.forEach(animation => {
            //----STEP 1 -- GET DATA FROM ATTRIBUTES COLLECTION
            //filter out not relavant seq here
            if ((currentSecondMilli >= animation.fromSecond)
                &&
                    (currentSecondMilli <= animation.toSecond)) {
                //----STEP 2 -- GET DATA FROM ATTRIBUTES COLLECTION
                //---get item by name since its one item --a string
                const attributeToAnimateValue = this.attributes.getItem(animation.attributeToAnimateName).value;
                const readOnlyElementData = this.attributes.getItemsByNames(animation.readOnlyElementAttrNames);
                //----STEP 3 -- Animate the data
                const retValue = animation.animate(attributeToAnimateValue, currentSecondMilli, readOnlyElementData); //wofffffff
                //----STEP 4 -- SAVE ATTRIBUTES
                this.attributes.setAttr(animation.attributeToAnimateName, retValue);
            } /////--filter no relevant animations
            //========================================== 
        });
        return true;
    }
    preDraw() {
    }
    draw(metal) {
        //console.log("Base Shape");
    } //draw ends
    postDraw() {
    }
    setAttr(attrName, attrValue) {
        return Number(this.attributes.setAttr(attrName, attrValue));
    }
    getAttr(attrName) {
        return (this.attributes.getAttr(attrName));
    }
    ////////////////////////////////---Animations---/////
    moveHorizontal(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const l = this.generators.addCounter("x", fromSecond, toSecond, from, to);
        this.animations.push(l);
        return l;
    }
    // //---------------------------------
    moveVerticle(fromSecond = 1, toSecond = 5, fromY = 1, toY = 100) {
        const l = this.generators.addCounter("y", fromSecond, toSecond, from, to);
        this.animations.push(l);
        return l;
    }
    // //---------------------------------
    moveDiagonal(fromSecond = 1, toSecond = 5, fromX = 1, toX = 100, fromY = 1, toY = 100) {
        const lX = this.generators.addCounter("x", fromSecond, toSecond, fromX, toX);
        this.animations.push(lX);
        const ly = this.generators.addCounter("y", fromSecond, toSecond, fromY, toY);
        this.animations.push(ly);
        return true;
    }
    simpleCounter(attribToAnimate = "x", fromSecond = 1, toSecond = 10, from = 100, to = 200) {
        const w = this.generators.addCounter(attribToAnimate, fromSecond, toSecond, from, to, []);
        this.animations.push(w);
        return w;
    }
    widen(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        return this.simpleCounter("width", fromSecond, toSecond, fromWidth, toWidth);
    }
    heighten(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        return this.simpleCounter("height", fromSecond, toSecond, fromWidth, toWidth);
    }
    scale(fromSecond, toSecond, fromWidth, toWidth, fromHeight, toHeight) {
        this.simpleCounter("width", fromSecond, toSecond, fromWidth, toWidth);
        //----------------------------
        this.simpleCounter("height", fromSecond, toSecond, fromHeight, toHeight);
        return true;
    }
    rotate(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const w = this.simpleCounter("currentRotateAngle", fromSecond, toSecond, from, to);
        return w;
    }
};
//==========================================================
//==========================================================
//==========================================================
