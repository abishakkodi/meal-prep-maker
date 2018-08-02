const _ = require('lodash');
const defaultMacrosPercentages = { p: 50, v: 30, c: 20 };
const defaultMealsPerDay = 3;
const defaultNumberOfDays = 4;

const dailyMealSchedule = (recommendedMeals, calorieRequest, mealsPerDay = defaultMealsPerDay, numberOfDays = defaultNumberOfDays, macros = defaultMacrosPercentages) => {
  let ingredientAmountTotals = {};
  let dailyMealsArray = [];
  const maxMealCalories = calorieRequest / mealsPerDay;
  const calsByMacro = caloriesByMacro(maxMealCalories, macros);

  for (let i = 0; i < numberOfDays; i++) {
    let dailyMeal = dailyMealsObject(recommendedMeals, mealsPerDay, calsByMacro, ingredientAmountTotals);
    dailyMeal.id = i;
    ingredientAmountTotals = dailyMeal.mealTotals;
    dailyMealsArray.push(dailyMeal);
  }

  return ({dailyMealsArray, ingredientAmountTotals});
}

const dailyMealsObject = (recommendedMeals, mealsPerDay, caloriesByMacro, mealTotals) => {
  let dailyMeals = { mealTotals };
  for (let j = 0; j < mealsPerDay; j++) {
    dailyMeals[j] = mealObject(recommendedMeals, caloriesByMacro, mealTotals);
    dailyMeals['mealTotals'] = dailyMeals[j].mealTotals;
  }

  return dailyMeals;
}


//can refactor this later
const mealObject = (recommendedMeals, caloriesByMacro, mealTotals) => {

  let protein = _.sample(recommendedMeals.protein);
  protein.multiplier = parseFloat(caloriesByMacro['p'] * 1.0 / protein.recipe.baseCalories).toFixed(2);
  protein.ingredients.map((ingredient) => {
    ingredient.adjustedAmount = ingredient.amount * protein.multiplier;
    mealTotals = ingredientTotals(mealTotals, ingredient.name, ingredient.adjustedAmount);
  });

  let carb = _.sample(recommendedMeals.carbs);
  carb.multiplier = parseFloat(caloriesByMacro['c'] * 1.0 / carb.recipe.baseCalories).toFixed(2);
  carb.ingredients.map((ingredient) => {
    ingredient.adjustedAmount = ingredient.amount * carb.multiplier;
    mealTotals = ingredientTotals(mealTotals, ingredient.name, ingredient.adjustedAmount);
  });

  let vegetable = _.sample(recommendedMeals.vegetables);
  vegetable.multiplier = parseFloat(caloriesByMacro['v'] * 1.0 / vegetable.recipe.baseCalories).toFixed(2);
  vegetable.ingredients.map((ingredient) => {
    ingredient.adjustedAmount = ingredient.amount * vegetable.multiplier;
    mealTotals = ingredientTotals(mealTotals, ingredient.name, ingredient.adjustedAmount);
  });

  return ({ protein, carb, vegetable, mealTotals })
}

const caloriesByMacro = (maxMealCalories, macros) => ({
  p: macros['p'] * maxMealCalories * 0.01,
  c: macros['c'] * maxMealCalories * 0.01,
  v: macros['v'] * maxMealCalories * 0.01
})

const ingredientTotals = (totalsObj, ingredient, amount) => {
  if (ingredient in totalsObj) {
    totalsObj[ingredient] += amount;
  } else {
    totalsObj[ingredient] = amount;
  }
  return totalsObj;
}

const recipeIngredientTotals = (totalsObj, ingredientsArray) => {};

module.exports = { dailyMealSchedule, dailyMealsObject, mealObject, caloriesByMacro, ingredientTotals };