const prompt = require('prompt-sync')();
let temp = parseInt(prompt("Enter the tempature "));
let converion = prompt("Enter the conversion you want ");

switch(converion){
    case "C2F":
        result = (temp * 9 / 5) + 32
        type = "C";
        type2 = "F";
    break;
    case "F2C":
        result = (temp - 32) * 5 / 9
        type = "F"
        type2 = "C";
    break;
    default:
        converion = "Invalid conversion type";
        temp = "Invalid";
        type = "Invalid";
        type2 = "Invalid";
        result = "Invalid";
}

console.log("Orgiinal tempature : " + temp + type);
console.log("Converted tempature : " + result + type2);