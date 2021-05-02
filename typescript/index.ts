const Shapes = require('./Shapes');
// import {Shapes} from './dist/bundle.js';
const log = console.log;
const shapes = new Shapes();
const newArc = shapes.addArc("newArc");
shapes.addArc("arc2");
shapes.addArc("arc3");
shapes.addText("text1");
log(shapes);
