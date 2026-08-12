const exp=require('express')
const app=exp()
const PORT=3000;
app.get("/",(req,res)=>{
    res.send(`<div><h2>welcome to Express js</h2></div>`)
}).listen(PORT)
console.log("Server is Running..")