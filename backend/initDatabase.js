const mySQLdb = require('./mysqlDB.js');
const sequelize = mySQLdb.db;
const createIngredient = require('./helpers/createIngredient');
const createStaple = require('./helpers/createStaple');
const createRecipe = require('./helpers/createRecipe');

const initDatabase = () => {
  createIngredient({
          name: 'Chicken',
          vegetarian: false,
          staple: false,
          calories: 123,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Steak',
          vegetarian: false,
          staple: false,
          calories: 145,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Broccoli',
          vegetarian: true,
          staple: false,
          calories: 111,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Beans',
          vegetarian: true,
          staple: false,
          calories: 116,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Tilapia',
          vegetarian: false,
          staple: false,
          calories: 515,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Rice',
          vegetarian: true,
          staple: false,
          calories: 313,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Corn',
          vegetarian: true,
          staple: false,
          calories: 434,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Carrots',
          vegetarian: true,
          staple: false,
          calories: 678,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Peas',
          vegetarian: true,
          staple: false,
          calories: 456,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Potatoes',
          vegetarian: true,
          staple: false,
          calories: 546,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Eggs',
          vegetarian: true,
          staple: false,
          calories: 345,
          protein: 0,
          carb: 0,
          fat: 10
        });
  createIngredient({
          name: 'Bread',
          vegetarian: true,
          staple: false,
          calories: 789,
          protein: 0,
          carb: 0,
          fat: 10
        });

};

module.exports = initDatabase;



