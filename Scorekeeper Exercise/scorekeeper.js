var playerOne = document.querySelector("#playerOne");
var playerTwo = document.getElementById("playerTwo");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("resetButton");
var numInput = document.querySelector("input");
var targetScoreDisplay = document.querySelector("p span");
var paragraph = document.querySelector("p");

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;

var gameOver = false;

playerOne.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
            gameOver = true;
        }
        p1Display.textContent = p1Score; 
    }

});

playerTwo.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p1Display.classList.add("loser");
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score; 
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.classList.remove("loser");
    p2Display.classList.remove("loser");
    gameOver = false;
}
numInput.addEventListener("change", function(){
    targetScoreDisplay.textContent = this.value;
    winningScore = Number(numInput.value);
    reset();
});