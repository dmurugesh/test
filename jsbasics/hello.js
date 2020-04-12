let readline = require("readline-sync");

let str = readline.question("enter word :");


function palindrome(str) {

   str = str.toLowerCase().replace(/[^a-z]+/g,""); // ,"" remove spaces 

   if (str === str.split("").reverse().join(""))
   {
        console.log("Palindrome number");
        } 
        else { 
            console.log("Not Palindrome number"); 
           }
   }

palindrome(str);