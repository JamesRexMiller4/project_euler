/*
Problem:
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/
const UPPERLIMIT = 28123;
const LOWERLIMITABUNDANTSUM = 24;
const LOWERLIMITABUNDANTNUM = 12;

const findIntsNotSumsOfAbundantNums = (abundantSums) => {
  const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  for (let i = LOWERLIMITABUNDANTSUM + 1; i < UPPERLIMIT; i++) {
    console.log(i, "pushing integers")
    if (!abundantSums.includes(i)) {
      integers.push(i);
    }
  }

  return console.log(sumIntegers(integers));
}

const sumIntegers = (ints) => {
  return ints.reduce((acc, val) => acc + val);
};

const findAbundantNumbers = () => {
  let abundantNums = [];

  for (let i = LOWERLIMITABUNDANTNUM; i < UPPERLIMIT; i++) {
    if (isAbundant(i)) {
      abundantNums.push(i);
    }
  }
  return abundantNums;
};

const sumAbundantNumsCombos = (nums) => {
  let combos = [];
  nums.forEach(num => {
    nums.forEach(num2 => {
      let sum = num + num2;
      if (!combos.includes(sum)) {
        combos.push(sum);
      }
    })
  })
  return combos;
};

const isAbundant = (num) => {
  let divisors = findDivisors(num);
  let sum = sumDivisors(divisors);

  if (sum > num) {
    return true
  } else return false
};

const findDivisors = (num) => {
  let divisors = [1];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const sumDivisors = (divisors) => {
  return divisors.reduce((acc, val) => acc + val);
};

findIntsNotSumsOfAbundantNums(sumAbundantNumsCombos(findAbundantNumbers()));