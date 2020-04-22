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

// mailchimp API key
// b70f449671879950e090ab6eb6287e01-us8

// audience list id
// 64468bb378

app.get("/", (req, res) => res.sendFile(`${cwd}/signup.html`));

app.post("/", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.emailAddress;

    const data = {
        // using the api
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    // send json data as string with mailchimp api
    const strData = JSON.stringify(data);

    // main mailchimp api url to post to:
    const mainURL= 'https://usX.api.mailchimp.com/3.0/lists/';
    // need to tell mailchimp which list you want to subscribe members into (can have multiple lists)
    const audienceListID = '64468bb378' // the main audience list found -> https://us8.admin.mailchimp.com/lists/settings?id=818221
    const fullAudienceURL = `${mainURL}${audienceListID}`;

    https.request(url. options, (response) => {

    });

    console.log(firstName);
    console.log(lastName);
    console.log(email);

});

app.listen(port, () => console.log("App listening on port 3000."));