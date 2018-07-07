import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import LoadingBar from '../Utility/LoadingBar';
import RecipesCategory from './RecipesCategory';
import store from '../storeRoute';
import './Recipes.css';

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
            <RecipesCategory recipeData={storedRecipes} categoryName='Proteins' actualData={databaseRecipes.recipes.protein}/>
          </div>

          <div>
            <RecipesCategory recipeData={storedRecipes} categoryName='Vegetables' actualData={databaseRecipes.recipes.vegetables}/>
          </div>

          <div>
            <RecipesCategory recipeData={storedRecipes} categoryName='Carbs' actualData={databaseRecipes.recipes.carbs}/>
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
