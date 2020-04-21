// load express
const express = require("express");
const app = express();
// port and absolute path
const port = 3000;
const cwd = __dirname;

// must pass absolute path to the server
app.get("/", (req, res) => res.sendFile(`${cwd}/index.html`));

app.listen(port, function() {
    console.log(`server is running on port ${port}`);
});