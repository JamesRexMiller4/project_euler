// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


const sumOfPrimes = (threshold) => {
    let primes = [2, 3, 5, 7];
    for (let i = 2; i < threshold; i++) {
        let bool = true;
        if (i % 2 !== 0) {
            primes.forEach(prime => {
                if (i % prime === 0) {
                    bool = false;
                }
            });
        bool ? primes.push(i) : console.log(primes)
        }
    };
    let sum = primes.reduce((acc, curVal) => acc + curVal);
    console.log(sum);
    // very computationally intensive, took at least 15 min
};

sumOfPrimes(2000000);