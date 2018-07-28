const  _ =require('lodash');

const dailyMealSchedule = (recommendedMeals, calorieRequest, mealsPerDay = 3, numberOfDays = 4) => {
    let dailyMealsArray = [];
    const maxMealCalories = calorieRequest / mealsPerDay;
    const proteins = recommendedMeals.protein, carbs = recommendedMeals.carbs, vegetables = recommendedMeals.vegetables;

    for (let i = 0; i < numberOfDays; i++) {


    }


    return dailyMealsArray;
}

const buildMealObject = (recommendedMeals, mealsPerDay, maxMealCalories) => {
    let dailyMeal = {};
    for (let j = 0; j < mealsPerDay; j++) {
        dailyMeal[j] = {

        };
    }
    return dailyMeal;
}

module.exports = { dailyMealSchedule, buildMealObject };


/*
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