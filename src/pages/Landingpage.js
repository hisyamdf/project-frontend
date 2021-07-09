import React from "react";
import Filmlist from "../components/Filmlist";
import Joker from "../assets/films/thriller/joker/large.jpg";

const Landingpage = () => {
  return (
    <>
      <div style={{ height: "auto", width: "100%", background: "black" }}>
        <div className="film-content">
          <div
            className="poster-text text-white position-absolute "
            style={{ zIndex: "1", top: "15vw", left: "40px"}}
          >
            <h1 style={{ fontSize: "50px" }}>Film Title</h1>
            <p
              style={{
                width: "40%",
                fontSize: "14px",
                fontWeight: "250",
                lineHeight: "1.6",
                marginTop: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis, suscipit ut obcaecati maxime cum placeat quis ratione earum adipisci mollitia saepe quaerat ullam qui?
            </p>
          </div>
          <div>
            <div
            className="poster"
            style={{
              background: `url(${Joker}) no-repeat center /cover`,
              height: "500px",
            }}
          />
          </div>
        </div>
        <Filmlist />
      </div>
    </>
  );
};

export default Landingpage;
