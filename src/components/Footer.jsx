import React from 'react'
import "../assets/footer.css"

const Footer = () => {
  return (
    <div className='footer px-5 pt-5 pb-1'>
        <div className="foot_in  d-md-flex">
        <div className='spanbutlogo mb-4'>
            <div className="spanlogo mb-4">
                <span><i className="fa-solid fa-house fs-4 me-1 text-light"></i></span>
                <h5 className='text-light'>HEmOne Realty</h5>
            </div>
            <div className="icons mb-4">
                <a href="#"><i className="fa-brands fs-6 me-2 fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fs-6 me-2 fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fs-6 me-2 fa-twitter"></i></a>
               <a href="#"><i className="fa-brands fs-6 fa-square-instagram"></i></a>
            </div>
            <a href="#contact"><button>Contact Us</button> </a>
        </div>
        <div className='navigate mb-4'>
            <h5 className='mb-4'>Navigation</h5>
            <div>
                <a href="#">Company</a>
                <a href="/">Home</a>
                <a href="#contact">Contact Us</a>
                <a href="#">Blog</a>
                <a href="#explore">Properties</a>
            </div>
        </div>
        <div className='company mb-4'>
            <h5 className='mb-4'>Company</h5>
            <div>
                <a href="#">About Us</a>
                <a href="#">Our mission and vission</a>
                <a href="#">Our team</a>
            </div>
        </div>
        <div className='support mb-4'>
            <h5 className='mb-4'>Support</h5>
            <div>
                <a href="#contact">Contact Us</a>
                <a href="#">Login</a>
            </div>
        </div>
        </div>
        <p className='text-light mt-5'>Copyright&copy; 2023 All right reserved</p>
    </div>
  )
}

export default Footer