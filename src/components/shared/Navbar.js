import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "#050517" }}
      class="navbar w-100 navbar-expand navbar-dark"
    >
      <a class="navbar-brand" href="#">
        <img
          style={{ height: "5vw" }}
          alt=""
          src="../../images/logo.png"
        ></img>
      </a>
    <div class="navbar ml-auto" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a style={{fontSize:"1.3vw"}} class="nav-link" href="#">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a style={{fontSize:"1.3vw"}} class="nav-link" href="#">
              Roadmap
            </a>
          </li>
          <li class="nav-item">
            <a style={{fontSize:"1.3vw"}} class="nav-link" href="#">
              How to Buy
            </a>
          </li>
          <li class="nav-item">
            <a style={{fontSize:"1.3vw"}} class="nav-link" href="#">
              FAQ
            </a>
          </li>
          <li class="nav-item">
            <a style={{fontSize:"1.3vw"}} class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
