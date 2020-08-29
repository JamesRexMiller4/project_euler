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

const months = [
  {"Jan": 31},
  {"Feb": 28},
  {"Mar": 31},
  {"Apr": 30},
  {"May": 31},
  {"Jun": 30},
  {"Jul": 31},
  {"Aug": 31},
  {"Sep": 30},
  {"Oct": 31},
  {"Nov": 30},
  {"Dec": 31}
]

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

const countingBackSunday = (date1, date2) => {
  let date1Arr = date1.split(' ');
  let date2Arr = date2.split(' ');

  const findDaysInMonth = (month) => {
    return dates[month];
  }

  const findMonthIdx = (month) => {
    let daysInMonth = findDaysInMonth(month);
    let monthIdx = dates.indexOf({[month]: daysInMonth});

    return monthIdx;
  };

  const isLeapYear = (year) => {
    year % 4 === 0 ? true : false;
  };

  const findStartingDateDayOfWeek = (date) => {
      let dateArr = date.split(' ');
      let yearInt = parseInt(dateArr[2]);


      if (yearInt > 1900) {
        for (let i = 1900; i < yearInt; i++) {
          // add second loop for iterating the months
          // inside second loop divide the days by seven
          // remainder carries over to next month and moves
          // the days index
        }
      } else if (yearInt < 1900) {
        for (let i = 1900; i < yearInt; i--) {

        }
      } else {
        // condition for when year is 1900. 
      }
  }

  
  const countSundaysInMonth = (month) => {

  };


};

countingBackSunday("1 Jan 1900", "31 Dec 1900");
countingBackSunday("1 Jan 1901", "31 Dec 2000");