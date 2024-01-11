import React from 'react'
import "../assets/sendmessage.css"

const Sendmessage = () => {
  return (
    <div className='form-message py-5 px-5'>
        <div className="row">
            <div className="col-md-5 control-form">
                <div className="form">
                    <div className="names px-5">
                        <div className="full-name">
                        <label htmlFor="fullname">Fullname <span><i className="fa-solid fa-asterisk"></i></span></label>
                        <input type="text" className='fullname'/>
                        </div>
                        <div className="phone-number">
                            <label htmlFor="phone">Phone number <span><i className="fa-solid fa-asterisk"></i></span></label>
                        <input type="text" className='pnone' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sendmessage