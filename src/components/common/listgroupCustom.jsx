import React, { Component } from "react";
import { ListGroup, Container, Row } from "react-bootstrap";

class ListGroupCustom extends Component {
  render() {
    const { items, onItemSelect } = this.props;
    console.log("list group rendering...");

    return (
      <Container>
        <Row className="justify-content-center">
          <ListGroup horizontal>
            {items.map((item) => (
              <ListGroup.Item
                key={item["id"]}
                className="btn btn-info btn-recipe-cat"
                variant="info"
                onClick={() => onItemSelect(item)}
              >
                <span>{item.name}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default ListGroupCustom;
