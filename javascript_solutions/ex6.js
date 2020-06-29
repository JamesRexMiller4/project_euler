// Problem: The sum of the squares of the 
// first ten natural numbers is,

// 1^2+2^2+...+10^2=385

// The square of the sum of the 
// first ten natural numbers is,

// (1+2+...+10)2=552=3025

// Hence the difference between the 
// sum of the squares of the first ten natural numbers
//  and the square of the sum is 3025−385=2640.

// Find the difference between the 
// sum of the squares of the first one hundred
//  natural numbers and the square of the sum.


const findDifference100 = () => {
    let arr100 = [];
    for (let i = 1; i <= 100; i++) {
        arr100.push(i);
    }
    const arr100SumSquared = arr100.map(val => val ** 2)
    .reduce((acc, val) => acc + val);

    const arr100SquaredSum = arr100.reduce((acc, val) => acc + val) ** 2;

    console.log(arr100SquaredSum - arr100SumSquared);
};

findDifference100();