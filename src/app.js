const express = require("express");
const app = express()




app.get('/user',(req,res)=>{
    console.log("passing params through url", req.query)
    res.send({firstname :"Vahini", lastname : "Manku"})
})

app.get('/user/:userId/:email',(req,res)=>{
    console.log("passing params dynamically", req.params)
    res.send({firstname :"Vahini", lastname : "Manku"})
})


app.listen(3000, ()=>{
    console.log("server is running successfully on port 3000")
})


