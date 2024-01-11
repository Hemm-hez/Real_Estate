import React from "react";
import "../assets/question.css";

const Questions = () => {
  return (
    <div className="qustion px-5 py-5">
      <div className="row frquent mt-5">
        <div className="col-md-5 frequentquest">
          <div className="forspan mb-4">
            <span className="mt-1 me-2"></span>
            <h6>FREQUENTLY ASKED QUESTIONS</h6>
          </div>
          <h3 className="fw-semibold ">Common question asked about <br className="d-lg-flex d-none"/> our eco-friendly homes.</h3>
          <p className="my-4">
            Here are some important questions that are frequently asked and the
            answer to the questions.
          </p>
          <h5 className="mb-4">Have a different question?</h5>
          <button>
            Contact Us{" "}
            <span>
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </button>
        </div>
        <div className="col-md-5 questionanswer">
          <hr />
          <div>
            <h6 className="my-4">
              What makes HEmOne Realty different from other realo estate
              agencies?
            </h6>
            <p>
              At EcoHaven Realty, we are committed to promoting sustainability
              in the real estate industry. We prioritize eco-friendly practices,
              such as green building techniques and energy-efficient systems, in
              all of our transactions. We believe that promoting environmental
              responsibility is not only the right thing to do, but it also
              benefits our clients by providing long-term cost savings and a
              healthier living environment.
            </p>
          </div>
          <hr />
          <div>
            <h6 className="my-4">Do you only work with eco-friendly properties?</h6>
            <p>
              While we specialize in promoting and selling eco-friendly
              properties, we work with all types of properties. Our focus is on
              promoting sustainable practices and educating our clients on how
              they can make their properties more eco-friendly.
            </p>
          </div>
          <hr />
          <div>
            <h6 className="my-4">Can you help me find an eco-friendly property?</h6>
            <p>
              Absolutely! We have a database of eco-friendly properties and can
              work with you to find a property that aligns with your
              sustainability goals. Additionally, we can provide guidance on how
              to make any property more eco-friendly.
            </p>
          </div>
          <hr />
          <div>
            <h6 className="my-4">
              What is your process for ensuring a property is eco-friendly?
            </h6>
            <p>
              We work with builders and contractors who specialise in
              eco-friendly building practices. We also conduct assessments of a
              property's energy and water usage, as well as its overall
              sustainability features, to ensure that it aligns with our
              eco-friendly standards.
            </p>
          </div>
          <hr />
          <div>
            <h6 className="my-4">Are eco-friendly properties more expensive?</h6>
            <p>
              Not necessarily. While some eco-friendly features may require an
              initial investment, such as solar panels or energy-efficient
              systems, they can ultimately lead to long-term cost savings on
              utility bills. Additionally, there are often government incentives
              and tax breaks available for eco-friendly properties and features.
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Questions;
