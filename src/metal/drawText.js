"use strict";
module.exports = function drawText(attributes) {
    this.ctx.save();
    this.ctx.fillStyle = attributes.getAttr("color");
    this.ctx.font = `${attributes.getAttr("fontSize")}px ${attributes.getAttr("fontFamily")}`;
    this.ctx.fillText(attributes.getAttr("title"), attributes.getAttr("x"), attributes.getAttr("y"));
    this.ctx.restore();
};
