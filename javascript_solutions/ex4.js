// Problem: A palindromic number reads the same both ways. 
// The largest palindrome made from the product of
//  two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product
//  of two 3-digit numbers.

const findPalindrome = () => {
    let palindrome = 0;
    for (let i = 900; i <= 999; i++) {
        for (let j = 100; j <= 999; j++) {
            let num = i * j;
            if (num.toString() === num.toString()
            .split('').reverse().join('')) {
                if (num > palindrome) {
                    palindrome = num;
                }
            }
        }
    }
    console.log(palindrome);
};

findPalindrome();