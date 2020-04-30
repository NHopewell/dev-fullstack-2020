exports.getDate = function() {

    const today = new Date();
    // set options for toLocalDateString
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    // pass in options here to format date
    return today.toLocaleDateString("en-us", options);
}
