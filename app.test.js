// app.test.js
const request = require('supertest');
const app = require('./app');

describe('Calculator API', () => {
    test('POST /add should return the sum of two numbers', async () => {
        const response = await request(app)
            .post('/add')
            .send({ a: 1, b: 2 });
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(3);
    });

    test('POST /subtract should return the difference of two numbers', async () => {
        const response = await request(app)
            .post('/subtract')
            .send({ a: 5, b: 3 });
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(2);
    });

    test('POST /multiply should return the product of two numbers', async () => {
        const response = await request(app)
            .post('/multiply')
            .send({ a: 3, b: 4 });
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(12);
    });

    test('POST /divide should return the quotient of two numbers', async () => {
        const response = await request(app)
            .post('/divide')
            .send({ a: 8, b: 2 });
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(4);
    });

    test('POST /divide should return an error when dividing by zero', async () => {
        const response = await request(app)
            .post('/divide')
            .send({ a: 1, b: 0 });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Division by zero is not allowed');
    });
});
