import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="#home">Home
  <h1 style color="firebrick">"Your Name is a Web Developer from Your City"</h1>
  <name/>
  <city/>
  </div>;
  
}

export default Home;
