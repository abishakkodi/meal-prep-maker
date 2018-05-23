import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const linkStyle = { textDecoration: 'none', 'color': 'black', fontSize: '150%'  }


class Navbar extends Component {
  render() {
    return (
        <div className='NavContainer'>
          <div className='Link'>
            <Link to='/' style={linkStyle}> Home </Link>
          </div>
          <div className='Link'>
            <Link to='/recipes' style={linkStyle}> Recipes </Link>
          </div>
          <div className='Link'>
            <Link to='/createMealplan' style={linkStyle}> Create Meal Plan </Link>
          </div>
        </div>
    );
  }
}

export default Navbar;
