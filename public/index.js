document.getElementById('fetchButton').addEventListener('click', async () => {

    try {
        const response = await fetch('http://localhost:3001/pokemon');
        if (!response.ok) {
            console.log('Something went wrong');
            return;
        }
        const data = await response.json();
        const names = data.map(country => country.name).join("\n");
        const photos = data.map(country => country.photo).join("\n");

        const arrName = names.split("\n");
        const pokemonImages = photos.split("\n");

        const pokemonList = []
        for (let i = 0; i < arrName.length; i++) {
            pokemonList.push(new PokemonClass(arrName[i], pokemonImages[i]));
        }


        pokemonList.forEach(url => {
            const cardContainer = document.createElement("div");
            cardContainer.classList.add('card');
            cardContainer.style.margin = '10%';

            const imgElement = document.createElement('img')
            imgElement.src = url.photo;
            imgElement.alt = 'SVG img'
            imgElement.width = 100;
            imgElement.height = 100;

            const h3name = document.createElement('h3')
            h3name.innerText = url.name;

            cardContainer.appendChild(imgElement)
            cardContainer.appendChild(h3name)
            document.getElementById('svgContainer').appendChild(cardContainer)
        })
    } catch (error) {
        console.log('fetcher error: ' + error);
    }

});