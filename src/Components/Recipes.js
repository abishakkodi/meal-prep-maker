import React, { Component } from 'react';
import Recipe from './Recipe';
import '../CSS/Recipes.css';


class Recipes extends Component {
  render() {
    let recipe = this.props.recipes;
    if(!recipe) {
      recipe = [];
    }

    return (

      <div className="">
        <h1> Current Recipes </h1>
        <div className="recipesContainer">
        {
          recipe.map((recipeData,id)=>{
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


export default Recipes;
