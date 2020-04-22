const https = require('https');
// express
const express = require('express');
const app = express();
// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( {extended: true} ));

// tell express which folder to get static files like styles.css and our images
app.use(express.static("public"));

// port and absolute path
const port = 3000;
const cwd = __dirname;

app.get("/", (req, res) => res.sendFile(`${cwd}/signup.html`));

app.post("/", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.emailAddress;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
})

app.listen(port, () => console.log("App listening on port 3000."));