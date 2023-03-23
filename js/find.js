const numbers = [12, 15, 23, 45, 11, 18, 9, 20, 55, 61, 1];

const five = numbers.find(x => x % 5 === 0);
const fiveAll = numbers.filter(x => x % 5 === 0);
console.log(five);
console.log(fiveAll);