import React from "react";
import Bg from "../assets/images/BG.jpeg";
import Login from "../components/Formlogin";
import "../App.css";

const Home = () => {
  return (
    <>
      <div
        className="home position-fixed"
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          minHeight: "600px",
        }}
      >
        <div
          className="content d-flex flex-column position-fixed"
        >
          <h1 style={{ fontSize: "50px" }}>Virtual Cinema</h1>
          <h2 style={{ margin: "5px 0", fontSize: "20px" }}>
            Untuk Melihat Tontonan Favoritmu
          </h2>
          <p
            style={{
              width: "100%",
              fontSize: "14px",
              fontWeight: "250",
              lineHeight: "1.6",
              marginTop: "40px",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
            corrupti consectetur. Labore minus eos iste, magni aspernatur
            inventore.
          </p>
          <Login />
        </div>
        <div
          className="bg"
          style={{
            background: `url(${Bg}) no-repeat center /cover`,
          }}
        />
      </div>
    </>
  );
};

export default Home;
