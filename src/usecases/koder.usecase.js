const createError = require("http-errors"); //imporat libreria http-errors
const encrypt = require("../lib/encrypt"); // importacion de libreria  
const Koders = require("../models/koders.model");

// cosas que el usuario puede hacer en el sistema 

async function create(koderData){ // funcion asincrona espera a que se resuleva la promesa.
    // para crear un nuevo docuemnto en base de datos se hace a traves del modelo de mongoose

    // validacion de existencia de nuevo koder.
    //FindOne: regresa solamente el primier elemento que cumpla con el query, (solo regresa uno )
    const koderFound = await Koders.findOne({email: koderData.email}) // busca por medio del correo electronico 
    if(koderFound){ // si lo encuentra lanza error y para programa de no encontrarlo continua
        //throw new Error("Email alredy in use"); // arroja error segun direccion de koders.router.js en fn create
        //extension de error, usa libreria, http-errors
        throw createError (409, 'Email alredy in use')
    }
    //encriptacion 
    const password = await encrypt.encrypt(koderData.password); // ya que encrypt regresa promesa

    koderData.password = password; // remplazo de contraseña ya encriptada
    // resumido: koderData.password = await encrypt.encrypt(koderData.password);
    //procede a crear koder.
    const newKoder = await Koders.create(koderData);
    return newKoder;
};

async function getAll(){
    const allKoders = await Koders.find(); // find regresa arreglo de documentos 
    return allKoders;
};

async function getById(id){
    const koder = await Koders.findById(id);
    return koder;
}

async function deleteById(id){
    const koderDelete = await Koders.findByIdAndDelete(id);
    return koderDelete;
}

async function updateById(id, newKoderData){
    const updateKoder = await Koders.findByIdAndUpdate(id, newKoderData, {new: true});
    return updateKoder; 
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
};

