/*
Problem: 
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

const lexicographicPermutations = () => {
  let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8",
  "9"];

  const permutateString = (string) => {
    if (string.length < 2) {
      return string;
    };

    let permutationsArr = [];

    for (let i = 0; i < string.length; i++) {
      let char = string[i];

      if (string.indexOf(char) != i) continue
      
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

      for (let permutation of permutateString(remainingChars)) {
        permutationsArr.push(char + permutation);
      }
    }
    return permutationsArr; 
  };



};