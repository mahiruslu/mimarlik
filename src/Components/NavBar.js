import React from "react";
import logo from "../Images/LOGO.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function navBar() {
  return (
    <Navbar bg="light" variant="light" className="fixed-top" expand="lg">
      <Navbar.Brand href="/" className="navBarLogo">
        <img
          src={logo}
          width="45"
          height="35"
          className="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Anasayfa</Nav.Link>
          <Nav.Link href="/Services">Hizmetlerimiz</Nav.Link>
          {/* <NavDropdown title="Hizmetlerimiz" id="basic-nav-dropdown" bg="dark">
            <NavDropdown.Item href="#action/3.2">Mimarlık</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">İç Mimarlık</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Restorasyon</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              Proje Tasarımı
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">İnşaat</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">Uygulama</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="/Contact">İletişim</Nav.Link>
          <Nav.Link
            target="_blank"
            href="https://www.instagram.com/okamimarlik/"
            className="navBarSocial"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <span> Instagram</span>
          </Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navBar;
