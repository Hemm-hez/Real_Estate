import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/navstyle.css"

const Navbar = () => {
  return (
    <div className='nav-items px-lg-5 pt-3'>
        <a  href="#"><span><i className="fa-solid fa-house me-2 "></i></span>HEmOne Realty</a>
        {/* CENTER ITEMS */}
        <div id='showmedscreen' className="centeritems d-lg-flex hidemedscreen ms-md-auto">
        <span className='x-mark me-3 mt-4'onClick={()=>document.getElementById("showmedscreen").style.display="none"} ><i className="text-end fa-solid fa-xmark fs-1"></i></span>
            <div className="orderedlist">
           
            <ul>
                <li>
                <a href="#">Home</a> 
                </li>
                <li>
                <label htmlFor="">Company <span><i className="fa-solid fa-chevron-down"></i></span></label>
                </li>
                <li>
                    <label htmlFor="">Properties <span><i className="fa-solid fa-chevron-down"></i></span></label>
                </li>
                <li>
                <a href="#">Blog</a>
                </li>
                <li>
                <a href="#">Contact Us</a> 
                </li>
            </ul>
            </div>
            <div className="buttons d-lg-flex d-grid mt-5 mt-lg-0" >
          <button className='me-lg-2 login' as={Link} to="/">Login</button>
          <button className='newacct' as={Link} to="/">Create an account</button>
           </div>
           
           </div>
       
      {/* HAMBURGER */}
      <div className="hamburger" onClick={()=>{document.getElementById("showmedscreen").style.display=("grid")}} >
            <span></span>
            <span></span>
            <span></span>
           </div>
    </div>
    
  )
}

export default Navbar