"use strict";
const BaseShape = require('../../baseShape/BaseShape');
module.exports = class Text extends BaseShape {
    // #hidden:string;
    constructor(name) {
        super(name);
        // this.#hidden = "its hidden";
        this.attributes.add("title", "Text");
        // this.attributes.add("color", "red");  
        this.attributes.add("fontSize", 22);
        this.attributes.add("fontFamily", "Arial");
    }
    draw(metal) {
        metal.saveCtx();
        //set its height and width
        const w = metal.ctx.measureText(this.attributes.getProperty("title")).width;
        const h = metal.ctx.measureText(this.attributes.getProperty("M")).width;
        this.attributes.setProperty("width", w + 100);
        this.attributes.setProperty("height", h - 100);
        metal.getCtxValues(this.attributes);
        //if (this.attributes.getProperty("currentRotateAngle") > 0) {
        metal.translateCanvas(this.attributes, w, h);
        metal.rotateCanvas(this.attributes);
        metal.unTranslateCanvas(this.attributes);
        //}   
        //--------------draw rect-- if visible
        // if ((this.attributes.getProperty("transparent") === false)  ) {
        metal.drawText(this.attributes);
        // }
        //------------------------------
        metal.restoreCtx();
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvv  
        //VVVVVV
    }
    widen(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        const w = this.generators.getCounter("fontSize", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.add(w);
        return w;
    }
    heighten(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        const w = this.generators.getCounter("fontSize", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.add(w);
        return w;
    }
};
