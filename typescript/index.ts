const Shapes = require('./Shapes');
const Metal = require('./metal/Metal');
const metal = new Metal();
// import {Shapes} from './dist/bundle.js';
const log = console.log;
const shapes = new Shapes();
const newArc = shapes.addArc("newArc");
shapes.addArc("arc2");
shapes.addArc("arc3");
const text1 = shapes.addText("text1");
//log(shapes);

newArc.draw(metal);
text1.setAttr("color","red");
text1.draw(metal);