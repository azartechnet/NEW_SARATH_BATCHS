const exp=require('express')
const app=exp()
app.use(exp.json())
app.post("/",(req,res)=>{
    const {name,age}=req.body;
    console.log(name,age)
    res.send("Data Recevied")
}).listen(3000)
console.log("Server Running..")