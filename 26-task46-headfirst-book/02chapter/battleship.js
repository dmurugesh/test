
//Assiging the variables 
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;


while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6)");
    console.log(guess);
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid input number!")
    } else {
        guesses = guesses + 1;
        // if (guess == location1) {
        //     hits = hits + 1;
        // } else if(guess == location2) {
        //     hits = hits + 1;
        // } else if (guess == location3) {
        //     hits = hits + 1;
        // }
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('HIT!');
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS");
        }
    }
}
var status = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);

alert(status);