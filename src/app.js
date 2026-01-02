const express = require("express");
const { adminAuth ,userAuth} = require("./middlewares/auth");
const app = express()




app.use("/admin",adminAuth)


app.get("/admin/getAllData",(req,res)=>{
   
    res.send("Sent Data successfully")
    
 })

 
app.get("/admin/deleteData",(req,res)=>{

    res.send("data deleted successfully")
    
 })

 app.get("/user/login", (req,res)=>{

    res.send("user logged  successfully")
    
 })
 
 app.get("/user",userAuth, (req,res)=>{

    res.send("user data send  successfully")
    
 })



app.listen(3000, ()=>{
    console.log("server is running successfully on port 3000")
})


