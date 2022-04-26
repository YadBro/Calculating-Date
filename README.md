# What is this?

This is a package module javascript for calculate the distance between two points.

# Installation

```
npm install calculating-date --save
```

# Example or Usage

``
import {calculateDate} from "calculating-date";

// day different = [{ dayDiff: 2 }]
console.log(calculateDate("2022-04-15", "2022-04-17"));

// day, month different = [{ dayDiff: 3, monthDiff: 2 }]
console.log(calculateDate("2022-04-15", "2022-06-17"));

// day, month, year different = [{ dayDiff: 8, monthDiff: 2, yearDiff: 1 }]
console.log(calculateDate("2022-04-15", "2023-06-17"));

Other example =

a. index.html

...form
<label>Start Date</label>
<input type="date" name="startDate">
<label>End Date</label>
<input type="date" name="endDate">
...form

<script src="script.js"></script>

b. script.js

const calculateDate = require("calculating-date");
const startDate = document.querySelector("input[name=startDate]");
const endDate = document.querySelector("input[name=endDate]");

const distance = calculateDate.calculateDate(startDate.value, endDate.value);
console.log(distance);
``
