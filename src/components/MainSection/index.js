import React from "react";
import "./index.css";
import SharePopup from "../SharePopup";

const MainSection = () => {
  return (
    <div className="main-bg-img d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-flex flex-column gap-4">
            <h1
              className="main-heading"
              data-aos="fade-up"
              data-aos-duration={`1000`}
              data-aos-delay="100"
            >
              CALL NOW <br />
              ANY JOB, WE WILL FIX IT. <br />
              6281355853
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration={`1000`}
              data-aos-delay="200"
            >
              {/* <a href="tel:+18075754545" className="number">
                <button className="appointment-btn align-self-start">
                  GET A FREE QUOTE!
                </button>
              </a> */}
              <SharePopup element= {<button className="appointment-btn align-self-start">
                  GET A FREE QUOTE!
                </button>} text={"Contact Us!"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
