// passing an anonymous function to addEventListener for each drum button:
// could also just used a named function.
var drumButtons = document.querySelectorAll(".drum");
var drumPositions = "kick-bass snare tom1 tom3 tom4 tom2 crash".split(" ");
var keys = "w a s d j k l".split(" ");

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        var drumSound = new Audio("css/sounds/" + drumPositions[i] + ".mp3");
        drumSound.play();
    });

    // drumButtons[i].addEventListener('keydown', event => function () {
    //     var drumSound = new Audio('css/sounds/tom-1.mp3');
    //     drumSound.play();
    // });
}


// var drumSound = new Audio("css/sounds/" + drumPositions[i] + ".mp3");
// drumSound.play();