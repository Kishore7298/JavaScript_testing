const sum = require('./sum');

test('testing mock function',()=>{
    function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[2]).toBeUndefined();

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

    Setup and Teardown
    1. beforeAll
    2. afterAll
    3. beforeEach
    4. afterEach
    5. describe

    Mock Functions
    1. .mock.calls
    2. jest.fn
    3. .mock.result 
*/