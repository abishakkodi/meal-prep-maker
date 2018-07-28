const _ = require('lodash');

const defaultMacrosPercentages = { p: 50, v: 30, c: 20 };

const dailyMealSchedule = (recommendedMeals, calorieRequest, mealsPerDay = 3, numberOfDays = 4, macros = testMacrosPercentages) => {
    let mealTotals = {};
    let dailyMealsArray = [];
    const maxMealCalories = calorieRequest / mealsPerDay;
    const calsByMacro = caloriesByMacro(maxMealCalories, macros);

    for (let i = 0; i < numberOfDays; i++) {
      dailyMealsArray.push(dailyMealsObject(recommendedMeals, mealsPerDay, calsByMacro))
    }

    return dailyMealsArray;
}

const dailyMealsObject = (recommendedMeals, mealsPerDay, caloriesByMacro) => {
    let dailyMeal = {};
    for (let j = 0; j < mealsPerDay; j++) {
        dailyMeal[j] = buildMeal(recommendedMeals, caloriesByMacro);
    }
    return dailyMeal;
}

const buildMeal = (recommendedMeals, caloriesByMacro) => {

    let protein = _.sample(recommendedMeals.protein);
    protein.multiplier = parseFloat(caloriesByMacro['p'] * 1.0 / protein.recipe.baseCalories).toFixed(2);

    let carb = _.sample(recommendedMeals.carbs);
    carb.multiplier = parseFloat(caloriesByMacro['c'] * 1.0 / carb.recipe.baseCalories).toFixed(2);
    let vegetable = _.sample(recommendedMeals.vegetables);
    vegetable.multiplier = parseFloat(caloriesByMacro['v'] * 1.0 / vegetable.recipe.baseCalories).toFixed(2);

    return ({ protein, carb, vegetable })
}

const caloriesByMacro = (maxMealCalories, macros) => ({
    p: macros['p'] * maxMealCalories * 0.01,
    c: macros['c'] * maxMealCalories * 0.01,
    v: macros['v'] * maxMealCalories * 0.01
})

const ingredientTotals = (totalsObj, ingredient, amount) => {
  if(ingredient in totalsObj) {
    totalsObj[ingredient] +=  amount;
  } else {
    totalsObj[ingredient] = amount;
  }


  return totalsObj;
}

module.exports = { dailyMealSchedule, dailyMealsObject, buildMeal, caloriesByMacro,ingredientTotals };


/*
macro ratios?
protein 50%
vegetables 30%
carbs 20%

Have an object array to push ingredients in
{
  meal1: { vegetableRecipe:
           vegetableRecipe:
           proteinRecipe:
           multiplier:
  }


400 X     250


}

1. Figure out how to add all calories together
2. Figure out how to get ingredient amounts linked to calories



*/