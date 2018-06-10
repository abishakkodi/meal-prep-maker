const Recipe = require('../schema/Recipe');

const readRecipes = (req, res) => {
  let result;
  Recipe.find({}, (err, collection )=>{
    result = collection;
    console.log(JSON.stringify(collection));
  });

  if(!result){
    result = 'No data';
  }
  res.status(200).send(JSON.stringify(result));
};

module.exports = readRecipes;