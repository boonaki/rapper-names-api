const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const PORT = 8000

const rappers = {
    'j cole' : {
        'age' : 37,
        'birthname' : 'Jermaine Lamarr Cole',
        'birthLocation' : 'Frankfurt, Germany'
    },
    'denzel curry' : {
        'age' : 27,
        'birthname' : 'Denzel Rae Don Curry',
        'birthLocation' : 'Carol City, Florida'
    },
    'unknown' : {
        'age' : 0,
        'birthname' : 'unknown',
        'birthLocation' : 'unknown'
    },

}

app.get('/', (req, res)=> {
    res.sendFile( __dirname + '/index.html' )
})

app.get('/api/:name', (req, res) => {
    let rappername = req.params.name.toLowerCase()
    //if the name given is inside of the the object, send the object
    if(rappers[rappername]){
        //because of spaces inside of rappers obj, we must use brackets to evaluate
        res.json(rappers[rappername])
    //else, send the unknown obj
    }else{
        res.json(rappers.unknown)
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})