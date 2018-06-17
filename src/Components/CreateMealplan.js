import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import '../CSS/CreateMealplan.css'


class CreateMealPlan extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
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

  mealRecommendations(){
    //use preferences
  }


  // componentWillReceiveProps(nextProps){
  //   const newRecipe = this.state.recipes.length !== nextProps.recipes.length;
  //   if(newRecipe){
  //     this.setState({recipes: nextProps.recipes });
  //   }
  // }

  render() {
    console.log(this.props);
    if(this.props.recipes.length){
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

export default CreateMealPlan;


// original filter based on calories and vegetarianism


//have 7 columns, click on recipe, redirect to recipe



