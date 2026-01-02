

const adminAuth =(req,res,next)=>{
    console.log("Admin auth is being checked")
    const token = "xyz";
    const isAdminAuthorized = token === "xyz"
    if(!isAdminAuthorized){
     res.send("UnAuthorized")
    }
    else{
     next()
    }
 }

 const userAuth =(req,res,next)=>{
    console.log("user auth is being checked")
    const token = "xyzds";
    const isAdminAuthorized = token === "xyz"
    if(!isAdminAuthorized){
     res.send("UnAuthorized")
    }
    else{
     next()
    }
 }

 module.exports={
    adminAuth,
    userAuth
 }