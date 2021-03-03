import React, { Component } from "react";
import { Route } from "react-router-dom";
import Paginate from "../common/pagination/Paginate";
import ListGroupCustom from "../common/listgroupCustom";
import RecipeCardContent from "./RecipeCardContent/RecipeCardContent";
import { Card, Container, Row } from "react-bootstrap";
import "./RecipeCard.css";

class RecipeCard extends Component {
  render() {
    const {
      pageSize,
      totalCount,
      paginatedRecipes,
      currentPage,
      onPageChange,
      onPreviousPage,
      onNextPage,
    } = this.props;

    return (
      <Container>
        <Row>
          <div className="recipe-div content-container">
            <Card className="recipe-display-div" text="dark">
              <Card.Header className="recipe-cat"></Card.Header>
              <Route
                render={(props) => (
                  <RecipeCardContent
                    paginatedRecipes={paginatedRecipes}
                    {...props}
                  ></RecipeCardContent>
                )}
              ></Route>
              <Paginate
                itemsCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
                onPreviousPage={onPreviousPage}
                onNextPage={onNextPage}
              ></Paginate>
            </Card>
          </div>
        </Row>
      </Container>
    );
  }
}

export default RecipeCard;
