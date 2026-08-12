const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const Student = require('./models/Student')
require('dotenv').config()

const app=express()

app.use(cors())
app.use(express.json())
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("Mongodb connected"))
    .catch((err)=>console.log("connectionError"))

app.get("/",(req,res)=>{
    res.send("BackEnd Running..")
})
//Test POST API
app.post("/test",(req,res)=>{
    console.log(req.body)
    res.json({
        message:"POST API is Working",data:req.body
    })
})

//get all students
app.get("/students",async(req,res)=>{
    try
    {
        const students=await Student.find();
        res.status(200).json({message:"All Students",data:students})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})


//Insert data
app.post("/students",async(req,res)=>{
    try
    {
        const student=new Student(req.body);
        await student.save();
        res.status(201).json({message:"Student Inserted",data:student})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})
//Delete data student by id
app.delete("/students/:id",async(req,res)=>{
    try
    {
        const student=await Student.findByIdAndDelete(req.params.id);
        if(!student)
        {
            return res.status(404).json({message:"Student Not Found"})
        }
        else
        {
            res.status(200).json({message:"Student Deleted",data:student})
        }
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

//Update data student by id
app.put("/students/:id",async(req,res)=>{
    try
    {
        const student=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!student)
        {
            return res.status(404).json({message:"Student Not Found"})
        }
        else
        {
            res.status(200).json({message:"Student Updated",data:student})
        }
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }

})

const PORT=5000;

app.listen(PORT,()=>{
    console.log("Server is Running...")
})