import React from 'react'
import about from './images/about.jpg'
import { FaCompass } from 'react-icons/fa'
import { FaLightbulb } from 'react-icons/fa'
import { FaUserShield } from 'react-icons/fa'
import './About.css'

export const About = () => {
  return (
    <div id='about'>
      <div className='about-div'>
        <div className='imgg'>
          <img src={about} alt='about photo'/>
        </div>

        <div className='other'>
          <h3 className='about-h'>
            About Us
          </h3>
          <p>
            Welcome to MedLab, where healing meets compassion, 
            and expertise merges with empathy. With a legacy of care 
            spanning 10 years, we stand as a beacon of hope and health 
            in our community. Learn more about our commitment to 
            excellence and our dedication to your well-being below.
          </p>
          <div className='inner-flex'>
            <div className='flexx'>
              <div className='icons'>
                <FaLightbulb className='fa'/>
              </div>
              <div className='fa-flex'>
                <h4>Our Vision</h4>
                <p>
                  We aspire to be the foremost healthcare 
                  destination, distinguished for our relentless 
                  pursuit of patient-centered care, groundbreaking 
                  research, and community enrichment.
                </p>
              </div>
            </div>

            <div className='flexx'>
              <div className='icons'>
                <FaCompass className='fa'/>
              </div>
              <div className='fa-flex'>
                <h4>Our Mission</h4>
                <p>
                  We are committed to providing unparalleled 
                  healthcare, blending expertise with compassion 
                  to enhance the well-being of every individual 
                  in our care. Through innovation and excellence, 
                  we empower healthier lives and communities.
                </p>
              </div>
            </div>

            <div className='flexx'>
              <div className='icons'>
                <FaUserShield className='fa'/>
              </div>
              <div className='fa-flex'>
                <h4>Our Value</h4>
                <p>
                  At the core of our practice are Compassion, 
                  Excellence, Integrity, Innovation, and 
                  Collaboration, guiding our daily endeavors to 
                  ensure the utmost quality in care and service 
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}