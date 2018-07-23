import React, { Component } from 'react';
import LoadingBar from '../Utility/LoadingBar';
import CaloriesSlider from './CaloriesSlider';
//import _ from 'lodash';
import mealRecommendation from './mealRecommendation';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './CreateMealplan.css';
import { removeIngredient, addIngredient, addTag, removeTag, setMealplan, setCalories  } from 'actions/';

const testPreferences = { vegetarian: true, difficulty: [] };

class CreateMealPlan extends Component {

  mealRecommendations(){
    let recommendation = mealRecommendation(testPreferences,this.props.databaseRecipes.recipes);
    console.log(recommendation);
    this.props.setMealplan(recommendation);
    //use active ingredients
  }

  handleAddIngredient(item){
    this.props.addIngredient(item);
  }

  handleRemoveIngredient(item){
    this.props.removeIngredient(item);
  }

  handleAddTag(item){
    this.props.addTag(item);
  }

  handleRemoveTag(item){
    this.props.removeTag(item);
  }

  handleSetMealPlan(){
    this.props.setMealplan();
  }

  render() {

    if(this.props.recipes.protein.length){
       return (
          <div className="CreateMealPlan">
            <div onClick={this.mealRecommendations.bind(this)}>
              <h1> Click me to CreateMealPlan! </h1>
            </div>

            <div>
             <CaloriesSlider value={this.props.calories} />
            </div>

              <h1> Mealplan Preferences </h1>
            <div className='preferencesContainer'>
              {
                this.props.activeIngredients.map((active,index)=>{
                  return(
                       <div key={index} className='preferencesItem' onClick={this.handleRemoveIngredient.bind(this,active)}>
                        <p>{active}</p>
                       </div>
                    )
                })
              }
              {
                this.props.activeTags.map((tag, index)=>{
                  return(
                      <div key={index} className='preferencesItem' onClick={this.handleRemoveTag.bind(this,tag)}>
                          <p>{tag}</p>
                      </div>)
                })

              }

            </div>


                <h3> Select Ingredients you Have at Home </h3>
                <div>
                  <div className='preferencesContainer'>

                  {
                    this.props.ingredientsList.map((ingredient, index)=>{
                      return (
                       <div key={index} className='preferencesItem' onClick={this.handleAddIngredient.bind(this,ingredient)}>
                          <p>{ingredient}</p>
                       </div>
                    )
                    })
                  }
                  </div>


                  <h3> Select some characteristics you would like your recipes to have! </h3>
                  <div className='preferencesContainer'>

                  {
                    this.props.tagsList.map((tag, index)=>{
                      return (
                       <div key={index} className='preferencesItem' onClick={this.handleAddTag.bind(this, tag)}>
                          <p>{tag}</p>
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
    recipes: state.databaseRecipes.recipes,
    activeTags: state.tags.activeTags,
    tagsList: state.tags.tagList,
    mealplan: state.mealplan.mealplan,
    calories: state.calories.calories
  })
}

const mapDispatchToProps = () =>({addIngredient, removeIngredient, addTag, removeTag, setMealplan, setCalories});

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(CreateMealPlan));


// original filter based on calories and vegetarianism


//have 7 columns, click on recipe, redirect to recipe



