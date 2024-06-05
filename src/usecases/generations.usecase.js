const createError = require('http-errors');
const Generations = require('../models/generations.model');

async function createGeneration(generationData){
    const generationFound = await Generations.findOne({number: generationData.number})

    if(generationFound){
        throw createError(409, 'Generation alredy exists')
    }
    const newGeneration = await Generations.create(generationData);
    return newGeneration;
};

async function getAllGenerations(){
    const allGenerations = await Generations.find();
    return allGenerations;
};

async function getByIdGeneration(id){
    const generation = await Generations.findById(id);
    return generation;
}

async function updateByIdGeneration(id, newGenerationData){
    const updateGeneration = await Generations.findByIdAndUpdate(id, newGenerationData, {new:true});
    return updateGeneration
}

async function deleteByIdGeneration(id){
    const deleteGeneration = await Generations.findByIdAndDelete(id);
    return deleteGeneration
}

module.exports = {
    createGeneration,
    getAllGenerations,
    getByIdGeneration,
    updateByIdGeneration,
    deleteByIdGeneration,
};
