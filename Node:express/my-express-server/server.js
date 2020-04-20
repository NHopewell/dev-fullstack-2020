// load express

// This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” 
// for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

// The example above is actually a working server: Go ahead and click on the URL shown. You’ll get a response, 
// with real-time logs on the page, and any changes you make will be reflected in real time.
const express = require('express');
const app = express(); // binds express to the app varible
const port = 3000;

// dictate what the user sees at the root /  and /example route
// introduced in ES6, short hand '=>' for passing anonmyous function  (SAME AS BELOW)
    // app.get("/", function(request, response) {
    //     request.send(`Hello World on port ${port}!`);
    // });
app.get('/', (req, res) => res.send(`<h1>Hello World on port ${port}!</h1>`)); // example html sent when get request triggered
app.get('/example', (req, res) => res.send(`Hello World AGAIN on port ${port}! for /examples`));
app.get('/about-me', (req, res) => res.send(`blah blah blah...`));

// introduced in ES6, short hand '=>' for passing anonmyous function  (SAME AS BELOW)
    // app.listen(port, function() {
    //     console.log(`Example app listening at http://localhost:${port}`);
    // });
    // see:  https://www.w3schools.com/js/js_arrow_function.asp
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));