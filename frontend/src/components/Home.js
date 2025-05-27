import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchDishes from '../components/SearchDishes';
import '../styles/pages/Home.css';
import tiffinImage1 from '../assets/tiffin-service.jpg';
import tiffinImage2 from '../assets/tiffin-service1.jpg';
import { Dialog, DialogContent, TextField, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

// ✅ Log images to ensure they are correctly imported
console.log('Tiffin Image 1:', tiffinImage1);
console.log('Tiffin Image 2:', tiffinImage2);

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [shops, setShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Fetch shops from API (Replace with actual API endpoint)
  useEffect(() => {
    axios.get('http://localhost:5000/api/shops') // Update with your backend API URL
      .then(response => {
        console.log('API Response:', response.data); // ✅ Debugging
        setShops(response.data);
      })
      .catch(error => console.error('Error fetching shops:', error));
  }, []);

  // ✅ Open image popup
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // ✅ Close image popup
  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="home-container">
      <h1>Welcome to Tiffin Service</h1>
      <p>Find the best tiffin services in your area!</p>

      {/* 🔍 Search Component */}
      <SearchDishes />

      {/* 🖼️ Clickable Images */}
      <img 
        src={tiffinImage1} 
        alt="Tiffin Service" 
        className="home-image" 
        onClick={() => handleImageClick(tiffinImage1)} 
        style={{ cursor: 'pointer' }} 
      />
      <img 
        src={tiffinImage2} 
        alt="Tiffin Service" 
        className="home-image" 
        onClick={() => handleImageClick(tiffinImage2)} 
        style={{ cursor: 'pointer' }} 
      />

      {/* 🖼️ Image Popup (Dialog) */}
      <Dialog open={Boolean(selectedImage)} onClose={handleClose} maxWidth="md">
        <DialogContent>
          {selectedImage && (
            <img src={selectedImage} alt="Enlarged Tiffin Service" style={{ width: '100%', height: 'auto' }} />
          )}
        </DialogContent>
      </Dialog>

      {/* 🔎 Search Bar for Shops */}
      <TextField
        label="Search for Shops"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />

      {/* 🏪 Shop List */}
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {shops
          .filter(shop => shop.name.toLowerCase().includes(searchTerm))
          .map((shop) => (
            <Grid item xs={12} sm={6} md={4} key={shop.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="150"
                  image={shop.image ? `http://localhost:5000${shop.image}` : tiffinImage1} // ✅ Fix missing image
                  alt={shop.name}
                  onError={(e) => { e.target.src = tiffinImage1; }} // ✅ Handle broken images
                />
                <CardContent>
                  <Typography variant="h6">{shop.name}</Typography>
                  <Typography variant="body2"><strong>Owner:</strong> {shop.owner}</Typography>
                  <Typography variant="body2"><strong>Contact:</strong> {shop.contact}</Typography>
                  <Typography variant="body2"><strong>Address:</strong> {shop.address}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Home;
