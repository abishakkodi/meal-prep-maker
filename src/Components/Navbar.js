import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <nav className="gridContainer">
            <ul>
              <li>
                <Link to='/'> Home </Link>
              </li>
               <li>
                <Link to='/recipes'> Recipes </Link>
              </li>
               <li>
                  <Link to='/createMealplan'> Create Meal Plan </Link>
              </li>
               <li>
                  <Link to='/about'> About </Link>
              </li>
            </ul>
          </nav>
        </div>

        </div>
    );
  }
}

export default Navbar;
