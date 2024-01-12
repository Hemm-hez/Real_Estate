import React from "react";
import "../assets/review.css";

const Reviews = () => {
  return (
    <div className="px-5 py-5">
      <div className="customers_review">
        <h6 className="text-lg-center display-5 fw-semibold">What our customers say</h6>
        <p className="text-lg-center mb-5 fs-5">
          Hear from our satisfied customers and clients{" "}
        </p>
      </div>
      <div className="carousel-cards d-lg-flex d-none">
        <div className="card-carousel">
          <div className="card-quote px-4">
            <span className="quote">
              <i className="fa-solid fa-quote-left"></i>
            </span>
            <h3 className="mt-5">Felix Jimoh</h3>
          <div className="stars">
          <p className="me-1">4.9 </p>
          <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span >
                <i className="fa-solid fa-star"></i>
              </span>
          </div>
            <blockquote>
              "I had a wonderful experience working with HEmOne Realty to find my
              new home. They really took the time to understand what was
              important to me and helped me find a home that was only beautiful
              but also eco-friendly and energy-efficient".
            </blockquote>
          </div>
        </div>
        <div className="card-carousel">
          <div className="card-quote px-4">
            <span className="quote">
              <i className="fa-solid fa-quote-left"></i>
            </span>
            <h3 className="mt-5">John T.</h3>
            <div className="stars">
          <p className="me-1">4.5 </p>
          <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="john">
                <i className="fa-solid fa-star"></i>
              </span>
          </div>
            <blockquote>
              "I had a wonderful experience working with HEmOne Realty to find my
              new home. They really took the time to understand what was
              important to me and helped me find a home that was only beautiful
              but also eco-friendly and energy-efficient".
            </blockquote>
          </div>
        </div>
        <div className="card-carousel">
          <div className="card-quote px-4">
            <span className="quote">
              <i className="fa-solid fa-quote-left"></i>
            </span>
            <h3 className="mt-5">Susan Lanre</h3>
            <div className="stars">
          <p className="me-1">4.5</p>
          <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="susan">
                <i className="fa-solid fa-star"></i>
              </span>
          </div>
            <blockquote>
              "I had a wonderful experience working with HEmOne Realty to find my
              new home. They really took the time to understand what was
              important to me and helped me find a home that was only beautiful
              but also eco-friendly and energy-efficient".
            </blockquote>
          </div>
        </div>
       
      </div>
      <div className="carousel_button my-4 d-lg-flex d-none">
      <button className="prevbut"><i className="fa-solid fa-chevron-left"></i></button>
            <button className="nextbut"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
  );
};

export default Reviews;
