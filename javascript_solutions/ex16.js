// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

const sumExponentialDigits = () => {
  let sumArr = [];
  let resultSum = '';
  let carry = 0;

  for (let i = 0; i < 1000; i+= 10) {
    let sum = Math.pow(2, 10)
    sumArr.push(sum)
  }

  console.log(sumArr)

  let result = sumArr.reduce((acc, curVal) => acc *= curVal)
  console.log(Math.pow(2, 1000))
  console.log(result)
  // console.log(resultSum);
}

sumExponentialDigits();