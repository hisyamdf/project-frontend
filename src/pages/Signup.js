import React from "react";
import Register from "../components/Formregister";
import Bg from "../images/BG.jpeg";
import "../App.css";

const Signup = () => {
  return (
    <>
    <Register />
      <div
        className="bg"
        style={{ background: `url(${Bg}) no-repeat center /cover` }}
      ></div>
    </>
  );
};

export default Signup;
