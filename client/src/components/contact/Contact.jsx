import React from "react";
import "./contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Get In Touch With Us:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your email..." />
          <button>Join US</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
