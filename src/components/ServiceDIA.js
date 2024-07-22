import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const ServiceDIA = () => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          DIA Service
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dedicated Internet Access (DIA) provides a direct connection to the internet with guaranteed bandwidth.
        </Typography>
        <TextField label="Zipcode or Address" variant="outlined" fullWidth sx={{ mt: 2 }} />
        <Button variant="contained" sx={{ mt: 2 }}>SEND</Button>
      </CardContent>
    </Card>
  );
};

export default ServiceDIA;
