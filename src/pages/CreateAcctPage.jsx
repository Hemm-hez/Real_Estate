import React from 'react'
import "../assets/register.css"
import Bluesky from "../assets/createassets/bluecity.jpg"

const CreateAcctPage = () => {
  return (
    <div className='registeracct px-5'style={{backgroundImage:`url(${Bluesky})`}} >
<form className='px-5 py-5 my-5'>
  <h2 className='text-center'>Create your account</h2>
  <p className='text-center'>Create an account to view your cart</p>
  <div className="email-add mb-3">
    <label htmlFor="email">Email</label>
    <input type="text" id='email' className='form-control' autoFocus  required/>
  </div>
  <div className="user-name mb-3">
    <label htmlFor="username">Fullname</label>
    <input type="text" id='username' className='form-control' required />
  </div>
  <div className="pass-word mb-3">
    <label htmlFor="password">Password</label>
    <input type="text" id='password' className='form-control' required/>
  </div>
  <div className="confirm-password mb-3">
    <label htmlFor="confirm_password">Confirm Password</label>
    <input type="text" id='confirm_password' className='form-control' required />
  </div>
  <div className="remember mb-3">
  <input type="radio" id='very' />
  <label htmlFor="verify">Remember me</label>
  </div>
  <button className='butforcreate mt-5'>Create yor account</button>
  <span className='mt-3 '>Go to <a  href="/">Hompage</a></span>
</form>
    </div>
  )
}

export default CreateAcctPage