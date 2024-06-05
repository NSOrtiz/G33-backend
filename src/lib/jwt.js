const jsonwebtoken = require ('jsonwebtoken');
//palabra secreta con la que se verifica token 
const {JWT_SECRET} = process.env;


//expedir token 
function sign(payload){
    return jsonwebtoken.sign(payload, JWT_SECRET, {expiresIn: '1d'}); // expres tiempo de vida de token w = weak d = day
}

//token valido
function verify(token){
    return jsonwebtoken.verify(token, JWT_SECRET);
}

//en caso de no ser valido try-catch

module.exports = {
    verify,
    sign
}