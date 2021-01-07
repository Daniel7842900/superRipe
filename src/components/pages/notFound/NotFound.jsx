import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div id="top404">
            <h1>404</h1>
            <p>This link has gone bad. Please click the banana to go back.</p>
          </div>
        </Col>
        <Col>
          <div id="bottom404">
            <Link to="/">
              <Image src="/resources/logo.png" alt="" id="logo-btn-img"></Image>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
