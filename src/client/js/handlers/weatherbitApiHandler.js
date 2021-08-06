// URL AND KEY VARIABLES
const weatherbitURL = 'https://api.weatherbit.io/v2.0/forecast/daily';
const weatherbitKey = '&key=052dbd7f82ea4a94bd02bdcdb75552f2';

// GET WEATHERBIT API REQUEST
export const getWeatherbitData = async(geonamesData) => {

    const lat = geonamesData.latitude;
    const lng = geonamesData.longitude;
    const request = await fetch(weatherbitURL + `?&lat=${lat}&lon=${lng}` + weatherbitKey);

    try {
        const newData = await request.json();
        return newData;

    } catch (error) {
        console.log(error);
    }
}