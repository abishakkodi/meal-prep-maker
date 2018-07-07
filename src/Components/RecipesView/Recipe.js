import React from 'react';
import Popup from "reactjs-popup";
import Faker from 'faker';

import { Card } from 'antd';
const { Meta } = Card;
const foodURL = Faker.image.food();

const style = { width: 300, height: '200', 'margin': '2px', 'textAlign': 'left' };

const difficulty =  (code) => {

};

const mealType = (code) => {
  switch(code){
    case 'l': return 'Lunch';
    case 'b': return 'Breakfast';
    case 'd': return 'Dinner';
    default : return 'Unknown Meal Type';
  }
}

const Recipes = (props) => {
  const actualData = props.actualData;
    return (
      <div className='cardImage'>
       <Popup
        trigger={
          <div className="button">
            <Card style={style} hoverable
             cover={<span> <img src={foodURL} /> </span>} >
               <Meta title={actualData.recipe.name}/>
               <p>Category: {mealType(actualData.recipe.BLD)} </p>
               <p>Calories:  </p>
            </Card>
          </div>}
        modal
        closeOnDocumentClick
      >
    <div className="recipePopup">
      <p>Category: {mealType(actualData.recipe.BLD)} </p>
      <p>Calories:  </p>
    </div>
  </Popup>
      </div>
)
}


export default Recipes;