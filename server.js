const express = require('express')

const pokemon = require('./models/pokemon')

const app = express()
const PORT = 3000

// ^ Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
// ^ Pokemon json route
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    
})