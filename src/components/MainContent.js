import React from 'react';
import { Box, Grid, Toolbar } from '@mui/material';
import ServiceForm from './ServiceForm';
import ServiceSummary from './ServiceSummary';

const MainContent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <ServiceForm />
        </Grid>
        <Grid item xs={12} md={3}>
          <ServiceSummary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
