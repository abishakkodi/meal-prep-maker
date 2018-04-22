const Sequelize = require('sequelize');
const sequelize = new Sequelize('testMealPrep', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  operatorsAliases: false
});

const Recipes = sequelize.define('recipes', {
  name: Sequelize.STRING,
  calories: Sequelize.INTEGER ,
  description: Sequelize.TEXT,
  steps: Sequelize.TEXT,
  vegetarian: Sequelize.BOOLEAN,
  pictureLink: Sequelize.STRING
});

const RecipeStaples = sequelize.define('recipeStaples', {
  recipeID: Sequelize.INTEGER,
  stapleID: Sequelize.INTEGER
});

const RecipeIngredients = sequelize.define('recipeIngredients', {
  recipeID: Sequelize.INTEGER ,
  ingredientID: Sequelize.INTEGER
});

const Staples = sequelize.define('staples', {
  name: Sequelize.STRING ,
  vegetarian: Sequelize.BOOLEAN ,
  calories: Sequelize.INTEGER ,
  protein: Sequelize.INTEGER ,
  carb: Sequelize.INTEGER ,
  fat: Sequelize.INTEGER
});

const Ingredients = sequelize.define('ingredients', {
  name: Sequelize.STRING ,
  vegetarian: Sequelize.BOOLEAN ,
  staple: Sequelize.BOOLEAN,
  calories: Sequelize.INTEGER ,
  protein: Sequelize.INTEGER ,
  carb: Sequelize.INTEGER ,
  fat: Sequelize.INTEGER
});

const Users = sequelize.define('users', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  vegetarian: Sequelize.BOOLEAN,
  favorites: Sequelize.INTEGER
});

const db = { Recipes,
            RecipeStaples,
            RecipeIngredients,
            Staples,
            Ingredients,
            Users,
            db: sequelize
};


module.exports = db;
