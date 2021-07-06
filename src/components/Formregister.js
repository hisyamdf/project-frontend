import React from "react";
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Formregister = () => {
  return (
    <>
      <Modal
        show={true}
        className="bg-gradient"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="regis-form">
          <Modal.Title className="regis-title">Sign Up</Modal.Title>
          <Form>
            <Form.Group className="form-floating" id="floatingUsername">
              <Form.Control className="field username" type="text" placeholder="Username" />
              <label for="floatingUsername">Username</label>
            </Form.Group>

            <Form.Group className="form-floating" id="floatingEmailRegis">
              <Form.Control className="field email-regis" type="email" placeholder="Email" />
              <label for="floatingRegis">Email</label>
            </Form.Group>

            <Form.Group className="form-floating" id="floatingPassRegis">
              <Form.Control className="field pass-regis" type="password" placeholder="Password" />
              <label for="floatingPassRegis">Password</label>
            </Form.Group>

            <Form.Group className="form-floating" id="floatingGender">
              <Form.Control className="field gender" as="select">
              <option selected disabled>Pilih...</option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </Form.Control>
              <label for="floatingGender">Jenis Kelamin</label>
            </Form.Group>

            <Form.Group className="form-floating" id="floatingAddress">
              <Form.Control className="field address h-100" as="textarea" placeholder="Alamat" />
              <label for="floatingAddress">Alamat</label>
            </Form.Group>

            <Form.Group className="form-floating" id="floatingPhone">
              <Form.Control className="field phone" type="text" placeholder="Nomor Telepon" />
              <label for="floatingPhone">Nomor Telepon</label>
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-between">
          <Link exact to="/" className="button comeback">
            Kembali
          </Link>
          <Link exact to="/landingpage" className="button regisform">
            Sign up
          </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Formregister;
