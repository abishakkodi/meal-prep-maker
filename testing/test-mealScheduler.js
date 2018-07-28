const chai = require('chai');
const should = chai.should();
const { dailyMealSchedule, buildMealObject, buildMeal, caloriesByMacro } = require('../src/Components/CreateMealplanView/dailyMealSchedule');
const recipesObj = require('./fakeRes');
const proteinRecipeObj = recipesObj.protein[0];

describe('Macros By Calorie Function', ()=>{
  it('Should return object that has the calculated max calories of each recipe', ()=>{
    const testMaxMealCalories = 500;
    const testMacrosPercentages = { p: 50, v:30, c: 20  };
    const testcaloriesByMacro =  caloriesByMacro(testMaxMealCalories, testMacrosPercentages);
    testcaloriesByMacro['p'].should.equal(250);
  })
})