import React from "react";


import { Top } from "../components/Top";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import {About} from "../components/About"
import { Lab } from "../components/Lab";
import { Service } from "../components/Service";

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
    </div>
  )
}