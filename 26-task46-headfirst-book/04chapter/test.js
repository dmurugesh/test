
//How to define an array 

// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

// // How to represeent multiple values in array 

// var solution2 = scores[2];  // solution 2 has the value of thrid element in the array 
// alert("Solution 2 produced " + solution2 + " bubbles.");

// //Creating an array 

// var flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];

// // How to access an array item

// var flavorOfTheDay = flavors[2];

// //Updating a value in the array

// flavors[3] = "vanilla chocolate chip"; // The 4th element in the array is replaced.
// // New array becomes 
// var flavors = ["vanilla", "butterscotch", "lavender", "vanilla chocolate chip", "cookie dough"];

// problem 

// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// var last = products.length - 1;
// var recent = products[last];
// console.log(recent);

var products = ["Choo Choo Chocolate",
                "Icy Mint", "Cake Batter",
                "Bubblegum"];
var hasBubbleGum = [false,
                    false,
                    false,
                    true];
for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
}

