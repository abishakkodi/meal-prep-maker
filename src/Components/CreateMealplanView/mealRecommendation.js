const _ = require('lodash');

const mealRecommendation = (preferencesObj, recipesObj) => {

    let recommendations = recipesObj;

    if (preferencesObj.vegetarian) {
        recommendations = filtered(recommendations, vegetarianFilter);
    }

    if (preferencesObj.difficulty) {
        const difficultyFilter = selectDifficultyFilter(preferencesObj.difficulty);
        recommendations = filtered(recommendations, difficultyFilter)
    }

    return recommendations;
}


//this function filters the recipe object and returns the recipes
const filtered = (recipesObj, filterFunc) => {
    let filteredRecipes = { protein: [], vegetables: [], carbs: [] };
    filteredRecipes.protein = recipesObj.protein.filter((recipe => {
        return filterFunc(recipe);
    }));
    filteredRecipes.vegetables = recipesObj.vegetables.filter((recipe => {
        return filterFunc(recipe);
    }));
    filteredRecipes.carbs = recipesObj.carbs.filter((recipe => {
        return filterFunc(recipe);
    }));

    return filteredRecipes;
}


const vegetarianFilter = (recipeObject) => {
    if (recipeObject.recipe.vegetarian) {
        return true;
    } else {
        return false
    }
}

const selectDifficultyFilter = (preferenceDifficultyArray) => {
    if (preferenceDifficultyArray.includes(3) || preferenceDifficultyArray.length === 0) {
        return (recipeObject => {
            return true;
        })
    } else if (preferenceDifficultyArray.includes(2)) {
        return (recipesObject => {
            if (recipesObject.recipe.difficulty <= 2) {
                return true
            } else {
                return false
            }
        })
    } else if (preferenceDifficultyArray[0] === 1) {
        return (recipeObj => {
            if (recipeObj.recipe.difficulty === 1) {
                return true
            } else {
                return false
            }
        })
    }
}

const selectIngredientsFilter = (ingredientsPreferencesArray) => {
    return (recipeObj => {
        if(ingredientsPreferencesArray.length === 0) {
          return true;
        }

        const hasIngredient = recipeObj.ingredients.filter(ingredient => ingredientsPreferencesArray.includes(ingredient.name));
        if (hasIngredient.length) {
            return true
        } else {
            return false
        }
    });
}




module.exports = { mealRecommendation, selectDifficultyFilter, selectIngredientsFilter };