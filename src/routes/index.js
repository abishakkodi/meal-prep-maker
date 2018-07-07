import React from 'react'
import { Route, Switch } from 'react-router'
import NavBar from '../Components/Utility/Navbar'

import Home from '../Components/HomeView';
import Recipes from '../Components/RecipesView/Recipes';
import CreateMealplan from '../Components/CreateMealplanView/CreateMealplan';
import About from '../Components/AboutView/About';
import NoMatch from '../Components/Utility/NoMatch';


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
