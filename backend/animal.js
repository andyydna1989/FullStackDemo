const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
  id: String,
  name: String,
})

module.exports = mongoose.model('Animal', animalSchema);
