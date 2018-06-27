import React from 'react';
import Popup from "reactjs-popup";
import Faker from 'faker';

import { Card } from 'antd';
const { Meta } = Card;
const foodURL = Faker.image.food();

const style = { width: 300, height: '200', 'margin': '2px', 'textAlign': 'left' };

const Recipes = (props) => {
 let info = props.recipeData;
    return (
      <div className='cardImage'>
       <Popup
        trigger={
          <div className="button">
            <Card style={style} hoverable
             cover={<span> <img alt={info.name} src={foodURL} /> </span>} >
               <Meta title={info.name}/>
               <p>Category: {info.category} </p>
               <p>Calories: {info.totalCalories} </p>
            </Card>
          </div>}
        modal
        closeOnDocumentClick
      >
    <div className="recipePopup">
      <p>Category: {info.category} </p>
      <p>Calories: {info.totalCalories} </p>
    </div>
  </Popup>
      </div>
)
}


export default Recipes;


    // <Card style={style} hoverable
    //    cover={<span> <img alt={info.name} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> </span>} >
    //      <Meta title={info.name}/>
    //      <p>Category: {info.category} </p>
    //      <p>Calories: {info.totalCalories} </p>

    //    </Card>

