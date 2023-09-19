import React from "react";
import CallOutgoingIcon from "../img/call-outgoing.png";
import EnvelopeIcon from "../img/envelope.png";
import LinkedinIcon from "../img/linkedin.png";
import GithubIcon from "../img/github.png";
import App from "../App";

class ContactModal extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-header">
                    <h2>Here's here my info.</h2>
                </div>
                <div className="modal-body">
                    <ul>
                        <ul className="contact-list">
                            <a href="tel:+2086143210">
                                <img src={CallOutgoingIcon} alt="Call Icon" className="contact-icon" />
                                (208) 614-3210
                            </a>
                        </ul>
                        <ul className="contact-list">
                            <a href="rdev.byte@gmail.com">
                                <img src={EnvelopeIcon} alt="Envelope Icon" className="contact-icon" />
                                rdev.byte@gmail.com
                            </a>
                        </ul>
                        <ul className="contact-list">
                            <a href="https://www.linkedin.com/in/raphael-rizk/">
                                <img src={LinkedinIcon} alt="LinkedIn Icon" className="contact-icon" />
                                https://www.linkedin.com/in/raphael-rizk/
                            </a>
                        </ul>
                        <ul className="contact-list"> 
                            <a href="https://github.com/rdev-byte">
                                <img src={GithubIcon} alt="GitHub Icon" className="contact-icon" />
                                https://github.com/rdev-byte
                            </a>
                        </ul>
                    </ul>
                </div>
                <div className="modal-footer">
                    <button onClick={this.props.onClose}>Close</button>
                </div>
            </div>
        );
    }
}

export default ContactModal;
