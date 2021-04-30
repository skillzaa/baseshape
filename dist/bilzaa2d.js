class PlayHead {
    constructor(t = 100, i = !0) { this.duration = 1e3 * t, this.oldTime = 0, this.paused = i, this.startTime = 0; }
    runningTime() { if (!1 === this.paused) {
        const t = Date.now() - this.startTime;
        return Number(t);
    } return Number(this.oldTime); }
    play() { !0 === this.paused && (this.startTime = Date.now() - this.oldTime, this.oldTime = 0, this.paused = !1); }
    pause() { !1 === this.paused && (this.oldTime = Date.now() - this.startTime, this.startTime = 0, this.paused = !0); }
    stop() { this.oldTime = 0, this.startTime = 0, this.paused = !0; }
    resume() { this.play(); }
    forward(t = 5e3) { let i = !1; !0 === this.paused && (i = !0), this.pause(), this.oldTime + t < this.duration && (this.oldTime = this.oldTime + t), 0 == i && this.play(); }
    rewind(t = 5e3) { let i = !1; !0 === this.paused && (i = !0), this.pause(), this.oldTime - t > 0 && (this.oldTime = this.oldTime - t), 0 == i && this.play(); }
}

/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */
class ArrayOfObjects {
    constructor() {
        this.data = [];
    }
    add(incomming = {}) {
        this.data.push(incomming);
        return incomming;
    }
    // add(name:string){
    // if (this.isUnique(name) === true){
    //     const a = {};
    //     a.name = name; 
    //     this.data.push(a);
    //     return a;    
    // } else {
    //     return {success: false, message : "Please Provide a unique and valid string name for the object", errorMessage: "nonUniqueName" }
    // }   
    // } 
    isUnique(name) {
        if (typeof name == "undefined") {
            return false;
        }
        let uniqueOrNot = true;
        for (let idx = 0; idx < this.data.length; idx++) {
            const element = this.data[idx];
            if (element.name === name) {
                uniqueOrNot = false;
            }
        }
        return uniqueOrNot;
    }
    get length() {
        return this.data.length;
    }
    getItem(name) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx];
            }
        }
        return false;
    } //.....................
    getProperty(name, value = "value") {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx][value];
            }
        }
        return false;
    }
    getAttr(name, value = "value") {
        return Number(this.getProperty(name));
    }
    // setAttr(name:string,value:string|number|boolean,propertyName = "value"){
    // return this.setProperty(name,value, propertyName);
    // }
    setProperty(name, value, subAttribItem = "value") {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                this.data[idx][subAttribItem] = value;
                return this.data[idx][subAttribItem];
            }
        }
        return true;
    } //......
    setAttr(name, value, subAttribItem = "value") {
        return Number(this.setProperty(name, value));
    } //......
    getAllByNames(argumentsRequired = []) {
        /**incooming is normal [] where as attributes is an obj wrapped around an aOO */
        const ret = [];
        this.data.forEach(bd => {
            argumentsRequired.forEach(ag => {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    }
    insertPropertiesFromArray(retData) {
        this.data.forEach(bd => {
            retData.forEach(ag => {
                if (ag.name == bd.name) {
                    bd.value = ag.value;
                }
            });
        });
        return true;
    } //..
    setAllProperties(propertyName, newValue) {
    }
    getItemsByNames(argumentsRequired = []) {
        /**incooming is normal []  */
        const ret = [];
        this.data.forEach(bd => {
            argumentsRequired.forEach(ag => {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    }
}

function getBaseAttributes() {
    const attributes = new ArrayOfObjects();
    //--The name--
    attributes.add({ name: "name", value: 0 });
    //--x,y,width,height--
    attributes.add({ name: "x", value: 100 });
    attributes.add({ name: "y", value: 100 });
    attributes.add({ name: "width", value: 100 });
    attributes.add({ name: "height", value: 100 });
    // attributes.add({ name: "offsetWidth", value: 0 });
    // attributes.add({ name: "offsetHeight", value: 0 });
    //--rotation--
    attributes.add({ name: "rotateClockwise", value: true });
    //---the angle at which);the obj is currently rotated--this is also rpm / rps
    attributes.add({ name: "currentRotateAngle", value: 0 });
    //--colors--
    attributes.add({ name: "color", value: "green" });
    attributes.add({ name: "opacity", value: 1 }); //----------???? transparency
    /**this just became border */
    attributes.add({ name: "lineWidth", value: 5 }); //----------???? transparency
    /**there is no strokeStyle since the color is fillStyle as well as strokeStyle since we have border feature coming later so we do not need this confusion now */
    //attributes.add({ name: "strokeStyle", value: "#F0000" });
    //--shadows--
    attributes.add({ name: "shadowColor", value: "grey" });
    attributes.add({ name: "shadowBlur", value: 0 });
    attributes.add({ name: "shadowOffsetX", value: 0 });
    attributes.add({ name: "shadowOffsetY", value: 0 });
    // if filled draw filled if not draw border only
    attributes.add({ name: "filled", value: true });
    attributes.add({ name: "lineDashSize", value: 1 });
    attributes.add({ name: "lineDashGap", value: 0 });
    attributes.add({ name: "drawBoundingRectangle", value: true });
    attributes.add({ name: "boundingRectangleColor", value: "red" });
    attributes.add({ name: "boundingRectanglePadding", value: 20 });
    //--18 items
    return attributes;
}
//====================================================
//====================================================
//====================================================
//====================================================
// export default getBaseAttributes;

class Validator {
    constructor() {
        this.throwExceptionFlag = false;
    } //const
    isNumber(no, shout = false, message = "This is not a Number") {
        //if (data === parseInt(data, 10))
        if ((typeof no) != "number") {
            if (shout === true) {
                throw new Error(message);
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    isInteger(no, shout = false, message = "This is not an Integer") {
        if (Number.isInteger(no) === false) {
            if (shout === true) {
                throw new Error(message);
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    isSmaller(smaller, bigger, shout = false, message = "First Number is not smaller than the second number") {
        if (bigger < smaller) {
            if (shout === true) {
                throw new Error(message);
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    } //fn
} //class

const v = new Validator();
class Animation {
    constructor(aniData, argsForAlgo = {}) {
        v.isSmaller(aniData.fromSecond, aniData.toSecond, true, "From Second can not be Bigger than To second");
        this.attributeToAnimateName = aniData.attributeToAnimateName;
        this.fromSecond = Number((aniData.fromSecond * 1000).toFixed(0));
        this.toSecond = Number((aniData.toSecond * 1000).toFixed(0));
        this.readOnlyElementAttrNames = aniData.readOnlyElementAttrNames;
        //--------------------------------------------------------------------
        this.argsForAlgo = argsForAlgo;
        //--------------------------------------------------------------------
        this.fps = 60; // this has to be settled
        this.state = {}; ///every new data goes here
    }
    animate(attributeToAnimateData, currentSecondMilli, readOnlyElementData = {}) {
        return true;
    }
}
//module.exports = Animation;

class Counter extends Animation {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
        this.milliPerPixConst = this.milliPerPix();
    }
    animate(attributeToAnimateData, currentSecondMilli, readOnlyElementData = {}) {
        //--------------------------------
        /**chq if time is valid */
        if (this.isTimeValid(currentSecondMilli) === false) {
            throw new Error("The current Time is before than the starting time OR after the finish point of the animation");
        }
        //--------------------------------
        const timeDifferenceInMilli = this.currentTimeDifferenceInMilli(currentSecondMilli);
        (timeDifferenceInMilli / this.milliPerPixConst);
        let ans = "";
        if (this.argsForAlgo.from < this.argsForAlgo.to) {
            ans = (timeDifferenceInMilli / this.milliPerPixConst) + this.argsForAlgo.from;
        }
        else {
            ans = (timeDifferenceInMilli / this.milliPerPixConst) - this.argsForAlgo.from;
        }
        return Math.abs((Number(ans.toFixed(0))));
        //if (ans < 1){return 1;}else {return ans;}
        //--------------------------------
    }
    milliPerPix() {
        const timeDiff = (this.toSecond - this.fromSecond);
        const totalValueDiff = Math.abs((this.argsForAlgo.to - this.argsForAlgo.from));
        //consider using Math.ceil here
        const ans = Number((timeDiff / totalValueDiff).toFixed(0));
        if (ans < 1) {
            return 1;
        }
        else {
            return ans;
        }
    }
    currentTimeDifferenceInMilli(currentSecondMilli) {
        return Math.abs(Number(currentSecondMilli - this.fromSecond));
    }
    //-------------------------------------------------------------    
    isTimeValid(currentSecondMilli) {
        if ((currentSecondMilli > this.toSecond)
            ||
                (currentSecondMilli < this.fromSecond)) {
            return false;
        }
        else {
            return true;
        }
    }
}
//module.exports = Linear;

class Vibrate extends Animation {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
        this.state.previous = 0;
        //this.state.previous = 0;
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        /////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////
        if (this.state.previous == 0) {
            this.state.previous = Date.now();
        }
        this.argsForAlgo.timeGap;
        this.argsForAlgo.deviation;
        if (this.isWaitOver() == true) {
            this.state.previous = Date.now();
            return this.manipulate(attributeToAnimateData);
        }
        else {
            return attributeToAnimateData;
        }
        /////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////
    }
    //-------------------------------------------------------------    
    isWaitOver() {
        const lapsedTime = Math.abs(Date.now() - this.state.previous);
        if (lapsedTime > this.argsForAlgo.timeGap) {
            return true;
        }
        else {
            return false;
        }
    }
    //-------------------------------------------------------------    
    manipulate(incomming) {
        const min = incomming - this.argsForAlgo.deviation;
        const max = incomming + this.argsForAlgo.deviation;
        return Math.abs(Math.random() * (max - min + 1) + min);
    }
}

class RandomColors extends Animation {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
        this.state.previous = 0;
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        if (this.state.previous == 0) {
            this.state.previous = Date.now();
        }
        if (this.isWaitOver() == true) {
            this.state.previous = Date.now();
            return this.returnColor();
        }
        else {
            return attributeToAnimateData;
        }
    }
    //-------------------------------------------------------------    
    isWaitOver() {
        const lapsedTime = Math.abs(Date.now() - this.state.previous);
        if (lapsedTime > this.argsForAlgo.timeGap) {
            return true;
        }
        else {
            return false;
        }
    }
    //-------------------------------------------------------------   
    returnColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

class Generators {
    constructor() {
    }
    getCounter(attributeToAnimateName, fromSecond, toSecond, from, to, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { from: from, to: to };
        const a = new Counter(aniData, argsForAlgo);
        // this.data.get(a);
        return a;
    }
    getVibrate(attributeToAnimateName, fromSecond, toSecond, timeGap, deviation, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { timeGap: timeGap, deviation: deviation };
        const a = new Vibrate(aniData, argsForAlgo);
        return a;
    }
    getRandomColors(attributeToAnimateName, fromSecond, toSecond, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const a = new RandomColors(aniData, {});
        return a;
    }
}

// import Vibrate from "../../animation/Vibrate.js";
// import RandomColors from "../../animation/RandomColors.js";
class BaseShape {
    constructor() {
        this.attributes = getBaseAttributes();
        this.animations = new ArrayOfObjects();
        this.generators = new Generators();
    }
    preUpdate() { }
    postUpdate() { }
    update(currentSecondMilli) {
        //const currentSecond = Number((currentSecondMilli/1000).toFixed(1));  
        // return true;
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
                //console.log("newValue",retValue,"time",currentSecondMilli);
                this.attributes.setProperty(animation.attributeToAnimateName, retValue); //retData is aoo
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
        return Number(this.attributes.setProperty(attrName, attrValue));
    }
    getAttr(attrName) {
        return Number(this.attributes.getProperty(attrName));
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
}

class Shape extends BaseShape {
    constructor(shapeData = {}) {
        super();
        this.shapeData = this.offsetShapeData(shapeData);
    }
    draw(metal) {
        metal.saveCtx();
        metal.getCtxValues(this.attributes);
        //if (this.attributes.getProperty("currentRotateAngle") > 0) {
        metal.translateCanvas(this.attributes);
        metal.rotateCanvas(this.attributes);
        metal.unTranslateCanvas(this.attributes);
        //}  
        this.drawShape(metal);
        if (this.attributes.getAttr("drawBoundingRectangle") == true) {
            this.drawBoundingRectangle(metal);
        } //draw ends
    } //draw fn ends
    drawShape(metal) {
        metal.ctx.beginPath();
        metal.ctx.moveTo(this.getAttr("x"), this.getAttr("y")); //-----
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            const item = this.shapeData[idx];
            const drawX = (item.x) + this.getAttr("x");
            const drawY = (item.y) + this.getAttr("y");
            if (item.cmd === "moveTo") {
                metal.ctx.moveTo(drawX, drawY);
            }
            else if (item.cmd === "lineTo") {
                metal.ctx.lineTo(drawX + this.getAttr("width"), drawY);
            }
        }
        metal.ctx.strokeStyle = this.getAttr("color");
        metal.ctx.stroke();
    }
    setAttr(attrName, attrValue) {
        return Number(this.attributes.setProperty(attrName, attrValue));
    }
    getAttr(attrName) {
        return (this.attributes.getProperty(attrName));
    }
    getShapeData() {
        const shapeData = {};
        //--x = 100 , y= 100
        shapeData.data = [
            { sortOrder: 1, x: this.offsetX(200), y: this.offsetY(100), cmd: "lineTo" },
            { sortOrder: 2, x: this.offsetX(200), y: this.offsetY(200), cmd: "lineTo" },
            { sortOrder: 3, x: this.offsetX(100), y: this.offsetY(200), cmd: "lineTo" },
            { sortOrder: 3, x: this.offsetX(100), y: this.offsetY(100), cmd: "lineTo" }
        ];
        return shapeData;
    }
    offsetX(no) {
        return no - this.getAttr("x");
    }
    offsetY(no) {
        return no - this.getAttr("y");
    }
    offsetShapeData(shapeData) {
        for (let idx = 0; idx < shapeData.length; idx++) {
            const item = shapeData[idx];
            const x = this.offsetX(item.x);
            if (x > 0) {
                item.x = x;
            }
            else {
                item.x = 0;
            }
            const y = this.offsetY(item.y);
            if (y > 0) {
                item.y = y;
            }
            else {
                item.y = 0;
            }
        }
        return shapeData;
    }
    getLeftPoint() {
        let finalLeftPoint = 5000;
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            if (this.shapeData[idx].x < finalLeftPoint) {
                finalLeftPoint = this.shapeData[idx].x;
            }
        }
        //  console.log("finalLeftPoint",) 
        return finalLeftPoint;
    }
    getRightPoint() {
        let finalRightPoint = -5000;
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            if (this.shapeData[idx].x > finalRightPoint) {
                finalRightPoint = this.shapeData[idx].x;
            }
        }
        //  console.log("finalLeftPoint",) 
        return finalRightPoint;
    }
    getTopPoint() {
        let finalTopPoint = 5000;
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            if (this.shapeData[idx].y < finalTopPoint) {
                finalTopPoint = this.shapeData[idx].y;
            }
        }
        return finalTopPoint;
    }
    getBottomPoint() {
        let finalBottomPoint = -5000;
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            if (this.shapeData[idx].y > finalBottomPoint) {
                finalBottomPoint = this.shapeData[idx].y;
            }
        }
        //  console.log("finalLeftPoint",) 
        return finalBottomPoint;
    }
    getMiddlePoint() {
        const p = {};
        p.x = (this.getLeftPoint() + this.getAttr("x")) + ((this.getRightPoint() - this.getLeftPoint()) / 2);
        p.y = (this.getTopPoint() + this.getAttr("y")) + ((this.getBottomPoint() - this.getTopPoint()) / 2);
        return p;
    }
    drawBoundingRectangle(metal) {
        metal.ctx.beginPath();
        metal.ctx.rect(
        //x
        ((this.getLeftPoint() + this.getAttr("x")) - this.getAttr("boundingRectanglePadding")), 
        //y
        ((this.getTopPoint() + this.getAttr("y")) - this.getAttr("boundingRectanglePadding")), 
        //width
        ((this.getRightPoint() - this.getLeftPoint()) + this.getAttr("width")) + (this.getAttr("boundingRectanglePadding") * 2), 
        //height
        ((this.getBottomPoint() - this.getTopPoint()) + this.getAttr("height")) + (this.getAttr("boundingRectanglePadding") * 2));
        metal.ctx.strokeStyle = this.getAttr("boundingRectangleColor");
        metal.ctx.stroke();
    }
    markPoint(metal, point) {
        metal.ctx.beginPath();
        metal.ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        metal.ctx.strokeStyle = "yellow";
        metal.ctx.fillStyle = "yellow";
        metal.ctx.font = "18px serif";
        metal.ctx.stroke();
        metal.ctx.fillText(`(${point.x},${point.y})`, point.x - 10, point.y - 10);
    }
}

class Arc extends BaseShape {
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
}

class Text extends BaseShape {
    // #hidden:string;
    constructor() {
        super();
        // this.#hidden = "its hidden";
        this.attributes.add({ name: "title", value: "Text" });
        this.attributes.add({ name: "color", value: "red" });
        this.attributes.add({ name: "fontSize", value: 22 });
        this.attributes.add({ name: "fontFamily", value: "Arial" });
    }
    draw(metal) {
        metal.saveCtx();
        //set its height and width
        const w = metal.ctx.measureText(this.attributes.getProperty("title")).width;
        const h = metal.ctx.measureText(this.attributes.getProperty("M")).width;
        this.attributes.setProperty("width", w + 100);
        this.attributes.setProperty("height", h - 100);
        metal.getCtxValues(this.attributes);
        //if (this.attributes.getProperty("currentRotateAngle") > 0) {
        metal.translateCanvas(this.attributes, w, h);
        metal.rotateCanvas(this.attributes);
        metal.unTranslateCanvas(this.attributes);
        //}   
        //--------------draw rect-- if visible
        // if ((this.attributes.getProperty("transparent") === false)  ) {
        metal.drawText(this.attributes);
        // }
        //------------------------------
        metal.restoreCtx();
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvv  
        //VVVVVV
    }
    widen(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        const w = this.generators.getCounter("fontSize", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.add(w);
        return w;
    }
    heighten(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        const w = this.generators.getCounter("fontSize", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.add(w);
        return w;
    }
}

class Shapes {
    constructor() {
        this.data = [];
        this.shapesData = {};
    }
    addShape(shapeDataName = "quad") {
        const shape = new Shape(this.shapesData[shapeDataName]);
        this.data.push(shape);
        return shape;
    }
    addArc() {
        const arc = new Arc();
        this.data.push(arc);
        return arc;
    }
    addText() {
        const text = new Text();
        this.data.push(text);
        return text;
    }
}

class Canvas extends BaseShape {
    constructor() {
        super();
        this.attributes.add({ name: "clearCanvasFlag", value: 1 });
    }
    draw(metal) {
        if (this.attributes.getProperty("clearCanvasFlag") === 1) {
            metal.clearCanvas(this.attributes.getProperty("color"));
        }
    }
}

class Metal {
    constructor() {
        this.load();
    }
    //....................
    load(canvasName = "bilzaaCanvas") {
        try {
            this.canvas = document.getElementById(canvasName);
            this.ctx = this.canvas.getContext('2d');
            this.ctx.canvas.width = window.innerWidth;
            this.ctx.canvas.height = window.innerHeight;
        }
        catch (err) {
            return false;
        }
    }
    //....................
    clear() {
        this.ctx.fillStyle = "#f5ecc3";
        //clear the canvas
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } //fn
    clearCanvas(fillStyle = "#ffffff") {
        this.saveCtx();
        this.ctx.fillStyle = fillStyle;
        //clear the canvas
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.restoreCtx();
    } //fn  
    drawRectangleBorder(attributes) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.globalAlpha = attributes.getProperty("opacity");
        this.ctx.lineWidth = attributes.getProperty("borderWidth");
        this.ctx.lineJoin = "round"; //attributes.getProperty("borderWidth");
        this.ctx.strokeStyle = attributes.getProperty("borderColor");
        if (attributes.getProperty("dashedBorder") === true) {
            this.ctx.setLineDash([
                attributes.getProperty("dashSize"),
                attributes.getProperty("gapBetweenDashes")
            ]);
        }
        this.ctx.rect((attributes.getProperty("x") - (attributes.getProperty("borderWidth") / 2)), attributes.getProperty("y") - (attributes.getProperty("borderWidth") / 2), attributes.getProperty("width") + (attributes.getProperty("borderWidth")), attributes.getProperty("height") + (attributes.getProperty("borderWidth")));
        this.ctx.stroke();
        this.ctx.restore();
    }
    saveCtx() {
        this.ctx.save();
    }
    restoreCtx() {
        this.ctx.restore();
    }
    drawRectangle(attributes) {
        this.ctx.save();
        this.ctx.globalAlpha = attributes.getProperty("opacity");
        if (attributes.getProperty("filled") == true) {
            this.ctx.fillStyle = attributes.getProperty("color");
            this.ctx.fillRect(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("width"), attributes.getProperty("height"));
        }
        else {
            this.ctx.strokeStyle = attributes.getProperty("color");
            this.ctx.strokeRect(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("width"), attributes.getProperty("height"));
        }
        this.ctx.restore();
    }
    drawCircle(attributes) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("radius"), attributes.getProperty("openingAngle"), attributes.getProperty("closingAngle"));
        /**the color of the circle is the color of fill as well as stroke-- later we will have border color but for now dont confuse the issue */
        this.ctx.lineWidth = attributes.getProperty("lineWidth");
        if (attributes.getProperty("filled") == true) {
            this.ctx.fillStyle = attributes.getProperty("color");
            this.ctx.fill();
        }
        else {
            this.ctx.strokeStyle = attributes.getProperty("color");
            this.ctx.stroke();
        }
        this.ctx.restore();
    } //draw circle
    drawTriangle(attributes) {
        this.ctx.save();
        // this.ctx.fillStyle = attributes.getProperty("color");
        this.ctx.beginPath();
        this.ctx.lineWidth = attributes.getProperty("lineWidth");
        //move to left-bottom
        this.ctx.moveTo(attributes.getProperty("x"), attributes.getProperty("y") + attributes.getProperty("height"));
        //line to right bottom cornot 
        this.ctx.lineTo(attributes.getProperty("x") + attributes.getProperty("width"), attributes.getProperty("y") + attributes.getProperty("height"));
        //top cornor
        this.ctx.lineTo(attributes.getProperty("x") + attributes.getProperty("width") / 2, attributes.getProperty("y"));
        this.ctx.lineTo(attributes.getProperty("x"), attributes.getProperty("y") + attributes.getProperty("height"));
        //  this.ctx.fill();
        if (attributes.getProperty("filled") == true) {
            this.ctx.fillStyle = attributes.getProperty("color");
            this.ctx.fill();
        }
        else {
            this.ctx.strokeStyle = attributes.getProperty("color");
            this.ctx.stroke();
        }
        this.ctx.restore();
    }
    drawText(attributes) {
        this.ctx.save();
        this.ctx.fillStyle = attributes.getProperty("color");
        this.ctx.font = `${attributes.getProperty("fontSize")}px ${attributes.getProperty("fontFamily")}`;
        this.ctx.fillText(attributes.getProperty("title"), attributes.getProperty("x"), attributes.getProperty("y"));
        this.ctx.restore();
    }
    getCtxValues(attributes) {
        //fillstyle is for internal use dont show it to users
        this.ctx.fillStyle = attributes.getItem("color").value;
        this.ctx.strokeStyle = attributes.getItem("color").value;
        this.ctx.shadowColor = attributes.getItem("shadowColor").value;
        this.ctx.shadowBlur = attributes.getItem("shadowBlur").value;
        this.ctx.shadowOffsetX = attributes.getItem("shadowOffsetX").value;
        this.ctx.shadowOffsetY = attributes.getItem("shadowOffsetY").value;
        this.ctx.lineWidth = attributes.getItem("lineWidth").value;
        this.ctx.setLineDash([attributes.getProperty("lineDashSize"), attributes.getProperty("lineDashGap")]);
    } //getAttributes
    translateCanvas(attributes) {
        this.ctx.translate(attributes.getItem("x").value + (attributes.getItem("width").value / 2), attributes.getItem("y").value + (attributes.getItem("height").value / 2));
    }
    unTranslateCanvas(attributes) {
        this.ctx.translate(-(attributes.getItem("x").value + (attributes.getItem("width").value / 2)), -(attributes.getItem("y").value + (attributes.getItem("height").value / 2)));
    }
    rotateCanvas(attributes) {
        this.ctx.rotate((attributes.getItem("currentRotateAngle").value) * Math.PI / 180);
    }
    drawEllipse() {
        this.ctx.ellipse(100, 100, 50, 75, 45 * Math.PI / 180, 0, 2 * Math.PI);
    }
    drawLine(attributes) {
        this.ctx.save();
        this.getCtxValues(attributes);
        this.ctx.setLineDash([attributes.getProperty("lineDashSize"), attributes.getProperty("lineDashGap")]); //this is not in getCtxValues since its not that
        this.ctx.beginPath();
        this.ctx.moveTo(attributes.getProperty("x"), attributes.getProperty("y"));
        this.ctx.lineTo(attributes.getProperty("xEnd"), attributes.getProperty("yEnd"));
        this.ctx.stroke();
        this.ctx.restore();
    }
    drawArc(attributes) {
        this.ctx.save();
        this.ctx.beginPath();
        this.getCtxValues(attributes);
        this.ctx.arc(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("width") / 2, attributes.getProperty("openingAngle") * Math.PI / 180, attributes.getProperty("closingAngle") * Math.PI / 180);
        /**the color of the circle is the color of fill as well as stroke-- later we will have border color but for now dont confuse the issue */
        this.ctx.lineWidth = attributes.getProperty("lineWidth");
        if (attributes.getProperty("filled") == true) {
            this.ctx.fillStyle = attributes.getProperty("color");
            this.ctx.fill();
        }
        else {
            this.ctx.strokeStyle = attributes.getProperty("color");
            this.ctx.stroke();
        }
        this.ctx.restore();
    } //fn
    drawHeart(attributes) {
        this.ctx.beginPath();
        const x = attributes.getProperty("x");
        const y = attributes.getProperty("y");
        this.ctx.moveTo(x, y);
        this.ctx.bezierCurveTo(x + 0, y + 3, x + 5, y + 15, x + 25, y + 15);
        this.ctx.bezierCurveTo(x - 55, y + 15, 20, 62.5, 20, 62.5);
        this.ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        this.ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        this.ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        this.ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        this.ctx.fill();
    }
    //////////////////////////
    drawQuad(attributes) {
        // this.ctx.save();
        // this.ctx.globalAlpha = attributes.getProperty("opacity"); 
        // if(attributes.getProperty("filled") == true){
        //   this.ctx.fillStyle = attributes.getProperty("color");
        //   this.ctx.fillRect(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("width"), attributes.getProperty("height"));  
        // }else{
        //   this.ctx.strokeStyle = attributes.getProperty("color");
        //   this.ctx.strokeRect(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("width"), attributes.getProperty("height"));  
        this.ctx.beginPath();
        this.ctx.beginPath();
        this.ctx.moveTo(attributes.getAttr("x"), attributes.getAttr("y"));
        this.ctx.lineTo(attributes.getAttr("x") + attributes.getAttr("rtx"), attributes.getAttr("y") + attributes.getAttr("rty")); //top line
        this.ctx.lineTo(attributes.getAttr("x") + attributes.getAttr("rbx"), attributes.getAttr("y") + attributes.getAttr("rby")); //right line
        this.ctx.lineTo(attributes.getAttr("x") + attributes.getAttr("lbx"), attributes.getAttr("y") + attributes.getAttr("lby")); //bottom line
        this.ctx.lineTo(attributes.getAttr("x"), attributes.getAttr("y")); //left line
        this.ctx.fill();
    }
}

//import PlayHead from "./single/PlayHead.js";
new Canvas();
//import Premades from './premade/Premades.js';
/**This is from ubuntu......!!! */
class Bilzaa2d {
    constructor() {
        //    this.premades = new Premades();
        this.playHead = new PlayHead();
        this.metal = new Metal();
        this.globals = {};
        this.shapes = new Shapes();
    }
    play() {
        // try{  
        this.playHead.play();
        this.gameLoop();
        //   } catch (err) {
        //       return "some error occured";
        //   } 
    } //play
    gameLoop() {
        //try{  
        this.metal.clearCanvas("#082775");
        //----------the main loop
        this.shapes.data.forEach(item => {
            const curSec = this.playHead.runningTime();
            //console.log(curSec);
            item.preUpdate();
            item.update(curSec);
            item.postUpdate();
            item.preDraw();
            item.draw(this.metal);
            item.postDraw();
        });
        window.requestAnimationFrame(this.gameLoop.bind(this));
        //}catch (err){
        //     window.requestAnimationFrame(this.gameLoop.bind(this));  
        //     return true;
        // }
    } //play
    loadAnimation(animationFunction, args = {}) {
        this.shapes = animationFunction(this.shapes, this.globals, args);
    }
    drawShapes() {
        //----------the main loop
        this.shapes.data.forEach(item => {
            item.draw();
        });
    } //play
} //class

export default Bilzaa2d;
