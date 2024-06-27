import React from 'react'
import './Signup.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signup() {
  const [formData, setUser] = useState({
    name: '',
    email: '',
    password: '',
    Age:'',
    contact:'',
    Address:'',

  });
  const navigate = useNavigate()

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;


    setUser({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = formData.email


    try {
      if(!emailRegex.test(email)){
        return alert("not valid email")

      }
      const response = await fetch("http://18.223.153.228:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        alert("registration successful now you can Sign in");
        setUser({ name: "", email: "", password: "" , age:"", contact:"", address:""});
        console.log(responseData);
        navigate("/login")
      } else {
        const responseData = await response.json();
        console.log(responseData);
        alert(responseData.message)
        setUser({ name: "", email: "", password: "" ,age:"",contact:"",address:""});
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <>
      <div className='signup1'>
        {/* <h1 className='heading'>Login</h1> */}

        <div className='card'>
          <h2><i className="fa-solid fa-user"></i>  Name</h2>
          <div className='input'>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInput}
              placeholder='Enter your Full Name'>
            </input>

          </div>
          <h2><i className="fa-solid fa-person-cane"></i> Age</h2>

          <div className='input'>
            
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInput}
              placeholder='Enter your Age'></input>
            
          </div>
          <h2><i className="fa-solid fa-phone"></i> Contact</h2>

          <div className='input'>
            
            <input
              type="number"
              name="contact"
              value={formData.contact}
              onChange={handleInput}
              placeholder='Enter Your phone number'></input>
            
          </div>
          <h2><i className="fa-solid fa-envelope"></i>  Email ID</h2>

          <div className='input'>
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              placeholder='Enter Your Email ID'></input>
            
          </div>
          <h2><i className="fa-solid fa-house-user"></i> Address</h2>

          <div className='input'>
            
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInput}
              placeholder='Enter Your Address'></input>
            
          </div>
          <h2><i className="fa-solid fa-lock"></i>  Password</h2>
          <div className='input'>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              placeholder='Enter Your Password'>
            </input>
          </div>

          <div className='end'>
            <div>
              {/* <input type='checkbox'></input> */}
              Already have an account?
            </div>

            <div>
              <Link to='/login' className='fp' style={{ textDecoration: 'none' }}>Log In</Link>
            </div>
          </div>

          <div className='button' onClick={handleSubmit}>
            <Link to='#' className='fp' style={{ textDecoration: 'none' }}> <button>Signup</button></Link>
          </div>

        </div>
      </div>

    </>
  )
}

export default Signup
