"use strict";
// import Shape from '../shapes/shape/Shape.js';
const BS = require('./baseShape/BaseShape');
const Arc = require('./primitives/arc/Arc');
const Text2 = require('./primitives/text/Text.js');
const Rectangle = require('./primitives/rectangle/Rectangle');
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
    /** we need this methos so that we can piece together the Base shape */
    getBaseShape(name) {
        const baseShape = new BS(name);
        this.data.push(baseShape);
        return baseShape;
    }
    addArc(name) {
        const arc = new Arc(name);
        this.data.push(arc);
        return arc;
    }
    addRectangle(name) {
        const rec = new Rectangle(name);
        this.data.push(rec);
        return rec;
    }
    addText(name) {
        const text = new Text2(name);
        this.data.push(text);
        return text;
    }
};
