import React from 'react';
import Recipe from './Recipe';


const RecipesCategory = (props) => {
  return(
        <div>
        <h3>{props.categoryName}</h3>
          <div className="recipesContainer">
          {
            props.actualData.map((actualData,id)=>{
              return(
                <div key={id} className="recipeCard">
                  <Recipe
                  actualData={actualData}/>
                </div>
                )
            })
          }
          </div>
        </div>
    )
}

export default RecipesCategory;
