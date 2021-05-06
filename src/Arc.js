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
}
