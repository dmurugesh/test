// intro to function 

// var dogName = "rover";
// var dogWeight = 23;
// if (dogWeight > 20) {
//  console.log(dogName + " says WOOF WOOF");
// } else {
//  console.log(dogName + " says woof woof");
// }
// dogName = "spot";
// dogWeight = 13;
// if (dogWeight > 20) {
//  console.log(dogName + " says WOOF WOOF");
// } else {
//  console.log(dogName + " says woof woof");
// }
// dogName = "spike";
// dogWeight = 53;
// if (dogWeight > 20) {
//  console.log(dogName + " says WOOF WOOF");
// } else {
//  console.log(dogName + " says woof woof");
// }
// dogName = "lady";
// dogWeight = 17;
// if (dogWeight > 20) {
//  console.log(dogName + " says WOOF WOOF");
// } else {
//  console.log(dogName + " says woof woof");
// }

// writing the aboe code usign function 

// function brak(name, weight) {
//     if (weight > 20) {
//         console.log(name + " says WOOF WOOF");
//     } else {
//         console.log(name + " says woof woof");
//     }
// }

// brak("Ram", 30);
// brak("Athil", 18);
// brak("Anoop", 20);

//Code Magnets

// function whatShallIWear(temp) {
//    if (temp < 60) {
//     console.log("Wear a jacket");
//    } else if (temp < 70) {
//     console.log("Wear a sweater");
//    } else {
//     console.log("Wear t-shirt");
//    }
// }

// whatShallIWear(50);
// whatShallIWear(80);
// whatShallIWear(60);

// saveMyProfile("krissy", 1991, 3.81, false);

// function saveMyProfile(naem, birthday, GPA, newuser) {
//     if (birthday >= 2004) {
//         console.log('Adult');
//     } 

// }

// var student = "krissy";
// var year = 1991;
// var GPA = 381/100;
// var status = "existinguser";
// var isNewUser = (status == "newuser");
// saveMyProfile(student, year, GPA, isNewUser);

// function doIt(param) {
//     param = 2;
//    }
//    var test = 1;
//    doIt(test);
//    console.log(test);

// Excersie

// variables
// var years = age * 7; 
// var myDog = "Fido";
// var guest = 3;
// var defaultSound = "";
// var pet = prompt("Ebter a type of pet: ");

// functions 
// function dogYears(dogName, age);
// function makeTea (cups, tea);
// function secret() ;
// function speak(kind) ;

// Built in function
// Alert
// prompt
// console.log

// arguments
// pet
// myDog, 4
// guests, "Earl Grey"
// mew,

// parameters 
// dogName
// agecups
// tea
// kind


//Wired Functions



//Function can return things too 

// function bake(degrees) {
//     var message;
//     if (degrees > 500) {
//     message = "I'm not a nuclear reactor!";
//     } else if (degrees < 100) {
//     message = "I'm not a refrigerator!";
//     } else {
//     message = "That's a very comfortable temperature for me.";
//     // setMode("bake");
//     // setTemp(degrees);
//     }
//     return message;
//    }

//    var status = bake(350);
//    console.log(status);

// Global or local scope 
// var avatar;  -- global scope
// function speed(value) {
//     var i = 0;  -- local scope
//     var speedlimit; -- local scope
//     if(value < 60) {
//         console.log('within limit');
//     }
// }

// function playTurn(player, location) {
//     points = 0;
//     if (location == 1) {
//     points = points + 100;
//     }
//     return points;
//    }
//    var total = playTurn("Jai", 1);
//    alert(points);


// arguments 
// x,y,radius, centerX, centerY, width, height,area, distance

// //parameters 
// width, height, x1,y1,x2,y2,r

// //local 
// dx,dy,d2,d,area

// //global
// area, distance, x,y,radius,width,height,centerY,centerX


// function clunk(times) {
//     var num = times;
//     while (num > 0) {
//     display("clunk");
//     num = num - 1;
//     }
//    }
//    function thingamajig(size) {
//     var facky = 1;
//     clunkCounter = 0;
//     if (size == 0) {
//     display("clank");
//     } else if (size == 1) {
//     display("thunk");
//     } else {
//     while (size > 1) {
//     facky = facky * size;
//     size = size - 1;
//     }
//     clunk(facky);
//     }
//    }
//    function display(output) {
//     console.log(output);
//     clunkCounter = clunkCounter + 1;
//    }
//    var clunkCounter = 0;
//    thingamajig(4);
//    console.log(clunkCounter);

var balance = 10500;
var cameraOn = true;
function steal(balance, amount) {
 cameraOn = false;
 if (amount < balance) {
 balance = balance - amount;
 }
 return amount;  // Amount is only reurned 
 cameraOn = true;  // This line wont be excuted 
}
var amount = steal(balance, 1250); // input amount itseld is returned here nothing is detucted from back account
alert("Criminal: you stole " + amount + "!");