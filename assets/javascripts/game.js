$(document).ready(function() {
// Setting global variables
var userNum = 0;
var targetNum = 0;
var wins = 0;
var loses = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var winSound = document.createElement('audio');
document.body.appendChild(winSound);
winSound.src = 'assets/sounds/win.wav'
var loseSound = document.createElement('audio');
document.body.appendChild(loseSound);
loseSound.src = 'assets/sounds/lose.wav'

// Setting functions
function reset() {
    userNum = 0;
    targetNum = Math.floor(Math.random() * 102 + 19);
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    $("#wins").text(wins);
    $("#loses").text(loses);
    $("#userNum").text(userNum);
    $("#targetNum").text(targetNum);
}

function checkPoint(){
    if (userNum === targetNum) {
        winSound.play();
        alert("You won!!")
        wins++;
        reset();
    } else if ( userNum > targetNum) {
        loseSound.play();
        alert("You lose!!")
        loses++;
        reset();
    }
}

reset();

// Start on click
$("#gem1").on("click", function() {
    userNum += num1;
    $("#userNum").text(userNum);
    checkPoint();
})
$("#gem2").on("click", function() {
    userNum += num2;
    $("#userNum").text(userNum);
    checkPoint();
})
$("#gem3").on("click", function() {
    userNum += num3;
    $("#userNum").text(userNum);
    checkPoint();
})
$("#gem4").on("click", function() {
    userNum += num4;
    $("#userNum").text(userNum);
    checkPoint();
})
});