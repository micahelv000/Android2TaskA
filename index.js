document.getElementById('fetchButton').addEventListener('click', async()=>{

    try {
    const response = await fetch('http://localhost:3001/countries');
    if(!response.ok){
        throw new Error('Something went wrong');
    }
    const data = await response.json();
    const names = data.map(country => country.name).join("\n");
    const flags = data.map(country => country.flag).join("\n");
    const natives = data.map(country => country.nativeName).join("\n");

    const arrName = names.split("\n");
    const arrflags = flags.split("\n");
    const arrnatives = natives.split("\n");

    const arrCoutry = []
    for(let i = 0; i <arrName.length; i++) {
        arrCoutry.push(new CountryClass(arrName[i],arrflags[i],arrnatives[i]));
        }
    

    arrCoutry.forEach(url => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add('card');
        cardContainer.style.margin='10%';

        const imgElement = document.createElement('img')
        imgElement.src = url.flag;
        imgElement.alt = 'SVG img'
        imgElement.width = 100;
        imgElement.height = 100;

        const h3name = document.createElement('h3')
        h3name.innerText = url.name;

        const h3native = document.createElement('h3')
        h3native.innerText = url.name;

        cardContainer.appendChild(imgElement)
        cardContainer.appendChild(h3name)
        cardContainer.appendChild(h3native)

        document.getElementById('svgContainer').appendChild(cardContainer)
    })
    } catch (error) {
        console.log('fetcher error: ' + error);
    }
    
});