const prompt = require('prompt-sync')();
let zone = prompt("Enter the shipping zone ");
let weight = parseInt(prompt("Enter the weight in Ib "));


switch (zone){
    case "local": 
        rate = "2.50";
        totalCost = weight * rate;
    break;
    case "regional": 
         rate = "3.50";
         totalCost = weight * rate;
    break;
    case "national":
         rate = "5.00";
         totalCost = weight * rate;
    break;
    case "international":
         rate = "10.00";
         totalCost = weight * rate;
    break;
    default:
        rate = "invalid";
}

console.log("Shipping zone: " + zone)
console.log("Package weight : " + weight)
console.log("Rate per pound : " + rate )
console.log("total : $" + totalCost)