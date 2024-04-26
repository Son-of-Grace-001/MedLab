import React from "react";
import './Hero.css';
import hero from './images/hero.jpg'
export const Hero = () => {
  return (
    <div>
      <div className="hero" style={{backgroundImage: `url(${hero})`}}>
         <h1 className="welcome">WELCOME TO MEDLAB</h1>
         <p className="text">
          At MedLab, we are dedicated to revolutionizing healthcare through <br/> 
          innovative technology and compassionate care. Explore our state-of- <br/>
          the-art facilities, meet our expert team of healthcare professionals, <br/> 
          and discover how we're making a difference in the lives of patients every day.
         </p>
        <button className="learn">Learn More</button>
      </div>
    </div>
  )
}