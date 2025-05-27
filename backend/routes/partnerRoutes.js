const express = require('express');
const router = express.Router();
const Partner = require('../models/Partner'); // Partner model

// POST route to register a new partner
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, shopName, location } = req.body;

    // Validate input
    if (!name || !email || !phone || !shopName || !location) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if partner already exists
    const existingPartner = await Partner.findOne({ email });
    if (existingPartner) {
      return res.status(400).json({ message: 'Partner already registered' });
    }

    // Create new partner
    const partner = new Partner({ name, email, phone, shopName, location });
    await partner.save();

    res.status(201).json({ message: 'Partner registered successfully', partner });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
