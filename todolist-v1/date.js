module.exports = getDate;

function getDate() {

    let today = new Date();
    // set options for toLocalDateString
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    // pass in options here
    let currentDay = today.toLocaleDateString("en-us", options);

    return currentDay;

}
