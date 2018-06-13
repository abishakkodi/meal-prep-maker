//Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import axios from 'axios';

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
        <Router history={createHistory()} >
          <div className='main'>
            <Navbar />
            <div>
              <Route exact path='/' component={Home} />
              <Route path='/recipes'render={ (props)=> { return <Recipes {...props} recipes={this.props.storedRecipes} />} }/>
              <Route path='/createMealplan'component={CreateMealplan}/>
              <Route path='/about'component={ About }  />
            </div>
          </div>
        </Router>
    )
  }
}

const mapStateToProps = state => {
return ({
  storedRecipes: state.stored.storedRecipes
  })
};


export default connect(mapStateToProps, { setRecipes })(Main);


