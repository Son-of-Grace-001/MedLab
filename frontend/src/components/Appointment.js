import React from 'react'
import './Appointment.css'
import { useState} from 'react'

export const Appointment = () => {
  const [name, setName] = useState ('');
  const [phone, setPhone] = useState ('');
  const [date, setDate] = useState ('');
  const [time, setTime] = useState ('');
  const [department, setDepartment] = useState ('');
  const [doctor, setDoctor] = useState ('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState ('');
 

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/appointments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, time, date, message, phone, doctor, department}),
      });

      if (response.ok) {
        // Handle successful submission (e.g., show success message)
        console.log('Appointment submitted successfully');
      } else {
        // Handle failed submission (e.g., show error message)
        console.error('Appointment submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div id='appointment'>
      <h3 className='serv'> Make An Appointment</h3>
        <div className='line'>
          <div className='lin1'></div>
          <div className='lin2'></div>
          <div className='lin3'></div>
        </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-grids'>
            <div>
              <label>Name</label>
              <input type='text' placeholder='Enter your full name' value={name}
              onChange={(e) => setName(e.target.value)}/> 
            </div>
            <div>
              <label>Email</label>
              <input type='email' placeholder='example@gmail.com' value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
              <label>Phone Number</label>
              <input type='tel' placeholder='Enter your phone number' value={phone}
              onChange={(e) => setPhone(e.target.value)}/>
            </div>
          </div>

          <div className='form-grids'>
            <div className='date'>
              <div>
                <label>Appointment Date</label>
                <input type='date' placeholder='Enter your Appointment date' value={date}
                onChange={(e) => setDate(e.target.value)}/>
              </div>
              <div>
                <label>Appointment Time</label>
                <input type='time' placeholder='Enter your Appointment time' value={time}
                onChange={(e) => setTime(e.target.value)}/> 
              </div>
            </div>
            <div>
              <label>Department</label>
              <select className='select' value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option id='1' className='option'> Diabetes Department</option>
                <option id='2' className='option'> Cardiology Department</option>
                <option id='3' className='option'> Dermatology Department</option>
              </select>
            </div>
            <div>
              <label>Doctor</label>
              <select className='select' value={doctor} onChange={(e) => setDoctor(e.target.value)}>
                <option className='option'> Dr Adejare Opeyemi</option>
                <option className='option'> Dr Ojo Christiana</option>
                <option className='option'> Dr Asere Promise</option>
              </select>
            </div>
          </div>

          <label>Message</label>
          <textarea cols={20} rows={10} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

          <div className='submit-btn'>
            <button type='submit' className='submitt'> Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
