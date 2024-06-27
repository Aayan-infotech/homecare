import React from 'react'
import './Welcome.scss'

import logo from './img/logo.png'
import doctor from './img/doctor.png'
import pending from './img/pending.png'
import completed from './img/completed.png'
import { Link , useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';


function Welcome() {

    const [userName, setUserName] = useState('');

    const navigateTo = useNavigate();
    const handleClick = (name) => {
        navigateTo('/consumer-details-screen', { state: { name } });
    };

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        console.log(token);
        if (!token) {
            window.location.href = '/';
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

            })
            .catch(err => {
                console.log(err);
            })

    }, []);


    return (
        <>
            <div className='welcome1'>

                <div className='h-section1'>

                    <div className='h-left'>
                        <h2 className='line1'>Skip the travel! Take Online</h2>
                        <h2 className='line2'>Welcome <span>{userName}</span></h2>
                        <h2 className='line3'>Connect instantly with a 24x7 specialist doctor.</h2>
                        <Link to='/completed1' style={{ textDecoration: 'none' }}>
                            <h2 className='line4'>Go To Assignment</h2>
                        </Link>
                    </div>

                    <div className='h-right'>
                        <img src={logo} alt="" />
                    </div>

                </div>
            </div>

            <div className='welcome2'>
            <h2>Today's Assignment</h2>
            <div className='boxes'>
                {['Vijay', 'Rohan', 'Robert', 'Harry', 'James'].map((name) => (
                    <div className='box' onClick={() => handleClick(name)} key={name} style={{ cursor: 'pointer' }}>
                        <div><img src={doctor} alt="" /></div>
                        <h3>{name}</h3>
                    </div>
                ))}
            </div>
            <div className='button'>
                <div className='see'>See all</div>
            </div>
        </div>

            <div className='welcome3'>
                <div className='white'></div>
            </div>

            <div className='welcome4'>
                <div className='left'>
                    <p className='text1'>CARING FOR THE HEALTH.</p>
                    <p className='text2'>Assignment</p>
                    <p className='text3'>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
                </div>
                <div className='right'>
                    <div className='pic1'>
                        <Link to='/completed1' style={{ textDecoration: 'none' }}>
                            <img src={pending} alt="" />
                        </Link>
                    </div>
                    <div className='pic2'>
                        <Link to='/completed1' style={{ textDecoration: 'none' }}>
                            <img src={completed} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
