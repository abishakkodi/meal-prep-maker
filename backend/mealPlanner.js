// algorithm that takes input of of user, return list of meal prep recipes
const Recipes = require('./mysqlDB').Recipes;
const RecipeIngredients = require('./mysqlDB').RecipeIngredients;
const Ingredients = require('./mysqlDB').Ingredients;


const sequelize = require('./mysqlDB').db;

//this is doing too much
//mvp this

let mealPlannerPrefs = {
  breakfast: true,
  breakfastLimit: 'SOME INT',
  lunch: true,
  lunchLimit: 'SOME INT',
  dinner: true,
  dinnerLimit: 'SOME INT'

};

// find meals id
// find ingredients that correspond to meals id
// find ingredients object

const mealPlanner = () => {
  let meals = [];
  const query = 'SELECT * FROM recipes ORDER BY RAND() LIMIT 14';
  sequelize.query( query, { model: Recipes })
  .then((recipes)=> {
    recipes.forEach((recipe)=>{
      meals.push(recipe.dataValues);
    });


  })

  .then(()=>{
    return meals;
  })
  .catch((err)=>{
    console.log(err);
  })
}

module.exports = mealPlanner;

// inputs
// number of meals, hi cal/ low cal , vegetarian, staple preferences
//
let preferences = {
  mealsLimit: 3,
  calorieLimit: 600,
  vegetarian: false,
  staples: ['staple1','staple2','staple3']
};

let constraint = 'some contraint'

const breakfastMeals = (pref) => {
  let query = 'SELECT * FROM recipes WHERE' + contraint + 'ORDER BY RAND() LIMIT ' + pref.mealsLimit;
  // build some sql query that pulls random meals with a limit
  //
}

const lunchMeals = (pref) => {

}

const dinnerMeals = (pref) => {

}