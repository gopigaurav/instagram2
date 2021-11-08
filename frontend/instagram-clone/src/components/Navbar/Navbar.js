import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const NavIcons = [
    {
      id: "0",
      path: "/",
      icon: "icons8-home-48.png",
    },
    {
      id: "1",
      path: "/",
      icon: "icons8-send-64.png",
    },
    {
      id: "0",
      path: "/",
      icon: "icons8-add-64.png",
    },
    {
      id: "0",
      path: "/",
      icon: "icons8-compass-24.png",
    },
    {
      id: "0",
      path: "/",
      icon: "icons8-heart-24.png",
    },
    {
      id: "0",
      path: "/",
      icon: "icons8-home-48.png",
    },
  ];
  return (
    <div className="nav__na">
      <div className="navbar">
        <div>
          <Link to="/" className="logo">
            Instagram
          </Link>
        </div>
        <div className="navbar_links">
          {NavIcons.map((link) => (
            <div className="nav_icons">
              <img src={require(`../../assets/images/${link.icon}`).default}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
