import React from 'react'
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import './Top.css'


export const Top = () => {
  return (
    <div>
      <div id="topbar" className="topbar">
        <div className="container">
          <div className="left-div">
            <div className='envelope'>
              <FaEnvelope color='#121212'/>
              <a className='email' href="mailto:adeleke@example.com">adeleke@example.com</a>
            </div>
            <div className='phone-div'>
              <FaPhone color='#121212'/>
              <a  href="tel:+1 5589 55488 55" className="phone"> +2349039672814 </a>
            </div>
          </div>
          <div className="right-div">
            <a href="#" className="twitter"> <FaFacebook color='#437099'/> </a>
            <a href="#" className="facebook"> <FaTwitter color='#437099'/> </a>
            <a href="#" className="instagram"> <FaInstagram color='#437099'/> </a>
            <a href="#" className="linkedin"> <FaLinkedin color='#437099'/> </a>
          </div>
        </div>
      </div>
    </div>
  )
}