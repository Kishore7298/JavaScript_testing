//const sum = require('./sum');

test('adds positive number is not zero',()=>{
    for(let i=1; i<10; i++){
        for(let j=1; j<10; j++){
            expect(i+j).not.toBe(0)
        }
    }
})

/*
    1. toBe (to comapare the values)
    2. toEqual (to compare the Objects)
    3. .not.toBe (opposite of toBe)
*/