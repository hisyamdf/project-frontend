import React from "react";
import { Button } from "react-bootstrap";

const Dropdown = () => {
  return (
    <>
      <div
        className="dropdown-content d-flex justify-content-center align-items-center flex-column mt-2"
        style={{
          padding: "20px 30px",
          position: "relative",
          textAlign: "center",
          boxShadow: "0 3px 5px rgba(255, 255, 255, .3)"
        }}
      >
        <div
          className="drop title"
          style={{ fontSize: "20px", fontWeight: "1000", marginBottom: "5px"}}
        >
          User Profile
        </div>
        <div
          className="drop name"
          style={{ fontSize: "16px", fontWeight: "800", marginBottom: "10px"}}
        >
          Nama User
        </div>
        <div className="dropdown-list" style={{lineHeight: "30px", textAlign: "left"}}>
          <div className="separator" style={{margin: "10px 0", borderBottom: "1px solid rgba(255, 255, 255, .5"}}></div>
          <div className="drop email">Alamat e-mail</div>
          <div className="drop gender">Jenis Kelamin</div>
          <div className="drop address">Alamat</div>
          <div className="drop phone">Nomor Telepon</div>
        </div>
        <Button
            className="button signout justify-content-center"
            onClick={() => {window.location.href="/"}}
          >
            Sign Out
          </Button>
      </div>
    </>
  );
};

export default Dropdown;
