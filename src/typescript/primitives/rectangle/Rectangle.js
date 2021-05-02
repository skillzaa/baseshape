import Shape from "../../../shapesModuleOld/shape/Shape.js";
import RectangleAnimations from "./RectangleAnimations.js";
export default class Rectangle extends Shape {
    constructor() {
        super("rectangle");
        this.animations = new RectangleAnimations();
    }
    draw() {
        //this.metal.drawRectangle(this.attributes);       
        //--------------------------------------------
        this.metal.saveCtx();
        this.metal.getCtxValues(this.attributes);
        //if (this.attributes.getProperty("currentRotateAngle") > 0) {
        this.metal.translateCanvas(this.attributes);
        this.metal.rotateCanvas(this.attributes);
        this.metal.unTranslateCanvas(this.attributes);
        //}   
        //--------------draw rect-- if visible
        if ((this.attributes.getProperty("transparent") === false)) {
            this.metal.drawRectangle(this.attributes);
        }
        //------------------------------
        this.metal.restoreCtx();
        //--------------------------------------------
    } //draw ends
}
