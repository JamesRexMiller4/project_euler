// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

//   X X 
//   X X   = 6 routes

//  X X X
//  X X X
//  X X X = 24 routes 

// How many such routes are there through a 20×20 grid?

const threeByThree = [
  ["X", "X", "X",],
  ["X", "X", "X",],
  ["X", "X", "X",]
]

const fiveByFive = [
  ["X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X",]
]

const tenByTen = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
]

const twentyByTwenty = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",],
]




const calcLatticePathRoutes = (arr) => { 
    let points = arr.length + 1;
    let n = arr.length

    const factorialLoop = (i) => {
      let result = 1;
      for (i ; i > 0; i--) {
        result *= i
      }
      return result
    }

    let numRoutes = factorialLoop(n) * points
    console.log(numRoutes)
}

calcLatticePathRoutes(threeByThree);
calcLatticePathRoutes(fiveByFive);
calcLatticePathRoutes(tenByTen);
calcLatticePathRoutes(twentyByTwenty);