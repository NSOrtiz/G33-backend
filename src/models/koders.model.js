const mongoose = require("mongoose")

const modelName = 'koders'
const schema = new mongoose.Schema({
    firstname: { //reglas de ese atributo
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    lastName: {
        type: String,
        required: false,
        maxLength: 100,
    },
    email: {
        type: String,
        require: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, //patron a seguir
    },
    password:{
        type: String,
        require: true,
    },
    birthday: {
        type: Date,
        required: false,
    },
    /*generation: {
        type: Number,
        min: 1,
        max: 100,
    },*/
    createdAt: { // fecha de creacion de documento
        type: Date,
        default: Date.now,

    },


})
 
module.exports = mongoose.model(modelName, schema);;