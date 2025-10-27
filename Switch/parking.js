const prompt = require('prompt-sync')();
let type = prompt("What kind of vheicle is parked? ");
let hours = parseInt(prompt("How many hours was this vheicle parked? "));

switch(type){
    case "motorcycle":
        rate = 2;
        break;
    case "car":
        rate = 3;
    break;
    case "suv": 
        rate = 4;     
    break;
    case "truck":
        rate = 5;
    break;
    default:
         rate=0;       
}
 final = rate * hours;

if (hours>5){
    final= final+10;
}
console.log("Type of vheicle parked : " + type);
console.log("The amount of hours parked : " + hours);
console.log("Final price paid for parking : " + final);