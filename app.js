const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log(`Request recieved!\n\n${req}`);

    res.send('Hello World, I am A Little Help Here!');
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});