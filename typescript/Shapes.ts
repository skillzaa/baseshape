import Shape from '../shapes/shape/Shape.js';
import Arc from './primitives/arc/Arc.js';
import Text from './primitives/text/Text.js';

export default class Shapes {
private shapesData:{};
    data:Shape[];
   
constructor() {
        this.data = [];
this.shapesData = {};
}

addShape(shapeDataName="quad"):Shape {
       const shape = new Shape(this.shapesData[shapeDataName]);
        this.data.push(shape);
        return shape;
    }
addArc():Arc {
    const arc = new Arc();
    this.data.push(arc);
    return arc;
}
addText():Text {
    const text = new Text();
    this.data.push(text);
    return text;
}
   
   
}
