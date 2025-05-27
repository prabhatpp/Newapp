import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const Home = () => {
  const services = [
    {
      id: 1,
      name: 'Veg Tiffin',
      image: '/images/veg_tiffin.jpg', // Local image path
      description: 'Delicious and healthy Veg Tiffin.',
    },
  ];

  return (
    <Box sx={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ffe4e4' }}>
      {/* Welcome Section */}
      <Box
        sx={{
          padding: '2rem',
          backgroundColor: '#ffc1e3', 
          borderRadius: '8px',
          marginBottom: '2rem',
          boxShadow: '0px 4px 10px rgba(240, 230, 116, 0.1)',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: '#d81b61' }}>
          Welcome to Tiffin Service
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Your daily meal partner for healthy and delicious food.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ marginTop: '1rem' }}>
          For assistance, call us at: <strong>+91 12345 67890</strong>
        </Typography>
      </Box>

      {/* Services Section */}
      <Typography variant="h4" gutterBottom sx={{ color: '#ad1457' }}>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card sx={{ backgroundColor: '#f8bbd0', borderRadius: '8px' }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#880e4f' }}>
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
