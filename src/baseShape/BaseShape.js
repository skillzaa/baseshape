const ArrayOfObjects = require('@bilzaa.com/arrayofobjects');
const Generators = require('aninumber');
const getBaseAttributes = require('./baseAttributeCollection');
module.exports = class BaseShape {
    constructor(name) {
        this.attributes = getBaseAttributes(name);
        this.animations = new ArrayOfObjects();
        this.generators = new Generators();
    }
    preUpdate() { }
    postUpdate() { }
    update(currentSecondMilli) {
        //==================LLLLLOOOOPPPPP======================== 
        this.animations.data.forEach(animation => {
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
        const l = this.generators.getCounter("x", fromSecond, toSecond, from, to);
        this.animations.add(l);
        return l;
    }
    // //---------------------------------
    moveVerticle(fromSecond = 1, toSecond = 5, fromY = 1, toY = 100) {
        const l = this.generators.getCounter("y", fromSecond, toSecond, from, to);
        this.animations.add(l);
        return l;
    }
    // //---------------------------------
    moveDiagonal(fromSecond = 1, toSecond = 5, fromX = 1, toX = 100, fromY = 1, toY = 100) {
        const lX = this.generators.getCounter("x", fromSecond, toSecond, fromX, toX);
        this.animations.add(lX);
        const ly = this.generators.getCounter("y", fromSecond, toSecond, fromY, toY);
        this.animations.add(ly);
        return true;
    }
    widen(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        const w = this.generators.getCounter("width", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.add(w);
        return w;
    }
    heighten(fromSecond, toSecond, fromHeight, toHeight) {
        const h = this.generators.getCounter("height", fromSecond, toSecond, fromHeight, toHeight, []);
        this.animations.add(h);
        return h;
    }
    scale(fromSecond, toSecond, fromWidth, toWidth, fromHeight, toHeight) {
        const w = this.generators.getCounter("width", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.add(w);
        //----------------------------
        const h = this.generators.getCounter("height", fromSecond, toSecond, fromHeight, toHeight, []);
        this.animations.add(h);
        return true;
    }
    rotate(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const w = this.generators.getCounter("currentRotateAngle", fromSecond, toSecond, from, to, []);
        this.animations.add(w);
        return w;
    }
};
//==========================================================
//==========================================================
//==========================================================
