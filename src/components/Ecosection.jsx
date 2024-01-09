import React from "react";
import "../assets/ecostyle.css";
import ecocard_1 from "../assets/ecoassets/sunset.jpg";
import ecocard_2 from "../assets/ecoassets/cityview.jpg";
import ecocard_3 from "../assets/ecoassets/cityview_drone.jpg";
import ecocard_4 from "../assets/ecoassets/bluesky.jpg";

const Ecosection = () => {
  return (
    <div className="eco-section px-5">
      <h3 className="text-center mt-5">
        Benefits of owning a eco-friendly <br /> home
      </h3>
      <p className="text-center">High-quality homes with low-carbon impact.</p>
      <div className=" row eco-cards">
        <div className="col-md-3 col ecocard">
          <label className="mb-3" htmlFor="">Low energy cost</label>
          <p>
            One of the most significant benefits of owning an HEmOne Realty Home
            is lower energy costs. Our eco-friendly homes are designed to use
            less energy with our solar powered system, saving money on bills
          </p>
        </div>
        <div className="col-md-3 col  ecocard">
          <label className="mb-3" htmlFor="">Smaller carbon footprint</label>
          <p>
            Our eco-friendly homes also have a smaller carbon footprint. They
            constantly use renewable energy sources and produce less waste which
            means they have a lower impact on the environment
          </p>
        </div>
        <div className="col-md-3 col  ecocard">
          <label className="mb-3" htmlFor="">Indoor</label>
          <p>
            Our hybrid ventilation strategy includes both natural and mechanical
            ventilation, while our airtight wooden structure reduces risk of mol
            development , ensuring a healthy home
          </p>
          <img src={ecocard_4} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Ecosection;
