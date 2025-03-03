import React from "react";
import "./ContactUs.css";
import ContactImg from "./contact_img.png";
import Swal from "sweetalert2";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "980f2467-c8bc-4910-a07c-cadb185e4fbb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
      });
    }
  };
  return (
    <div>
      <div className="heading-contact">
        <span>Contact Us-</span>
      </div>

      <div className="contact-container">
        {/* left */}
        <div className="contact-left">
          <img src={ContactImg} alt="" />
        </div>

        {/* Right */}
        <section className="contact-right">
          <form onSubmit={onSubmit}>
            {/* Username */}
            <div className="input-box">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="field"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="input-box">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                className="field"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="input-box">
              <label>Your Message</label>
              <textarea
                className="field msg"
                name="message"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button className="contact-btn">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
