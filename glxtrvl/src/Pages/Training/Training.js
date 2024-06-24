import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import About from '../Home/Component/About';

const Training = () => {
  return (
    <div>
        <Navbar/>
        <Header heading="training page"/>
        <Footer/>
        <About/>
    </div>
  )
}

export default Training