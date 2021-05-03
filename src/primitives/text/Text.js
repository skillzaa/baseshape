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
        const ans = metal.drawText(this.attributes);
    } //draw ends
    widen(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        const w = this.generators.addCounter("fontSize", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.push(w);
        return w;
    }
    heighten(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        const w = this.generators.addCounter("fontSize", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.push(w);
        return w;
    }
};
