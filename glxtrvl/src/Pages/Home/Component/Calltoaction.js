import React, { useState } from 'react'
import Modul from './Modul';

const Calltoaction = () => {

    const [modul,setModul]=useState(false);
    const handleclick =()=>{
        setModul(!modul)
    }
  return (
    <>
    <div className="call-to-action">
        <h2>Hurry Up Book your Tickets</h2>
        <button onClick={handleclick}>KNOW MORE!</button>
    </div>

    {
        modul && <Modul modul={modul} handleclick={handleclick}/>
    }
    </>
  )
}

export default Calltoaction