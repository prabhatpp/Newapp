import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const Login = () => {
  const [step, setStep] = useState(1); // Step 1: Enter Mobile, Step 2: Enter OTP
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState(''); // Simulated OTP

  // Handle mobile number input
  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  // Simulate sending OTP
  const sendOtp = () => {
    if (mobileNumber.length === 10) {
      const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP
      setSentOtp(generatedOtp);
      alert(`OTP sent to ${mobileNumber}: ${generatedOtp}`); // Simulate sending OTP
      setStep(2); // Move to OTP entry step
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  // Handle OTP input
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Verify OTP
  const verifyOtp = () => {
    if (otp === sentOtp) {
      alert('Login Successful!');
      // Redirect to the next page or perform other login actions
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      {step === 1 && (
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              value={mobileNumber}
              onChange={handleMobileChange}
              placeholder="Enter your 10-digit mobile number"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={sendOtp}
              sx={{ marginTop: '1rem' }}
            >
              Send OTP
            </Button>
          </Grid>
        </Grid>
      )}
      {step === 2 && (
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Enter OTP"
              variant="outlined"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter the OTP sent to your mobile"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={verifyOtp}
              sx={{ marginTop: '1rem' }}
            >
              Verify OTP
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Login;
