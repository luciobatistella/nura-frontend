import React, { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import PersonalDataMini from '../components/PersonalDataMini';
import ProjectsUser from '../components/ProjectsUser';
import ServicesDashboard from '../components/ServicesDashboard';

const Dashboard = () => {
  const userName = "John Doe"; // Substitute with actual user name

  useEffect(() => {
    document.body.style.backgroundColor = '#F8F7FA';
  }, []);

  return (
      <Container  sx={{ width: '100%', mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={8}>
            <ProjectsUser userName={userName} />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <PersonalDataMini />
          </Grid>
          <Grid item xs={12} sx={{ padding: '20px 0px 20px 0px', marginBottom: '0px' }}>
            <ServicesDashboard />
          </Grid>
        </Grid>
      </Container>
  );
};

export default Dashboard;
