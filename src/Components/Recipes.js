import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { BarLoader } from 'react-spinners';

import Recipe from './Recipe';
import fakeRecipeData from '../mockData';
import '../CSS/Recipes.css';
import store from '../store';


class Recipes extends Component {

  componentWillMount() {

  }

  componentDidMount() {

  }

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
        <div className="loaderGrid">
          <div className='loader'>
            <h3>Loading...</h3>
            <BarLoader
            width={200}
            />
          </div>
        </div>
        )
    }

  }
}

export default withRouter(connect()(Recipes));
