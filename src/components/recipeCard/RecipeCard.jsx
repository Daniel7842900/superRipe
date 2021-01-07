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
      match,
      pageSize,
      totalCount,
      paginatedRecipes,
      currentPage,
      categories,
      onCategorySelect,
      onPageChange,
      onPreviousPage,
    } = this.props;

    return (
      <Container>
        <Row>
          <div className="recipe-div content-container">
            <Card className="recipe-display-div" text="dark">
              <Card.Header className="recipe-cat">
                <ListGroupCustom
                  items={categories}
                  onItemSelect={onCategorySelect}
                ></ListGroupCustom>
              </Card.Header>
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
              ></Paginate>
            </Card>
          </div>
        </Row>
      </Container>
    );
  }
}

export default RecipeCard;
