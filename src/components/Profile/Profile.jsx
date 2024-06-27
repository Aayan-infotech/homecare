import React from 'react'
import './Profile.scss'
import logo from './img/logo.png'
// import logo from './img/logo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Profile() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);


  useEffect(() => {
    const token = sessionStorage.getItem('token');

    console.log(token);
    if (!token) {
      window.location.href = '/';
    }
    if (token) {
      setIsLogin(true);
    }
    // fetch user info form api
    fetch('http://18.223.153.228:3000/api/user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "authorization": "Bearer " + token
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setUserName(data.data.name);
        setUser(data.data);

      })
      .catch(err => {
        console.log(err);
      })

  }, []);
  return (
    <>
      <div className='profile1'>
        
        <div className='top'>
          <div className='image'>
            <img src={logo} alt="" />
          </div>
          <input type='file' className='text1'></input>
          <p className='text2'>{
            user?.name || "Name not found"
          }</p>
        </div>
        <div className='middle'>
          <div className='line1'>
            <p></p>
            <p className='two'>Name:</p>
            <p className='three'>{userName}</p>
            <p></p>
          </div>
          <div className='line1'>
            <p></p>
            <p className='two'>Age:</p>
            <p className='three'>{user?.age || "Age not found"}</p>
            <p></p>
          </div>
          <div className='line1'>
            <p></p>
            <p className='two'>Contact:</p>
            <p className='three'>{user?.contact || "No contact info"}</p>
            <p></p>
          </div>
          <div className='line1'>
            <p></p>
            <p className='two'>Address:</p>
            <p className='three'>{user?.address || "Address not Found"}</p>
            <p></p>
          </div>
          <div className='line1'>
            <p></p>
            <p className='two'>Email ID:</p>
            <p className='three'>{user?.email}</p>
            <p></p>
          </div>
        </div>
        <div className='bottom'>

          <Link to='/' style={{ textDecoration: 'none', color: 'white', fontSize: '0.8em' }}><button className='green'>save</button> </Link>



          <button className='black' style={{ fontSize: '0.8rem', width: 'auto' }}>Change Profile</button>
        </div>
      </div>
    </>
  )
}

export default Profile
