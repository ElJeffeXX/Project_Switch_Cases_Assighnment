const prompt = require('prompt-sync')();
let rating = prompt("Enter the movie rating ");

switch(rating){
    case "G":
    case "PG":
        guide = "Appropriate for all ages.";
        break;
    case "PG-13":
        guide = "Some material may be inappropriate for children under 13.";
        break;
    case "R":
        guide = "Parents strongly cautioned.";
        break;
    case "NC-17":
        guide = "Only for adult under no circumstances should a child under the age of 18 should watch.";
        break;
    default:
        guide = "Not a real Rating";
}

console.log("Movie rating : " + rating);
console.log(""+ guide)
