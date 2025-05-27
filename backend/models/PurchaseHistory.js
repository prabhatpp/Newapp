const mongoose = require('mongoose');

const purchaseHistorySchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itemName: { type: String, required: true },
  itemPrice: { type: Number, required: true },
  purchasedAt: { type: Date, default: Date.now },
});

const PurchaseHistory = mongoose.model('PurchaseHistory', purchaseHistorySchema);

module.exports = PurchaseHistory;
