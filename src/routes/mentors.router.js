const express = require("express")
const mentorUsecase = require("../usecases/mentor.usecase")

const routerM = express.Router();

//GET /mentors
routerM.get("/", async (req, res)=>{
    try {
        const mentors = await mentorUsecase.getAllMentor()
        res.json({
            success: true,
            data: { mentors },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

//POST /mentors
routerM.post("/", async (req, res)=>{
    try {
        const mentorCreate = await mentorUsecase.createMentor(req.body);
        res.json({
            success: true,
            data: {mentor: mentorCreate}
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

//GET /mentor/:id
routerM.get('/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const mentor = await mentorUsecase.getByIdMentor(id);
        res.json({
            success: true,
            data: { mentor }
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

//DELETE /mentors:id
routerM.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const mentorDelete = await mentorUsecase.deleteByIdMentor(id);
        res.json({
            success:true,
            data:{mentor: mentorDelete}
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

//Patch /mentor/:id
routerM.patch('/:id', async(req, res)=>{
    try {
        const {id}=req.params
        const mentorUpdated = await mentorUsecase.updateByIdMentor(id, req.body);
        res.json({
            success:true,
            data:{ mentor: mentorUpdated}
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

module.exports = routerM;