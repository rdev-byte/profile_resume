import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ContactModal from "./ContactModal";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <header className="jumbotron">
      <div className="container">
        <nav>
          <ul className="nav justify-content-between">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleShow}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <p className="lead">
          I'm a passionate developer with a love for web development and programming languages.
        </p>

        <Modal show={showModal} onHide={handleClose}>
          <ContactModal onClose={handleClose} />
        </Modal>
      </div>
    </header>
  );
}

export default Header;
