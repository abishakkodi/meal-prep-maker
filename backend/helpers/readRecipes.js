const Recipes = require('../mysqlDB.js').Recipes;
const sequelize = require('../mysqlDB.js').db;


const readRecipes = (req) =>{
  let query = 'SELECT * FROM recipes ORDER BY RAND() LIMIT 10'


sequelize.query( query , {model: Recipes})
.then((recipes)=> {
  recipes.forEach((recipe)=>{
    console.log(recipe.dataValues)
  })
})
.catch((err)=> {
  console.log(err)
});

}

module.exports = readRecipes;