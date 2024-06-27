import React from 'react'
import './Completed2.scss'
import { Link } from 'react-router-dom'

function Completed() {
    return (
        <>
            <div className='completed2'>
                <div className='black-button'>
                    {/* <div className='green button'>Completed Assignment</div> */}
                    <div className='black button'>Jaya</div>
                </div>

                <div className='row'>
                    <div className='details'>

                        <div className='middle'>
                            <div className='line1'>
                                <p></p>
                                <p className='two'>Name:</p>
                                <p className='three'>Dua Walter</p>
                                <p></p>
                            </div>
                            <div className='line1'>
                                <p></p>
                                <p className='two'>Age:</p>
                                <p className='three'>26</p>
                                <p></p>
                            </div>
                            <div className='line1'>
                                <p></p>
                                <p className='two'>Contact:</p>
                                <p className='three'>88889998866</p>
                                <p></p>
                            </div>
                            <div className='line1'>
                                <p></p>
                                <p className='two'>Address:</p>
                                <p className='three'>xxxxxxx,street,NYC USA</p>
                                <p></p>
                            </div>
                            <div className='line1'>
                                <p></p>
                                <p className='two'>Completed:</p>
                                <p className='three'>8 march 2024</p>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className='view-details'>
                        <h3>Assessment Details</h3>
                        {/* <div className='date'>12 March</div> */}
                        <div className='line2'>
                            <div className='outer-text'>
                            Haemoglobin
                                <div className='inner-text'>View </div>
                            </div>
                            {/* <div className='box'>
                <p>8 March</p>
                <p>8 March</p>
                <p>8 March</p>
            </div> */}
                        </div>
                        <div className='line2'>
                            <div className='outer-text'>
                            Haemoglobin
                                <div className='inner-text'>View </div>
                            </div>
                            {/* <div className='box'>
                <p>8 March</p>
                <p>8 March</p>
                <p>8 March</p>
            </div> */}
                        </div>
                        <div className='line2'>
                            <div className='outer-text'>
                                Haemoglobin
                                <div className='inner-text'>View</div>
                            </div>
                            {/* <div className='box'>
                <p>8 March</p>
                <p>8 March</p>
                <p>8 March</p>
            </div> */}
                        </div>
                        <p>View all</p>

                    </div>
                </div>

                <div className='end'>
                    <div>
                        <Link to='/completed1'>
                        <button className='green button'>View Invoice</button>
                        </Link>
                    </div>
                    <div>
                        <button className='green button ii'><i class="fa-solid fa-download"></i></button>
                        <button className='green button ii'><i class="fa-solid fa-share-nodes"></i></button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Completed
