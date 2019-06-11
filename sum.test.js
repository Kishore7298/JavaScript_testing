//const sum = require('./sum');

test('adds positive number is not zero',()=>{
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
})

/*
    1. toBe (to comapare the values)
    2. toEqual (to compare the Objects)
    3. .not.toBe (opposite of toBe)

    Truthieness
    4.  toBeNull
    5.  toBeDefined
    6.  toBeUndefined
    7.  toBeFalsy
    8.  toBeTruthy

    Numbers
    1.  toBeGreaterThan
    2.  toBeGreaterThanOrEqual
    3.  toBeLessThan
    4.  toBeLessThanOrEqual
*/