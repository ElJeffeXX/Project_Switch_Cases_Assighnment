const prompt = require('prompt-sync')();
let type = prompt("Enter your plan type ");
let monthlyRate = parseInt(prompt("What is your monthly rate "));

switch (type){
    case "monthly":
        months = 1;
        discount = 0;
    break;
    case "quarterly":
        months = 3;
        discount = 0.05;
    break;
    case "semi-annual":
        months = 6;
        discount = 0.10;
    break;
    case "annual":
        months = 12;
        discount = 0.20;
    break;
}
originalCost = months * monthlyRate
discountAmount = originalCost * (discount / 100)
finalCost = originalCost - discountAmount

console.log("Duration of membership " + months + "month");
console.log("Original cost : $" + originalCost);
console.log("Discount : " + discountAmount + "%");
console.log("Final total cost : $" + finalCost);