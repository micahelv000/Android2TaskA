const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/countries',async (req, res) =>{
    try{
    const apiRes = await fetch('https://restcountries.com/v2/all?fields=name,flag,nativeName')
    if (!apiRes.ok){
        throw new Error(`Http error status: ${apiRes.status}`);
    }
    const data = await apiRes.json();
    res.json(data);
}catch(err){
    console.error('Fetch error: ');
    res.status(500).send('internal server error');

}
});

app.get('/flags',async (req, res) =>{

})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})