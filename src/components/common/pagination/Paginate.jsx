import React, { Component } from "react";
import _ from "lodash";
import Pagination from "react-bootstrap/Pagination";

class Paginate extends Component {
  render() {
    const { itemsCount, pageSize, onPageChange } = this.props;
    console.log("paginate rendering...");

    // Total page counts. We are displaying 1 item each page.
    const pagesCount = Math.ceil(itemsCount / pageSize);

    // Page numbers in an array.
    const pages = _.range(1, pagesCount + 1);

    return (
      <Pagination className="justify-content-center">
        <Pagination.Prev></Pagination.Prev>
        {pages.map((page) => (
          <Pagination.Item onClick={() => onPageChange(page)}>
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next></Pagination.Next>
      </Pagination>
    );
  }
}

export default Paginate;
