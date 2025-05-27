const express = require('express');
const PurchaseHistory = require('../models/PurchaseHistory');
const router = express.Router();

// Fetch purchase history of a user
router.get('/:customerId', async (req, res) => {
  try {
    const purchaseHistory = await PurchaseHistory.find({ customerId: req.params.customerId });
    res.json(purchaseHistory);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching purchase history' });
  }
});

module.exports = router;
