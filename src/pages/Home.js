import React from "react";
import Bg from "../images/BG.jpeg";
import Login from '../components/Formlogin'
import "../App.css";

const Home = () => {
  return (
    <>
      <div id="home" className="home">
        <div className="content">
          <h1>Virtual Cinema</h1>
          <h2>Untuk Melihat Tontonan Favoritmu</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
            corrupti consectetur. Labore minus eos iste, magni aspernatur
            inventore.
          </p>
          <Login/>
        </div>
        <div
          className="bg"
          style={{ background: `url(${Bg}) no-repeat center /cover` }}
        />
      </div>
    </>
  );
};

export default Home;
