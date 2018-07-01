const _ = require('lodash');
const Connection = require('../postgresDB.js');
const Op = Connection.Op;

const {
    proteinRecipe: ProteinRecipe,
    instruction: Instruction,
    ingredient: Ingredient,
    carbRecipe: CarbRecipe,
    vegetableRecipe: VegetableRecipe
} = Connection.models;

const exampleReq = {
    vegetarian: false,
    days: 5,
    mealsPerDay: 2,
    preference: ['chicken', 'steak', 'eggs', 'green beans'],
    calories: 1500
};

const vegetableFilter = { attributes: { exclude: ['createdAt', 'updatedAt', 'carbRecipeId', 'proteinRecipeId']}}
const proteinFilter = { attributes: { exclude: ['createdAt', 'updatedAt','carbRecipeId', 'vegetableRecipeId']}}
const carbFilter = { attributes: { exclude: ['createdAt', 'updatedAt', 'proteinRecipeId', 'vegetableRecipeId']}};


const vegetarianQuery = (request) => {
    //let exclusionObj = {attributes: { exclude: null}};
    return (request.vegetarian ? { where: { vegetarian: true } } : {});
}

console.log('\n\n\n');

async function readWithPreferences(req, res) {
    const proteinRecipes = await findRecipe(ProteinRecipe, null, proteinFilter);
    //const proteinRecipes = await findProteinRecipes();
    const vegetableRecipes = await findRecipe(VegetableRecipe, null, vegetableFilter);
    const carbRecipes = await findRecipe(CarbRecipe, null, carbFilter);
    let responseObj = { protein: proteinRecipes, vegetable: vegetableRecipes, carb: carbRecipes
    };
    res.status(200).send(responseObj);
}

const findRecipe = (model, pref, filter) => {
  return model.findAll(filter).then(recipes => {
            return Promise.all(recipes.map((recipe) => {
                let recipeObj = { info: recipe.dataValues };
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

const findProteinRecipes = (pref) => {
    return ProteinRecipe.findAll(proteinFilter).then(recipes => {
            return Promise.all(recipes.map((recipe) => {
                let recipeObj = { info: recipe.dataValues };
                recipeObj.ingredients = [];
                return recipe.getIngredients(proteinFilter).then((ingredients) => {
                    recipeObj.ingredients = ingredients.map(i => i.dataValues);
                    return recipeObj;
                }).then(recipeObj => {
                    return recipe.getInstructions(proteinFilter)
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


const findCarbRecipes = (pref) => {
    return CarbRecipe.findAll(carbFilter).then(recipes => {
            return Promise.all(recipes.map((recipe) => {
                let recipeObj = { info: recipe.dataValues };
                recipeObj.ingredients = [];
                return recipe.getIngredients(carbFilter).then((ingredients) => {
                    recipeObj.ingredients = ingredients.map(i => i.dataValues);
                    return recipeObj;
                }).then(recipeObj => {
                    return recipe.getInstructions(carbFilter)
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

const findVegetableRecipes = (pref) => {

    return VegetableRecipe.findAll(vegetableFilter).then(recipes => {
            return Promise.all(recipes.map((recipe) => {
                let recipeObj = { info: recipe.dataValues };
                recipeObj.ingredients = [];
                return recipe.getIngredients(vegetableFilter).then((ingredients) => {
                    recipeObj.ingredients = ingredients.map(i => i.dataValues);
                    return recipeObj;
                }).then(recipeObj => {
                    return recipe.getInstructions(vegetableFilter)
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




module.exports = readWithPreferences;