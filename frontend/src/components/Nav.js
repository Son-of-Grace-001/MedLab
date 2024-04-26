import React from "react";
import './Nav.css'

export const Nav = () => {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="cont">
          <div className="loo">
            <a href="/"><h1 className="log">MedLab</h1></a>
          </div>

          <div id="navbar" className="nav">
            <ul>
              <li><a className="nav-link" href="/">Home</a></li>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#services">Services</a></li>
              <li><a className="nav-link" href="#departments">Departments</a></li>
              <li><a className="nav-link" href="#doctors">Doctors</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div  className="btnn">
            <a href="#appointment" className="appointment"><button className="inline">Make an Appointment</button></a>
          </div>

        </div>
      </header>
    </div>
  )
}