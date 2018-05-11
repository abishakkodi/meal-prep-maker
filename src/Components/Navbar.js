import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div id="menu-outer">
        <div className="table">
          <ul id="horizontal-list">
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/recipes'> Recipes </Link> </li>
            <li><Link to='/createMealplan'> Create Meal Plan </Link></li>
          </ul>
        </div>
      </div>


    );
  }
}

export default Navbar;
