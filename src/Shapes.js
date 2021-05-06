import Arc from "./Arc.js";
import Text from "./Text.js";
import Rectangle from "./Rectangle.js";
export default class Shapes {
    constructor() {
        this.data = [];
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
        const txt = new Text(name);
        this.data.push(txt);
        return txt;
    }
}
