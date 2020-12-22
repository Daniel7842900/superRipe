import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { getRecipes } from "../../services/fakeRecipes";
import { getCategories } from "../../services/fakeCategories";
import { paginate } from "../../utils/paginate";
import Paginate from "../common/pagination/Paginate";
import RecipeCardContent from "./RecipeCardContent/RecipeCardContent";
import ListGroupCustom from "../common/listgroupCustom";
import "./RecipeCard.css";
import { Container, Row } from "react-bootstrap";

class RecipeCard extends Component {
  state = {
    recipes: getRecipes(),
    categories: getCategories(),
    currentPage: 1,
    pageSize: 1,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { currentPage, pageSize, recipes: allRecipes } = this.state;

    // paginate method returns items on current page.
    const paginatedRecipes = paginate(allRecipes, currentPage, pageSize);

    return { paginatedRecipes, pageSize };
  };

  render() {
    // const { currentPage, pageSize, recipes: allRecipes } = this.state;
    const { match } = this.props;

    // // paginate method returns items on current page.
    // const paginatedRecipes = paginate(allRecipes, currentPage, pageSize);
    // console.log(paginatedRecipes);

    const { paginatedRecipes, pageSize } = this.getPagedData();

    return (
      <Container>
        <Row>
          <div className="recipe-div content-container">
            <div className="recipe-display-div">
              <div className="recipe-cat">
                <ListGroupCustom></ListGroupCustom>
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
                itemsCount={this.state.recipes.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
              ></Paginate>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default RecipeCard;
