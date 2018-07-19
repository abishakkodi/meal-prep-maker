const mealRecommendation = (preferencesObj, recipesObj) => {

  let recommendations;

  if(preferencesObj.vegetarian){
    recommendations = filtered(recipesObj, vegetarianFilter);
    }

  if(!recommendations){
    return recipesObj;
  }

  return recommendations;
}

// if vegetarian filter out all meat recipes and return array of base objects

//


const filtered = ( recipesObj, filterFunc ) => {
  let filteredRecipes = { protein: [], vegetables: [], carbs: [] };
  filteredRecipes.protein = recipesObj.protein.filter((recipe =>{
    return filterFunc(recipe);
  }));
  filteredRecipes.vegetables = recipesObj.vegetables.filter((recipe =>{
    return filterFunc(recipe);
  }));
  filteredRecipes.carbs = recipesObj.carbs.filter((recipe =>{
    return filterFunc(recipe);
  }));

  return filteredRecipes;
}


const vegetarianFilter = (recipeObject) => {
  if(recipeObject.recipe.vegetarian) {
    return true;
  } else {
    return false
  }
}

module.exports = mealRecommendation;
