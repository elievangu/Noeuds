const express = require('express');

const entierAleatoire = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomPort = entierAleatoire(5000, 6000);
const app = express();

app.get('/', (req, res) => {
    res.send(`Noeud Alice lancé sur le port ${randomPort}`)
})

app.listen(randomPort, console.log(`Noeud Alice lancé sur le port ${randomPort}`))

