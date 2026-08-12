const exp=require('express')
const app=exp();
const PORT=3000;
app.get("/add",(req,res)=>{
    const num1=Number(req.query.num1);
    const num2=Number(req.query.num2);
    const result=num1+num2;
    res.send("Result is::="+result)
}).listen(PORT)
console.log("Server is Running...")