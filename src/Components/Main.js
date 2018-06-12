//Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';

//Components
import Navbar from './Navbar';
import Home from './Home';
import Recipes from './Recipes';
import CreateMealplan from './CreateMealplan';
import About from './About';

//Actions
import { fetchRecipes } from '../actions/FetchActions';
import fakeRecipeData from '../mockData';


class Main extends Component {

  componentWillMount(){
    console.log('in component will mount',this.props);
    this.props.fetchRecipes()
  }

  render() {
    return (
        <Router history={createHistory()} >
          <div className='main'>
            <Navbar />
            <div>
              <Route exact path='/' component={Home} />
              <Route path='/recipes'render={ (props)=> { return <Recipes {...props} recipes={fakeRecipeData} />} }/>
              <Route path='/createMealplan'render={ (props)=> { return <CreateMealplan {...props} recipes={fakeRecipeData} />} }/>
              <Route path='/about'component={ About }  />
            </div>
          </div>
        </Router>
    )
  }
}

const mapStateToProps = state => {
console.log('In map state to props', state);
let fakeState = {
  storedRecipes: state.storedRecipes
}

return fakeState;
};


export default connect(mapStateToProps, {fetchRecipes})(Main);


