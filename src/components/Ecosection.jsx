import React from "react";
import "../assets/ecostyle.css";
import Card from 'react-bootstrap/Card';
import ecocard_1 from "../assets/ecoassets/sunset.jpg";
import ecocard_2 from "../assets/ecoassets/cityview.jpg";
import ecocard_3 from "../assets/ecoassets/cityview_drone.jpg";
import ecocard_4 from "../assets/ecoassets/bluesky.jpg";

const Ecosection = () => {
  return (
    <div className="eco-section py-5 px-5">
      <div className="headline mb-5">
     <h2 className="text-lg-center display-6 fw-semibold">
        Benefits of owning a eco-friendly <br className="d-lg-flex d-none" /> home
      </h2>
      <p className="text-center fs-5">High-quality homes with low-carbon impact.</p>
     </div>
     
      <div className=" row">
        <div className="col-lg-4 mb-3">
      <div className="card rounded-0">
      <div className="card-body card-body mt-4 mx-lg-4">
          <h4 className="mb-3 fw-bold">Low energy cost</h4>
          <p>
            One of the most significant benefits of owning an HEmOne Realty Home
            is lower energy costs. Our eco-friendly homes are designed to use
            less energy with our solar powered system, saving money on bills
          </p>
          </div>
          <img src={ecocard_1} alt="" />
      </div>
        </div>
        <div className="col-lg-4 mb-3">
      <div className="card rounded-0">
      <div className="card-body mt-4 mx-lg-4">
         <h4 className="mb-3 fw-bold">Smaller carbon footprint</h4>
          <p>
            Our eco-friendly homes also have a smaller carbon footprint. They
            constantly use renewable energy sources and produce less waste which
            means they have a lower impact on the environment
          </p>
         </div>
         <img src={ecocard_2} alt="" />
      </div>
        </div>

        <div className="col-lg-4 mb-3">
       <div className="card rounded-0">
       <div className="card-body card-body mt-4 mx-lg-4">
        <h4 className="mb-3 fw-bold" >Indoor</h4>
          <p>
            Our hybrid ventilation strategy includes both natural and mechanical
            ventilation, while our airtight wooden structure reduces risk of mol
            development , ensuring a healthy home
          </p>
        </div>
          <img src={ecocard_4} alt="" />
       </div>
        </div>
        
      </div>
    </div>
  );
};

export default Ecosection;
