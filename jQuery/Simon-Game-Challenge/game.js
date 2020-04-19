// Initialize vars
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// if the game has started, update to show level > this is only run one time at start of game
$(document).keypress(function() {
  if (!started) {
    //update h1
    $("#level-title").text("Level " + level);
    // next sequence
    nextSequence();
    started = true;
    }
});

// check user click
$(".btn").click(function() {
    // id will equal a colour (blue, red etc)
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //animate and play sound
    playSound(userChosenColour);
    animatePress(userChosenColour);

    // call checkAnswer()
    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
    /*
        Check users answer, if correct, go to next sequence
        after 1000 milliseconds. If incorrect, play wrong sound
        and start game over.
    */

    // if the last element in both arrays are the same:
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        // correct:
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence(); // go to next sequence
        }, 1000);
        }

    } else {
        // wrong
        playSound("wrong");
        // animate screen by adding game-over class to body and the removing it
        $("body").addClass("game-over");
        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);

        // update h1
        $("#level-title").text("Game Over, Press Any Key to Restart");

        //Call startOver() if the user gets the sequence wrong.
        startOver();
    }

}

function nextSequence() {
    /*
        GO to the next sequence of the game.
            1. Reset user click pattern array.
            2. Increase level ++
            3. Pick random number between 0 and 3, use it to pick colour
            4. Add colour to game pattern array
            5. Animate the corresponding button on the screen.
    */

    // reset user click pattern, increase level
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    // pick a random number, add to gamePattern array
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // fade in and out and play sound
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    // play an audo clip
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    // animate a button pressed by the user

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
    }, 100);
}


function startOver() {
    // start game over by reseting the level, game pattern array
    // and started = false.

    level = 0;
    gamePattern = [];
    started = false;
}







