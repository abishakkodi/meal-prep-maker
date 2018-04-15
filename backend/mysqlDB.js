const Sequelize = require('sequelize');
const sequelize = new Sequelize('testMealPrep', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  operatorsAliases: false
});

const Recipes = sequelize.define('recipes', {
  name: Sequelize.STRING ,
  calories: Sequelize.INTEGER ,
  description: Sequelize.STRING ,
  vegetarian: Sequelize.BOOLEAN,
  pictureLink: Sequelize.STRING
});

const RecipeStaples = sequelize.define('recipeStaples', {
  recipeID: Sequelize.INTEGER ,
  stapleID: Sequelize.INTEGER
});

const RecipeIngredients = sequelize.define('recipeIngredients', {
  recipeID: Sequelize.INTEGER ,
  ingredientsID: Sequelize.INTEGER
});

const Staples = sequelize.define('staples', {
  RecipeId: Sequelize.STRING ,
  Name: Sequelize.STRING ,
  Vegetarian: Sequelize.BOOLEAN ,
  Calories: Sequelize.INTEGER ,
  Protein: Sequelize.INTEGER ,
  Carb: Sequelize.INTEGER ,
  Fat: Sequelize.INTEGER
});

const Ingredients = sequelize.define('ingredients', {
  Name: Sequelize.STRING ,
  Vegetarian: Sequelize.BOOLEAN ,
  Calories: Sequelize.INTEGER ,
  Protein: Sequelize.INTEGER ,
  Carb: Sequelize.INTEGER ,
  Fat: Sequelize.INTEGER
});

RecipeStaples.build({
  recipeID: 1,
  stapleID: 2
})
.save()
.catch(err =>{
  console.log('error saving: ', err );
});

const db = { Recipes,
            RecipeStaples,
            Staples,
            Ingredients,
            db: sequelize
};


module.exports = db;
