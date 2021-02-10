import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="nav-bar" expand="lg" data-test="nav-bar">
      <Navbar.Brand>
        <span>
          <Image
            src="/resources/favicon.png"
            id="navbar-brand-favicon"
            data-test="navbar-brand-favicon"
          ></Image>
        </span>
        <span data-test="navbar-brand-title">Super Ripe</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="top-navbar-nav">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </Navbar.Toggle>
      <Navbar.Collapse id="top-navbar-nav">
        <Nav className="nav justify-content-end m-0 p-0 mr-auto" as="ul">
          <Nav.Item as="li" className="nav-cat">
            <Nav.Link href="/#how">How</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="nav-cat">
            <Nav.Link href="/#why">Why</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="nav-cat">
            <Nav.Link href="/#about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
