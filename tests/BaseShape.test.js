
const Shape= require('../src/baseShape/BaseShape');
const b = new Shape("mustHaveAname");
b.attributes.add("test", 100);
// console.log(c);

test('Testing Attributes', () => {
    const c = b.getAttr("test");  
    expect(c).toBe(100);
// const d = b.attributes.getAttr("test","comments");  
//     expect(d).toMatch("100");

// b.attributes.setAttr("test","new comment","comments" );  
    
// const f = b.attributes.getProperty("test","comments");  
//     expect(f).toMatch("new comment");
    });
