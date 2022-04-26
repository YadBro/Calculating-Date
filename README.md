# What is this?

This is a package module javascript for calculate the distance between two points.

## Installation

Use npm, make sure your npm is up to date.

```
npm install calculating-date --save
```

## Usage

(date, date) type parameter

```javascript
import calculating_date from "calculating-date";

const distance = calculating_date.calculateDate(startDate, endDate);
```

## Example

1. index.html

```html
<!-- index.html -->

<form>
  <label>Start Date</label>
  <input type="date" name="startDate" />
  <label>End Date</label>
  <input type="date" name="endDate" />
</form>

<script src="script.js"></script>
```

2. script.js

```javascript
const calculateDate = require("calculating-date");
const startDate = document.querySelector("input[name=startDate]");
const endDate = document.querySelector("input[name=endDate]");

const distance = calculateDate.calculateDate(startDate.value, endDate.value);
console.log(distance);
```

(test.mjs)

```javascript
import { calculateDate } from "calculating-date";

// day different = [{ dayDiff: 2 }]
console.log(calculateDate("2022-04-15", "2022-04-17"));

// day, month different = [{ dayDiff: 3, monthDiff: 2 }]
console.log(calculateDate("2022-04-15", "2022-06-17"));

// day, month, year different = [{ dayDiff: 8, monthDiff: 2, yearDiff: 1 }]
console.log(calculateDate("2022-04-15", "2023-06-17"));
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
