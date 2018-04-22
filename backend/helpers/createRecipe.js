const Recipes = require('../mysqlDB.js').Recipes;

const createRecipe = (recipeObj) => {
  Recipes
  .findOrCreate(
  { where: recipeObj,
    defaults: recipeObj
  })

  .spread((Recipe, created)=>{
    console.log('Recipe CREATED: ', created);
    return created;
  })

  .catch((err)=>{
    console.log('Recipe Not built :', err );
  });
}

module.exports = createRecipe;
