import {calculateDate} from "calculating-date";

// day different = [{ dayDiff: 2 }]
console.log(calculateDate("2022-04-15", "2022-04-17"));

// day, month different = [{ dayDiff: 3, monthDiff: 2 }]
console.log(calculateDate("2022-04-15", "2022-07-17"));


// day, month, year different = [{ dayDiff: 8, monthDiff: 2, yearDiff: 1 }]
console.log(calculateDate("2022-04-15", "2023-06-17"));