const prompt = require('prompt-sync')();
let file=prompt("Enter the file name ");

switch(file){
    case".js": 
        language = "Javascript";
        break;
    case".py":
        language = "Python";
        break;
    case".java": 
        language = "Java";
        break;
    case".cpp":
        language = "C++";
        break;
    case".html":
        language = "HTML";
        break;
    default:
        language = "invalid";
}

console.log("File name : " + file)
console.log("Language : " + language)