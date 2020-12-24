import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getRecipes } from "../../services/fakeRecipes";
import { getCategories } from "../../services/fakeCategories";
import { paginate } from "../../utils/paginate";
import Paginate from "../common/pagination/Paginate";
import ListGroupCustom from "../common/listgroupCustom";
import RecipeCardContent from "./RecipeCardContent/RecipeCardContent";
import { Container, Row } from "react-bootstrap";
import "./RecipeCard.css";

class RecipeCard extends Component {
  state = {
    recipes: [],
    categories: [],
    currentPage: 1,
    pageSize: 1,
  };

  componentDidMount() {
    const categories = [{ name: "All" }, ...getCategories()];
    this.setState({ recipes: getRecipes(), categories });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      recipes: allRecipes,
      selectedCategory,
    } = this.state;

    // filter method returns filtered recipes by categories.
    // If selectedCategory is truthy, we return recipes that have same category id with selected category id.
    // Otherwise, we simply return all recipes.
    // selectedCategory.id is for "all" category. ("all" category doesn't have id)
    const filtered =
      selectedCategory && selectedCategory.id
        ? allRecipes.filter((r) => r.category.id === selectedCategory.id)
        : allRecipes;

    // paginate method returns items on current page.
    const paginatedRecipes = paginate(filtered, currentPage, pageSize);

    return { paginatedRecipes, pageSize, totalCount: filtered.length };
  };

  render() {
    // const { currentPage, pageSize, recipes: allRecipes } = this.state;
    const { match } = this.props;
    // console.log(match);

    const { paginatedRecipes, pageSize, totalCount } = this.getPagedData();

    return (
      <Container>
        <Row>
          <div className="recipe-div content-container">
            <div className="recipe-display-div">
              <div className="recipe-cat">
                <ListGroupCustom
                  items={this.state.categories}
                  selectedItem={this.state.selectedCategory}
                  onItemSelect={this.handleCategorySelect}
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
