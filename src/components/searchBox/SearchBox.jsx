import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    const { onChange, onSearch } = this.props;
    console.log("SearchBox is getting rendered...");

    return (
      <div className="main-function-div content-container">
        <div className="main-top-div">
          <h1>Super Ripe</h1>
        </div>
        <div className="main-search-div">
          <div className="search-div">
            <Form className="search-form" onSubmit={onSearch}>
              <Form.Group controlId="formSearchBox">
                <Form.Control
                  type="text"
                  placeholder="Search food..."
                  name="search"
                  onChange={onChange}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="link" className="m-0 p-2">
                <Image
                  src="/resources/search-icon.png"
                  alt=""
                  id="search-btn-img"
                ></Image>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBox);