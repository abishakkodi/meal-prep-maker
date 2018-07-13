import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import LoadingBar from '../Utility/LoadingBar';
import RecipesCategory from './RecipesCategory';
import './Recipes.css';

class Recipes extends Component {

  render() {
    if(this.props.recipes.protein.length){
      return (
        <div className="">
          <h1> Current Recipes </h1>
          <div>
            <RecipesCategory categoryName='Proteins' recipeList={this.props.recipes.protein}/>
          </div>

          <div>
            <RecipesCategory categoryName='Vegetables' recipeList={this.props.recipes.vegetables}/>
          </div>

          <div>
            <RecipesCategory categoryName='Carbs' recipeList={this.props.recipes.carbs}/>
          </div>


        </div>
      );
    } else {
      return (
        <LoadingBar />
        )
    }

  }
}

const mapStateToProps = state => {
  return ({
    recipes: state.databaseRecipes.recipes
  })
}



export default withRouter(connect(mapStateToProps)(Recipes));
