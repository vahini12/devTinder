const express = require("express");
const app = express()




app.get('/user',(req,res)=>{
    res.send({firstname :"Vahini", lastname : "Manku"})
})

app.post('/user',(req,res)=>{
    res.send("USer is saved successfully")
})
app.delete('/user',(req,res)=>{
    res.send("User is deleted successfully")
})

app.listen(3000, ()=>{
    console.log("server is running successfully on port 3000")
})


