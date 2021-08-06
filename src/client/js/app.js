/* GLOBAL VARIABLES */

let city;
let spinner = document.getElementById('spinner');

/* /GLOBAL VARIABLES */

/* SERVER REQUESTS HANDLERS */

import {
    postData,
    getData
} from "../js/handlers/serverRequestsHandler";

/* /SERVER REQUESTS HANDLERS */

/* APIS HANDLERS */

/* GEONAMES API */

import { getGeonamesData } from "../js/handlers/geonamesApiHandler";

/* /GEONAMES API */

/* WEATHERBIT API */

import { getWeatherbitData } from "../js/handlers/weatherbitApiHandler";

/* /WEATHERBIT API */

/* COUNTRY API */

import { getCountryData } from "../js/handlers/countryApiHandler";

/* /COUNTRY API */

/* PIXABAY API */

import { getPixabayData } from "../js/handlers/pixabayApiHandler";

/* /PIXABAY API */

/* /APIS HANDLERS */

/* DOM HANDLERS */

// CREATE TRIP
export const createTrip = () => {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const duration = datesDiff(startDate, endDate);
    city = document.getElementById('city').value;
    spinner.innerHTML = `<div class="d-flex justify-content-center">
                            <div class="spinner-border text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>`;

    getGeonamesData(city)
        .then((geonamesData) => {
            const geonamesApiData = geonamesData.geonames[0];
            postData('/geonames', geonamesApiData)
                .then(() => {
                    getData('/geonames')
                        .then((geonamesData) => {
                            getWeatherbitData(geonamesData)
                                .then((weatherbitData) => {
                                    const weatherbitApiData = weatherbitData.data;
                                    postData('/weatherbit', weatherbitApiData)
                                        .then(() => {
                                            getData('/geonames')
                                                .then((geonamesData) => {
                                                    getCountryData(geonamesData)
                                                        .then((countryData) => {
                                                            const countryApiData = countryData[0];
                                                            postData('/country', countryApiData)
                                                                .then(() => {
                                                                    getPixabayData(city)
                                                                        .then((pixabayData) => {
                                                                            const pixabayApiData = pixabayData;
                                                                            postData('/pixabay', pixabayApiData)
                                                                                .then(() => {
                                                                                    updateUI(duration, startDate);
                                                                                });
                                                                        });
                                                                });
                                                        });
                                                });
                                        });
                                });
                        });
                });
        });
}

// UPDATE UI FUNCTION
export const updateUI = (duration, startDate) => {

    // REMOVE SPINNER
    spinner.innerHTML = '';

    // COUNTDOWN
    const countdown = getCountdown(startDate);
    const count = `<h4 style="display: inline-block">⏳ Countdown: <span style="color: #F00;">${countdown} day to leave!</span></h4>`;
    document.getElementById('countdown').innerHTML = count;

    // COUNTRY INFORMATION
    getData('/country')
        .then((data) => {
            const countryInfo = `<h4>🌍 Country's information:</h4>
                                <p class="pl-4 pb-0">
                                    You are going to visit <strong>${data.name}</strong>, its capital city is <strong>${data.capital}</strong>. 
                                    <br>
                                    <strong>${data.name}</strong> is located in <strong>${data.region}</strong>, and the population is estimated at <strong>${data.population}</strong> people.
                                    <br>
                                    The main language there is <strong>${data.language}</strong>, and the main currency is <strong>${data.currency}</strong> but you can use dollars($) everywhere.
                                    <br>
                                    The timezone is <strong>${data.timezone}</strong>.
                                </p>`;
            document.getElementById('countryInfo').innerHTML = countryInfo;
        });

    // TRIP DURATION
    const period = `<h4>📅 Trip's Duration: <span style="color: #F00;">${duration} day</span></h4>
                    <p class="pl-4 pb-0">Have a nice trip 💗</p>`;
    document.getElementById('duration').innerHTML = period;

    // WEATHER FORECAST
    getData('/weatherbit')
        .then((data) => {
            let from = new Date(startDate).getTime();
            let counter = 1;
            let temp = `<table class="table table-hover text-center border border-primary" style="border-radius: 10px">
                            <thead>
                                <tr class="table-primary">
                                    <th colspan="2">🌡️ Weather Forecast</th>
                                </tr>
                                <tr class="table-warning">
                                    <th scope="col">Day</th>
                                    <th scope="col">Temperature</th>
                                </tr>
                            </thead>
                            <tbody>`;

            for (let x = 0; x < data.length; x++) {

                let to = new Date(data[x].datetime).getTime();

                if (to >= from) {
                    temp += `<tr class="table-success">
                                <th scope="row">${counter}</th>
                                <td>${data[x].temp} ℃</td>
                            </tr>`;
                    if (counter == 4) {
                        temp += ` </tbody>
                                </table>`;
                        break;
                    }
                    counter++;
                }
            }
            document.getElementById('temperature').innerHTML = temp;
        });

    // CITY'S PHOTO
    getData('/pixabay')
        .then((data) => {
            const photo = `<img src="${data.hits[0].webformatURL}" class="card-img-top img-fluid rounded" alt="${city}">
                            <h5 class="card-title text-center m-2">${city}</h5>`;
            document.getElementById('photo').innerHTML = photo;
        })
        .catch((error) => {
            console.log(error);
            const photo = `<div class="alert alert-danger" role="alert">🚫 No Available Images!</div>`;
            document.getElementById('photo').innerHTML = photo;
        });
}

/* /DOM HANDLERS */

/* HELPER-FUNCTIONS */

import {
    getCountdown,
    datesDiff
} from "../js/handlers/helperFunctionsHandler";

/* /HELPER-FUNCTIONS */

// EXPORT FUNCTIONS
export {
    postData,
    getData,
    getGeonamesData,
    getWeatherbitData,
    getCountryData,
    getPixabayData,
    getCountdown,
    datesDiff
}