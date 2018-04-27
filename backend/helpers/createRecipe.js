const Recipes = require('../mysqlDB.js').Recipes;
const RecipeIngredients = require('../mysqlDB.js').RecipeIngredients;

const _ = require('lodash');


const createRecipe = (recipeObj) => {
  let createdRecipe;
  const filtered = _.pick(recipeObj, ['name', 'calories', 'description', 'steps', 'vegetarian', 'pictureLink']);
  const recipeIngredients = recipeObj.recipeIngredients;

  Recipes
  .findOrCreate(
  { where: filtered,
    defaults: filtered
  })

  .spread((recipe, created)=>{
    createdRecipe = created;
    createRecipeIngredients(recipe.dataValues.id, recipeIngredients);
  })

  .then(()=> {
    return createdRecipe;
  })

  .catch((err)=>{
    console.log('Recipe Not built :', err );
  });
}

const createRecipeIngredients = (recipeID, ingredientIDs) => {
  ingredientIDs.forEach((ingredientID)=> {
    let recipeIngredientRow = { recipeID, ingredientID };
    RecipeIngredients
    .findOrCreate({
      where: recipeIngredientRow,
      defaults: recipeIngredientRow
    })

    .spread((ingredientRow, created)=> {
      console.log('CREATED NEW RECIPE/INGREDIENT ROW?',created);
    })

    .catch((err)=>{
    console.log('Recipe Not built :', err);
    });
  });
}


module.exports = createRecipe;
