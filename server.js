const express = require('express')
const app = express()
const PORT = 8000

const cars = {
    'chiron sport':{
        'year': 2023,
        'color': 'Inferno Red',
        'countryOfOrigin': 'Italy'
    },
    'porsche911':{
        'year': 2023,
        'color': 'Savge Silver',
        'countryOfOrigin': 'Germany'
    },
    'whoopty':{
        'year': 2023,
        'color': 'Whoopty',
        'countryOfOrigin': 'WhooptyVille'
    },
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:carName', (request, response) => {
    const carsName = request.params.carName.toLowerCase()
    if(cars[carsName]) {
        response.json(cars[carsName])
    }else{
        response.json(cars['whoopty'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Go get it!`)
})