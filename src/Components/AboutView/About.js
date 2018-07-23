import React, { Component } from 'react';
import './About.css'


class About extends Component {
  render() {
    return (
      <div className="About">
        <h1> About </h1>

        <h2> Coming Soon! </h2>
        <ul>
          <li> Select Number of meals per day </li>
          <li> Select Number of days mealplan lasts </li>
          <li> Select Mealplan Based on Daily Macros </li>
          <li> Select Mealplan Based on Macros </li>
          <li> User Sign in  </li>
          <li> User Reviews </li>
        </ul>
      </div>
    );
  }
}

export default About;
