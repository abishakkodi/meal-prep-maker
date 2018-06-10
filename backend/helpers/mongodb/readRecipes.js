const Recipe = require('../schema/Recipe');

const readRecipes = (req, res) => {
  Recipe.find({}, (err, collection )=>{
    if(err){
      console.log(err);
    } else {
        res.status(200).send(collection);
      }
  });


};

module.exports = readRecipes;