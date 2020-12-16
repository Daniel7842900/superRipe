import React, { Component } from "react";
import _ from "lodash";
import Pagination from "react-bootstrap/Pagination";

class Paginate extends Component {
  render() {
    const { itemsCount, pageSize, recipes } = this.props;

    const pagesCount = itemsCount / pageSize;
    const pages = _.range(1, pagesCount + 1);
    console.log(pages);

    return (
      <Pagination className="justify-content-center">
        <Pagination.Prev></Pagination.Prev>
        {pages.map((page) => (
          <Pagination.Item>{page}</Pagination.Item>
        ))}
        <Pagination.Next></Pagination.Next>
      </Pagination>
    );
  }
}

export default Paginate;
