// URL VARIABLE
const countryAPI = 'https://restcountries.eu/rest/v2/name/'

// GET COUNTRY API REQUEST
export const getCountryData = async(countryData) => {

    const country = countryData.country;
    const request = await fetch(countryAPI + country);

    try {
        const newData = await request.json();
        return newData;

    } catch (error) {
        console.log(error);
    }
}