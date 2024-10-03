import React from 'react';
import { Container, Grid, Typography, Tabs, Tab, Box, Card } from '@mui/material';
import Password from '../components/Password'; 
const ChangePass = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Change Password
          </Typography>
          {/* Subtitle */}
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Change your passaword
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={9}>
          <Card sx={{ p: 5, mb: 10 }}>
            <Password />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChangePass;
