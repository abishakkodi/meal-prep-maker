import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import CreateMealplan from './Components/CreateMealplan';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout } from 'antd';
import './App.css';
import Axios from 'axios';

const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentWillMount(){
    Axios.get('http://localhost:8000/mealPlanner', config)
    .then((data)=>{
      this.setState({recipes: data.data});
    })
    .catch((err)=>{
     console.log(err);
     }
    );
  }

  render() {
    return (
      <Router>
      <div className='main'>
        <Navbar />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route path='/recipes'render={ (props)=> { return <Recipes {...props} recipes={this.state.recipes} />} }/>
          <Route path='/createMealplan'component={ CreateMealplan }  />
        </div>
      </div>
      </Router>
    )
  }
}

export default App;
