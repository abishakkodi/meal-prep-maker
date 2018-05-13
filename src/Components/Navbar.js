import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const linkStyle = { textDecoration: 'none', 'color': 'black' }


class Navbar extends Component {
  render() {
    return (
      <div id="menu-outer">
        <div className="table">
          <ul id="horizontal-list">
             <Link to='/' style={linkStyle}> Home </Link>
            <li> <Link to='/recipes' style={linkStyle}> Recipes </Link> </li>
            <li> <Link to='/createMealplan' style={linkStyle}> Create Meal Plan </Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
