var f1=require('fs')
f1.readFile('f2.txt','utf-8',function(err,data){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(data)
    }
})