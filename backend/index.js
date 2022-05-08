import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mogobd",{

},()=>{
    console.log('db connected')
})

// user schema 
const userSchema= new mongoose.Schema({
     name:String,
     email:String,
     password:String,

})
// model 
const User = new mongoose.model("User",userSchema)
// routes 
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 
// register 
app.post('/register',(req,res)=>{
   const {name,email,password}=req.body
   User.findOne({email:email},(err,user)=>{
       if(user){
           res.send({message:"user already exist"})
       }else{

           const user = new User({
               name,
               email,
               password
           })
           user.save(err=>{
               if(err){
                   res.send(err)
               }else{
                   res.send({message:"successfully register"})
               }
           })
       }
   })
})
app.listen(4000,()=>{
    console.log('running at port 4000')
})