import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import profile from './Image/o.png';

function Navbar() {
  const [userName, setUserName] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    console.log(token);

    if (token) {
      setIsLogin(true);
    }
    // fetch user info form api
    fetch('http://18.223.153.228:3000/api/user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setUserName(data.data.name);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="navbar1">
        <div className="h-text">
          The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
        </div>

        <div className="h-items">
          <div>
            <p className="left-text">Healthcare Solution service LLC</p>
          </div>
          <div className={`list ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <p>Home</p>
            </Link>
            <Link to="#assignment" style={{ textDecoration: 'none' }}>
              <p>Assignment</p>
            </Link>
            {isLogin && (
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  sessionStorage.removeItem('token');
                  window.location.href = '/';
                }}
              >
                <p>Logout</p>
              </button>
            )}
            {isLogin ? (
              <Link to="/settings" style={{ textDecoration: 'none' }}>
                <p>Settings</p>
              </Link>
            ) : (
              <p>Help</p>
            )}
            {isLogin ? (
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <img
                  src={profile}
                  alt=""
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    marginLeft: '10px',
                    border: '1px solid #fff',
                    backgroundColor: '#fff',
                  }}
                />
              </Link>
            ) : (
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <p className="login-btn">Login</p>
              </Link>
            )}
          </div>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
