import React,{useState} from 'react'
import "./login.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Login=()=>{
  const history =useNavigate();
  const [user,setUser]=useState({
   
    email:"",
    password:"",
   
})
const handleChange= (e) =>{
   const {name,value}=e.target;
   setUser({
       ...user,
       [name]:value,
   })
}
const login = () => {
  axios.post("http://localhost:4000/login", user)
  .then(res => {
      alert(res.data.message)
      
  })
}
    return(
     
      <div className="login">
     
       <h1>Login</h1>
       <input type="text"name="email" value={user.email} placeholder="enter your Email" onChange={handleChange} />
       <input type="password" name="password" value={user.password} placeholder="enter your password" onChange={handleChange} />
       <div className="button" onClick={login}>Login</div>
       <div>or</div>
       <div className="button" onClick={()=>history("/register")}>Register</div>
      </div>
    )
}

export default Login