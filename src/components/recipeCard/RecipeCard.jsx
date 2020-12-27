import React, { Component } from "react";
import { Route } from "react-router-dom";
import Paginate from "../common/pagination/Paginate";
import ListGroupCustom from "../common/listgroupCustom";
import RecipeCardContent from "./RecipeCardContent/RecipeCardContent";
import { Container, Row } from "react-bootstrap";
import "./RecipeCard.css";

class RecipeCard extends Component {
  render() {
    const {
      match,
      pageSize,
      totalCount,
      paginatedRecipes,
      categories,
      onCategorySelect,
      onPageChange,
    } = this.props;

    return (
      <Container>
        <Row>
          <div className="recipe-div content-container">
            <div className="recipe-display-div">
              <div className="recipe-cat">
                <ListGroupCustom
                  items={categories}
                  onItemSelect={onCategorySelect}
                ></ListGroupCustom>
              </div>
              <Route
                path={`${match.path}/:category?`}
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
                onPageChange={onPageChange}
              ></Paginate>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default RecipeCard;
