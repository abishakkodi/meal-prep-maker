import React, { Component } from 'react';

import '../CSS/CreateMealplan.css'


class CreateMealPlan extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialLoad: false,
      recipes: [],
      plan: [],
      calorieBounds: 2000,
      mealSchedule: {
        breakfast: [],
        lunch: [],
        dinner: []
      }
  }
}

  mealRecommendations(){

  }

  shouldComponentUpdate(nextProps){
   const newRecipe = this.state.recipes.length !== nextProps.recipes.length;
   console.log("UPDATE RECIPE?", newRecipe);
   return newRecipe;
  }

  componentDidMount(){
    let recipeData =  this.props.recipes;
    this.setState({recipes: recipeData});
  }

  componentWillReceiveProps(nextProps){
    const newRecipe = this.state.recipes.length !== nextProps.recipes.length;
    if(newRecipe){
      this.setState({recipes: nextProps.recipes})
    }

  }



  render() {

    if(!this.state.recipes.length){
      console.log('STATE OF RECIPES: ', this.state.recipes);
      return (
        <div>
          <h2>LOADING .....</h2>
        </div>
        )
    } else {
       return (
          <div className="CreateMealPlan">
            <h1> CreateMealPlan </h1>
            <div className="mealPlanContainer">
                <h3> Dynamic checkboxes based ingredients in recipes</h3>
                <h4> Some button to create recipe schedule </h4>
                  {console.log('STATE',this.state.recipes)}
                <h2> 7 day columns </h2>

            </div>
          </div>
        );
     }
  }
}

export default CreateMealPlan;


// original filter based on calories and vegetarianism


//have 7 columns, click on recipe, redirect to recipe



