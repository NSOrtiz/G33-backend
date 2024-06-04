const Mentors = require("../models/mentors.model")

async function createMentor(mentorData){
    const newMentor = await Mentors.create(mentorData);
    return newMentor
}

async function getAllMentor(){
    const allMentors = await Mentors.find();
    return allMentors;
}

async function getByIdMentor(id){
    const mentor = await Mentors.findById(id);
    return mentor;
}

async function deleteByIdMentor(id){
    const mentorDelete = await Mentors.findByIdAndDelete(id);
    return mentorDelete;
}

async function updateByIdMentor(id, newMentorData){
    const updateMentor = await Mentors.findByIdAndUpdate(id, newMentorData, {new: true});
    return updateMentor;
}

module.exports={
    createMentor,
    getAllMentor,
    getByIdMentor,
    deleteByIdMentor,
    updateByIdMentor,
};