const Shapes = require('./Shapes');
const Metal = require('./metal/Metal');
const metal = new Metal();
// import {Shapes} from './dist/bundle.js';
const log = console.log;
const shapes = new Shapes();
const newArc = shapes.addArc("newArc");
shapes.addArc("arc2");
const rectangle01 = shapes.addRectangle("rectangle01");
const text1 = shapes.addText("text1");
//log(shapes);

rectangle01.setAttr("color","brown");
text1.setAttr("color","red");
newArc.draw(metal);
text1.draw(metal);
rectangle01.draw(metal);