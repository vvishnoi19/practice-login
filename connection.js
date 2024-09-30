const mongoose=require('mongoose')
async function connection()
{
    try{
    await mongoose.connect(`mongodb://localhost:27017/pratice-30`)
    console.log("Database is connected....")
    }
    catch(err)  
    {
        console.log(err)

    }
}
module.exports=connection;