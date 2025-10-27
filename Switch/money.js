const prompt = require('prompt-sync')();
let usd = parseInt(prompt("Enter the amount of USD you want to convert? "));
let currency = prompt("What type of currency are you converting to? ");

switch(currency){
    case "EUR":
        rate = 0.93;
        convertedAmount = usd * rate
        type = "€";
    break;
    case "GBP": 
        rate = .80;
        convertedAmount = usd * rate
        type = "£";
    break;
    case "JPY": 
        rate = 150.20;
        convertedAmount = usd * rate
        type = "¥";
    break;
    case "AUD":
        rate = 1.52;
        convertedAmount = usd * rate
        type = "A$";
    break;
    default:
        rate = "invalid";
}

console.log("Currency in USD $" + usd);
console.log("Currency converted : " + currency)
console.log("Converted ammount : " + type + "" + convertedAmount)