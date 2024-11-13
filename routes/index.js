var express = require('express');
var router = express.Router();

const API_KEY = "237bdfc836d84bbbbcd9180a45e30dcf"

router.get('/movies', (req,res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(movies => {
        res.json({ movies : movies.results });
    })
    .catch(error => {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
    });
})

module.exports = router;
