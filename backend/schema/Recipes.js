const mongoose = require('mongoose');
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

module.exports = mongoose.model('Recipe', recipeSchema);
