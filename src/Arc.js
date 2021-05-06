import BaseShape from "./BaseShape.js";
export default class Arc extends BaseShape {
    constructor(name) {
        super(name);
        this.attributes.add("openingAngle", 0);
        this.attributes.add("closingAngle", 360);
        // this.attributes.add("filled", true); 
    }
    draw(metal) {
        const ans = metal.drawArc(this.attributes);
    } //draw ends
    heighten(fromSecond = 1, toSecond = 10, from = 100, to = 200) {
        return this.simpleCounter("width", fromSecond, toSecond, from, to);
    }
}
