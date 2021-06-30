import React from "react";
import Logo from "../images/logo/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src={Logo} alt="" />
      </a>
    </header>
  );
};

export default Header;