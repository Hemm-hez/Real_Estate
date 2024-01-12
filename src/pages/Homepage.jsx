import React from 'react'
import Herosection from "../components/Herosection"
import Section from '../components/Section'
import Explore from '../components/Explore'
import Ecosection from '../components/Ecosection'
import Reviews from '../components/Reviews'
import Questions from '../components/Questions'
import Sendmessage from '../components/Sendmessage'
import Findhome from '../components/Findhome'
import Footer from '../components/Footer'


const Homepage = () => {
  return (
    <div className=''>
      <Herosection/>
      <Section/>
      <Explore/>
      <Ecosection/>
      <Reviews/>
      <Questions/>
      <Sendmessage/>
    <Findhome/>
    <Footer/>
    </div>
  )
}

export default Homepage