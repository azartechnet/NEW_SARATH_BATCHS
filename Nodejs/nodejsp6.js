//setTimeout using files
var f1=require('fs')
f1.writeFile('f1.txt','Hello World',function(err){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("File Created")
    }
    setTimeout(function(){
        f1.readFile('f1.txt','utf-8',function(err,data){
            if(err)
            {
                console.log(err)
            }
            else
            {
                console.log(data)
            }
        })
    },5000)
})