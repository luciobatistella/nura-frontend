import React, { useEffect } from 'react';
import { Grid, Card, CardContent } from '@mui/material';
import PersonalData from '../components/PersonalData';
import ProjectsUser from '../components/ProjectsUser';
import ServicesDashboard from '../components/ServicesDashboard';

const Dashboard = () => {
  const userName = "John Doe"; // Substitute with actual user name

  useEffect(() => {
    document.body.style.backgroundColor = '#F8F7FA';
  }, []);

  return (
      <CardContent sx={{ padding: '20px 30px 0px 30px', marginBottom: '0px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={8}>
            <ProjectsUser userName={userName} />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <PersonalData />
          </Grid>
          <Grid item xs={12}>
            <ServicesDashboard />
          </Grid>
        </Grid>
      </CardContent>
  );
};

export default Dashboard;
