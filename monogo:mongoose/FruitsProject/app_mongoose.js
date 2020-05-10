const mongoose = require("mongoose");

//connect (but name of db you want to connnect to OR create if  doesnt exist at end of string)
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true} );


// ----------------- INSERT INTO DB -------------------- //


//create new schema of how data in a particular collection of documents will be structured
const fruitsSchema = new mongoose.Schema( {
    name: {
        type: String, 
        required: [true, "Must add a name for each fruit"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
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


//>>>> people collection <<<<
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitsSchema //   <<<<<<<<< -------- establishing relationship with embedded document
});

// make a new fruit
const watermelon = new Fruit({
    name: "Watermelon",
    rating: 9,
    review: "My personal fav!"
})

const People = mongoose.model("People", peopleSchema);

const person = new People({
    name: "Mike",
    age: 26,
    favoriteFruit: watermelon
})

// person.save()



// ----------------- READ FROM DB -------------------- //



// find documents in fruits collection -> returns array of objects
Fruit.find( (err, fruits) => {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close(); // close connection

        // log name of each fruit obj
        fruits.forEach( (fruit) => {
            console.log(fruit.name); 
        });
    }
});



// ----------------- UPDATING AND DELETING -------------------- //


// which doc you want to update, what you want to change
Fruit.updateOne( {_id: "5eb81d5458b31af66b9199f8"}, {name: "Pineapple"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Succefully updated record");
    }
});


Fruit.deleteOne( {_id: "5eb81d5458b31af66b9199f8"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Succefully deleted record");
    }
});


// update record to give a favorite fruit:
const melon = new Fruit ({
    name: "Melon",
    rating: 8,
    review: "Fav"
});

People.update( 
    {_id: "5eb81eeec996cff692666c5f"}, 
    {favoriteFruit: melon}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Succefully updated record");
        }
});

