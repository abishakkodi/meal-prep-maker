const chai = require('chai');
const should = chai.should();
const { dailyMealSchedule, dailyMealsObject, buildMeal, caloriesByMacro, ingredientTotals } = require('../src/Components/CreateMealplanView/dailyMealSchedule');
const recipesObj = require('./fakeRes');
const proteinRecipeObj = recipesObj.protein[0];
const testMaxMealCalories = 500;
const testMacrosPercentages = { p: 50, v:30, c: 20  };


describe('Ingredient Totals Function', ()=>{
  it('Should return object with a new property if it doesn not exist', ()=>{
    let testObj = {};
    const returnObj = ingredientTotals(testObj, 'anIngredient', 10);
    returnObj.anIngredient.should.equal(10);
  });

  it('Should return object with an updated value property if the property exists', ()=>{
    let testObj = { anIngredient: 10};
    const returnObj = ingredientTotals(testObj, 'anIngredient', 10);
    returnObj.anIngredient.should.equal(20);
  })


})

describe('Macros By Calorie Function', ()=>{
  it('Should return object that has the calculated max calories of each recipe', ()=>{
    const testcaloriesByMacro =  caloriesByMacro(testMaxMealCalories, testMacrosPercentages);
    testcaloriesByMacro['p'].should.equal(250);
  })
})

describe('Build Meal Function', ()=>{
  it('Should return object that has a meal based on calories ', ()=>{
    const testcaloriesByMacro =  caloriesByMacro(testMaxMealCalories, testMacrosPercentages);
    const testMealObj = buildMeal(recipesObj, testcaloriesByMacro);
  })
})

describe('Daily Meals Object Function', ()=>{
  it('Should return object that has ', ()=>{
    const testcaloriesByMacro =  caloriesByMacro(testMaxMealCalories, testMacrosPercentages);
    testcaloriesByMacro['p'].should.equal(250);
  })
})