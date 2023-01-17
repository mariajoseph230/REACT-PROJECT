import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/coffees.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
    
        <h1 className="animation"> THE COFFEE SHOP </h1>
        
        
        <p> COFFEE TO FIT ANY MOOD</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;