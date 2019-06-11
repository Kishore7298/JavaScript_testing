//const sum = require('./sum');

test('adds positive number is not zero',()=>{
    const n= null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
})

/*
    1. toBe (to comapare the values)
    2. toEqual (to compare the Objects)
    3. .not.toBe (opposite of toBe)
    4.  toBeNull
    5.  toBeDefined
    6.  toBeUndefined
    7.  toBeFalsy
    8.  toBeTruthy
*/