// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

//   X X 
//   X X   = 6 routes

//  X X X
//  X X X
//  X X X = 20 routes 

// How many such routes are there through a 20×20 grid?

const twoByTwo = [
  ["X", "X"],
  ["X", "X"]
]

const threeByThree = [
  ["X", "X", "X"],
  ["X", "X", "X"],
  ["X", "X", "X"]
]

const fiveByFive = [
  ["X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X"]
]

const tenByTen = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
]

const twentyByTwenty = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
]




const calcLatticePathRoutes = (arr) => {
    const route = "D".repeat(arr.length) + "R".repeat(arr.length);

    const permutate = (str) => {
      if (str.length <= 2) return str.length === 2 ? [str, [str[1] + str[0]]] : str
      return str
        .split('')
        .reduce(
          (acc, dir, i) => 
          acc.concat(permutate(str.slice(0, i) + str.slice(i + 1)).map(val => dir + val)),
          []
        );
    }

    let allRoutes = permutate(route)

    const removeDuplicates = (arr) => arr.filter((a, b) => arr.indexOf(a) === b);

    let filteredAllRoutes = removeDuplicates(allRoutes);

    // console.log("filteredRoutes", filteredAllRoutes);
    console.log(filteredAllRoutes.length)
}
calcLatticePathRoutes(twoByTwo);
calcLatticePathRoutes(threeByThree);
calcLatticePathRoutes(fiveByFive);
// calcLatticePathRoutes(tenByTen);
// calcLatticePathRoutes(twentyByTwenty);