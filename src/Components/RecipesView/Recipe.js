import React from 'react';
import Popup from "reactjs-popup";
//import Faker from 'faker';
import Image from './anise.jpg';
import { Card } from 'antd';
const { Meta } = Card;
//const foodURL = Faker.image.food();

const style = { width: 300, height: '200', 'margin': '2px', 'textAlign': 'left' };
const orderedListStyle = {'textAlign': 'center'};

// const difficulty =  (code) => {

// };

const mealType = (code) => {
  switch(code){
    case 'l': return 'Lunch';
    case 'b': return 'Breakfast';
    case 'd': return 'Dinner';
    default : return 'Unknown Meal Type';
  }
}

const listings = (list, title, key, numbered, style='') =>{
  if(numbered) {
     return(<div>
        <h2>{title}</h2>
        <ol className={style}>
        {list.map((item,index)=>{
          return(<li key={index}>
              {
                item[key]
              }
            </li>)
        })}
        </ol>
      </div>)
  } else {
    return(<div>
        <h2>{title}</h2>
        <ul className={style}>
        {list.map((item,index)=>{
          return(<li key={index}>
              {
                item[key]
              }
            </li>)
        })}
        </ul>
      </div>)}
}

const Recipe = (props) => {
  const {recipeData} = props;
    return (
      <div className='cardImage'>
       <Popup
        trigger={
          <div className="button">
            <Card style={style} hoverable
             cover={<span> <img alt="Food Image" src={Image} /> </span>} >
               <Meta title={recipeData.recipe.name}/>
               <p>Category: {mealType(recipeData.recipe.BLD)} </p>
               <p>Calories:  </p>
            </Card>
          </div>}
        modal
        closeOnDocumentClick
      >
    <div className="recipePopup">
      <p>Ingredients: {mealType(recipeData.recipe.BLD)} </p>
      {listings(recipeData.ingredients,'Ingredients','name',null,orderedListStyle)}
      {listings(recipeData.instructions,'Instructions','step', true)}
    </div>
  </Popup>
      </div>
)
}


export default Recipe;