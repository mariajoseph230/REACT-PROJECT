import React from "react";
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram/> <FaTwitter/> <FaFacebook /> <FaLinkedin />
      </div>
      <p> &copy; 2023 thecoffeeshop.com</p>
    </div>
  );
}

export default Footer;