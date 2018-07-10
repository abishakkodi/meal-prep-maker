//Modules
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import routes from '../routes';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';
import mockData from '../mockData';


//Actions
import { setRecipes, getRecipes, initializeIngredients } from 'actions/';


class Main extends Component {
  getIngredients(databaseRecipes){
    let ingredientsArray = [];
    this.filterIngredients(databaseRecipes.protein, ingredientsArray);
    this.filterIngredients(databaseRecipes.carbs, ingredientsArray);
    this.filterIngredients(databaseRecipes.vegetables, ingredientsArray);
    return _.uniq(ingredientsArray);
      }

 filterIngredients(recipeType, ingredientsArray){
    if(recipeType.length){
      recipeType.forEach(recipe =>{
        recipe.ingredients.forEach(ingredient=>{
          ingredientsArray.push(ingredient.name);
        });
      });
    }
  }

 componentWillMount(){
    axios.get('http://localhost:8000/fillRecipesPage')
  .then(recipes=>{
    console.log('RECIPES IN MAIN', recipes);
    const data = recipes.data;
    this.props.setRecipes(mockData);
    return data;
  })
  .then(data=>{
    this.props.getRecipes(data);
    return data;
  })
  .then(data=>{
    const ingredients = this.getIngredients(data);
    this.props.initializeIngredients(ingredients);
  })

  .catch((err)=> {
    console.log('ERROR FETCH RECIPES ACTION', err);
  });
  }

  render() {
    console.log("MAIN",this.props);
    return (
          <div className='main'>
            { routes }
          </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    storedRecipes: state.stored.storedRecipes,
    recipes: state.databaseRecipes.recipes,
    ingredientsList: state.ingredients.ingredientsList
    })
};


export default withRouter(connect(mapStateToProps, { setRecipes, getRecipes, initializeIngredients })(Main));


