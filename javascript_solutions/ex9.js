// A Pythagorean triplet is a set of three natural numbers,
//  a < b < c, for which,

// a2 + b2 = c2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pythagTripProduct = () => {
    let triplets = [];
    let answer;
    for (let a = 2; a <= 500; a++) {
        for (let b = 2; b <= 500; b++) {
            let cSquare = a**2 + b**2;
            console.log(cSquare)
            let c = Math.sqrt(cSquare);
            if ( c - Math.floor(c) === 0 && a < b < c) {
                triplets.push([a, b, c])
            }
        }
    };
    triplets.forEach(trip => {
        let total = trip.reduce((acc, curVal) => acc += curVal)
        if (total === 1000) {
            answer = trip.reduce((acc, digit) => {
                acc *= digit
                return acc
            }, 1);
            triplets = trip;
        }
    });
    
    console.log(triplets);
    console.log(answer);
};

pythagTripProduct();