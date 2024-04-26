import React from 'react'
import { FaStethoscope } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaFlask } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';
import './Lab.css'

export const Lab = () => {
  return (
    <div className='labs'>
      <div className='outer'>
        <div className='grid'>
          <div className='fafa'>
            <FaStethoscope className='icon'/>
          </div>
          <h3 className='number'>85</h3>
          <p className='pp'>Doctors</p>
        </div>

        <div className='grid'>
          <div className='fafa'>
            <FaBuilding className='icon'/>
          </div>
          <h3 className='number'>18</h3>
          <p className='pp'>Departments</p>
        </div>

        <div className='grid'>
          <div className='fafa'>
            <FaFlask className='icon'/>
          </div>
          <h3 className='number'>12</h3>
          <p className='pp'>Research Labs</p>
        </div>

        <div className='grid'>
          <div className='fafa'>
            <FaMedal className='icon'/>
          </div>
          <h3 className='number'>150</h3>
          <p  className='pp'>Awards</p>
        </div>
        
      </div>
    </div>
  )
}