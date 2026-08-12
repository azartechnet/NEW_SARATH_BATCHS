const express=require('express')
const axios=require('axios')
const app=express()
const PORT=3000
//Middleware
app.use(express.json())

//get user details
app.get("/user",async(req,res)=>{
    try
    {
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        res.json(response.data);
    }
    catch(error)
    {
        res.status(500).json({message:"UserNot Found"})
    }
})
app.get("/post",async(req,res)=>{
    try
    {
        const response=await axios.get("http://jsonplaceholder.typicode.com/posts")
        res.json(response.data);
    }
    catch(error)
    {
        res.status(500).json({message:"UserNot Found"})
    }
}).listen(PORT)
console.log("Server is Running..")