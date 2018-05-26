import React from 'react';
import '../CSS/Home.css';

const HomeWhy = () => {

  return (
    <div className="homeWhyContainer ">
      <div className='homeWhyText'>
        <h3 className="whyTitle">Why should I meal prep?</h3>
        <p> People meal prep for many reasons</p>
        <div className='whyList'>
        <ul>
          <li> Save time: Preparing large amounts of food that only requires minimal effort to prepare later </li>
          <li> Save money: It is economically beneficial to buy products in bulk</li>
          <li> Save health: Controlling exactly what goes into your body can help you gain or lose weight </li>
        </ul>
        </div>
      </div>

      <div className='homeWhyImage'>
        <img src='https://i.imgur.com/ecomSst.jpg' alt=''/>
      </div>

    </div>
        )
};

export default HomeWhy;