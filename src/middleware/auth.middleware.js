const createError = require("http-errors");
const kodersUsecase = require("../usecases/koder.usecase");
const jwt = require("../lib/jwt"); //para verificar token

async function auth (req, res, next){
    try {
        const token = req.headers.authorization; // lo que retorna es el token
        if (!token){
            throw createError(401, 'JWT is required'); // de no estar el token exigir 
        }
        //verificacion de token
        const payload= jwt.verify(token);
        const user = await kodersUsecase.getById(payload.id);//usuario optenido por medio del id asignado al token
        req.user = user; // permite acceso al usuario 
        next();
        
    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            error: error.message,
        })
    }

}

module.exports = auth; 

