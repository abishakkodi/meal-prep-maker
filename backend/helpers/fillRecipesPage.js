const _ = require('lodash');
const Connection = require('../postgresDB.js');
const Op = Connection.Op;
const testRes = {response: '...fetching recipes'};

const {
    proteinRecipe: ProteinRecipe,
    instruction: Instruction,
    ingredient: Ingredient,
    carbRecipe: CarbRecipe,
    vegetableRecipe: VegetableRecipe
} = Connection.models;

const vegetableFilter = { attributes: { exclude: ['createdAt', 'updatedAt', 'carbRecipeId', 'proteinRecipeId']}}
const proteinFilter   = { attributes: { exclude: ['createdAt', 'updatedAt', 'carbRecipeId', 'vegetableRecipeId']}}
const carbFilter      = { attributes: { exclude: ['createdAt', 'updatedAt', 'proteinRecipeId', 'vegetableRecipeId']}};

async function fillRecipesPage(req, res){
  const proteinRecipes = await findRecipe(ProteinRecipe, null, proteinFilter);
    const vegetableRecipes = await findRecipe(VegetableRecipe, null, vegetableFilter);
    const carbRecipes = await findRecipe(CarbRecipe, null, carbFilter);

  const responseObj = {
    protein: proteinRecipes,
    vegetables: vegetableRecipes,
    carbs: carbRecipes
  }

  res.status(200).send(responseObj);
}


const findRecipe = (model, pref, filter) => {
  return model.findAll(filter).then(recipes => {
            return Promise.all(recipes.map((recipe) => {
                let recipeObj = { recipe: recipe.dataValues };
                recipeObj.ingredients = [];
                return recipe.getIngredients(filter).then((ingredients) => {
                    recipeObj.ingredients = ingredients.map(i => i.dataValues);
                    return recipeObj;
                }).then(recipeObj => {
                    return recipe.getInstructions(filter)
                        .then(instructions => {
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

module.exports = fillRecipesPage;