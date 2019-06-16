const sum = require('./sum');

test('checking asynchronous code',()=>{
    const callback = (response)=>{
        expect.assertions(3);
        expect(response).not.toBeUndefined();
        expect(response).not.toBeFalsy();
        expect(response).toBe(1);
    }
    const errorCallback = (error)=>{
        expect.assertions(1);
        expect(error).toBe("error");
    }
    
    return sum().then(callback).catch(errorCallback);
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

    Strings
    1. toMatch()
    
    Array
    1. toContain

    Exceptions
    1. toThrow()

    Asynchronous code
    1. done()
*/