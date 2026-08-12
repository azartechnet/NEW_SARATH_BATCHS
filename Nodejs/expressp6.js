const exp=require('express')
const app=exp()
const PORT=3000

const r1=exp.Router()
const r2=exp.Router()
const r3=exp.Router()

r1.get("/user",function(req,res){
    res.send("User Route")
})
r2.get("/admin",function(req,res){
    res.send("admin Route")
})
r1.get("/register",function(req,res){
    res.send("register Route")
})
app.use("/",r1);
app.use("/",r2);
app.use("/",r3);
app.listen(PORT,()=>{
    console.log("Server is Running..")
})