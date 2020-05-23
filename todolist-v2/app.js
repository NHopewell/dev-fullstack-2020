//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
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

// list of items
const listSchema = {
  name: String, 
  items: [itemSchema] // array of itemSchema documents
}

const List = mongoose.model("List", listSchema);

// get and post routes
app.get("/", function(req, res) {

  // check if items collection in mongo is empty, if so populate once
  Item.find({}, (err, foundItems) => {
    if (!err) {
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
    } else {
      console.log(err);
    }

  });
});

app.post("/", function(req, res){

  // save posted text
  const itemName = req.body.newItem;
  const listName = req.body.list;
  // create new mongo document
  const item = new Item ({
    name: itemName
  });

  // check if list is the defaul route list Today or custom list
  if (listName === 'Today') {
    // save document into collection of documents
    item.save()
    // redirect back to home
    res.redirect("/");
  } else {
    // search for list doc in list collection and add to existing array of items
    List.findOne({name: listName}, (err, foundList) => {
      if (!err) {
        // push into .items property (array of items)
        foundList.items.push(item);
        foundList.save();
        // redirect to proper custom route
        res.redirect(`/${listName}`);
      }
    });
  }
});

app.post("/delete", (req, res) => {
  // id of item (document) checked off todo list
  const checkedItemId = req.body.checkbox;
  // delete document from collection
  Item.findByIdAndDelete(checkedItemId, (err) => {
    if (err) {
      console.log(err);
    } else {
      // redirect back home with item deleted
      res.redirect("/");
    }
  });
});

// posts pages with Express routing
app.get('/:listName', (req, res) => {

  // utilize lodash to make routing to pages more robust
  const customList = _.lowerCase(req.params.listName);

  List.findOne({name: customList}, (err, foundList) => {
    if (!err){
      if (!foundList) {
        // create new list 
        const list = new List({
          name: customList,
          items: defaultItems
        });
        // save into lists collection
        list.save();
        // show newly created and saved list
        res.redirect(`/${customList}`);
      } else {
        // show existing list
        res.render("list", {
          listTitle: foundList.name, 
          newListItems: foundList.items
        });
      }
    } else {
      console.log(err);
    }
  });
});


app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
