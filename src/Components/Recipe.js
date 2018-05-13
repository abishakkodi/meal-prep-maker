import React, { Component } from 'react';
import { Card } from 'antd';

const style = { width: 300, 'borderStyle': 'solid', height: '200', 'borderColor': 'black', 'margin': '2px', 'textAlign': 'center', 'float':'left' };

class Recipes extends Component {
  render() {
    let info = this.props.recipeData;
    return (
      <div className="Recipe">
       <Card title={info.name} style={style} className="recipesList" >
         <p>Category: {info.category} </p>
         <p>Calories: {info.calories} </p>
       </Card>
      </div>
    );
  }
}

export default Recipes;
