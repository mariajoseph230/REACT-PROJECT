import React, { useState } from "react";
import Logo from "../assets/coffeeLogo.jpeg";
import { Link } from "react-router-dom";
import {FaRecordVinyl} from 'react-icons/fa';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          {/* <a href="Home.js"> Home </a>
          <a href="Menu.js"> Menu </a>
          <a href="About.js"> About </a>
          <a href="Contact.js">  Contact </a> */}
          <Link to="/"> Home </Link>
           <Link to="/menu"> Menu </Link> 
          <Link to="/About"> About </Link>
          <Link to="/Contact"> Contact </Link> 
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
         {/* <a href="Home.js"> Home </a>
          <a href="Menu.js"> Menu </a>
          <a href="About.js"> About </a>
          <a href="Contact.js">  Contact </a> */}
        <button onClick={toggleNavbar}>
          <FaRecordVinyl />
        </button>
      </div>
    </div>
  );
}

export default Navbar;