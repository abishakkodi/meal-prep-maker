import React, { Component } from 'react';
import Popup from "reactjs-popup";

import { Card } from 'antd';
const { Meta } = Card;


const style = { width: 300, height: '200', 'margin': '2px', 'textAlign': 'left' };

class Recipes extends Component {
  render() {
    let info = this.props.recipeData;
    return (
      <div className='cardImage'>
       <Card style={style} hoverable
       cover={<span> <img alt={info.name} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> </span>} >
         <Meta title={info.name}/>
         <p>Category: {info.category} </p>
         <p>Calories: {info.totalCalories} </p>

       </Card>
      </div>
    );
  }
}

export default Recipes;
