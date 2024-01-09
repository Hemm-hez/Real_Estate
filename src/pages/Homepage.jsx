import React from 'react'
import Herosection from "../components/Herosection"
import Section from '../components/Section'
import Explore from '../components/Explore'
import Ecosection from '../components/Ecosection'

const Homepage = () => {
  return (
    <div className=''>
      <Herosection/>
      <Section/>
      <Explore/>
      {/* <Ecosection/> */}
    </div>
  )
}

export default Homepage