import {
    getGeonamesData,
    getWeatherbitData,
    getCountryData,
    getPixabayData,
    createTrip,
    updateUI,
    getCountdown,
    datesDiff
} from '../src/client/js/app';

describe("Test geonames Api functionality", () => {
    test("Test the getGeonamesData() function", () => {
        expect(getGeonamesData).toBeDefined();
    });
});

describe("Test weaherbit Api functionality", () => {
    test("Test the getWeatherbitData() function", () => {
        expect(getWeatherbitData).toBeDefined();
    });
});

describe("Test country Api functionality", () => {
    test("Test the getCountryData() function", () => {
        expect(getCountryData).toBeDefined();
    });
});

describe("Test pixabay Api functionality", () => {
    test("Test the getPixabayData() function", () => {
        expect(getPixabayData).toBeDefined();
    });
});

describe("Test createTrip functionality", () => {
    test("Test the createTrip() function", () => {
        expect(createTrip).toBeDefined();
    });
});

describe("Test updateUI functionality", () => {
    test("Test the updateUI() function", () => {
        expect(updateUI).toBeDefined();
    });
});

describe("Test getCountdown functionality", () => {
    test("Test the getCountdown() function", () => {
        expect(getCountdown).toBeDefined();
    });
});

describe("Test datesDiff functionality", () => {
    test("Test the datesDiff() function", () => {
        expect(datesDiff).toBeDefined();
    });
});