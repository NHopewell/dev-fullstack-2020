// hide an html element
    // $('button').on("click", function() {
    //     $("h1").hide();
    // })

// show it again 
    // .show()

//toggle on and off
    // $('button').on("click", function() {
    //     $("h1").toggle();
    // })

// fade out
    // $('button').on("click", function() {
    //     $("h1").fadeOut();
    // })

// fade out
    // .fadeIn();

// fade toggle on and off
    // $('button').on("click", function() {
    //     $("h1").fadeToggle();
    // })


// slide up and slide down / slide toggle  (USEFUL FOR DROPDOWN MENUS) <<<<--
    // $('button').on("click", function() {
    //     $("h1").slideToggle();
    // })


// ANIMATE (specify some css you want to animate towards)
    // $('button').on("click", function() {
    //     $("h1").animate({ opacity: 0.5}); // can only include css rules that have a numeric value NO STRINGS!!!
    // })


// CHAIN TOGETHER jQuery animations 
$('button').on("click", function() {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5}); // can only include css rules that have a numeric value NO STRINGS!!!
})