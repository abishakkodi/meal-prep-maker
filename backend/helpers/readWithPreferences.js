const _ = require('lodash');
var Connection = require('../postgresDB.js');

const { proteinRecipe: ProteinRecipe,
        instruction: Instruction,
        ingredient: Ingredient,
        carbRecipe: CarbRecipe,
        vegetableRecipe: VegetableRecipe } = Connection.models;

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

const getInstructions = (instructionsPromise, object) => {
    let steps = [];
    instructionsPromise
        .getInstructions()
        .then((instructionsArray) => {
          return Promise.all(instructionsArray.map((item) => {
                  steps.push(item.dataValues);
              }))
        })
        .then(()=>{
            object.instructions = steps;
        })
        .catch((err) => (console.log('error', err)));
}

console.log('\n\n\n');

const readWithPreferences = (req, res) => {
          const exclude = vegetarianQuery(exampleReq);
    /*
      - get recipes


    */
    ProteinRecipe.findAll(exclude)
      .then((recipes) => {
         return Promise.all(recipes.map((recipe) => {
                      let recipeObj = {};
                      recipeObj.info = recipe.dataValues;
                      recipeObj.id = recipe.dataValues.id;
                      recipeObj.recipe = recipe;
                    return recipeObj;
                  })
          ).then((data)=>{
            console.log(data);
            return data;
          })
        .then((completeResponseObj) => {
            res.status(200).send(completeResponseObj);
        })
      });
}
// var arr = [
//   {subarr: [1,2,3]},
//   {subarr: [4,5,6]},
//   {subarr: [7,8,9]}
// ];
// function processAsync(n) {
//   return new Promise(function(resolve) {
//     setTimeout(
//       function() { resolve(n * n); },
//       Math.random() * 1e3
//     );
//   });
// }
// Promise.all(arr.map(function(entity){
//   return Promise.all(entity.subarr.map(function(item){
//     return processAsync(item);
//   }));
// })).then(function(data) {
//   console.log(data);
// });



module.exports = readWithPreferences;