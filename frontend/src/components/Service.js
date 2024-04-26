import React from 'react'
import './Service.css'
import { FaHeartbeat } from 'react-icons/fa';
import { FaFlask } from 'react-icons/fa';
import { FaWalking } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaLungs } from 'react-icons/fa';

export const Service = () => {
  return (
    <div id='services'>
      <div className='service-div'>
        <h3 className='serv'>Services</h3>
        <div className='line'>
          <div className='lin1'></div>
          <div className='lin2'></div>
          <div className='lin3'></div>
        </div>
        <p className='ser'>
         Discover a comprehensive range of cutting-edge
         medical services tailored to meet your healthcare needs. 
         From diagnostics to treatment, <br/> our expert team is here to 
         provide personalized care and support at every step of 
         your journey to wellness.
        </p>
      </div>

      <div className='list-grid'>
        <div className='inner-list'>
          <div className='heart'>
            <div>
              <FaHeartbeat className='heart-ico'/>
            </div>
          </div>
          <p className='pppp'>
            Our ICU provides specialized, round-the-clock care 
            for critical patients. Trust our dedicated team and 
            advanced resources for your highest level of support.
          </p>
        </div>

        <div className='inner-list'>
          <div className='heart'>
            <div>
              <FaFlask className='heart-ico'/>
            </div>
          </div>
          <p className='pppp'>
            Our lab services offer accurate and timely results 
            for your medical needs. With cutting-edge technology 
            and expert staff, trust us for precise testing and 
            analysis.
          </p>
        </div>

        <div className='inner-list'>
          <div className='heart'>
            <div>
              <FaWalking className='heart-ico'/>
            </div>
          </div>
          <p className='pppp'>
            Our rehabilitation services are tailored to your 
            unique needs, helping you regain strength and 
            independence. Let our experienced team guide you 
            on your journey to recovery.
          </p>
        </div>

        <div className='inner-list'>
          <div className='heart'>
            <div>
              <FaBrain className='heart-ico'/>
            </div>
          </div>
          <p className='pppp'>
            Our mental health services provide compassionate 
            care and effective treatments for individuals facing 
            mental health challenges. Count on us for support and 
            understanding."
          </p>
        </div>

        <div className='inner-list'>
          <div className='heart'>
            <div>
              <FaChartLine className='heart-ico'/>
            </div>
          </div>
          <p className='pppp'>
            Our diabetes management program offers personalized 
            care and resources to help you live well with diabetes. 
            Take control of your health with our expert guidance.
          </p>
        </div>

        <div className='inner-list'>
          <div className='heart'>
            <div>
              <FaLungs className='heart-ico'/>
            </div>
          </div>
          <p className='pppp'>
            Our respiratory therapy services offer relief and 
            support for respiratory conditions. Breathe easier 
            with our expert care and personalized treatment plans.
          </p>
        </div>

      </div>
    </div>
  )
}
