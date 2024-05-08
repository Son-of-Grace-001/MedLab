import React from 'react'
import './Doctor.css'
import doctor_1 from './images/doctors-1.jpg'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

export const Doctor = () => {
  return (
    <div id='doctors'>
      <div className='service-div'>
        <h3 className='serv'> Doctors</h3>
        <div className='line'>
          <div className='lin1'></div>
          <div className='lin2'></div>
          <div className='lin3'></div>
        </div>
        <p className='servs'>
         Discover a comprehensive range of cutting-edge
         medical services tailored to meet your healthcare needs. 
         From diagnostics to treatment, <br/> our expert team is here to 
         provide personalized care and support at every step of 
         your journey to wellness.
        </p>
      </div>

      <div className='doc-div'>
        <div>
          <div className='inner-doc'>
            <div className='flex-d'>
              <img src={doctor_1} alt='doctor'/>
            </div>
          </div>
          <div className='text-doc'>
            <div>
              <h3 className='text-name'>Olajire Stephen</h3>
              <p className='text-post'>Chief Medical Office</p>
              <div className='linee'></div>
              <p className='hi'>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
            </div>
            <div className='gba'>
              <div className='ok'>
                <div className='fb-conts'>
                  <FaFacebook className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaTwitter className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaInstagram className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaLinkedin className='fbs'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='inner-doc'>
            <div className='flex-d'>
              <img src={doctor_1} alt='doctor'/>
            </div>
          </div>
          <div className='text-doc'>
            <div>
              <h3 className='text-name'>Olajire Stephen</h3>
              <p className='text-post'>Chief Medical Office</p>
              <div className='linee'></div>
              <p className='hi'>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
            </div>
            <div className='gba'>
              <div className='ok'>
                <div className='fb-conts'>
                  <FaFacebook className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaTwitter className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaInstagram className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaLinkedin className='fbs'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='inner-doc'>
            <div className='flex-d'>
              <img src={doctor_1} alt='doctor'/>
            </div>
          </div>
          <div className='text-doc'>
            <div>
              <h3 className='text-name'>Olajire Stephen</h3>
              <p className='text-post'>Chief Medical Office</p>
              <div className='linee'></div>
              <p className='hi'>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
            </div>
            <div className='gba'>
              <div className='ok'>
                <div className='fb-conts'>
                  <FaFacebook className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaTwitter className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaInstagram className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaLinkedin className='fbs'/>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className='inner-doc'>
            <div className='flex-d'>
              <img src={doctor_1} alt='doctor'/>
            </div>
          </div>
          
          <div className='text-doc'>
            <div>
              <h3 className='text-name'>Olajire Stephen</h3>
              <p className='text-post'>Chief Medical Office</p>
              <div className='linee'></div>
              <p className='hi'>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
            </div>
            <div className='gba'>
              <div className='ok'>
                <div className='fb-conts'>
                  <FaFacebook className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaTwitter className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaInstagram className='fbs'/>
                </div>
                <div className='fb-conts'>
                  <FaLinkedin className='fbs'/>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}
