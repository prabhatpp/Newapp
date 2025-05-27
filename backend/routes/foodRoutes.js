const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// Fetch all food items
router.get('/', async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new food item
router.post('/', async (req, res) => {
  const { name, type, price, description } = req.body;

  try {
    const newFoodItem = new FoodItem({ name, type, price, description });
    await newFoodItem.save();
    res.status(201).json(newFoodItem);
  } catch (err) {
    res.status(400).json({ message: 'Error adding food item' });
  }
});

module.exports = router;
