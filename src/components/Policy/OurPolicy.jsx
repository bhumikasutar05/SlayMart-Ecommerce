import React from "react";
import "./OurPolicy.css";
import Exchange_icon from "./exchange_icon.png";
import Quality_icon from "./quality_icon.png";
import Support_icon from "./support_img.png";

const OurPolicy = () => {
  return (
    <div className="main">
      <div className="main-2">
        <img src={Exchange_icon} alt="" className="policy-image" />
        <p className="para">Easy Exchange Policy </p>
        <p className="para1">We offer hassle free exchange policy</p>
      </div>

      <div className="main-2">
        <img src={Quality_icon} alt="" className="policy-image" />
        <p className="para">Day Return Policy </p>
        <p className="para1">We provide 7 days free return policy</p>
      </div>

      <div className="main-2">
        <img src={Support_icon} alt="" className="policy-image" />
        <p className="para">Best customer support </p>
        <p className="para1">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
