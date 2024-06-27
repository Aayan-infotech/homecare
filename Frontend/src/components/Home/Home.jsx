import React, { useState, useEffect } from 'react'
import './Home.scss'
import { list1 } from './Data'
import { Link } from 'react-router-dom';


import logo from './img/logo.png'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import img7 from './img/img7.png'

import card1 from './img/card1.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'
import card4 from './img/card4.png'
import dct from './img/dct.png'
import doctor from './img/doctor.png'


function Home() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setTimeout(() => {
            setOpenIndex(openIndex === index ? null : index);
        }, 100);
    };

    

    return (
        <>
            <div className='home1'>
                <div className='h-section1'>
                    <div className='h-left'>
                        <h2 className='line1'>Skip the travel! Take Online</h2>
                        <h2 className='line2'>Doctor <span>Consultation</span></h2>
                        <h2 className='line3'>Connect instantly with a 24*7 specialist or choose to video visit a particular doctor.</h2>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            <h2 className='line4'onClick={() => alert('please login')}> Go To Assignment</h2>
                        </Link>
                    </div>
                    <div className='h-right'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>


            <section>
            <div className='home2'>
                <h2>Assignment</h2>
                <div className='boxes'>
                    <Link to='#' style={{ textDecoration: 'none' }}>
                        <div className='box'>
                            <div><img src="" alt="" /></div>
                            {/* <i class="fa-solid fa-user-tie"></i> */}
                            <img src={doctor} alt="" />
                            <h3>Vijay</h3>
                        </div>
                    </Link>

                    <Link to='#' style={{ textDecoration: 'none' }}>
                        <div className='box'>
                            <div><img src="" alt="" /></div>
                            {/* <i class="fa-solid fa-user-tie"></i> */}
                            <img src={doctor} alt="" />
                            <h3>Rohan</h3>
                        </div>
                    </Link>

                    <Link to='#' style={{ textDecoration: 'none' }}>
                        <div className='box'>
                            <div><img src="" alt="" /></div>
                            {/* <i class="fa-solid fa-user-tie"></i> */}
                            <img src={doctor} alt="" />
                            <h3>Robert</h3>
                        </div>
                    </Link>

                    <Link to='#' style={{ textDecoration: 'none' }}>
                        <div className='box'>
                            <div><img src="" alt="" /></div>
                            <img src={doctor} alt="" />
                            <h3>Harry</h3>
                        </div>
                    </Link>

                    <Link to='#' style={{ textDecoration: 'none' }}>
                        <div className='box'>
                            <div><img src="" alt="" /></div>
                            <img src={doctor} alt="" />
                            <h3>James</h3>
                        </div>
                    </Link>
                </div>
                <div className='button'>
                    <div className='see'>See all</div>
                </div>
            </div>
            </section>

            <div className='home3'>
                <div className='white'></div>
            </div>
            <div className='home4'>
                <h2>Find by Specialisation</h2>
                <div className='boxes'>
                    <div className='box'>
                        <div><img src={img1} alt="" />
                        </div>
                        <h3>Dentistry</h3>
                    </div>
                    <div className='box'>
                        <div><img src={img2} alt="" />
                        </div>
                        <h3>Primary Care</h3>
                    </div>
                    <div className='box'>
                        <div><img src={img3} alt="" />
                        </div>
                        <h3>Cardiology</h3>
                    </div>
                    <div className='box'>
                        <div><img src={img4} alt="" />
                        </div>
                        <h3>MRI Resonance</h3>
                    </div>
                    <div className='box'>
                        <div><img src={img5} alt="" />
                        </div>
                        <h3>Blood Test</h3>
                    </div>
                    <div className='box'>
                        <div><img src={img6} alt="" />
                        </div>
                        <h3>Psychologist</h3>
                    </div>
                    <div className='box'>
                        <div><img src={img1} alt="" />
                        </div>
                        <h3>Laboratory</h3>
                    </div>
                    <div className='box'>
                        <div><img src={img7} alt="" />
                        </div>
                        <h3>X-Ray</h3>
                    </div>
                </div>
                <div className='button'>
                    <div className='see'>View all</div>
                </div>
            </div>
            <div className='home5'>
                <div className='white'></div>
            </div>

            <div className='home6'>
                <div className='left'>
                    <p className='text1'>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                    <p className='text2'>Our Families</p>
                    <p className='text3'>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
                </div>
                <div className='right'>
                    <div className='one'>
                        <img src={card1} alt="" />
                        <img src={card2} alt="" />
                    </div>
                    <div className='two'>
                        <img src={card3} alt="" />
                        <img src={card4} alt="" />
                    </div>
                </div>
            </div>

            <div className='home7'>
                <p className='text1'>Get Your Answer</p>
                <p className='text2'>Frequently Asked Questions</p>
                <div className='row'>
                    <div className='left'>
                        <img src={dct} alt="" />
                    </div>
                    <div className='right'>
                        {
                            list1.map((item, index) => (
                                <div key={index}>
                                    <div className='faq'>
                                        <h2 className='ques'>{item.question}</h2>
                                        <i className={`fa-solid ${openIndex === index ? 'fa-multiply' : 'fa-plus'}`}
                                            onClick={() => toggleAnswer(index)}
                                        ></i>
                                    </div>
                                    {/* <p className='ans'>{item.answer}</p> */}
                                    {openIndex === index && <p className='ans'>{item.answer}</p>}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home