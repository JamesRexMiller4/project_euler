// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

const dates = [
  ["Jan", 31],
  ["Feb", 28],
  ["Mar", 31],
  ["Apr", 30],
  ["May", 31],
  ["Jun", 30],
  ["Jul", 31],
  ["Aug", 31],
  ["Sep", 30],
  ["Oct", 31],
  ["Nov", 30],
  ["Dec", 31]
]

const countingBackSunday = (date1, date2) => {
  let date1Arr = date1.split(' ');
  let date2Arr = date2.split(' ');
  let timeTravel = {
    days: 0,
    months: 0,
    years: 0,
  };
  let sundays = 0;

  while (years < 0) {
    let days = dates[timeTravel.months]
    days -= 7
  }



};

countingBackSunday("1 Jan 1900", "31 Dec 1900");
countingBackSunday("1 Jan 1901", "31 Dec 2000");