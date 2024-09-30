const express=require('express')
const usercontroller=require('../controllers/usercontroller')
const router=express.Router();
router.use(express.urlencoded({ extended:false}))
router.get('/',(req,res)=>{
    res.render('login')
})
router.get('/signup/window',(req,res)=>{
    res.render('signupforpage.ejs')
})
router.post('/login',(req,res)=>{
    usercontroller.login(req,res)
})
router.post('/signup',(req,res)=>{
    usercontroller.signup(req,res)
})
module.exports=router