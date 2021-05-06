import BaseShape from "./BaseShape.js";
export default class Rectangle extends BaseShape {
    constructor(name) {
        super(name);
        //    this.animations = new RectangleAnimations();
    }
    draw(metal) {
        const ans = metal.drawRectangle(this.attributes);
    } //draw ends
}
