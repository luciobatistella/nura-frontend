import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const ServiceEPLMetro = () => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          EPL Metro Service
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ethernet Private Line (EPL) is a data service for point-to-point connectivity.
        </Typography>
        <TextField label="Zipcode or Address" variant="outlined" fullWidth sx={{ mt: 2 }} />
        <Button variant="contained" sx={{ mt: 2 }}>SEND</Button>
      </CardContent>
    </Card>
  );
};

export default ServiceEPLMetro;
