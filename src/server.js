const cors = require('cors')
const express = require("express");
const kodersRouter = require('./routes/koders.router')
const mentorsRouter = require('./routes/mentors.router')
const authRouter = require('./routes/auth.router')
const generationRouter = require('./routes/generations.router')

const app = express();

app.use(cors());
app.use(express.json()); //middleware

app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)
app.use('/generations', generationRouter)

app.get("/", (req, res)=>{
    res.json({
        message: "APIv1"
    });
});

module.exports=app;