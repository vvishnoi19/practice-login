const User=require('../models/User')
const bcrypt=require('bcrypt')
const saltRounds=10;
async function signup(req,res)
{
    try{
        let password=bcrypt.hashSync(req.body.password,saltRounds)
        let user=new User(req.body)
        user.password=password
        await user.save()
        res.redirect('/')
    }
    catch(err)
    {
        console.log(err)
    }
}
async function login(req,res)
{
    try{
        let user=await User.findOne({email:req.body.email})
        if(!user)
        {
            res.end("<h1>user does not exist")
            
        }
        else{
            let isMatch=bcrypt.compareSync(req.body.password,user.password)
            if(isMatch)
            {
                res.end("<h1>Login successfully</h1>")
            }
            else{
                res.end("<h1>Password is wrong</h1>")
            }
        }

    }
    catch(err)
    {
        console.log(err)
    }
}
module.exports={
    signup,login
}