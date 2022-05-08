import React,{useState} from 'react'
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router'
const Register=()=>{
    const history = useNavigate();
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    const handleChange= (e) =>{
       const {name,value}=e.target;
       setUser({
           ...user,
           [name]:value,
       })
    }
    const register=()=>{
        const {name,email,password,reEnterPassword}=user
        if(name && email && password && (password===reEnterPassword)){

            axios.post("http://localhost:4000/register",user)
            .then(res=>console.log(res))
        }else{
            alert("invalid input")
        }
    }
    return(
        <div className="register">
       
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="enter your name" onChange={handleChange} />
        <input type="text" name="email" value={user.email} placeholder="enter your Email" onChange={handleChange} />
        <input type="password" name="password" value={user.password} placeholder="enter your password" onChange={handleChange}/>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder=" re-enter your password" onChange={handleChange} />
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick={()=>history("/login")}>Login</div>
       </div>
    )
}

export default Register