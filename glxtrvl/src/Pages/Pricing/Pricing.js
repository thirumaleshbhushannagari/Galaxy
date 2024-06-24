import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Card from './Component/Card'
import './Component/Pricingstyle.css';

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <Header heading="pricing page"/>
        <Footer/>
        <Card/>
    </div>
  )
}

export default Pricing