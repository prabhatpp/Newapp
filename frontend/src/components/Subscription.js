import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscription = async () => {
    if (!email || !plan) {
      setMessage('Please enter your email and select a plan.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/subscribe', {
        email,
        plan,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Subscription failed. Please try again.');
    }
  };

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ padding: 4 }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" gutterBottom>
          Subscribe to a Plan
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ margin: '1rem 0' }}>
          <Typography variant="h6">Select a Plan:</Typography>
          <Button variant={plan === 'lunch' ? 'contained' : 'outlined'} onClick={() => setPlan('lunch')}>
            Lunch - ₹3000/month
          </Button>
          <Button variant={plan === 'dinner' ? 'contained' : 'outlined'} onClick={() => setPlan('dinner')}>
            Dinner - ₹1800/month
          </Button>
          <Button variant={plan === 'lunch+dinner' ? 'contained' : 'outlined'} onClick={() => setPlan('lunch+dinner')}>
            Lunch + Dinner - ₹5000/month
          </Button>
          <Button variant={plan === 'onetime' ? 'contained' : 'outlined'} onClick={() => setPlan('onetime')}>
            One Day - ₹70
          </Button>
        </div>
        <Button variant="contained" color="primary" fullWidth onClick={handleSubscription}>
          Subscribe
        </Button>
        {message && (
          <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
            {message}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Subscription;
