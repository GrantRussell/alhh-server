const express = require('express');
const database = require('./database');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Use endpoint \"getHelps\" to retrieve data.');
});

app.get('/getHelps', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const databaseResponse = database.getDatabaseData();
    
    res.status(200).send(JSON.stringify(databaseResponse));
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});