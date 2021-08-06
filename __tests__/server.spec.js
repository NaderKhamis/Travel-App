import { app } from '../src/server/server';
const request = require('supertest')
const testObj = { test: 'test' }

describe('Test Post Endpoints', () => {
    test('Test post request on geonames route', async() => {
        const res = await request(app).
        post('/geonames')
            .send({ testObj })
        expect(res.statusCode).toEqual(200);
    })

    test('Test post request on weatherbit route', async() => {
        const res = await request(app).
        post('/weatherbit')
            .send({ testObj })
        expect(res.statusCode).toEqual(200);
    })

    test('test post request on pixabay route', async() => {
        const res = await request(app).
        post('/pixabay')
            .send({ testObj })
        expect(res.statusCode).toEqual(200);
    })

})

describe("Test Get Endpoints", () => {
    test("'Test get request from geonames route", async() => {
        const response = await request(app).get("/geonames");
        expect(response.statusCode).toBe(200);
    });

    test("Test get request from weatherbit route", async() => {
        const response = await request(app).get("/weatherbit");
        expect(response.statusCode).toBe(200);
    });

    test("Test get request from pixabay route", async() => {
        const response = await request(app).get("/pixabay");
        expect(response.statusCode).toBe(200);
    });

    test("Test get request from country route", async() => {
        const response = await request(app).get("/country");
        expect(response.statusCode).toBe(200);
    });
});