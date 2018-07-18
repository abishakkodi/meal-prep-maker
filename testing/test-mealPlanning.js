const chai = require('chai');
const should = chai.should();
const assert = require('assert');
const chaiHttp = require('chai-http');
const example = 'example';
const mealRecommendation = require('../src/Components/CreateMealplanView/mealRecommendation');
const recipesObj = require('./fakeRes');
chai.use(chaiHttp);

describe('Mocha Should work', ()=>{
  it('Should show example as a string', ()=>{
    example.should.be.a('string');
  });
})

describe('Server should send recipes', ()=>{
  it('Should receive data from server', ()=>{
    chai.request('http://localhost:8000')
    .get('/fillRecipesPage')
    .end((err, res)=>{
      res.should.be.json;
      done();
    });
  })
})

describe('Fake Data should be in the correct shape', ()=> {
  it('Should have an array of objects from the protein, vegetables, carbs category', ()=>{
    recipesObj.protein.should.be.an('array');
    recipesObj.vegetables.should.be.an('array');
    recipesObj.carbs.should.be.an('array');
  });

  it('Should have items in the array', ()=>{
    recipesObj.protein.length.should.be.above(2);
    recipesObj.vegetables.length.should.be.above(2);
    recipesObj.carbs.length.should.be.above(2);
  })
})


describe('mealRecommendations function', ()=>{
  it('Should be a function', ()=>{
    mealRecommendation.should.be.a('function');
  });

  it('Should not be a string', ()=>{
    mealRecommendation.should.not.be.a('string');
  });

  it('Should return an object with recipes if no preferences given', ()=>{
    const preferencesObj = {  };
      let result = mealRecommendation(preferencesObj, recipesObj);
      result.protein[0].recipe.vegetarian.should.equal(false);
  })


  describe('vegetarian filter', ()=>{
    it('Should be able to filter all non vegetarian recipes from objects', ()=>{
      const preferencesObj = { vegetarian: true };
      let result = mealRecommendation(preferencesObj, recipesObj);
      result.protein[0].recipe.vegetarian.should.equal(true);
    })
  })

})
