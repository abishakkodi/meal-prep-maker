import React, { Component } from 'react';
import LoadingBar from '../Utility/LoadingBar';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './CreateMealplan.css';
import { removeIngredient, addIngredient,  } from 'actions/';


class CreateMealPlan extends Component {

  componentDidMount() {

  }

  handleInitializeArray(ingredients){
    ingredients.forEach((ingredient)=>{
      this.props.removeIngredient(ingredient);
    });

  }

  mealRecommendations(){
    //use active ingredients
  }

  handleAdd(item){
    this.props.addIngredient(item);
  }

  handleRemove(item){
    this.props.removeIngredient(item);
  }

  render() {

    if(this.props.recipes.protein.length){
       return (
          <div className="CreateMealPlan">
            <h1> CreateMealPlan </h1>
              <h1> Selected Preferences </h1>
            <div className='preferencesContainer'>
              {
                this.props.activeIngredients.map((active,index)=>{
                  return(
                       <div key={index} className='preferencesItem' onClick={this.handleRemove.bind(this,active)}>
                        <p>{active}</p>
                       </div>
                    )
                })
              }


              <div className='preferencesItem'>
                <p>Chicken </p>
              </div>
              <div className='preferencesItem'>
                <p> Eggs </p>
              </div>

            </div>

                <h3> Dynamic click based ingredients in recipes</h3>
                <div>
              <div className='preferencesContainer'>

                  {
                    this.props.ingredientsList.map((ingredient, index)=>{
                      return (
                       <div key={index} className='preferencesItem' onClick={this.handleAdd.bind(this,ingredient)}>
                          <p>{ingredient}</p>
                       </div>
                    )
                    })
                  }
                  </div>
                </div>

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
        );
    }

  else {
      return (
          <LoadingBar />
        )
     }
  }
}

const mapStateToProps = state => {
  return({
    activeIngredients: state.ingredients.activeIngredients,
    ingredientsList: state.ingredients.ingredientsList,
    databaseRecipes: state.databaseRecipes,
    recipes: state.databaseRecipes.recipes
  })
}

export default withRouter(connect(mapStateToProps, {addIngredient, removeIngredient })(CreateMealPlan));


// original filter based on calories and vegetarianism


//have 7 columns, click on recipe, redirect to recipe



