import React from "react";
import "./Consultation.css";
const Consultation = () => {
  return (
    <div className="consultaionPart">
      <div className="container">
        <div className="consultationWrapper">
          <div className="WrapperLeft">
            <h1 className="WrapperLeft__tilte">
              Book A Free Digital Marketing Consultation
            </h1>
          </div>
          <div className="WrapperRight">
            <input
              type="text"
              placeholder="Your Email"
              className="WrapperRight__email"
            />
            <button className="WrapperRight__email WrapperRight--button">
              Book my free meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
