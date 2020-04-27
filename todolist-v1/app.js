
const express = require("express");
const app = express();
// set apps view enjine to ejs
app.set('view engine', 'ejs');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded( {extended: true} ));

const cwd = __dirname;
const port = 3000;

// will be updated when user posts to "/"
let todoItems = [];

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
    // views/list.ejs and pass it all the variables we want to render
    res.render('list', {
        tDay: currentDay, 
        tKind: kindOfDay,
        listItems: todoItems // global empty array user will add to
    });
})

app.post("/", (req, res) => {
    // update todo items array
    let newItem = req.body.newItem;
    todoItems.push(newItem);
    // triggers app.get again once user posts, now this time with a new item added to todo array
    res.redirect('/');
})

app.listen(port, () => console.log(`Listening on port ${port}`));