const _ = require('lodash');
const Connection = require('../postgresDB.js');
const Op = Connection.Op;

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

// const getInstructions = (instructionsPromise, object) => {
//     let steps = [];
//     instructionsPromise
//         .getInstructions()
//         .then((instructionsArray) => {
//           return Promise.all(instructionsArray.map((item) => {
//                   steps.push(item.dataValues);
//               }))
//         })
//         .then(()=>{
//             object.instructions = steps;
//         })
//         .catch((err) => (console.log('error', err)));
// }

console.log('\n\n\n');

async function readWithPreferences(req, res){
    // const exclude = vegetarianQuery(exampleReq);
    // ProteinRecipe.findAll(exclude).then(recipes => {
    //         return Promise.all(recipes.map((recipe) => {
    //                 let recipeObj = { info: recipe.dataValues, id: recipe.dataValues.id };
    //                 recipeObj.ingredients = [];

    //                 return recipe.getIngredients().then((ingredients) => {
    //                         recipeObj.ingredients = ingredients.map(i => i.dataValues);
    //                 return recipeObj;
    //                     }).then(recipeObj=>{
    //                       return recipe.getInstructions()
    //                       .then(instructions=> {
    //                         recipeObj.instructions = instructions.map(i => i.dataValues);
    //                         return recipeObj;
    //                       })
    //                     })
    //             }))
    //       })
    //       .then((completeResponseObj) => {
    //           let responseObj = {};
    //           responseObj.proteinRecipes = completeResponseObj;
    //       });
    const proteinRecipes = await findProteinRecipes();
    const vegetableRecipe = await findProteinRecipes();
    const carbRecipe = await findProteinRecipes();
    let responseObj = {protein: proteinRecipes };
    res.status(200).send(responseObj);
}

const findProteinRecipes = (pref) => {
    const ingredientExclude = {attributes: { exclude: ['createdAt', 'updatedAt'] }};
    const proteinInstructionsExclude = {attributes: { exclude: ['createdAt', 'updatedAt', 'carbRecipeId','vegetableRecipeId'] }};
    const exclude = vegetarianQuery(exampleReq);
     return ProteinRecipe.findAll(exclude).then(recipes => {
            return Promise.all(recipes.map((recipe) => {
                    let recipeObj = { info: recipe.dataValues, id: recipe.dataValues.id };
                    recipeObj.ingredients = [];
                    return recipe.getIngredients(ingredientExclude).then((ingredients) => {
                            recipeObj.ingredients = ingredients.map(i => i.dataValues);
                    return recipeObj;
                        }).then(recipeObj=>{
                          return recipe.getInstructions(proteinInstructionsExclude)
                          .then(instructions=> {
                            recipeObj.instructions = instructions.map(i => i.dataValues);
                            return recipeObj;
                          })
                        })
                }))
          })
     .then((completeResponseObj) => {
             return completeResponseObj;
          });
}

// const readWithPreferences = (req, res) => {
//   ProteinRecipe.findAll().then(recipes => {
//     return Promise.all(recipes.map(recipe => {
//       let recipeObj = { info: recipe.dataValues }
//       return recipe.getIngredients()
//       .then(ingredients => {
//         recipeObj.instructions = ingredients.map(i => i.dataValues)
//         // now, return the whole recipe obj:
//         return recipeObj
//       })
//     }))
//   })
//   .then(data => {
//     res.status(200).send({ data })
//   })
// }




module.exports = readWithPreferences;