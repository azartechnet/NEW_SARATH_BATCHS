const h1=require('http')
const s1=h1.createServer((req,res)=>{
    res.write('helloworld')
    res.end()
})
s1.listen(3000,()=>{
    console.log("Server is Running..")
})