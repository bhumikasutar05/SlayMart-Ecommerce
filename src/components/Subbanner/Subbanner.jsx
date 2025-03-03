import React from "react";
import "./Subbanner.css";

const Subbanner = () => {
  return (
    <div className="newsletter-container">
      <div className="news-letter-data">
        <h1>Sign Up For Newsletter </h1>
        <p>
          Get E-mail updates about our latest shop and{" "}
          <span>special offers.</span>
        </p>
      </div>

      <div className="news-letter-input">
        <input type="email" placeholder="Your Email Address" required />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Subbanner;
