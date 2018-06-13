import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import fakeRecipeData from '../mockData';
import '../CSS/Recipes.css';

class Recipes extends Component {
  render() {
    let recipes = this.props.recipes;
    if(recipes === undefined ) {

    }

    return (

      <div className="">
        <h1> Current Recipes </h1>
        <div className="recipesContainer">
        {
          recipes.map((recipeData,id)=>{
          return(<div key={id} className="recipeCard">
              <Recipe recipeData={recipeData}/>
            </div>)
          })
        }
        </div>

      </div>
          )

        }
}


export default connect()(Recipes);
