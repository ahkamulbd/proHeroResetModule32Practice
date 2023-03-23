const numbers = [12, 5, 23, 45, 11, 18, 9, 20, 55, 61, 1];
const bigNums = numbers.filter(num => num > 20);
//console.log(bigNums);
const tiny = numbers.filter(x => x <= 20);
//console.log(tiny);

const even = numbers.filter(x => x % 2 === 0);
//console.log(even);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 25000 },
    { id: 3, name: 'desktop', price: 65000 },
    { id: 4, name: 'tablet', price: 50000 },
    { id: 5, name: 'camera', price: 15000 },
]

const cheaperProduct = products.filter(product => product.price < 50000);
console.log(cheaperProduct);