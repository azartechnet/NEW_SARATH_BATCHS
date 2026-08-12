const {MongoClient}=require('mongodb');
const url='mongodb+srv://admin:admin@cluster0.feuonss.mongodb.net/?appName=Cluster0';
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('dharanidb');
        const collection=db.collection('mycol');
        const result=await collection.insertOne({name:"azar12",age:22});
        console.log(result);
    }
    finally
    {
        await client.close();
    }
}run().catch(console.error)