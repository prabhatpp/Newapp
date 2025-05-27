const express = require('express');
const multer = require('multer');
const path = require('path');
const Shop = require('../models/Shop');

const router = express.Router();

// Set up Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage });

// @route POST /api/shops
// @desc  Add a new shop
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, owner, contact, address } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const newShop = new Shop({
      name,
      owner,
      contact,
      address,
      image: `/uploads/${req.file.filename}` // Save relative image path
    });

    await newShop.save();
    res.status(201).json({ message: 'Shop added successfully', shop: newShop });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// @route GET /api/shops
// @desc  Get all shops
router.get('/', async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

module.exports = router;
