const prompt = require('prompt-sync')();
let coffeeSize=prompt("Enter the coffee size ")
let price=0
switch(coffeeSize){
    case "small":
        price=2.50;
        break;
    case "medium":
        price=3.50;
        break;
    case "large":
        price=4.50;
        break;
    case "extra large":
        price=5.00;
        break;
        default:
            price="Invalid";
}

console.log("Coffee Size : "+ coffeeSize);
console.log("Price : $ "+ price);