import React from "react";
import { Top } from "../components/Top";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import {About} from "../components/About"
import { Lab } from "../components/Lab";
import { Service } from "../components/Service";
import { Doctor } from "../components/Doctor";
import { Contact } from "../components/Contact";
import { Appointment } from "../components/Appointment";
import {Footer} from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Top/>
      <Nav/>
      <Hero/>
      <Section/>
      <About/>
      <Lab/>
      <Service/>
      <Appointment/>
      <Doctor/>
      <Contact/>
      <Footer/>
    </div>
  )
}