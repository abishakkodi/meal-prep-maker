import React from 'react'
import { Route, Switch } from 'react-router'
import NavBar from '../Components/Navbar'
import Home from '../Components/Home';
import Recipes from '../Components/Recipes';
import CreateMealplan from '../Components/CreateMealplan';
import About from '../Components/About';
import NoMatch from '../Components/NoMatch'


const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/createMealPlan" component={CreateMealplan} />
      <Route path="/about" component={About} />

      <Route component={NoMatch} />
    </Switch>

  </div>)

export default routes
