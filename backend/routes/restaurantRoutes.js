const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// GET route to search for restaurants by location or dish name
router.get('/search', async (req, res) => {
  const { location, dish } = req.query;

  if (!location && !dish) {
    return res.status(400).json({ message: 'Please provide location or dish name for search' });
  }

  try {
    const query = {};

    // Add location filter
    if (location) {
      query['location.city'] = { $regex: location, $options: 'i' }; // Case-insensitive search
    }

    // Add dish filter
    if (dish) {
      query['tiffinItems.name'] = { $regex: dish, $options: 'i' }; // Case-insensitive search
    }

    const restaurants = await Restaurant.find(query);
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST route to add a new restaurant
router.post('/add', async (req, res) => {
  const { name, contactNo, location, dishes } = req.body;

  // Validate required fields
  if (!name || !contactNo || !location || !dishes) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create new restaurant document
    const newRestaurant = new Restaurant({
      name,
      contactNo,
      location,
      dishes,
    });

    // Save the restaurant to the database
    await newRestaurant.save();
    res.status(201).json({ message: 'Restaurant added successfully!', restaurant: newRestaurant });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
