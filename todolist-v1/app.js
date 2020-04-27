
const express = require("express");
const app = express();
// set apps view enjine to ejs
app.set('view engine', 'ejs');

const bodyParser = require("body-parser");

const cwd = __dirname;
const port = 3000;


app.get("/", (req, res) => {
    
    let today = new Date();
    // set options for toLocalDateString
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let currentDay = today.toLocaleDateString("en-us", options) // pass in options here
    let kindOfDay;
    
    if ([6, 7].includes(today)) {
        kindOfDay = 'weekend';
    } else {
        kindOfDay = 'weekday';
    }
    // views/list.ejs and pass it a variable 'kindOfDay' and pass it day
    res.render(`list`, {
        tDay: currentDay, 
        tKind: kindOfDay
    });
})


app.listen(port, () => console.log(`Listening on port ${port}`));