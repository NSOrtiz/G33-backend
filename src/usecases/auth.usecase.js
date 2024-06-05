const createError = require('http-errors')

const Koders = require('../models/koders.model') // para consultar modelo y lista de koders
const encrypt = require('../lib/encrypt')
const jwt = require('../lib/jwt');



async function login (email, password) {
    const koder = await Koders.findOne({email: email})// verificacion de existencia de email

    if(!koder){ // si no lo encuentra 
        throw createError(401, 'Invalid data')
    }

    const isPasswordValid = await encrypt.compare(password, koder.password)// verificacion de contraseña

    if(!isPasswordValid){
        throw createError(401, 'Invalid data')
    }

    const token = jwt.sign({id: koder._id})// payload 
    //el pauload contiene propiedad id 
    return token;

}

module.exports = {
    login,
}