import React from 'react'
import "../assets/sendmessage.css"

const Sendmessage = () => {
  return (
    <div id='contact' className='form-message py-5 px-5'>
        <div className="row gap-3">
            <div className="col-md-6 control-form">
                <form className='py-5 form-input'>
                <div className="names gap-3 d-lg-flex d-grid mb-lg-4 mb-3 px-4">
                        <div className="fullname ">
                        <label htmlFor="full_name">Fullname <span><i className="fa-solid fa-asterisk"></i></span></label>
                        <input type="text" id='full_name' className='form-control' placeholder="Enter your full name"/>
                        </div>

                        <div className="phone-number">
                            <label htmlFor="phone">Phone number <span><i className="fa-solid fa-asterisk"></i></span></label>
                        <input type="text" id='phone' className='form-control' placeholder='Enter your phone number' />
                        </div>
                    </div>
                    <div className="email-add px-4 mb-lg-4 mb-3">
                        <label htmlFor="email">Email <span><i className="fa-solid fa-asterisk"></i></span></label>
                        <input type="text" id='email' className='form-control' placeholder="Enter your email" />
                    </div>
                    <div className="select-input mb-lg-4 mb-3  px-4">
                        <label htmlFor="select">What is your enquiry about?<span><i className="fa-solid fa-asterisk"></i></span></label>
                        <select className='form-control' name="" id="">
                            <option value="select-one">Select one</option>
                        </select>
                    </div>
                    <div className="additional_info mb-lg-4 mb-3  px-4">
                        <label htmlFor="">Additional information<span><i className="fa-solid fa-asterisk"></i></span></label>
                        <textarea className='form-control' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className='sendbutton mx-4'>Send Message</button> 
                </form>
                
            </div>
            <div className="col-md-5 d-md-grid d-none">
                <h4 className='mb-lg-3'>Get in touch to schedule a visit to your new house.</h4>
                <p>Kindly fill this form with your details about your inquiries and we would respond your inquiry shortly</p>
                <hr />
                <div className="send">
                    <span className='me-2'><i className="bi bi-send fs-4"></i></span>
                    <div>
                        <h6>Send an email</h6>
                        <a href="#">contact@HEmOnerealty.com</a>
                    </div>
                </div>
                <div className="call">
                    <span className='me-2'><i className="fa-solid fa-phone fs-4"></i></span>
                    <div>
                        <h6>Give us a call</h6>
                        <a href="#">contact@HEmOnerealty.com</a>
                    </div>
                </div>
                <div className="address">
                    <span className='me-2'><i className="fa-solid fa-location-dot fs-4"></i></span>
                    <div>
                        <h6>Office address</h6>
                        <p>11,Odo-Olowu, Ijesha B/stop, Surulere</p>
                    </div>
                </div>
                <div className="hours">
                    <span className='me-2'><i className="fa-solid fa-clock fs-4"></i></span>
                    <div>
                        <h6>Working hours</h6>
                        <p>Mon - Sat: 10am - 4pm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sendmessage