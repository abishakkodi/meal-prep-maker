//Modules
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import routes from '../routes';
import { connect } from 'react-redux';
import axios from 'axios';

//Actions
import { setRecipes } from '../actions/FetchActions';

class Main extends Component {

 componentWillMount(){
    axios.get('http://localhost:8000/readRecipes')
  .then(recipes=>{
    recipes = recipes.data;
    this.props.setRecipes(recipes);
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
    storedRecipes: state.stored.storedRecipes
    })
};


export default withRouter(connect(mapStateToProps, { setRecipes })(Main));


