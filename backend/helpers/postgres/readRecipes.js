const Recipes = require('../postgresDB.js').Recipes;
const sequelize = require('../mysqlDB.js').db;

// randomly reads 10 recipes stored in DB
// possibly store in local state/redux state?


module.exports = readRecipes;