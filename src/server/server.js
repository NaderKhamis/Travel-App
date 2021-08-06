// Setup empty JS object to act as endpoint for all routes
let geonamesData = {};
let weatherbitData = {};
let pixabayData = {};
let countryData = {};

// Require Express to run server and routes
const express = require('express');

// Dependencies
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

/* GEONAMES REQUESTS */

//GET Route
app.get('/geonames', (req, res) => {
    res.send(geonamesData);
});

//POST Route
app.post('/geonames', (req, res) => {
    const newData = req.body;
    const newEntry = {
        country: newData.countryName,
        latitude: newData.lat,
        longitude: newData.lng
    }
    geonamesData = {...newEntry };
    res.send(geonamesData)
});

/* /GEONAMES REQUESTS */

/* WEATHERBIT REQUESTS */

//GET Route
app.get('/weatherbit', (req, res) => {

    res.send(weatherbitData);
});

//POST Route
app.post('/weatherbit', (req, res) => {
    const newData = req.body;
    weatherbitData = {...newData, length: 16 };
    res.send(weatherbitData)
});

/* /WEATHERBIT REQUESTS */

/* PIXABAY REQUESTS */

//GET Route
app.get('/pixabay', (req, res) => {

    res.send(pixabayData);
});

//POST Route
app.post('/pixabay', (req, res) => {
    const newData = req.body;
    pixabayData = {...newData };
    res.send(pixabayData)
});

/* /PIXABAY REQUESTS */

/* COUNTRY API REQUESTS */

//GET Route
app.get('/country', (req, res) => {

    res.send(countryData);
});

//POST Route
app.post('/country', (req, res) => {
    const newData = req.body;
    const newEntry = {
        name: newData.name,
        capital: newData.capital,
        currency: newData.currencies[0].code,
        language: newData.languages[0].name,
        population: newData.population,
        region: newData.region,
        timezone: newData.timezones[0]
    }
    countryData = {...newEntry };
    res.send(countryData)
});

/* /COUNTRY API REQUESTS */

// Setup Server
const port = 8080;

const server = app.listen(port, listening);

function listening() {
    console.log(`server is running on localhost:${port}`);
};

// EXPORTS APP 
exports.app = app;