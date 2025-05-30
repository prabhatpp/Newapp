const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  shopName: { type: String, required: true },
  location: { type: String, required: true },
  registeredAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Partner', partnerSchema);
