import React from 'react'
import './ForgotPassword.scss'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className='forgot-password1'>
      <div className='card'>
      <h1 className='heading'>Forgot Password</h1>
      <div className='logo'>
        <img src={logo} alt='logo'></img>
      </div>

<div className='fp-box'>
      <h2><i class="fa-solid fa-envelope"></i>  Email ID</h2>
        <div className='input'>
          <input placeholder='Enter Your Email ID'></input>
        </div>

        <div className='button'>
          <Link to="/otp"><button>Submit</button></Link>
          
        </div>
        </div>
        </div>
        </div>

    </>
  )
}

export default Login