const chai = require('chai');
const should = chai.should();
const { dailyMealSchedule, buildMealObject } = require('../src/Components/CreateMealplanView/dailyMealSchedule');
const recipesObj = require('./fakeRes');
const proteinRecipeObj = recipesObj.protein[0];

