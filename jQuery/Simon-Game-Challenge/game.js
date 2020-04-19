var gamePattern = [];
var userClickPattern = [];
var buttonColours = "red blue green yellow".split(" ");

function nextSequence() {
    // generates a random number between 0 and 3
    randomNumer = Math.round(Math.random() * 3);
    return randomNumer;
}

function playSound (colour) {
    // a switch to play audio sounds based on input colours
    switch (colour) {

        case "blue":
            var blueSound = new Audio("sounds/blue.mp3");
            blueSound.play();
            break;
        case "green":
            var greenSound = new Audio("sounds/green.mp3");
            greenSound.play();
            break;
        case "red":
            var redSound = new Audio("sounds/red.mp3");
            redSound.play();
            break;
        case "yellow":
            var yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();
            break;
        default:
            var wrongSound = new Audio("sounds/wrong.mp3");
            wrongSound.play();
            break;
    }

}

function animatePress(currentColour, nSeconds) {
    // add a css class to a selected element and remove
    // it after n sceonds.
    var elementClicked = $("#"+currentColour)
    elementClicked.addClass("pressed");

    setTimeout(function() {
        elementClicked.removeClass("pressed");
    }, nSeconds);
}

// to start game, press A, choose random colour, animate + play sounds
$(document).keypress(function(event) {
    if (event.key === 'a') {
        var randomChosenColour = buttonColours[nextSequence()];
        gamePattern.push(randomChosenColour);
    
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
    }
})

//wait for user click, check, play sound, animate
$(document).click(function(event) {
    var userChosenColour = event.target.id;
    animatePress(userChosenColour, 100);
    playSound(userChosenColour);
    userClickPattern.push(userChosenColour);

})




