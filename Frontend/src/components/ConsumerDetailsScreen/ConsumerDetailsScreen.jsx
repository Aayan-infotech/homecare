import React from 'react'
import './ConsumerDetailsScreen.scss'
import photo from './img/photo.png'
import { Link } from 'react-router-dom'

const ConsumerDetailsScreen = () => {
    return (
        <>
            <div className='consumer-detail'>
                <div className='left'>
                    <div className='top'>
                        <div className='image'>
                            <img src={photo} alt="" />
                        </div>
                        {/* <p className='text1'>Change Photo</p> */}
                        <p className='text2'>Dua, London</p>
                    </div>
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
                            <p className='two'>Email ID:</p>
                            <p className='three'>123dua@gmail.com</p>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className='right'>


                <div className='map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.41146195165!2d80.94251274999999!3d26.848692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714102155745!5m2!1sen!2sin"
                            width={380}
                            height={260}
                            style={{ borderRadius: 6 }}
                            allowFullScreen=""
                            loading="eager"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        
                    </div>


                    <div className='bottom'>

                        <button className='green'>
                        <Link to='/assessment-screen' style={{textDecoration: 'none', color: 'white'}}>Start </Link></button>
                        <button className='black'>End</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConsumerDetailsScreen