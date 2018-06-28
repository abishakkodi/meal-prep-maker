const _ = require('lodash');
var Connection = require('../postgresDB.js');

const { proteinRecipe: ProteinRecipe, instruction: Instruction, ingredient: Ingredient } = Connection.models;

const exampleReq = {
  vegetarian: false,
  days: 5,
  mealsPerDay: 2,
  preference: ['chicken', 'steak', 'eggs', 'green beans'],
  calories: 1500
};

const vegetarianQuery = (request) => {
  //let exclusionObj = {attributes: { exclude: null}};
  return (request.vegetarian? {where: { vegetarian: true}}: {});
}

const readWithPreferences = (req, res) => {
  let initial = [];
  let proteinArray = [];
  const exclude = vegetarianQuery(exampleReq);

  ProteinRecipe.findAll(exclude).then((recipes)=>{
    recipes.forEach((recipe)=>{
      proteinArray.push(recipe.dataValues);
    })
    res.status(200).send(proteinArray);
  })
}

module.exports = readWithPreferences;