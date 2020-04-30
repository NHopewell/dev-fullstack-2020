const date = require(`${__dirname}/date.js`)
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cwd = __dirname;
const port = 3000;

// set apps view enjine to ejs
app.set('view engine', 'ejs');
// use bodyparser
app.use(bodyParser.urlencoded( {extended: true} ));
// public files server will use
app.use(express.static("public")); 

// will be updated when user posts to "/"
const todoItems = [];
const workItems = [];

app.get("/", (req, res) => {
    
    // the module we required with the date function
    const currentDay = date.getDate()   
    
    // views/list.ejs and pass it all the variables we want to render
    res.render('list', {
        listTitle: currentDay,
        listItems: todoItems // global empty array user will add to
    });
});

app.post("/", (req, res) => {

    const newItem = req.body.newItem;
    // post button name for forum was given "list"
    if (req.body.list === "Work") {
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
    const newItem = req.body.newItem;
    workItems.push(newItem);   
    // triggers app.get again once user posts, now this time with a new item added to todo array
    res.redirect('/work');
})

app.get("/about", (req, res) => {
    // simply change title to string
    res.render("about")
});



app.listen(port, () => console.log(`Listening on port ${port}`));