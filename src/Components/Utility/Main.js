//Modules
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import routes from '../routes';
import { connect } from 'react-redux';
import axios from 'axios';
import mockData from '../mockData';

//Actions
import { setRecipes, getRecipes } from '.../actions';

class Main extends Component {

 componentWillMount(){
    axios.get('http://localhost:8000/fillRecipesPage')
  .then(recipes=>{
    console.log('RECIPES IN MAIN', recipes);
    const data = recipes.data;
    this.props.setRecipes(mockData);
    return data;
  })
  .then(data=>{
    this.props.getRecipes(data);
  })
  .catch((err)=> {
    console.log('ERROR FETCH RECIPES ACTION', err);
  });
  }

  render() {
    return (
          <div className='main'>
            { routes }
          </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    storedRecipes: state.stored.storedRecipes,
    recipes: state.databaseRecipes.recipes
    })
};


export default withRouter(connect(mapStateToProps, { setRecipes, getRecipes })(Main));


