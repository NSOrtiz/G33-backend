const Koders = require("../models/koders.model");

// cosas que el usuario puede hacer en el sistema 

async function create(koderData){ // funcion asincrona espera a que se resuleva la promesa.
    // para crear un nuevo docuemnto en base de datos se hace a traves del modelo de mongoose
    const newKoder = await Koders.create(koderData); 
    return newKoder;
};

async function getAll(){
    const allKoders = await Koders.find();
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

