import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const ServiceAntiDDoS = () => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Anti-DDoS Service
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Anti-DDoS protects against distributed denial of service attacks.
        </Typography>
        <TextField label="Zipcode or Address" variant="outlined" fullWidth sx={{ mt: 2 }} />
        <Button variant="contained" sx={{ mt: 2 }}>SEND</Button>
      </CardContent>
    </Card>
  );
};

export default ServiceAntiDDoS;
