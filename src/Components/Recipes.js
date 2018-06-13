import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import '../CSS/Recipes.css';


class Recipes extends Component {


  render() {

    let recipe = this.props.mockData;
    if(!recipe) {
      recipe = [];
    }

    return (

      <div className="">
        <h1> Current Recipes </h1>
        <div className="recipesContainer">
        {
          this.props.storedRecipes.map((recipeData,id)=>{
          return(<div key={id} className="recipeCard">
              <Recipe recipeData={recipeData}/>
            </div>)
          })
        }
        </div>
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


const mapStateToProps = state => {

return ({
  storedRecipes: state.storedRecipes
  })
};


export default connect(mapStateToProps)(Recipes);
