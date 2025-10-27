const prompt = require('prompt-sync')();
let level = prompt("Are you a junior, mid, senior, or lead at this company? ");
let base = 50000;//Testing price 50,000

switch(level){
    case "junior":
        percent = .05;
        bonus = base * percent
        total = base + bonus
        break;
    case "mid":
        percent = .1;
        bonus = base * percent
    total = base + bonus
        break;
    case "senior":
        percent = .15;
        bonus = base * percent
        total = base + bonus
        break;
    case "lead":
        percent = .2;
        bonus = base * percent
        total = base + bonus
        break;
    default:
        percent = "invalid";
        
}



console.log("Employee level: " + level)
console.log("Base salary : " + base)
console.log("bonus amount : " + percent)
console.log("total : " + total)