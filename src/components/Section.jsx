import React from "react";
import "../assets/sectionstyle.css";
import teamimage from "../assets/infocardassets/teampeople.jpg";
import teamroof from "../assets/infocardassets/roof_top.jpg";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="Section-card px-5">
      <div className="first_card row my-5">
        <div className=" col-md-5 text-card mb-5">
          <div className="pee">
            <span className="me-2"></span>
            <p>WHO WE ARE</p>
          </div>
          <h3>Discover Sustainable Luxury Living with HEmOne Realty</h3>
          <p className="text-start mt-4">
            HEmOne Realty is a real estate agency in eco-friendly homes and
            sustainable living. We offer a range of eco-friendly properties,
            including energy efficient homes, homes built with eco-friendly
            materials and homes equipped with sustainable technologies such as
            solar panels
          </p>
          <button className="mt-3" as={Link} to="#">
            Our Company
            <span>
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </button>
        </div>
        <div
          className="col-md-5 image "
          style={{ backgroundImage: `url(${teamroof})` }}
        ></div>
      </div>
      <div className="second_card row my-5">
        <div className="text-cardtwo col-md-5 mb-5 order-md-2">
          <div className="pee-two">
            <span className="me-2"></span>
            <p>OUR MISSION</p>
          </div>
          <h3>Building a Better Future with Eco-Friendly Homes.</h3>
          <p className="text-start mt-4">
            The agency's mission is to provide clients with a selection of
            properties that meet high environmental standards, while also
            providing a comfortable and luxurious lifestyle
          </p>
          <button className="mt-3" as={Link} to="/">Learn more
          <span>
              <i className="bi bi-arrow-up-right"></i>
            </span></button>
        </div>
        <div
          className="image col-md-5 order-md-1"
          style={{ backgroundImage: `url(${teamimage})` }}
        ></div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default Section;
