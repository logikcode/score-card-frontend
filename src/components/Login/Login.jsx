import React from 'react'
import { MainPage, LoginLeftSide, LoginRightSide } from './LoginStyled'
import logo from "../../Assets/Images/logo.svg";
import image from "../../Assets/Images/loginImage.png"
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import ApiBaseUrl from '../../common/ApiBaseUrl';
import axios from 'axios';
import { useState } from 'react';




function Login() {
  const navigate = useNavigate()
   const badCredential  = React.createRef();
    const showPassword = () => {
        setVisibilty({visibilty: "show"})
    }

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
            console.log(resp);
            if(resp.status === 200){
              const token = resp.data.token.substring(7); 
              localStorage.setItem("token", token)
              navigate("/admin/dashboard")
             
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
                            <input type="password" className='form-input'value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' required/>
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