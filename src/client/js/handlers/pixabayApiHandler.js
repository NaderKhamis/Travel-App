// URL AND KEY VARIABLES
const pixabayURL = 'https://pixabay.com/api/?&image_type=photo&q=';
const pixabayKey = '&key=22743063-d2ba0fa2c456970e67ce0a0db';

// GET PIXABAY API REQUEST
export const getPixabayData = async(city) => {

    let trimmedCity = city.split(' ');
    trimmedCity = trimmedCity.join('+');

    const request = await fetch(pixabayURL + trimmedCity + pixabayKey);

    try {
        const newData = await request.json();
        return newData;

    } catch (error) {
        console.log(error);
    }
}