/* Problem:
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000. */


const calcSum10000Amicably = (nums) => {
  const sumDivisors = (num) => {
    let divisors = [];
    for (let i = 1; i < num; i++) {
      console.log(i)
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    console.log(divisors)
    return divisors.reduce((acc, val) => acc + val);
  };

  let sum = nums.filter((num) => {
    let total = sumDivisors(num);
    console.log(total, 'total')
    if (sumDivisors(total) === num) {
      return num;
    }
  })
  // .reduce((acc, val) => {
  //   acc += val
  //   return acc
  // }, 0);
  console.log(sum);
};

let nums = [];
for (let i = 2; i < 10; i++) {
  nums.push(i);
}
calcSum10000Amicably(nums);