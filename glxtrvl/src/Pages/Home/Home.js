import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Component/Hero";
import "../Home/Homestyles.css";
import About from "./Component/About";
import Service from "./Component/Service";
// import Modul from "./Component/Modul";
import Calltoaction from "./Component/Calltoaction";

import Faq from "./Component/Faq"
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <Calltoaction />
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Home;
