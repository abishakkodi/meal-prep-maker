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

const vegetarianQuery = (request) => {
    //let exclusionObj = {attributes: { exclude: null}};
    return (request.vegetarian ? { where: { vegetarian: true } } : {});
}

console.log('\n\n\n');

async function readWithPreferences(req, res) {
    const proteinRecipes = await findProteinRecipes();
    const vegetableRecipes = await findVegetableRecipes();
    const carbRecipes = await findCarbRecipes();
    let responseObj = { protein: proteinRecipes, vegetable: vegetableRecipes, carb: carbRecipes };
    res.status(200).send(responseObj);
}

const findProteinRecipes = (pref) => {
    const filter = { attributes: { exclude: ['createdAt', 'updatedAt','carbRecipeId', 'vegetableRecipeId']}}
    const ingredientExclude = { attributes: { exclude: ['createdAt', 'updatedAt'] } };
    const proteinInstructionsExclude = { attributes: { exclude: ['createdAt', 'updatedAt', 'carbRecipeId', 'vegetableRecipeId'] } };
    return ProteinRecipe.findAll(filter).then(recipes => {
            return Promise.all(recipes.map((recipe) => {
                let recipeObj = { info: recipe.dataValues };
                recipeObj.ingredients = [];
                return recipe.getIngredients(ingredientExclude).then((ingredients) => {
                    recipeObj.ingredients = ingredients.map(i => i.dataValues);
                    return recipeObj;
                }).then(recipeObj => {
                    return recipe.getInstructions(proteinInstructionsExclude)
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
    const ingredientExclude = { attributes: { exclude: ['createdAt', 'updatedAt', 'proteinRecipeId', 'vegetableRecipeId'] } };
    const carbInstructionsExclude = { attributes: { exclude: ['createdAt', 'updatedAt', 'proteinRecipeId', 'vegetableRecipeId'] } };
    const filter = { attributes: { exclude: ['createdAt', 'updatedAt','proteinRecipeId', 'vegetableRecipeId']}}
    return CarbRecipe.findAll(filter).then(recipes => {
            return Promise.all(recipes.map((recipe) => {
                let recipeObj = { info: recipe.dataValues };
                recipeObj.ingredients = [];
                return recipe.getIngredients(ingredientExclude).then((ingredients) => {
                    recipeObj.ingredients = ingredients.map(i => i.dataValues);
                    return recipeObj;
                }).then(recipeObj => {
                    return recipe.getInstructions(carbInstructionsExclude)
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
    const ingredientExclude = { attributes: { exclude: ['createdAt', 'updatedAt', 'carbRecipeId', 'proteinRecipeId'] } };
    const vegetableInstructionsExclude = { attributes: { exclude: ['createdAt', 'updatedAt', 'carbRecipeId', 'proteinRecipeId'] } };
    const filter = { attributes: { exclude: ['createdAt', 'updatedAt', 'carbRecipeId', 'proteinRecipeId']}}

    return VegetableRecipe.findAll(filter).then(recipes => {
            return Promise.all(recipes.map((recipe) => {
                let recipeObj = { info: recipe.dataValues };
                recipeObj.ingredients = [];
                return recipe.getIngredients(ingredientExclude).then((ingredients) => {
                    recipeObj.ingredients = ingredients.map(i => i.dataValues);
                    return recipeObj;
                }).then(recipeObj => {
                    return recipe.getInstructions(vegetableInstructionsExclude)
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