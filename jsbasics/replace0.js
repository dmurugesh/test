let readline = require("readline-sync");
let size = readline.question("Enter the size of Array : ");
let inputArray = [];

for (i =0; i<size; i++) {
 inputArray[i] = readline.question("Enter the " + (i+1) + "Elment: ");
 }
console.log("Enter Array :" + inputArray); 
 
// used to multiple each elment in array and 
inputArray.forEach((value, index) => {
    inputArray[index] *= 0;
});
console.log(inputArray);


/*
let sqr = inputArray[i];
const sqrArray = () => {
    for (i =0; i<size; i++) {
       sqr = sqr * 1; 
        }
    console.log(sqr[i]);
    return sqr;
}
sqrArray();
*/


