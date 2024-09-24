import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Tabs, Tab, Box, Card } from '@mui/material';
import Payments from '../components/Payments'; // Import the Payments component
import Signature from '../components/Signature'; // Import the Signature component

const FinancialHistory = () => {
  const [tabValue, setTabValue] = useState(0); // State to control the selected tab

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Set background color on component mount
  useEffect(() => {
    document.body.style.backgroundColor = '#F8F7FA';
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            FINANCIAL HISTORY
          </Typography>
          {/* Subtitle */}
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Here, you will find a detailed and comprehensive record of all our financial activities over the years.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={9}>

          {/* Tabs */}
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Payments" />
              <Tab label="Signatures" />
            </Tabs>
          </Box>
          <Card sx={{ p: 5, mb: 10 }}>
            {/* Render Payments or Signature component based on selected tab */}
            {tabValue === 0 && <Payments />}
            {tabValue === 1 && <Signature />}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinancialHistory;
