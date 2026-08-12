const {MongoClient}=require('mongodb');
const url='mongodb+srv://admin:admin@cluster0.feuonss.mongodb.net/?appName=Cluster0';
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('dharanidb');
        const collection=db.collection('mycol');
        //  const result=await collection.updateOne({name:"d1"},{$set:{age:10}});
        const result=await collection.deleteOne({name:"d1"});
        console.log(result);
    }
    finally
    {
        await client.close();
    }
}run().catch(console.error)