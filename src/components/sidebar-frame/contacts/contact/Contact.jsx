import React from "react";
import "./Contact.css";
import { IoPersonCircle } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact-container">
      <IoPersonCircle className="contact-circle"/>
      <div className="group">
        <div className="group-header">
          <h5>Master BDTS - 405</h5>
          <span className="message-date">10:03</span>
        </div>
        <h6>Radu: last message</h6>
      </div>
    </div>
  );
};

export default Contact;
