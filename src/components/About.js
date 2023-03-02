import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">About
  <h2>About me</h2>
  <p>Learning to use the imported variables into JSX elements</p>
   <img src={ image } alt="I made this"></img>
  </div>;
}

export default About;
