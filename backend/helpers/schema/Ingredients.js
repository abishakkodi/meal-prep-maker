const mongoose = require('mongoose');
mongoose.Promise = Promise;

const findOrCreate = require('mongoose-findorcreate')

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

ingredientSchema.plugin(findOrCreate);

module.exports = mongoose.model('Ingredient', ingredientSchema);
