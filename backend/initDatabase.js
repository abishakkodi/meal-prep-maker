const Recipe = require('./helpers/schema/Recipe');

const initialRecipes = [
  {
  name: 'RecipeA',
  totalCarbs: 100,
  totalFats: 100,
  totalCalories: 100,
  totalProteins: 100,
  vegetarian: true,
  ingredients: [{ingredientID: 'someId'}],
  steps: [{step: 'someInstruction', order: 0}]
},
{
  name: 'RecipeB',
  totalCarbs: 200,
  totalFats: 200,
  totalCalories: 200,
  totalProteins: 200,
  vegetarian: true,
  ingredients: [{ingredientID: 'someId'}],
  steps: [{step: 'someInstruction', order: 0}]
},
{
  name: 'RecipeC',
  totalCarbs: 300,
  totalFats: 300,
  totalCalories: 300,
  totalProteins: 300,
  vegetarian: false,
  ingredients: [{ingredientID: 'someId'}],
  steps: [{step: 'someInstruction', order: 0}]
},
{
  name: 'RecipeD',
  totalCarbs: 400,
  totalFats: 400,
  totalCalories: 400,
  totalProteins: 400,
  vegetarian: false,
  ingredients: [{ingredientID: 'someId'}],
  steps: [{step: 'someInstruction', order: 0}]
}
];

const seedRecipes = () =>{
  let created = false;
  initialRecipes.forEach((recipe)=>{
  Recipe.findOrCreate(recipe)

  .then((recipe)=>{
    if(recipe.created){
      created = true;
      console.log('CREATED!');
      console.log(recipe.doc)
    }
  })

  .catch((err)=>{
    console.log('Error initializing recipes', err);
  })
});

if(!created){
  console.log('No new documents created');
}

};


module.exports = seedRecipes;





// const mySQLdb = require('./mysqlDB.js');
// const sequelize = mySQLdb.db;
// const createIngredient = require('./helpers/createIngredient');
// const createStaple = require('./helpers/createStaple');
// const createRecipe = require('./helpers/createRecipe');

// const initDatabase = () => {
//   createIngredient({
//           name: 'Chicken',
//           vegetarian: false,
//           staple: false,
//           calories: 123,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Steak',
//           vegetarian: false,
//           staple: false,
//           calories: 145,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Broccoli',
//           vegetarian: true,
//           staple: false,
//           calories: 111,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Beans',
//           vegetarian: true,
//           staple: false,
//           calories: 116,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Tilapia',
//           vegetarian: false,
//           staple: false,
//           calories: 515,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Rice',
//           vegetarian: true,
//           staple: false,
//           calories: 313,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Corn',
//           vegetarian: true,
//           staple: false,
//           calories: 434,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Carrots',
//           vegetarian: true,
//           staple: false,
//           calories: 678,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Peas',
//           vegetarian: true,
//           staple: false,
//           calories: 456,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Potatoes',
//           vegetarian: true,
//           staple: false,
//           calories: 546,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Eggs',
//           vegetarian: true,
//           staple: false,
//           calories: 345,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });
//   createIngredient({
//           name: 'Bread',
//           vegetarian: true,
//           staple: false,
//           calories: 789,
//           protein: 0,
//           carb: 0,
//           fat: 10
//         });

// };

// module.exports = initDatabase;



