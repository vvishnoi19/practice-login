const express=require('express')
const connection=require('./connection')
const path=require('path')
const app=express();
const user=require('./routes/user')
connection();
app.use(user)
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("server is running on port 3000")
    }
})