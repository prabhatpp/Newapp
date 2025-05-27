import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {/* About Us Header */}
      <Box textAlign="center" mb={4} sx={{ backgroundColor: '#ffe4e1', padding: '1.5rem', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#d81b60' }}>
          About Us
        </Typography>
        <Typography variant="body1" color="#ad1457">
          Welcome to Tiffin Service, your go-to platform for delicious and wholesome meals delivered straight to your doorstep. 
          We are dedicated to providing quality food with love, ensuring you always have a tasty and healthy option for your busy days.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#ffc1e3', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#880e4f' }}>
                Our Mission
              </Typography>
              <Typography variant="body2" color="#6a1b9a">
                To make meal planning effortless and bring homely, nutritious food to everyone.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#ffc1e3', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#880e4f' }}>
                Our Vision
              </Typography>
              <Typography variant="body2" color="#6a1b9a">
                To become the most loved and trusted meal delivery service across the globe.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#ffc1e3', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#880e4f' }}>
                Why Choose Us
              </Typography>
              <Typography variant="body2" color="#6a1b9a">
                Fresh ingredients, customizable meal plans, and timely delivery — all at an affordable price.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
