import React from "react";
import Video from "../../../Assets/1851190-hd_1920_1080_25fps.mp4";
// import image from "../../../Assests/Earth_from_Space.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <video src={Video} autoPlay loop muted></video>

      <div className="content">
        <h1>TRAVEL. GALAXIES</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="button">
          <Link to="/training">Try Now!</Link>
          <Link to="/contact">Launch</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
