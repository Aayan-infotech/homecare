import React, { useState } from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom';





function Login() {


  //       console.log(password)
  //       const res = await axios.post("http://18.223.153.228:3000/api/auth/login",
  //         {
  //           "password": password,
  //           "email": email
  //         }

  //       )
  //       console.log(res);
  //       if(res.ok){
  //         const responseData=await res.json();
  //         alert("login success");
  //         setData({email:"",password:""})
  //         console.log(responseData);
  //     }
  //     else{
  //       alert("login invalid")
  //       console.log("error inside response ", "error");

  //     }





  //   }


  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loginData, setData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData)
    try {
      const res = await fetch("http://18.223.153.228:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      })
      console.log(res);
      if (res.ok) {
        const responseData = await res.json();
        console.log(responseData); // Log the response data
        if (responseData.data.token) {
            // Save token to sessionStorage
            sessionStorage.setItem("token", responseData.data.token);
        }
        alert("login success");
        setData({ email: "", password: "" })
        navigate("/welcome")
        console.log(responseData);


      }
      else {
        alert("login invalid")
        console.log("error inside response ", "error");

      }
    }
    catch (error) {
      console.log("Error", error)
    }

  }
  return (
    <>

      <div className='login1'>
        {/* <h1 className='heading'>Login</h1> */}
        

        <div className='card'>
          <h2><i className="fa-solid fa-envelope"></i>  Email ID</h2>
          <div className='input'>
            <input
              type='email'
              required
              onChange={handleInput}
              name='email' value={loginData.email}
              // value={email}
              // onChange={(e) => { setEmail(e.target.value); }}
              placeholder='Enter Email ID/Mobile number'>

            </input>
          </div>
          <h2><i className="fa-solid fa-lock"></i>  Password</h2>
          <div className='input'>
            <input
              type='password'
              name='password'
              placeholder='Enter Email ID/Mobile number'
              value={loginData.password}
              onChange={handleInput}
            // value={password}
            // onChange={(e) => { setPassword(e.target.value); }}
            ></input>
          </div>

          <div className='end1'>
            <div>
              <input type='checkbox'></input>
              Remember Me
            </div>

            <div>
              <Link to='/forgot-password' className='fp' style={{ textDecoration: 'none' }}>Forgot Password</Link>
            </div>
          </div>

          <div className='button'>

            {/* <Link to='/completed1' style={{textDecoration: 'none'}}></Link> */}
            <button onClick={handleSubmit}>Login</button>
          </div>

          <div className='end2'>
            <h3>Don't have an account?</h3>
            <div>
              <Link to='/signup' className='fp' style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
            </div>
          </div>

        </div>
      </div>


    </>
  )


}
export default Login


