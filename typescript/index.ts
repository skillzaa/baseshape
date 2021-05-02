const Shapes = require('./Shapes');
const log = console.log;
const shapes = new Shapes();
shapes.addArc("newArc");
shapes.addArc("arc2");
shapes.addArc("arc3");
shapes.addText("text1");
log(shapes);
//-------------------------------------------
