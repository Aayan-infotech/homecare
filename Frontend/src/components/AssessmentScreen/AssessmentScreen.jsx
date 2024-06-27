import React from 'react'
import './AssessmentScreen.scss'
import { Link } from 'react-router-dom'

const Assignment = () => {
    const onSubmit = async () => {
        console.log(BloodPressure)
        console.log(email)
        console.log(password)
        const res = await axios.post("http://18.223.153.228:3000/api/assign/assigned",
            {
                "BloodPressure": BloodPressure,
                "email": email,
                "password": password,
            }

        )
        console.log(res)
    }




    return (
        <>
            <div className='assignment1'>
                {/* <button className='button'>Assessment</button> */}

                <div className='fields'>
                    <div>
                        <h3>Blood Pressure</h3>
                        <input
                            // value={bloodPressure}
                            // onChange={(e) => { setBloodPressure(e.target.value); }}
                            type="text" placeholder='Submit your answer here' />
                    </div>
                    <div>
                        <h3>Haemoglobin</h3>
                        <input
                            // value={haemoglobin}
                            // onChange={(e) => { setHaemoglobin(e.target.value); }}
                            type="text" placeholder='Submit your answer here' />
                    </div>
                    <div>
                        <h3>Body Temperature</h3>
                        <input
                            // value={bodyTemperature}
                            // onChange={(e) => { setBodyTemperature(e.target.value); }}
                            type="text" placeholder='Submit your answer here' />
                    </div>
                    <div>
                        <h3>Blood</h3>
                        <input
                            // value={blood}
                            // onChange={(e) => { setBlood(e.target.value); }}
                            type="text" placeholder='Submit your answer here' />
                    </div>
                    <div>
                        <h3>Other</h3>
                        <input
                            // value={other}
                            // onChange={(e) => { setOther(e.target.value); }}
                            type="text"
                            placeholder='Submit your answer here' />
                    </div>
                </div>


                <div className="wr">
                    <button type="submit" onClick={onSubmit}>
                        <div className='inner-text' ><Link to='/digital-form' style={{ textDecoration: 'none', color: 'white' }}>submit </Link></div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Assignment