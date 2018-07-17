const mealRecommendations = (preferencesObj, recipesObj) => {
  let recommendations = [];




  return recommendations;
}

// if vegetarian filter out all meat recipes and return array of base objects

//

export default mealRecommendations;

const filterFunction = ( recipesObj, someTest ) => {
  let filteredRecipes = { protein: [], vegetables: [], carbs: [] };
  filteredRecipes.protein = recipesObj.protein.filter((recipe =>{
    return someTest(recipe);
  }));
  filteredRecipes.vegetables = recipesObj.vegetables.filter((recipe =>{
    return someTest(recipe);
  }));
  filteredRecipes.carbs = recipesObj.carbs.filter((recipe =>{
    return someTest(recipe);
  }));

  return filteredRecipes;
}

/*
{
  protein
  vegetarian
  carb
}


*/