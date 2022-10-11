const express = require('express')

const pokemon = require('./models/pokemon')

const Pokemon = require('./models/PokeModel')



require('dotenv').config()
const mongoose = require('mongoose')
const methodOverride = require('method-override')


const app = express()
const PORT = 3000

// ^ App Settings - Setting app to use express view engine using jsx

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ^ Needed whenever setting up a new form - to read data from post request
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log('I run for all routes')
    // ^
    next() // ^ Tells Express to go to next middleware or send response 

})


// ^ Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
// ^ Pokemon Index route
app.get('/pokemon', (req, res) => {
    // res.send(pokemon) // & this sends the data as json to the browser
    // res.render('./Index', { pokemon: pokemon})
    Pokemon.find({}, (error, pokemonFromDB) => {
        if (error) {
            console.log(error)
        }
        console.log(pokemonFromDB)
            res.render('Index.jsx', {pokemon: pokemonFromDB})
    })
})

// ^ Render New Pokemon Form
app.get('/pokemon/new', (req, res) => {
    res.render('New.jsx')
})

// ^ Create pokemon Route
app.post('/pokemon/', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        console.log(createdPokemon)
        res.redirect('/pokemon')
    })
})


// // ^ Individual Pokemon Show Route
// app.get('/pokemon/:id', (req, res) => {
//     // const { id } = req.params
//     res.render('Show.jsx', {
//         pokemon: pokemon[req.params.id]
//     })
// })

// ^ Individual Pokemon Show Route From Database
app.get('/pokemon/:id', (req, res) => {

    const { id } = req.params
    Pokemon.findById(id, (error, foundPokemon) => {
        if (error) {
            console.log(error)
        }
        res.render('Show.jsx', {
            pokemon: foundPokemon
        })
    })
})




app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    // ^ Below is how you connect to database after connecting to server
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // ^ Below gives confirmation that database is connected
    mongoose.connection.once('open', () => {
        console.log('connected to mongo')
    })
})
