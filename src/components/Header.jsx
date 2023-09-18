import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

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
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <p className="lead">
                    I'm a passionate developer with a love for web development and programming languages.
                </p>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Dialog className="custom-modal">
                    <Modal.Content>
                        <Modal.Header closeButton>
                            <Modal.Title>Contact Me</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>LinkedIn</p>
                            <p>GitHub</p>
                            <p>Email</p>
                            <p>Phone</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal.Dialog>
            </Modal>
        </header>
    );
}

export default Header;
