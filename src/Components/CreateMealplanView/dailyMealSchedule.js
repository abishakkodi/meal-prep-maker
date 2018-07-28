const _ = require('lodash');

const defaultMacrosPercentages = { p: 50, v: 30, c: 20 };

const dailyMealSchedule = (recommendedMeals, calorieRequest, mealsPerDay = 3, numberOfDays = 4, macros = testMacrosPercentages) => {
    let mealTotals = {};
    let dailyMealsArray = [];
    const maxMealCalories = calorieRequest / mealsPerDay;
    const proteins = recommendedMeals.protein,
        carbs = recommendedMeals.carbs,
        vegetables = recommendedMeals.vegetables;

    for (let i = 0; i < numberOfDays; i++) {


    }


    return dailyMealsArray;
}

const buildMealObject = (recommendedMeals, mealsPerDay, caloriesByMacro) => {
    let dailyMeal = {};
    for (let j = 0; j < mealsPerDay; j++) {
        dailyMeal[j] = {

        };
    }
    return dailyMeal;
}

const buildMeal = (recommendedMeals, caloriesByMacro) => {

}

const caloriesByMacro = (maxMealCalories, macros) => ({
    p: macros['p'] * maxMealCalories * 0.01,
    c: macros['c'] * maxMealCalories * 0.01,
    v: macros['v'] * maxMealCalories * 0.01
  }
)




module.exports = { dailyMealSchedule, buildMealObject, buildMeal, caloriesByMacro };


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



}

1. Figure out how to add all calories together
2. Figure out how to get ingredient amounts linked to calories



*/