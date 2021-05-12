import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Login from "./login.js";
const ModalExample = (props) => {
  const className = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Đăng nhập</ModalHeader>
        <ModalBody>
          <Login />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Sign In
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Sign Up
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ModalExample;
