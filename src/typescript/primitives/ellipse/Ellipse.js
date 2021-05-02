import BasePrimtive from "./BasePrimtive.js.js.js.js.js.js.js";
export default class Ellipse extends BasePrimtive {
    constructor() {
        super("Ellipse");
        this.attributes.add({ name: "radius", value: 100, comments: "" });
    }
    draw() {
        this.metal.drawEllipse(this.attributes);
    }
}
