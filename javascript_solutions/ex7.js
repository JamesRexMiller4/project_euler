// By listing the first six prime numbers: 2, 3, 5, 7, 11, 
// and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?


const find10001stPrime = () => {
    let primes = [2, 3, 5, 7, 11, 13];
    let i = 13;
    while (primes.length < 10001) {
        let isPrime = true;
        i++;
        primes.forEach(prime => {
            if (i % prime === 0) {
              isPrime = false;
            }
        });
        isPrime ? primes.push(i) : i;
        console.log(primes.length);
    }
    console.log(i);
};

find10001stPrime();