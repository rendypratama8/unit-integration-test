// app.js
const express = require('express');
const Calculator = require('./calculator');
const cors = require('cors');


const app = express();
const calculator = new Calculator();

app.use(cors());
app.use(express.json());

app.post('/add', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.add(a, b);
    res.json({ result });
});

app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.subtract(a, b);
    res.json({ result });
});

app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.multiply(a, b);
    res.json({ result });
});

app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    try {
        const result = calculator.divide(a, b);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = app;
