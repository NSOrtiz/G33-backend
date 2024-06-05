const express = require("express")
const koderUsecase = require("../usecases/koder.usecase");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

// GET /koders
router.get("/", auth, async (req, res)=>{
    try {
        const koders = await koderUsecase.getAll()
        res.json({
            success: true,
            data: { koders }, 
        });

    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
});

// POST / koders
router.post("/", async (req, res)=>{
    try {
        const koderCreate = await koderUsecase.create(req.body);
        res.json({
            success: true,
            data:{koder: koderCreate}
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
})

//GET /koders/:id 
router.get('/:id', auth, async (req, res)=>{
    try {
        //const {id} = req.params //es lo mismo que la linea de abajo 
        const id = req.params.id 
        const koder = await koderUsecase.getById(id);
        res.json({
            success: true,
            data: { koder }, 
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
})

// DELETE /koders/:id
router.delete('/:id', auth, async (req, res)=>{
    try {
        const {id} = req.params; 
        const koderDelete = await koderUsecase.deleteById(id);
        res.json({
            success: true,
            data: { koder: koderDelete}
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        }); 
    }
})

// PATCH /kodemia/:id

router.patch('/:id', auth, async(req, res)=>{
    try {
        const {id} = req.params; 
        const koderUpdated = await koderUsecase.updateById(id, req.body);
        res.json({
            success: true,
            data: { koder: koderUpdated}
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message
        });
    }
})

module.exports = router; 
