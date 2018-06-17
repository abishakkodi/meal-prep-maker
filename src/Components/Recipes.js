import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import LoadingBar from './LoadingBar';
import Recipe from './Recipe';
import '../CSS/Recipes.css';
import store from '../store';


class Recipes extends Component {
  render() {
    const { stored } = store.getState();
    const { storedRecipes } = stored;
    if(stored.storedRecipes.length){
      return (
        <div className="">
          <h1> Current Recipes </h1>
          <div className="recipesContainer">
          {
            storedRecipes.map((recipeData,id)=>{
            return(<div key={id} className="recipeCard">
                <Recipe recipeData={recipeData}/>
              </div>)
            })
          }
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
