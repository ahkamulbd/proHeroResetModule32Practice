const numbers = [2, 8, 4, 6, 3];
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
//console.log(output);

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = number * 2;
        output.push(doubled);
    }
    return output;
}
const result = getDoubles(numbers);
//console.log(result);

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleItOld(number);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(number) {
    return number * 2;
}

const result1 = getDoubles(numbers);
//console.log(result1);

// With arrow function:

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleItOld(number);
        output.push(doubled);
    }
    return output;
}

// const doubleIt = num => num * 2;

// Using map:
// const makeDouble = numbers.map(doubleIt(num));

// const doubleIt = num => num * 2;

// console.log(makeDouble);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
//console.log(fiveTimes);

const mapArray = [1, 2, 3, 4, 5];
const fiveMultiple = mapArray.map(x => x * 5);
console.log(fiveMultiple);