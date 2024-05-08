import React from 'react'
import { FaMapMarker, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Contact.css'
import {useState} from 'react'

export const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState ('')

  const handleSubmit = async (e) => {
    try{
      const response = await fetch ('http://127.0.0.1:8000/api/contact/',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({name, email, message, subject}),
      });
      if (response.ok) {
        alert ('Your message is sent successfully')
      }else{
        alert ('An error occured pls try again')
      }
    }catch (error){
      console.error (error)
    }
  }
  return (
    <div id='contact'>
      <h3 className='serv'> Contact Us</h3>
        <div className='line'>
          <div className='lin1'></div>
          <div className='lin2'></div>
          <div className='lin3'></div>
        </div>
      <div className='contact'>
        <div className='left-contact'>
          <div className='firstt'>
            <div className='first1'>
              <FaMapMarker className='faa'/>
            </div>
            <div className='first2'>
              <h3 className='h33'>Location:</h3>
              <p className='address'>Adeleke University</p>
            </div>
          </div>

          <div className='firstt'>
            <div className='first1'>
              <FaEnvelope className='faa'/>
            </div>
            <div className='first2'>
              <h3 className='h33'>Email:</h3>
              <p className='address'>Adelekeuniversity@gmail.com</p>
            </div>
          </div>

          <div className='firstt'>
            <div className='first1'>
              <FaPhone className='faa'/>
            </div>
            <div className='first2'>
              <h3 className='h33'>Call:</h3>
              <p className='address'>+2349039672814</p>
            </div>
          </div>
        </div>

        <div className='right-contact'>
          <form>
            <div className='form-grid'>
              <div>
                <label>Name</label>
                <input type='text' placeholder='Enter your full name'/> 
              </div>
              <div>
                <label>Email</label>
                <input type='email' placeholder='example@gmail.com'/>
              </div>
            </div>

            <label>Subject</label>
            <input type='text' placeholder='Enter the subject of your message'/>

            <label>Message</label>
            <textarea cols={20} rows={10} placeholder='Message'></textarea>

            <div className='submit-btn'>
              <button type='submit' className='submitt'> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}