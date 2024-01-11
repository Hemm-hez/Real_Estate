import React from 'react'
import '../assets/explorestyle.css'
import Carousel from 'react-bootstrap/Carousel';
import Image_1 from "../assets/listedassets/listin_one.jpg"
import Image_2 from "../assets/listedassets/listing_two.jpg"
import Image_3 from "../assets/listedassets/listing_three.jpg"
import Image_4 from "../assets/listedassets/listing_four.jpg"
import Image_5 from "../assets/listedassets/listing_five.jpg"
import Image_6 from "../assets/listedassets/listing_six.jpg"
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className='px-5'>
        <h3>Explore Eco-Friendly Homes Near You</h3>
        <div className="listedinmarket">
            <div className="market">
                <p>New to Market</p>
                
            </div>
            <div className="nearby">
                <p>Nature Nearby</p>
            </div>
            <div className="mostviewed">
                <p>Most viewed homes</p>
            </div>
        </div>
        <div className="row itemslisted">
                    <div className="col-md-4 col-sm-12">
                        <hr />
                        <div className="buttons">
                            <p>$450,000</p>
                            <p className='ms-auto'>FOR SALE</p>
                        </div>
                        <div className="ordererlist">
                       <ul>
                                <li>4 beds</li>
                                <li><span className='me-1 mt-1'></span> 1 baths</li>
                                <li><span className='me-1 mt-1'></span>1931 sqft</li>
                                <li><span className='me-1 mt-1'></span>Eco-friendly</li>
                            </ul>

                            <p className='ms-auto'>
                                <span className='me-2'><i className="fa-regular fa-clock"></i></span>
                                2years ago
                            </p>
                       </div>
                        <img src={Image_1} alt="" />
                          <div className="textaddress my-3">
                            <p>Plot 16 Chief Nwuke Street <br />Trans Amadi Industrial Layout</p>
                            <span className='ms-auto'><i className="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <hr />
                    <div className="buttons">
                            <p>$450,000</p>
                            <p className='ms-auto'>FOR SALE</p>
                        </div>
                        <div className="ordererlist">
                       <ul>
                                <li>7 beds</li>
                                <li><span className='me-1 mt-1'></span>3 baths</li>
                                <li><span className='me-1 mt-1'></span>1334 sqft</li>
                                <li><span className='me-1 mt-1'></span>Eco-friendly</li>
                            </ul>

                            <p className='ms-auto'>
                                <span className='me-2'><i className="fa-regular fa-clock"></i></span>
                                3years ago
                            </p>
                       </div>
                        <img src={Image_2} alt="" />
                        <div className="textaddress my-3">
                            <p>44, Arionola Street, Oriokuta. <br /> Ikorodu</p>
                            <span className='ms-auto'><i className="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <hr />
                    <div className="buttons">
                            <p>$450,000</p>
                            <p className='ms-auto'>FOR SALE</p>
                            
                        </div>
                        <div className="ordererlist">
                       <ul>
                                <li>2 beds</li>
                                <li><span className='me-1 mt-1'></span>2 baths</li>
                                <li><span className='me-1 mt-1'></span>1000 sqft</li>
                                <li><span className='me-1 mt-1'></span>Eco-friendly</li>
                            </ul>

                            <p className='ms-auto'>
                                <span className='me-2'><i className="fa-regular fa-clock"></i></span>
                                3years ago
                            </p>
                       </div>
                        <img src={Image_3} alt="" />
                        <div className="textaddress my-3">
                            <p>5 Olaide Tomori Street, off <br /> Simbiat Abiola Road Ikeja</p>
                            <span className='ms-auto'><i className="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <hr />
                    <div className="buttons">
                            <p>$450,000</p>
                            <p className='ms-auto'>FOR SALE</p>
                            
                        </div>
                            <div className="ordererlist">
                       <ul>
                                <li>4 beds</li>
                                <li><span className='me-1 mt-1'></span> 1 baths</li>
                                <li><span className='me-1 mt-1'></span>1931 sqft</li>
                                <li><span className='me-1 mt-1'></span>Eco-friendly</li>
                            </ul>

                            <p className='ms-auto'>
                                <span className='me-2'><i className="fa-regular fa-clock"></i></span>
                                2years ago
                            </p>
                       </div>
                  
                        <img src={Image_4} alt="" />
                        <div className="textaddress my-3">
                            <p>35, Herbert Macaulay Way, <br />Sabo, Yaba</p>
                            <span className='ms-auto'><i className="fa-regular fa-heart"></i></span>
                        </div>
                        <hr />
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <hr className='hr-4'/>
                    <div className="buttons">
                            <p>$450,000</p>
                            <p className='ms-auto'>FOR SALE</p>
                            
                        </div>
                        <div className="ordererlist">
                       <ul>
                                <li>4 beds</li>
                                <li><span className='me-1 mt-1'></span> 1 baths</li>
                                <li><span className='me-1 mt-1'></span>1931 sqft</li>
                                <li><span className='me-1 mt-1'></span>Eco-friendly</li>
                            </ul>

                            <p className='ms-auto'>
                                <span className='me-2'><i className="fa-regular fa-clock"></i></span>
                                2years ago
                            </p>
                       </div>
                        <img src={Image_5} alt="" />
                        <div className="textaddress my-3">
                            <p>5, Dele Ogundele Street, <br /> Oreun, Ikeja </p>
                            <span className='ms-auto'><i className="fa-regular fa-heart"></i></span>
                        </div>
                        <hr className='hr-5' />
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <hr />
                    <div className="buttons">
                            <p>$450,000</p>
                            <p className='ms-auto'>FOR SALE</p>
                            
                        </div>
                        
                        <div className="ordererlist">
                       <ul>
                                <li>4 beds</li>
                                <li><span className='me-1 mt-1'></span> 1 baths</li>
                                <li><span className='me-1 mt-1'></span>1931 sqft</li>
                                <li><span className='me-1 mt-1'></span>Eco-friendly</li>
                            </ul>

                            <p className='ms-auto'>
                                <span className='me-2'><i className="fa-regular fa-clock"></i></span>
                                2years ago
                            </p>
                       </div>
                        <img src={Image_6} alt="" />
                        <div className="textaddress my-3">
                            <p>10, Lekki Phase 1, P.O.Box <br /> 10141, Marina</p>
                            <span className='ms-auto'><i className="fa-regular fa-heart"></i></span>
                        </div>
                        <hr /> 
                    </div>
                  
                </div>
              <div className="butt-center mt-3 mb-5">
              <button as={Link} to="/">Browse Now 
              <span className='mx-2 tohide'>
              <i className="bi bi-arrow-up-right"></i>
            </span>
            {/* <span className='functions'><i className="fa-solid fa-arrow-right"></i></span> */}
             </button>
              </div>
    </div>
  )
}

export default Explore