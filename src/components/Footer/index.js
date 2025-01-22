import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer-card" id ="footer">
      <div className="container">
        <h2 className="footer-heading d-flex justify-content-center">
          CONTACT US 24/7
        </h2>
        <div className="row justify-content-center pt-5">
          <div className="col-md-7 d-md-flex justify-content-between ">
            <div className="details-card white">
              <p className="details-head">CALL US</p>
              <p className="details-desc">6281355853</p>
            </div>
            <div className="details-card white">
              <p className="details-head">EMAIL US</p>
              <a
                href="expertservices0117@gmail.com"
                className="text-decoration-none white details-desc"
              >
                expertservices0117@gmail.com
              </a>
            </div>
            <div className="details-card white">
              <p className="details-head">AREAS COVERED</p>
              <p className="d-md-flex justify-content-center details-desc">
                ongolle
              </p>
            </div>
            <div className="details-card white">
              <p className="details-head">FOLLOW US ON</p>
              <div className="d-flex gap-3 ">
                <FaFacebookF size={18} />
                <AiFillInstagram size={22} />
                <FaTwitter size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center pt-5">
          <div className="text-white col-md-7">
            <div className="row">
                <div className="col-md-6 d-flex gap-2 px-3">
                    <FaLocationDot size={30} /> 
                    <p>
                        Venugopal market near fish market, Opp DGP Kalyana Mandapam, Mypadu Road Nellore - 524002
                    </p>
                </div>
                <div className="col-md-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3863.340775632733!2d80.0085278!3d14.465111100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDI3JzU0LjQiTiA4MMKwMDAnMzAuNyJF!5e0!3m2!1sen!2sin!4v1737047211269!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{border: "2px"}}
                        allowfullscreen=""
                        loading="lazy"
                        title="map"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
