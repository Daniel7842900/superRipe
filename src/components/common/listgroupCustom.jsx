import React, { Component } from "react";
import { ListGroup, Container, Row } from "react-bootstrap";

class ListGroupCustom extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <ListGroup horizontal>
            <ListGroup.Item
              className="btn btn-info btn-recipe-cat"
              variant="info"
            >
              Food
            </ListGroup.Item>
            <ListGroup.Item
              className="btn btn-info btn-recipe-cat"
              variant="info"
            >
              Life Hack
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default ListGroupCustom;
