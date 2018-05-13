import React, { Component } from 'react';
import Recipe from './Recipe';
import '../index.css';


class Recipes extends Component {
  render() {
    let recipe = this.props.recipes.data;
    if(!recipe) {
      recipe = [];
    }

    return (
      <div className="Recipes">
        <h1> Current Recipes </h1>
        <div className="recipesList">
        {
          recipe.map((recipeData,id)=>{
          return(<div key={id}>
              <Recipe recipeData={recipeData}/>
            </div>)
          })
        }
        </div>
      </div>
          )

        }
    }


export default Recipes;
