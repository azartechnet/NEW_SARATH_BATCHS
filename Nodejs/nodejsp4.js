var f1=require('fs')
f1.rename('f1.txt','f2.txt',function(err){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("File Renamed")
    }
})