import React from 'react'
import "../assets/herostyle.css"
import Navbar from './Navbar'
import backimage from '../assets/Heroassets/bg-trial.jpg'
import Searchcomp from './Searchcomp'
// import Explore from './Explore'

const Herosection = () => {
  return (
    <div className='heroback' style={{backgroundImage:`url(${backimage})`, width:"100"} }>
      <Navbar/>
      <Searchcomp/>
    </div>
  )
}

export default Herosection