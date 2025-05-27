const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Ensure this file exists and is properly configured
const shopRoutes = require('./routes/shopRoutes'); // Ensure this file exists and is properly configured
const partnerRoutes = require('./routes/partnerRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');

// Load environment variables
require('dotenv').config();

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

const path = require('path');



// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(bodyParser.json()); // For legacy body parsing
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/shops', shopRoutes); // Route for shop-related operations

// Subscription route
const subscriptions = [];
app.post('/subscribe', (req, res) => {
  const { email, plan } = req.body;

  if (!email || !plan) {
    return res.status(400).json({ message: 'Email and plan are required.' });
  }

  subscriptions.push({ email, plan });
  console.log(`Subscription added: ${email} - ${plan}`);
  res.json({ message: `Successfully subscribed to the ${plan} plan.` });
});

// Port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
