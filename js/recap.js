// 1. var let const

const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 460;
//console.log(salary);

// Default Parameter

function calculateSalary(salary, tax, bonus) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;

    return total;
}
const result = calculateSalary(20000, 0.25, 2500);
//console.log(result);

// 3. Template String

// const sectionContainer = document.getElementById('section=container');
// const createDiv = document.createElement('div');
// createDiv.innerHTML = `
//     <div>
//         <h3>Name: Arkam </h3>
//         <p>Address: </p>
//         <p> Salary: ${calculateSalary(10000, 0.1, 2000)} </p>
//         <p> Others: ${numbers[2]} </p>
//     </div>
// `;
// sectionContainer.appendChild(createDiv);

// 4. Arrow Function

const doubleIt = x => x * 2;
const result1 = doubleIt(55);
//console.log(result1);

// 5. Spread Operator
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages];
// console.log(newAges);
// console.log(...ages);

// 6. Destructuring
//const { x, y, z } = { x: 45, y: 15, z: 33, name: 'Sakib', salary: 450000 };
const { x, y, z, ...r1 } = { x: 45, y: 15, z: 33, name: 'Sakib', salary: 450000 };
//console.log(z);
//console.log(name);

//const [a, b, c] = [12, 45, 21, 24, 29, 33];
const [a, b, c, ...r2] = [12, 45, 21, 24, 29, 33];
console.log(c);