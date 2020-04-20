// require packages
const express = require("express");
const bodyParser = require("body-parser");

// initialize app
const app = express();
app.use(bodyParser.urlencoded( { extended: true} ));

// send bmi html file at root route
const currentDir = __dirname;
app.get("/", (req, res) => res.sendFile( `${currentDir}/bmiCalculator.html`));

// post to calculate BMI
app.post("/bmiCalculator", (req, res) => {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = Math.round(weight / (Math.pow(height, 2)));
    
    if (bmi > 24.9) {
        end = ", so you are overweight";
    } else if (bmi > 18.5) {
        end = ", so you are normal weight";
    } else {
        end = ", so you are underweight";
    }

    msg = `Your BMI is ${bmi}${end}.`
    
    res.send(msg);
})

// port
app.listen(2000);