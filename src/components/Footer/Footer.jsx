import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="foot1">
          {/* Logo */}
          <div className="img">
            <Link to={"/"} className="logo">
              Slay<span>Mart</span>
            </Link>
          </div>
          {/* AboutUs */}
          <div className="about-us">
            <span>AboutUs</span>
            <p>
              Welcome to SlayMart, your ultimate destination for trendy,
              high-quality, and affordable fashion, beauty, and lifestyle
              products. We believe that everyone deserves to slay effortlessly,
              and our mission is to bring you the latest styles, must-have
              essentials, and top-tier customer service—all in one place.
            </p>
          </div>

          {/* get in touch  */}
          <div className="get-in-touch">
            <span>📩GET IN TOUCH</span>
            <ul>
              <li>+91-932267578</li>
              <li>contact@slaymartoi.com</li>
            </ul>
          </div>
        </div>
        {/* Quick Links */}
        <div className="quick-links">
          <span>Quick Links</span>

          <Link to={"/"} target="_top">
            Home
          </Link>

          <Link to={"/contact"} target="_top">
            Contact-Us
          </Link>

          <Link to={"shop/mens"} target="_top">
            mens
          </Link>

          <Link to={"shop/women"} target="_top">
            women
          </Link>

          <Link to={"shop/kids"} target="_top">
            kids
          </Link>

          <Link to={"shop/"} target="_top">
            electronics
          </Link>
        </div>

        {/* Follow me */}
        <div className="follow-me">
          <span className="follow-me-head">Follow Us Now</span>
          <div className="follow-us-sub">
            <a
              href="https://www.instagram.com/itsme_bhumi_?igsh=ZHhsd2I2YzYzbHMz&utm_source=ig_contact_invite"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram color="orange" size={"20px"} />
              <span className="follow-me-heading">Instagram</span>
            </a>

            <a
              href="https://github.com/bhumikasutar05"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="orange" size={"20px"} />{" "}
              <span className="follow-me-heading">Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/bhumika-sutar-0999bb27a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="orange" size={"20px"} />
              <span className="follow-me-heading">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="copy">
        <p>Copyright 2025@ slaymart.com -All Right Reserve</p>
      </div>
    </div>
  );
};

export default Footer;
