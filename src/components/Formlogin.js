import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const Formlogin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="button join" variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose} className="bg-gradient"
      centered>
        <Modal.Body className="login-form">
        <Modal.Title className="login-title">Sign In</Modal.Title>
          <Form>
            <Form.Group className="form-floating" id="floatingEmailLogin">
              <Form.Control className="field email-login" type="email" placeholder="Email"/>
              <label for="floatingEmailLogin">Email</label>
            </Form.Group>

            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>

            <Form.Group className="form-floating" id="floatingPasswordLogin">
              <Form.Control className="field pass-login" type="password" placeholder="Password"/>
              <label for="floatingPasswordLogin">Password</label>
            </Form.Group>
            <Form.Group className="form-check" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
          </Form>


          <Button className="button loginform" variant="primary" onClick={handleClose}>
              Sign In
            </Button>
          <p>Belum Punya Akun? {" "}
          <Link exact to={"/signup"} className="link">
            Daftar di sini
          </Link>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Formlogin;
