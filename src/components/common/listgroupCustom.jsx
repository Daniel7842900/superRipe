import React, { Component } from "react";
import { ListGroup, Container, Row } from "react-bootstrap";

class ListGroupCustom extends Component {
  render() {
    const { items, selectedItem, onItemSelect } = this.props;

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
                {item.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default ListGroupCustom;
