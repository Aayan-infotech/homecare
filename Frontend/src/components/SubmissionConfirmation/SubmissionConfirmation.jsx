import React from 'react';
import './SubmissionConfirmation.scss'
import logo from './img/logo.png'
import { Link } from 'react-router-dom';

const SubmissionConfirmation = () => {
    return (
        <>
            <div className='sc1'>
                <Link to='/welcome'>
                <button className='button'>Back to Home</button>
                </Link>
                <div className="card">
                    <div className='ig'>
                        <p>Your details have been submitted</p>
                        <p>Successfully!!</p>
                        <div>
                            <img src={logo} alt="" />
                            <p>Thanku you for choosing homecare</p>

                        </div>



                    </div>
                </div>

            </div>
        </>
    );
};

export default SubmissionConfirmation;
