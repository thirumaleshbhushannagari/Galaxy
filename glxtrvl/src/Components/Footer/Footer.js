import React from "react";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import { Link } from "react-router-dom";

import './Footer.css'

const Footer = () => {
  const social = [facebook,instagram, twitter];
  return (
    <footer>
      <h1>GLAX TRVL</h1>
      <div className="links">
        <h3>Useful Links</h3>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/training">Training</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="social">
        {social.map((item) => {
          return <img src={item} alt="" />;
        })}
      </div>
    </footer>
  );
};

export default Footer;
