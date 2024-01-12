import React from 'react'
import "../assets/ready.css"
import Sky from "../assets/greencity/skyimage.jpg"

const Findhome = () => {
  return (
    <div className='ready bg-light px-5 py-3'>
        <div className="forbgimage rounded-3 px-4 my-5" style={{backgroundImage:`url(${Sky})`}} >
            <div className="friendly rounded-3 px-5 py-5">
                <h3 className='text-center fw-semibold'>Ready to find your eco-friendly <br className='d-md-flex d-none' /> home?</h3>
                <p className='fs-6'>We have homes in 20+ cities across the country to choose from!</p>
                <a className='mx-auto' href="#explore"><button >Browse homes <span><i className="bi bi-arrow-up-right"></i></span> </button> </a>
            </div>
        </div>
    </div>
  )
}

export default Findhome