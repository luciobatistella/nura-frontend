import React from 'react';
import { Box, Grid } from '@mui/material';
import Layout from '../components/Layout';
import ServiceForm from '../components/ServiceForm';
import ServiceSummary from '../components/ServiceSummary';

const Services = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <ServiceForm />
        </Grid>
        <Grid item xs={12} md={3}>
          <ServiceSummary />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Services;
