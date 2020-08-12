// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

const sumExponentialDigits = () => {
  let resultSum = '';
  let carry = 0;

  const multiplyNumStringByTwo = (str) => {
    let workingProduct = ''
      for (let i = 0; i < str.length; i++) {
        let char = str.charAt(str.length - 1 - i)
  
        let temp = (parseInt(char) * 2 + carry).toString();
        let lastDigit = temp.charAt(temp.length - 1);
        carry = parseInt(temp.slice(0, temp.length - 1));
  
        if (!carry) carry = 0;
  
        workingProduct = lastDigit + workingProduct;
  
      };

      if (carry > 0) {
        workingProduct = carry + workingProduct;
        carry = 0;
      }

    return workingProduct
  };

    for (let i = 0; i <= 1000; i++) {
      if (i === 0) resultSum = "1";
      if (i > 0) resultSum = multiplyNumStringByTwo(resultSum);
    }
  
    let sumDigits = resultSum
    .split('')
    .reduce((acc, curVal) => acc += parseInt(curVal), 0);
    console.log(sumDigits);
  };

sumExponentialDigits();