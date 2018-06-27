const Recipe = require('../schema/Recipe');
const _ = require('lodash')

const readRecipes = (req, res) => {
  /*
  If request number is null/blank
  Use 15 as base number of recipes

  */
  let sampleNumber = 15;

  Recipe.find({}, (err, collection )=>{
    if(err){
      console.log(err);
    } else {
        _.sampleSize(collection, )
        res.status(200).send(collection, sampleNumber);
      }
  });


};

module.exports = readRecipes;