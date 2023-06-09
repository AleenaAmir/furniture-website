import React from "react";
import "./herosection.css";
function HeroSection() {
  return (
    <div>
      <div>
        <div className="hero1">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685958093/scandinavian-interior-mockup-wall-decal-background_1_owfido.png"
            alt="furni"
            className="furni"
          />
        </div>
        <div className="hero2">
          <p className="hero2-p">New Arrival</p>
          <h1 className="hero2-h">
            Discover Our
            <br /> New Collection
          </h1>
          <p className="hero-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="hero2-btn">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
