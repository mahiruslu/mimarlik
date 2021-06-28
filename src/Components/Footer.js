import React from "react";
import logo from "../Images/apple.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  ModalFooter,
} from "react-bootstrap";

function Footer() {
  return (
    <div className="footer ">
      <div className="footerLeft">
        <a
          href="https://www.instagram.com/okamimarlik/"
          target="blank"
          className="btn btn-dark"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" id="faIcon" />
          @okamimarlik
        </a>
        <a href="mailto:info@okamimarlik.com" className="btn btn-dark">
          <FontAwesomeIcon icon={faMailBulk} id="faIcon" />
          info@okamimarlik.com
        </a>
      </div>
      <div className="footerRight">
        <a
          href="https://mahiruslu.github.io/"
          target="blank"
          className="btn btn-dark"
        >
          {" "}
          This site made by <span>Mahir</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
