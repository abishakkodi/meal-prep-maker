//Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from 'axios';
import store from './store';
import { connect } from 'react-redux';




//Components
import Navbar from './Navbar';
import Home from './Home';
import Recipes from './Recipes';
import CreateMealplan from './CreateMealplan';
import About from './About';

//css
//import './App.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentWillMount(){
    Axios.get('http://localhost:8000/readRecipes', config)
    .then((data)=>{
      let recipeArray = data.data;
      this.setState({ recipes: recipeArray})
      console.log('Received data from api', recipeArray);
    })
    .catch((err)=>{
     console.log(err);
     }
    );
  }

  render() {
    return (
        <div className='main'>
          <Navbar />
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/recipes'render={ (props)=> { return <Recipes {...props} recipes={this.state.recipes} />} }/>
            <Route path='/createMealplan'render={ (props)=> { return <CreateMealplan {...props} recipes={this.state.recipes} />} }/>
            <Route path='/about'component={ About }  />
          </div>
        </div>
    )
  }
}

export default Main;


