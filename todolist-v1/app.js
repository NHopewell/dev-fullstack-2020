
const express = require("express");
const app = express();
// set apps view enjine to ejs
app.set('view engine', 'ejs');

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static("public")); // public files to use

const cwd = __dirname;
const port = 3000;

// will be updated when user posts to "/"
let todoItems = [];
let workItems = [];

app.get("/", (req, res) => {
    
    let today = new Date();
    // set options for toLocalDateString
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let currentDay = today.toLocaleDateString("en-us", options) // pass in options here
    
    // views/list.ejs and pass it all the variables we want to render
    res.render('list', {
        listTitle: currentDay,
        listItems: todoItems // global empty array user will add to
    });
});

app.post("/", (req, res) => {

    let newItem = req.body.newItem;
    // post button name for forum was given "list"
    if (req.body.list === "Work List") {
        workItems.push(newItem);
        // triggers app.get again once user posts, now this time with a new item added to todo array
        res.redirect("/work")
    } else {
        todoItems.push(newItem);
        res.redirect("/");

    }
})

app.get("/work", (req, res) => {
    // simply change title to string
    res.render("list", {
        listTitle: "Work List",
        listItems: workItems
    });
});

app.post("/work", (req, res) => {
    let newItem = req.body.newItem;
    workItems.push(newItem);   
    // triggers app.get again once user posts, now this time with a new item added to todo array
    res.redirect('/');
})

app.get("/about", (req, res) => {
    // simply change title to string
    res.render("about")
});



app.listen(port, () => console.log(`Listening on port ${port}`));