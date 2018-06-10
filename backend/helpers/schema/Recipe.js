const mongoose = require('mongoose');
mongoose.Promise = Promise;

const findOrCreate = require('mongoose-findorcreate')

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  totalCarbs: Number,
  totalFats: Number,
  totalCalories: Number,
  totalProteins: Number,
  vegetarian: Boolean,
  ingredients: [{ingredientID: String}],
  steps: [{step: String, order: Number}]
});

recipeSchema.plugin(findOrCreate);

module.exports = mongoose.model('Recipe', recipeSchema);

