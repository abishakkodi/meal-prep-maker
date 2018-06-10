//Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from 'axios';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import store from './store';



//Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import CreateMealplan from './Components/CreateMealplan';
import About from './Components/About';

//css
import './App.css';

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
    Axios.get('http://localhost:8000/readRecipes', config)
    .then((data)=>{
      console.log('Received data from api');
      console.log(data);
    })
    .catch((err)=>{
     console.log(err);
     }
    );
  }

  render() {
    return (
      <Router history={createHistory()} >
       <Provider store={store}>
        <div className='main'>
          <Navbar />
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/recipes'render={ (props)=> { return <Recipes {...props} recipes={this.state.recipes} />} }/>
            <Route path='/createMealplan'render={ (props)=> { return <CreateMealplan {...props} recipes={this.state.recipes} />} }/>
            <Route path='/about'component={ About }  />
          </div>
        </div>
        </Provider>
      </Router>
    )
  }
}

export default App;
