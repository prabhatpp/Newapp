const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  location: { type: String, required: true },
  dishes: [{ name: String, description: String, price: Number }], // Dishes can have name, description, price
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
