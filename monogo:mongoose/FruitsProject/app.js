const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server and insert then retrieve
client.connect( function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  //db and collection
  const db = client.db(dbName);
  const collection = db.collection('fruits');

    // Insert multiple documents
    collection.insertMany([
        {
            name: "Grape",
            score: 6,
            review: "meh"
        },
        {
            name: "Pear",
            score: 10,
            review: "Perfect"
        },
        {
            name: "Kiwi",
            score: 4,
            review: "Bad"
        }
    ], function(err, result) {
      // assert no errors and that 3 docs got inserted
      assert.equal(null, err);
      assert.equal(3, result.insertedCount);
    });

    // Get first 5 records back from db as an array of js objects
    collection.find({}).limit(5).toArray(function(err, fruits) {
        assert.equal(null, err);
        assert.equal(5, fruits.length);

        console.log(fruits);

        // close connection
        client.close();
        });
});