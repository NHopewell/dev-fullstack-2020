//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// create and connect to mongo collection
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

// schema for each item
const itemSchema = {
  name: {
    type: String,
    required: true
  }
};

// mongoose model
const Item = mongoose.model("Item", itemSchema);

// make some items
const item1 = new Item ({
  name: "Welcome to your todo list!"
});

const item2 = new Item ({
  name: "Hit the + button to add a new item."
});

const item3 = new Item ({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

// get and post routes
app.get("/", function(req, res) {

  // check if items collection in mongo is empty, if so populate once
  Item.find({}, (err, foundItems) => {
    if (foundItems.length === 0) {
      //insert documents into db collection
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully inserted items");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  });
});

app.post("/", function(req, res){

  // save posted text
  const itemName = req.body.newItem;
  // create new mongo document
  const item = new Item ({
    name: itemName
  });
  // save document into collection of documents
  item.save()

  // redirect back to home
  res.redirect("/");

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
