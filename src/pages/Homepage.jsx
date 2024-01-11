import React from 'react'
import Herosection from "../components/Herosection"
import Section from '../components/Section'
import Explore from '../components/Explore'
import Ecosection from '../components/Ecosection'
import Reviews from '../components/Reviews'
import Questions from '../components/Questions'
import Sendmessage from '../components/Sendmessage'

const Homepage = () => {
  return (
    <div className=''>
      <Herosection/>
      <Section/>
      <Explore/>
      <Ecosection/>
      <Reviews/>
      <Questions/>
      {/* <Sendmessage/> */}
    </div>
  )
}

export default Homepage