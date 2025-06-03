const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Import the database connection function
const shopRoutes = require('./routes/shopRoutes'); // Import shop routes
const purchaseHistoryRoutes = require('./routes/purchaseHistoryRoutes'); // Import purchase history routes

// Load environment variabless
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB.
connectDB(); // Use the custom `connectDB` function from './config/db'

// Schema and Model for Images (if required)
const ImageSchema = new mongoose.Schema({
  name: String,
  url: String,
  address: String,
});

const Image = mongoose.model('Image', ImageSchema);

// API Endpoint to Fetch Images
app.get('/api/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routes
app.use('/api/shops', shopRoutes);
app.use('/api/purchase-history', purchaseHistoryRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
