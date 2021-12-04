import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const [token, setToken] = useState(user ? true : false);
  useEffect(() => {
    console.log("run 1");
  }, [user]);
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
      id: "2",
      path: "/create",
      icon: "icons8-add-64.png",
    },
    {
      id: "3",
      path: "/",
      icon: "icons8-compass-24.png",
    },
    {
      id: "4",
      path: "/",
      icon: "icons8-heart-24.png",
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
            <div
              className="nav_icons"
              onClick={() => (window.location.href = `${link.path}`)}
            >
              <img
                src={require(`../../assets/images/${link.icon}`).default}
              ></img>
            </div>
          ))}
          <div
            className="nav_icons avatar"
            onClick={() => (window.location.href = `/profile/${user?._id}`)}
          >
            <img src={user.pic}></img>
          </div>
          {token ? (
            <div
              className="nav_logout"
              onClick={() => {
                localStorage.clear();
              }}
            >
              <p>Logout</p>
            </div>
          ) : (
            <div
              className="nav_logout"
              onClick={() => (window.location.href = "/signin")}
            >
              <p>Signin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
