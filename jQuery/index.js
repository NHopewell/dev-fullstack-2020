/* 
ensure jQuery working and ready (not needed if jQ script at bottom just before js script)
 $(document).ready(function() {

 })

get a propery with jQuery with one value:
     console.log($("h1").css("color"));
set a property with jQuery by passing two values
     $("h1").css("color", "blue");+
BUT should never change css in js, only add classes and have styling inside css only

*/

// GET AND SET CSS CLASSES
    $('h1').addClass("big-title spaced-title");
    $('h1').removeClass("big-title");
        // get all classes:
        $('h1').attr("class");


// QUERY FOR A CSS CLASS
    $('h1').hasClass("big-title");


// CHANGE TEXT OF AN ELEMENT
    //option 1  (.text):
    $('button').text("Dont click me");  // THIS WILL CHANGE ALL BUTTONS  ( $ same as 'document.querySelector().innerTEXT and document.querySelectorAll)

    // option 2 (.html): 
    $('button').html("<em>Actually, yes click me</em>")  // .innerHTML


//  GET AND SET ATTRIBUTES
    console.log($('img').attr("src"));

    $('s').attr("href", "https://www.yahoo.com");  // select all the attributes on our website and change ref to yahoo+

        // get all classes:
        $('h1').attr("class");


// ADD EVENT LISTENERS USING JQUERY - click
    $('h1').click(function() {
        $('h1').css('color', 'purple');
    })

    // ADD MANY EVENT LISTENERS (in JS, we had to use a for loop to add each event):
        // for (i = 0, i < n, i++) {
        //     document.querySelector('button')[i].addEventListener("click", function () {
        //         document.querySelector('h1').style.color = purple;
        //     })
        // }
    // With jQuery:
    $('button').click(function() {
        $('h1').css('color', 'purple');
    })

    // key press event listener
    $(document).keypress(function(event) {  // NOTICE NO QUOTES AROUND DOCUMENT (can also do "body")
        if (event.key === 'p') {
            $('h1').css('color', 'purple');
        }
    })

    $(document).keypress(function(event) {  

        $('h1').text(event.key);
    })

    //EVEN MORE FLIEXIBLE WAY TO ADD EVENT LISTENERS  <<<<<<<<<<<=--------------
    $(document).on("mouseover", function () {
        $('h1').css('color', 'purple');
    })



// ADD NEW ELEMENTS ON THE FLY
$('h1').before("<button>NEW</button>");  // create a button before the h1 on the page 
$('h1').after("<button>NEW</button>");  // create a button after the h1 on the page 
$('h1').prepend("<button>NEW</button>");  // create a button to the left in line (INSIDE THE ACTUAL H1, before the content - opening tag)
$('h1').append("<button>NEW</button>");  // create a button to the right of the h1 in line (INSIDE OF THE H1, after the content - after the closing tag)

//REMOVE ELEMENTS ON THE FLY
$("button").remove();