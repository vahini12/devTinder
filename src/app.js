const express = require("express");
const { adminAuth ,userAuth} = require("./middlewares/auth");
const app = express()

app.get('/getUSerData',(req,res)=>{

    throw new Error("Data is not present")
})

app.use('/', (err,req,res,next)=> {
    if(err){
        res.status(500).send("Some error is thrown from middleware")
    }
})



app.listen(3000, ()=>{
    console.log("server is running successfully on port 3000")
})


