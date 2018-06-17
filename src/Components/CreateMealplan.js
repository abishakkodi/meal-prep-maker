import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import LoadingBar from './LoadingBar';
import '../CSS/CreateMealplan.css'
import store from '../store';


class CreateMealPlan extends Component {
  constructor(props){
    super(props);
    this.state = {
      plan: [],
      preferences: {},
      calorieBounds: 2000,
      mealSchedule: {
        breakfast: [],
        lunch: [],
        dinner: []
      }
  }
}
componentDidMount() {

  }

  mealRecommendations(){
    //use preferences
  }

  render() {
    const { stored } = store.getState();
    console.log("DATA FROM STORE", stored);
    if(stored.storedRecipes.length){
       return (
          <div className="CreateMealPlan">
            <h1> CreateMealPlan </h1>
              <h1> Selected Preferences </h1>
            <div className='preferencesContainer'>
              <div className='preferencesItem'>
                <p>Non Vegetarian</p>
              </div>

              <div className='preferencesItem'>
                <p>Chicken </p>
              </div>
              <div className='preferencesItem'>
                <p> Eggs </p>
              </div>

            </div>

            <div className="mealPlanContainer">
                <h3> Dynamic checkboxes based ingredients in recipes</h3>
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

export default withRouter(connect()(CreateMealPlan));


// original filter based on calories and vegetarianism


//have 7 columns, click on recipe, redirect to recipe



