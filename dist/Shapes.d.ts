import BaseShape from "./BaseShape.js";
import Arc from "./Arc.js";
import Text from "./Text.js";
import Rectangle from "./Rectangle.js";
export default class Shapes {
    data: BaseShape[];
    constructor();
    addArc(name: any): Arc;
    addRectangle(name: any): Rectangle;
    addText(name: any): Text;
}
