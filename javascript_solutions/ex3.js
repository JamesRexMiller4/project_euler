// Problem: The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const findLargestPrime = (n) => {
    let factors = [];
    let i = 2;
    const calcFactors = (num, divisor) => {
      while (num % divisor !== 0) {
        divisor++;
      }
      num = num / divisor;
      factors.push(divisor);
      divisor++;

      if (divisor < num) {
        calcFactors(num, divisor);
      } else return;
    };
    calcFactors(n, i);
    let idx = factors.length - 1;
    console.log(factors);
    console.log(factors[idx]);
};

findLargestPrime(600851475143);