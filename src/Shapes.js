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
