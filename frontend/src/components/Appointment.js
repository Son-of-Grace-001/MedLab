import React from 'react'
import './Appointment.css'

export const Appointment = () => {
  return (
    <div id='appointment'>
      <h3 className='serv'> Make An Appointment</h3>
        <div className='line'>
          <div className='lin1'></div>
          <div className='lin2'></div>
          <div className='lin3'></div>
        </div>
      <div className='form'>
        <form>
          <div className='form-grids'>
            <div>
              <label>Name</label>
              <input type='text' placeholder='Enter your full name'/> 
            </div>
            <div>
              <label>Email</label>
              <input type='email' placeholder='example@gmail.com'/>
            </div>
            <div>
              <label>Phone Number</label>
              <input type='tel' placeholder='Enter your phone number'/>
            </div>
          </div>

          <div className='form-grids'>
            <div>
              <label>Appointment Date</label>
              <input type='date' placeholder='Enter your Appointment date'/> 
            </div>
            <div>
              <label>Department</label>
              <select className='select'>
                <option className='option'> Diabetes Department</option>
                <option className='option'> Cardiology Department</option>
                <option className='option'> Dermatology Department</option>
              </select>
            </div>
            <div>
              <label>Doctor</label>
              <select className='select'>
                <option className='option'> Dr Adejare Opeyemi</option>
                <option className='option'> Dr Ojo Christiana</option>
                <option className='option'> Dr Asere Promise</option>
              </select>
            </div>
          </div>

          <label>Message</label>
          <textarea cols={20} rows={10} placeholder='Message'></textarea>

          <div className='submit-btn'>
            <button type='submit' className='submitt'> Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
