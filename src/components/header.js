import React from "react";
import Logo from "../assets/logo/Logo.png";
import { Link } from "react-router-dom";
import User from "./Userprofile";

const Header = () => {
  return (
    <header
      className="d-inline-flex position-fixed justify-content-between"
      style={{
        width: "100vw",
        padding: "20px",
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
      <User />
    </header>
  );
};

export default Header;
