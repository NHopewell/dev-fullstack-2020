// load express
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// https://expressjs.com/en/resources/middleware/body-parser.html
app.use(bodyParser.urlencoded( {extended: true} ));  // has many variants: bodyParser.text, bodyParse.json... urlencoded is for parsing an html form (anything posted)
const port = 3000;

// CANT SENT RUN CODE WITH RELATIVE FILE PATHS TO SERVER
// __dirname will get the current directory so you can work from there (no matter what computer the code is running on)
const currentDir = __dirname;
app.get("/", (req, res) => res.sendFile( `${currentDir}/index.html`));

app.post("/", (req, res) => {
    // bodyParser allows you to tap into the parsed version of the body of your requests (returned as json):
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    res.send(`The answer is ${num1 + num2}`);
});

app.listen(port);