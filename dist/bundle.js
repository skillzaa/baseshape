(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * 1--every objects must have a unique "name"  field
 * 2--every OBJECT MUST HAVE "value" field.
 */
// const IItem = require("IItem");
const Validator = require('validator99');
const val = new Validator();
// console.log(val);
// val.isNumber("string",true);
module.exports = class ArrayOfObjects {
    constructor() {
        this.data = [];
    }
    add(name, value = "") {
        val.isString(name, true, "The name is compulsary and should be of type string");
        if (this.isUnique(name) === true) {
            const a = {};
            a.name = name;
            a.value = value;
            this.data.push(a);
            return a;
        }
        else {
            throw new Error(`Please Provide a unique and valid string name for the object. The name ::${name} already exists`);
        }
    }
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
        val.isString(name, true, "The name should be of type string");
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx];
            }
        }
        return false;
    } //.....................
    getAttr(name, field = "value") {
        val.isString(name, true, "The name should be of type string");
        for (let idx = 0; idx < this.data.length; idx++) {
            const thisName = this.data[idx].name;
            if (thisName == name) {
                return this.data[idx][field];
            }
        }
        return false;
    }
    setAttr(name, value, field = "value") {
        val.isString(name, true, "The name should be of type string");
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name == name) {
                this.data[idx][field] = value;
                return this.data[idx][field];
            }
        }
        return true;
    } //......
    getObjectsByName(argumentsRequired = []) {
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
};

},{"validator99":8}],2:[function(require,module,exports){
'use strict';

/**
 * 1--every objects must have a unique "name"  field
 * 2--every OBJECT MUST HAVE "value" field.
 */
// const IItem = require("IItem");
class ArrayOfObjects {
    constructor() {
        this.data = [];
    }
add(name) {
    if (this.isUnique(name) === true) {
        const a = {};
        a.name = name;
        this.data.push(a);
        return a;
    }
    else {
        throw new Error("Please Provide a unique and valid string name for the object");
    }
}
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
getProperty(name, field = "value") {
    for (let idx = 0; idx < this.data.length; idx++) {
        if (this.data[idx].name === name) {
            return this.data[idx][field];
        }
    }
    return false;
}
getAttr(name, field = "value") {
    return this.getProperty(name);
}
setProperty(name, value, field = "value") {
    for (let idx = 0; idx < this.data.length; idx++) {
        if (this.data[idx].name === name) {
            this.data[idx][field] = value;
            return this.data[idx][field];
        }
    }
    return value;
} //
    setAttr(name, value, field = "value") {
        return this.setProperty(name, value);
    } //......
    
    getObjectsByName(argumentsRequired = []) {
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

module.exports = ArrayOfObjects;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseGenerator = require('./base/BaseGenerator');
module.exports = class Counter extends BaseGenerator {
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
        const preAns = (timeDifferenceInMilli / this.milliPerPixConst);
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
};
//module.exports = Linear;

},{"./base/BaseGenerator":7}],4:[function(require,module,exports){
"use strict";
const ArrayOfObjects = require('@bilzaa.com/arrayofobjects');
const Vibrate = require('./Vibrate');
const RandomColors = require('./RandomColors');
const Counter = require('./Counter');
module.exports = class Generators {
    constructor() {
        this.data = new ArrayOfObjects();
    }
    addCounter(attributeToAnimateName, fromSecond, toSecond, timeGap, deviation, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { timeGap: timeGap, deviation: deviation };
        const a = new Counter(aniData, argsForAlgo);
        this.data.add(a);
        return a;
    }
    addVibrate(attributeToAnimateName, fromSecond, toSecond, timeGap, deviation, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { timeGap: timeGap, deviation: deviation };
        const a = new Vibrate(aniData, argsForAlgo);
        this.data.add(a);
        return a;
    }
    addRandomColors(attributeToAnimateName, fromSecond, toSecond, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const a = new RandomColors(aniData, {});
        this.data.add(a);
        return a;
    }
};

},{"./Counter":3,"./RandomColors":5,"./Vibrate":6,"@bilzaa.com/arrayofobjects":2}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseGenerator = require('./base/BaseGenerator');
module.exports = class RandomColors extends BaseGenerator {
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
};

},{"./base/BaseGenerator":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseGenerator = require('./base/BaseGenerator');
module.exports = class Vibrate extends BaseGenerator {
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
        const timeGap = this.argsForAlgo.timeGap;
        const deviation = this.argsForAlgo.deviation;
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
};

},{"./base/BaseGenerator":7}],7:[function(require,module,exports){
"use strict";
class BaseGenerator {
    constructor(aniData, argsForAlgo = {}) {
        //this.aniData = aniData;
        this.attributeToAnimateName = aniData.attributeToAnimateName; //must 
        this.fromSecond = aniData.fromSecond; //must for every animation
        this.toSecond = aniData.toSecond; //must for every animation
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
module.exports = BaseGenerator;

},{}],8:[function(require,module,exports){
"use strict";
module.exports = class Validator {
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
    wholeNumber(no, shout = false) {
        this.isNumber(no, shout);
        return Number(no.toFixed(0));
    }
    isString(str, shout = false, message = "This value is not string") {
        if (typeof str === 'string') {
            return true;
        }
        else if (shout === true) {
            throw new Error(message);
        }
        else {
            return false;
        }
    }
    isBoolean(b, shout = false, message = "This value is not boolean") {
        if (typeof b === 'boolean') {
            return true;
        }
        else if (shout === true) {
            throw new Error(message);
        }
        else {
            return false;
        }
    }
    isSNB(snb, shout = false, message = "This value is not boolean or string or number") {
        const isString = this.isString(snb, false);
        const isBoolean = this.isBoolean(snb, false);
        const isNumber = this.isNumber(snb, false);
        if (isString == false && isBoolean == false && isNumber == false) {
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
}; //class

},{}],9:[function(require,module,exports){
"use strict";
// import Shape from '../shapes/shape/Shape.js';
const Arc = require('./primitives/arc/Arc');
const Text2 = require('./primitives/text/Text.js');
module.exports = class Shapes {
    constructor() {
        this.data = [];
        this.shapesData = {};
    }
    // addShape(shapeDataName="quad"):Shape {
    //        const shape = new Shape(this.shapesData[shapeDataName]);
    //         this.data.push(shape);
    //         return shape;
    //     }
    addArc(name) {
        const arc = new Arc(name);
        this.data.push(arc);
        return arc;
    }
    addText(name) {
        const text = new Text2(name);
        this.data.push(text);
        return text;
    }
};

},{"./primitives/arc/Arc":12,"./primitives/text/Text.js":13}],10:[function(require,module,exports){
const ArrayOfObjects = require('@bilzaa.com/arrayofobjects');
const Generators = require('aninumber');
// const getBaseAttributes = require('getBaseAttributes');
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
function getBaseAttributes(name) {
    const attributes = new ArrayOfObjects();
    //--The name--
    attributes.add(name, name);
    //--x,y,width,height--
    attributes.add("x", 100);
    attributes.add("y", 100);
    attributes.add("width", 100);
    attributes.add("height", 100);
    // attributes.add({ name: "offsetWidth", value: 0 });
    // attributes.add({ name: "offsetHeight", value: 0 });
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
    //--18 items
    return attributes;
}
//====================================================
// export default getBaseAttributes;

},{"@bilzaa.com/arrayofobjects":1,"aninumber":4}],11:[function(require,module,exports){
"use strict";
const Shapes = require('./Shapes');
// import {Shapes} from './dist/bundle.js';
const log = console.log;
const shapes = new Shapes();
const newArc = shapes.addArc("newArc");
shapes.addArc("arc2");
shapes.addArc("arc3");
shapes.addText("text1");
log(shapes);

},{"./Shapes":9}],12:[function(require,module,exports){
"use strict";
// import BaseShape from "../../baseShape/BaseShape.js";
const BaseShape2 = require('../../baseShape/BaseShape');
module.exports = class Arc extends BaseShape2 {
    constructor(name) {
        super(name);
        this.attributes.add("openingAngle", 0);
        this.attributes.add("closingAngle", 360);
        // this.attributes.add("filled", true); 
    }
};

},{"../../baseShape/BaseShape":10}],13:[function(require,module,exports){
"use strict";
const BaseShape = require('../../baseShape/BaseShape');
module.exports = class Text extends BaseShape {
    // #hidden:string;
    constructor(name) {
        super(name);
        // this.#hidden = "its hidden";
        this.attributes.add("title", "Text");
        // this.attributes.add("color", "red");  
        this.attributes.add("fontSize", 22);
        this.attributes.add("fontFamily", "Arial");
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
};

},{"../../baseShape/BaseShape":10}]},{},[11]);
