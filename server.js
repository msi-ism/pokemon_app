const express = require('express')

const pokemon = require('./models/pokemon')

const app = express()
const PORT = 3000

// ^ App Settings - Setting app to use express view engine using jsx

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// ^ Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
// ^ Pokemon json route
app.get('/pokemon', (req, res) => {
    // res.send(pokemon) // & this sends the data as json to the browser
    res.render('./Index', { pokemon: pokemon})
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    
})