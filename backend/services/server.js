// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path'); // ✅ Missing earlier
const connectDB = require('./config/db'); // Import DB connection
const shopRoutes = require('./routes/shopRoutes');
const purchaseHistoryRoutes = require('./routes/purchaseHistoryRoutes');

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// ✅ CORS middleware — allow frontend (React) in dev
app.use(cors({
  origin: 'http://localhost:3000', // React dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Schema & Model for Images
const ImageSchema = new mongoose.Schema({
  name: String,
  url: String,
  address: String,
});

const Image = mongoose.model('Image', ImageSchema);

// API endpoint to fetch images
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

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
