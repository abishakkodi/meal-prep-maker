const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: String,
  carb: Number,
  fat: Number,
  calories: Number,
  protein: Number,
  vegetarian: Boolean,
  image: String
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
