import React from "react";
import logo from "../Images/LOGO.PNG";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function navBar() {
  return (
    <Navbar
      variant="dark"
      className="fixed-top color-nav"
      sticky="top"
      collapseOnSelect
      expand={false}
    >
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
          <NavDropdown.Divider />
          <Nav.Link href="/Services">Mimarlık</Nav.Link>
          <Nav.Link href="/Services">İç Mimarlık</Nav.Link>
          <Nav.Link href="/Services">Restorasyon</Nav.Link>
          <Nav.Link href="/Services">Proje Tasarımı</Nav.Link>
          <Nav.Link href="/Services">İnşaat</Nav.Link>
          <Nav.Link href="/Services">Uygulama</Nav.Link>
          <NavDropdown.Divider />
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
        <Navbar.Text>
          ©2021, All Rights Reserved. <span>Oka Mimarlık</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navBar;
