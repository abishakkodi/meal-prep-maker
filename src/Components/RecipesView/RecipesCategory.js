import React from 'react';
import Recipe from './Recipe';


const RecipesCategory = (props) => {
  return(
        <div>
        <h3>{props.categoryName}</h3>
          <div className="recipesContainer">
          {
            props.recipeData.map((recipeData,id)=>{
              return(
                <div key={id} className="recipeCard">
                  <Recipe recipeData={recipeData}/>
                </div>
                )
            })
          }
          </div>
        </div>
    )
}


export default RecipesCategory;
