const mongoose = require('mongoose')

const pokeSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true 
    },
    type: {
        type: String, 
        required: true
    },
    img: {
        type: String,
        required: false
    }
})

const Pokemon = mongoose.model('Pokemon', pokeSchema)

module.exports = Pokemon