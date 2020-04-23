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
const apiKey = '152a12d96de0c93750eca973d5ac7f71-us8'

// audience list id
// 64468bb378

app.get("/", (req, res) => res.sendFile(`${cwd}/signup.html`));

app.post("/", (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.emailAddress;

    // what we want to send to mailchimp
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
    // send json data as string with mailchimp api (what we want to send to mailchip)
    const strData = JSON.stringify(data);

    // main mailchimp api url to post to  (replace X with number at end of api key):
    const mainURL= 'https://us8.api.mailchimp.com/3.0/lists/';
    // need to tell mailchimp which list you want to subscribe members into (can have multiple lists)
    const audienceListID = '64468bb378' // the main audience list found -> https://us8.admin.mailchimp.com/lists/settings?id=818221
    const fullAudienceURL = `${mainURL}${audienceListID}`;

    // options we need to pass
    const options = {
        method: 'POST',
        auth: `Nick:${apiKey}`  // can be any string : api key (https://mailchimp.com/developer/guides/get-started-with-mailchimp-api-3/)
    } // remember, the region in the api key (us8) has to match region in url

    // make request. must be saved as a constant and used later to make request
    const request = https.request(url, options, (response) => {

        response.on("data", (data) => {
            console.log(data);
        });
    });
    // use request to send data to mailchimp server
    request.write(strData);

});

app.listen(port, () => console.log("App listening on port 3000."));