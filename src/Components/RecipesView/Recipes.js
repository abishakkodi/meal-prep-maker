import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import LoadingBar from '../Utility/LoadingBar';
import Recipe from './Recipe';
import RecipesCategory from './RecipesCategory';
import store from '../storeRoute';
import './Recipes.css';

const test = [1,2,3,4];

class Recipes extends Component {

  render() {
    const { stored, databaseRecipes } = store.getState();
    const { storedRecipes } = stored;
    console.log(databaseRecipes.recipes.protein.length);

    if(databaseRecipes.recipes.protein.length){
      return (
        <div className="">
          <h1> Current Recipes </h1>
          <div>
            <RecipesCategory recipeData={storedRecipes} categoryName='Proteins'/>
          </div>

          <div>
            <RecipesCategory recipeData={storedRecipes} categoryName='Vegetables'/>
          </div>

          <div>
            <RecipesCategory recipeData={storedRecipes} categoryName='Carbs'/>
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




export default withRouter(connect()(Recipes));
