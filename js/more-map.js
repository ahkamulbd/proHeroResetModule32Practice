const numbers = [12, 56, 87, 44];
const half = numbers.map(x => x / 2);
//const thirds = numbers.map(x => x / 3);
const thirds = numbers.map(x => parseFloat((x / 3).toFixed(2)));
//console.log(half);
//console.log(thirds);

// const friends = ['Zafar Sadik', 'Amir Malik', 'Saju Khadem', 'Monika Ali'];
const firstLetters = friends.map(friend => friend[0]);
//console.log(firstLetters);

const nameLengths = friends.map(f => f.length);
//console.log(nameLengths);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 25000 },
    { id: 3, name: 'desktop', price: 65000 },
    { id: 4, name: 'tablet', price: 50000 },
    { id: 5, name: 'camera', price: 15000 },
]
//const items = products.map(x => console.log(x));
const items = products.map(product => product.name);
console.log(items);

const prices = products.map(p => p.price);
//console.log(prices);

const friends = ['Zafar Sadik', 'Amir Malik', 'Saju Khadem', 'Monika Ali'];
friends.forEach(friend => console.log(friend));