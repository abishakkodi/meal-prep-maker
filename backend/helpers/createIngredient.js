const Ingredients = require('../mysqlDB.js').Ingredients;

const createIngredient = (ingredientObj) => {
  Ingredients
  .findOrCreate(
  { where: ingredientObj,
    defaults: ingredientObj
  })

  .spread((ingredient, created)=>{
    console.log('INGREDIENT CREATED?: ', created);
    return created;
  })

  .catch((err)=>{
    console.log('Ingredient Not built :', err );
  });
}

module.exports = createIngredient;
