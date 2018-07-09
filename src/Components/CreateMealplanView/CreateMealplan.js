import React, { Component } from 'react';
import store from '../storeRoute';
import LoadingBar from '../Utility/LoadingBar';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './CreateMealplan.css';


const getIngredients = (databaseRecipes) => {
  let ingredientsArray = [];
  filterIngredients(databaseRecipes.protein, ingredientsArray);
  filterIngredients(databaseRecipes.carbs, ingredientsArray);
  filterIngredients(databaseRecipes.vegetables, ingredientsArray);

  return _.uniq(ingredientsArray);
}

const filterIngredients = (recipeType, ingredientsArray) => {
  if(recipeType.length){
    recipeType.forEach(recipe =>{
      recipe.ingredients.forEach(ingredient=>{
        ingredientsArray.push(ingredient.name);
      });
    });
  }
}

class CreateMealPlan extends Component {
  constructor(props){
    super(props);
    this.state = {
      plan: [],
      preferences: {},
      calorieBounds: 2000,
      mealSchedule: {
        breakfast: [],
        lunch: [],
        dinner: []
      }
    }
  }

  mealRecommendations(){
    //server side or client?
    //client bc it is already stored on the client side

  }

  render() {
    const { stored, databaseRecipes } = store.getState();
    console.log("DATA FROM STORE",  databaseRecipes);

    if(stored.storedRecipes.length){
      const ingredients = getIngredients(databaseRecipes.recipes);
       return (
          <div className="CreateMealPlan">
            <h1> CreateMealPlan </h1>
              <h1> Selected Preferences </h1>
            <div className='preferencesContainer'>
              <div className='preferencesItem'>
                <p>Non Vegetarian</p>
              </div>

              <div className='preferencesItem'>
                <p>Chicken </p>
              </div>
              <div className='preferencesItem'>
                <p> Eggs </p>
              </div>

            </div>

            <div className="mealPlanContainer">
                <h3> Dynamic checkboxes based ingredients in recipes</h3>
                <h4> Some button to create recipe schedule </h4>

                <h2> X day columns </h2>
                <div className='daysContainer'>

                  <div className='days'><h4> Dynamic content here </h4></div>
                  <div className='days'><h4> Dynamic content here </h4></div>
                  <div className='days'><h4> Dynamic content here </h4></div>
                  <div className='days'><h4> Dynamic content here </h4></div>
                  <div className='days'><h4> Dynamic content here </h4></div>
                </div>
            </div>
          </div>
        );
    }

  else {
      return (
          <LoadingBar />
        )
     }
  }
}

export default withRouter(connect()(CreateMealPlan));


// original filter based on calories and vegetarianism


//have 7 columns, click on recipe, redirect to recipe



