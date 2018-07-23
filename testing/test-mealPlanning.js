const chai = require('chai');
const should = chai.should();
const assert = require('assert');
const chaiHttp = require('chai-http');
const { mealRecommendation, selectDifficultyFilter } = require('../src/Components/CreateMealplanView/mealRecommendation');
const recipesObj = require('./fakeRes');
const proteinRecipeObj = recipesObj.protein[0];
chai.use(chaiHttp);


describe('Server should send recipes', () => {
    it('Should receive data from server', () => {
        chai.request('http://localhost:8000')
            .get('/fillRecipesPage')
            .end((err, res) => {
                res.should.be.json;
                done();
            });
    })
})

describe('Fake Data should be in the correct shape', () => {
    it('Should have an array of objects from the protein, vegetables, carbs category', () => {
        recipesObj.protein.should.be.an('array');
        recipesObj.vegetables.should.be.an('array');
        recipesObj.carbs.should.be.an('array');
    });

    it('Should have items in the array', () => {
        recipesObj.protein.length.should.be.above(2);
        recipesObj.vegetables.length.should.be.above(2);
        recipesObj.carbs.length.should.be.above(2);
    })
})



describe('Filter Functions', () => {
    describe('Difficulty Filter', () => {
        it('Should return a function', () => {
            const pref = { difficulty: [1, 2, 3] }
            const returnedFunction = selectDifficultyFilter(pref.difficulty);
            returnedFunction.should.be.a('function');
        });

        it('Should return a function that returns a filter condition based on no difficulty preferences', () => {
            const pref = { difficulty: [] }
            const returnedFunction = selectDifficultyFilter(pref.difficulty);
            const filtered = returnedFunction();
            filtered.should.equal(true);
        });

        it('Should return a function that returns a filter condition based on hard difficulty preferences', () => {
            const pref = { difficulty: [3] }
            const returnedFunction = selectDifficultyFilter(pref.difficulty);
            const filtered = returnedFunction();
            filtered.should.equal(true);
        });

        it('Should return a function that returns a filter condition based on medium difficulty preferences', () => {
            const pref = { difficulty: [2] }
            const returnedFunction = selectDifficultyFilter(pref.difficulty);
            const filtered = returnedFunction(proteinRecipeObj);
            filtered.should.equal(true);
        });
    })
});

describe('mealRecommendations function', () => {
    it('Should be a function', () => {
        mealRecommendation.should.be.a('function');
    });

    it('Should not be a string', () => {
        mealRecommendation.should.not.be.a('string');
    });

    it('Should return an object with recipes if no preferences given', () => {
        const preferencesObj = {};
        let result = mealRecommendation(preferencesObj, recipesObj);
        result.protein[0].recipe.vegetarian.should.equal(false);
    })


    describe('vegetarian filter', () => {
        it('Should be able to filter all non vegetarian recipes from objects', () => {
            const preferencesObj = { vegetarian: true };
            let result = mealRecommendation(preferencesObj, recipesObj);
            result.protein[0].recipe.vegetarian.should.equal(true);
        })
    })

    describe('difficulty filter', () => {
        it('Should be able to preference specific ingredients from recipes', () => {
            const preferencesObj = { difficulty: [2] };
            let result = mealRecommendation(preferencesObj, recipesObj);
            console.log(result);
        })
    })

})