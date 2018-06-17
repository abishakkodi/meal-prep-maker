//Modules
import React, { Component } from 'react';
import { withRouter, Route } from "react-router-dom";

import { connect } from 'react-redux';
import axios from 'axios';
import { ConnectedRouter } from 'connected-react-router'


//Components
import Navbar from './Navbar';
import Home from './Home';
import Recipes from './Recipes';
import CreateMealplan from './CreateMealplan';
import About from './About';


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
    console.log('ERROR FETCH RECIPES ACTION', err)
  });
  }

  render() {
    return (
          <div className='main'>
            <Navbar />
            <div>
              <Route exact path='/' component={Home} />
              <Route path='/recipes'render={ (props)=> { return <Recipes {...props} recipes={this.props.storedRecipes} />} }/>
              <Route path='/createMealplan'render={ (props)=> { return <CreateMealplan {...props} recipes={this.props.storedRecipes} />} } />
              <Route path='/about'component={ About }  />
            </div>
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


