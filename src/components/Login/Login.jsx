import React from 'react'
import { MainPage, LoginLeftSide, LoginRightSide } from './LoginStyled'
import logo from "../../Assets/Images/logo.svg";
import image from "../../Assets/Images/loginImage.png"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ApiBaseUrl from '../../common/ApiBaseUrl';

import { useState } from 'react';




function Login() {
  const navigate = useNavigate()
   
    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState("");
    const [visibility, setVisibilty] = useState({visibility: "hide"})
    const formSubmitHandler = async(e) => {
      e.preventDefault();
      const payload = { email,  password}
      try{  
      const response =  await ApiBaseUrl.post("/login", payload,
           
      ).then(resp=>
          {
            //console.log(resp);
            const {name, email, role} = resp.data.userDto
            console.log(name, email, role);
            
            if(resp.status === 200 && role === "SUPER_ADMIN"){
              const token = resp.data.token.substring(7); 
              localStorage.setItem("token", token)
              localStorage.setItem("user_info", JSON.stringify(resp.data.userDto))

              navigate("/super-admin/dashboard")
             
            }
            else if(resp.status === 200 && role === "ADMIN"){
              const token = resp.data.token.substring(7); 
              localStorage.setItem("token", token)
              localStorage.setItem("user_info", JSON.stringify(resp.data.userDto))

              navigate("/admin/dashboard")
            } else if(resp.status === 200 && role === "DEV"){
              const token = resp.data.token.substring(7); 
              localStorage.setItem("token", token)
              localStorage.setItem("user_info", JSON.stringify(resp.data.userDto))

              navigate("/decadev/dashboard")
            }
           
            
          }
        )
     
      } catch{
        setVisibilty({visibility: "show"})
        navigate("/");
        console.log("something went wrong")
      }
    }
  return (
    <>
        <MainPage>
       
            <LoginLeftSide >
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="heading-container">
                     <h1 className='login-heading'> Login to your account</h1>
                </div>
                
              
                <form onSubmit={(e)=>formSubmitHandler(e)} className='login-form'>
                        <div className="login-input-wrapper">
                            <label htmlFor="" className='form-label'>Email address</label>
                            <input type="email" className='form-input' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter email address' required/>
                        </div>
                        <div className="login-input-wrapper">
                            <label htmlFor="" className='form-label'>Password</label>
                            <input type="password" className='form-input' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' required/>
                        </div>
                        <div className="forgot-passwd-link-wrapper">
                          <Link className='forgot-password-link'>Forgot password?</Link>
                        </div>
                        <span  className={visibility.visibility}>Bad credentials</span>
                        <button type="submit" className='submit-btn'>Submit</button>
                        
                </form>
        
            </LoginLeftSide>
            <LoginRightSide>
                <img src={image} alt="" className="login-image" />
            </LoginRightSide>
        </MainPage>
    </>
  )
}

export default Login