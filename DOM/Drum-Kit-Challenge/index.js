// passing an anonymous function to addEventListener for each drum button:
// could also just used a named function.
var drumButtons = document.querySelectorAll(".drum");

// var drumPositions = "kick-bass snare tom1 tom3 tom4 tom2 crash".split(" ");
// var keys = "w a s d j k l".split(" ");

// for (let i = 0; i < drumButtons.length; i++) {
//     drumButtons[i].addEventListener("click", function () {
//         var drumSound = new Audio("css/sounds/" + drumPositions[i] + ".mp3");
//         drumSound.play();
//     });

// Add drum sounds to each button
for (let i = 0; i < drumButtons.length; i++) {

    drumButtons[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML; // the ith drum button

        switch (buttonInnerHTML) {

            case "w":
                var kickBass = new Audio("css/sounds/kick-bass.mp3");
                kickBass.play();
                break;
            case "a":
                var snare = new Audio("css/sounds/snare.mp3");
                snare.play();
                break;
            case "s":
                var tom1 = new Audio("css/sounds/tom1.mp3");
                tom1.play();
                break;
            case "d":
                var tom3 = new Audio("css/sounds/tom3.mp3");
                tom3.play();
                break;
            case "j":
                var tom4 = new Audio("css/sounds/tom4.mp3");
                tom4.play();
                break;
            case "k":
                var tom2 = new Audio("css/sounds/tom2.mp3");
                tom2.play();
                break;
            case "l":
                var crash = new Audio("css/sounds/crash.mp3");
                crash.play();
                break;
    
            default:
                console.log(buttonInnerHTML);
                break;
        }
        
    })
};
