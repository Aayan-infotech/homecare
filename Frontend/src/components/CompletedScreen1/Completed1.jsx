import React from 'react'
import './Completed1.scss'
import { Link } from 'react-router-dom'

function Completed() {
    return (
        <>
            <div className='completed1'>
                <div className='line1'>
                    <div className='green button'>
                        <Link to='/completed2' style={{textDecoration:'none' ,color:'white'}}>
                        Completed Assignment
                        </Link>
                        </div>
                    <div className='black button'>Pending Assignment</div>
                </div>
                {/* <div className='date'>12 March</div> */}
                <div className='line2'>
                    <div className='outer-text'>
                        Jaya, London

                        {/* <div className='inner-text'>
                            View Details
                            </div> */}
                        <Link to='/completed2' style={{ textDecoration: 'none', color: 'white' }}>
                            <div className='inner-text'>
                                View Details
                            </div>
                        </Link>
                    </div>
                    <div className='box'>
                        <p>8 March</p>
                        <p>8 March</p>
                        <p>8 March</p>
                    </div>
                </div>
                <div className='line2'>
                    <div className='outer-text'>
                        Mr. Harry, USA
                        <div className='inner-text'><Link to='/completed2' style={{ textDecoration: 'none', color: 'white' }}>View Details </Link></div>
                    </div>
                    <div className='box'>
                        <p>8 March</p>
                        <p>8 March</p>
                        <p>8 March</p>
                    </div>
                </div>
                <div className='line2'>
                    <div className='outer-text'>
                        Keny, Australia
                        {/* <div className='inner-text'>View Details</div> */}
                        <div className='inner-text'><Link to='/completed2' style={{ textDecoration: 'none', color: 'white' }}>View Details </Link></div>
                    </div>
                    <div className='box'>
                        <p>8 March</p>
                        <p>8 March</p>
                        <p>8 March</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Completed
