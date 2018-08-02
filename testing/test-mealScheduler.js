const chai = require('chai');
const should = chai.should();
const { dailyMealSchedule, dailyMealsObject, mealObject, caloriesByMacro, ingredientTotals } = require('../src/Components/CreateMealplanView/dailyMealSchedule');
const recipesObj = require('./fakeRes');
const proteinRecipeObj = recipesObj.protein[0];
const testMaxMealCalories = 500;
const defaultMealsPerDay = 3;
const defaultNumberOfDays = 4;
const testMacrosPercentages = { p: 50, v: 30, c: 20 };
const calorieRequest = 1800;


describe('Calories By Macro Function', () => {
  it('Should return object that has the calculated max calories of each recipe', () => {
    const testcaloriesByMacro = caloriesByMacro(testMaxMealCalories, testMacrosPercentages);
    testcaloriesByMacro['p'].should.equal(250);
  })
})

describe('Ingredient Totals Function', () => {
  it('Should return object with a new property if it does not exist', () => {
    let testObj = {};
    const returnObj = ingredientTotals(testObj, 'anIngredient', 10);
    returnObj.anIngredient.should.equal(10);
  });

  it('Should return object with an updated value property if the property exists', () => {
    let testObj = { anIngredient: 10 };
    const returnObj = ingredientTotals(testObj, 'anIngredient', 10);
    returnObj.anIngredient.should.equal(20);
  })


})

describe('Build Meal Object Function', () => {
  const testcaloriesByMacro = caloriesByMacro(testMaxMealCalories, testMacrosPercentages);
  const testMealObj = mealObject(recipesObj, testcaloriesByMacro, {});

  it('Should return object ', () => {
    testMealObj.should.be.an('object')
  });

  it('Should return object with a protein property', () => {
    testMealObj.should.have.property('protein')
  });
  it('Should return object with a vegetable property', () => {
    testMealObj.should.have.property('vegetable')
  });
  it('Should return object with a carb property', () => {
    testMealObj.should.have.property('carb')
  });
  it('Should return object with a mealTotals property', () => {
    testMealObj.should.have.property('mealTotals')
  });

})

describe('Daily Meals Object Function', () => {
  const testcaloriesByMacro = caloriesByMacro(testMaxMealCalories, testMacrosPercentages);
  const testDailyMeals = dailyMealsObject(recipesObj, defaultMealsPerDay, testcaloriesByMacro, {});
  it('Should return object', () => {
    testDailyMeals.should.be.an('object');
  })

  it('Should return with number of keys equaling days + 1', () => {
    Object.keys(testDailyMeals).length === 4;
  })

  for (let i = 0; i < defaultMealsPerDay; i++) {
    it(`Should have property ${i+1} out of ${defaultMealsPerDay}`, () => {
      testDailyMeals.should.have.property(i);
    })

    it(`Meal number ${i}, Should have a nested protein, carb, vegetable and mealTotals property`, () => {
      testDailyMeals[i].should.have.property('protein')
      testDailyMeals[i].should.have.property('carb')
      testDailyMeals[i].should.have.property('vegetable')
      testDailyMeals[i].should.have.property('mealTotals')
    })
  }

  it('Should return object with a mealTotals property', () => {
    testDailyMeals.should.have.property('mealTotals')
  });
})

describe('Build Schedule Object Function', () => {

    const testDailyMealSchedule = dailyMealSchedule(recipesObj,calorieRequest);

    if('Should return an object',()=>{
      testDailyMealSchedule.should.be.an('object')
    })

})