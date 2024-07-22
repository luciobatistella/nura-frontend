import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const ServiceEPLData = () => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          EPL Data Service
        </Typography>
        <Typography variant="body2" color="text.secondary">
          EPL Data services offer high-speed data transmission.
        </Typography>
        <TextField label="Zipcode or Address" variant="outlined" fullWidth sx={{ mt: 2 }} />
        <Button variant="contained" sx={{ mt: 2 }}>SEND</Button>
      </CardContent>
    </Card>
  );
};

export default ServiceEPLData;
