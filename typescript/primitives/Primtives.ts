 import Arc from './arc/Arc.js';

export default class Primtives {

data:[];
    constructor() {
        this.data = [];
    }

    addArc():Arc {
       const arc = new Arc();
        this.data.push(arc);
        return arc;
    }
   
    // addCanvas() {
    //    const canvas = new Canvas();
    //     this.data.push(canvas);
    //     return canvas;
    // }
    // addTriangle():Triangle {
    //     const triangle = new Triangle();
    //     this.data.push(triangle);
    //     return triangle;
    // }
   
    
    // addCircle():Circle {
    //     const circle = new Circle();
    //     this.data.push(circle);
    //     return circle;
    // }
    // addEllipse() {
    //     const ellipse = new Ellipse();
    //     this.data.push(ellipse);
    //     return ellipse;
    // }
    // addText():Text {
    //     const text = new Text();
    //     this.data.push(text);
    //     return text;
    // }
   
    // addLine():Line {
    //     const line = new Line();
    //     this.data.push(line);
    //     return line;
    // }
    
    
    
   
}
