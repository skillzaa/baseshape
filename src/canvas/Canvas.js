import BaseShape from "../baseShape/BaseShape.js";
export default class Canvas extends BaseShape {
    constructor() {
        super();
        this.attributes.add({ name: "clearCanvasFlag", value: 1 });
    }
    draw(metal) {
        if (this.attributes.getProperty("clearCanvasFlag") === 1) {
            metal.clearCanvas(this.attributes.getProperty("color"));
        }
    }
}
