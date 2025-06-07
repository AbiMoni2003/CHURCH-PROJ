import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async()=>{
        if(!email || !password){
            setMessage("All Fields are Required")
            setTimeout(()=>setMessage(""),5000)
            return
        }
        try {
          const res =  await axios.post("http://localhost:8000/user/login",
                {
                    Email : email,
                    Password : password
                }
            )
            console.log(res);
            navigate("/home")
            console.log("login successful");
            
        } catch (error) {
            setMessage("Invalid Email and Password..")
            setTimeout(() => setMessage(""), 5000);
        }
    }

  return (
    <div>
        <div className="container">
            <div className="login-div">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="Email">Enter Your Email</label>
                    <input type="email" name='Email' id='Email' placeholder='Mail Id'onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="Password">Enter Your Password</label>
                    <input type="text" name='Password' id='Password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='btn-div'>
                {message && <p style={{color:"red",textAlign:"center"}}>{message}</p>}
                <button className='btn green' onClick={handleLogin}>Login</button>
                </div>
                <div className='link-div'>
                  <span></span>
                    <span></span>
                 <Link to="/register"><p> Register</p></Link> 
                  <Link to="/reset"><p>Forgot Password</p></Link>    
                  <span></span>
                    <span></span>
                  </div>                
            </div>
        </div>
    </div>
  )
}

export default Login