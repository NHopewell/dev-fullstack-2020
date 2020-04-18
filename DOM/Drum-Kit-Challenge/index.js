function drumSwitch (switchOn) {
    // a switch to play audio sounds based on input letters

    switch (switchOn) {

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
            console.log(switchOn);
            break;
    }

}

function buttonAnimation (currentKey) {
    //makes an animation for an indiviual key clicked or pressed
    // corresponds to each key class 'w a s d etc'

    var activeButton = document.querySelector("."+currentKey) 
    // update class list to include .pressed (adds shadow)
    activeButton.classList.add("pressed");
    // after 0.1 seconds, remove the pressed class
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100); // after duration specified in second param, run function in first param

}


// passing an anonymous function to addEventListener for each drum button:
// could also just used a named function.
var drumButtons = document.querySelectorAll(".drum");

// Add drum sounds to each button event listener
for (let i = 0; i < drumButtons.length; i++) {

    drumButtons[i].addEventListener("click", function() { // when the document records a keystroke, it will call the anonymous functiuon passed (called the callback function). The function is called by the object that experienced the click
        var buttonInnerHTML = this.innerHTML; // the ith drum button

        drumSwitch(buttonInnerHTML); // call switch function
        buttonAnimation(buttonInnerHTML); // make animation
        
    })
};

// add event listener for entire document:
    // NOTICE we pass e or event to the function - if you console.log the event, youll get back a 
    // KeyboardEvent object withg a 'key' property of whatever key was pressed.
document.addEventListener("keydown", function(event) {  // when the document records a keystroke, it will call the anonymous functiuon passed
    drumSwitch(event.key); // call switch function
    buttonAnimation(event.key); // make animation
});


