import React, { useState, useEffect } from 'react'
import './Footer.scss'
import {list1} from './Data'

import vector from './img/vector.png'
import fb from './img/fb.png'
import pi from './img/pi.png'
import tw from './img/tw.png'
import yt from './img/yt.png'

import gt from './img/gt.png'

function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

// const toggleAnswer = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(null); // Close if already open
//     } else {
//       setOpenIndex(index); // Open clicked item
//     }
//   };

const toggleAnswer = (index) => {
    setTimeout(() => {
      setOpenIndex(openIndex === index ? null : index);
    }, 100); // Adjust the delay as needed
  };

  return (
    <>
    <div className='footer'>
      <div className='row'>
      <div className='left'>
        <p><img src={vector} alt="" /></p>
        <p>NYC, USA</p>
        <p>000000</p>
        <p>+91-88787878787</p>
        <p>info@HealthcareLLC.com</p>

        <div className='icons'>
          <p><img src={fb} alt="" /></p>
          <p><img src={pi} alt="" /></p>
          <p><img src={tw} alt="" /></p>
          <p><img src={yt} alt="" /></p>
        </div>
      </div>

      <div className='right'>
        {
          list1.map((item, index) => (
            <div key={index}>
              <div className='icons' onClick={() => toggleAnswer(index)}>
                <img src={gt} alt="" />
              {/* <i class="fa-solid fa-greater-than"></i> */}
                <h2>{item.topic}</h2>
                </div>
                <div>
                {openIndex === index && <p className='ans'><p>{item.subtopic1}</p>
                  <p>{item.subtopic2}</p>
                  {/* <p>{item.subtopic3}</p> */}
                  {/* <p>{item.subtopic4}</p> */}
                  </p>}
                  
                </div>
            </div>
          )) 
        }

      </div>
      </div>
      <div className='endtext'>Copyright ©2023 Healthcare Solution LLC.com. All Rights Reserved</div>
    </div>
    </>
  )
}

export default Footer
