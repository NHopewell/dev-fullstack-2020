var gamePattern = [];
var userClickPattern = [];
var buttonColours = "red blue green yellow".split(" ");

function nextSequence() {
    // generates a random number between 0 and 3
    randomNumer = Math.round(Math.random() * 3);
    return randomNumer;
}

function colourSwitch (switchOn) {
    // a switch to play audio sounds based on input colours

    switch (switchOn) {

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


$(document).keypress(function(event) {

    if (event.key === 'a') {
        var randomChosenColour = buttonColours[nextSequence()];
        gamePattern.push(randomChosenColour);
    
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
        colourSwitch(randomChosenColour);
    }
})

$(document).click(function(event) {

    var userChosenColour = event.target.id;
    userClickPattern.push(userChosenColour);

    console.log(userClickPattern)
})



