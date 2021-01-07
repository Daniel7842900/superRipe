import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar className="nav-bar p-0">
        <Nav className="nav justify-content-center m-0 p-0" as="ul">
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
      </Navbar>
    );
  }
}

export default NavBar;
