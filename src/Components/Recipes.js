import React, { Component } from 'react';
import Recipe from './Recipe';

class Recipes extends Component {
  render() {
    return (
      <div className="Recipes">
        <h1> Current Recipes </h1>
        {this.props.route.recipes.map((recipe)=>{
          console.log(recipe);
        })}
      </div>
    );
  }
}

export default Recipes;
