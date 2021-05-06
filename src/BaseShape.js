import ArrayOfObjects from '../node_modules/@bilzaa.com/arrayofobjects/dist/ArrayOfObjects.js';
import Generators from '../node_modules/aninumber/dist/Generators.js';
export default class BaseShape {
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
        const l = this.generators.addCounter("y", fromSecond, toSecond, fromY, toY);
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
    widen(fromSecond = 1, toSecond = 10, from = 100, to = 200) {
        return this.simpleCounter("width", fromSecond, toSecond, from, to);
    }
    heighten(fromSecond = 1, toSecond = 10, from = 100, to = 200) {
        return this.simpleCounter("height", fromSecond, toSecond, from, to);
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
}
//==========================================================
//==========================================================
//==========================================================
function getBaseAttributes(name) {
    const attributes = new ArrayOfObjects();
    //--The name--
    attributes.add(name, name);
    //--x,y,width,height--
    attributes.add("x", 100);
    attributes.add("y", 100);
    attributes.add("width", 100);
    attributes.add("height", 100);
    //--rotation--
    attributes.add("rotateClockwise", true);
    //---the angle at which);the obj is currently rotated--this is also rpm / rps
    attributes.add("currentRotateAngle", 0);
    //--colors--
    attributes.add("color", "green");
    attributes.add("opacity", 1); //----------???? transparency
    /**this just became border */
    attributes.add("lineWidth", 5); //----------???? transparency
    /**there is no strokeStyle since the color is fillStyle as well as strokeStyle since we have border feature coming later so we do not need this confusion now */
    //attributes.add({ name: "strokeStyle", value: "#F0000" });
    //--shadows--
    attributes.add("shadowColor", "grey");
    attributes.add("shadowBlur", 0);
    attributes.add("shadowOffsetX", 0);
    attributes.add("shadowOffsetY", 0);
    // if filled draw filled if not draw border only
    attributes.add("filled", true);
    attributes.add("lineDashSize", 1);
    attributes.add("lineDashGap", 0);
    attributes.add("drawBoundingRectangle", true);
    attributes.add("boundingRectangleColor", "red");
    attributes.add("boundingRectanglePadding", 20);
    //--20 items
    return attributes;
}
//====================================================
// export default getBaseAttributes;
