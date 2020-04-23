
const express = require("express");
const app = express();

// set apps view enjine to ejs
app.set('view engine', 'ejs');

const bodyParser = require("body-parser");

const cwd = __dirname;
const port = 3000;


app.get("/", (req, res) => {
    
    var today = new Date();
    var currentDay = today.getDate()
    
    if ([6, 7].includes(today)) {
        res.write("<h1>Yay, its the weekend</h1>");
    } else {
        res.sendFile(`${cwd}/index.html`);
    }
})


app.listen(port, () => console.log(`Listening on port ${port}`));