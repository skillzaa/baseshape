const BasePrimtive = require("../testsrc/premtives/BasePrimtive.js")["default"];


const b = new BasePrimtive();
b.attributes.add({ name: "test", value: 100, comments: "100" });

test('Testing Attributes', () => {
const c = b.attributes.getProperty("test","value");  
    expect(c).toBe(100);
const d = b.attributes.getProperty("test","comments");  
    expect(d).toMatch("100");

b.attributes.setProperty("test","new comment","comments" );  
    
const f = b.attributes.getProperty("test","comments");  
    expect(f).toMatch("new comment");
    });
