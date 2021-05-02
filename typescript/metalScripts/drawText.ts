
draw(metal) {
    metal.saveCtx();  
    //set its height and width
    const w = metal.ctx.measureText(this.attributes.getProperty("title")).width;
    const h = metal.ctx.measureText(this.attributes.getProperty("M")).width;
    this.attributes.setProperty("width",w+100);
    this.attributes.setProperty("height",h-100);
    metal.getCtxValues(this.attributes);
    
    //if (this.attributes.getProperty("currentRotateAngle") > 0) {
        
     metal.translateCanvas(this.attributes,w,h);
     
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
  