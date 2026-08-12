//delayed response
const e1=require('express')
const app=e1()

app.get("/",(req,res)=>{
    setTimeout(()=>{
        res.send("Mohamed is good")
    },5000)
}).listen(3000)
console.log("Server is Running..")