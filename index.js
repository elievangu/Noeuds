const express = require("express");
const axios = require("axios");

const entierAleatoire = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomPort = entierAleatoire(5000, 6000);
const app = express();

let nom = process.argv[2]
app.get("/", (req, res) => {
  res.send(`${nom} est bien là`);
  console.log("On vient de recevoir une demande");
});

app.listen(
  randomPort,
  console.log(`Noeud ${nom} lancé sur le port ${randomPort}`)
);

for (let i = 5000; i <= 6000 && i !== randomPort; i++) {
  axios.get(`http://127.0.0.1:${i}`)
    .then(r => {
        console.log(r.data);
    })
    .catch(() => {})
}
