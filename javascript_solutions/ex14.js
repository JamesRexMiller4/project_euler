// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const findLongestChain = () => {
  const oddRule = (n) => 3 * n + 1;
  const evenRule = (n) => n / 2;
  let max = 0;
  let largestChainNum = 0;

  const calcCollatzChain = (n) => {
    let temp = n % 2
    
    switch (temp) {  
      case 0:
        n = evenRule(n);
        return n
        break;
      case 1:
        n = oddRule(n);
        return n
        break;
      default:
        return "All done";
        break;
    }
  }

  for (let i = 1000000; i > 1; --i) {
    let result = i;
    let num = i;
    let resultLength = 0;

    while (result !== 1) {
      resultLength++
      result = calcCollatzChain(result)
    }

    if (resultLength > max) {
      max = resultLength;
      largestChainNum = num;
    }
  }
  console.log("max", max);
  console.log("largestChainNum", largestChainNum);
}

findLongestChain()