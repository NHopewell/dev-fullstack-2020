// standard library package
const https = require('https');

// load express
const express = require("express");
const app = express();

// port and absolute path
const port = 3000;
const cwd = __dirname;

// get request for weather in london (must be in proper format with leading https://)
const getWeatherLondon = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=c7103d4fee410732512023fc101b72e0";

// get weather data and parse json
app.get("/", (req, res) => {
    https.get(getWeatherLondon, (response) => {
        // parse json response
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            // temp and description of weather
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;

            // write the two data strings (remember can only call res.send() once)
            const tempStr = `<h1>The temperature in London is ${temp} degrees celcius.</h1>`;
            const descStr = `<p>Current weather description: ${description}</p>`
            // icon of current weather sent as img
            const icon = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            const iconStr = `<img src='${icon}' alt='current weather icon' height='90' width='90'>`

            // write data and send
            res.write(`${tempStr}`);
            res.write(`${descStr}`);
            res.write(`${iconStr}`);
            res.send()
        })
    // must pass absolute path to the server
    // res.sendFile(`${cwd}/index.html`);
    })
})

app.listen(port, () => console.log(`server is running on port ${port}`));
