import React, { useState } from 'react';
import './Otp.scss'; // You can create this CSS file for styling
import { Link } from 'react-router-dom';

function Otp() {
    const [otp, setOTP] = useState('');

    const handleOTPChange = (event) => {
        setOTP(event.target.value);
    };

    const handleSubmit = () => {
        // You can add your logic to submit the OTP here, such as sending it to a server for verification
        alert("Submitted OTP " + otp);
    };

    return (
        <div className='o1'>
        <div className='otp1'>
            <div className="otp">
                <h2>OTP</h2>
                <p>OTP has been send to your registered <br />
                    {/* <br /> */}
                    Email ID
                </p>

                <p>
                    Enter Your OTP Here
                </p>
                <div className='otp-bx'>
                    <input type='text' maxlength='1'></input>
                    <input type='text' maxlength='1'></input>
                    <input type='text' maxlength='1' ></input>
                    <input type='text' maxlength='1' ></input>
                    <input type='text' maxlength='1'></input>
                    <input type='text' maxlength='1'></input>

                </div>
                <Link to='/login'>
                    <button className="submit-btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </Link>
                <p
                    style={{ textAlign: 'end' }}
                >
                    Resend OTP
                </p>
            </div>
        </div>
        </div>
    );
}

export default Otp;