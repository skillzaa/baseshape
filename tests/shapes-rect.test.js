const log = console.log;
const Shapes= require('../dist/ShapesCjs');
const shapes = new Shapes();

const rect = shapes.addRectangle("rect");

// log(rect);
test('shapes', () => {
const l = rect.attributes.length;  
expect(l).toBe(20);//base shape has 20 attribs
});
const widen = rect.widen(5,10,100,500);
test('typeof widen', () => {
// log(widen);
    expect(typeof widen).toBe("object");
});
test('widen.fromSecond', () => {
    expect(widen.fromSecond).toEqual(5*1000);
});
test('widen.toSecond', () => {
// log(widen);
    expect(widen.toSecond).toEqual(10*1000);
});
test('widen.attrib to animate', () => {
// log(widen);
    expect(widen.attributeToAnimateName).toMatch("width");
});
test('widen.argsForAlgo.from', () => {
// log(widen);
    expect(widen.argsForAlgo.from).toEqual(100);
});
test('widen.argsForAlgo.to', () => {
// log(widen);
    expect(widen.argsForAlgo.to).toEqual(500);
});
test('widen.milliPerPixConst:', () => {
// log(widen);
    expect(widen.milliPerPixConst).toEqual(13);
});
// log(widen);