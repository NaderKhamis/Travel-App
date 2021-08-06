// IMPORT FUNCTIONS FROM APP
import {
    postData,
    getData,
    getGeonamesData,
    getWeatherbitData,
    getCountryData,
    getPixabayData,
    createTrip,
    updateUI,
    getCountdown,
    datesDiff
} from '../client/js/app';

// IMPORT MAIN STYLE FILE
import '../client/styles/style.scss';

// IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CREATE TRIP EVENT LISTENER
const create = document.getElementById('create');
create.addEventListener('click', createTrip);

// EXPORT FUNCTIONS
export {
    postData,
    getData,
    getGeonamesData,
    getWeatherbitData,
    getCountryData,
    getPixabayData,
    createTrip,
    updateUI,
    getCountdown,
    datesDiff
}