const express = require('express');
const cors = require('cors');
const {
    join
} = require("node:path");

const app = express();
const PORT = 3001;

app.use(express.static(join(__dirname, 'public')));

app.use(cors());

app.get('/pokemon', async (req, res) => {
    try {
        const apiRes = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if (!apiRes.ok) {
            console.error(`Http error status: ${apiRes.status}`);
            return res.status(500).send('internal server error');
        }

        /** @type {{ results: { name: string, url: string }[] }} */
        const data = await apiRes.json();

        const results = data.results.map(pokemon => {
            return {
                name: pokemon.name,
                photo: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`
            };
        });
        res.json(results);
    } catch (err) {
        console.error('Fetch error: ', err);
        res.status(500).send('internal server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})