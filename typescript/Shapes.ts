import BaseShape from "./BaseShape.js";
import Arc from "./Arc.js";
import Text from "./Text.js";
import Rectangle from "./Rectangle.js";

export default class Shapes {
    data:BaseShape[];
   
constructor() {
        this.data = [];
}

addArc(name):Arc {
    const arc = new Arc(name);
    this.data.push(arc);
    return arc;
}
addRectangle(name):Rectangle {
    const rec = new Rectangle(name);
    this.data.push(rec);
    return rec;
}
addText(name):Text {
    const txt = new Text(name);
    this.data.push(txt);
    return txt;
}
   
   
}
