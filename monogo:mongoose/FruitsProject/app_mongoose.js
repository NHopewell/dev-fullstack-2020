const mongoose = require("mongoose");

//connect (but name of db you want to connnect to OR create if  doesnt exist at end of string)
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true} );

//create new schema of how data in a particular collection of documents will be structured
const fruitsSchema = new mongoose.Schema( {
    name: String, 
    rating: Number,
    review: String
});

// use the schema to make a new mongoose model (name or collection, schema to stick to)
// should pass the singular form of what collection you want to make (fruits in this case)
// and mongoose wil make the collection plural 'fruit' becomes 'fruits' - capital also dropped
// uses lodash to achieve this
const Fruit = mongoose.model("Fruit", fruitsSchema);

// new document based on schema above (must adhere to schema)
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid fruit"
});

// save the fruit document into the Fruits collection inside the fruitsDB (equivalent to insert document for default mongo driver)
// fruit.save();

//insert many fruits
const Orange = new Fruit({
    name: "Orange",
    rating: 10,
    review: "Best"
});

const Pear = new Fruit({
    name: "Pear",
    rating: 4,
    review: "Meh"
});

const Banana = new Fruit({
    name: "Bananna",
    rating: 7,
    review: "Pretty good"
});

Fruit.insertMany([Orange, Pear, Banana], (err) => {
    if ( err ) {
        console.log(err);
    } else {
        console.log("Saves fruits to db.")
    }
})

// ---------------------------------------------------------------------------------------//

// people collection
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const People = mongoose.model("People", peopleSchema);

const person = new People({
    name: "Nick",
    age: 26
})

// person.save()