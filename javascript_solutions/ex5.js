// Problem: 2520 is the smallest number that can be divided
//  by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly
//  divisible by all of the numbers from 1 to 20?

const findSmallestMult= () => {
    let num = 2520;
    let divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let index = 0;

    while (divisors[index]) {
        if (num % divisors[index] === 0) {
            index++; 
        } else {
            index = 0;
            num += 10;
        }
    }

    console.log(num);
};

findSmallestMult();