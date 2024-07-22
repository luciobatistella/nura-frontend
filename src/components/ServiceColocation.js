import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const ServiceColocation = () => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Colocation Service
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Colocation allows you to place your server in our data center.
        </Typography>
        <TextField label="Zipcode or Address" variant="outlined" fullWidth sx={{ mt: 2 }} />
        <Button variant="contained" sx={{ mt: 2 }}>SEND</Button>
      </CardContent>
    </Card>
  );
};

export default ServiceColocation;
