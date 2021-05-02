
const Shape= require('../src/baseShape/BaseShape');
const b = new Shape();
b.attributes.add({ name: "test", value: 100, comments: "100" });
// console.log(c);

test('Testing Attributes', () => {
    const c = b.getAttr("test");  
    expect(c).toBe(100);
const d = b.attributes.getProperty("test","comments");  
    expect(d).toMatch("100");

b.attributes.setProperty("test","new comment","comments" );  
    
const f = b.attributes.getProperty("test","comments");  
    expect(f).toMatch("new comment");
    });
