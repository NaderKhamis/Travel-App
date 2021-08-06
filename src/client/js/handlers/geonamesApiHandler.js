// URL AND USERNAME VARIABLES
const geonamesURL = 'http://api.geonames.org/searchJSON?q=';
const geonamesUser = '&username=naderkhamis';

// GET GEONAMES API REQUEST
export const getGeonamesData = async(city) => {

    const request = await fetch(geonamesURL + city + geonamesUser);

    try {
        const newData = await request.json();
        return newData;

    } catch (error) {
        console.log(error);
    }
}