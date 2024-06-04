const express = require("express");
const kodersRouter = require('./routes/koders.router')
const mentorsRouter = require('./routes/mentors.router')

const app = express();


app.use(express.json()); //middleware

app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)

app.get("/", (req, res)=>{
    res.json({
        message: "APIv1"
    });
});

module.exports=app;