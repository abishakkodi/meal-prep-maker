const Ingredients = require('../mysqlDB.js').Ingredients;

const createIngredient = (ingredientObj) => {
  Ingredients.build(ingredientObj)
  .save()
  .catch((err)=>{
    console.log('Ingredient Not built :', err );
  });
}

module.exports = createIngredient;

