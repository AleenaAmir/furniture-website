import React from "react";
import "./navbar.css";
function NavBar() {
  return (
    <div>
      <div class="nav ">
        <img
          src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685955562/SkinClinic_tebd30.png"
          alt="logo"
          className="logo"
        />

        <div>
          <div class="nav-link">
            <a class="nav-item " href="/">
              Home
            </a>
            <a class="nav-item" href="/">
              Services
            </a>
            <a class="nav-item" href="/">
              Doctors
            </a>
            <a class="nav-item " href="/">
              Products
            </a>
            <a class="nav-item " href="/">
              Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
