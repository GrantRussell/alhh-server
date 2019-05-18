const express = require('express');
const helpsController = require('./helpsController');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    if (req.url != '/favicon.ico') {
        console.log((new Date).toLocaleTimeString() + `: ${req.url}`);
    }
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('Use endpoint \"getHelps\" to retrieve data.');
});

app.get('/getHelps', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const databaseResponse = database.getDatabaseData();
    
    res.status(200).send(JSON.stringify(databaseResponse));
});

app.get('/getTest', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    helpsController.index(req, res);
});

app.listen(PORT, () => {
    console.log(`\nListening on port ${PORT}...\n`);
});