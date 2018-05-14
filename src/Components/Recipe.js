import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;


const style = { width: 300, height: '200', 'margin': '2px', 'textAlign': 'center' };

class Recipes extends Component {
  render() {
    let info = this.props.recipeData;
    return (
      <div>
       <Card title={info.name} style={style} hoverable
       cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} className='cardImage'>
         <p>Category: {info.category} </p>
         <p>Calories: {info.calories} </p>
         <Meta title={info.name}/>

       </Card>
      </div>
    );
  }
}

export default Recipes;
