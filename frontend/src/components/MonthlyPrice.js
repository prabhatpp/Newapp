import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const MonthlyPrice = () => {
  // Define possible locations and their price multipliers
  const locationPrices = {
    "Delhi-NCR": {
      lunch: 1800,
      dinner: 1800,
      lunchDinner: 3000,
      oneDay: 75
    },
    "Mumbai": {
      lunch: 3000,
      dinner: 3000,
      lunchDinner: 5000,
      oneDay: 100
    },
    "Banglore": {
      lunch: 3500,
      dinner: 3500,
      lunchDinner: 7000,
      oneDay: 120
    }
  };

  // State to track the selected location
  const [selectedLocation, setSelectedLocation] = useState("Delhi-NCR");

  // Function to handle location change
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Get prices for the selected location
  const prices = locationPrices[selectedLocation];
  
  const ownerNumber = '+91 9876543210'; // Replace with the actual owner's number

  const handleLocationSearch = () => {
    window.open('https://www.google.com/maps', '_blank'); // Opens Google Maps for location search
  };

  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Monthly Pricing
      </Typography>

      {/* Location Selector */}
      <FormControl fullWidth sx={{ marginBottom: '2rem' }}>
        <InputLabel>Location</InputLabel>
        <Select
          value={selectedLocation}
          label="Location"
          onChange={handleLocationChange}
        >
          <MenuItem value="Delhi-NCR">Delhi-NCR</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
          <MenuItem value="Banglore">Banglore</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '2rem' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Lunch
              </Typography>
              <Typography variant="body1">Price: ₹{prices.lunch}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Dinner
              </Typography>
              <Typography variant="body1">Price: ₹{prices.dinner}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Lunch + Dinner
              </Typography>
              <Typography variant="body1">Price: ₹{prices.lunchDinner}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                One-Day Price
              </Typography>
              <Typography variant="body1">Price: ₹{prices.oneDay}</Typography>
              <Typography variant="body2" color="text.secondary">
                (Choose either Lunch or Dinner for a single day)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Owner Contact: <a href={`tel:${ownerNumber}`}>{ownerNumber}</a>
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleLocationSearch}
          sx={{ marginTop: '1rem' }}
        >
          Search Location
        </Button>
      </Box>
    </Box>
  );
};

export default MonthlyPrice;
