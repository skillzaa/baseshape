"use strict";
draw(metal);
{
    metal.saveCtx();
    metal.getCtxValues(this.attributes);
    //if (this.attributes.getProperty("currentRotateAngle") > 0) {
    metal.translateCanvas(this.attributes);
    metal.rotateCanvas(this.attributes);
    metal.unTranslateCanvas(this.attributes);
    //}   
    //--------------draw rect-- if visible
    // if ((this.attributes.getProperty("transparent") === false)  ) {
    metal.drawArc(this.attributes);
    // }
    //------------------------------
    metal.restoreCtx();
}
