const calculator = require("../src/calculator.js");

const provideNumbersToAdd = [
    [[], 0],
    [[2,2], 4],
    [[3, 5, 8], 16],
];

it.each(provideNumbersToAdd)("adds numbers together", (numbers, expected) => {
    let sut = new calculator();
    
    expect(sut.add(...numbers)).toBe(expected);
});
