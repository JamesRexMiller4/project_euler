// Problem: 
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


// Solution: 

findSum3to5 = (num) => {
  let arr = [];
    for (let i = 1; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        arr.push(i);
      }
    }
  
  return arr.reduce((acc, curVal) => acc + curVal)
}

console.log(findSum3to5(1000));