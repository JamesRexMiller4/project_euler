// Problem: 
// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

const calcSumDigits100Factorial = (num) =>  {
  let sum = 1n;

  for (let i = 0; i < num; i++) {
      sum *= BigInt(num - i)     
  }

  let result = sum.toString()
  .split('')
  .reduce((acc, val) => {
    return acc += parseInt(val);
  }, 0);
  
  console.log(result);
}

calcSumDigits100Factorial(100);