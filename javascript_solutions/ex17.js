// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.


const countLettersTotal = () => {
  const legend = {
    "1": 3, //one
    "2": 3, //two
    "3": 5, //three
    "4": 4, //four
    "5": 4, //five
    "6": 3, //six
    "7": 5, //seven
    "8": 5, //eight
    "9": 4, //nine
    "10": 3, //ten
    "11": 6, //eleven
    "12": 6, //twelve
    "13": 8, //thirteen
    "14": 8, //fourteen
    "15": 7, //fifteen
    "16": 7, //sixteen
    "17": 9, //seventeen
    "18": 8, //eighteen
    "19": 8, //nineteen
    "20": 6, //twenty
    "30": 6, //thirty
    "40": 5, //forty
    "50": 5, //fifty
    "60": 5, //sixty
    "70": 7, //seventy
    "80": 6, //eighty
    "90": 6, //ninety
    "hundred": 7,
    "thousand": 8,
    "and": 3
  }

  const addTens = (str) => {
    if (str.length === 2) {
      let tens = str.charAt(0);
      let ones = str.charAt(1);

      if (ones === "0") {
        return legend[tens + "0"]
      } else {
        return legend[tens + "0"] + legend[ones]
      }
    }
  }

  const addHundreds = (str) => {
    if (str.length === 3) {
      let hundreds = str.charAt(0);
      let tens = str.charAt(1);
      let ones = str.charAt(2);
      if (tens === "0" && ones !== "0") {
        return (legend[hundreds] + legend["hundred"] + legend["and"] + legend[ones])
      } else if (tens === "0" && ones === "0") {
        return (legend[hundreds] + legend["hundred"])
      } else if (parseInt(tens) < 2 && parseInt(ones) > 0){
        let teens = str.slice(1, 3)
        return (legend[hundreds] + legend["hundred"] + legend[teens])
      } else if (tens !== "0" && ones === "0") {
        return (legend[hundreds] + legend["hundred"] + legend["and"] + legend[tens + "0"])
      } else {
        return (legend[hundreds] + legend["hundred"] + legend["and"] + legend[tens + "0"] + legend[ones])
      }
    }
  }

  let letterSum = 0;
  for (let i = 1; i <= 1000; i++) {
    let keyValue = i.toString();
    if (i < 20) {
      letterSum += legend[keyValue]
    }

    if (i >= 20 && i < 100) {
      letterSum += addTens(i.toString())
    }

    if (i >= 100 && i < 1000) {
      letterSum += addHundreds(i.toString())
    }

    if (i === 1000) {
      letterSum += legend["1"] + legend["thousand"]
    }
    console.log(i, letterSum)
  }
  console.log(letterSum)
}

countLettersTotal();