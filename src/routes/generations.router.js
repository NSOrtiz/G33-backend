const express = require('express');
const generationUsecase = require('../usecases/generations.usecase');

const router = express.Router();

router.get("/", async(req, res)=>{
    try {
        const generations = await generationUsecase.getAllGenerations();
        res.json({
            success: true,
            data: { generations }
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

router.post("/", async(req, res)=>{
    try {
        const generationsCreate = await generationUsecase.createGeneration(req.body);
        res.json({
            success:true,
            data:{generations: generationsCreate}
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

router.get("/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const generation = await generationUsecase.getByIdGeneration(id);
        res.json({
            success: true,
            data: { generation },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

router.delete("/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const generationDelete = await generationUsecase.deleteByIdGeneration(id);
        res.json({
            success: true,
            data: { generations: generationDelete}
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

router.patch("/:id", async(req, res)=>{
    try {
        const {id}= req.params;
        const generationUpdate = await generationUsecase.updateByIdGeneration(id, req.body);
        res.json({
            success:true,
            data: {generations: generationUpdate}
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router; 