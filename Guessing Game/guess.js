alert("Hello!");

// Create the number!
var theNumber = 4;

// Make them guess the number!
var userStringGuess = prompt ("Alright, I'm thinking of a number. Can you guess what it is?")
var userGuess = Number(userStringGuess); 

// Check the guess for correctness
if(userGuess === theNumber) {
    alert("Wow! You got it right!");
}
else if (userGuess > theNumber) {
    alert("Sorry. Too high.");
    document.location.reload();
}
else{
    alert("Nope. Too low.");
    document.location.reload();
}
