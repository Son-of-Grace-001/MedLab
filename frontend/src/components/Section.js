import React from "react";
import { FaFile } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import './Section.css'

export const Section = () => {
  return (
    <div>
      <div className="section">
        <div className="whys">
          <h3 className="lab">Why Choose <br/> MedLab ?</h3>
          <p className="chooses">
            Choosing MedLab means opting for cutting-edge healthcare 
            solutions coupled with compassionate care. Our state-of-
            the-art facilities, expert healthcare professionals, and 
            commitment to patient well-being ensure unparalleled 
            medical experiences. Whether it's innovative technology 
            or personalized attention, MedLab stands as a beacon of 
            excellence in revolutionizing healthcare. Join us in 
            shaping a healthier tomorrow, one patient at a time.
          </p>
          <div className="btn-div">
            <button className="learns">Learn More</button>
          </div>
        </div>

        <div className="divs">
          <div className="file"> <FaFile style={{
            height:'40px', width:'40px'
          }}/> </div>
          <h3 className="sit">Corporis <br/> voluptates sit</h3>
          <p className="nisi">
            Consequuntur sunt aut quasi enim aliquam quae 
            harum pariatur laboris nisi ut aliquip
          </p>
        </div>

        <div className="divs">
          <div className="file"> <FaCube style={{
            height:'40px', width:'40px'
          }}/> </div>
          <h3 className="sit">Corporis <br/> voluptates sit</h3>
          <p className="nisi">
            Consequuntur sunt aut quasi enim aliquam quae 
            harum pariatur laboris nisi ut aliquip
          </p>
        </div>

        <div className="divs">
          <div className="file"> <FaImage style={{
            height:'40px', width:'40px'
          }}/> 
          </div>
          <h3 className="sit">Corporis <br/> voluptates sit</h3>
          <p className="nisi">
            Consequuntur sunt aut quasi enim aliquam quae 
            harum pariatur laboris nisi ut aliquip
          </p>
        </div>
      </div>
    </div>
  )
}