import React, { useState } from "react";
import Logo from "../assets/logo/Logo.png";
import { Link } from "react-router-dom";
import User from "./Userprofile";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(true)

  const hideUser = () => {
    if ( window.location.href !== "/landingpage") {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("location", hideUser)

  return (
    <header
      className={navbar ? "navbar active" : "navbar"}
      style={{
        width: "100%",
        padding: "5px 20px",
        zIndex: "3",
        alignItems: "center",
      }}
    >
      <Link exact to="/">
        <img
          className="h-auto"
          src={Logo}
          alt=""
          style={{ width: "100px", transition: "margin 0.125s ease" }}
        />
      </Link>
      <User className={user ? "user hide" : "user"}/>
    </header>
  );
};

export default Header;
