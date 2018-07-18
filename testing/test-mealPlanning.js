const chai = require('chai');
const should = chai.should();
const assert = require('assert');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const example = 'example';
const mealRecommendation = require('../src/Components/CreateMealplanView/mealRecommendation');

describe('Mocha Should work', ()=>{
  it('Should show example as a string', ()=>{
    example.should.be.a('string');
  });
})

describe('mealRecommendations function', ()=>{
  it('Should be a function', ()=>{
    mealRecommendation.should.be.a('function');
  });

  it('Should not be a string', ()=>{
    mealRecommendation.should.not.be.a('string');
  });
})
