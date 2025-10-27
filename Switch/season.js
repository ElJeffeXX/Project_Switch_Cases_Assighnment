const prompt = require('prompt-sync')();
let month=prompt("Enter the month ");
let season = 0;
switch (month){
    case "December":
    case "January":
    case "February":
        season = "Winter";
        break;
    case "March":
    case "April":
    case "May":
        season = "Spring";
        break;
    case "June":
    case"July":
    case "August":
        season = "Summer";
        break;
    case "September":
    case "October":
    case "November":
        season = "Fall";
        break;
    default:
        season = "Invalid Month"
}

console.log("Month of the year: " + month)
console.log("Season to expect: " + season)
